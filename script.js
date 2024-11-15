/*const strategyImg = document.querySelector('.strategyImg');
const strategyImgs = document.querySelector('.strategyImgs');
const strategiesText = document.querySelector('#strategiesText');
const strategiesTexts = document.querySelector('#strategiesTexts');












strategyImg.addEventListener('click', show);
strategyImg.addEventListener('click',close);

function show() {
    strategiesText.style.display = "grid";
    strategiesText.style.top = '-60px';
}
function close(){
    strategiesText.style.display = 'none';
}


strategyImgs.addEventListener('click', show);

function show() {
    strategiesTexts.style.display = "grid";
    strategiesTexts.style.top = '-60px';
}*/



const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const home = document.querySelector('.home');
const newMenu = document.querySelector('.newMenu');
const subMenu = document.querySelector('.subMenu');





openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',block);
home.addEventListener('click', open);
subMenu.addEventListener('click', close);


function show(){
    mainMenu.style.display = "flex";
    mainMenu.style.top = '0';
}
function block(){
    mainMenu.style.top = '-150%';
    
}

function open(){
    newMenu.style.display = "grid";
}
function close(){
    newMenu.style.display = "none";
    newMenu.style.transition = "2s ease";
}
