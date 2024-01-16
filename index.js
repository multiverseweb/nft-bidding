var sq=document.getElementById("square");
var st=document.getElementById("statue");
var nav=document.getElementById("navbar");
var left=document.getElementById("left");
var fixed=document.getElementById("fixed");
function changeCss() {
    this.scrollY > 10 ? statue.style.opacity = 0 : statue.style.opacity = 1;
    this.scrollY > 10 ? square.style.opacity = 0 : square.style.opacity = 1;
    this.scrollY > 10 ? nav.style.backgroundColor = "rgba(177, 177, 177, 0.14)" : nav.style.backgroundColor = "#00000000";
    this.scrollY > 10 ? nav.style.backdropFilter = "blur(5px)" : nav.style.backdropFilter="none";
    this.scrollY > 140 ? fixed.style.opacity="0" : fixed.style.opacity=1;
    this.scrollY > 140 ? document.getElementById("c1").style.height="46vh" : document.getElementById("c1").style.height="0vh";
    this.scrollY > 300 ? document.getElementById("c2").style.width="27vw" : document.getElementById("c2").style.width="0vw";
    this.scrollY > 330 ? document.getElementById("info").style.opacity="1" : document.getElementById("info").style.opacity="0";
    this.scrollY > 330 ? document.getElementById("info").style.marginLeft="5vw" : document.getElementById("info").style.marginLeft="3vw";
}

window.addEventListener("scroll", changeCss, false);


const targetCount = 1024;
const counterElement = document.getElementById('collections');
function updateCounter(count) {
    counterElement.textContent = count;
}
function startCounter() {
    let count = 1000;
    const intervalId = setInterval(function () {
        if (count < targetCount) {
            count++;
            updateCounter(count);
        } else {
            clearInterval(intervalId);
        }
    }, 100);
}
window.onload = startCounter;


function show() {
    document.getElementById("list").style.display = "block";
    document.getElementById("hide").style = "display:block";
    document.getElementById("show").style = "display:none";
    nav.style.backgroundColor = "rgba(177, 177, 177, 0.14)";
    nav.style.backdropFilter = "blur(25px)";
}
function hide() {
    document.getElementById("show").style = "display:block";
    document.getElementById("list").style.display = "none";
    document.getElementById("hide").style = "display:none";
}