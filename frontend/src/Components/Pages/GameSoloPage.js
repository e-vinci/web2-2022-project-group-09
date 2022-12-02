import { clearPage } from '../../utils/render';
import Navbar from '../Navbar/Navbar';
import atomium from "../../img/atomium.png"
import bruges from "../../img/bruges.png"
import bruxelles from "../../img/bruxelles.png"
import namur from "../../img/namur.png"
import dinant from "../../img/dinant.png"
/* eslint-disable */
const GameSoloPage = () => {
    Navbar();
    clearPage();
   
    const main = document.querySelector('main');
    const maxMoves = document.createElement('h1');
    maxMoves.innerHTML = 'lives : ';
    const maxMovesCount = document.createElement('span');
    maxMovesCount.className= 'playerLivesCount';
    const section = document.createElement('section');
    main.appendChild(maxMoves);
    maxMoves.appendChild(maxMovesCount);
    main.appendChild(section);
    let playerLives = 6;
    maxMovesCount.textContent = playerLives;



const generateData = () =>
    [
        {imgSrc: atomium, name: "atomium"},
        {imgSrc: bruxelles, name: "bruxelles"},
        {imgSrc: bruges, name: "bruges"},
        {imgSrc: namur, name: "namur"},
        {imgSrc: dinant, name: "dinant"},

        {imgSrc: atomium, name: "atomium"},
        {imgSrc: bruxelles, name: "bruxelles"},
        {imgSrc: bruges, name: "bruges"},
        {imgSrc: namur, name: "namur"},
        {imgSrc: dinant, name: "dinant"},

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
};



    

export default GameSoloPage;
