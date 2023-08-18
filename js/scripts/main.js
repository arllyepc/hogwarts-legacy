const menuLang = document.querySelector(".lang");
const menuLangList = document.querySelector(".lang-list");

menuLang.addEventListener("click", (e) => {
  menuLangList.classList.toggle("active");
});

const texts = {
  header: {
    logoAlt: {
      pt: "Logo do Hogwarts Legacy",
      en: "Hogwarts Legacy logo",
    },
    navLinks: [
      { text: { pt: "Início", en: "Home" }, href: "#" },
      { text: { pt: "Sobre", en: "About" }, href: "#" },
      { text: { pt: "Contato", en: "Contact" }, href: "#" },
    ],
    button: {
      pt: "Compre agora na Steam",
      en: "Buy now on Steam",
    },
  },
  hero: {
    title: {
      pt: "Hogwarts Legacy",
      en: "Hogwarts Legacy",
    },
    subtitle: {
      pt: "VIVA EXPERIÊNCIAS PELO MUNDO DE HARRY POTTER",
      en: "LIVE EXPERIENCES IN THE WORLD OF HARRY POTTER",
    },
    button: {
      pt: "Compre agora na Steam",
      en: "Buy now on Steam",
    },
    price: {
      pt: "R$ 255,11",
      en: "$59.99",
    },
  },
};

const language = "pt"; // Defina a opção de idioma aqui
