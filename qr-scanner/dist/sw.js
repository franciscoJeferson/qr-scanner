if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let f={};const o=e=>n(e,c),d={module:{uri:c},exports:f,require:o};i[c]=Promise.all(r.map((e=>d[e]||o(e)))).then((e=>(s(...e),f)))}}define(["./workbox-f51ab5e4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon.png",revision:"db5da580d7cc2ad1759eca347619580f"},{url:"assets/index.4200b594.css",revision:null},{url:"assets/index.ba3f345c.js",revision:null},{url:"favicon.ico",revision:"40ff379043c17957abe09f95681af068"},{url:"index.html",revision:"be403d0fbf1936cb01dafe425384f4c9"},{url:"pwa-192x192.png",revision:"57737f370be9c8684227fd977f6a89bb"},{url:"pwa-512x512.png",revision:"8498a9f76d70c92d024b26fc08c5bdd8"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon.ico",revision:"40ff379043c17957abe09f95681af068"},{url:"apple-touch-icon.png",revision:"db5da580d7cc2ad1759eca347619580f"},{url:"pwa-192x192.png",revision:"57737f370be9c8684227fd977f6a89bb"},{url:"pwa-512x512.png",revision:"8498a9f76d70c92d024b26fc08c5bdd8"},{url:"manifest.webmanifest",revision:"814462722d8e2d1f8f451bebf7902a63"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
