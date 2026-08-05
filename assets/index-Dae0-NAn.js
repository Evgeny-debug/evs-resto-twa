(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:`all`,name:`Всі`,icon:`🌍`},{id:`realty`,name:`Нерухомість`,icon:`🏢`},{id:`auto`,name:`Авто`,icon:`🚗`},{id:`services`,name:`Послуги`,icon:`🛠`},{id:`auctions`,name:`Аукціони`,icon:`⚖️`}],t=[{id:1,title:`EVS.PRO DIGITAL`,desc:`Створення преміальних Telegram Mini Apps для вашого бізнесу.`,color:`from-blue-600 to-indigo-900`}],n=[{id:1,type:`post`,category:`auto`,author:`Олексій`,avatar:`https://ui-avatars.com/api/?name=Олексій&background=0D8ABC&color=fff`,title:`Продам BMW X5`,desc:`Ідеальний стан, гаражне зберігання. 2019 рік. Можливий торг біля капота.`,price:`35 000 $`,image:`https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80`,likes:12},{id:2,type:`auction`,category:`realty`,author:`Ізмаїл Нерухомість`,avatar:`https://ui-avatars.com/api/?name=ІН&background=10B981&color=fff`,title:`Аукціон: 2к Квартира в центрі`,desc:`Стартова ціна вказана. Крок аукціону - 500$. Завершення завтра о 20:00.`,price:`22 000 $`,image:`https://images.unsplash.com/photo-1502672260266-1c1de24244ec?w=600&q=80`,likes:45},{id:3,type:`service`,category:`services`,author:`Майстерня FixOmat`,avatar:`https://ui-avatars.com/api/?name=Fix&background=F59E0B&color=fff`,title:`Ремонт ноутбуків та телефонів`,desc:`Швидка діагностика. Заміна екранів, акумуляторів. Чистка від пилу.`,price:`від 300 ₴`,image:`https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600&q=80`,likes:8}],r=window.Telegram.WebApp,i={view:`feed`,activeCategory:`all`,feed:[...n],selectedItem:null,isAdmin:!1,tempUpload:null,chatMessages:[{text:`Вітаємо в міському чаті!`,sender:`bot`,time:`10:00`}]};function a(){r&&(r.ready(),r.expand(),r.disableVerticalSwipes&&r.disableVerticalSwipes(),r.setHeaderColor(`#0b0c10`)),o()}function o(){let e=document.querySelector(`#app`);e.innerHTML=`
    <!-- Глассморфна шапка -->
    <header class="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-[#0b0c10]/80 border-b border-white/5 px-4 py-3 flex justify-between items-center transition-all">
      <div class="flex items-center gap-3">
        ${i.view===`feed`?``:`
          <button onclick="navigate('feed')" class="w-8 h-8 flex items-center justify-center bg-white/5 rounded-full text-white active:scale-90">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
        `}
        <div>
          <h1 class="text-base font-bold text-white tracking-wide">EVS.PRO <span class="text-blue-500">ІНФО</span></h1>
          <p class="text-[10px] text-gray-500 uppercase font-semibold">Довідник міста</p>
        </div>
      </div>
      <button onclick="navigate('${i.isAdmin?`admin_panel`:`admin_login`})" class="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 active:bg-white/10">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${i.isAdmin?`M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z`:`M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z`}"></path></svg>
      </button>
    </header>

    <!-- Контентна частина -->
    <main class="pt-16 pb-24 px-4 min-h-screen bg-[#0b0c10] text-white">
      ${s()}
    </main>

    <!-- Нижня навігація -->
    ${[`feed`,`chat`,`profile`].includes(i.view)?`
      <nav class="fixed bottom-0 left-0 right-0 z-50 backdrop-blur-3xl bg-[#0b0c10]/85 border-t border-white/5 px-6 py-2 flex justify-between items-center">
        <button onclick="navigate('feed')" class="flex flex-col items-center gap-1 p-2 ${i.view===`feed`?`text-blue-500`:`text-gray-500`}">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
          <span class="text-[10px] font-medium">Стрічка</span>
        </button>
        
        <button onclick="navigate('add')" class="relative -top-5 w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center border-4 border-[#0b0c10] shadow-[0_0_20px_rgba(59,130,246,0.4)] text-white active:scale-95 transition-transform">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"></path></svg>
        </button>

        <button onclick="navigate('chat')" class="flex flex-col items-center gap-1 p-2 ${i.view===`chat`?`text-blue-500`:`text-gray-500`} relative">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
          <span class="text-[10px] font-medium">Чат</span>
          <span class="absolute top-1 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
      </nav>
    `:``}
  `}window.navigate=function(e,t=null){r.HapticFeedback&&r.HapticFeedback.impactOccurred(`light`),i.view=e,t&&(i.selectedItem=i.feed.find(e=>e.id===t)),o()},window.setCategory=function(e){i.activeCategory=e,o()};function s(){switch(i.view){case`feed`:return c();case`item`:return l();case`chat`:return d();case`add`:return u();case`admin_login`:return f();case`admin_panel`:return p();default:return c()}}function c(){let n=i.activeCategory===`all`?i.feed:i.feed.filter(e=>e.category===i.activeCategory);return`
    <!-- Банер -->
    <div class="mb-5 bg-gradient-to-r ${t[0].color} rounded-2xl p-4 relative overflow-hidden shadow-lg">
      <div class="relative z-10">
        <span class="text-[9px] font-bold bg-black/30 px-2 py-1 rounded uppercase tracking-wide">Рекомендуємо</span>
        <h2 class="text-sm font-extrabold mt-2">${t[0].title}</h2>
        <p class="text-xs text-white/80 mt-1 max-w-[80%]">${t[0].desc}</p>
      </div>
      <div class="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
    </div>

    <!-- Категорії (Скролл) -->
    <div class="flex gap-2 overflow-x-auto pb-4 mb-2 scrollbar-none">
      ${e.map(e=>`
        <button onclick="setCategory('${e.id}')" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all border ${i.activeCategory===e.id?`bg-blue-600 border-blue-500 text-white`:`bg-white/5 border-white/5 text-gray-400`}">
          <span>${e.icon}</span> ${e.name}
        </button>
      `).join(``)}
    </div>

    <!-- Стрічка оголошень -->
    <div class="space-y-4">
      ${n.map(e=>`
        <div onclick="navigate('item', ${e.id})" class="bg-[#121318] border border-white/5 rounded-2xl p-3 active:bg-white/5 transition-colors shadow-sm">
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center gap-2">
              <img src="${e.avatar}" class="w-6 h-6 rounded-full" />
              <span class="text-xs font-semibold text-gray-300">${e.author}</span>
            </div>
            <span class="text-[9px] font-bold px-2 py-0.5 rounded bg-white/5 text-gray-400 uppercase">${e.type}</span>
          </div>
          <div class="w-full h-40 rounded-xl overflow-hidden mb-3 relative">
            <img src="${e.image}" class="w-full h-full object-cover" />
            <div class="absolute bottom-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg text-xs font-bold text-white border border-white/10">
              ${e.price}
            </div>
          </div>
          <h3 class="text-sm font-bold text-white leading-tight">${e.title}</h3>
          <p class="text-xs text-gray-400 mt-1 line-clamp-2">${e.desc}</p>
        </div>
      `).join(``)}
    </div>
  `}function l(){let e=i.selectedItem;if(!e)return``;let t=e.type===`auction`;return`
    <div class="animate-fade-in">
      <div class="w-full h-64 -mt-4 -mx-4 relative rounded-b-3xl overflow-hidden mb-5 shadow-lg">
        <img src="${e.image}" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-[#0b0c10] to-transparent"></div>
      </div>
      
      <div class="flex items-center justify-between mb-3">
        <div class="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
          <img src="${e.avatar}" class="w-5 h-5 rounded-full" />
          <span class="text-xs font-medium text-gray-300">${e.author}</span>
        </div>
        <span class="text-lg font-extrabold text-blue-400">${e.price}</span>
      </div>

      <h2 class="text-xl font-bold text-white mb-2">${e.title}</h2>
      <p class="text-sm text-gray-400 leading-relaxed mb-6">${e.desc}</p>

      <div class="bg-white/5 border border-white/5 rounded-2xl p-4 mb-6">
        <div class="flex justify-between items-center text-sm">
          <span class="text-gray-400">Переглядів</span>
          <span class="text-white font-semibold">1,204</span>
        </div>
        <div class="h-px w-full bg-white/5 my-2"></div>
        <div class="flex justify-between items-center text-sm">
          <span class="text-gray-400">Локація</span>
          <span class="text-white font-semibold">Ізмаїл, Центр</span>
        </div>
      </div>

      <button onclick="handleAction('${t?`bid`:`buy`}')" class="w-full bg-blue-600 text-white font-bold py-3.5 rounded-2xl active:scale-95 transition-transform flex justify-center items-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="${t?`M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z`:`M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z`}"></path></svg>
        ${t?`Зробити ставку (Stars)`:`Зв'язатися / Придбати`}
      </button>
    </div>
  `}window.handleAction=function(e){r.showConfirm?r.showConfirm(e===`bid`?`Зробити ставку 500 Telegram Stars?`:`Відкрити чат з продавцем?`,e=>{e&&r.showAlert(`Успішно! (Демо)`)}):alert(`Дія виконана! (Тестовий режим)`)};function u(){return`
    <h2 class="text-lg font-bold mb-4">Створити оголошення</h2>
    <div class="space-y-4">
      
      <!-- Завантаження фото -->
      <label class="block w-full h-40 border-2 border-dashed border-white/20 rounded-2xl bg-white/5 flex flex-col items-center justify-center overflow-hidden relative active:bg-white/10 transition-colors">
        ${i.tempUpload?`<img src="${i.tempUpload}" class="w-full h-full object-cover absolute inset-0" />`:`<svg class="w-8 h-8 text-gray-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
             <span class="text-xs font-medium text-gray-400">Натисніть для завантаження фото</span>`}
        <input type="file" accept="image/*" class="hidden" onchange="handlePhoto(event)" />
      </label>

      <input type="text" id="post-title" placeholder="Назва (напр. Продам iPhone)" class="w-full bg-[#121318] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500" />
      
      <textarea id="post-desc" placeholder="Опис товару чи послуги" rows="3" class="w-full bg-[#121318] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"></textarea>
      
      <div class="flex gap-3">
        <input type="text" id="post-price" placeholder="Ціна (₴ або $)" class="w-1/2 bg-[#121318] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500" />
        <select id="post-cat" class="w-1/2 bg-[#121318] border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-400 focus:outline-none focus:border-blue-500">
          ${e.filter(e=>e.id!==`all`).map(e=>`<option value="${e.id}">${e.name}</option>`).join(``)}
        </select>
      </div>

      <button onclick="publishFakePost()" class="w-full bg-blue-600 text-white font-bold py-3.5 rounded-xl mt-4 active:scale-95 transition-transform flex items-center justify-center gap-2">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
        Опублікувати (10 Stars)
      </button>
    </div>
  `}window.handlePhoto=function(e){let t=e.target.files[0];t&&(i.tempUpload=URL.createObjectURL(t),o())},window.publishFakePost=function(){let e=document.getElementById(`post-title`).value,t=document.getElementById(`post-price`).value;if(!e||!t)return alert(`Заповніть назву та ціну!`);let n={id:Date.now(),type:`post`,category:document.getElementById(`post-cat`).value,author:`Ви`,avatar:`https://ui-avatars.com/api/?name=Ви&background=3B82F6&color=fff`,title:e,desc:document.getElementById(`post-desc`).value,price:t,image:i.tempUpload||`https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80`,likes:0};i.feed.unshift(n),i.tempUpload=null,r.HapticFeedback&&r.HapticFeedback.notificationOccurred(`success`),navigate(`feed`)};function d(){return`
    <div class="flex flex-col h-[75vh]">
      <div class="flex-1 overflow-y-auto space-y-3 pb-4">
        ${i.chatMessages.map(e=>`
          <div class="flex ${e.sender===`me`?`justify-end`:`justify-start`}">
            <div class="max-w-[75%] rounded-2xl px-4 py-2 ${e.sender===`me`?`bg-blue-600 text-white rounded-br-sm`:`bg-white/10 text-white rounded-bl-sm`}">
              <p class="text-sm">${e.text}</p>
              <span class="text-[9px] text-white/50 block text-right mt-1">${e.time}</span>
            </div>
          </div>
        `).join(``)}
      </div>
      
      <div class="relative mt-auto flex gap-2">
        <input type="text" id="chat-input" placeholder="Повідомлення..." class="w-full bg-[#121318] border border-white/10 rounded-full pl-4 pr-12 py-3 text-sm text-white focus:outline-none focus:border-blue-500" onkeypress="if(event.key === 'Enter') sendFakeMessage()" />
        <button onclick="sendFakeMessage()" class="absolute right-1 top-1 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
          <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
        </button>
      </div>
    </div>
  `}window.sendFakeMessage=function(){let e=document.getElementById(`chat-input`);e.value.trim()&&(i.chatMessages.push({text:e.value,sender:`me`,time:`Зараз`}),e.value=``,o(),setTimeout(()=>{i.chatMessages.push({text:`Круто! Ми отримали повідомлення.`,sender:`bot`,time:`Зараз`}),o()},1e3))};function f(){return`
    <div class="flex flex-col items-center justify-center h-[60vh] animate-fade-in text-center">
      <div class="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4 border border-white/10 text-gray-400">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
      </div>
      <h2 class="text-lg font-bold text-white mb-1">Доступ закритий</h2>
      <p class="text-xs text-gray-500 mb-6">Введіть PIN-код адміністратора</p>
      
      <input type="password" id="pin-input" placeholder="PIN" maxlength="4" class="w-32 bg-[#121318] border border-white/10 rounded-xl px-4 py-3 text-center text-xl text-white tracking-widest focus:outline-none focus:border-blue-500 mb-4" />
      
      <button onclick="checkPin()" class="w-32 bg-white/10 text-white font-bold py-3 rounded-xl active:scale-95 transition-transform hover:bg-white/20">Увійти</button>
    </div>
  `}window.checkPin=function(){document.getElementById(`pin-input`).value===`0000`?(i.isAdmin=!0,r.HapticFeedback&&r.HapticFeedback.notificationOccurred(`success`),navigate(`admin_panel`)):(r.HapticFeedback&&r.HapticFeedback.notificationOccurred(`error`),alert(`Невірний PIN!`))};function p(){return`
    <div class="space-y-4 animate-fade-in">
      <div class="bg-red-500/10 border border-red-500/20 rounded-2xl p-4 flex items-center justify-between">
        <div>
          <h2 class="text-red-400 font-bold text-sm">Панель Адміністратора</h2>
          <p class="text-[10px] text-gray-400 mt-1">Повний доступ активовано</p>
        </div>
        <button onclick="logoutAdmin()" class="bg-red-500/20 text-red-400 text-xs font-bold px-3 py-1.5 rounded-lg">Вийти</button>
      </div>

      <div class="grid grid-cols-2 gap-3">
        <div class="bg-white/5 border border-white/5 rounded-2xl p-4 text-center">
          <span class="block text-2xl font-bold text-blue-400">${i.feed.length}</span>
          <span class="text-[10px] text-gray-400 uppercase font-semibold">Оголошень</span>
        </div>
        <div class="bg-white/5 border border-white/5 rounded-2xl p-4 text-center">
          <span class="block text-2xl font-bold text-green-400">12 450</span>
          <span class="text-[10px] text-gray-400 uppercase font-semibold">Stars дохід</span>
        </div>
      </div>

      <div class="space-y-2 mt-4">
        <button class="w-full bg-[#121318] border border-white/5 p-4 rounded-xl flex items-center justify-between">
          <span class="text-white text-sm font-medium">Управління банерами</span>
          <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
        <button class="w-full bg-[#121318] border border-white/5 p-4 rounded-xl flex items-center justify-between">
          <span class="text-white text-sm font-medium">Модерація контенту</span>
          <span class="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">2 нові</span>
        </button>
      </div>
    </div>
  `}window.logoutAdmin=function(){i.isAdmin=!1,navigate(`feed`)},a();