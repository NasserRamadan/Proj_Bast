const links = document.querySelectorAll("[data-like-title]");

const mainSection = document.querySelector(".main");

function slideWindow() {
  const posicaoJanela = window.scrollY;
  const header = document.querySelector(".header");

  if (posicaoJanela > 300) {
    header.classList.add("header--hidden");
  } else {
    header.classList.remove("header--hidden");
  }
}

window.addEventListener("scroll", slideWindow);

for (let i = 0; i < links.length; i++) {
  const linksArray = links[i];

  linksArray.addEventListener("click", (e) => {
    const target = e.target.dataset.likeTitle;

    const sectionTarget = document.querySelector(`[data-tab-id="${target}"]`);

    hideLists();

    sectionTarget.classList.add("ativo");

    removeActive();

    e.target.classList.add("ativo");
  });
}

function hideLists() {
  const tabsContainer = document.querySelectorAll("[data-tab-id]");

  for (let i = 0; i < tabsContainer.length; i++) {
    tabsContainer[i].classList.remove("ativo");
  }
}

function removeActive() {
  const titles = document.querySelectorAll("[data-like-title]");

  for (let i = 0; i < titles.length; i++) {
    titles[i].classList.remove("ativo");
  }
}
