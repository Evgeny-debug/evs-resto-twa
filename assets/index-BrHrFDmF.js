(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:1,title:`Black Angus Burger`,description:`С трюфельным соусом`,price:350,img:`https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80`},{id:2,title:`Ролл Филадельфия`,description:`Лосось, крем-сыр, авокадо`,price:420,img:`https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500&q=80`},{id:3,title:`Том Ям с морепродуктами`,description:`Классический острый суп`,price:380,img:`https://images.unsplash.com/photo-1548943487-a2e4b43b4850?w=500&q=80`},{id:4,title:`Матча Тоник`,description:`Освежающий напиток`,price:150,img:`https://images.unsplash.com/photo-1515823662972-da6a2b4d3002?w=500&q=80`}],t=window.Telegram.WebApp,n={};function r(){t.expand(),t.ready(),t.onEvent(`mainButtonClicked`,()=>{let e={items:n,total:a(),userId:t.initDataUnsafe?.user?.id||`demo_user`};t.sendData(JSON.stringify(e))})}function i(e){n[e]||(n[e]=0),n[e]++,t.HapticFeedback&&t.HapticFeedback.impactOccurred(`light`),o()}function a(){return Object.entries(n).reduce((t,[n,r])=>{let i=e.find(e=>e.id===parseInt(n));return t+(i?i.price*r:0)},0)}function o(){let e=a();Object.values(n).reduce((e,t)=>e+t,0)>0?(t.MainButton.setText(`ОФОРМИТЬ ЗАКАЗ • ${e} ₴`),t.MainButton.color=`#ffffff`,t.MainButton.textColor=`#000000`,t.MainButton.show()):t.MainButton.hide()}window.addToCart=i;function s(){document.querySelector(`#app`).innerHTML=`
    <header class="sticky top-0 z-50 backdrop-blur-xl bg-[#0f1015]/70 border-b border-white/10 px-5 py-4 flex justify-between items-center">
      <div>
        <h1 class="text-xl font-bold tracking-wide text-white">EVS.PRO RESTO</h1>
        <p class="text-xs text-gray-400 mt-1">Демонстрация TWA</p>
      </div>
    </header>

    <main class="p-4">
      <div class="grid grid-cols-2 gap-4" id="menu-grid">
        ${e.map(e=>`
          <div class="bg-[#1a1c23] border border-white/5 rounded-2xl overflow-hidden flex flex-col justify-between">
            <div>
              <img src="${e.img}" alt="${e.title}" class="w-full h-36 object-cover pointer-events-none">
              <div class="p-3">
                <h2 class="text-sm font-semibold text-white leading-tight">${e.title}</h2>
                <p class="text-[10px] text-gray-400 mt-1 line-clamp-1">${e.description}</p>
                <p class="text-white text-sm font-bold mt-2">${e.price} ₴</p>
              </div>
            </div>
            <div class="p-3 pt-0">
              <button onclick="addToCart(${e.id})" class="w-full bg-white/10 hover:bg-white/20 active:bg-white/30 text-white text-sm py-2.5 rounded-xl transition-all duration-200 font-medium">
                Добавить
              </button>
            </div>
          </div>
        `).join(``)}
      </div>
    </main>
  `}s(),r();