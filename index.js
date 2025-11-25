import{a as p,S as m,i as a}from"./assets/vendor-MgecxatS.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const h="https://pixabay.com/api/",g="51217923-e424984f9b43f1bcfdccd2a18";function y(s){const r={key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return p.get(h,{params:r}).then(o=>o.data)}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),b=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(s){const r=s.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:i,comments:d,downloads:f})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${n}">
          <img class="gallery-image" src="${o}" alt="${e}" />
        </a>
        <div class="info">
          <p><b>Likes</b> ${t}</p>
          <p><b>Views</b> ${i}</p>
          <p><b>Comments</b> ${d}</p>
          <p><b>Downloads</b> ${f}</p>
        </div>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",r),b.refresh()}function q(){l.innerHTML=""}function v(){u.classList.remove("is-hidden")}function P(){u.classList.add("is-hidden")}const c=document.querySelector(".search-form");c.addEventListener("submit",s=>{s.preventDefault();const r=c.elements.searchQuery.value.trim();if(!r){a.warning({message:"Please enter a search term!",position:"topRight"});return}q(),v(),y(r).then(o=>{if(!o.hits||o.hits.length===0){a.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(o.hits)}).catch(()=>{a.error({message:"An error occurred during the request. Please try again.",position:"topRight"})}).finally(()=>{P(),c.reset()})});
//# sourceMappingURL=index.js.map
