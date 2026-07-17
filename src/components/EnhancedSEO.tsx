import React from 'react';
import { Helmet } from 'react-helmet-async';
import { companyData } from '../data/siteData';

interface EnhancedSEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: 'website' | 'article' | 'business.business';
  schema?: Record<string, any> | Record<string, any>[];
  geoPosition?: { lat: number; lng: number };
  geoPlacename?: string;
}

export const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title,
  description,
  canonicalPath = '',
  keywords = [],
  ogImage = 'https://www.bcrefrigeracaosc.com.br/bc-logo-refrigeracao%20copy%20copy.png',
  ogType = 'website',
  schema,
  geoPosition,
  geoPlacename
}) => {
  const fullTitle = title.includes(companyData.name)
    ? title
    : `${title} | ${companyData.name}`;
  const canonicalUrl = `https://www.bcrefrigeracaosc.com.br${canonicalPath}`;
  
  const defaultKeywords = [
    "refrigeração comercial",
    "conserto de container reefer",
    "manutenção de container reefer",
    "assistência técnica reefer penha",
    "conserto de lava e seca penha sc",
    "instalação de ar condicionado penha",
    "loja de peças de refrigeração sc",
    "câmara frigorífica penha",
    "walk in cooler sc",
    "beer cave sc",
    "conserto de geladeira penha",
    "chiller industrial santa catarina",
    "refrigeração industrial"
  ];

  const mergedKeywords = Array.from(new Set([...keywords, ...defaultKeywords]));

  // Base LocalBusiness Schema (HVACBusiness subtype)
  const baseLocalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "name": companyData.name,
    "legalName": companyData.legalName,
    "image": ogImage,
    "logo": ogImage,
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
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "08:00",
        "closes": "12:00"
      }
    ],
    "sameAs": [
      companyData.facebook,
      companyData.instagram
    ]
  };

  // Compile JSON-LD
  const compiledSchemas = [];
  if (schema) {
    if (Array.isArray(schema)) {
      compiledSchemas.push(...schema);
    } else {
      compiledSchemas.push(schema);
    }
  } else {
    compiledSchemas.push(baseLocalBusinessSchema);
  }

  // Location details for geo tags
  const lat = geoPosition ? geoPosition.lat : companyData.latitude;
  const lng = geoPosition ? geoPosition.lng : companyData.longitude;
  const place = geoPlacename ? geoPlacename : `${companyData.city}, ${companyData.state}`;

  return (
    <Helmet>
      {/* Basic elements */}
      <title>{fullTitle}</title>
      <meta name="description" content={description.substring(0, 160)} />
      <meta name="keywords" content={mergedKeywords.join(', ')} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index, follow, max-image-preview:large" />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content={companyData.name} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Geo Tags */}
      <meta name="geo.region" content="BR-SC" />
      <meta name="geo.placename" content={place} />
      <meta name="geo.position" content={`${lat};${lng}`} />
      <meta name="ICBM" content={`${lat}, ${lng}`} />

      {/* Resource Hints (DNS-Prefetch and Preconnect) */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.instagram.com" />
      <link rel="dns-prefetch" href="https://wa.me" />

      {/* JSON-LD Schemas */}
      {compiledSchemas.map((sch, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(sch)}
        </script>
      ))}
    </Helmet>
  );
};
