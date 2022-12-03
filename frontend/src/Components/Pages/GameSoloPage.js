import { clearPage } from '../../utils/render';
import Navbar from '../Navbar/Navbar';
import lukaku from "../../img/Romelu-Lukaku-Belgique-Coupe-du-monde-2022.jpg"
import deBruyn from "../../img/thumbnail_Capture d’écran 2022-12-03 à 15.16.05.png"
import mertens from "../../img/thumbnail_MjAyMTA4ODk5ZWY4NzllZTgzMGJiZDM2OWFmN2NkZWE5M2YzYzU.jpg"
import meunier from "../../img/thumbnail_meunier.jpg"
import hazard from "../../img/thumbnail_image.jpg"
import mertenss from "../../img/thumbnail_unnamed.jpg"

/* eslint-disable */
const GameSoloPage = () => {
    Navbar();
    clearPage();
    const divBackGame = document.createElement('div');
    divBackGame.className = 'divBackGame';
    const main = document.querySelector('main');
    const maxMoves = document.createElement('h1');
    maxMoves.innerHTML = 'lives : ';
    const maxMovesCount = document.createElement('span');
    maxMovesCount.className= 'playerLivesCount';
    const section = document.createElement('section');
    main.appendChild(divBackGame);
    divBackGame.appendChild(maxMoves);
    maxMoves.appendChild(maxMovesCount);
    divBackGame.appendChild(section);
    let playerLives = 6;
    maxMovesCount.textContent = playerLives;



const generateData = () =>
    [
        {imgSrc: lukaku, name: "lukaku"},
        {imgSrc: deBruyn, name: "deBruyn"},
        {imgSrc: mertens, name: "mertens"},
        {imgSrc: meunier, name: "meunier"},
        {imgSrc: hazard, name: "hazard"},
        {imgSrc: mertenss, name: "mertenss"},


        {imgSrc: lukaku, name: "lukaku"},
        {imgSrc: deBruyn, name: "deBruyn"},
        {imgSrc: mertens, name: "mertens"},
        {imgSrc: meunier, name: "meunier"},
        {imgSrc: hazard, name: "hazard"},
        {imgSrc: mertenss, name: "mertenss"},


    ];
const randomize = () =>{
    const cardData = generateData();
    cardData.sort(() => Math.random() -0.5); //hasard
    return cardData;
};
const cardGenerator = () =>{
    const section = document.querySelector("section");
    const cardData = randomize();
 
    cardData.forEach((item) =>{
        const card = document.createElement("div");
        const recto = document.createElement("img");
        const verso = document.createElement("div");
        card.classList = "card";
        recto.classList = "recto";
        verso.classList = "verso";
        recto.src = item.imgSrc;
        card.setAttribute("name",item.name);
        section.appendChild(card);
        card.appendChild(recto);
        card.appendChild(verso);
        card.addEventListener('click',(e) =>{
            card.classList.toggle("toggleCard");
            regarderCarte(e);
        })
    })

};
//correspondance des cartes
const regarderCarte= (e) => {
  
  const carteClick = e.target;
  carteClick.classList.add("flipped");
  const carteFlip=document.querySelectorAll(".flipped");
  if(carteFlip.length===2){
    if(carteFlip[0].getAttribute("name") === carteFlip[1].getAttribute("name")){
        console.log("match");
        carteFlip.forEach((card)=>{
            card.classList.remove("flipped");
            card.style.pointerEvents="none";
        })
    }else{
        console.log("wrong");
        carteFlip.forEach((card)=> {
            card.classList.remove("flipped");
            setTimeout(()=> card.classList.remove("toggleCard"), 1500);
            
        });
        playerLives--;
        maxMovesCount.textContent=playerLives;

    }
  }

};
cardGenerator();
//pour les tests

};





export default GameSoloPage;
