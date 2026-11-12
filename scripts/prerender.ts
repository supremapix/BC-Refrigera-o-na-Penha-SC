import fs from 'node:fs';
import path from 'node:path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppContent } from '../src/App';
import { allRoutesConfigs } from '../src/data/routes';
const dist = path.resolve('dist');
const template = fs.readFileSync(path.join(dist,'index.html'),'utf8');
for (const route of [...allRoutesConfigs, {path:'/404'}]) {
 const context: any = {};
 let body = renderToString(React.createElement(HelmetProvider,{context},React.createElement(StaticRouter,{location:route.path},React.createElement(AppContent))));
 const tags: string[] = [];
 body = body.replace(/<title[^>]*>[\s\S]*?<\/title>|<meta[^>]*>|<link[^>]*>|<script[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/g, tag => { tags.push(tag); return ''; });
 const head = tags.join('\n');
 const html = template.replace('</head>',head+'\n</head>').replace('<div id="root"></div>', '<div id="root">'+body+'</div>');
 const dest = route.path === '/404' ? path.join(dist,'404.html') : path.join(dist, route.path, 'index.html');
 fs.mkdirSync(path.dirname(dest),{recursive:true});fs.writeFileSync(dest,html);
}
const base='https://www.bcrefrigeracaosc.com.br';
fs.writeFileSync(path.join(dist,'sitemap.xml'),'<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+allRoutesConfigs.map(r=>`<url><loc>${base}${r.path}</loc></url>`).join('')+'</urlset>');
fs.writeFileSync(path.join(dist,'robots.txt'),`User-agent: *\nAllow: /\nSitemap: ${base}/sitemap.xml\n`);
console.log(`Rendered ${allRoutesConfigs.length} pages with content, metadata and structured data.`);
