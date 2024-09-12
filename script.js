document.querySelectorAll('.item img').forEach(img => {
  img.addEventListener('mouseover', ()=> {
    img.classList.add('enlarged');
  });
  img.addEventListener('mouseout', ()=> {
    img.classList.remove('enlarged');
  });
})

//alert del carrito
const carrito = document.querySelector("#carrito")
carrito.addEventListener("click", function(){
  alert("Aún no agregamos un carrito.")
})

//area expandible
const skinsData = {
  "Black Lotus": 'https://steamcommunity.com/market/search?q=m4+loto+negro',
  "Desert Eagle": "https://steamcommunity.com/market/search?q=coder+red+Desert+Eagle",
  "Emperatriz": "https://steamcommunity.com/market/search?q=ak-47+Emperatriz",
  "Nightmare": "https://steamcommunity.com/market/search?q=m4+Nightmare",
  "Print Stream": "https://steamcommunity.com/market/search?q=+USP-S+%7C+Printstream",
  "Nightwish": "https://steamcommunity.com/market/search?q=ak+Nightwish",
  "Blue Laminate": "https://steamcommunity.com/market/search?q=AK-47+%7C+Laminado+azul",
  "Decimator": "https://steamcommunity.com/market/search?q=+M4A1-S+%7C+Diezmador",
  "Bloodsport": "https://steamcommunity.com/market/search?q=AK-47+%7C+Contacto+sangriento",
  "Black Nile": "https://steamcommunity.com/market/search?q=AWP+%7C+Nilo+negro",
  "Sr. Bloody Darryl":"https://steamcommunity.com/market/search?q=Sr.+Bloody+Darryl",
  "Primeiro tenente":"https://steamcommunity.com/market/search?q=Primeiro+tenente"
};

function showDetails(item) {
  // Obtener los detalles del artículo
  const imageSrc = item.querySelector('.item-image').src;
  const title = item.querySelector('.item-title').textContent;
  const price = item.querySelector('.item-price');

  // Actualizar el contenido del detalle
  document.getElementById('details-image').src = imageSrc;
  document.getElementById('details-title').textContent = title;

  const detailsPrice = document.getElementById('details-price'); // Ahora es el elemento, no su texto

  let priceInt = parseInt(price.textContent.slice(1));
  console.log(priceInt);

  let detailBuyButton = document.getElementById('buy');

  // Configurar el botón según el precio
  if (priceInt > 100) {
    detailBuyButton.textContent = "Agregar al carrito";
    detailBuyButton.onclick = addToCart; // Asignar la función sin ejecutarla
  } else {
    detailBuyButton.textContent = "Comprar en Steam";
    detailBuyButton.onclick = function () {
      goToOtherSite(skinsData[title]); // Pasar la URL asociada a la skin
    }; // Pasar la URL asociada a la skin
    detailsPrice.style.visibility = 'hidden';
  }

  // Verifica si el precio tiene tachado
  if (price.querySelector('s')) {
    const originalPrice = price.querySelector('s').textContent;
    const discountedPrice = price.textContent.replace(originalPrice, '').trim();

    detailsPrice.innerHTML = `<s>${originalPrice}</s> ${discountedPrice}`;
  } else {
    detailsPrice.textContent = price.textContent;
  }

  // Mostrar el contenedor de detalles
  document.getElementById('details').style.display = 'block';
}


function goToOtherSite(url) {
  const newTab = window.open(url, '_blank'); // Abre el enlace en una nueva pestaña
  newTab.focus(); // Enfoca la nueva pestaña
}



function addToCart() {
  alert('Artículo agregado al carrito.');
  // Agregar lógica para agregar al carrito
  closeDetails();
}

// Cerrar contenedor de detalles
function closeDetails() {
  document.getElementById('details').style.display = 'none';
}


//Carrusel
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const slider = document.querySelector("#slider");
const sliderSection = document.querySelectorAll(".slider-section");

btnLeft.addEventListener("click", e => moveToLeft());
btnRight.addEventListener("click", e => moveToRight());
setInterval(() => {
    moveToRight();
}, 3000);

let operacion = 0;
let counter = 0;
let widthImg = 100 / 4; // 4 images, so 100 / 4 = 25%

function moveToRight() {
    if (counter >= 3) {
        counter = 0;
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    }
    counter++;
    operacion = operacion + widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s";
}

function moveToLeft() {
    counter--;
    if (counter < 0) {
        counter = 3;
        operacion = widthImg * 3;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    }
    operacion = operacion - widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s";
}