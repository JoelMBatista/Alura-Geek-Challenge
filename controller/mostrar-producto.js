import {productServer} from "../servicios/producto-servicios.js";

const createNewProduct = (id, name, imageUrl, price, category, description) => {
  const newCard = document.createElement("div");
  const content = `
  <div class="dashboard_producto">
    <img src="${imageUrl}" alt="" class="dashboard_producto_image">
    <p class="dashboard_producto_descripcion">${name}</p>
    <p class="dashboard_producto_precio">$${price}</p>
    <p class="dashboard_producto_id">#${id}</p>
    <button class="boton_eliminar" id="${id}" data-btnDelete></button>
    <button class="boton_editar" id="btn_editar"></button>
</div>`;

  newCard.innerHTML = content;
  const btnDelete =  newCard.querySelector("[data-btnDelete]");
  btnDelete.addEventListener("click", () => {
    const id = btnDelete.id;
    productServer
      .deleteProduct(id)
      .then((response) => {})
      .catch((err) => {
        alert(err);
      });
  });

  const btnEdit = newCard.querySelector("#btn_editar");
  btnEdit.addEventListener("click", () =>{
    window.location.replace(`../screen/editar_producto.html?id=${id}`);
  });

  return newCard;
};

const btnAgregarProducto = document.getElementById("btn_AgregarProducto");

btnAgregarProducto.addEventListener("click", () => {
  window.location.replace("../screen/agregar_producto.html");
});

const contenedorCards = document.querySelector("[data-producto]");

productServer
  .listaProducto()
  .then((data) => {
    data.forEach(({ id, name, imageUrl, price, category, description }) => {
      const newElements = createNewProduct(
        id,
        name,
        imageUrl,
        price,
        category,
        description
      );
      contenedorCards.appendChild(newElements);
    });
  })
  .catch((error) => alert("Ha ocurrido un error: " + error));

  const logoutButton = document.getElementById('btn_dashboard');

logoutButton.addEventListener('click', function() {
  // Limpiar datos de sesión
  sessionStorage.removeItem('isLoggedIn');
  
  // Redirigir a la página de inicio de sesión
  window.location.replace('../index.html');
});