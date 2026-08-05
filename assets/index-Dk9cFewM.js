(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:`realty`,name:`Нерухомість`,icon:`🏢`},{id:`auto`,name:`Автосервіс`,icon:`🚗`},{id:`beauty`,name:`Краса та здоров'я`,icon:`💅`},{id:`tech`,name:`Ремонт техніки`,icon:`💻`},{id:`home`,name:`Послуги для дому`,icon:`🛠`},{id:`delivery`,name:`Доставка`,icon:`📦`}],t=[{id:1,title:`Швидкий ремонт цифрової техніки`,description:`Відновлення телефонів, планшетів та ноутбуків будь-якої складності. Гарантія якості.`,contact:`@master_izmail`}],n=window.Telegram.WebApp,r=7631128866,i=(n?.initDataUnsafe?.user?.id||r)===r,a={activeTab:`home`,categories:[...e]};function o(){n&&(n.ready(),n.expand(),n.disableVerticalSwipes&&n.disableVerticalSwipes()),s()}function s(){let e=document.querySelector(`#app`);e.innerHTML=`
    <!-- Преміальна шапка з глассморфізмом -->
    <header class="sticky top-0 z-50 backdrop-blur-2xl bg-[#0b0c10]/80 border-b border-white/10 px-5 py-4 flex justify-between items-center shadow-lg">
      <div>
        <h1 class="text-lg font-extrabold tracking-wider text-white">ІЗМАЇЛ <span class="text-blue-500">ІНФО</span></h1>
        <p class="text-[10px] text-gray-400 font-medium tracking-wide uppercase">Створено EVS.PRO</p>
      </div>
      ${i?`
        <div class="px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-xs font-bold text-red-400">
          ADMIN
        </div>
      `:`
        <button class="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
      `}
    </header>

    <!-- Основний контент -->
    <main id="page-content" class="pb-28 pt-4 px-4 min-h-screen bg-[#0b0c10]">
      <!-- Динамічний рендер сторінок -->
    </main>

    <!-- Нижня навігація (Glassmorphism Tab Bar) -->
    <nav class="fixed bottom-0 left-0 right-0 z-50 backdrop-blur-3xl bg-[#0b0c10]/90 border-t border-white/10 px-6 py-3 flex justify-around items-center">
      <button onclick="switchTab('home')" id="nav-home" class="flex flex-col items-center gap-1 text-blue-400 transition-colors">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
        <span class="text-[10px] font-medium">Головна</span>
      </button>

      <button onclick="switchTab('chat')" id="nav-chat" class="flex flex-col items-center gap-1 text-gray-500 transition-colors hover:text-gray-300">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
        <span class="text-[10px] font-medium">Спілкування</span>
      </button>

      <button onclick="switchTab('${i?`admin`:`profile`}')" id="nav-profile" class="flex flex-col items-center gap-1 text-gray-500 transition-colors hover:text-gray-300">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
        <span class="text-[10px] font-medium">${i?`Управління`:`Профіль`}</span>
      </button>
    </nav>
  `,c()}window.switchTab=function(e){a.activeTab=e,[`home`,`chat`,`profile`].forEach(t=>{let n=t===`profile`&&i&&e===`admin`?`nav-profile`:`nav-${t}`,r=document.getElementById(n);r&&(r.className=t===e||t===`profile`&&e===`admin`?`flex flex-col items-center gap-1 text-blue-400 scale-105 transform transition-all duration-200`:`flex flex-col items-center gap-1 text-gray-500 hover:text-gray-300 transition-all duration-200`)}),c()};function c(){let e=document.getElementById(`page-content`);a.activeTab===`home`?e.innerHTML=l():a.activeTab===`chat`?e.innerHTML=u():a.activeTab===`profile`?e.innerHTML=f():a.activeTab===`admin`&&(e.innerHTML=d())}function l(){let e=t[0],n=`
    <!-- Рекламний блок -->
    <div class="mb-6">
      <div class="bg-gradient-to-br from-[#1a1c24] to-[#121318] border border-blue-500/20 rounded-2xl p-4 relative overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.1)]">
        <div class="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
        <span class="inline-block bg-blue-600/20 text-blue-400 border border-blue-500/30 text-[9px] font-extrabold px-2 py-0.5 rounded uppercase tracking-wider mb-2">Спонсор</span>
        <h2 class="text-sm font-bold text-white">${e.title}</h2>
        <p class="text-[11px] text-gray-400 mt-1 leading-relaxed">${e.description}</p>
        <button class="mt-3 text-xs font-semibold text-blue-400 flex items-center gap-1">
          Зв'язатися 
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
      </div>
    </div>

    <!-- Сітка категорій -->
    <h3 class="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-3 px-1">Довідник послуг</h3>
    <div class="grid grid-cols-2 gap-3.5">
      ${a.categories.map(e=>`
        <div class="bg-[#121318] border border-white/5 rounded-2xl p-4 flex flex-col items-center justify-center gap-3 hover:border-white/10 active:scale-95 transition-all duration-200 cursor-pointer shadow-xl">
          <div class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-2xl shadow-inner">
            ${e.icon}
          </div>
          <span class="text-[11px] font-bold text-gray-300 text-center">${e.name}</span>
        </div>
      `).join(``)}
    </div>
  `;return i||(n+=`
      <div class="fixed bottom-20 right-4 z-40">
        <button onclick="requestPayment()" class="bg-gradient-to-tr from-blue-600 to-indigo-500 text-white rounded-2xl px-5 py-3 shadow-[0_0_20px_rgba(59,130,246,0.3)] flex items-center gap-2 active:scale-95 transition-transform">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
          <span class="text-xs font-bold">Опублікувати</span>
        </button>
      </div>
    `),n}window.requestPayment=function(){n.HapticFeedback&&n.HapticFeedback.notificationOccurred(`success`),alert(`Тут буде виклик методу оплати Telegram Stars ⭐️ для публікації оголошення.`)};function u(){return`
    <div class="flex flex-col items-center justify-center h-[60vh] text-center">
      <div class="w-16 h-16 bg-[#121318] border border-white/5 rounded-full flex items-center justify-center mb-4">
        <svg class="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>
      </div>
      <h2 class="text-white font-bold">Міський чат</h2>
      <p class="text-xs text-gray-500 mt-2 max-w-[250px]">Тут буде інтеграція з базою даних для спілкування мешканців у реальному часі.</p>
    </div>
  `}function d(){return`
    <div class="space-y-5">
      <div class="bg-red-500/10 border border-red-500/20 rounded-2xl p-5">
        <h2 class="text-red-400 font-bold text-sm flex items-center gap-2">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
          Консоль Адміністратора
        </h2>
        <p class="text-[11px] text-gray-400 mt-1">Цей розділ бачите тільки ви.</p>
      </div>

      <div class="space-y-2">
        <button class="w-full bg-[#121318] border border-white/5 hover:border-white/10 p-4 rounded-xl flex items-center justify-between transition-colors">
          <span class="text-white text-xs font-semibold">Управління рекламою</span>
          <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
        <button class="w-full bg-[#121318] border border-white/5 hover:border-white/10 p-4 rounded-xl flex items-center justify-between transition-colors">
          <span class="text-white text-xs font-semibold">Редагувати категорії</span>
          <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
        <button class="w-full bg-[#121318] border border-white/5 hover:border-white/10 p-4 rounded-xl flex items-center justify-between transition-colors">
          <span class="text-white text-xs font-semibold">Модерація оголошень</span>
          <div class="flex items-center gap-2">
            <span class="bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">3 нові</span>
            <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </div>
        </button>
      </div>
    </div>
  `}function f(){return`
    <div class="text-center mt-10">
      <h2 class="text-white font-bold">Ваш профіль</h2>
      <p class="text-xs text-gray-500 mt-2">Тут будуть ваші збережені та опубліковані оголошення.</p>
    </div>
  `}o();