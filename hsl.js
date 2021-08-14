const btn2 = document.getElementById("btn2");
const hsl = document.querySelector(".hsl");
const txtClr2 = document.getElementById("txtclr2");

btn2.addEventListener('click',function(){
    let hue = Math.floor(Math.random() * 360);
    let saturation = Math.floor(Math.random() * 100);
    let lightness = Math.floor(Math.random() * 100);

    let hslColor = `hsl(${hue},${saturation}%,${lightness}%)`;
    txtClr2.textContent = hslColor;
    hsl.style.backgroundColor = hslColor;
});