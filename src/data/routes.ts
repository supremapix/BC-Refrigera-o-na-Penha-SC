// routes.ts - Dynamic Route Mappings for BC Refrigeração
import { bairrosPenha, cidadesAtendidas, servicesData } from './siteData';

export interface RouteConfig {
  path: string;
  name: string;
  priority: number;
  changefreq: 'daily' | 'weekly' | 'monthly';
}

export const staticRoutes: RouteConfig[] = [
  { path: '/', name: 'Início', priority: 1.0, changefreq: 'daily' },
  { path: '/contato', name: 'Contato e Orçamentos', priority: 0.9, changefreq: 'monthly' }
];

export const serviceRoutes: RouteConfig[] = servicesData.map(service => ({
  path: `/servicos/${service.slug}`,
  name: service.title,
  priority: 0.9,
  changefreq: 'weekly'
}));

export const bairroRoutes: RouteConfig[] = bairrosPenha.map(bairro => ({
  path: `/refrigeracao/penha/${bairro.slug}`,
  name: `Refrigeração no Bairro ${bairro.name}`,
  priority: 0.7,
  changefreq: 'weekly'
}));

export const cidadeRoutes: RouteConfig[] = cidadesAtendidas.map(cidade => ({
  path: `/refrigeracao/${cidade.slug}`,
  name: `Refrigeração em ${cidade.name}`,
  priority: 0.8,
  changefreq: 'weekly'
}));

export const allRoutesConfigs: RouteConfig[] = [
  ...staticRoutes,
  ...serviceRoutes,
  ...bairroRoutes,
  ...cidadeRoutes
];

export const allRoutePaths: string[] = allRoutesConfigs.map(r => r.path);
