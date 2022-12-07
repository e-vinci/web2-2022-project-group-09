import { clearPage } from '../../utils/render';
import Navbar from '../Navbar/Navbar';
import lukaku from "../../img/Romelu-Lukaku.jpg"
import courtois from "../../img/Courtois.png"
import deBruyn from "../../img/deBruyn.jpg"
import meunier from "../../img/meunier.jpg"
import hazard from "../../img/hazard.jpg"
import mertenss from "../../img/thumbnail_unnamed.jpg"
import Navigate from '../Router/Navigate';

/* eslint-disable */

const GameSoloPage = () => {
    Navbar();
    clearPage();


    const divBackRestart = document.createElement('div');
    divBackRestart.className = 'divBackRestart';

    const divBackGame = document.createElement('div');
    divBackGame.className = 'divBackGame';

    const main = document.querySelector('main');

    const maxMoves = document.createElement('h1');
    maxMoves.innerHTML = 'lives : ';

    const maxMovesCount = document.createElement('span');
    maxMovesCount.className = 'playerLivesCount';

    //timer
    const timer = document.createElement('span');
    timer.className = 'timer';
    let heures = 0;
    let minutes = 0;
    let secondes = 0;

    let timeOut;
    const section = document.createElement('section');

    main.appendChild(divBackGame);
    divBackGame.appendChild(maxMoves);
    maxMoves.appendChild(maxMovesCount);
    maxMoves.appendChild(timer);
    divBackGame.appendChild(section);

    let playerLives = 4;
    maxMovesCount.textContent = playerLives;

    //restart button for Game Over
    const btnRestart= document.createElement('button');
    btnRestart.className='restart';
    btnRestart.innerHTML="Restart";
    btnRestart.addEventListener('click', () => {
        Navigate('/level');
    });
    const btnHome=document.createElement('button');
    btnHome.className='btn';
    section.appendChild(divBackRestart);
    divBackRestart.appendChild(btnRestart);
    divBackRestart.appendChild(btnHome);
    const iHome= document.createElement('i');
    iHome.className='fa fa-home';
    btnHome.appendChild(iHome);
    btnHome.addEventListener('click', () => {
        Navigate('/');
    });


    /*
    if (mode === 1) {
     console.log("1");
    } else if (mode === 2){
        console.log("2");
    }
    else if(mode ===3){
        console.log("3");
    }
     */

    /*
    const mode = document.getElementById("mode").value;
    //Change settings with the gamemode
    if (mode === "easy") {
        playerLives = 15;
    } else if(mode === "medium"){
        playerLives = 10;
    } else if (mode === "hard") {
        playerLives = 5;
    }
     */


    const generateData = () =>
    [
        {imgSrc: lukaku, name: "lukaku"},
        {imgSrc: courtois, name: "courtois"},
        {imgSrc: deBruyn, name: "deBruyn"},
        {imgSrc: meunier, name: "meunier"},
        {imgSrc: hazard, name: "hazard"},
        {imgSrc: mertenss, name: "mertenss"},


        {imgSrc: lukaku, name: "lukaku"},
        {imgSrc: courtois, name: "courtois"},
        {imgSrc: deBruyn, name: "deBruyn"},
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
let defilerTempsBool = false;
//correspondance des cartes
const regarderCarte= (e) => {

  const carteClick = e.target;
  carteClick.classList.add("flipped");
    if(!defilerTempsBool){
        defilerTemps();
        defilerTempsBool = true;
    }
  const carteFlip=document.querySelectorAll(".flipped");
  /*
  if (playerLives === 0 ){
    //juste un petit probleme quand vies = 0, faut rappuyer une fois pour afficher
      clearTimeout(timeOut);
      carteFlip.forEach((card)=> {
          card.classList.remove("toggleCard");
      })
        divBackRestart.style.display = 'block';
  }
   */
    if(carteFlip.length===2 && playerLives ===1 && carteFlip[0].getAttribute("name") !== carteFlip[1].getAttribute("name")){
        carteFlip.forEach((card)=> {
            card.classList.remove("flipped");
            setTimeout(()=> card.classList.remove("toggleCard"), 1000);

        });
        playerLives =0;
        maxMovesCount.textContent=playerLives;
        clearTimeout(timeOut);
        carteFlip.forEach((card)=> {
            card.classList.remove("toggleCard");
        })
        divBackRestart.style.display = 'block'

    }
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
            setTimeout(()=> card.classList.remove("toggleCard"), 1000);

        });
        if(playerLives>0){
            playerLives--;
            maxMovesCount.textContent=playerLives;
        }
    }
  }

};
cardGenerator();
    const defilerTemps = () => {

        secondes = parseInt(secondes);
        minutes = parseInt(minutes);
        heures = parseInt(heures);

        secondes++;

        if (secondes === 60) {
            minutes++;
            secondes = 0;
        }

        if (minutes === 60) {
            heures++;
            minutes = 0;
        }

        //   affichage
        if (secondes < 10) {
            secondes = "0" + secondes;
        }

        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        if (heures < 10) {
            heures = "0" + heures;
        }

        timer.textContent = `${heures}:${minutes}:${secondes}`;

        timeOut = setTimeout(defilerTemps, 1000);
    };

}


export default GameSoloPage;
