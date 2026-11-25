import { Link } from 'react-router-dom';
import { EnhancedSEO } from '../components/EnhancedSEO';

const path = '/blog/historia-do-transporte-refrigerado';
const site = 'https://www.bcrefrigeracaosc.com.br';
const title = 'História do transporte refrigerado: do vagão com gelo ao reefer';
const description = 'Conheça os marcos do transporte refrigerado, da fabricação mecânica de gelo aos vagões e ao contêiner reefer, e entenda por que o ar precisa circular.';
const imagePath = '/historia-transporte-refrigerado.jpg';
const servicePath = '/servicos/conserto-container-reefer';

export function HistoriaTransporteRefrigerado() {
  const schema = [
    { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: title, description, image: site + imagePath, datePublished: '2026-11-25', mainEntityOfPage: site + path, inLanguage: 'pt-BR', author: { '@type': 'Organization', name: 'BC Refrigeração SC', url: site }, publisher: { '@type': 'Organization', name: 'BC Refrigeração SC' } },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Início', item: site }, { '@type': 'ListItem', position: 2, name: 'História do transporte refrigerado', item: site + path }] },
  ];
  return (
    <>
      <EnhancedSEO title={title} description={description} canonicalPath={path} ogImage={site + imagePath} ogType="article" schema={schema} />
      <header className="bg-[#051726] text-white px-4 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto space-y-4">
          <nav aria-label="Localização nesta página" className="text-sm text-cyan-200"><Link to="/" className="underline">Início</Link> / <span aria-current="page">História do transporte refrigerado</span></nav>
          <p className="font-bold uppercase tracking-wider text-cyan-200 text-sm">Refrigeração e transporte • História</p>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">Do vagão com gelo ao contêiner reefer</h1>
          <p className="text-slate-200 text-lg">Como a conservação de perecíveis deixou de depender apenas do gelo e passou a exigir controle da temperatura em cada etapa da viagem.</p>
        </div>
      </header>
      <article className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 pb-16 space-y-6 text-slate-700 leading-relaxed">
        <figure className="space-y-2">
          <img src={imagePath} width={1440} height={810} alt="Ilustração de um vagão ferroviário azul ao lado de um contêiner refrigerado claro." className="w-full h-auto rounded-2xl" fetchPriority="high" />
          <figcaption className="text-sm">Ilustração original. Não representa equipamento ou operação da BC Refrigeração.</figcaption>
        </figure>
        <p className="text-lg">A história do transporte refrigerado não é a de um único inventor. Produzir frio, impedir a entrada de calor e fazer o ar circular são problemas diferentes. As soluções evoluíram juntas, do vagão com blocos de gelo às unidades que acompanham a carga durante a viagem.</p>
        <section className="space-y-3" aria-labelledby="marcos-reefer">
          <h2 id="marcos-reefer" className="text-2xl font-bold text-[#051726]">Três marcos da passagem do gelo à refrigeração mecânica</h2>
          <p><strong>1851 • Gelo produzido por máquina.</strong> John Gorrie recebeu a patente norte-americana nº 8.080 para uma máquina que produzia gelo por um ciclo de ar, segundo a <a className="underline" href="https://www.ashrae.org/about/mission-and-vision/ashrae-industry-history/air-conditioning-and-refrigeration-timeline">linha do tempo da ASHRAE</a>. Isso não significa que a máquina já viajasse com mercadorias: produzir gelo e controlar a temperatura durante um trajeto são tarefas diferentes.</p>
          <p><strong>Década de 1860 • Gelo nos vagões.</strong> O <a className="underline" href="https://americanhistory.si.edu/collections/object/nmah_1211872">National Museum of American History</a> documenta o uso de vagões com blocos de gelo para conservar alimentos. Em 1876, o <a className="underline" href="https://www.americanhistory.si.edu/ne/collections/object/nmah_1063788">modelo de patente de Ayer</a> buscava melhorar o isolamento e baixar o peso para permitir viagens mais longas com menos paradas para repor gelo.</p>
          <p><strong>Década de 1950 • Refrigeração mecânica nos trilhos.</strong> Uma <a className="underline" href="https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nbsspecialpublication436.pdf">publicação técnica do NBS, hoje NIST</a>, descreve o crescimento da frota ferroviária refrigerada mecanicamente nos Estados Unidos em meados da década. A evolução não ocorreu de uma vez: o gelo permaneceu em uso enquanto surgiam outros equipamentos.</p>
        </section>
        <section className="space-y-3" aria-labelledby="fluxo-reefer">
          <h2 id="fluxo-reefer" className="text-2xl font-bold text-[#051726]">O papel do contêiner reefer na cadeia fria</h2>
          <p>Hoje, uma unidade refrigerada ajuda a manter as condições de transporte de produtos sensíveis entre etapas do percurso. O isolamento reduz a troca de calor; a refrigeração e a ventilação trabalham ao longo da carga. A <a className="underline" href="https://www.cma-cgm.com/assets/public/pdf/Brochure%20Reefer.pdf">CMA CGM explica</a> que, no arranjo com piso em T, o ar percorre os canais do piso e sobe pela carga antes de retornar à unidade. Empilhar embalagens fora dos limites ou bloquear esse caminho pode comprometer a distribuição do ar, mesmo quando o painel exibe a temperatura configurada.</p>
          <p>O valor no painel também não garante que todo o produto esteja na mesma temperatura. Para entender um registro, é preciso distinguir o valor configurado, a leitura dos sensores e, quando aplicável, a medição do produto. O <a className="underline" href="https://www.hapag-lloyd.com/en/services-information/cargo-fleet/reefer/cargo-handling.html">guia de manuseio da Hapag-Lloyd</a> orienta a observar a circulação do ar e os parâmetros exigidos pela carga e pela operação.</p>
        </section>
        <section className="space-y-3" aria-labelledby="diagnostico-reefer">
          <h2 id="diagnostico-reefer" className="text-2xl font-bold text-[#051726]">O que ajuda a esclarecer uma parada no litoral catarinense?</h2>
          <p>Registre código do alarme, horário, identificação da unidade e valores mostrados no painel, se isso puder ser feito com segurança. Encaminhe ao responsável pela operação e siga o plano da carga; não altere parâmetros nem libere o produto só porque o visor voltou ao normal.</p>
          <p><Link to={servicePath} className="font-bold underline text-[#0E537B]">Conheça o atendimento da BC Refrigeração para contêiner reefer em Penha e região</Link>.</p>
        </section>
      </article>
    </>
  );
}
