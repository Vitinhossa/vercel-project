if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(a[r])return;let n={};const d=e=>s(e,r),t={module:{uri:r},exports:n,require:d};a[r]=Promise.all(i.map((e=>t[e]||d(e)))).then((e=>(c(...e),n)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/1492-9e8fa5c5027e01c4.js",revision:"9e8fa5c5027e01c4"},{url:"/_next/static/chunks/1664-daeac2d69868e96c.js",revision:"daeac2d69868e96c"},{url:"/_next/static/chunks/1674-ce677fe2b02f21ad.js",revision:"ce677fe2b02f21ad"},{url:"/_next/static/chunks/1805-52d1ba8b6f7a25bb.js",revision:"52d1ba8b6f7a25bb"},{url:"/_next/static/chunks/1971-63fac0cccfdd3e1e.js",revision:"63fac0cccfdd3e1e"},{url:"/_next/static/chunks/2132-11529b686d070aa3.js",revision:"11529b686d070aa3"},{url:"/_next/static/chunks/2550-9a31193a285c50f4.js",revision:"9a31193a285c50f4"},{url:"/_next/static/chunks/2552-f8e65dd501ccf9b6.js",revision:"f8e65dd501ccf9b6"},{url:"/_next/static/chunks/2645-ea582809c6e1ea9d.js",revision:"ea582809c6e1ea9d"},{url:"/_next/static/chunks/2862-b55bef43101255f3.js",revision:"b55bef43101255f3"},{url:"/_next/static/chunks/3007.8cdac3111ae5c4ab.js",revision:"8cdac3111ae5c4ab"},{url:"/_next/static/chunks/3453-21543c19490d60d4.js",revision:"21543c19490d60d4"},{url:"/_next/static/chunks/36bcf0ca-478abdce13c204da.js",revision:"478abdce13c204da"},{url:"/_next/static/chunks/39dcb045-1cdac924a109d679.js",revision:"1cdac924a109d679"},{url:"/_next/static/chunks/4036-140d0d2f42baf66f.js",revision:"140d0d2f42baf66f"},{url:"/_next/static/chunks/5413-7f612969c9db3c22.js",revision:"7f612969c9db3c22"},{url:"/_next/static/chunks/54c66987-a8f7ece0d5a1bb6b.js",revision:"a8f7ece0d5a1bb6b"},{url:"/_next/static/chunks/5502-316d2203b1339007.js",revision:"316d2203b1339007"},{url:"/_next/static/chunks/6053-2d26a1b240446b1e.js",revision:"2d26a1b240446b1e"},{url:"/_next/static/chunks/6300-87963d037bc32ce7.js",revision:"87963d037bc32ce7"},{url:"/_next/static/chunks/6304-5a31d8ebee8a6076.js",revision:"5a31d8ebee8a6076"},{url:"/_next/static/chunks/682-ba6ee53effc9b735.js",revision:"ba6ee53effc9b735"},{url:"/_next/static/chunks/687-f40deb5ba30ab38e.js",revision:"f40deb5ba30ab38e"},{url:"/_next/static/chunks/726-3fb8d622cee38fdb.js",revision:"3fb8d622cee38fdb"},{url:"/_next/static/chunks/7342-b198f560ea202bf7.js",revision:"b198f560ea202bf7"},{url:"/_next/static/chunks/7582-1fa28e9a786b87f5.js",revision:"1fa28e9a786b87f5"},{url:"/_next/static/chunks/7592-02842884a0066759.js",revision:"02842884a0066759"},{url:"/_next/static/chunks/75fc9c18-5a55cb0f13134a2c.js",revision:"5a55cb0f13134a2c"},{url:"/_next/static/chunks/7993-312ea9466b79745b.js",revision:"312ea9466b79745b"},{url:"/_next/static/chunks/8045-7776586d5cca9635.js",revision:"7776586d5cca9635"},{url:"/_next/static/chunks/8410-94c10b3d1cc938e3.js",revision:"94c10b3d1cc938e3"},{url:"/_next/static/chunks/8493-8edd06f0f0e42476.js",revision:"8edd06f0f0e42476"},{url:"/_next/static/chunks/9041-cafe49592150b927.js",revision:"cafe49592150b927"},{url:"/_next/static/chunks/9147-30d210d476985039.js",revision:"30d210d476985039"},{url:"/_next/static/chunks/9202-413a7cc47d8de0c5.js",revision:"413a7cc47d8de0c5"},{url:"/_next/static/chunks/9546-b7bc9640e75ae8eb.js",revision:"b7bc9640e75ae8eb"},{url:"/_next/static/chunks/e70aaf36.b0384986e408ad91.js",revision:"b0384986e408ad91"},{url:"/_next/static/chunks/framework-79bce4a3a540b080.js",revision:"79bce4a3a540b080"},{url:"/_next/static/chunks/main-b054e0e3c0cb0820.js",revision:"b054e0e3c0cb0820"},{url:"/_next/static/chunks/pages/_app-1fb4de80b198c3f5.js",revision:"1fb4de80b198c3f5"},{url:"/_next/static/chunks/pages/_error-f2496e8b9fdedb89.js",revision:"f2496e8b9fdedb89"},{url:"/_next/static/chunks/pages/acordospoliticastermos-ed7feac808de9e5d.js",revision:"ed7feac808de9e5d"},{url:"/_next/static/chunks/pages/agregacao-da1c8ffd30dbd050.js",revision:"da1c8ffd30dbd050"},{url:"/_next/static/chunks/pages/agregacao/%5Btype%5D-1951dfcf3cd52d3c.js",revision:"1951dfcf3cd52d3c"},{url:"/_next/static/chunks/pages/autorenda-c8217edb975b4cf8.js",revision:"c8217edb975b4cf8"},{url:"/_next/static/chunks/pages/calendario-0b0b6c9ad01e40d5.js",revision:"0b0b6c9ad01e40d5"},{url:"/_next/static/chunks/pages/cartoes-81818ef54ef8d761.js",revision:"81818ef54ef8d761"},{url:"/_next/static/chunks/pages/cartoes/%5Btype%5D-8b982b6ba9a5fdb8.js",revision:"8b982b6ba9a5fdb8"},{url:"/_next/static/chunks/pages/cartoes/configuracao/%5Btype%5D-155c2a15199a826d.js",revision:"155c2a15199a826d"},{url:"/_next/static/chunks/pages/charge-68f3564380c74047.js",revision:"68f3564380c74047"},{url:"/_next/static/chunks/pages/cobrancas-59a83d2a334c3be2.js",revision:"59a83d2a334c3be2"},{url:"/_next/static/chunks/pages/comprovantes-884a9bea42754c0d.js",revision:"884a9bea42754c0d"},{url:"/_next/static/chunks/pages/conectarbanco-d2dfb6014d9e929b.js",revision:"d2dfb6014d9e929b"},{url:"/_next/static/chunks/pages/configuracoes-0e712fbf1f7f7d99.js",revision:"0e712fbf1f7f7d99"},{url:"/_next/static/chunks/pages/conquistadores-5609032cc9165db1.js",revision:"5609032cc9165db1"},{url:"/_next/static/chunks/pages/conselhoconsultivo-3fd62e06d2b19df9.js",revision:"3fd62e06d2b19df9"},{url:"/_next/static/chunks/pages/contabil-8fa12b5241b67b6c.js",revision:"8fa12b5241b67b6c"},{url:"/_next/static/chunks/pages/contato-65bcb5023144d52b.js",revision:"65bcb5023144d52b"},{url:"/_next/static/chunks/pages/convidaramigos-3fe60c3cfe714ecd.js",revision:"3fe60c3cfe714ecd"},{url:"/_next/static/chunks/pages/convideseusamigos-072a68e956f54378.js",revision:"072a68e956f54378"},{url:"/_next/static/chunks/pages/deposito-4f6d8744bddb1ca1.js",revision:"4f6d8744bddb1ca1"},{url:"/_next/static/chunks/pages/deposito/boleto-10b10c90ab4a05aa.js",revision:"10b10c90ab4a05aa"},{url:"/_next/static/chunks/pages/deposito/transferencia-aa86b63d48b5dfeb.js",revision:"aa86b63d48b5dfeb"},{url:"/_next/static/chunks/pages/extract-283e180fb08f811d.js",revision:"283e180fb08f811d"},{url:"/_next/static/chunks/pages/faq-ca9b569ce12d5287.js",revision:"ca9b569ce12d5287"},{url:"/_next/static/chunks/pages/feedback-46309ac3fc45a87a.js",revision:"46309ac3fc45a87a"},{url:"/_next/static/chunks/pages/gestorfinanceiro-211b037c55db4e66.js",revision:"211b037c55db4e66"},{url:"/_next/static/chunks/pages/gestorfinanceiro/%5Btype%5D-908a7c92611b5a80.js",revision:"908a7c92611b5a80"},{url:"/_next/static/chunks/pages/home-bb1912338f337165.js",revision:"bb1912338f337165"},{url:"/_next/static/chunks/pages/index-9b2ee7fbf1a701b1.js",revision:"9b2ee7fbf1a701b1"},{url:"/_next/static/chunks/pages/investimentos-02ad96c1f73f73aa.js",revision:"02ad96c1f73f73aa"},{url:"/_next/static/chunks/pages/investimentos/novo-9f5f2f417deba933.js",revision:"9f5f2f417deba933"},{url:"/_next/static/chunks/pages/investimentos/resumo-4f8acc140dd3dcf3.js",revision:"4f8acc140dd3dcf3"},{url:"/_next/static/chunks/pages/login-35e478c03dcc82ee.js",revision:"35e478c03dcc82ee"},{url:"/_next/static/chunks/pages/login/%5Btype%5D-9b0b706826d6c54f.js",revision:"9b0b706826d6c54f"},{url:"/_next/static/chunks/pages/mail-68a5cac0c50d5841.js",revision:"68a5cac0c50d5841"},{url:"/_next/static/chunks/pages/meta/%5Bid%5D-6dd830c7090ab7dd.js",revision:"6dd830c7090ab7dd"},{url:"/_next/static/chunks/pages/meuplano-3145677083657ece.js",revision:"3145677083657ece"},{url:"/_next/static/chunks/pages/meusdados-ee02cd760bae0fd3.js",revision:"ee02cd760bae0fd3"},{url:"/_next/static/chunks/pages/meusdados/alterarnome-6eb2e90647ddd023.js",revision:"6eb2e90647ddd023"},{url:"/_next/static/chunks/pages/meusdados/alterarpin-8ab55543c8afad52.js",revision:"8ab55543c8afad52"},{url:"/_next/static/chunks/pages/meusdados/alterarsenha-e84391f521748532.js",revision:"e84391f521748532"},{url:"/_next/static/chunks/pages/offers-de70eb982cafbb72.js",revision:"de70eb982cafbb72"},{url:"/_next/static/chunks/pages/offers/%5Bid%5D-d23f2ca214de5ae1.js",revision:"d23f2ca214de5ae1"},{url:"/_next/static/chunks/pages/pagamentos-d9d080e6b7828fec.js",revision:"d9d080e6b7828fec"},{url:"/_next/static/chunks/pages/pagamentos/boleto-4a69de1616c9a592.js",revision:"4a69de1616c9a592"},{url:"/_next/static/chunks/pages/pagamentos/qrcode-7b620754ee047abc.js",revision:"7b620754ee047abc"},{url:"/_next/static/chunks/pages/perfil-aa39639b7cc53bca.js",revision:"aa39639b7cc53bca"},{url:"/_next/static/chunks/pages/pix-82bb4b93d6da44ef.js",revision:"82bb4b93d6da44ef"},{url:"/_next/static/chunks/pages/pix/alterarlimite-a7d55b32f7fe6b31.js",revision:"a7d55b32f7fe6b31"},{url:"/_next/static/chunks/pages/pix/cobrar-62eaef6c5f40920b.js",revision:"62eaef6c5f40920b"},{url:"/_next/static/chunks/pages/pix/copia-cola-2198bbe786350e72.js",revision:"2198bbe786350e72"},{url:"/_next/static/chunks/pages/pix/depositar-264d733c153b7874.js",revision:"264d733c153b7874"},{url:"/_next/static/chunks/pages/pix/minhaschaves-be570cf7e39dcf11.js",revision:"be570cf7e39dcf11"},{url:"/_next/static/chunks/pages/pix/minhaschaves/gerarqrcode-da28e0a7c210069c.js",revision:"da28e0a7c210069c"},{url:"/_next/static/chunks/pages/pix/minhaschaves/registrar/%5Btype%5D-169d967d4b9dc7ed.js",revision:"169d967d4b9dc7ed"},{url:"/_next/static/chunks/pages/pix/qrcode-c1b377a71d0a26aa.js",revision:"c1b377a71d0a26aa"},{url:"/_next/static/chunks/pages/pix/transferencia-60574070b7d21af0.js",revision:"60574070b7d21af0"},{url:"/_next/static/chunks/pages/planos-73c69190eb59a129.js",revision:"73c69190eb59a129"},{url:"/_next/static/chunks/pages/politica-fe8b9d72f2a6c08d.js",revision:"fe8b9d72f2a6c08d"},{url:"/_next/static/chunks/pages/recargacelular-5c319de8c76e59b6.js",revision:"5c319de8c76e59b6"},{url:"/_next/static/chunks/pages/recebimentos-997a63062ffaf90a.js",revision:"997a63062ffaf90a"},{url:"/_next/static/chunks/pages/reembolso/pix-7452d5ea5176db78.js",revision:"7452d5ea5176db78"},{url:"/_next/static/chunks/pages/register-572907e5928f4d4f.js",revision:"572907e5928f4d4f"},{url:"/_next/static/chunks/pages/register/paraseunegocio-899a28972cfc2bb8.js",revision:"899a28972cfc2bb8"},{url:"/_next/static/chunks/pages/register/paraseunegocio/naotenhoconta-aa3f46265202cc52.js",revision:"aa3f46265202cc52"},{url:"/_next/static/chunks/pages/register/paraseunegocio/tenhoconta-2aed6daa8b66e6ac.js",revision:"2aed6daa8b66e6ac"},{url:"/_next/static/chunks/pages/register/paravoce-708482336d5aa5cb.js",revision:"708482336d5aa5cb"},{url:"/_next/static/chunks/pages/seusconvidados-2f671fd0bfca5472.js",revision:"2f671fd0bfca5472"},{url:"/_next/static/chunks/pages/sobre-ea1f66a51490c047.js",revision:"ea1f66a51490c047"},{url:"/_next/static/chunks/pages/store10x-48e4baeda527934e.js",revision:"48e4baeda527934e"},{url:"/_next/static/chunks/pages/store10x/%5Btype%5D-deafaac3a1a4e33c.js",revision:"deafaac3a1a4e33c"},{url:"/_next/static/chunks/pages/storerewards-7602d406d7109376.js",revision:"7602d406d7109376"},{url:"/_next/static/chunks/pages/tarifas-1b3652358daf45e5.js",revision:"1b3652358daf45e5"},{url:"/_next/static/chunks/pages/taxasetarifas-3c1d3d74f4751bcb.js",revision:"3c1d3d74f4751bcb"},{url:"/_next/static/chunks/pages/termosdeuso-37eb2392c14db87d.js",revision:"37eb2392c14db87d"},{url:"/_next/static/chunks/pages/teste-ebe28f475796e8d3.js",revision:"ebe28f475796e8d3"},{url:"/_next/static/chunks/pages/ticket-conquista-08bd7126ef8de881.js",revision:"08bd7126ef8de881"},{url:"/_next/static/chunks/pages/transacoes-7fde5f33c025300c.js",revision:"7fde5f33c025300c"},{url:"/_next/static/chunks/pages/transferencia-2e4b544f8ae6544f.js",revision:"2e4b544f8ae6544f"},{url:"/_next/static/chunks/pages/transferencia/10x-218f200d592fe82e.js",revision:"218f200d592fe82e"},{url:"/_next/static/chunks/pages/transferencia/banco-d49cf3c9133735ae.js",revision:"d49cf3c9133735ae"},{url:"/_next/static/chunks/pages/transferencia/pix-6b40ac4a9b0f25b4.js",revision:"6b40ac4a9b0f25b4"},{url:"/_next/static/chunks/pages/tutorial-11de827d5b874ba0.js",revision:"11de827d5b874ba0"},{url:"/_next/static/chunks/pages/tutorial/%5Btype%5D-181fa83e92aed8f8.js",revision:"181fa83e92aed8f8"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-fd74784b661bdb5e.js",revision:"fd74784b661bdb5e"},{url:"/_next/static/css/33c12fe5684dc365.css",revision:"33c12fe5684dc365"},{url:"/_next/static/css/a2d3c3d1cd729309.css",revision:"a2d3c3d1cd729309"},{url:"/_next/static/media/inicialPagePhone.47ba0efe.svg",revision:"c6a189b4fa3ad41ca7efbb7e15c90b0e"},{url:"/_next/static/media/invite.b0c826f8.png",revision:"3aa43d16a36feaf4177ec9e1135fa9ae"},{url:"/_next/static/media/logo10xBank-branco.6da0bf1c.png",revision:"4d7642234e1d089fe01333e90bcfc665"},{url:"/_next/static/media/logo10xBank.827db2ed.svg",revision:"61c2f7cd566d71c01671cf600a329c68"},{url:"/_next/static/xU4w210fs_atdJKHkJso8/_buildManifest.js",revision:"573def425e80c1e8b707f9fa3e0281c2"},{url:"/_next/static/xU4w210fs_atdJKHkJso8/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/agregacao.png",revision:"281e99aee28405818214f5f823e09970"},{url:"/archive.svg",revision:"12503e23f038aa0dca38c877b2af9ade"},{url:"/banks/BancoDoBrasil.png",revision:"383890a9f51c7e8cd4d8d0944aee5769"},{url:"/banks/BankOfAmerica.png",revision:"17b4ebbce984bb1b1e825a551930dda0"},{url:"/banks/Itau.png",revision:"fde674f37000c8c0b5f4e0d4a4964724"},{url:"/banks/Nubank.png",revision:"ca1b180da2240c5a5269a27d8dba2008"},{url:"/banks/ailo.png",revision:"182b7c9a3e97cfccc98064ed895d9846"},{url:"/banks/banco-brasil.png",revision:"af47fabaf85dd1a558e951c524d8501c"},{url:"/banks/bradesco-bank.png",revision:"434b4faa26edd359b7278623b748fd41"},{url:"/banks/caixa.png",revision:"7bcab1e70c81d6a9aed39e5045a8be00"},{url:"/banks/chase.png",revision:"250c03c997125c4930ea948f169876b6"},{url:"/banks/citi.png",revision:"8f0cb917f2bdc9a2ead134779e65e2bc"},{url:"/banks/inter.png",revision:"536e5b4d7b8fb864b92f96febe94f7a8"},{url:"/banks/mercado-pago.png",revision:"b11a2458cf259cfe7086ed586339bf5e"},{url:"/banks/modal-mais.png",revision:"b220f62fbfac0281339d4b49c915f9cc"},{url:"/banks/santander.png",revision:"3582aabe1b4e1457ea419c2410b48d61"},{url:"/building_icon.svg",revision:"f7baec21e40ae3d963fb0043e40cfbe7"},{url:"/camera.svg",revision:"0238e3ad6ef48ba2fef73a3a6060a2f1"},{url:"/cards/silver.jpg",revision:"53365657da76054e8eb9a4dcf8859f6a"},{url:"/configuracoes.svg",revision:"415886520575628a6689cf002c2e23d0"},{url:"/conquistadores.svg",revision:"8b033177931d0c6dfa281d57aaeab911"},{url:"/conselhoconsultivo.svg",revision:"ccaf60d1316510edfad1fb7085a5f07f"},{url:"/contabil.svg",revision:"2a868496c0d766a876af89a26623417a"},{url:"/contasBancarias.png",revision:"0f8f8f57ed960bf1ffd9044462abdc91"},{url:"/contasbancarias.svg",revision:"69fa9df4c5ba3785108d7cf540ab9861"},{url:"/convideseusamigos.svg",revision:"96739485cbce61a900c9d61e790f0b97"},{url:"/credit-card.svg",revision:"4a19ef92bfe30199a878469b0af59c49"},{url:"/favicon.ico",revision:"ac24f13cb631c0ec4906fde83f26549e"},{url:"/feedback/chat-text.svg",revision:"c94d5476dffa4dfd336b61bfba8a89d1"},{url:"/feedback/close.svg",revision:"29054dd918339ead5f112f0ca7f167e6"},{url:"/feedback/hero.svg",revision:"8b8fa9000ffa1c67e93ce526cc10485c"},{url:"/fi_filter.svg",revision:"05a398ee39165bc06cbfd51a292c464d"},{url:"/fi_search.svg",revision:"74c49d690606ec0f69fabf9c4b78d2bc"},{url:"/file.svg",revision:"bc0c50dae9179f82aa06f21ed8c4b623"},{url:"/fonts/Glyphter.eot",revision:"a49e686b492c83b3eb78e8dcf6cb56a5"},{url:"/fonts/Glyphter.svg",revision:"ab79af782875278465bd89791b28c7b7"},{url:"/fonts/Glyphter.ttf",revision:"bbc79fb657653f3d293dfc4e1342e78e"},{url:"/fonts/Glyphter.woff",revision:"40f0d4e1771195ba5704814f59f3eb80"},{url:"/home-profile.svg",revision:"fa09bc6a93044c94baac4b591f893244"},{url:"/home/banner/middle.svg",revision:"07d74c43c1a6210d44fb0105b62f09ff"},{url:"/home/banner/others.svg",revision:"582d2b41b1e910d690070c1461c94db5"},{url:"/home/banner/special.svg",revision:"f866dd0764c3642d6292a21fc716ca84"},{url:"/home/banner/start.svg",revision:"8374cf1fc7daa1fffa359bda57609a15"},{url:"/icon-192x192.png",revision:"02ba5df2dee1f04c20aa32e769b0b45d"},{url:"/icon-256x256.png",revision:"98a33e35a2783951654866431c8e5ac0"},{url:"/icon-384x384.png",revision:"8cad2b5edd7def55826dee60704c732b"},{url:"/icon-512x512.png",revision:"5414100b9fa55c5dcfd4b98a15fd0f88"},{url:"/icone10x.png",revision:"d3b059c632bb0b4380473349176223a6"},{url:"/icons/award.svg",revision:"3983abc889a09b3e9bd177b48c0b0d52"},{url:"/icons/bar-chart.svg",revision:"8935f2a829974bb459f6d262706d641a"},{url:"/icons/bookmark.svg",revision:"7c1dc80d38024b2980a5f246491ae7e8"},{url:"/icons/calendar.svg",revision:"ddd5fe29263a3b5774ee053abed008a9"},{url:"/icons/chat.svg",revision:"4bb9f1133b0170af18997d0bee2f6f2d"},{url:"/icons/credit-card.svg",revision:"ac9ad9e5bc8a0940075035fa7962c98a"},{url:"/icons/edit.svg",revision:"5a90c347a91cecf42b2fae2678ee3357"},{url:"/icons/eye-off.svg",revision:"f2ccfd46fa1a8a9b02a47548b5178519"},{url:"/icons/pencil.svg",revision:"8acd52b645c202d39e66a61d8796af5e"},{url:"/icons/pie-chart.svg",revision:"1d5595c6ae825fe2fabd0d359fb6532e"},{url:"/icons/qr-code.svg",revision:"ba4646054daa8afcba848b082e8adf11"},{url:"/icons/settings.svg",revision:"3fae342cc5fe64ad8e258c09d64fd506"},{url:"/icons/share.svg",revision:"f9d4fce7e9f91a51c164d4177ab9eaaf"},{url:"/icons/share/fi_facebook.svg",revision:"a79d718f29872321a0395cca32b7c23e"},{url:"/icons/share/fi_instagram.svg",revision:"9bf2176ab66f174361016d6c2f91edda"},{url:"/icons/share/fi_linkedin.svg",revision:"63cd7c306043ebad354bd2cab6d2dcdc"},{url:"/icons/share/fi_mail.svg",revision:"072043357496dd6ecb17e7ee556b0a46"},{url:"/icons/share/fi_twitter.svg",revision:"ee20cf1379e14e28923258b902be20a0"},{url:"/icons/share/fi_youtube.svg",revision:"a3687f018f427dab75001b8cd62fffd5"},{url:"/icons/share/ic_baseline-whatsapp.svg",revision:"3e639ff30e19a3fda75599288498de76"},{url:"/icons/share/pinterest.svg",revision:"d01a21bb86bb72d0ed7a3961a5b76e92"},{url:"/icons/upload.svg",revision:"26205b2e6ebb7cf21e99d3e79fb369ff"},{url:"/image.svg",revision:"5f7e3fcacfb39675055ff8f69fd14069"},{url:"/info.svg",revision:"fd866b74d48b8bd7150d086ef958c728"},{url:"/inicialPagePhone.png",revision:"d01d6fb9eccff65704a5844716545fd3"},{url:"/inicialPagePhone.svg",revision:"c6a189b4fa3ad41ca7efbb7e15c90b0e"},{url:"/invite.png",revision:"3aa43d16a36feaf4177ec9e1135fa9ae"},{url:"/list_icon.svg",revision:"bd17804cb024ad2cbbb22cd4c8ff1ec1"},{url:"/loading.gif",revision:"283963cf13e1e356aa0e033c8176d81b"},{url:"/log-in.svg",revision:"d4b7e6273ef0ef365fac6cec5cf3332f"},{url:"/logo10xBank-branco.png",revision:"4d7642234e1d089fe01333e90bcfc665"},{url:"/logo10xBank.png",revision:"4aa81a49a4883d92fbd8f1be0c1cda7e"},{url:"/logo10xBank.svg",revision:"61c2f7cd566d71c01671cf600a329c68"},{url:"/logo_10xbank.svg",revision:"b77afd7e82437f750e95516c3fa4c330"},{url:"/logo_pixland.png",revision:"d3b059c632bb0b4380473349176223a6"},{url:"/logotipo.png",revision:"5f79eacdcd3306390c4b2a4bce8be5c0"},{url:"/mailscreen/lock.svg",revision:"bba548a75d975954453acd9e810ea776"},{url:"/mailscreen/norton.png",revision:"aeb04fc1a30364f1489f16a71ad84e56"},{url:"/mailscreen/sectigo.png",revision:"20b4416c28f622b9144358a8bdd29e88"},{url:"/mailscreen/secure.png",revision:"1171b1809c831a0e3181fd162f5e8c3d"},{url:"/mailscreen/trustedsite.png",revision:"86b2d50084f7554c54ad84d903de42b6"},{url:"/manifest.json",revision:"5932a26f44c34c01397b502a3c1636d1"},{url:"/modal-error.svg",revision:"b8b7a7f01d3e61bd38e0fed04a63cad5"},{url:"/modal-success.svg",revision:"8994a06dafc9c2ef05b5ff9088957c96"},{url:"/money-bill.svg",revision:"78d75486ad0bc38d7c98cea3e6ecda94"},{url:"/offer-slide.png",revision:"72dbe23014d6b7a749a11075e6e736a5"},{url:"/offersImg/10x-university.png",revision:"6234b8ac26743c0df177afbdbb879c68"},{url:"/offersImg/10xbank-university-large.png",revision:"8f1c4aedf4bfdf302c61a70844eb402b"},{url:"/offersImg/biblioteca-10x.png",revision:"dc3a099f73c83fb5993b3f55f7203ce8"},{url:"/offersImg/biblioteca-digital-large.png",revision:"0afc63d24c0e4e10e76d069d862e843a"},{url:"/offersImg/biblioteca-digital.png",revision:"4d6771a0029565897049ee6123acbe59"},{url:"/offersImg/biblioteca10x-large.png",revision:"35e42d959b6bbdf9a0a22b33ab9e5d8c"},{url:"/offersImg/cashback-large.png",revision:"e4d8a77ef0c8a3bd02bbd6703e1c86c5"},{url:"/offersImg/cashback-recarga-large.png",revision:"8c818c398065c5a99343f07f2d54761b"},{url:"/offersImg/cashback-recarga.png",revision:"5a5531faa85ceec0a49ca7c3fa7d63b1"},{url:"/offersImg/cashback-telefonia.png",revision:"c5a09c67349f09aef7fc0ab0dcf32d8c"},{url:"/offersImg/dyson.png",revision:"a98cb9aef98cbd82787bbd7834a4053f"},{url:"/offersImg/games.png",revision:"fc3a522c261c1e7c027dfd04034e945e"},{url:"/offersImg/ganhe-fotos.png",revision:"5dcc45d24f8dec623ae8c88f8a7746f0"},{url:"/offersImg/ifood-large.png",revision:"5ded16ee7c7e97154ce52c6cf1b9cf55"},{url:"/offersImg/ifood.png",revision:"9a3a767deca0b2e3d77ab3afec77f991"},{url:"/offersImg/pepsi.png",revision:"08cb221acef6d728959f2f7a7331a786"},{url:"/offersImg/pg.png",revision:"f5292c738b8bdc339a706e7fc8d8c114"},{url:"/offersImg/uber-large.png",revision:"23f9df1cf0e6ac4d42429e15d22136f9"},{url:"/offersImg/uber.png",revision:"cd069cc258cf252947f4dd62b03cfc15"},{url:"/offersImg/urgencia-odonto-large.png",revision:"93a3dbae9cf1745adcaca653d3c170a8"},{url:"/offersImg/urgencia-odonto.png",revision:"7a404d146c777d183e8069389781fee8"},{url:"/offersImg/veek.png",revision:"92911bb1c3d756dc4b989bc7aa19fd65"},{url:"/perfilImage.png",revision:"20cafe752c92d457451cc9d98af03370"},{url:"/person_icon.svg",revision:"d2130e7c625da1b6617ef2ffed357e05"},{url:"/pix/banco-central.svg",revision:"d2bd6c2e0919d9c469701f277118c094"},{url:"/pix/bb.svg",revision:"f4ff7aed2b669a828b9585fcb6b999d0"},{url:"/pix/copy-paste.svg",revision:"e2e268f6bf40ee1dbf08908b86ef1908"},{url:"/pix/deposit.svg",revision:"fc086c7397c1122d2184ef9d6ef802f9"},{url:"/pix/fi_corner-down-left.svg",revision:"e56f0345e6d36281ea100ec54e8f2315"},{url:"/pix/fi_help-circle.svg",revision:"74065c4149dbecceb2c0232d84d6a30f"},{url:"/pix/fi_mail.svg",revision:"18884fefe7a1573a4331a1e2220f3a6d"},{url:"/pix/nubank.svg",revision:"c47141c72cb4874a93e512f6fd8cbda9"},{url:"/pix/pix.svg",revision:"a1b97eb0de62fceb45f13422db141c90"},{url:"/pix/qr-code.svg",revision:"ad368335fa402d49aa3742f4f92b2b76"},{url:"/pix/santander.svg",revision:"0ca7043760ebec96fcc9e0c63d68812a"},{url:"/pix/settings.svg",revision:"01b3e99e5acc2be5301d2e19ddfa7b70"},{url:"/pix/transfer.svg",revision:"fb6200ab97fb70b5098fd8e906b9d5be"},{url:"/pix/u_comment-dots.svg",revision:"7a5b35d17dd0400793cdf88363284d4a"},{url:"/pix/wallet.svg",revision:"fc097758a6ef7aad73fc8a5e7606b399"},{url:"/plans/cardEliteBtn.jpg",revision:"7bd88716e8363ed5c634913ed04faa95"},{url:"/plans/cardMiddleBtn.jpg",revision:"07585085f451590399f184938ed95e50"},{url:"/plans/cardPremierBtn.jpg",revision:"e3ac799ebbdd9386ea6ca4c7414dcf1e"},{url:"/plans/cardSpecialBtn.jpg",revision:"5eab501a3672a14a7f9286aea88bc284"},{url:"/plans/cardStartBtn.jpg",revision:"225f71e36d06186eda332aa7dd52ac44"},{url:"/plans/cards/elite.png",revision:"a82661bcd285847a12c51064cd0c914a"},{url:"/plans/cards/middle.png",revision:"134be5619d24c41622ec8558d2acffd8"},{url:"/plans/cards/premier.png",revision:"9e90e2f2bcbded1b2daff82fe77243eb"},{url:"/plans/cards/special.png",revision:"40e967fdd34c3cab826afd924a0e79fb"},{url:"/plans/cards/start.png",revision:"24cc464d28270aa5cc8cdb19aca9390d"},{url:"/plans/start.jpg",revision:"624a038235e019c47ebe45b9ff786b8d"},{url:"/plus-square.svg",revision:"99483f3f44bbc17495df561802d5e2ea"},{url:"/programafidelidade.svg",revision:"6394f0126951d196ef84f1a5b9be5f23"},{url:"/programs/ame.png",revision:"fba1449baaf80bad0143e85c014fa8e9"},{url:"/programs/azul.png",revision:"25e4d7be4e187e7050e81bdd15108796"},{url:"/programs/latam.png",revision:"67050d29c2629826f5042746903390b4"},{url:"/programs/livelo.png",revision:"89199e44224b672856bf2b3c86a48145"},{url:"/programs/multiplus.png",revision:"f341d9e487328bb133a25b48de760105"},{url:"/programs/smiles.png",revision:"dfb9e3da11cb00922089bfc73cc6a96c"},{url:"/qr.png",revision:"145999df23c9639e5512450c90a07246"},{url:"/send.svg",revision:"f4ed63b2f146f9364b8913b90803082a"},{url:"/seusconvidados.svg",revision:"eeeb830351f7f7456b67579e9b15d68d"},{url:"/shield_icon.svg",revision:"7157d37c104f00bf51c4135f20918f90"},{url:"/slide-image-1.png",revision:"41853964833fd2528190fc342af6823d"},{url:"/slides/slide-01.png",revision:"77edff277bef543c324b32e2371f0aac"},{url:"/slides/slide-02.png",revision:"c89c2f1485406da8d8da22354de4810b"},{url:"/slides/slide-03.png",revision:"ba34cc89bc4b669c28f2820a4a68914b"},{url:"/slides/slide-04.png",revision:"a1a367ce45ba8adcdf17a6e7782be62e"},{url:"/slides/slide-05.png",revision:"a168747ad78d84baed5f691969d3804f"},{url:"/slides/slide-06.png",revision:"585b4e45782386742a309b72080839f2"},{url:"/slides/slide-07.png",revision:"c2579b6585ed4deedd71f77d258b1005"},{url:"/smallLogo10xBank.svg",revision:"44104dd353dc4666d010393a1753f646"},{url:"/taxasetarifas.svg",revision:"dbee51e3445811ce37336ea67be9b638"},{url:"/tutorial/abrir-conta.png",revision:"931bbf8be85505ac5ebe96fb83acb828"},{url:"/tutorial/alterar-senha.svg",revision:"3b267a6ae7f5d6d9da04a0afc7e08ced"},{url:"/tutorial/alterar-senha/1.svg",revision:"f471fceed0df8ef32f9eb2568d70051d"},{url:"/tutorial/alterar-senha/2.svg",revision:"17087bcb7dfdbfa15a7655f93b7cb0bd"},{url:"/tutorial/cadastro/1.svg",revision:"db9e23cab3e5cacc04d3ca5e4da336c5"},{url:"/tutorial/cadastro/2.svg",revision:"28c32b826c624fdf32783e5865e7ea5a"},{url:"/tutorial/cadastro/3.svg",revision:"0e6f06047578b1f28395087e4e93c2b0"},{url:"/tutorial/cadastro/4.svg",revision:"b369ae46303af419d7c788cd8ea71a23"},{url:"/tutorial/cadastro/5.svg",revision:"529aa998732bc9ae8b9e4b8e61c3466f"},{url:"/tutorial/conectar-conta.svg",revision:"579bc23220280c47bd63c5d8297fba05"},{url:"/tutorial/conectar/1.svg",revision:"79bb8bc7f1b02c2bf01ae98ba66b0d46"},{url:"/tutorial/conectar/2.svg",revision:"ee271a365f486451a730e12cb542ee18"},{url:"/tutorial/conectar/3.svg",revision:"b615d528d042ae4fcac9719419d57f63"},{url:"/tutorial/conselho.svg",revision:"078d80ead8081ebc7f840a880d41283d"},{url:"/tutorial/conselho/1.svg",revision:"8226313b6a053381baae7d48cd083f13"},{url:"/tutorial/conselho/2.svg",revision:"09cd0d59ec3f4b05a02641b0501c7a79"},{url:"/tutorial/convide.svg",revision:"f704b6c0c0c233ae0f39bb3b6cb35130"},{url:"/tutorial/convide/1.svg",revision:"b7bc250b22eb022942ee07c6e9298db4"},{url:"/tutorial/convide/2.svg",revision:"f435690d579deb6bb55bb44cd2e0c65c"},{url:"/tutorial/criar-pin.svg",revision:"8d5f9c158780296a6a325e99a4c72360"},{url:"/tutorial/deposito.svg",revision:"e2800905a02f96996f7f8c800dfc2d94"},{url:"/tutorial/deposito/1.svg",revision:"00454f9d6a31fff0c6bd0372f6504a32"},{url:"/tutorial/deposito/2.svg",revision:"e313c26eb0a0e28244fa9dbcf6124e53"},{url:"/tutorial/deposito/3.svg",revision:"3c04dfe14624c224f02379745e5fe8fc"},{url:"/tutorial/deposito/4.svg",revision:"c195caa75303a61a8b70238f7cb5ee6d"},{url:"/tutorial/deposito/5.svg",revision:"e742ab059d4dbbb9fa2f28ad530b48b1"},{url:"/tutorial/deposito/6.svg",revision:"7e9d13ab0d361efca357a84de43b6c94"},{url:"/tutorial/desabilitar-dois-fatores.png",revision:"7d14a354f27ec204ecfb4c70bee897a9"},{url:"/tutorial/dois-fatores.png",revision:"5b3f1000abfc93261ded264955784214"},{url:"/tutorial/dois-fatores/1.svg",revision:"818acfee1aea653ac08a3b31ef7d1f86"},{url:"/tutorial/dois-fatores/2.svg",revision:"c298ae4a1fe015ac2fb80296ca3640f1"},{url:"/tutorial/dois-fatores/3.svg",revision:"52fb63f13dd8fd848d99dc76f2dae035"},{url:"/tutorial/esqueceu-senha.svg",revision:"29cc3f979946cb215aba6d6d07bec44b"},{url:"/tutorial/left.svg",revision:"b18b0e7e1ab02af9b605f8206e686633"},{url:"/tutorial/mentor.png",revision:"0b62c70b5fb8662ed42636df9ee4c26b"},{url:"/tutorial/mentoria/1.svg",revision:"ad1b13246cb8378344b66cb2b6a952d0"},{url:"/tutorial/mentoria/2.svg",revision:"2b185cc854e53bb8e665f381548db2f6"},{url:"/tutorial/mentoria/3.svg",revision:"e754b8efa0b85dca141db30f8383788e"},{url:"/tutorial/mentoria/4.svg",revision:"435ca6e5f66248e281c2b4266a0b9c1c"},{url:"/tutorial/outra-conta/1.svg",revision:"c2849e0c96e21b71a84ddfcc0437ace9"},{url:"/tutorial/outra-conta/2.svg",revision:"cbe45402e71e049b40099e41aaf75dac"},{url:"/tutorial/outra-conta/3.svg",revision:"f5742142fc2fe2aa379255e5656b1eec"},{url:"/tutorial/pin/1.svg",revision:"0fec57711e15666cf91517d1f3a63b8a"},{url:"/tutorial/pin/2.svg",revision:"5f1238ce643b1cceb12e2aba069a7414"},{url:"/tutorial/pin/3.svg",revision:"292b4b31732efec23262834f9353917c"},{url:"/tutorial/recuperar-senha/1.svg",revision:"9e1015b433d0dce35716756150f44c1b"},{url:"/tutorial/recuperar-senha/2.svg",revision:"20ebc7418b36d5e3b1a24633a025ba5b"},{url:"/tutorial/recuperar-senha/3.svg",revision:"7bcf0f9de296059b4efcc5a2c244d3b0"},{url:"/tutorial/retirada.svg",revision:"d62ff9b9a0fd08fd1ac9fba3a3a44e03"},{url:"/tutorial/retirada/1.svg",revision:"00014f5bdddc0005726371f9a75f8027"},{url:"/tutorial/retirada/2.svg",revision:"1883a686c5ad42ca31c6326a0d986132"},{url:"/tutorial/retirada/3.svg",revision:"812d52567adbe133fab612d033862599"},{url:"/tutorial/retirada/4.svg",revision:"51cdba36eed625afe13577dca626d528"},{url:"/tutorial/retirada/5.svg",revision:"431f0d50af0364d2c57b48494e3f5cfd"},{url:"/tutorial/retirada/6.svg",revision:"3512004d9aca73305e4d0c0c5f9574a8"},{url:"/tutorial/right.svg",revision:"bd5aa5bcee5465a5f7613c682c453469"},{url:"/tutorial/tipos-de-conta.svg",revision:"b61a07de2f8398b02385595308472109"},{url:"/tutorial/tutorial.svg",revision:"0e86d8dc7e5f6511e01fdc5110a42c9e"},{url:"/usuarios.svg",revision:"575b37cea87a21bce0f4112de3e1c5ef"},{url:"/vercel.svg",revision:"0277e415b4bba9361a057a607884c295"},{url:"/video-poster.png",revision:"622d057ddfb6adebea969fcec9977e1f"},{url:"/xPhone.svg",revision:"ee32c764052e3183cb1a61da734b3072"},{url:"/xSuitcase.svg",revision:"2813c4086d5c2fea078062b73517a715"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));