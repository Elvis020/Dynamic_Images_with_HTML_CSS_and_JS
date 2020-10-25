let prev = document.querySelector('#prev');
let next = document.querySelector('#next');
let thumbnail = document.querySelectorAll('.thumbnail');
let hero = document.querySelector('#hero');


let backgroundImg = [
    "img/pexels-git-stephen-gitau-1667843.jpg",
    "img/pexels-kenex-media-sa-3207532.jpg",
    "img/pexels-matteo-badini-5303464.jpg",
    "img/pexels-pok-rie-132037.jpg",
    "img/pexels-visionpic-net-2082949.jpg"
]
let i=0
next.onclick = function(){
    if (i < 4){
        hero.style.backgroundImage = 'url("'+backgroundImg[i+1]+'")';
        thumbnail[i+1].classList.add("active");
        thumbnail[i].classList.remove("active");
        i++;
    }
}
prev.onclick = function(){
    if (i > 0){
        hero.style.backgroundImage = 'url("'+backgroundImg[i-1]+'")';
        thumbnail[i-1].classList.add("active");
        thumbnail[i].classList.remove("active");
        i--;
    }
}