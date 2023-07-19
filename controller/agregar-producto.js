import {productServer} from "../servicios/producto-servicios.js";

const addForm = document.querySelector("[data-formAgregar]");

addForm.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const name = document.querySelector("[data-nombreProducto]").value;
    const imageUrl = document.querySelector("[data-imageUrl]").value;
    const price = parseFloat(document.querySelector("[data-precioProducto]").value);
    const category = document.querySelector("[data-categoria]").value;
    const description = document.querySelector("[data-descripcionProducto]").value;

    productServer
    .createProduct(name, imageUrl, price, category, description)
    .then(() => {
        alert(`El producto ${name} ha sido agregado correctamente`);
    })
    .catch((err) => {alert(err);});
});

const btnAdmin = document.getElementById('btn_dashboard');

btnAdmin.addEventListener('click', () => {

  window.location.replace("../screen/dashboard.html");

})
