// siteData.ts - Central Data Store for BC Refrigeração
// High-quality, comprehensive content in Portuguese for local SEO, services, and neighborhoods.

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  icon: string;
  shortDesc: string;
  headline: string;
  textVariant1: string;
  textVariant2: string;
  textVariant3: string;
  problemsSolved: string[];
  benefits: string[];
  brands: string[];
  steps: { title: string; desc: string }[];
  faqs: FAQItem[];
}

export interface LocationItem {
  name: string;
  slug: string;
  type: 'bairro' | 'cidade';
  region?: string;
  distanceKm?: number;
  latitude: number;
  longitude: number;
  highlightText?: string;
}

export const companyData = {
  name: "BC Refrigeração",
  legalName: "BC Refrigeração Comercial e Reefer",
  address: "Av. Antônio J. Tavares, 90",
  neighborhood: "Centro",
  city: "Penha",
  state: "Santa Catarina",
  stateShort: "SC",
  country: "Brasil",
  zip: "88385-000",
  phone: "(47) 3305-9452",
  phoneLink: "tel:+554733059452",
  whatsapp: "https://wa.me/554733059452?text=Olá! Vim pelo site e preciso de um orçamento de refrigeração.",
  email: "contato@bcrefrigeracaosc.com.br",
  facebook: "https://www.facebook.com/BCREFRIGERACAOSC/",
  instagram: "https://www.instagram.com/bc.refrigeracaosc/",
  instagramHandle: "@bc.refrigeracaosc",
  latitude: -26.7694,
  longitude: -48.6458,
  hours: "Seg–Sex 08:00–18:00, Sáb 08:00–12:00 (emergências 24h via WhatsApp)",
  since: 2016
};

// 13 Bairros de Penha/SC
export const bairrosPenha: LocationItem[] = [
  { name: "Centro", slug: "centro", type: "bairro", latitude: -26.7694, longitude: -48.6458, highlightText: "Atendimento imediato no núcleo comercial de Penha, com equipe de plantão rápido." },
  { name: "Armação do Itapocorói", slug: "armacao", type: "bairro", latitude: -26.7812, longitude: -48.6189, highlightText: "Serviço ágil na tradicional região histórica e turística da Armação." },
  { name: "Gravatá", slug: "gravata", type: "bairro", latitude: -26.7923, longitude: -48.6251, highlightText: "Manutenção de equipamentos de refrigeração residencial e comercial na Praia do Gravatá." },
  { name: "Praia Alegre", slug: "praia-alegre", type: "bairro", latitude: -26.7602, longitude: -48.6599, highlightText: "Reparos urgentes de ar-condicionado e lava e seca na Praia Alegre." },
  { name: "Praia Grande", slug: "praia-grande", type: "bairro", latitude: -26.7981, longitude: -48.5982, highlightText: "Suporte especializado para comércio local e pousadas na badalada Praia Grande." },
  { name: "São Cristóvão", slug: "sao-cristovao", type: "bairro", latitude: -26.7589, longitude: -48.6321, highlightText: "Instalação profissional e assistência técnica no bairro São Cristóvão." },
  { name: "Santa Lídia", slug: "santa-lidia", type: "bairro", latitude: -26.7825, longitude: -48.6611, highlightText: "Atendimento garantido em Santa Lídia, inclusive fins de semana para refrigeração industrial." },
  { name: "Nossa Senhora de Fátima", slug: "nossa-senhora-de-fatima", type: "bairro", latitude: -26.7725, longitude: -48.6389, highlightText: "Soluções precisas de climatização e conserto de eletrodomésticos neste tradicional bairro." },
  { name: "Praia do Quilombo", slug: "praia-do-quilombo", type: "bairro", latitude: -26.7741, longitude: -48.6295, highlightText: "Assistência qualificada na orla da Praia do Quilombo para condomínios e residências." },
  { name: "Praia Vermelha", slug: "praia-vermelha", type: "bairro", latitude: -26.8115, longitude: -48.5912, highlightText: "Climatização ideal e conservação em áreas residenciais da Praia Vermelha." },
  { name: "Sertãozinho", slug: "sertaozinho", type: "bairro", latitude: -26.7451, longitude: -48.6712, highlightText: "Manutenção industrial e assistência técnica ágil no Sertãozinho de Penha." },
  { name: "Praia da Saudade", slug: "praia-da-saudade", type: "bairro", latitude: -26.7779, longitude: -48.6215, highlightText: "Atendimento domiciliar rápido para refrigeração e máquinas lava e seca na Praia da Saudade." },
  { name: "Ponta da Vigia", slug: "ponta-da-vigia", type: "bairro", latitude: -26.7831, longitude: -48.5999, highlightText: "Serviço diferenciado e especializado na Ponta da Vigia, ponto extremo de Penha." }
];

// Cidades no raio de 200 km (Total: 36 cidades)
export const cidadesAtendidas: LocationItem[] = [
  // Litoral Imediato (10)
  { name: "Balneário Piçarras", slug: "balneario-picarras", type: "cidade", region: "Litoral Imediato", distanceKm: 8, latitude: -26.7644, longitude: -48.6739, highlightText: "Atendimento diário de emergência para comércio, residências e indústria pesqueira em Piçarras." },
  { name: "Navegantes", slug: "navegantes", type: "cidade", region: "Litoral Imediato", distanceKm: 18, latitude: -26.8928, longitude: -48.6508, highlightText: "Foco total no porto e retroporto com manutenção rápida de Containers Reefers 24h em Navegantes." },
  { name: "Itajaí", slug: "itajai", type: "cidade", region: "Litoral Imediato", distanceKm: 25, latitude: -26.9078, longitude: -48.6619, highlightText: "Atuação direta na zona portuária de Itajaí, atendendo frotas de contêineres frios e câmaras frigoríficas." },
  { name: "Balneário Camboriú", slug: "balneario-camboriu", type: "cidade", region: "Litoral Imediato", distanceKm: 35, latitude: -26.9931, longitude: -48.6344, highlightText: "Climatização de alto padrão, VRF e consertos especializados de lava e seca em Balneário Camboriú." },
  { name: "Camboriú", slug: "camboriu", type: "cidade", region: "Litoral Imediato", distanceKm: 38, latitude: -27.0256, longitude: -48.6517, highlightText: "Assistência técnica comercial e residencial eficiente em Camboriú." },
  { name: "Itapema", slug: "itapema", type: "cidade", region: "Litoral Imediato", distanceKm: 48, latitude: -27.0903, longitude: -48.6133, highlightText: "Instalação de ar-condicionado em novos empreendimentos e manutenção rápida de lava e seca em Itapema." },
  { name: "Porto Belo", slug: "porto-belo", type: "cidade", region: "Litoral Imediato", distanceKm: 55, latitude: -27.1578, longitude: -48.5528, highlightText: "Refrigeração naval, comercial e residencial com precisão e garantia em Porto Belo." },
  { name: "Bombinhas", slug: "bombinhas", type: "cidade", region: "Litoral Imediato", distanceKm: 65, latitude: -27.1472, longitude: -48.5161, highlightText: "Manutenção de equipamentos de pousadas e restaurantes durante a alta temporada em Bombinhas." },
  { name: "Barra Velha", slug: "barra-velha", type: "cidade", region: "Litoral Imediato", distanceKm: 20, latitude: -26.6331, longitude: -48.6847, highlightText: "Soluções completas para câmaras frias comerciais e climatização em Barra Velha." },
  { name: "São João do Itaperiú", slug: "sao-joao-do-itaperiu", type: "cidade", region: "Litoral Imediato", distanceKm: 32, latitude: -26.6200, longitude: -48.7656, highlightText: "Serviço focado no agronegócio e refrigeração de laticínios/frios em São João do Itaperiú." },

  // Vale do Itajaí (9)
  { name: "Brusque", slug: "brusque", type: "cidade", region: "Vale do Itajaí", distanceKm: 60, latitude: -27.0978, longitude: -48.9114, highlightText: "Manutenção de refrigeração industrial e sistemas de climatização têxtil em Brusque." },
  { name: "Gaspar", slug: "gaspar", type: "cidade", region: "Vale do Itajaí", distanceKm: 45, latitude: -26.9297, longitude: -48.9658, highlightText: "Assistência de chiller e câmaras frigoríficas industriais em Gaspar." },
  { name: "Ilhota", slug: "ilhota", type: "cidade", region: "Vale do Itajaí", distanceKm: 35, latitude: -26.8978, longitude: -48.8267, highlightText: "Climatização comercial e manutenção rápida de ar-condicionado em Ilhota." },
  { name: "Luiz Alves", slug: "luiz-alves", type: "cidade", region: "Vale do Itajaí", distanceKm: 40, latitude: -26.7214, longitude: -48.9317, highlightText: "Sistemas de resfriamento para indústrias e comércio alimentício em Luiz Alves." },
  { name: "Blumenau", slug: "blumenau", type: "cidade", region: "Vale do Itajaí", distanceKm: 65, latitude: -26.9194, longitude: -49.0661, highlightText: "Atendimento completo para beer caves, chillers industriais e ar-condicionado central em Blumenau." },
  { name: "Pomerode", slug: "pomerode", type: "cidade", region: "Vale do Itajaí", distanceKm: 85, latitude: -26.7403, longitude: -49.1764, highlightText: "Precisão alemã em serviços de refrigeração comercial e Walk-in Coolers em Pomerode." },
  { name: "Indaial", slug: "indaial", type: "cidade", region: "Vale do Itajaí", distanceKm: 80, latitude: -26.8900, longitude: -49.2319, highlightText: "Instalação e limpeza técnica de ar-condicionado comercial e splits em Indaial." },
  { name: "Timbó", slug: "timbo", type: "cidade", region: "Vale do Itajaí", distanceKm: 88, latitude: -26.8231, longitude: -49.2717, highlightText: "Projetos de engenharia térmica e câmaras frigoríficas industriais em Timbó." },
  { name: "Rio do Sul", slug: "rio-do-sul", type: "cidade", region: "Vale do Itajaí", distanceKm: 160, latitude: -27.2139, longitude: -49.6425, highlightText: "Suporte especializado e peças exclusivas para refrigeração industrial em Rio do Sul." },

  // Norte (11)
  { name: "Joinville", slug: "joinville", type: "cidade", region: "Norte", distanceKm: 80, latitude: -26.3044, longitude: -48.8464, highlightText: "Conserto de chillers, frotas de container reefer e ar central em Joinville." },
  { name: "Araquari", slug: "araquari", type: "cidade", region: "Norte", distanceKm: 65, latitude: -26.3719, longitude: -48.7214, highlightText: "Refrigeração industrial e sistemas de climatização para o polo automotivo em Araquari." },
  { name: "Guaramirim", slug: "guaramirim", type: "cidade", region: "Norte", distanceKm: 75, latitude: -26.4719, longitude: -49.0031, highlightText: "Manutenção corretiva de câmaras de congelados de grande escala em Guaramirim." },
  { name: "Jaraguá do Sul", slug: "jaragua-do-sul", type: "cidade", region: "Norte", distanceKm: 85, latitude: -26.4842, longitude: -49.0800, highlightText: "Instalação de chillers, VRF corporativo e manutenção preventiva especializada em Jaraguá." },
  { name: "Schroeder", slug: "schroeder", type: "cidade", region: "Norte", distanceKm: 92, latitude: -26.4114, longitude: -49.0717, highlightText: "Assistência para equipamentos de conservação de alimentos e sorvetes em Schroeder." },
  { name: "Massaranduba", slug: "massaranduba", type: "cidade", region: "Norte", distanceKm: 80, latitude: -26.6114, longitude: -49.0117, highlightText: "Serviço de refrigeração agrícola e câmaras de cura em Massaranduba." },
  { name: "Corupá", slug: "corupa", type: "cidade", region: "Norte", distanceKm: 105, latitude: -26.4256, longitude: -49.2431, highlightText: "Câmaras frigoríficas de maturação de frutas e refrigeração geral em Corupá." },
  { name: "São Francisco do Sul", slug: "sao-francisco-do-sul", type: "cidade", region: "Norte", distanceKm: 95, latitude: -26.2425, longitude: -48.6381, highlightText: "Atendimento prioritário a terminais portuários e retroportuários de Container Reefer em São Chico." },
  { name: "Balneário Barra do Sul", slug: "balneario-barra-do-sul", type: "cidade", region: "Norte", distanceKm: 68, latitude: -26.4556, longitude: -48.6114, highlightText: "Soluções térmicas e congelamento rápido de pescado em Barra do Sul." },
  { name: "Itapoá", slug: "itapoa", type: "cidade", region: "Norte", distanceKm: 130, latitude: -25.9181, longitude: -48.6186, highlightText: "Análise técnica rápida e plantão para contêineres refrigerados no porto de Itapoá." },
  { name: "Garuva", slug: "garuva", type: "cidade", region: "Norte", distanceKm: 110, latitude: -25.9867, longitude: -48.8556, highlightText: "Climatização para galpões logísticos e grandes centros de distribuição em Garuva." },

  // Grande Florianópolis (6)
  { name: "Tijucas", slug: "tijucas", type: "cidade", region: "Grande Florianópolis", distanceKm: 70, latitude: -27.2431, longitude: -48.6347, highlightText: "Atendimento comercial integral, desde gôndolas frias a ar-condicionado em Tijucas." },
  { name: "Governador Celso Ramos", slug: "governador-celso-ramos", type: "cidade", region: "Grande Florianópolis", distanceKm: 85, latitude: -27.3158, longitude: -48.5583, highlightText: "Refrigeração marítima e climatização para pousadas e condomínios de luxo em Gov. Celso Ramos." },
  { name: "Biguaçu", slug: "biguacu", type: "cidade", region: "Grande Florianópolis", distanceKm: 95, latitude: -27.4919, longitude: -48.6539, highlightText: "Sistemas industriais de ar resfriado e conservação alimentícia em Biguaçu." },
  { name: "São José", slug: "sao-jose", type: "cidade", region: "Grande Florianópolis", distanceKm: 110, latitude: -27.6144, longitude: -48.6258, highlightText: "Conserto de chillers, refrigeração comercial de supermercados e frotas de reefer em São José." },
  { name: "Florianópolis", slug: "florianopolis", type: "cidade", region: "Grande Florianópolis", distanceKm: 115, latitude: -27.5954, longitude: -48.5480, highlightText: "Equipes de pronto atendimento na capital para Chillers, Walk-in Coolers e sistemas VRF de climatização." },
  { name: "Palhoça", slug: "palhoca", type: "cidade", region: "Grande Florianópolis", distanceKm: 125, latitude: -27.6433, longitude: -48.6678, highlightText: "Manutenção de climatização de galpões industriais e assistência técnica rápida em Palhoça." }
];

// Combine all for locations
export const allLocations: LocationItem[] = [
  ...bairrosPenha,
  ...cidadesAtendidas
];

// Helper to generate long professional Portuguese SEO text variants
export const textVariants = {
  reeferIntro: [
    "O Container Reefer (contêiner refrigerado) é uma peça vital na cadeia logística de frio, sendo o responsável pelo transporte e armazenamento temporário de cargas altamente perecíveis, alimentos congelados, medicamentos, vacinas e produtos químicos finos. Na BC Refrigeração, entendemos que qualquer variação de temperatura ou falha mecânica nesses módulos pode resultar em perdas financeiras astronômicas para exportadores, importadores e operadores de retroporto. Por isso, oferecemos uma assistência especializada com técnicos certificados, prontos para responder 24 horas por dia em Penha, Navegantes, Itajaí e em todo o litoral catarinense.",
    "Para manter a integridade térmica das mercadorias estocadas ou transportadas, o monitoramento constante e o conserto rápido de Container Reefer são indispensáveis. A BC Refrigeração atua fortemente na área portuária e logística, realizando desde diagnósticos preventivos pré-viagem (PTI - Pre-Trip Inspection) até corretivas emergenciais de alta complexidade. Nossa equipe técnica é especialista em sanar falhas críticas de compressores, controladores microprocessados, vazamentos de fluido refrigerante e erros eletrônicos que acionam os alarmes clássicos do painel. Garantimos agilidade sem igual em um raio de 200 km de nossa sede.",
    "Trabalhar com container frigorificado exige conhecimento técnico profundo de eletricidade industrial, termodinâmica avançada e sistemas eletrônicos das principais marcas globais. Na BC Refrigeração, temos orgulho em sermos reconhecidos como referência no conserto de Container Reefer em Penha/SC e portos adjacentes. Oferecemos diagnósticos rápidos de compressores alternativos e scroll, sensores de temperatura de descarga, transdutores de pressão, microventiladores e placas eletrônicas de controle. Evite o desperdício de carga e garanta o funcionamento estável do seu Reefer contratando uma empresa sólida e com excelente histórico no mercado."
  ],
  lavaSecaIntro: [
    "As lavadoras e secadoras modernas (Lava e Seca) tornaram-se eletrodomésticos essenciais na rotina das famílias, mas por unirem mecânica pesada, hidráulica e placas eletrônicas de alta sensibilidade, necessitam de mão de obra altamente qualificada para qualquer reparo. A BC Refrigeração realiza o conserto de máquinas Lava e Seca em Penha e cidades vizinhas com peças originais e ferramentas avançadas de diagnóstico. Resolvemos problemas comuns como barulho excessivo na centrifugação (troca de rolamentos e retentor), erro de drenagem, falha de aquecimento durante a secagem e panes na placa eletrônica principal.",
    "Sua máquina de lavar e secar parou de funcionar ou está apresentando códigos de erro piscando no visor? Nós podemos ajudar imediatamente. Com vasta experiência nas marcas líderes do mercado nacional, os técnicos da BC Refrigeração realizam uma inspeção minuciosa para consertar seu aparelho no próprio local, evitando remoções desnecessárias que possam arranhar ou danificar o equipamento. Trabalhamos para restaurar a eficiência original de consumo de água e energia da sua Lava e Seca, prolongando a vida útil útil do aparelho.",
    "Um conserto mal executado em uma Lava e Seca pode estragar de vez o sistema elétrico ou causar vazamentos graves que danificam o piso de sua lavanderia. Confie a sua máquina aos profissionais da BC Refrigeração. Nossos especialistas passam por treinamentos contínuos para dominar as tecnologias de motor Direct Drive, sensores de nível de água (pressostatos), bombas de circulação, dutos de secagem entupidos com fiapos e placas inversoras. Entregamos um serviço limpo, rápido, com garantia formal por escrito."
  ],
  arCondicionadoIntro: [
    "A climatização de ambientes residenciais, corporativos e industriais é essencial para o conforto térmico, produtividade e saúde respiratória de todos os ocupantes. A BC Refrigeração projeta, instala e mantém sistemas de ar-condicionado de todos os portes em Penha/SC e região. Nossa atuação abrange desde Splits residenciais tradicionais até sistemas sofisticados como Multi-Splits, Cassetes, Dutos e sistemas VRF comerciais de alta tecnologia. Realizamos a limpeza química completa, que remove ácaros, fungos e bactérias acumulados nas serpentinas e filtros, assegurando um ar puro e redução na conta de luz.",
    "Para obter o melhor rendimento do seu aparelho de ar-condicionado e evitar falhas no ápice do verão catarinense, a manutenção preventiva e a instalação profissional são indispensáveis. Erros graves na instalação, como tubulações com diâmetro incorreto, falta de vácuo no sistema ou conexões frouxas que vazam gás refrigerante, encurtam drasticamente a vida útil do compressor. Na BC Refrigeração, seguimos à risca as normas dos fabricantes e a legislação de qualidade do ar (PMOC), garantindo um serviço impecável para residências, clínicas, lojas e indústrias.",
    "Seja para esfriar sua casa perto da praia em Penha ou climatizar uma grande empresa em Joinville ou Blumenau, nossa equipe técnica está equipada com as melhores bombas de vácuo, manifold digitais e recolhedores de gás do mercado. Diagnosticamos e consertamos ar-condicionado que não gela, que está pingando água para dentro do ambiente, fazendo ruído estrondoso ou desarmando o disjuntor da rede elétrica. Atendemos com pontualidade e transparência absoluta, oferecendo o melhor custo-benefício de Santa Catarina."
  ],
  pecasIntro: [
    "Dispor de peças de alta confiabilidade a pronta entrega é um fator decisivo para que qualquer conserto de refrigeração seja finalizado de forma rápida e segura. A BC Refrigeração conta com uma completa loja física de peças para refrigeração comercial e ar-condicionado em Penha/SC. Fornecemos compressores herméticos, motores ventiladores, gases refrigerantes homologados (R134a, R410a, R22, R404a), termostatos digitais e analógicos, filtros secadores, tubulações de cobre de todas as bitolas, isolamentos térmicos e ferramentas profissionais para refrigeristas parceiros.",
    "Nossa distribuidora de peças de refrigeração atende tanto o cliente final que precisa de um reparo doméstico imediato quanto técnicos autônomos que buscam suprimentos de qualidade para suas rotinas de instalação e assistência. Trabalhamos exclusivamente com as marcas que são sinônimo de durabilidade e eficiência no setor. Se você precisa de reposição para geladeiras, freezers, câmaras frigoríficas, bebedouros ou ar-condicionado, visite nossa loja em Penha e receba uma assessoria técnica especializada na escolha do componente correto para seu equipamento.",
    "A qualidade de uma peça define o sucesso e a durabilidade do conserto. Comprar componentes genéricos de baixa qualidade pode provocar danos em cascata, queimando compressores novos ou gerando vazamentos constantes. Na loja de peças da BC Refrigeração, selecionamos rigorosamente nosso estoque com distribuidores oficiais. Temos controladores de temperatura das melhores marcas nacionais, capacitores de partida, chaves contatoras, relés e ampla gama de conexões. Atendimento balcão prestativo e envio rápido para cidades da região."
  ],
  comercialIntro: [
    "A refrigeração comercial e industrial engloba os sistemas vitais para supermercados, padarias, açougues, hotéis, cervejarias e restaurantes que necessitam preservar grandes volumes de alimentos e bebidas em temperaturas rigorosamente controladas. A BC Refrigeração desenvolve soluções robustas, desde a montagem e isolamento de Câmaras Frigoríficas de congelados e resfriados, instalação de Walk-in Coolers elegantes de alta capacidade, até o conserto e comissionamento de Chillers e Beer Caves. Projetamos e executamos tubulações de alta pressão e sistemas de degelo eficientes.",
    "Falhas em câmaras frigoríficas ou expositores comerciais geram perdas imediatas de estoque e afetam a operação de qualquer negócio alimentício. A BC Refrigeração é especialista no reparo rápido e preventivo de quadros elétricos de comando, compressores semi-herméticos e herméticos, evaporadores de teto e condensadores a ar ou água. Desenvolvemos contratos de manutenção preventiva para comércios locais, garantindo visitas periódicas, limpeza profunda e testes de estanqueidade para eliminar microvazamentos de gás antes que causem a parada total das máquinas.",
    "Trabalhamos com engenharia térmica focada em eficiência energética. Substituímos componentes obsoletos por sistemas modernos de alta performance que reduzem sensivelmente o consumo elétrico mensal do seu comércio. Seja para montar um Walk-in Cooler moderno que facilita a reposição de estoque, estruturar uma Beer Cave para manter cervejas artesanais na temperatura ideal de consumo, ou reparar um Chiller industrial complexo de processos de moldagem, a BC Refrigeração é o seu parceiro estratégico ideal em Santa Catarina."
  ]
};

// 9 Services Configuration with unique detailed content (over 600 words represented per page through rich structured parameters)
export const servicesData: ServiceItem[] = [
  {
    id: "conserto-container-reefer",
    title: "Conserto de Container Reefer",
    slug: "conserto-container-reefer",
    icon: "Container",
    shortDesc: "Assistência técnica especializada, PTI de segurança e reparo 24h de containers refrigerados para portos e retroportos.",
    headline: "Manutenção Especializada de Container Reefer 24 Horas em Penha, Navegantes, Itajaí e Região",
    textVariant1: textVariants.reeferIntro[0],
    textVariant2: textVariants.reeferIntro[1],
    textVariant3: textVariants.reeferIntro[2],
    problemsSolved: [
      "Erros crônicos de leitura de sensores de temperatura (RRS, AMBS, USDA)",
      "Falhas mecânicas no compressor de refrigeração (Scroll ou Recíproco)",
      "Degelo ineficiente por queima de resistências elétricas ou ventilador travado",
      "Perda de rendimento causada por vazamento interno de fluido refrigerante",
      "Códigos de alarme e instabilidade na placa controladora principal (MicroLink)",
      "Sobrecarga de corrente elétrica desarmando disjuntores no terminal ou navio",
      "Vazamentos de óleo no sistema de lubrificação do compressor"
    ],
    benefits: [
      "Atendimento emergencial 24h por WhatsApp para portos e retroportos da região",
      "Realização profissional de Pre-Trip Inspection (PTI) de acordo com padrões globais",
      "Estoque próprio de peças de reposição originais das principais marcas mundiais",
      "Técnicos certificados com treinamento avançado em termodinâmica e comandos elétricos",
      "Redução imediata do risco de perda de cargas perecíveis de alto valor",
      "Garantia de 90 dias em todos os serviços executados com emissão de relatório técnico"
    ],
    brands: ["Carrier Transicold", "Thermo King", "Daikin", "Star Cool", "Mitsubishi Heavy Industries"],
    steps: [
      { title: "Inspeção de Códigos e Diagnóstico", desc: "Acessamos a placa eletrônica controladora para fazer o download do histórico de dados e ler os códigos de erro ativos, localizando o ponto exato da falha física ou eletrônica." },
      { title: "Reparo Mecânico e Teste de Estanqueidade", desc: "Executamos a troca de componentes danificados (compressores, placas, contatores, sensores), realizamos testes rigorosos com nitrogênio para eliminar vazamentos de gás e aplicamos vácuo profissional." },
      { title: "Carga de Fluido e Homologação", desc: "Carregamos o gás refrigerante correto por peso na balança digital e monitoramos o container em regime de funcionamento por várias horas para certificar que ele atinge o setpoint térmico com perfeição." }
    ],
    faqs: [
      { question: "O que é a inspeção PTI em um Container Reefer?", answer: "A PTI (Pre-Trip Inspection) é uma série de testes automáticos e manuais executados no contêiner reefer antes de ele ser carregado com mercadorias. Avalia-se o isolamento físico, a integridade elétrica, o desempenho do compressor e sensores de temperatura para assegurar que a viagem será segura." },
      { question: "Qual o tempo de resposta da BC Refrigeração para atendimentos em portos?", answer: "Para Navegantes, Itajaí e Balneário Piçarras, nosso tempo de resposta em chamados de emergência de container reefer é de até 2 horas. Atendemos portos e pátios logísticos 24 horas por dia, 7 dias por semana." },
      { question: "Vocês realizam o download do histórico de temperaturas do container?", answer: "Sim. Nossos técnicos estão equipados com ferramentas oficiais de leitura para extrair o log de dados térmicos e alarmes das controladoras Carrier, Thermo King, Daikin e Star Cool, gerando relatórios precisos para fins de seguro ou auditoria." },
      { question: "Quais são os alarmes mais comuns em containers reefers?", answer: "Os alarmes mais frequentes estão relacionados a sensores de temperatura desconectados ou queimados (Alarme 51/52), falha de degelo por resistência queimada (Alarme 22) e alta pressão de descarga devido a sujeira no condensador (Alarme 15)." },
      { question: "Vocês atendem containers reefers fora de portos, como em sítios ou indústrias?", answer: "Sim, atendemos dezenas de clientes privados que utilizam containers reefers adaptados como câmaras frias fixas em fazendas, cervejarias, frigoríficos e depósitos de distribuição em todo o estado de Santa Catarina." }
    ]
  },
  {
    id: "conserto-lava-e-seca",
    title: "Conserto de Lava e Seca",
    slug: "conserto-lava-e-seca",
    icon: "WashingMachine",
    shortDesc: "Manutenção corretiva rápida, troca de rolamentos, desentupimento e conserto de placas eletrônicas de Lava e Seca.",
    headline: "Conserto e Manutenção de Máquinas Lava e Seca em Penha e Região",
    textVariant1: textVariants.lavaSecaIntro[0],
    textVariant2: textVariants.lavaSecaIntro[1],
    textVariant3: textVariants.lavaSecaIntro[2],
    problemsSolved: [
      "Barulho ensurdecedor de metal batendo durante o ciclo de centrifugação",
      "A máquina não seca as roupas e sai ar frio do duto de aquecimento",
      "A água não drena ou a máquina não puxa água do encanamento doméstico",
      "A lavadora fica travada em códigos de erro (ex: DE, OE, FE, LE, tE)",
      "O cesto de lavagem não gira, apesar do motor estar fazendo barulho de funcionamento",
      "Vazamentos de água limpa ou com sabão por baixo da lavadora",
      "A máquina não liga ou desliga sozinha no meio do ciclo de lavagem"
    ],
    benefits: [
      "Visita técnica rápida e agendada para realização do conserto no próprio domicílio",
      "Uso exclusivo de rolamentos originais blindados e retentores de alta durabilidade",
      "Técnicos especialistas nas tecnologias mais modernas (Direct Drive e Inverter)",
      "Garantia escrita de 90 dias sobre as peças trocadas e mão de obra de reparo",
      "Excelente custo-benefício comparado com a aquisição de um eletrodoméstico novo",
      "Atendimento humanizado focado em solucionar as dúvidas dos clientes com paciência"
    ],
    brands: ["LG", "Samsung", "Electrolux", "Midea", "Philco", "Brastemp"],
    steps: [
      { title: "Inspeção Geral e Teste de Componentes", desc: "Testamos os componentes principais individualmente através do modo de diagnóstico do painel da máquina, identificando falhas mecânicas, elétricas ou eletrônicas." },
      { title: "Execução do Reparo e Higienização do Duto", desc: "Substituímos as peças desgastadas e aproveitamos para realizar a limpeza profunda do duto de secagem, eliminando fiapos acumulados que provocam superaquecimento e lentidão na secagem." },
      { title: "Calibração e Teste de Ciclo Completo", desc: "Realizamos o ciclo de autoteste e centrifugação máxima para monitorar níveis de vibração, ruído térmico e drenagem de água antes de entregar o eletrodoméstico em perfeitas condições." }
    ],
    faqs: [
      { question: "Por que a minha Lava e Seca faz tanto barulho ao centrifugar?", answer: "O barulho excessivo geralmente indica desgaste nos rolamentos e no retentor do cesto de inox. Quando o retentor permite a passagem de água para os rolamentos de aço, ocorre corrosão rápida, gerando um ruído semelhante a um 'avião decolando'. É necessário fazer a substituição imediata deste conjunto para não danificar o cesto e o motor." },
      { question: "Quanto tempo dura em média o reparo de uma Lava e Seca?", answer: "A maioria dos reparos eletrônicos, troca de bombas de drenagem ou resistências de secagem leva entre 1 e 2 horas e é feita na casa do cliente. A troca de rolamentos mecânicos requer mais tempo, cerca de 3 a 4 horas de trabalho." },
      { question: "Vale a pena consertar a placa eletrônica de uma máquina que não liga?", answer: "Sim, na enorme maioria dos casos o reparo físico da placa principal ou inversora custa menos de 40% do valor de uma placa nova original na caixa, mantendo o perfeito funcionamento e a segurança operacional do aparelho." },
      { question: "Por que as roupas saem quentes porém úmidas no ciclo de secagem?", answer: "Isso normalmente ocorre quando o duto interno de secagem de alumínio ou plástico está entupido de fiapos de roupas ou quando o ventilador condensador de secagem parou de funcionar. O ar quente não circula de forma correta e a umidade não condensa para ser drenada." },
      { question: "Vocês usam peças paralelas ou originais?", answer: "Trabalhamos estritamente com peças originais e de primeira linha fornecidas pelos fabricantes das marcas LG, Samsung e Electrolux, o que garante a máxima confiabilidade física do conserto." }
    ]
  },
  {
    id: "ar-condicionado",
    title: "Ar-Condicionado",
    slug: "ar-condicionado",
    icon: "AirVent",
    shortDesc: "Instalação profissional, higienização de filtros de acordo com normas e manutenção preventiva/corretiva de ar splits.",
    headline: "Instalação e Manutenção de Ar-Condicionado Residencial e Comercial em Penha",
    textVariant1: textVariants.arCondicionadoIntro[0],
    textVariant2: textVariants.arCondicionadoIntro[1],
    textVariant3: textVariants.arCondicionadoIntro[2],
    problemsSolved: [
      "O aparelho sopra vento mas não gela o ambiente de forma satisfatória",
      "Gotejamento constante ou vazamento de água pela unidade evaporadora interna",
      "Mau cheiro desagradável saindo do fluxo de ar ao ligar a máquina",
      "Ruído excessivo na condensadora externa incomodando vizinhos",
      "Aparelho desliga sozinho após alguns minutos de funcionamento repentino",
      "Surgimento de gelo na tubulação de cobre externa ou na serpentina interna",
      "Códigos de falha piscando no painel digital e ar-condicionado inoperante"
    ],
    benefits: [
      "Instalação impecável utilizando tubulação de cobre virgem de alta qualidade",
      "Higienização profunda que remove ácaros e previne problemas respiratórios",
      "Aumento imediato do rendimento térmico com redução do consumo de energia",
      "Carga de gás ecológica R410a/R32 realizada com balança digital de alta precisão",
      "Atendimento a comércios sob a norma de manutenção do PMOC exigida pela Anvisa",
      "Profissionais uniformizados, educados e equipados com aspirador e capas protetoras"
    ],
    brands: ["Split Inverter", "Multi-Split", "Cassete", "VRF", "Springer Midea", "Daikin", "Fujitsu", "LG", "Gree", "Elgin"],
    steps: [
      { title: "Cálculo de Carga Térmica e Locação", desc: "Avaliamos o tamanho do ambiente, incidência de sol e aparelhos eletrônicos para dimensionar os BTUs ideais e escolher a posição ideal das unidades evaporadora e condensadora." },
      { title: "Flangeamento e Instalação Física", desc: "Instalamos as tubulações com isolamento térmico blindado individual, realizamos o flangeamento com ferramentas precisas para evitar vazamentos e criamos o dreno físico de água." },
      { title: "Desidratação com Bomba de Vácuo", desc: "Utilizamos bomba de vácuo profissional de duplo estágio para remover toda a umidade e ar da linha frigorígena, garantindo o rendimento máximo e preservando o compressor." }
    ],
    faqs: [
      { question: "De quanto em quanto tempo devo fazer a limpeza do ar-condicionado?", answer: "Em residências, recomenda-se uma limpeza química completa realizada por profissionais uma vez ao ano. No caso de comércios, escritórios e consultórios com uso diário contínuo, a higienização técnica deve ser feita de 3 em 3 meses para garantir a boa qualidade do ar e cumprir as exigências da Vigilância Sanitária." },
      { question: "Por que o meu ar-condicionado está pingando água para dentro do quarto?", answer: "A pingadeira interna geralmente é causada por obstrução no duto de drenagem por sujeira, lodo ou folhas, ou por erro de inclinação da unidade interna durante a instalação. Também pode ser indício de congelamento na serpentina por falta de gás." },
      { question: "Qual a diferença entre um ar-condicionado comum e um modelo Inverter?", answer: "O ar-condicionado convencional desliga o compressor por completo quando atinge a temperatura e liga de novo na potência máxima quando o calor sobe, gerando picos de consumo de energia. O modelo Inverter mantém o compressor funcionando continuamente em rotação variável, mantendo a temperatura estável e economizando até 60% de energia." },
      { question: "A falta de gás danifica o motor do ar-condicionado?", answer: "Sim. O fluido refrigerante também é responsável por resfriar o próprio motor do compressor. Funcionar o ar-condicionado por longos períodos sem gás causa superaquecimento do enrolamento elétrico interno, o que pode queimar o compressor de vez." },
      { question: "Vocês fornecem contrato de manutenção para empresas (PMOC)?", answer: "Sim! Elaboramos e assinamos o Plano de Manutenção, Operação e Controle (PMOC) para indústrias, comércios, escolas e escritórios de Penha e região, garantindo conformidade com a Lei Federal 13.589/18." }
    ]
  },
  {
    id: "loja-de-pecas",
    title: "Loja de Peças para Refrigeração",
    slug: "loja-de-pecas",
    icon: "ShoppingBag",
    shortDesc: "Venda direta de compressores, controladores, gases refrigerantes e ferramentas profissionais em nosso balcão.",
    headline: "Loja Física de Peças e Suprimentos para Refrigeração e Climatização em Penha",
    textVariant1: textVariants.pecasIntro[0],
    textVariant2: textVariants.pecasIntro[1],
    textVariant3: textVariants.pecasIntro[2],
    problemsSolved: [
      "Falta de peças de reposição rápida para refrigeração comercial na região",
      "Componentes paralelos que queimam logo após a instalação no cliente",
      "Dificuldade em encontrar gases refrigerantes ecológicos homologados e lacrados",
      "Indisponibilidade de ferramentas adequadas para técnicos de climatização locais",
      "Dúvidas sobre compatibilidade de controladores de temperatura e sensores",
      "Atrasos em obras de refrigeração por falta de tubos de cobre e isolantes térmicos",
      "Falta de suporte técnico qualificado no balcão de vendas da loja"
    ],
    benefits: [
      "Grande estoque físico a pronta entrega no centro de Penha/SC com fácil estacionamento",
      "Parceria sólida com as marcas líderes mundiais do mercado de frio",
      "Atendimento técnico especializado que ajuda a encontrar o modelo de peça exato",
      "Garantia de fábrica estendida em compressores herméticos e semicondutores",
      "Preços altamente competitivos no atacado para técnicos parceiros credenciados",
      "Possibilidade de entrega rápida em canteiros de obras de Penha e Piçarras"
    ],
    brands: ["Embraco", "Tecumseh", "Danfoss", "Full Gauge Controls", "Dupont / Chemours", "Elgin", "Fieldpiece", "Suryha"],
    steps: [
      { title: "Identificação Precisa do Componente", desc: "Analisamos o código de fabricação ou a etiqueta técnica da peça queimada para selecionar no sistema o componente idêntico ou substituto ideal homologado." },
      { title: "Separação e Teste Elétrico de Balcão", desc: "Buscamos o produto em nosso estoque organizado e realizamos testes de condutividade ou integridade elétrica na frente do cliente para certificar a qualidade." },
      { title: "Orientações Técnicas de Instalação", desc: "Nossos consultores, com sólida experiência prática de campo, dão dicas preciosas sobre vácuo, troca de filtro secador e uso do gás correto para que seu reparo seja um sucesso definitivo." }
    ],
    faqs: [
      { question: "Quais tipos de gás refrigerante vocês vendem?", answer: "Trabalhamos com uma linha completa de fluidos refrigerantes em garrafas e DACs descartáveis, incluindo os ecológicos R134a, R410a, R404a, R22, R410a, R600a, R290 de marcas consolidadas como Chemours e Freon." },
      { question: "Vocês dão desconto para refrigeristas e empresas de climatização?", answer: "Sim! Temos um programa de cadastro de parceiros para profissionais autônomos e empresas de refrigeração que oferece preços diferenciados, condições de faturamento flexíveis e atendimento prioritário no balcão." },
      { question: "Vocês vendem ferramentas para instalação de ar-condicionado?", answer: "Sim, nossa loja conta com amplo estoque de ferramentas profissionais, como bombas de vácuo, manifolds analógicos e digitais, cortadores de tubo, curvadores, alargadores, balanças digitais e maçaricos de solda portátil." },
      { question: "Se eu comprar um compressor e ele der problema, como funciona a garantia?", answer: "Todos os nossos compressores Embraco, Tecumseh e Elgin possuem garantia de fábrica. Para ter direito a ela, o fabricante exige que a instalação tenha sido feita por um profissional qualificado, com troca obrigatória do filtro secador e vácuo adequado no sistema." },
      { question: "Vocês fazem entregas de peças nas cidades vizinhas?", answer: "Realizamos entregas programadas de peças para empresas parceiras em Balneário Piçarras, Barra Velha e Navegantes. Para outras cidades, despachamos via motoboy ou transportadora expressa." }
    ]
  },
  {
    id: "camara-frigorifica",
    title: "Câmara Frigorífica",
    slug: "camara-frigorifica",
    icon: "Server",
    shortDesc: "Projetos sob medida, montagem de painéis isotérmicos e conserto de câmaras frias de congelados e resfriados.",
    headline: "Projetos, Instalação e Conserto de Câmaras Frigoríficas em Penha e Região",
    textVariant1: textVariants.comercialIntro[0],
    textVariant2: textVariants.comercialIntro[1],
    textVariant3: textVariants.comercialIntro[2],
    problemsSolved: [
      "Câmara frigorífica perdendo temperatura e congelando a serpentina do evaporador",
      "Queima constante do motor compressor por alta pressão de descarga de calor",
      "Vazamentos de frio causados por borrachas de portas rasgadas ou painéis frouxos",
      "Formação severa de gelo no piso da câmara fria de congelamento por dreno entupido",
      "Disparos inexplicáveis dos pressostatos de proteção elétricos no quadro de comando",
      "Ruído metálico no compressor indicando perda de óleo ou desgaste mecânico interno",
      "Pane completa no controlador digital Full Gauge deixando o sistema inoperante"
    ],
    benefits: [
      "Projetos térmicos otimizados calculando exatamente a espessura ideal do PUR/EPS",
      "Montagem rápida utilizando materiais isotérmicos de alto padrão e portas reforçadas",
      "Economia expressiva de energia com ciclo de degelo inteligente programado",
      "Equipe de pronto-atendimento emergencial para evitar a perda de cargas estocadas",
      "Instalação de cortinas de ar e cortinas de PVC flexível para contenção do frio",
      "Emissão de ART de engenharia e relatórios de conformidade técnica para auditoria"
    ],
    brands: ["Bitzer", "Bock", "Elgin", "Embraco", "Danfoss", "Full Gauge", "Carel", "Thermokey", "Mipal"],
    steps: [
      { title: "Dimensionamento Térmico Profissional", desc: "Analisamos o tipo de produto a ser estocado, temperatura de entrada, movimentação diária de carga e dimensões para definir a potência correta em cavalos (HP) do compressor." },
      { title: "Montagem Isotérmica e Tubulações", desc: "Erguemos as paredes com painéis de poliuretano (PUR) de alta densidade, aplicamos silicone antifungo em todas as juntas e instalamos as linhas de cobre isoladas individualmente." },
      { title: "Comissionamento e Teste de Estresse", desc: "Realizamos o superaquecimento e subresfriamento do sistema, programamos os tempos de degelo (degelo elétrico ou a gás quente) e testamos todos os dispositivos de segurança em funcionamento real." }
    ],
    faqs: [
      { question: "Qual a diferença entre uma câmara de resfriados e uma de congelados?", answer: "Câmaras de resfriados operam na faixa de 0°C a 10°C, ideais para laticínios, carnes frescas, frutas, verduras e bebidas. Câmaras de congelados operam abaixo de -18°C, indicadas para estocagem de longa duração de pescados, carnes congeladas, gelo e sorvetes, exigindo painéis isotérmicos mais espessos (geralmente PUR de 100mm ou superior)." },
      { question: "Vocês atendem chamados de urgência de câmara fria no final de semana?", answer: "Sim! Entendemos que uma câmara frigorífica desligada pode causar prejuízos imensos em poucas horas. Mantemos uma equipe de técnicos de plantão exclusivo para atendimentos de emergência 24h, inclusive sábados, domingos e feriados." },
      { question: "Por que a câmara fria acumula tanto gelo na serpentina?", answer: "O acúmulo de gelo excessivo (bloqueio do evaporador) geralmente decorre de falhas nas resistências elétricas de degelo, mau funcionamento do sensor de temperatura de degelo (bimetal), porta aberta por muito tempo sem cortina de PVC ou entupimento na linha do dreno." },
      { question: "Como funciona o contrato de manutenção preventiva para câmaras?", answer: "Nosso contrato prevê visitas mensais agendadas onde checamos as correntes dos motores, pressões do gás, realizamos a limpeza química do condensador para evitar superaquecimento, inspecionamos o óleo do compressor e o funcionamento do degelo, reduzindo em até 85% as paradas inesperadas do sistema." },
      { question: "Qual a durabilidade de uma câmara frigorífica bem mantida?", answer: "Com a manutenção preventiva em dia, os painéis isotérmicos e portas duram mais de 15 anos. Os componentes mecânicos e elétricos (compressores e motores de ventiladores) têm vida útil estimada entre 8 e 12 anos antes de necessitarem de retífica ou troca." }
    ]
  },
  {
    id: "walk-in-cooler",
    title: "Walk in Cooler",
    slug: "walk-in-cooler",
    icon: "LayoutGrid",
    shortDesc: "Montagem de câmaras de autoatendimento com portas de vidro expositoras de alta eficiência para supermercados.",
    headline: "Projetos e Instalação de Walk-in Coolers de Alto Padrão em Penha e SC",
    textVariant1: textVariants.comercialIntro[0],
    textVariant2: textVariants.comercialIntro[1],
    textVariant3: textVariants.comercialIntro[2],
    problemsSolved: [
      "Portas de vidro embaçando constantemente devido a falhas na resistência interna do vidro",
      "Iluminação LED interna piscando ou com pontos de queima estragando a apresentação",
      "Rendimento térmico instável com flutuação de temperatura que estraga laticínios",
      "Prateleiras tortas, oxidadas ou de difícil regulagem de altura para bebidas",
      "Excesso de poeira e fiapos bloqueando o condensador remoto na casa de máquinas",
      "Ruído estridente na área de vendas proveniente dos evaporadores internos da câmara",
      "Infiltração de água condensada na base da câmara estragando o piso comercial"
    ],
    benefits: [
      "Facilidade extrema para reposição de bebidas por trás (conceito First-In, First-Out)",
      "Portas de vidro duplo temperado com gás argônio e resistência anticondensação",
      "Design espetacular com iluminação LED de alta definição valorizando os produtos",
      "Estrutura interna em aço inoxidável ou pintura epóxi altamente resistente à umidade",
      "Redução drástica no consumo elétrico se comparado a vários expositores verticais comuns",
      "Praticidade e conforto térmico absoluto para os clientes que retiram as bebidas frias"
    ],
    brands: ["Anthony", "Eletrofrio", "Mipal", "Full Gauge", "Embraco", "Danfoss", "Carel"],
    steps: [
      { title: "Estudo Arquitetônico e Fachada", desc: "Planejamos o tamanho ideal do Walk-in Cooler na loja, alinhando a quantidade e dimensões das portas de vidro com o fluxo de clientes no estabelecimento." },
      { title: "Instalação da Câmara e Portas Térmicas", desc: "Erguemos a estrutura isotérmica traseira, fixamos os quadros de portas aquecidos anticondensação e ajustamos as prateleiras internas com trilhos deslizantes." },
      { title: "Montagem da Unidade Condensadora Remota", desc: "Instalamos o motor compressor em local externo arejado (casa de máquinas), minimizando o calor e ruído na área de atendimento ao cliente, e interligamos a tubulação frigorífica." }
    ],
    faqs: [
      { question: "O que é um Walk-in Cooler?", answer: "É um sistema híbrido de câmara frigorífica e expositor de bebidas. O cliente visualiza e retira as bebidas geladas através de portas de vidro na área de vendas, enquanto o repositor trabalha dentro da própria câmara, abastecendo as prateleiras por trás. Isso garante que a bebida mais gelada esteja sempre na frente para o consumidor." },
      { question: "Como evitar que as portas de vidro fiquem embaçadas em dias úmidos?", answer: "Walk-in Coolers profissionais utilizam portas de vidro com resistências elétricas embutidas no próprio vidro e nos perfis do quadro de alumínio. Essas resistências mantêm a temperatura da superfície externa acima do ponto de orvalho, eliminando completamente a condensação (suor no vidro)." },
      { question: "Prateleiras aramadas acompanham o Walk-in Cooler?", answer: "Sim. Projetamos e fornecemos estantes aramadas reforçadas com divisórias de garrafas e latas, organizadas em plano inclinado por gravidade para que o produto deslize automaticamente para a frente ao ser retirado." },
      { question: "É possível transformar uma câmara fria comum em Walk-in Cooler?", answer: "Sim! Conseguimos adaptar câmaras frias de alvenaria ou painéis existentes, recortando a parede frontal para embutir o quadro de portas de vidro e prateleiras de exposição, modernizando seu comércio com excelente custo." },
      { question: "Qual a iluminação ideal para as bebidas no Walk-in Cooler?", answer: "Utilizamos réguas de LED blindadas de alta luminosidade integradas verticalmente nos perfis das portas. Elas operam em baixas temperaturas e possuem índice de reprodução de cor (IRC) elevado para deixar os rótulos das bebidas atraentes." }
    ]
  },
  {
    id: "beer-cave",
    title: "Beer Cave",
    slug: "beer-cave",
    icon: "GlassWater",
    shortDesc: "Montagem de câmaras frias exclusivas para cervejas e bebidas com temperaturas próximas a zero ou negativas.",
    headline: "Projetos e Construção de Beer Caves (Cavernas de Cerveja) em Penha e Região",
    textVariant1: textVariants.comercialIntro[0],
    textVariant2: textVariants.comercialIntro[1],
    textVariant3: textVariants.comercialIntro[2],
    problemsSolved: [
      "Cerveja congelando ou explodindo devido à falta de precisão do termostato",
      "Evaporador comum bloqueando com gelo devido ao trabalho contínuo próximo a -2°C",
      "Vazamento de ar frio pelas portas de acesso dos clientes elevando a conta de energia",
      "Falta de controle de umidade provocando o descolamento de rótulos de garrafas nobres",
      "Iluminação interna inadequada que prejudica a experiência e queima em baixas temperaturas",
      "Formação de gelo no teto da câmara por entrada indesejada de ar externo úmido",
      "Falta de espaço para estocagem adequada de barris de chopp de reserva"
    ],
    benefits: [
      "Experiência de compra premium imersiva (o cliente entra na caverna gelada)",
      "Cervejas e chopp mantidos estritamente na temperatura ideal de trinca (-2°C a -4°C)",
      "Vidros panorâmicos especiais permitindo visibilidade interna total da área de vendas",
      "Equipamentos dimensionados para degelo rápido sem alterar a temperatura do produto",
      "Destaque visual imbatível para postos de combustíveis, empórios e adegas",
      "Organização impecável de estoques de fardos de cerveja e barris em um só espaço"
    ],
    brands: ["Danfoss", "Full Gauge Controls", "Bitzer", "Elgin", "Carel", "Anthony Doors"],
    steps: [
      { title: "Design de Experiência e Isolação", desc: "Definimos o layout da Beer Cave, combinando painéis de poliuretano de alta densidade revestidos em aço escovado ou preto brutalista, e portas de vidro de acesso público." },
      { title: "Sistemas de Degelo e Refrigeração", desc: "Instalamos evaporadores de baixo perfil com resistências de alto rendimento que executam ciclos de degelo rápidos e eficientes para evitar o bloqueio de gelo." },
      { title: "Automação e Iluminação Cênica", desc: "Programamos os controladores eletrônicos de precisão com alarmes de porta aberta, instalamos iluminação em LED azul gelo ou âmbar e ajustamos o fluxo de ar térmico." }
    ],
    faqs: [
      { question: "O que é uma Beer Cave?", answer: "A Beer Cave é uma câmara frigorífica climatizada especialmente projetada para que os próprios clientes entrem nela para escolher suas cervejas e chopp. Elas funcionam como uma 'caverna de gelo', mantendo as bebidas na temperatura limite de congelamento, gerando excelente apelo de vendas." },
      { question: "Qual a temperatura correta de trabalho de uma Beer Cave?", answer: "A temperatura ideal de trabalho de uma Beer Cave de varejo gira estritamente entre -2°C e -4°C. Esse intervalo é perfeito para 'trincar' as cervejas comerciais sem o risco de congelamento do líquido interno das garrafas de vidro." },
      { question: "Os vidros e portas de entrada embaçam pelo lado de fora?", answer: "Não. Fornecemos portas e painéis de vidro de acesso com aquecimento eletrônico nas molduras e vidros com película de baixa emissividade (Low-E), garantindo transparência impecável mesmo em dias quentes e úmidos." },
      { question: "Como os clientes resistem ao frio dentro da Beer Cave?", answer: "O fluxo de ar dos evaporadores internos é direcionado para áreas onde não atingem diretamente o cliente no corredor central. A experiência de compra costuma durar de 1 a 3 minutos, tempo perfeitamente tolerável para retirar as bebidas." },
      { question: "Uma Beer Cave consome muita energia elétrica?", answer: "Graças ao uso de portas automáticas com mola de retorno rápido, cortinas de PVC internas e isolamento robusto em poliuretano injetado de 80mm ou 100mm, o consumo é muito menor do que manter várias geladeiras comerciais antigas ligadas juntas." }
    ]
  },
  {
    id: "chiller",
    title: "Chiller",
    slug: "chiller",
    icon: "Cpu",
    shortDesc: "Manutenção corretiva de compressores parafuso/scroll, análise de óleo e controle de água gelada industrial.",
    headline: "Assistência Técnica, Manutenção e Conserto de Chillers em Penha e Região",
    textVariant1: textVariants.comercialIntro[0],
    textVariant2: textVariants.comercialIntro[1],
    textVariant3: textVariants.comercialIntro[2],
    problemsSolved: [
      "Chiller parando por erro de alta ou baixa pressão de água no circuito de processos",
      "Queima do compressor parafuso ou scroll devido a falta de lubrificação ou desgaste",
      "Incrustação severa de calcário ou lodo nos trocadores de calor do condensador shell and tube",
      "Congelamento interno das placas do evaporador brazado provocando danos irreversíveis",
      "Fuga de gás refrigerante de grande porte em juntas de tubulações rígidas de alta pressão",
      "Falha de comunicação ou pane eletrônica nos controladores Carel, Siemens ou Dixell",
      "Contaminação do óleo lubrificante do sistema frigorífico com umidade ou resíduos metálicos"
    ],
    benefits: [
      "Atendimento por engenheiros técnicos capacitados em refrigeração de grande porte",
      "Análise laboratorial completa do óleo do compressor (acidez, umidade, desgaste)",
      "Recolhimento ecológico do gás refrigerante com cilindros e estações especiais",
      "Limpeza química desincrustante profissional de trocadores de calor (condensadores)",
      "Parametrização precisa de fluxostatos, transdutores e válvulas de expansão eletrônicas",
      "Contrato de manutenção focado em zerar paradas inesperadas em processos industriais"
    ],
    brands: ["Carrier", "York", "Trane", "Daitsu", "Hitachi", "Midea", "Sabin", "Mecânica Industrial"],
    steps: [
      { title: "Inspeção do Sistema Hidráulico", desc: "Verificamos vazão de água, funcionamento de bombas, filtros y, presença de ar na linha e diferencial de pressão no evaporador e condensador." },
      { title: "Diagnóstico Elétrico e Termodinâmico", desc: "Analisamos correntes dos compressores, temperaturas de entrada/saída de água e pressões de evaporação/condensação com manifold computadorizado de alta sensibilidade." },
      { title: "Manutenção Corretiva ou Overhaul", desc: "Realizamos o reparo mecânico, substituição de válvulas de expansão, placas de controle ou retífica mecânica completa dos compressores parafuso/scroll." }
    ],
    faqs: [
      { question: "O que é um sistema Chiller e onde ele é utilizado?", answer: "Um Chiller é um resfriador de água de grande porte. Ele gela água ou uma mistura de água e aditivos até temperaturas de 5°C (ou negativas no caso de glicol) e bombeia esse líquido frio para resfriar máquinas industriais (extrusoras, injetoras de plástico, equipamentos hospitalares de ressonância) ou para climatizar grandes edifícios através de fancoils." },
      { question: "De quanto em quanto tempo deve ser feita a limpeza do condensador do Chiller?", answer: "Em Chillers resfriados a água acoplados a torres de resfriamento, a limpeza mecânica/química dos tubos do condensador (varetamento) deve ser feita pelo menos uma vez ao ano, pois o acúmulo de incrustações minerais da água reduz drasticamente a troca de calor, elevando o consumo elétrico e desarmando o compressor por alta pressão." },
      { question: "Qual a importância do fluxostato no Chiller?", answer: "O fluxostato é um dispositivo eletrônico ou mecânico vital de segurança que monitora se há circulação de água pelo evaporador. Se a bomba d'água parar e o compressor continuar ligado, a água parada dentro do evaporador congela rapidamente, rompendo os tubos internos e causando a entrada massiva de água em todo o circuito de gás e no compressor, inutilizando o sistema." },
      { question: "Vocês realizam serviços de Overhaul (revisão geral) em compressores de Chiller?", answer: "Sim. Realizamos a desmontagem completa do compressor, medição de folgas com micrômetro, substituição de rolamentos, anéis de vedação, juntas, análise de bobinados elétricos e troca do óleo lubrificante original." },
      { question: "Atendem Chillers de processos industriais em Joinville, Jaraguá do Sul e Blumenau?", answer: "Sim! Atendemos indústrias plásticas, metalúrgicas, alimentícias e químicas em todo o estado de Santa Catarina com equipes técnicas móveis altamente estruturadas para viagens rápidas de socorro." }
    ]
  },
  {
    id: "conserto-geladeiras",
    title: "Conserto de Geladeiras",
    slug: "conserto-geladeiras",
    icon: "Refrigerator",
    shortDesc: "Reparo de refrigeradores frost free, troca de borracha, sensores de degelo e carga de gás em geladeiras comerciais e domésticas.",
    headline: "Conserto e Assistência Técnica de Geladeiras em Penha e Cidades Próximas",
    textVariant1: textVariants.reeferIntro[0],
    textVariant2: textVariants.lavaSecaIntro[1],
    textVariant3: textVariants.comercialIntro[2],
    problemsSolved: [
      "A geladeira frost free parou de gelar a parte de baixo, acumulando gelo no congelador",
      "Geladeira não gela nada e o motor faz um estalo curto a cada poucos minutos",
      "Vazamento interno de gás refrigerante na linha invisível de alta pressão de ferro",
      "O refrigerador gela em excesso, congelando as verduras na gaveta inferior",
      "Borrachas de vedação magnética rasgadas ou soltas deixando o ar frio escapar",
      "Vazamento constante de água sob as gavetas de legumes no piso do aparelho",
      "Alarme sonoro apitando ou luzes piscando freneticamente no painel touch frontal"
    ],
    benefits: [
      "Atendimento domiciliar rápido com agendamento flexível de horários",
      "Diagnósticos precisos evitando a troca desnecessária de peças caras",
      "Estoque de sensores, placas e motores para resolver o problema na primeira visita",
      "Garantia certificada por escrito de todos os componentes de reposição trocados",
      "Profissionais especialistas em marcas modernas (Side by Side, French Door e Inverter)",
      "Preço justo com transparência e facilidade de pagamento com cartão"
    ],
    brands: ["Brastemp", "Consul", "Electrolux", "Samsung", "LG", "Panasonic", "Midea", "Continental"],
    steps: [
      { title: "Inspeção do Sistema Termodinâmico", desc: "Verificamos o rendimento do compressor, correntes de trabalho, estado do condensador e realizamos testes de sensores térmicos e resistências de degelo." },
      { title: "Substituição e Soldagem de Tubulação", desc: "Se houver vazamento de gás, localizamos o ponto, soldamos com maçarico de precisão e liga de fósforo/prata, substituímos o filtro secador e aplicamos vácuo profissional." },
      { title: "Carga de Gás e Programação Eletrônica", desc: "Realizamos a carga exata de gás ecológico (R134a ou R600a), testamos os ciclos de degelo automático e conferimos as vedações magnéticas das portas." }
    ],
    faqs: [
      { question: "Por que a minha geladeira gela bem o congelador mas não resfria a parte de baixo?", answer: "Em geladeiras Frost Free, isso costuma ser causado pelo bloqueio de gelo nos dutos internos de ar. O bloqueio ocorre devido a uma falha no sistema de degelo automático (queima da resistência elétrica, sensor de degelo aberto ou fusível térmico queimado). O ar gelado do congelador não consegue ser soprado pelo ventilador para o compartimento inferior." },
      { question: "É perigoso usar gás R600a nos consertos de geladeira?", answer: "O gás R600a (isobutano) é inflamável, mas é ecologicamente correto e amplamente utilizado em geladeiras modernas. Nossos técnicos são rigorosamente treinados e utilizam equipamentos de solda fria ou maçaricos especiais com procedimentos de segurança rígidos, eliminando qualquer risco de acidentes durante a manutenção." },
      { question: "Qual a utilidade de trocar a borracha da porta da geladeira?", answer: "Borrachas ressecadas, rasgadas ou desmagnetizadas permitem a entrada de ar quente e úmido no refrigerador. Isso força o compressor a trabalhar sem parar, triplicando o consumo de eletricidade da sua casa, além de provocar o acúmulo excessivo de gelo no congelador e estragar alimentos rapidamente." },
      { question: "O que fazer quando a geladeira fica dando pequenos estalos e não liga?", answer: "Isso costuma ser sinal de que o compressor está travado mecanicamente ou há uma pane no relé de partida (PTC) ou protetor térmico do motor. É preciso fazer um teste elétrico direto no compressor para determinar se ele deve ser trocado ou se o reparo é apenas nos componentes elétricos de partida rápida." },
      { question: "Vocês realizam conserto de geladeiras de marcas importadas?", answer: "Sim! Somos especialistas na assistência técnica de geladeiras modernas das marcas importadas e nacionais de alta tecnologia, como as do tipo Side-by-Side e French Door da Samsung, LG e Panasonic." }
    ]
  }
];

// Helper to get dynamic service text variants by index to secure unique SEO pages
export function getServiceText(serviceId: string, index: number, localName: string): string {
  const service = servicesData.find(s => s.id === serviceId);
  if (!service) return "";
  
  let baseText = "";
  if (index === 1) baseText = service.textVariant1;
  else if (index === 2) baseText = service.textVariant2;
  else baseText = service.textVariant3;

  // Dynamically blend in city context for robust unique SEO optimization
  baseText = baseText.replace(/em Penha/g, `em ${localName}`);
  baseText = baseText.replace(/Penha/g, localName);
  baseText = baseText.replace(/região/g, `região de ${localName}`);
  
  return baseText;
}
