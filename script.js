var imagenes = ["img1.png", "img2.png", "img3.png", "img4.png", "img5.png", "img6.png"]



let div1 = document.createElement("div")
let div2 = document.createElement("div")

div1.setAttribute("id", "div1")
div2.setAttribute("id", "div2")

div1.setAttribute("onclick", "clicado(this.id)")
div2.setAttribute("onclick", "clicado(this.id)")

document.getElementById("imagenes").appendChild(div1)
document.getElementById("imagenes").appendChild(div2)

function generarImagen(nombre, div) {
  let numeroAleatorio = Math.floor(Math.random() * imagenes.length)
  let imagen = document.createElement("img")
  imagen.setAttribute("src", imagenes[numeroAleatorio])
  imagen.setAttribute("width", "200px")
  imagen.setAttribute("id", nombre)
  let divUsado = document.getElementById(div)
  divUsado.appendChild(imagen)
  imagenes.splice(numeroAleatorio, 1)
}

function clicado(id) {
  if (id === "div1") {
    document.getElementById("imagen2").remove()
    generarImagen("imagen2", "div2")

  }
  else if (id === "div2") {
    document.getElementById("imagen1").remove()
    generarImagen("imagen1", "div1")
  }
}

function inicio() {
  generarImagen("imagen1", "div1")
  generarImagen("imagen2", "div2")

}

inicio()
