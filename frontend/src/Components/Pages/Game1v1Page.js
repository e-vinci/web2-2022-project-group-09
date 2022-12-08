import lukaku from "../../img/Romelu-Lukaku.jpg"
import courtois from "../../img/Courtois.png"
import deBruyn from "../../img/deBruyn.jpg"
import meunier from "../../img/meunier.jpg"
import hazard from "../../img/hazard.jpg"
import hazard2 from "../../img/hazard2.jpg"
import equipe from "../../img/equipe.jpg"
import mertenss from "../../img/thumbnail_unnamed.jpg"
import batshuayi from "../../img/batshuayi.jpg"
import { clearPage } from "../../utils/render"


const Game1v1Page =  () => {
clearPage()
    const divBackRestart = document.createElement('div');
    divBackRestart.className = 'divBackRestart';

    const divBackGame = document.createElement('div');
    divBackGame.className = 'divBackGame';

    const main = document.querySelector('main');


    let section = document.createElement('section');
    section.className = 'sectionCard'

    main.appendChild(divBackGame);
    divBackGame.appendChild(section);
  
    const difficulte=window.location.search.split('=')[1].split('%')[0]
    let timer = -1;
     if(difficulte === 'Easy'){
        timer=4000;
     } else if(difficulte === 'Medium'){
        timer = 2000;
     }else{
        timer=700;
     }

    let cmptCartes = 9;
     const player1='user1';
    const player2='user2';
    
    let joueur = tirageAuSort(player1,player2);

    const generateData = () =>
    [
        {imgSrc: lukaku, name: "lukaku"},
        {imgSrc: courtois, name: "courtois"},
        {imgSrc: deBruyn, name: "deBruyn"},
        {imgSrc: meunier, name: "meunier"},
        {imgSrc: hazard, name: "hazard"},
        {imgSrc: mertenss, name: "mertenss"},
        {imgSrc: equipe, name: "equipe"},
        {imgSrc: batshuayi, name: "batshuayi"},
        {imgSrc: hazard2, name: "hazard2"},


        {imgSrc: lukaku, name: "lukaku"},
        {imgSrc: courtois, name: "courtois"},
        {imgSrc: deBruyn, name: "deBruyn"},
        {imgSrc: meunier, name: "meunier"},
        {imgSrc: hazard, name: "hazard"},
        {imgSrc: mertenss, name: "mertenss"},
        {imgSrc: equipe, name: "equipe"},
        {imgSrc: batshuayi, name: "batshuayi"},
        {imgSrc: hazard2, name: "hazard2"},

    ];
    const randomize = () => {
        const cardData = generateData();
        cardData.sort(() => Math.random() - 0.5);
        return cardData;
    };

    const cardGenerator = () => {
         section = document.querySelector("section");
        const cardData = randomize();
        cardData.forEach((item) => {
            const card = document.createElement("div");
            const recto = document.createElement("img");
            const verso = document.createElement("div");
            card.classList = "card";
            recto.classList = "recto";
            verso.classList = "verso";
            recto.src = item.imgSrc;
            card.setAttribute("name", item.name);
            section.appendChild(card);
            card.appendChild(recto);
            card.appendChild(verso);
          card.classList.toggle("toggleCard");
          setTimeout(() => card.classList.remove("toggleCard"),timer);
       
          setTimeout( () => card.addEventListener('click', e => {
            document.querySelectorAll('.toggleCard').disabled = true;
            
            
            card.classList.toggle("toggleCard");
            // eslint-disable-next-line no-use-before-define
    regarderCarte(e);
            
        }),timer +2000);

        })

        const regarderCarte = (e) => {
            console.log(joueur)
           const carteClick = e.target;
            carteClick.classList.add("flipped");
            const carteFlip = document.querySelectorAll(".flipped");

            if (carteFlip.length === 2) {
                if (carteFlip[0].getAttribute("name") === carteFlip[1].getAttribute("name")) {
                    console.log("match");
                    carteFlip.forEach((card) => {
                        card.classList.remove("flipped");
                        // eslint-disable-next-line no-param-reassign
                        card.style.pointerEvents = "none";                                         
                    })
                    cmptCartes -= 1 ;
                    console.log(cmptCartes)
                } else {
                    console.log("wrong");
                    carteFlip.forEach((card) => {
                        card.classList.remove("flipped");
                        setTimeout(() => card.classList.remove("toggleCard") , 1000);
                    });
            
                    if(joueur === 'user1'){
                        joueur = 'user2';
                    }else{
                        joueur= 'user1';
                    }
                }
                if(carteFlip[0].getAttribute("name") === carteFlip[1].getAttribute("name") && cmptCartes === 0 ){
                    console.log(`le gagnant est ${joueur}`)
            }
            
        }
      
        };
    };


   
 

    cardGenerator()
  };


  
  function tirageAuSort(j1,j2){
    const player = [j1,j2];
    return player[Math.floor(Math.random()*2)];
  }
  /*
  
  function affichageCarte(cartes){

    setTimeout((),timer)
  }
  */
  

  export default Game1v1Page;