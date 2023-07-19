import {productServer} from "../servicios/producto-servicios.js";


const getInformation = async () =>{
    const url = new URL(window.location);
    const id = url.searchParams.get('id');

    if(id === null){
        alert("Error")
    }
    const name = document.querySelector("[data-editarNombreProducto]");
    const imageUrl = document.querySelector("[data-editarImageUrl]");
    const price = document.querySelector("[data-editarPrecioProducto]");
    const category = document.querySelector("[data-editarCategoria]");
    const description = document.querySelector("[data-editarEescripcionProducto]");

    try {

        const product = await productServer.detailProduct(id);

        if(product.name && product.imageUrl && product.price && product.category && product.description){
            
            name.value = product.name;
            imageUrl.value = product.imageUrl;
            price.value = product.price;
            category.value = product.category;
            description.value = product.description;
        } else {

            throw new Error
        }
        
    } catch (error) {
        
    }

}

const btnAdmin = document.getElementById('btn_dashboard');

btnAdmin.addEventListener('click', () => {

  window.location.replace("../screen/dashboard.html");

})

getInformation();

const editForm = document.querySelector("[data-formEditar]");

editForm.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const url = new URL(window.location);
    const id = url.searchParams.get('id');

    const name = document.querySelector("[data-editarNombreProducto]").value;
    const imageUrl = document.querySelector("[data-editarImageUrl]").value;
    const price = parseFloat(document.querySelector("[data-editarPrecioProducto]").value);
    const category = document.querySelector("[data-editarCategoria]").value;
    const description = document.querySelector("[data-editarEescripcionProducto]").value;

    productServer
    .updateProduct(id, name, imageUrl, price, category, description)
    .then(() => {
        alert(`El producto ${name} ha sido actualizado correctamente`);
    })
    .catch((err) => {alert(err);});
});
