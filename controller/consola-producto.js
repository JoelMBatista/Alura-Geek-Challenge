import {productServer} from "../servicios/producto-servicios.js";


const createNewProduct = (id, name, imageUrl, price, category, description) => {
    const newCard = document.createElement("div");
    const content = `
    <div class="producto">
    <img src="${imageUrl}" alt="" class="producto_image">
    <p class="producto_descripcion">${name}</p>
    <p class="producto_precio">RD$ ${price}</p>
    <a href="${id}" class="ver_producto">Ver producto</a>
</div>`;
  
    newCard.innerHTML = content;
    return newCard;
}

const sectionConsola = document.querySelector("[data-productoConsola]");


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



        let section;
        if (category === "Consolas"){
            section = sectionConsola
            section.appendChild(newElements);
        }

        




        
    });
  })
  .catch((error) => alert("Ha ocurrido un error: " + error));