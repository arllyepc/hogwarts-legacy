"use strict";var menuLang=document.querySelector(".lang"),menuLangList=document.querySelector(".lang-list");function translateTo(a){translations[a]&&(document.querySelectorAll("[data-translate]").forEach(function(e){var t=e.getAttribute("data-translate");translations[a][t]&&(e.textContent=translations[a][t])}),document.querySelector(".lang span").textContent=a)}document.querySelectorAll(".lang-list li").forEach(function(e){e.addEventListener("click",function(){translateTo(this.textContent)})}),menuLang.addEventListener("click",function(e){menuLangList.classList.toggle("active")});var translations={BRA:{Principal:"Principal",Sobre:"Sobre",Funcionalidades:"Funcionalidades","Requisitos de sistema":"Requisitos de sistema","VIVA EXPERIÊNCIAS PELO MUNDO DE HARRY POTTER":"VIVA EXPERIÊNCIAS PELO MUNDO DE HARRY POTTER","Compre agora na Steam":"Compre agora na Steam",Preco:"R$ 255,11"},ENG:{Principal:"Home",Sobre:"About",Funcionalidades:"Features","Requisitos de sistema":"System Requirements","VIVA EXPERIÊNCIAS PELO MUNDO DE HARRY POTTER":"LIVE EXPERIENCES THROUGH THE WORLD OF HARRY POTTER","Compre agora na Steam":"Buy now on Steam",Preco:"$ 69.99"},ESP:{Principal:"Inicio",Sobre:"Acerca",Funcionalidades:"Características","Requisitos de sistema":"Requisitos del sistema","VIVA EXPERIÊNCIAS PELO MUNDO DE HARRY POTTER":"VIVE EXPERIENCIAS POR EL MUNDO DE HARRY POTTER","Compre agora na Steam":"Compra ahora en Steam",Preco:"€ 59.99"}};