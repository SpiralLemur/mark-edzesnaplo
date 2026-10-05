{\rtf1\ansi\ansicpg1250\cocoartf2907
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab560
\pard\pardeftab560\slleading20\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const C='mark-v7';\
const CORE=['./','./index.html','./manifest.webmanifest','./icons/icon-180.png','./icons/icon-512.png'];\
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));\
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));\
self.addEventListener('fetch',e=>\{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>\{const copy=res.clone();caches.open(C).then(c=>c.put(e.request,copy));return res\}).catch(()=>caches.match('./index.html'))))\});}