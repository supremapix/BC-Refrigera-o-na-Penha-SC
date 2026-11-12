import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUp, Share2, X, Copy, Phone } from 'lucide-react';
import { companyData } from '../data/siteData';

export function FloatingUtilities() {
 const {pathname} = useLocation();
 const [open,setOpen] = useState(false), [top,setTop]=useState(false), [status,setStatus]=useState('');
 const trigger=useRef<HTMLButtonElement>(null), panel=useRef<HTMLDivElement>(null);
 const url=`https://www.bcrefrigeracaosc.com.br${pathname}`;
 const text=typeof document !== 'undefined' ? document.title : 'BC Refrigeração em Penha SC';
 const shareText=`${text}\nConheça os serviços da BC Refrigeração e fale com a equipe: (47) 3305-9452.\n${url}`;
 const u=encodeURIComponent(url), t=encodeURIComponent(shareText);
 const close=()=>{setOpen(false);trigger.current?.focus();};
 useEffect(()=>{ const fn=()=>setTop(window.scrollY>300);fn();window.addEventListener('scroll',fn,{passive:true});return()=>window.removeEventListener('scroll',fn);},[]);
 useEffect(()=>{setOpen(false);setStatus('');},[pathname]);
 useEffect(()=>{
  if(!open)return;
  panel.current?.querySelector<HTMLButtonElement>('button')?.focus();
  const key=(e:KeyboardEvent)=>{if(e.key==='Escape'){e.preventDefault();close();} if(e.key==='Tab'){
   const nodes=panel.current?.querySelectorAll<HTMLElement>('a[href],button,input');if(!nodes?.length)return;
   const first=nodes[0],last=nodes[nodes.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
  }};document.addEventListener('keydown',key);return()=>document.removeEventListener('keydown',key);
 },[open]);
 async function copy(){try{await navigator.clipboard.writeText(shareText);setStatus('Texto e link copiados.');}catch{setStatus('Não foi possível copiar. Selecione e copie o endereço abaixo.');}}
 const links=[['WhatsApp',`https://wa.me/?text=${t}`],['Facebook',`https://www.facebook.com/sharer/sharer.php?u=${u}`],['X',`https://twitter.com/intent/tweet?text=${t}`],['Pinterest',`https://pinterest.com/pin/create/button/?url=${u}&media=${encodeURIComponent('https://www.bcrefrigeracaosc.com.br/bc-logo.png')}&description=${t}`],['LinkedIn',`https://www.linkedin.com/sharing/share-offsite/?url=${u}`],['Threads',`https://www.threads.net/intent/post?text=${t}`]];
 return <>
  <div className="suprema-actions">
   {top&&<button className="utility-top" aria-label="Voltar ao topo" onClick={()=>window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'})}><ArrowUp size={20}/></button>}
   <a className="utility-call" href={companyData.phoneLink} aria-label="Ligar para BC Refrigeração"><Phone size={18}/><span>Ligar</span></a>
   <button ref={trigger} className="share-trigger" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="bc-share-panel"><Share2 size={18}/> Compartilhar</button>
  </div>
  {open&&<><div className="share-dismiss" onClick={close}/><div ref={panel} id="bc-share-panel" className="share-panel" role="dialog" aria-modal="true" aria-labelledby="share-title">
   <div className="share-panel-heading"><h2 id="share-title">Compartilhe esta página</h2><button onClick={close} aria-label="Fechar compartilhamento"><X size={20}/></button></div>
   <p>Envie os serviços da BC Refrigeração para quem precisa.</p>
   <div className="share-networks">{links.map(([name,href])=><a href={href} key={name} target="_blank" rel="noopener noreferrer">{name}</a>)}</div>
   <button className="share-copy" onClick={copy}><Copy size={16}/> Copiar texto e link</button>
   <label htmlFor="share-url">Endereço desta página</label><input id="share-url" readOnly value={url} onFocus={e=>e.currentTarget.select()}/><p role="status">{status}</p>
  </div></>}
 </>;
}
