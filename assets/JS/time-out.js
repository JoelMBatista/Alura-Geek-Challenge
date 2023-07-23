function sleep(ms) {
  return new Promise((val) => setTimeout(val, ms));
}

function loading() {
  let div = document.createElement("div");
  let loadImg = document.createElement("img");
  loadImg.src = "../assets/img/loading.gif";
  loadImg.style.maxWidth = "100px";
  loadImg.style.width = "50%";

  div.style.position = "absolute";
  div.style.top = "0";
  div.style.height = "100vh";
  div.style.width = "100vw";
  div.style.display = "flex";
  div.style.justifyContent = "center";
  div.style.alignItems = "center";
  div.style.background = "#989da3b7"
  div.style.zIndex = "1";
  div.appendChild(loadImg);
  document.body.appendChild(div);
}

export const timeOut = {
  sleep,
  loading,
};
