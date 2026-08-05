(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:`all`,name:`Все`},{id:`burgers`,name:`Бургеры`},{id:`rolls`,name:`Роллы`},{id:`soup`,name:`Супы`},{id:`drinks`,name:`Напитки`}],t=[{id:1,category:`burgers`,title:`Black Angus Burger`,description:`Сочная мраморная говядина, трюфельный соус, сыр чеддер`,price:350,img:`https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80`},{id:2,category:`rolls`,title:`Ролл Филадельфия`,description:`Охлажденный лосось, нежный крем-сыр, спелый авокадо`,price:420,img:`https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500&q=80`},{id:3,category:`soup`,title:`Том Ям с морепродуктами`,description:`Тигровые креветки, кальмары, грибы, кокосовое молоко`,price:380,img:`https://images.unsplash.com/photo-1548943487-a2e4b43b4850?w=500&q=80`},{id:4,category:`drinks`,title:`Матча Тоник`,description:`Церемониальная японская матча, тоник, лед`,price:150,img:`https://images.unsplash.com/photo-1515823662972-da6a2b4d3002?w=500&q=80`},{id:5,category:`burgers`,title:`Truffle Chicken Burger`,description:`Хрустящая куриная котлета, трюфельный крем, айсберг`,price:320,img:`https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?w=500&q=80`},{id:6,category:`rolls`,title:`Дракон Ролл`,description:`Угорь, тигровая креветка, соус унаги, кунжут`,price:450,img:`https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=500&q=80`}],n=window.Telegram.WebApp,r={activeTab:`catalog`,activeCategory:`all`,cart:{}};function i(e){r.cart[e]||(r.cart[e]=0),r.cart[e]++,n.HapticFeedback&&n.HapticFeedback.impactOccurred(`light`),c()}function a(e){r.cart[e]&&(r.cart[e]--,r.cart[e]<=0&&delete r.cart[e],n.HapticFeedback&&n.HapticFeedback.impactOccurred(`light`),c())}function o(){return Object.entries(r.cart).reduce((e,[n,r])=>{let i=t.find(e=>e.id===parseInt(n));return e+(i?i.price*r:0)},0)}function s(){return Object.values(r.cart).reduce((e,t)=>e+t,0)}function c(){let e=document.getElementById(`cart-badge`),t=s();e&&(t>0?(e.textContent=t,e.classList.remove(`hidden`)):e.classList.add(`hidden`))}var l=window.Telegram.WebApp;function u(){l&&(l.ready(),l.expand(),l.disableVerticalSwipes&&l.disableVerticalSwipes()),d(),setupNavigation()}function d(){let e=document.querySelector(`#app`);e.innerHTML=`
    <!-- Фиксированная премиум-шапка с глассморфизмом -->
    <header class="sticky top-0 z-50 backdrop-blur-2xl bg-[#0f1015]/80 border-b border-white/10 px-5 py-4 flex justify-between items-center">
      <div>
        <h1 class="text-lg font-extrabold tracking-wider text-white">EVS.PRO <span class="text-blue-500">RESTO</span></h1>
        <p class="text-[11px] text-gray-400">Бесконтактная доставка в Telegram</p>
      </div>
      <div class="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold text-blue-400">
        PRO
      </div>
    </header>

    <!-- Основное поле страниц -->
    <main id="page-content" class="pb-28 pt-4 px-4">
      <!-- Сюда динамически рендерится активная страница -->
    </main>

    <!-- Нижняя навигационная панель (Glassmorphism Tab Bar) -->
    <nav class="fixed bottom-0 left-0 right-0 z-50 backdrop-blur-2xl bg-[#0f1015]/90 border-t border-white/10 px-6 py-3 flex justify-around items-center">
      <button onclick="switchTab('catalog')" id="nav-catalog" class="flex flex-col items-center gap-1 transition-colors text-blue-400">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        <span class="text-[10px] font-medium">Меню</span>
      </button>

      <button onclick="switchTab('cart')" id="nav-cart" class="relative flex flex-col items-center gap-1 transition-colors text-gray-400">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
        <span class="text-[10px] font-medium">Корзина</span>
        <span id="cart-badge" class="absolute -top-1 -right-2 bg-blue-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center hidden">0</span>
      </button>

      <button onclick="switchTab('profile')" id="nav-profile" class="flex flex-col items-center gap-1 transition-colors text-gray-400">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
        <span class="text-[10px] font-medium">Профиль</span>
      </button>
    </nav>
  `,f()}window.switchTab=function(e){r.activeTab=e,[`catalog`,`cart`,`profile`].forEach(t=>{let n=document.getElementById(`nav-${t}`);n.className=t===e?`flex flex-col items-center gap-1 transition-colors text-blue-400 scale-105 transform duration-200`:`flex flex-col items-center gap-1 transition-colors text-gray-400 hover:text-white`}),f()};function f(){let e=document.getElementById(`page-content`);r.activeTab===`catalog`?e.innerHTML=p():r.activeTab===`cart`?e.innerHTML=m():r.activeTab===`profile`&&(e.innerHTML=h())}function p(){let n=r.activeCategory===`all`?t:t.filter(e=>e.category===r.activeCategory);return`
    <!-- Скроллящиеся категории -->
    <div class="flex gap-2 overflow-x-auto pb-4 mb-2 scrollbar-none">
      ${e.map(e=>`
        <button onclick="setCategory('${e.id}')" class="px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all duration-200 ${r.activeCategory===e.id?`bg-blue-600 text-white shadow-lg shadow-blue-600/30`:`bg-[#1a1c23] text-gray-400 border border-white/5 hover:border-white/10`}">
          ${e.name}
        </button>
      `).join(``)}
    </div>

    <!-- Сетка товаров -->
    <div class="grid grid-cols-2 gap-3.5">
      ${n.map(e=>`
        <div class="bg-[#1a1c23] border border-white/5 rounded-2xl overflow-hidden flex flex-col justify-between backdrop-blur-xl shadow-xl">
          <div>
            <div class="relative h-32 overflow-hidden">
              <img src="${e.img}" alt="${e.title}" class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500 pointer-events-none">
              <div class="absolute inset-0 bg-gradient-to-t from-[#1a1c23] via-transparent to-transparent opacity-80"></div>
            </div>
            <div class="p-3">
              <h2 class="text-xs font-bold text-white leading-tight">${e.title}</h2>
              <p class="text-[10px] text-gray-400 mt-1 line-clamp-2 leading-relaxed">${e.description}</p>
            </div>
          </div>
          <div class="p-3 pt-0 flex items-center justify-between mt-2">
            <span class="text-white text-xs font-extrabold">${e.price} ₴</span>
            <button onclick="handleAddToCart(${e.id})" class="bg-blue-600/20 hover:bg-blue-600 border border-blue-500/30 active:scale-95 text-blue-400 hover:text-white p-2 rounded-xl transition-all duration-200">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"></path></svg>
            </button>
          </div>
        </div>
      `).join(``)}
    </div>
  `}window.setCategory=function(e){r.activeCategory=e,f()},window.handleAddToCart=function(e){i(e)};function m(){let e=Object.entries(r.cart);if(e.length===0)return`
      <div class="flex flex-col items-center justify-center h-[65vh] text-center px-4">
        <div class="w-16 h-16 rounded-full bg-[#1a1c23] border border-white/5 flex items-center justify-center text-gray-500 mb-4">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
        </div>
        <h2 class="text-base font-bold text-white">Корзина пуста</h2>
        <p class="text-xs text-gray-400 mt-1 max-w-[200px]">Добавьте изысканные блюда из каталога, чтобы сделать заказ</p>
        <button onclick="switchTab('catalog')" class="mt-6 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-6 py-3 rounded-xl transition-all shadow-lg shadow-blue-600/30">
          Перейти в меню
        </button>
      </div>
    `;let n=o();return`
    <div class="space-y-4">
      <h2 class="text-base font-bold text-white px-1">Ваш заказ</h2>
      <div class="space-y-2.5">
        ${e.map(([e,n])=>{let r=t.find(t=>t.id===parseInt(e));return r?`
            <div class="bg-[#1a1c23] border border-white/5 rounded-2xl p-3 flex items-center justify-between">
              <div class="flex items-center gap-3">
                <img src="${r.img}" class="w-12 h-12 rounded-xl object-cover" />
                <div>
                  <h3 class="text-xs font-bold text-white">${r.title}</h3>
                  <p class="text-[11px] text-gray-400 mt-0.5">${r.price} ₴ × ${n}</p>
                </div>
              </div>
              <div class="flex items-center gap-2 bg-white/5 border border-white/5 rounded-xl p-1">
                <button onclick="handleDecrease(${r.id})" class="w-7 h-7 flex items-center justify-center text-gray-300 hover:bg-white/10 rounded-lg">-</button>
                <span class="text-xs font-bold text-white w-4 text-center">${n}</span>
                <button onclick="handleIncrease(${r.id})" class="w-7 h-7 flex items-center justify-center text-gray-300 hover:bg-white/10 rounded-lg">+</button>
              </div>
            </div>
          `:``}).join(``)}
      </div>

      <!-- Итог и оформление -->
      <div class="bg-[#1a1c23] border border-white/5 rounded-2xl p-4 mt-6 space-y-3">
        <div class="flex justify-between text-xs text-gray-400">
          <span>Сумма заказа</span>
          <span class="text-white font-semibold">${n} ₴</span>
        </div>
        <div class="flex justify-between text-xs text-gray-400">
          <span>Доставка</span>
          <span class="text-emerald-400 font-semibold">Бесплатно</span>
        </div>
        <div class="border-t border-white/5 pt-3 flex justify-between text-sm font-bold text-white">
          <span>Итого к оплате</span>
          <span class="text-blue-400">${n} ₴</span>
        </div>
        
        <button onclick="checkoutOrder()" class="w-full bg-blue-600 hover:bg-blue-500 active:scale-98 text-white font-bold text-xs py-3.5 rounded-xl transition-all shadow-lg shadow-blue-600/30 mt-2">
          Оформить заказ (${n} ₴)
        </button>
      </div>
    </div>
  `}window.handleIncrease=function(e){i(e),f()},window.handleDecrease=function(e){a(e),f()},window.checkoutOrder=function(){if(l&&l.sendData){let e={items:r.cart,total:o(),user:l.initDataUnsafe?.user||{}};l.sendData(JSON.stringify(e))}else alert(`Заказ успешно сформирован! (Демо-режим)`),r.cart={},switchTab(`catalog`)};function h(){let e=l?.initDataUnsafe?.user;return`
    <div class="space-y-4">
      <div class="bg-[#1a1c23] border border-white/5 rounded-2xl p-5 text-center">
        <div class="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 mx-auto flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-blue-600/30 mb-3">
          ${e?.first_name?e.first_name[0]:`U`}
        </div>
        <h2 class="text-sm font-bold text-white">${e?.first_name||`Гость ресторана`}</h2>
        <p class="text-[11px] text-gray-400 mt-0.5">@${e?.username||`telegram_user`}</p>
      </div>

      <div class="bg-[#1a1c23] border border-white/5 rounded-2xl p-4 space-y-3">
        <h3 class="text-xs font-bold text-gray-300 uppercase tracking-wider">Статус программы лояльности</h3>
        <div class="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5">
          <div>
            <p class="text-xs font-semibold text-white">VIP Клиент</p>
            <p class="text-[10px] text-gray-400 mt-0.5">Кешбэк баллами: 5%</p>
          </div>
          <span class="text-blue-400 text-xs font-bold">150 бонусов</span>
        </div>
      </div>
    </div>
  `}u();