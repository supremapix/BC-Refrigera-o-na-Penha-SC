import React from 'react';
import {ArrowUpRight, Phone} from 'lucide-react';
import {companyData} from '../data/siteData';
export const HeroTypewriter=()=> <div className="bc-hero-copy"><p className="bc-eyebrow">PENHA E REGIÃO · SANTA CATARINA</p><h1>Refrigeração que acompanha <span>o seu ritmo.</span></h1><p>Conserto de container reefer, ar-condicionado, lava e seca e refrigeração comercial. Encontre o serviço que precisa e converse diretamente com a BC.</p><div className="bc-hero-actions"><a href={companyData.whatsapp} target="_blank" rel="noopener noreferrer">Solicitar atendimento <ArrowUpRight size={21}/></a><a href={companyData.phoneLink}><Phone size={19}/>{companyData.phone}</a></div><a className="bc-explore" href="#services-grid-section">Explore nossos serviços ↓</a></div>;
