import menu from "./db.js";
// console.log(menu);

// html elemanlarını alma

const menuContainer = document.querySelector("#menu-container");
// sayfa yüklendiğinde elemanları gösteren fonksiyonu çalıştır
document.addEventListener("DOMContentLoaded", () => {
  displayMenuUtems(menu);
});
function displayMenuUtems(menuItems) {
  //   console.log("geldi bak", menuItems);
  let displayMenu = menuItems.map(
    (item) => `
    <div id='card'
    class="d-flex gap-3 flex-column flex-md-row align-items.center"
    >
    <img
      src="${item.img}"
      alt=""
      class="img-fluid shadow rounded"
      />
    <div class="">
      <div class="d-flex justify-content-between my-3">
        <h5>${item.title}</h5>
        <p>${item.price} $</p>
      </div>
      <p class="lead">
      ${item.desc}
      </p>
    </div>
  </div>
    `

    // console.log(item);
    // return "Yeni Obje";
  );
  displayMenu = displayMenu.join("");
  console.log(displayMenu);
  menuContainer.innerHTML = displayMenu;
}

// filtreleme kısmı
const filterBtns = document.querySelectorAll(".filter-btn");

filterBtns.forEach((btn) => {
  //   butonlara tıklanma olayını izler
  btn.addEventListener("click", searchCategory);
});

function searchCategory(e) {
  const category = e.target.dataset.id;
  console.log(category);
  const filtredItems = menu.filter((menuItem) => {
    if (menuItem.category === category) return menuItem;
  });
  if (category === "all") {
    displayMenuUtems(menu);
  } else {
    displayMenuUtems(filtredItems);
  }
}
