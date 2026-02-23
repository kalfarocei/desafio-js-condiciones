function calcular() {
  let sticker1 = Number(document.querySelector(".sticker-1").value);
  let sticker2 = Number(document.querySelector(".sticker-2").value);
  let sticker3 = Number(document.querySelector(".sticker-3").value);

  let totalStickers = sticker1 + sticker2 + sticker3;
  let Total = document.querySelector(".texto-total");

  if (totalStickers <= 10) {
    Total.innerHTML = "Llevas " + totalStickers + " stickers";
  } else {
    Total.innerHTML = "Llevas demasiados stickers";
  }
}

function verificarContraseña() {
  let digito1 = document.querySelector("#digito-1").value;
  let digito2 = document.querySelector("#digito-2").value;
  let digito3 = document.querySelector("#digito-3").value;

  let contraseña = digito1 + digito2 + digito3;

  let contraseñaCorrecta = document.querySelector(".ingreso");

  if (contraseña === "911") {
    contraseñaCorrecta.innerHTML = "correcta";
  } else {
    contraseñaCorrecta.innerHTML = "incorrecta";
  }
}
