from html.parser import HTMLParser
from pathlib import Path
import json
from urllib.parse import urlparse,unquote
class Doc(HTMLParser):
 def __init__(self):super().__init__();self.tags=[];self.ld=[];self.active=False
 def handle_starttag(self,t,a):
  d=dict(a);self.tags.append((t,d));self.active=t=='script' and d.get('type')=='application/ld+json'
 def handle_data(self,d):
  if self.active:self.ld.append(json.loads(d))
 def handle_endtag(self,t):
  if t=='script':self.active=False
errors=[];links=0
for p in Path('dist').rglob('*.html'):
 d=Doc();d.feed(p.read_text());tags=d.tags
 for name,test in [('title',lambda t,a:t=='title'),('h1',lambda t,a:t=='h1'),('description',lambda t,a:t=='meta' and a.get('name')=='description'),('canonical',lambda t,a:t=='link' and a.get('rel')=='canonical')]:
  n=sum(test(t,a) for t,a in tags)
  if n!=1:errors.append(f'{p}: {name} {n}')
 for t,a in tags:
  if t=='a' and a.get('href','').startswith('/'):
   links+=1;url=urlparse(a['href']).path;dest=Path('dist')/unquote(url.lstrip('/'))
   if not dest.exists() and not (dest/'index.html').exists():errors.append(f'{p}: missing link {url}')
 assert d.ld, str(p)+' lacks schema'
print(json.dumps({'pages':len(list(Path('dist').rglob('*.html'))),'internalLinks':links,'errors':errors},indent=2));assert not errors
