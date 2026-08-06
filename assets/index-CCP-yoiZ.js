(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:`odesa`,name:`Одесса`},{id:`kyiv`,name:`Киев`},{id:`yuzhne`,name:`Южное`},{id:`chornomorsk`,name:`Черноморск`}],t=[{id:1,title:`Запуск EVS.PRO 2026`,subtitle:`Вся коммерция и общение региона в одном месте`,badge:`PROMO`,bg:`from-blue-600 to-indigo-900`},{id:2,title:`Размещение объявлений 0%`,subtitle:`Продавай товары без комиссий первую неделю`,badge:`ОТКРЫТИЕ`,bg:`from-emerald-600 to-teal-900`},{id:3,title:`Быстрый ремонт FIXOMAT`,subtitle:`Сервисный центр прямо у вашего почтомата`,badge:`СЕРВИС`,bg:`from-purple-600 to-pink-900`}],n=[{id:`repair`,name:`Ремонт техники`,icon:`🛠️`},{id:`auto`,name:`Авто / СТО`,icon:`🚗`},{id:`delivery`,name:`Курьеры`,icon:`📦`},{id:`beauty`,name:`Красота / Мастера`,icon:`✂️`},{id:`build`,name:`Строительство`,icon:`🏗️`},{id:`it`,name:`IT / Фриланс`,icon:`💻`}],r=[{id:101,title:`iPhone 15 Pro 128GB`,price:`34 500 ₴`,location:`Одесса`,tag:`Б/у`,imageBg:`from-gray-700 to-gray-900`},{id:102,title:`Ноутбук ASUS ROG Strix`,price:`48 000 ₴`,location:`Киев`,tag:`Топ`,imageBg:`from-blue-900 to-slate-800`},{id:103,title:`Набор инструментов Pro`,price:`3 200 ₴`,location:`Южное`,tag:`Новое`,imageBg:`from-amber-800 to-zinc-900`}],i=[{id:201,title:`Мастер по ремонту электроники`,salary:`25 000 - 40 000 ₴`,type:`Полная занятость`,company:`FIXOMAT`},{id:202,title:`Водитель с личным авто`,salary:`1 500 ₴ / день`,type:`Гибкий график`,company:`Логистик Экспресс`}],a=[{id:`gen-odesa`,name:`💬 Главный Чат Одессы`,location:`odesa`,online:412,unread:3},{id:`market-odesa`,name:`🛍️ Барахолка / OLX Одесса`,location:`odesa`,online:189,unread:0},{id:`jobs-odesa`,name:`💼 Работа и Вакансии Одесса`,location:`odesa`,online:95,unread:12},{id:`gen-yuzhne`,name:`🏘️ Сообщество Южное`,location:`yuzhne`,online:88,unread:0}],o={"gen-odesa":[{id:1,user:`Виталий Системник`,text:`Подскажите проверенный сервис по ремонту видеокарт?`,time:`14:20`,isMine:!1},{id:2,user:`Евгений EVS`,text:`Заходи в раздел Услуги -> Ремонт техники, там весь список с гарантией!`,time:`14:22`,isMine:!0}]},s=new class{constructor(){this.data={activeTab:`feed`,currentLocation:`odesa`,activeChatId:`gen-odesa`,user:{name:`Евгений`,handle:`@evs_pro`,balance:1450,currency:`₴`,isAdmin:!0},chats:[...a],messages:{...o},isSidebarOpen:!1,activeModal:null},this.listeners=[]}subscribe(e){this.listeners.push(e)}notify(){this.listeners.forEach(e=>e(this.data))}setTab(e){this.data.activeTab=e,this.notify()}setLocation(e){this.data.currentLocation=e;let t=this.data.chats.find(t=>t.location===e);t&&(this.data.activeChatId=t.id),this.notify()}setActiveChat(e){this.data.activeChatId=e,this.data.activeTab=`chats`,this.data.isSidebarOpen=!1,this.notify()}sendMessage(e){if(!e.trim())return;let t=this.data.activeChatId;this.data.messages[t]||(this.data.messages[t]=[]);let n=new Date,r=`${n.getHours().toString().padStart(2,`0`)}:${n.getMinutes().toString().padStart(2,`0`)}`;this.data.messages[t].push({id:Date.now(),user:this.data.user.name,text:e,time:r,isMine:!0}),this.notify()}toggleSidebar(){this.data.isSidebarOpen=!this.data.isSidebarOpen,this.notify()}openModal(e){this.data.activeModal=e,this.notify()}closeModal(){this.data.activeModal=null,this.notify()}topUpWallet(e){this.data.user.balance+=e,this.notify()}};function c(e){let t=document.getElementById(`app`);t.innerHTML=`
    ${l(e)}
    ${u(e)}
    
    <div class="flex-1 flex overflow-hidden relative">
      ${e.activeTab===`chats`?p(e):``}
      <main class="flex-1 flex flex-col bg-tg-bg overflow-y-auto scrollbar-none relative">
        ${d(e)}
      </main>
    </div>

    ${_(e)}
  `,v(e)}function l(t){return e.find(e=>e.id===t.currentLocation)?.name,`
    <header class="flex-shrink-0 bg-tg-header pt-safe border-b border-tg-divider z-30">
      <div class="flex items-center justify-between px-3 h-14">
        <div class="flex items-center gap-2.5">
          <button onclick="window.appActions.toggleSidebar()" class="w-9 h-9 flex items-center justify-center text-tg-muted hover:text-white rounded-lg hover:bg-white/5 transition">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
          
          <!-- Выбор Города/Села -->
          <div class="relative">
            <select onchange="window.appActions.changeLocation(this.value)" class="bg-tg-input-bg text-xs font-semibold px-2.5 py-1.5 rounded-lg border border-white/10 text-tg-accent focus:outline-none cursor-pointer">
              ${e.map(e=>`<option value="${e.id}" ${e.id===t.currentLocation?`selected`:``}>📍 ${e.name}</option>`).join(``)}
            </select>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <!-- Кошелек пользователя -->
          <button onclick="window.appActions.openModal('wallet')" class="bg-tg-input-bg hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-1.5 transition">
            <span class="text-xs text-tg-muted">Баланс:</span>
            <span class="text-xs font-bold text-green-400">${t.user.balance.toLocaleString()} ${t.user.currency}</span>
          </button>

          ${t.user.isAdmin?`
            <button onclick="window.appActions.openModal('admin')" class="w-8 h-8 bg-tg-accent/20 text-tg-accent rounded-lg flex items-center justify-center font-bold text-xs border border-tg-accent/30" title="Админ панель">
              ⚙️
            </button>
          `:``}
        </div>
      </div>
    </header>
  `}function u(e){return`
    <div class="flex items-center px-3 gap-2 overflow-x-auto scrollbar-none border-b border-tg-divider h-11 bg-tg-header/60 flex-shrink-0">
      ${[{id:`feed`,label:`🔥 Главная Лента`},{id:`chats`,label:`💬 Чаты Города`},{id:`olx`,label:`🛍️ Барахолка (OLX)`},{id:`jobs`,label:`💼 Работа UA`}].map(t=>`
        <button onclick="window.appActions.setTab('${t.id}')" class="px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition ${e.activeTab===t.id?`bg-tg-accent text-white shadow-sm`:`text-tg-muted hover:text-white hover:bg-white/5`}">
          ${t.label}
        </button>
      `).join(``)}
    </div>
  `}function d(e){switch(e.activeTab){case`feed`:return f(e);case`chats`:return m(e);case`olx`:return h(e);case`jobs`:return g(e);default:return f(e)}}function f(e){return`
    <div class="p-3 space-y-4 pb-20">
      <!-- 1. Автоскролл-постеры / Баннеры -->
      <section>
        <div class="flex overflow-x-auto gap-3 scrollbar-none snap-x snap-mandatory">
          ${t.map(e=>`
            <div class="snap-center min-w-[85%] sm:min-w-[60%] rounded-2xl bg-gradient-to-r ${e.bg} p-4 flex flex-col justify-between h-36 shadow-lg border border-white/10 relative overflow-hidden">
              <span class="text-[10px] font-bold uppercase tracking-wider bg-black/40 px-2 py-0.5 rounded-md w-max text-white border border-white/10">${e.badge}</span>
              <div>
                <h3 class="text-base font-bold text-white leading-snug">${e.title}</h3>
                <p class="text-xs text-white/80 mt-1">${e.subtitle}</p>
              </div>
            </div>
          `).join(``)}
        </div>
      </section>

      <!-- 2. Карусель Категорий Услуг -->
      <section>
        <h2 class="text-xs font-bold uppercase tracking-wider text-tg-muted mb-2.5">Категории Услуг</h2>
        <div class="grid grid-cols-3 gap-2">
          ${n.map(e=>`
            <div class="bg-tg-card hover:bg-tg-hover p-3 rounded-xl border border-white/5 flex flex-col items-center justify-center text-center cursor-pointer transition">
              <span class="text-2xl mb-1">${e.icon}</span>
              <span class="text-xs font-medium text-tg-text leading-tight">${e.name}</span>
            </div>
          `).join(``)}
        </div>
      </section>

      <!-- 3. Карусель Промо Товаров (OLX виджет) -->
      <section>
        <div class="flex justify-between items-center mb-2.5">
          <h2 class="text-xs font-bold uppercase tracking-wider text-tg-muted">Промо Товары</h2>
          <button onclick="window.appActions.setTab('olx')" class="text-xs text-tg-accent hover:underline">Все товары →</button>
        </div>
        <div class="flex overflow-x-auto gap-3 scrollbar-none">
          ${r.map(e=>`
            <div class="min-w-[150px] bg-tg-card rounded-xl border border-white/5 overflow-hidden flex flex-col justify-between shadow-sm">
              <div class="h-24 bg-gradient-to-tr ${e.imageBg} flex items-center justify-center relative">
                <span class="absolute top-1.5 right-1.5 text-[9px] bg-tg-accent font-bold px-1.5 py-0.5 rounded text-white">${e.tag}</span>
              </div>
              <div class="p-2.5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 class="text-xs font-medium truncate">${e.title}</h4>
                  <p class="text-xs font-bold text-green-400 mt-0.5">${e.price}</p>
                </div>
                <span class="text-[10px] text-tg-muted mt-2">📍 ${e.location}</span>
              </div>
            </div>
          `).join(``)}
        </div>
      </section>
    </div>
  `}function p(e){let t=e.chats.filter(t=>t.location===e.currentLocation);return`
    <aside class="${e.isSidebarOpen?`translate-x-0`:`-translate-x-full md:translate-x-0`} w-full md:w-72 bg-tg-header border-r border-tg-divider flex flex-col absolute inset-y-0 left-0 z-20 transition-transform duration-300 md:relative">
      <div class="p-3 border-b border-tg-divider">
        <h3 class="text-xs font-bold uppercase tracking-wider text-tg-muted">Чаты региона</h3>
      </div>
      <div class="flex-1 overflow-y-auto divide-y divide-tg-divider/40">
        ${t.map(t=>`
          <div onclick="window.appActions.setActiveChat('${t.id}')" class="p-3 hover:bg-tg-hover cursor-pointer transition flex justify-between items-center ${e.activeChatId===t.id?`bg-tg-hover border-l-2 border-tg-accent`:``}">
            <div>
              <h4 class="text-xs font-semibold">${t.name}</h4>
              <p class="text-[11px] text-tg-muted">${t.online} участников в сети</p>
            </div>
            ${t.unread?`<span class="bg-tg-accent text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">${t.unread}</span>`:``}
          </div>
        `).join(``)}
      </div>
    </aside>
  `}function m(e){let t=e.chats.find(t=>t.id===e.activeChatId),n=e.messages[e.activeChatId]||[];return`
    <div class="flex-1 flex flex-col h-full bg-tg-bg">
      <!-- Закрепленное сообщение / Заголовок -->
      <div class="bg-tg-header/80 backdrop-blur px-3 py-2 border-b border-tg-divider flex justify-between items-center">
        <div>
          <h3 class="text-xs font-bold text-white">${t?.name||`Чат`}</h3>
          <p class="text-[10px] text-tg-muted">Прямое подключение • Сообщения не удаляются</p>
        </div>
      </div>

      <!-- Сообщения -->
      <div id="chat-messages" class="flex-1 overflow-y-auto p-3 space-y-2.5">
        ${n.map(e=>`
          <div class="flex flex-col ${e.isMine?`items-end`:`items-start`}">
            <span class="text-[10px] text-tg-muted mb-0.5 px-1">${e.user}</span>
            <div class="${e.isMine?`bg-tg-my-msg text-white rounded-br-xs`:`bg-tg-other-msg text-tg-text rounded-bl-xs`} px-3 py-2 rounded-2xl max-w-[85%] text-xs shadow-sm">
              <p class="leading-relaxed">${e.text}</p>
              <span class="text-[9px] text-tg-muted/80 float-right mt-1 ml-2">${e.time}</span>
            </div>
          </div>
        `).join(``)}
      </div>

      <!-- Поле ввода -->
      <form onsubmit="window.appActions.handleSend(event)" class="bg-tg-header p-2 border-t border-tg-divider flex items-center gap-2">
        <input id="chat-input" type="text" placeholder="Написать сообщение..." class="flex-1 bg-tg-input-bg text-xs text-white px-3 py-2 rounded-xl focus:outline-none border border-white/5">
        <button type="submit" class="bg-tg-accent hover:bg-blue-600 text-white p-2 rounded-xl transition">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></svg>
        </button>
      </form>
    </div>
  `}function h(e){return`
    <div class="p-3 space-y-3 pb-20">
      <div class="flex justify-between items-center">
        <h2 class="text-sm font-bold">Барахолка & Объявления</h2>
        <button class="bg-tg-accent text-white px-3 py-1.5 rounded-lg text-xs font-semibold">+ Подать объявление</button>
      </div>
      <div class="grid grid-cols-2 gap-2.5">
        ${r.map(e=>`
          <div class="bg-tg-card rounded-xl border border-white/5 overflow-hidden flex flex-col justify-between">
            <div class="h-28 bg-gradient-to-tr ${e.imageBg} flex items-center justify-center">
              <span class="text-xs text-white/50">Фото товара</span>
            </div>
            <div class="p-2.5">
              <h4 class="text-xs font-semibold truncate">${e.title}</h4>
              <p class="text-xs font-bold text-green-400 mt-1">${e.price}</p>
              <button class="w-full mt-2 bg-tg-input-bg hover:bg-white/10 text-xs py-1.5 rounded-lg border border-white/10 transition">Написать продавцу</button>
            </div>
          </div>
        `).join(``)}
      </div>
    </div>
  `}function g(e){return`
    <div class="p-3 space-y-3 pb-20">
      <div class="flex justify-between items-center">
        <h2 class="text-sm font-bold">Работа & Vacancies</h2>
        <button class="bg-green-600 text-white px-3 py-1.5 rounded-lg text-xs font-semibold">+ Вакансия</button>
      </div>
      <div class="space-y-2">
        ${i.map(e=>`
          <div class="bg-tg-card p-3 rounded-xl border border-white/5 flex justify-between items-center">
            <div>
              <h4 class="text-xs font-bold text-white">${e.title}</h4>
              <p class="text-[11px] text-tg-muted mt-0.5">${e.company} • ${e.type}</p>
              <p class="text-xs font-bold text-green-400 mt-1">${e.salary}</p>
            </div>
            <button class="bg-tg-accent/20 text-tg-accent hover:bg-tg-accent hover:text-white px-3 py-1.5 rounded-lg text-xs transition">Откликнуться</button>
          </div>
        `).join(``)}
      </div>
    </div>
  `}function _(e){return`
    <nav class="flex-shrink-0 bg-tg-header border-t border-tg-divider h-14 pb-safe flex items-center justify-around z-30">
      <button onclick="window.appActions.setTab('feed')" class="flex flex-col items-center gap-0.5 text-xs ${e.activeTab===`feed`?`text-tg-accent font-bold`:`text-tg-muted`}">
        <span class="text-base">🏠</span>
        <span class="text-[10px]">Лента</span>
      </button>
      <button onclick="window.appActions.setTab('chats')" class="flex flex-col items-center gap-0.5 text-xs ${e.activeTab===`chats`?`text-tg-accent font-bold`:`text-tg-muted`}">
        <span class="text-base">💬</span>
        <span class="text-[10px]">Чаты</span>
      </button>
      <button onclick="window.appActions.setTab('olx')" class="flex flex-col items-center gap-0.5 text-xs ${e.activeTab===`olx`?`text-tg-accent font-bold`:`text-tg-muted`}">
        <span class="text-base">🛍️</span>
        <span class="text-[10px]">OLX</span>
      </button>
      <button onclick="window.appActions.setTab('jobs')" class="flex flex-col items-center gap-0.5 text-xs ${e.activeTab===`jobs`?`text-tg-accent font-bold`:`text-tg-muted`}">
        <span class="text-base">💼</span>
        <span class="text-[10px]">Работа</span>
      </button>
    </nav>
  `}function v(e){let t=document.getElementById(`modal-root`);if(!e.activeModal){t.innerHTML=``;return}e.activeModal===`wallet`?t.innerHTML=`
      <div class="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div class="bg-tg-header border border-white/10 w-full max-w-sm rounded-2xl p-4 space-y-4">
          <div class="flex justify-between items-center border-b border-tg-divider pb-2">
            <h3 class="font-bold text-sm">Кошелек EVS.PRO</h3>
            <button onclick="window.appActions.closeModal()" class="text-tg-muted hover:text-white">✕</button>
          </div>
          <div class="text-center py-2">
            <span class="text-xs text-tg-muted">Ваш Баланс</span>
            <h2 class="text-2xl font-bold text-green-400 mt-1">${e.user.balance.toLocaleString()} ${e.user.currency}</h2>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <button onclick="window.appActions.topUp(100)" class="bg-tg-accent hover:bg-blue-600 py-2 rounded-xl text-xs font-semibold transition">+100 ₴</button>
            <button onclick="window.appActions.topUp(500)" class="bg-tg-accent hover:bg-blue-600 py-2 rounded-xl text-xs font-semibold transition">+500 ₴</button>
          </div>
        </div>
      </div>
    `:e.activeModal===`admin`&&(t.innerHTML=`
      <div class="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div class="bg-tg-header border border-white/10 w-full max-w-md rounded-2xl p-4 space-y-3">
          <div class="flex justify-between items-center border-b border-tg-divider pb-2">
            <h3 class="font-bold text-sm">Панель Администратора</h3>
            <button onclick="window.appActions.closeModal()" class="text-tg-muted hover:text-white">✕</button>
          </div>
          <div class="space-y-2 text-xs">
            <button class="w-full text-left bg-tg-input-bg p-2.5 rounded-xl border border-white/5 hover:border-tg-accent">➕ Добавить категорию услуг</button>
            <button class="w-full text-left bg-tg-input-bg p-2.5 rounded-xl border border-white/5 hover:border-tg-accent">📢 Управление баннерами ленты</button>
            <button class="w-full text-left bg-tg-input-bg p-2.5 rounded-xl border border-white/5 hover:border-tg-accent">🛡️ Модерация объявлений и чатов</button>
          </div>
        </div>
      </div>
    `)}function y(){if(window.Telegram?.WebApp){let e=window.Telegram.WebApp;e.ready(),e.expand();try{e.setHeaderColor(`#17212b`),e.setBackgroundColor(`#0e1621`)}catch(e){console.warn(`Telegram SDK UI error:`,e)}}}window.appActions={setTab:e=>s.setTab(e),changeLocation:e=>s.setLocation(e),setActiveChat:e=>s.setActiveChat(e),toggleSidebar:()=>s.toggleSidebar(),openModal:e=>s.openModal(e),closeModal:()=>s.closeModal(),topUp:e=>s.topUpWallet(e),handleSend:e=>{e.preventDefault();let t=document.getElementById(`chat-input`);t&&t.value&&(s.sendMessage(t.value),t.value=``)}},document.addEventListener(`DOMContentLoaded`,()=>{y(),c(s.data),s.subscribe(e=>{c(e);let t=document.getElementById(`chat-messages`);t&&(t.scrollTop=t.scrollHeight)})});