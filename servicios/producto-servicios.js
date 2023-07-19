//hacemos GET de nuestra API, para mostrarlo en screen index

const listaProducto = () =>
  fetch("https://64b82c1421b9aa6eb079a4cd.mockapi.io/producto").then((response) => response.json());

const createProduct = (name, imageUrl, price, category, description) => {
  return fetch("https://64b82c1421b9aa6eb079a4cd.mockapi.io/producto", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      imageUrl,
      price,
      category,
      description,
      id: uuid.v4(),
    }),
  });
};

const deleteProduct = (id) => {
  return fetch(`https://64b82c1421b9aa6eb079a4cd.mockapi.io/producto/${id}`, {
    method: "DELETE",
  });
};

const detailProduct = (id) => {
  return fetch(`https://64b82c1421b9aa6eb079a4cd.mockapi.io/producto/${id}`).then((response) =>
    response.json()
  );
};

const updateProduct = (id, name, imageUrl, price, category, description) => {
  return fetch(`https://64b82c1421b9aa6eb079a4cd.mockapi.io/producto/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, imageUrl, price, category, description }),
  })
    .then((respuesta) => console.log(respuesta))
    .catch((err) => console.log(err));
};

export const productServer = {
  listaProducto,
  createProduct,
  deleteProduct,
  detailProduct,
  updateProduct,
};
