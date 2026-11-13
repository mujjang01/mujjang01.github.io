
document.addEventListener("DOMContentLoaded",()=>{
 const toggle=document.querySelector(".mobile-toggle"),nav=document.querySelector(".nav");
 if(toggle&&nav)toggle.addEventListener("click",()=>{
  const open=nav.classList.toggle("open");toggle.textContent=open?"CLOSE":"MENU";
  toggle.setAttribute("aria-expanded",open?"true":"false");
 });
 document.querySelectorAll("[data-year]").forEach(el=>el.textContent=new Date().getFullYear());
});
