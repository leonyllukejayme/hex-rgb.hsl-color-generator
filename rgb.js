const btn1 = document.getElementById("btn1");
const rgb = document.querySelector(".rgb");
const txtClr1 = document.getElementById("txtclr1");

btn1.addEventListener('click', function(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let rgbColor = `rgb(${red}, ${green}, ${blue})`;
    
    txtClr1.textContent = rgbColor;
    rgb.style.backgroundColor = rgbColor;
});