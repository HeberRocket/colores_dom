var circulo = document.getElementById('circulo');
function cambiarColor() {
    var colores = ['#FF0000', '#0000FF', '#00FF00', '#FFFF00', '#FFA500', '#800080'];
    var colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    circulo.style.backgroundColor = colorAleatorio;   
}
