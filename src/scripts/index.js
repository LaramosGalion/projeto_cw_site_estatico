
const hero = document.querySelector("#container");

const img = document.querySelectorAll("div#container div.hero");

let idx = 0;

function carrossel(){
    idx++;

    if(idx > img.length - 1 ){
        idx = 0;
    }

    hero.style.transform = `translateX(${-idx * (100/3)}%)`;
};

setInterval(carrossel, 5000);

function menuClick(){
    if (hotbar.style.display == "block"){
        hotbar.style.display = "none";
    }else{
        hotbar.style.display = "block";
    };
};

function changeSize(){
    if ( window.innerWidth >= 768){
        hotbar.style.display = "block"; 
    }else{
        hotbar.style.display ="none";
    }
}