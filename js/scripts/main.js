const menuLang = document.querySelector(".lang");
const menuLangList = document.querySelector(".lang-list");

document.querySelectorAll(".lang-list li").forEach((li) => {
  li.addEventListener("click", function () {
    const language = this.textContent;
    translateTo(language);
  });
});

function translateTo(language) {
  if (!translations[language]) return; // se não tiver tradução para o idioma selecionado, apenas retorne

  document.querySelectorAll("[data-translate]").forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (translations[language][key]) {
      element.textContent = translations[language][key];
    }
  });

  // Atualiza o valor do idioma na <div class="lang">
  document.querySelector(".lang span").textContent = language;
}

menuLang.addEventListener("click", (e) => {
  menuLangList.classList.toggle("active");
});

const translations = {
  BRA: {
    "Principal": "Principal",
    "Sobre": "Sobre",
    "Funcionalidades": "Funcionalidades",
    "Requisitos de sistema": "Requisitos de sistema",
    "VIVA EXPERIÊNCIAS PELO MUNDO DE HARRY POTTER":
      "VIVA EXPERIÊNCIAS PELO MUNDO DE HARRY POTTER",
    "Compre agora na Steam": "Compre agora na Steam",
    Preco: "R$ 255,11",
  },
  ENG: {
    "Principal": "Home",
    "Sobre": "About",
    "Funcionalidades": "Features",
    "Requisitos de sistema": "System Requirements",
    "VIVA EXPERIÊNCIAS PELO MUNDO DE HARRY POTTER":
      "LIVE EXPERIENCES THROUGH THE WORLD OF HARRY POTTER",
    "Compre agora na Steam": "Buy now on Steam",
    "Preco": "$ 69.99",
  },
  ESP: {
    "Principal": "Inicio",
    "Sobre": "Acerca",
    "Funcionalidades": "Características",
    "Requisitos de sistema": "Requisitos del sistema",
    "VIVA EXPERIÊNCIAS PELO MUNDO DE HARRY POTTER":
      "VIVE EXPERIENCIAS POR EL MUNDO DE HARRY POTTER",
    "Compre agora na Steam": "Compra ahora en Steam",
  "Preco": "€ 59.99",
  },
};
