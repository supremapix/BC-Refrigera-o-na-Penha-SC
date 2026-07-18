import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Calendar, 
  Clock, 
  User, 
  ChevronRight, 
  ChevronDown, 
  MessageCircle, 
  Phone, 
  CheckCircle2, 
  BookOpen,
  Info,
  ArrowLeft,
  AlertTriangle
} from 'lucide-react';
import { companyData } from '../data/siteData';
import { EnhancedSEO } from '../components/EnhancedSEO';

export const BlogLavaESecaPage: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const waMessage = encodeURIComponent(`Olá! Li o guia de Lava e Seca no blog e preciso tirar uma dúvida ou agendar um serviço.`);
  const waUrl = `https://wa.me/554733059452?text=${waMessage}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.bcrefrigeracaosc.com.br"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://www.bcrefrigeracaosc.com.br/blog/lava-e-seca-penha-sc-guia-completo"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Guia Lava e Seca Penha SC",
        "item": "https://www.bcrefrigeracaosc.com.br/blog/lava-e-seca-penha-sc-guia-completo"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Lava e Seca em Penha SC: Guia Completo de Uso, Economia e Conserto (2026)",
    "description": "Veja o guia definitivo sobre o uso de máquina lava e seca no litoral de Penha SC. Analisamos o custo-benefício de lavanderias self-service, como evitar umidade e onde consertar.",
    "image": "https://img.novaspersianascuritiba.com.br/bc-refrigeracao-penha-sc.webp",
    "datePublished": "2026-07-17",
    "dateModified": "2026-07-17",
    "author": {
      "@type": "Organization",
      "name": "BC Refrigeração",
      "url": "https://www.bcrefrigeracaosc.com.br"
    },
    "publisher": {
      "@type": "Organization",
      "name": "BC Refrigeração",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.bcrefrigeracaosc.com.br/bc-logo-refrigeracao%20copy%20copy.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.bcrefrigeracaosc.com.br/blog/lava-e-seca-penha-sc-guia-completo"
    }
  };

  const faqs = [
    {
      question: "Como a umidade de Penha SC afeta as roupas e a secagem?",
      answer: "A umidade relativa do ar em Penha e cidades litorâneas catarinenses costuma ser muito alta (frequentemente acima de 80%). Isso impede que as roupas sequem naturalmente no varal, gerando mau cheiro e proliferação de mofo. A lava e seca resolve esse impasse ao extrair a umidade por condensação térmica interna, entregando as peças prontas para guardar."
    },
    {
      question: "Qual a diferença entre usar sabão em pó ou sabão líquido na lava e seca?",
      answer: "Recomendamos fortemente o uso de sabão líquido. O sabão em pó costuma não dissolver totalmente em ciclos rápidos ou com água fria, acumulando resíduos sólidos no tambor e entupindo os canais coletores de fiapos de secagem, o que pode causar superaquecimento e queima de resistências lógicas."
    },
    {
      question: "Com que frequência devo limpar o filtro de detritos da máquina?",
      answer: "O filtro de detritos (localizado no rodapé frontal da máquina) deve ser limpo a cada 15 dias em uso residencial médio. Ele retém moedas, grampos, botões e acúmulos grossos de fiapos que, se não removidos, sobrecarregam a eletrobomba de drenagem, provocando os famosos Erros 5E / OE."
    },
    {
      question: "Vale a pena pagar lavanderia self-service ou ter uma lava e seca própria em Penha?",
      answer: "Para moradores fixos ou veranistas recorrentes, ter o próprio equipamento é extremamente vantajoso pela conveniência e custo a médio prazo. Lavanderias self-service em Penha cobram de R$ 15 a R$ 25 por ciclo de lavagem ou secagem, o que em poucas semanas de uso familiar ultrapassa a parcela de aquisição ou manutenção de uma lava e seca própria."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="bg-[#FAFBFD] min-h-screen text-slate-800 font-sans pb-16">
      <EnhancedSEO 
        title="Lava e Seca em Penha SC: Guia de Uso, Economia e Conserto"
        description="Guia prático sobre uso de lava e seca no litoral de Penha SC. Entenda a umidade litorânea, lavanderias self-service e manutenção preventiva com a BC Refrigeração."
        canonicalPath="/blog/lava-e-seca-penha-sc-guia-completo"
        keywords={[
          "lava e seca penha sc", 
          "lavanderia self service penha", 
          "manutenção de lava e seca", 
          "conserto de lava e seca penha", 
          "limpeza filtro lava e seca"
        ]}
        schema={[breadcrumbSchema, articleSchema, faqSchema]}
      />

      {/* Breadcrumb Header */}
      <div className="bg-[#051726] border-b border-slate-800 py-3 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-[#22C7E5] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link to="/conserto-lava-e-seca-penha-sc" className="hover:text-[#22C7E5] transition-colors">Lava e Seca</Link>
            <ChevronRight size={12} />
            <span className="text-[#22C7E5] font-semibold">Guia de Uso</span>
          </div>
          <Link to="/conserto-lava-e-seca-penha-sc" className="hidden sm:inline-flex items-center gap-1.5 text-[#22C7E5] hover:underline font-black text-[11px] uppercase tracking-wider">
            <ArrowLeft size={12} />
            <span>Voltar para Serviços</span>
          </Link>
        </div>
      </div>

      {/* Hero Blog Cover Title */}
      <header className="bg-[#051726] text-white py-14 lg:py-20 px-4 relative overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 bg-gradient-to-t from-[#051726]/95 via-[#051726]/60 to-transparent z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#22C7E5]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-20 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#22C7E5]/15 border border-[#22C7E5]/20 text-[#22C7E5] font-mono text-[10px] uppercase tracking-widest font-black">
            <BookOpen size={12} />
            <span>Guia Local & Artigos de Utilidade</span>
          </div>
          
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight leading-none">
            Lava e Seca em Penha SC: Guia Completo — Uso Residencial, Lavanderias e Onde Consertar
          </h1>

          {/* Metadata Grid */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 pt-3 text-[11px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider">
            <span className="flex items-center gap-1.5"><Calendar size={14} className="text-[#FF7A1A]" /> 17 de Julho de 2026</span>
            <span className="flex items-center gap-1.5"><Clock size={14} className="text-[#FF7A1A]" /> 6 minutos de leitura</span>
            <span className="flex items-center gap-1.5"><User size={14} className="text-[#FF7A1A]" /> Equipe BC Refrigeração</span>
          </div>
        </div>
      </header>

      {/* Main Editorial Content Wrapper */}
      <article className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-md p-6 sm:p-10 lg:p-12 space-y-8 font-sans text-sm sm:text-base leading-relaxed text-slate-700">
          
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black uppercase text-slate-900 tracking-tight flex items-center gap-2 border-b border-slate-100 pb-2">
              <span className="text-[#0E86D4]">1.</span> Lava e seca residencial: vale a pena em Penha?
            </h2>
            <p className="font-semibold text-slate-600">
              Penha, localizada no belíssimo e convidativo litoral norte de Santa Catarina, é conhecida por praias exuberantes, gastronomia rica e forte turismo focado no Beto Carrero World. Entretanto, como em qualquer região praiana do sul do país, a umidade relativa do ar é extremamente alta durante a maior parte do ano, muitas vezes superando os 80%.
            </p>
            <p>
              Esse elevado índice de umidade no ar litorâneo gera um grande transtorno doméstico: a extrema dificuldade de secar roupas no varal convencional. As roupas podem passar dias estendidas na lavanderia ou na sacada sem secar completamente, adquirindo aquele incômodo odor de umidade e criando o cenário ideal para a proliferação de fungos, ácaros e mofo, que danificam as fibras dos tecidos e afetam a saúde respiratória da família.
            </p>
            <p>
              Além disso, para proprietários de apartamentos voltados à locação de temporada (AirBnB e Booking), a dinâmica exige lavagem e secagem veloz de lençóis, toalhas e fronhas entre a saída de um hóspede e a entrada do próximo. Nesse cenário, a máquina <strong>Lava e Seca</strong> própria é um investimento indispensável. Graças ao sistema de tambor horizontal, ela consome até 60% menos água se comparada aos modelos tradicionais de abertura superior, além de otimizar espaço físico e proporcionar roupas secas, macias e prontas para uso em poucas horas.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black uppercase text-slate-900 tracking-tight flex items-center gap-2 border-b border-slate-100 pb-2">
              <span className="text-[#0E86D4]">2.</span> Lavanderias self-service em Penha: como funcionam
            </h2>
            <p>
              Nos últimos anos, Penha acompanhou o crescimento das franquias de lavanderias de autoatendimento (self-service). Essas lojas oferecem uma solução prática para quem precisa lavar uma quantidade grande de roupas pontualmente ou não possui infraestrutura em casa.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 font-medium text-xs sm:text-sm text-slate-600 space-y-3">
              <span className="font-black uppercase text-[#0E86D4] block mb-1 flex items-center gap-1.5">
                <Info size={16} /> Estrutura Padrão de Lavanderias Self-Service:
              </span>
              <p>
                • <strong>Ciclo Completo:</strong> O processo total de lavagem leva cerca de 30 a 35 minutos, e a secagem em torno de 40 a 45 minutos. O ciclo combinado de lavar e secar é concluído de forma ágil em 60 a 75 minutos.
              </p>
              <p>
                • <strong>Insumos Inclusos:</strong> Sabão líquido de alta performance e amaciante concentrado são injetados de forma automática em dosagens eletrônicas precisas pelo próprio sistema da lavadora.
              </p>
              <p>
                • <strong>Pagamento Automatizado:</strong> O cliente gerencia tudo através de totens de autoatendimento touch screen, realizando o pagamento prático via Pix, cartão de débito ou crédito antes de liberar a máquina escolhida.
              </p>
            </div>
            <p>
              Apesar de ser uma excelente saída para emergências ou viagens rápidas de veraneio, o custo de utilizar lavanderias self-service recorrentemente pode pesar significativamente no bolso. Com tarifas médias variando entre R$ 15 e R$ 25 por lavagem e adicionais iguais para a secagem, uma família típica que realiza de 3 a 4 lavagens semanais gastará facilmente mais de R$ 300 mensais. Por esse motivo, adquirir e manter um equipamento próprio instalado em sua lavanderia residencial é uma alternativa infinitamente mais inteligente e econômica no médio e longo prazo.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black uppercase text-slate-900 tracking-tight flex items-center gap-2 border-b border-slate-100 pb-2">
              <span className="text-[#0E86D4]">3.</span> Cuidados que prolongam a vida útil da sua lava e seca
            </h2>
            <p>
              As lavadoras e secadoras são aparelhos sofisticados compostos por engenharia precisa e placas de alta tecnologia. Para evitar dores de cabeça e economizar com reparos desnecessários, pequenas rotinas de uso são fundamentais:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#22C55E]" />
                  <span>Uso Correto do Sabão</span>
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                  O excesso de sabão líquido e amaciante gera espuma excessiva que se deposita nos sensores de nível e obstrui os canais coletores de ar da secagem, causando odores e superaquecimento da resistência. Use sempre dosagens comedidas.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#22C55E]" />
                  <span>Limpeza Semanal do Filtro</span>
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                  O filtro frontal inferior retém moedas, grampos, cabelos e acúmulos de fios grossos. A higienização a cada 15 dias evita que detritos travem a hélice da eletrobomba, protegendo o motor e impedindo erros de drenagem.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#22C55E]" />
                  <span>Ciclo de Lavagem do Tambor</span>
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                  Uma vez por mês, execute o ciclo próprio de &quot;Limpeza do Cesto&quot; ou faça uma lavagem vazia em água quente (60°C) utilizando 1 litro de vinagre branco ou alvejante para retirar gorduras e depósitos de sabão velho.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#22C55E]" />
                  <span>Cuidado com Sobrecarga</span>
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                  A capacidade máxima declarada pelos fabricantes (ex. 11kg) refere-se a roupas molhadas de lavagem. Para secagem, a capacidade cai quase pela metade (ex. 7kg). Respeitar esse limite protege a suspensão de amortecedores e economiza energia elétrica.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black uppercase text-slate-900 tracking-tight flex items-center gap-2 border-b border-slate-100 pb-2">
              <span className="text-[#0E86D4]">4.</span> Quando chamar a assistência técnica
            </h2>
            <p>
              Mesmo com todos os cuidados preventivos cotidianos, componentes móveis e lógicos sofrem desgaste natural com o passar dos anos de operação. Identificar precocemente os indícios de pane evita que o estrago se estenda a outras peças e encareça o conserto.
            </p>
            <p className="font-semibold text-slate-600">
              Chame o técnico imediatamente se sua máquina apresentar:
            </p>
            <ul className="space-y-2 bg-red-50/50 border border-red-100 rounded-2xl p-5 text-xs sm:text-sm font-semibold text-slate-700">
              <li className="flex gap-2 items-center text-red-700"><AlertTriangle size={14} className="shrink-0 text-red-500" /> Barulho estridente, metálico ou batidas fortes durante a centrifugação.</li>
              <li className="flex gap-2 items-center text-red-700"><AlertTriangle size={14} className="shrink-0 text-red-500" /> Vazamento contínuo de água por baixo do equipamento.</li>
              <li className="flex gap-2 items-center text-red-700"><AlertTriangle size={14} className="shrink-0 text-red-500" /> Códigos de erros persistentes piscando no painel digital.</li>
              <li className="flex gap-2 items-center text-red-700"><AlertTriangle size={14} className="shrink-0 text-red-500" /> Roupas saindo totalmente frias ou muito encharcadas ao final do ciclo de calor.</li>
              <li className="flex gap-2 items-center text-red-700"><AlertTriangle size={14} className="shrink-0 text-red-500" /> Painel de controle apagado ou que desliga no meio do processo.</li>
            </ul>
            <p className="font-semibold pt-2">
              A regra de ouro é simples: se o custo do conserto for inferior a 50% do valor de mercado de um aparelho novo equivalente, o reparo é altamente recomendável e vantajoso. 
            </p>
            <div className="p-6 bg-[#051726] text-white rounded-2xl border border-slate-800 text-center space-y-4 mt-6">
              <h3 className="text-lg font-black uppercase text-[#22C7E5] tracking-tight">Precisa de Ajuda Técnica Profissional?</h3>
              <p className="text-xs sm:text-sm text-slate-300 font-semibold max-w-2xl mx-auto leading-relaxed">
                Em Penha SC e em toda a região de Balneário Piçarras, Barra Velha, Navegantes e Itajaí, a <strong>BC Refrigeração</strong> atende em domicílio de forma imediata. Realizamos diagnósticos transparentes e consertos para as marcas <strong>LG, Samsung, Electrolux, Brastemp, Consul, Midea, Panasonic</strong> e multimarcas com garantia formal de 90 dias.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a 
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#22C55E] hover:bg-[#1eb051] text-white font-black text-xs uppercase tracking-wider px-5 py-3 rounded-full shadow-lg transition-all"
                >
                  <MessageCircle size={14} />
                  <span>Chamar no WhatsApp</span>
                </a>
                <a 
                  href="tel:+554733059452"
                  className="inline-flex items-center gap-2 bg-[#22C7E5] hover:bg-[#0E86D4] text-slate-950 hover:text-white font-black text-xs uppercase tracking-wider px-5 py-3 rounded-full shadow-lg transition-all"
                >
                  <Phone size={14} />
                  <span>Ligar: (47) 3305-9452</span>
                </a>
              </div>
            </div>
          </section>

        </div>
      </article>

      {/* Section FAQ do Artigo */}
      <section className="bg-slate-100 border-y border-slate-200 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#0E86D4] text-xs font-black uppercase tracking-wider bg-white px-3 py-1 rounded-full shadow-sm border border-slate-200">Perguntas do Guia</span>
            <h2 className="text-2xl sm:text-4xl font-black uppercase text-slate-900 tracking-tight leading-tight mt-2">
              Dúvidas comuns resolvidas sobre Lava e Seca
            </h2>
            <p className="text-slate-600 font-semibold text-xs sm:text-sm mt-2">
              Esclareça questões práticas de operação para poupar custos e ter um eletrodoméstico sempre em perfeito estado.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors focus:outline-none"
                  >
                    <span className="text-xs sm:text-sm md:text-base font-black text-slate-900 uppercase tracking-tight">
                      {index + 1}. {faq.question}
                    </span>
                    <ChevronDown 
                      size={18} 
                      className={`text-[#0E86D4] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  <div 
                    className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 border-t border-slate-100' : 'max-h-0'}`}
                  >
                    <div className="px-6 py-5 text-xs sm:text-sm font-semibold text-slate-600 leading-relaxed bg-slate-50/50">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Internal Navigation Mesh / Quick links to other pages */}
      <section className="py-16 px-4 max-w-5xl mx-auto text-center space-y-6">
        <h3 className="text-lg font-black uppercase tracking-wider text-slate-900">Explore nossas outras soluções locais</h3>
        <div className="flex flex-wrap justify-center gap-3 text-xs font-bold text-slate-600">
          <Link to="/conserto-lava-e-seca-penha-sc" className="px-4 py-2 bg-white border border-slate-200 rounded-xl hover:border-[#22C7E5] transition-all">
            Página Principal Conserto Lava e Seca
          </Link>
          <Link to="/assistencia-lava-e-seca-lg-penha" className="px-4 py-2 bg-white border border-slate-200 rounded-xl hover:border-[#22C7E5] transition-all">
            Assistência Técnica Lava e Seca LG
          </Link>
          <Link to="/assistencia-lava-e-seca-samsung-penha" className="px-4 py-2 bg-white border border-slate-200 rounded-xl hover:border-[#22C7E5] transition-all">
            Assistência Técnica Lava e Seca Samsung
          </Link>
          <Link to="/contato" className="px-4 py-2 bg-white border border-slate-200 rounded-xl hover:border-[#22C7E5] transition-all text-[#FF7A1A]">
            Solicitar Orçamento Grátis
          </Link>
        </div>
      </section>
    </div>
  );
};
