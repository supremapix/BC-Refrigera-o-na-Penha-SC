// prerender.ts - Static HTML pre-renderer, sitemap generator, and robots configuration
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { companyData, servicesData, bairrosPenha, cidadesAtendidas } from '../src/data/siteData';
import { allRoutesConfigs } from '../src/data/routes';

// Derive __dirname for ES Modules compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.join(process.cwd(), 'dist');
const TEMPLATE_PATH = path.join(DIST_DIR, 'index.html');

console.log('🏁 Iniciando o compilador de SEO estático e sitemap para BC Refrigeração...');

if (!fs.existsSync(TEMPLATE_PATH)) {
  console.error(`❌ Erro crítico: O arquivo de template '${TEMPLATE_PATH}' não foi encontrado. Certifique-se de executar 'npm run build' primeiro.`);
  process.exit(1);
}

const htmlTemplate = fs.readFileSync(TEMPLATE_PATH, 'utf-8');

// 1. Compile custom static HTML per route
allRoutesConfigs.forEach((route) => {
  const routePath = route.path;
  
  // Skip wildcards
  if (routePath.includes('*')) return;

  // Determine page meta content programmatically
  let title = '';
  let description = '';
  let schema: any = null;

  if (routePath === '/') {
    title = 'Refrigeração Comercial, Container Reefer e Lava e Seca em Penha SC';
    description = 'BC Refrigeração: Especialista em Conserto de Container Reefer, Máquina Lava e Seca, Ar-Condicionado, Câmara Fria e Geladeiras em Penha e toda SC. Ligue (47) 3305-9452.';
    schema = {
      "@context": "https://schema.org",
      "@type": "HVACBusiness",
      "name": companyData.name,
      "legalName": companyData.legalName,
      "image": "https://www.bcrefrigeracaosc.com.br/bc-logo-refrigeracao%20copy%20copy.png",
      "logo": "https://www.bcrefrigeracaosc.com.br/bc-logo-refrigeracao%20copy%20copy.png",
      "url": "https://www.bcrefrigeracaosc.com.br",
      "telephone": "+554733059452",
      "email": companyData.email,
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": companyData.address,
        "addressLocality": companyData.city,
        "addressRegion": companyData.stateShort,
        "postalCode": companyData.zip,
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": companyData.latitude,
        "longitude": companyData.longitude
      },
      "areaServed": cidadesAtendidas.map(c => ({
        "@type": "City",
        "name": c.name
      }))
    };
  } else if (routePath === '/contato') {
    title = 'Fale Conosco | Contato e Orçamentos Rápidos';
    description = 'Fale com a BC Refrigeração. Ligue para (47) 3305-9452 ou mande um WhatsApp. Atendimento comercial e emergencial 24h em Penha e SC.';
    schema = {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contato BC Refrigeração",
      "description": "Página de contato comercial e orçamento gratuito",
      "publisher": {
        "@type": "HVACBusiness",
        "name": companyData.name,
        "image": "https://www.bcrefrigeracaosc.com.br/bc-logo-refrigeracao%20copy%20copy.png",
        "telephone": "+554733059452"
      }
    };
  } else if (routePath.startsWith('/servicos/')) {
    const slug = routePath.replace('/servicos/', '');
    const s = servicesData.find(item => item.slug === slug);
    if (s) {
      title = `${s.title} em Penha e Região`;
      description = `${s.shortDesc} Atendimento urgente no litoral catarinense com técnicos especialistas. Telefone: (47) 3305-9452.`;
      schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": s.title,
        "description": s.shortDesc,
        "provider": {
          "@type": "HVACBusiness",
          "name": companyData.name,
          "telephone": "+554733059452"
        }
      };
    }
  } else if (routePath.startsWith('/refrigeracao/penha/')) {
    const slug = routePath.replace('/refrigeracao/penha/', '');
    const b = bairrosPenha.find(item => item.slug === slug);
    if (b) {
      title = `Refrigeração em ${b.name} SC | Conserto de Reefer, Ar e Lava e Seca`;
      description = `Assistência técnica de refrigeração e climatização de alto rendimento no bairro ${b.name} de Penha/SC. Suporte emergencial 24 horas via WhatsApp.`;
      schema = {
        "@context": "https://schema.org",
        "@type": "HVACBusiness",
        "name": `BC Refrigeração - Bairro ${b.name}`,
        "telephone": "+554733059452",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Penha",
          "addressRegion": "SC",
          "postalCode": companyData.zip
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": b.latitude,
          "longitude": b.longitude
        }
      };
    }
  } else if (routePath.startsWith('/refrigeracao/')) {
    const slug = routePath.replace('/refrigeracao/', '');
    const c = cidadesAtendidas.find(item => item.slug === slug);
    if (c) {
      title = `Refrigeração em ${c.name} SC | Conserto de Container Reefer e Climatização`;
      description = `Assistência técnica de refrigeração e container reefer em ${c.name}/SC. Reparo de lava e seca, ar-condicionado e câmaras frias. Atendimento ágil.`;
      schema = {
        "@context": "https://schema.org",
        "@type": "HVACBusiness",
        "name": `BC Refrigeração - ${c.name}`,
        "telephone": "+554733059452",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": c.name,
          "addressRegion": "SC"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": c.latitude,
          "longitude": c.longitude
        }
      };
    }
  }

  if (!title) {
    title = 'BC Refrigeração | Penha SC';
    description = 'Refrigeração comercial, container reefer, ar-condicionado, lava e seca e peças para refrigeração em Penha e toda Santa Catarina.';
  }

  // Inject meta tags and schema inside index.html copy
  const canonicalUrl = `https://www.bcrefrigeracaosc.com.br${routePath}`;
  const schemaScript = schema 
    ? `<script type="application/ld+json">${JSON.stringify(schema)}</script>`
    : '';

  const metaHtml = `
    <title>${title} | BC Refrigeração Penha SC</title>
    <meta name="description" content="${description}" />
    <link rel="canonical" href="${canonicalUrl}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:image" content="https://www.bcrefrigeracaosc.com.br/bc-logo-refrigeracao%20copy%20copy.png" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="pt_BR" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="https://www.bcrefrigeracaosc.com.br/bc-logo-refrigeracao%20copy%20copy.png" />
    <meta name="geo.region" content="BR-SC" />
    <meta name="geo.placename" content="Penha, SC, Brasil" />
    ${schemaScript}
  `;

  // Insert our custom tags right before </head>
  let renderedHtml = htmlTemplate.replace('</head>', `${metaHtml}</head>`);

  // Target output filepath inside /dist
  let outputDir = DIST_DIR;
  let outputPath = path.join(DIST_DIR, 'index.html');

  if (routePath !== '/') {
    outputDir = path.join(DIST_DIR, routePath);
    fs.mkdirSync(outputDir, { recursive: true });
    outputPath = path.join(outputDir, 'index.html');
  }

  fs.writeFileSync(outputPath, renderedHtml, 'utf-8');
});

console.log('✅ Páginas HTML individuais pré-renderizadas com sucesso!');

// 2. Generate /dist/sitemap.xml
const todayStr = new Date().toISOString().split('T')[0];
let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

allRoutesConfigs.forEach((route) => {
  if (route.path.includes('*')) return;
  sitemapXml += `
  <url>
    <loc>https://www.bcrefrigeracaosc.com.br${route.path}</loc>
    <lastmod>${todayStr}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority.toFixed(1)}</priority>
  </url>`;
});

sitemapXml += '\n</urlset>';
fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemapXml, 'utf-8');
console.log('✅ Sitemap.xml gerado com sucesso!');

// 3. Generate /dist/robots.txt
const robotsTxt = `User-agent: *
Allow: /

# Custom AI Crawlers
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Bingbot
Allow: /

Sitemap: https://www.bcrefrigeracaosc.com.br/sitemap.xml
`;

fs.writeFileSync(path.join(DIST_DIR, 'robots.txt'), robotsTxt, 'utf-8');
console.log('✅ Robots.txt gerado com sucesso!');

// 4. Generate /dist/llms.txt
const llmsTxt = `# BC REFRIGERAÇÃO

A BC Refrigeração é uma empresa especializada em engenharia térmica e serviços de refrigeração industrial, comercial e residencial, sediada no município de Penha, Santa Catarina.

## Dados Principais da Empresa
- **Nome Oficial**: BC Refrigeração Comercial e Reefer
- **Endereço**: Av. Antônio J. Tavares, 90 — Centro, Penha, Santa Catarina, Brasil — CEP 88385-000
- **Telefone / WhatsApp**: (47) 3305-9452 (tel:+554733059452)
- **E-mail**: contato@bcrefrigeracaosc.com.br
- **Horário**: Segunda a Sexta 08:00 às 18:00, Sábado 08:00 às 12:00. Atendimento de emergências 24 horas via WhatsApp.
- **Fundação**: 2016

## Especialidades e Focos de Atendimento
1. **Conserto e Manutenção de Container Reefer**: Inspeção PTI, reparo de compressores, solução de alarmes de transdutores e frotistas. Atendimento ágil 24 horas.
2. **Conserto de Lava e Seca**: Peças originais, troca de rolamentos mecânicos e desobstrução de dutos térmicos das principais marcas.
3. **Instalação e Higienização de Ar-Condicionado**: Dimensionamento de BTUs, contratos PMOC em conformidade com as normas sanitárias nacionais.
4. **Loja Física de Peças**: Venda de compressores, termostatos digitais, conexões e fluidos refrigerantes ecológicos.
5. **Câmaras Frigoríficas e Expositores**: Montagem de Walk-in Coolers, Beer Caves e manutenção pesada em Chillers de processos industriais.

## Área de Cobertura (Raio de 200 km)
Atendimento rápido abrangendo Penha, Navegantes, Itajaí, Balneário Camboriú, Brusque, Blumenau, Joinville e Grande Florianópolis.
`;

fs.writeFileSync(path.join(DIST_DIR, 'llms.txt'), llmsTxt, 'utf-8');
console.log('✅ LLMs.txt gerado com sucesso!');

console.log('🎉 Todo o processo de SEO e pré-renderização estática foi concluído com sucesso total!');
