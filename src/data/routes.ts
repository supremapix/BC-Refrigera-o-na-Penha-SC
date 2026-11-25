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
  { path: '/blog/historia-do-transporte-refrigerado', name: 'História do transporte refrigerado', priority: 0.7, changefreq: 'monthly' },
  { path: '/conserto-lava-e-seca-penha-sc', name: 'Conserto de lava e seca', priority: 0.8, changefreq: 'monthly' },
  { path: '/assistencia-lava-e-seca-lg-penha', name: 'Lava e seca LG', priority: 0.8, changefreq: 'monthly' },
  { path: '/assistencia-lava-e-seca-samsung-penha', name: 'Lava e seca Samsung', priority: 0.8, changefreq: 'monthly' },
  { path: '/blog/lava-e-seca-penha-sc-guia-completo', name: 'Guia lava e seca', priority: 0.8, changefreq: 'monthly' },
  { path: '/maquina-de-gelo-comercial-industrial', name: 'Máquina de gelo', priority: 0.8, changefreq: 'monthly' },
  { path: '/maquina-de-sorvete-comercial-industrial', name: 'Máquina de sorvete', priority: 0.8, changefreq: 'monthly' },
  { path: '/chopeiras', name: 'Chopeiras', priority: 0.8, changefreq: 'monthly' },
  { path: '/sistema-rak', name: 'Sistema RAK', priority: 0.8, changefreq: 'monthly' },
  ...serviceRoutes,
  ...bairroRoutes,
  ...cidadeRoutes
];

export const allRoutePaths: string[] = allRoutesConfigs.map(r => r.path);
