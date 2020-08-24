const ganpati = document.querySelector("#ganpati");
const modak = document.querySelector("#modak");
const score = document.querySelector("#score");
const stopwatch = document.querySelector("#stopwatch");
const startBtn = document.querySelector("#start");
let counter = 0;
let timer = 31;

function moveRight() {
    left = parseInt(window.getComputedStyle(ganpati).getPropertyValue("left"));
    if (left < 300) {
        left += 100;
        ganpati.style.left = left+ "px";
    }
}

function moveLeft() {
    left = parseInt(window.getComputedStyle(ganpati).getPropertyValue("left"));
    if (left > 0) {
        left -= 100;
        ganpati.style.left = left+ "px";
    }
}

modak.addEventListener("animationiteration", ()=> {
    random = Math.floor(Math.random() * 4)* 100;
    modak.style.left = random + "px";
})

document.addEventListener("keydown", (e)=> {
   if(e.key == "ArrowRight"){moveRight()}
   if(e.key =="ArrowLeft"){moveLeft()}
});

setInterval(()=>{
   timer--;
   stopwatch.innerHTML = "Remaining time : "+ timer;
   if (timer > 0) {
     modakCount();
   } else {
    stopwatch.innerHTML = "Time Over";
    modak.style.animation = "none";
    score.innerHTML = "Your collected "+counter + " modak, Thanks for playing";
   }
},1000);

function modakCount() {
    setTimeout(()=> {
        ganpatiLeft = parseInt(window.getComputedStyle(ganpati).getPropertyValue("left"));
        modakLeft = parseInt(window.getComputedStyle(modak).getPropertyValue("left"));
        modakTop = parseInt(window.getComputedStyle(modak).getPropertyValue("top"));
        if (ganpatiLeft == modakLeft && modakTop > 400 && modakTop <= 600) {
            counter++;
            score.innerHTML = "you collected "+ counter+" Modak";
        }
    },1000)
}

document.getElementById("left").addEventListener("touchstart",moveLeft());
document.getElementById("right").addEventListener("touchstart",moveRight());