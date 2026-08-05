(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:`all`,name:`Всі`,icon:`🌍`},{id:`realty`,name:`Нерухомість`,icon:`🏢`},{id:`auto`,name:`Авто`,icon:`🚗`},{id:`services`,name:`Послуги`,icon:`🛠`},{id:`auctions`,name:`Аукціони`,icon:`⚖️`},{id:`electronics`,name:`Техніка`,icon:`💻`}],t=[{id:1,title:`EVS.PRO DIGITAL`,desc:`Розробка преміальних Telegram Mini Apps.`,color:`from-blue-600 to-indigo-900`}],n=[{id:1,type:`post`,category:`auto`,author:`Олексій`,avatar:`https://ui-avatars.com/api/?name=Олексій&background=0D8ABC&color=fff`,title:`BMW X5 M-Sport 2019`,desc:`Ідеальний стан, гаражне зберігання.`,price:`35 000 $`,image:`https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&q=80`,likes:12},{id:2,type:`auction`,category:`realty`,author:`Ізмаїл Нерухомість`,avatar:`https://ui-avatars.com/api/?name=ІН&background=10B981&color=fff`,title:`2к Квартира в центрі (Аукціон)`,desc:`Стартова ціна вказана. Крок - 500$.`,price:`22 000 $`,image:`https://images.unsplash.com/photo-1502672260266-1c1de24244ec?w=400&q=80`,likes:45},{id:3,type:`service`,category:`services`,author:`FixOmat`,avatar:`https://ui-avatars.com/api/?name=Fix&background=F59E0B&color=fff`,title:`Ремонт техніки (FixOmat)`,desc:`Швидка діагностика. Заміна екранів.`,price:`від 300 ₴`,image:`https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&q=80`,likes:8},{id:4,type:`post`,category:`electronics`,author:`Максим`,avatar:`https://ui-avatars.com/api/?name=М&background=6366f1&color=fff`,title:`MacBook Pro 14" M1`,desc:`Базова комплектація, стан нового.`,price:`1 400 $`,image:`https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80`,likes:23},{id:5,type:`post`,category:`auto`,author:`DriveUA`,avatar:`https://ui-avatars.com/api/?name=DR&background=ef4444&color=fff`,title:`Комплект гуми Michelin`,desc:`Зимова, відкатала один сезон.`,price:`8 000 ₴`,image:`https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=400&q=80`,likes:5},{id:6,type:`service`,category:`services`,author:`Barber Shop`,avatar:`https://ui-avatars.com/api/?name=BS&background=000&color=fff`,title:`Чоловічі стрижки (High fade)`,desc:`Трендовий кроп, фейд. Запис онлайн.`,price:`450 ₴`,image:`https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&q=80`,likes:31},{id:7,type:`auction`,category:`electronics`,author:`EVS.PRO`,avatar:`https://ui-avatars.com/api/?name=EVS&background=3b82f6&color=fff`,title:`Аукціон: Sony PS5`,desc:`Нова з пломбами. Торг від 10 тис.`,price:`10 000 ₴`,image:`https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&q=80`,likes:89},{id:8,type:`post`,category:`realty`,author:`Оренда Плюс`,avatar:`https://ui-avatars.com/api/?name=ОП&background=8b5cf6&color=fff`,title:`Офіс 45 кв.м.`,desc:`Свіжий ремонт, панорамні вікна, генератор.`,price:`12 000 ₴/міс`,image:`https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80`,likes:14}],r=window.Telegram?.WebApp||{ready:()=>{},expand:()=>{},setHeaderColor:()=>{},HapticFeedback:{impactOccurred:()=>{},notificationOccurred:()=>{}}},i={view:`feed`,activeCategory:`all`,feed:[...n],selectedItem:null,isAdmin:!1,isSearchOpen:!1,searchQuery:``,tempUpload:null,chatMessages:[{text:`Вітаємо в чаті!`,sender:`bot`,time:`10:00`}]};function a(){r.ready(),r.expand(),r.disableVerticalSwipes&&r.disableVerticalSwipes(),r.setHeaderColor(`#0b0c10`),o()}function o(){let e=document.querySelector(`#app`);e.innerHTML=`
    <!-- Глассморфна шапка з пошуком -->
    <header class="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-[#0b0c10]/85 border-b border-white/5 h-14 flex items-center px-4 overflow-hidden">
      
      <!-- Стандартна шапка -->
      <div id="header-default" class="w-full flex justify-between items-center transition-all duration-300 ${i.isSearchOpen?`-translate-y-full opacity-0 absolute`:`translate-y-0 opacity-100`}">
        <div class="flex items-center gap-2">
          ${i.view===`feed`?``:`
            <button onclick="navigate('feed')" class="w-7 h-7 flex items-center justify-center bg-white/5 rounded-full text-white active:scale-90">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>
          `}
          <div>
            <h1 class="text-sm font-bold text-white tracking-wide">EVS.PRO</h1>
            <p class="text-[9px] text-gray-500 uppercase font-semibold">Місто</p>
          </div>
        </div>
        
        <div class="flex items-center gap-3">
          ${i.view===`feed`?`
            <button onclick="toggleSearch(true)" class="text-white/80 active:scale-90 transition-transform">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>
          `:``}
          <button onclick="navigate('${i.isAdmin?`admin_panel`:`admin_login`})" class="text-gray-500 active:scale-90 transition-transform">
             <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${i.isAdmin?`M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z`:`M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z`}"></path></svg>
          </button>
        </div>
      </div>

      <!-- Рядок пошуку (ховається) -->
      <div id="header-search" class="w-full flex items-center gap-2 transition-all duration-300 ${i.isSearchOpen?`translate-y-0 opacity-100`:`translate-y-full opacity-0 absolute`}">
        <button onclick="toggleSearch(false)" class="text-white/80 active:scale-90">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        </button>
        <input type="text" id="searchInput" oninput="handleSearch(event)" placeholder="Пошук..." class="w-full bg-white/10 rounded-full px-4 py-1.5 text-sm text-white focus:outline-none placeholder-gray-500 border border-white/5" ${i.isSearchOpen?`autofocus`:``} />
      </div>
    </header>

    <main class="pt-14 pb-20 px-3 min-h-screen bg-[#0b0c10] text-white">
      ${c()}
    </main>

    <!-- Тонка нижня навігація -->
    ${[`feed`,`chat`,`profile`].includes(i.view)?`
      <nav class="fixed bottom-0 left-0 right-0 z-50 backdrop-blur-3xl bg-[#0b0c10]/90 border-t border-white/5 px-6 py-2 flex justify-between items-center pb-safe">
        <button onclick="navigate('feed')" class="flex flex-col items-center gap-0.5 p-1 ${i.view===`feed`?`text-blue-500`:`text-gray-500`} transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          <span class="text-[9px] font-medium">Стрічка</span>
        </button>
        
        <button onclick="navigate('add')" class="relative -top-3 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center border-4 border-[#0b0c10] shadow-[0_0_15px_rgba(59,130,246,0.3)] text-white active:scale-95 transition-transform">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"></path></svg>
        </button>

        <button onclick="navigate('chat')" class="flex flex-col items-center gap-0.5 p-1 ${i.view===`chat`?`text-blue-500`:`text-gray-500`} relative">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
          <span class="text-[9px] font-medium">Чат</span>
          <span class="absolute top-1 right-2 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
        </button>

        <button onclick="navigate('profile')" class="flex flex-col items-center gap-0.5 p-1 ${i.view===`profile`?`text-blue-500`:`text-gray-500`}">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
          <span class="text-[9px] font-medium">Профіль</span>
        </button>
      </nav>
    `:``}
  `,i.isSearchOpen&&setTimeout(()=>document.getElementById(`searchInput`)?.focus(),50)}window.navigate=function(e,t=null){r.HapticFeedback.impactOccurred(`light`),i.view=e,i.isSearchOpen=!1,i.searchQuery=``,t&&(i.selectedItem=i.feed.find(e=>e.id===t)),o()},window.setCategory=function(e){r.HapticFeedback.impactOccurred(`light`),i.activeCategory=e,s()},window.toggleSearch=function(e){i.isSearchOpen=e,e||(i.searchQuery=``),o()},window.handleSearch=function(e){i.searchQuery=e.target.value.toLowerCase(),s()};function s(){let e=document.getElementById(`feed-grid`);e?e.innerHTML=u():o()}function c(){switch(i.view){case`feed`:return l();case`item`:return d();case`chat`:return f();case`add`:return p();case`profile`:return m();case`admin_login`:return h();case`admin_panel`:return g();default:return l()}}function l(){return`
    <div class="mb-4 bg-gradient-to-r ${t[0].color} rounded-xl p-3 relative overflow-hidden shadow-sm">
      <div class="relative z-10">
        <span class="text-[8px] font-bold bg-black/40 px-1.5 py-0.5 rounded uppercase tracking-wider">Промо</span>
        <h2 class="text-xs font-extrabold mt-1">${t[0].title}</h2>
        <p class="text-[10px] text-white/80 max-w-[80%]">${t[0].desc}</p>
      </div>
      <div class="absolute -right-6 -bottom-6 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
    </div>

    <!-- Дрібні категорії -->
    <div class="flex gap-1.5 overflow-x-auto pb-3 mb-1 scrollbar-none">
      ${e.map(e=>`
        <button onclick="setCategory('${e.id}')" class="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[10px] font-semibold whitespace-nowrap transition-all border ${i.activeCategory===e.id?`bg-blue-600 border-blue-500 text-white`:`bg-white/5 border-white/5 text-gray-400 active:bg-white/10`}">
          <span>${e.icon}</span> ${e.name}
        </button>
      `).join(``)}
    </div>

    <!-- Контейнер для сітки оголошень -->
    <div id="feed-grid" class="grid grid-cols-2 gap-2">
      ${u()}
    </div>
  `}function u(){let e=i.feed;return i.activeCategory!==`all`&&(e=e.filter(e=>e.category===i.activeCategory)),i.searchQuery&&(e=e.filter(e=>e.title.toLowerCase().includes(i.searchQuery))),e.length===0?`<div class="col-span-2 text-center text-xs text-gray-500 py-10">Нічого не знайдено</div>`:e.map(e=>`
    <div onclick="navigate('item', ${e.id})" class="bg-[#121318] border border-white/5 rounded-xl p-1.5 active:bg-white/5 transition-colors flex flex-col h-full">
      <div class="w-full h-28 rounded-lg overflow-hidden relative mb-1.5">
        <img src="${e.image}" class="w-full h-full object-cover" loading="lazy" />
        <span class="absolute top-1 left-1 bg-black/70 backdrop-blur-md px-1.5 py-0.5 rounded text-[8px] font-bold text-white uppercase">${e.type}</span>
      </div>
      <div class="px-1 pb-1 flex-1 flex flex-col">
        <span class="text-[11px] font-extrabold text-blue-400 block mb-0.5">${e.price}</span>
        <h3 class="text-[11px] font-bold text-gray-100 leading-tight line-clamp-2 flex-1">${e.title}</h3>
        <div class="flex items-center gap-1 mt-1">
          <img src="${e.avatar}" class="w-3.5 h-3.5 rounded-full" />
          <span class="text-[9px] text-gray-500 truncate">${e.author}</span>
        </div>
      </div>
    </div>
  `).join(``)}function d(){let e=i.selectedItem;return e?`
    <div class="animate-fade-in -mx-3 -mt-4">
      <img src="${e.image}" class="w-full h-56 object-cover rounded-b-2xl mb-4" />
      <div class="px-4">
        <div class="flex justify-between items-center mb-1">
          <span class="text-[10px] bg-white/10 px-2 py-0.5 rounded text-gray-300 uppercase">${e.type}</span>
          <span class="text-base font-extrabold text-blue-400">${e.price}</span>
        </div>
        <h2 class="text-lg font-bold text-white mb-2 leading-tight">${e.title}</h2>
        <p class="text-xs text-gray-400 mb-4">${e.desc}</p>
        
        <div class="bg-white/5 rounded-xl p-3 flex items-center gap-3 mb-6">
          <img src="${e.avatar}" class="w-10 h-10 rounded-full" />
          <div>
            <p class="text-sm font-bold">${e.author}</p>
            <p class="text-[10px] text-gray-500">На сайті з 2023</p>
          </div>
        </div>
        
        <button onclick="tg.showConfirm ? tg.showConfirm('Зв\\'язатися?', ()=>tg.showAlert('Ок')) : alert('Ок')" class="w-full bg-blue-600 text-sm font-bold py-3 rounded-xl">Написати продавцю</button>
      </div>
    </div>
  `:``}function f(){return`
    <div class="flex flex-col h-[78vh] -mx-1">
      <div class="flex-1 overflow-y-auto space-y-2 p-2">
        ${i.chatMessages.map(e=>`
          <div class="flex ${e.sender===`me`?`justify-end`:`justify-start`}">
            <div class="max-w-[80%] rounded-xl px-3 py-1.5 ${e.sender===`me`?`bg-blue-600`:`bg-white/10`}">
              <p class="text-xs">${e.text}</p>
              <span class="text-[8px] text-white/50 block text-right">${e.time}</span>
            </div>
          </div>
        `).join(``)}
      </div>
      <div class="p-2 border-t border-white/5 flex gap-2">
        <input type="text" id="chatInput" placeholder="Повідомлення..." class="flex-1 bg-white/5 rounded-full px-4 text-xs text-white focus:outline-none" />
        <button onclick="sendMsg()" class="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-white"><svg class="w-4 h-4 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg></button>
      </div>
    </div>
  `}window.sendMsg=()=>{let e=document.getElementById(`chatInput`).value.trim();e&&(i.chatMessages.push({text:e,sender:`me`,time:`Зараз`}),o(),setTimeout(()=>{i.chatMessages.push({text:`Відповідь (Демо)`,sender:`bot`,time:`Зараз`}),o()},800))};function p(){return`
    <h2 class="text-sm font-bold mb-3">Нове оголошення</h2>
    <div class="space-y-3">
      <label class="block w-full h-24 border border-dashed border-white/20 rounded-xl bg-white/5 flex flex-col items-center justify-center overflow-hidden relative">
        ${i.tempUpload?`<img src="${i.tempUpload}" class="w-full h-full object-cover absolute" />`:`<span class="text-[10px] text-gray-400">📷 Завантажити фото</span>`}
        <input type="file" accept="image/*" class="hidden" onchange="handlePhoto(event)" />
      </label>
      <input type="text" id="add-title" placeholder="Назва" class="w-full bg-[#121318] border border-white/5 rounded-xl px-3 py-2 text-xs" />
      <input type="text" id="add-price" placeholder="Ціна" class="w-full bg-[#121318] border border-white/5 rounded-xl px-3 py-2 text-xs" />
      <button onclick="publishPost()" class="w-full bg-blue-600 text-xs font-bold py-3 rounded-xl mt-2">Опублікувати</button>
    </div>
  `}window.handlePhoto=e=>{e.target.files[0]&&(i.tempUpload=URL.createObjectURL(e.target.files[0]),o())},window.publishPost=()=>{if(!document.getElementById(`add-title`).value)return alert(`Введіть назву`);i.feed.unshift({id:Date.now(),type:`post`,category:`auto`,author:`Ви`,avatar:`https://ui-avatars.com/api/?name=Ви&background=3b82f6&color=fff`,title:document.getElementById(`add-title`).value,desc:`Опис товару`,price:document.getElementById(`add-price`).value,image:i.tempUpload||`https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&q=80`,likes:0}),i.tempUpload=null,navigate(`feed`)};function m(){return`
    <div class="animate-fade-in text-center pt-4">
      <div class="relative inline-block mb-3">
        <img src="https://ui-avatars.com/api/?name=ЄС&background=000&color=fff&size=128" class="w-20 h-20 rounded-full border-2 border-white/10" />
        <div class="absolute bottom-0 right-0 w-5 h-5 bg-blue-500 border-2 border-[#0b0c10] rounded-full flex items-center justify-center">
          <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>
        </div>
      </div>
      <h2 class="text-base font-bold text-white">Євген Сичов</h2>
      <p class="text-[10px] text-gray-500 mb-5">EVS.PRO | ID: 3910283</p>

      <div class="grid grid-cols-2 gap-2 mb-5">
        <div class="bg-white/5 rounded-xl p-3 text-center border border-white/5">
          <span class="block text-lg font-bold text-blue-400">12</span>
          <span class="text-[9px] uppercase text-gray-400 font-semibold">Оголошень</span>
        </div>
        <div class="bg-white/5 rounded-xl p-3 text-center border border-white/5">
          <span class="block text-lg font-bold text-yellow-400">150 ⭐️</span>
          <span class="text-[9px] uppercase text-gray-400 font-semibold">Баланс</span>
        </div>
      </div>

      <div class="space-y-1 text-left">
        <button class="w-full bg-[#121318] p-3 flex justify-between items-center rounded-xl border border-white/5 active:bg-white/5">
           <span class="text-xs font-medium">Мої замовлення</span>
           <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
        <button class="w-full bg-[#121318] p-3 flex justify-between items-center rounded-xl border border-white/5 active:bg-white/5">
           <span class="text-xs font-medium">Налаштування Telegram</span>
           <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
      </div>
    </div>
  `}function h(){return`
    <div class="flex flex-col items-center justify-center h-[60vh] text-center">
      <h2 class="text-sm font-bold text-white mb-1">Службовий вхід</h2>
      <p class="text-[10px] text-gray-500 mb-6">Введіть PIN 0000</p>
      <input type="password" id="pin-input" placeholder="••••" maxlength="4" class="w-24 bg-[#121318] border border-white/10 rounded-xl px-2 py-3 text-center text-lg tracking-[0.5em] text-white focus:outline-none mb-4" />
      <button onclick="checkPin()" class="w-24 bg-white/10 text-xs font-bold py-2 rounded-xl active:scale-95">Увійти</button>
    </div>
  `}window.checkPin=()=>{document.getElementById(`pin-input`).value===`0000`?(i.isAdmin=!0,navigate(`admin_panel`)):alert(`Помилка!`)};function g(){return`
    <div class="animate-fade-in space-y-3">
      <div class="bg-red-500/10 border border-red-500/20 rounded-xl p-3 flex justify-between">
        <div><h2 class="text-red-400 font-bold text-xs">Адмінка</h2><p class="text-[9px] text-gray-400">Доступ відкрито</p></div>
        <button onclick="logoutAdmin()" class="bg-red-500/20 text-red-400 text-[10px] font-bold px-2 py-1 rounded">Вийти</button>
      </div>
      <div class="bg-white/5 p-4 rounded-xl text-center"><span class="text-xl font-bold text-blue-400">Управління містом</span></div>
    </div>
  `}window.logoutAdmin=()=>{i.isAdmin=!1,navigate(`feed`)},a();