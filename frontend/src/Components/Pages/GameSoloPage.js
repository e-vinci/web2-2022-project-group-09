import Swal from 'sweetalert2';
import { clearPage } from '../../utils/render';
import Navbar from '../Navbar/Navbar';

import witsel from "../../img/Axel_Witsel.jpg"
import carrasco from "../../img/Carrasco.jpg"
import deBruyn from "../../img/Kevin_De_Bruyne.jpg"
import batshuayi from "../../img/Michy_Batshuayi.jpg"
import lukaku from "../../img/Romelu_Lukaku.jpg"
import team from "../../img/team.jpg"
import courtois from "../../img/Thibaut_Courtois.jpg"
import tielemans from "../../img/Youri_Tielemans.jpg"
import hazard from "../../img/hazard.jpg"

import Navigate from '../Router/Navigate';
import cdm from '../../img/cdm.jpg';
import sad from '../../img/gameOver.png';

import { getAuthenticatedUser } from '../../utils/auths';
import { addData } from '../../models/point';

/* eslint-disable */

const GameSoloPage = () => {
    Navbar();
    const difficulte = window.location.search.split('=')[1].split('%')[0]
    if (difficulte === 'Easy') {
        playerLives = 15;
    } else if (difficulte === 'Medium') {
        playerLives = 10;

    } else {
        playerLives = 5;

    }
    const difficulteH1 = document.createElement('h1');
    difficulteH1.innerHTML = difficulte;
    difficulteH1.className = 'difficulteH1';

    clearPage();
    const divBackRestart = document.createElement('div');
    divBackRestart.className = 'divBackRestart';

    const divBackGame = document.createElement('div');
    divBackGame.className = 'divBackGame';

    const main = document.querySelector('main');

    const divLivesTimer = document.createElement('div');
    divLivesTimer.className = 'divLivesTimer';

    const maxMoves = document.createElement('h1');
    maxMoves.innerHTML = 'lives : ';
    maxMoves.className = 'maxMoves';

    const maxMovesCount = document.createElement('span');
    maxMovesCount.className = 'playerLivesCount';
    let lockboard = false;
    let nbePoints = 0;
    let nbeErreu = 0;
    let cmptCartes = 9;
    //timer
    const timer = document.createElement('h1');
    timer.className = 'timer';
    let heures = 0;
    let minutes = 0;
    let secondes = 0;
    let timeOut;
    const section = document.createElement('section');
    section.className = 'sectionCard'

    main.appendChild(divBackGame);
    divBackGame.appendChild(divLivesTimer);
    divLivesTimer.appendChild(timer);
    divLivesTimer.appendChild(difficulteH1);
    divLivesTimer.appendChild(maxMoves);
    maxMoves.appendChild(maxMovesCount);
    divBackGame.appendChild(section);

    let playerLives;
    maxMovesCount.textContent = playerLives;

    //restart button for Game Over
    const btnRestart = document.createElement('button');
    btnRestart.className = 'restart';
    btnRestart.innerHTML = "Restart";
    btnRestart.addEventListener('click', () => {
        Navigate('/level');
    });

    section.appendChild(divBackRestart);
    divBackRestart.appendChild(btnRestart);

    const generateData = () =>
        [
            { imgSrc: lukaku, name: "lukaku" },
            { imgSrc: courtois, name: "courtois" },
            { imgSrc: deBruyn, name: "deBruyn" },
            { imgSrc: batshuayi, name: "batshuayi" },
            { imgSrc: carrasco, name: "carrasco" },
            { imgSrc: team, name: "team" },
            { imgSrc: tielemans, name: "tielemans" },
            { imgSrc: witsel, name: "witsel" },
            { imgSrc: hazard, name: "hazard" },

            { imgSrc: lukaku, name: "lukaku" },
            { imgSrc: courtois, name: "courtois" },
            { imgSrc: deBruyn, name: "deBruyn" },
            { imgSrc: batshuayi, name: "batshuayi" },
            { imgSrc: carrasco, name: "carrasco" },
            { imgSrc: team, name: "team" },
            { imgSrc: tielemans, name: "tielemans" },
            { imgSrc: hazard, name: "hazard" },
            { imgSrc: witsel, name: "witsel" },

        ];
    const randomize = () => {
        const cardData = generateData();
        cardData.sort(() => Math.random() - 0.5); //hasard
        return cardData;
    };

    const cardGenerator = () => {
        const section = document.querySelector("section");
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
            const carteFlip = document.querySelectorAll(".flipped");

            card.addEventListener('click', (e) => {
                if (lockboard) return;
                if (card.className != "card toggleCard flipped") {
                    card.classList.toggle("toggleCard");
                    regarderCarte(e);
                }

            })


        })
    };
    let defilerTempsBool = false;
    //correspondance des cartes
    const regarderCarte = (e) => {

        const carteClick = e.target;
        carteClick.classList.add("flipped");
        if (!defilerTempsBool) {
            defilerTemps();
            defilerTempsBool = true;

        }
        const carteFlip = document.querySelectorAll(".flipped");
        //PROBLEME on peut appuyer 2x sur la meme carte
        if (carteFlip.length === 2 && playerLives === 1 && carteFlip[0].getAttribute("name") !== carteFlip[1].getAttribute("name")) {
            carteFlip.forEach((card) => {
                card.classList.remove("flipped");
                setTimeout(() => card.classList.remove("toggleCard"), 1000);
            });
            playerLives = 0;
            maxMovesCount.textContent = playerLives;
            clearTimeout(timeOut);
            carteFlip.forEach((card) => {
                card.classList.remove("toggleCard");
            })
            if (playerLives === 0) {
                Swal.fire({
                    background: 'rgba(15, 15, 15, 0.7) ',
                    title: `<span style="color:white"><strong>Game Over :'(</strong></span>`,
                    imageUrl: `${sad}`,
                    width: 800,
                    padding: '3em',
                    showDenyButton: true,
                    confirmButtonText:
                        '<a style="font-family:\'Games\', sans-serif;">Ranking</a>\n',
                    denyButtonText:
                        '<a style="font-family:\'Games\', sans-serif;">Restart</a>\n',

                }).then((result) => {
                    if (result.isConfirmed) {
                        Navigate('/ranking')
                    } else if (result.isDenied) {
                        Navigate('/level')
                    }
                })
            }
        }
        if (carteFlip.length === 2) {

            if (carteFlip[0].getAttribute("name") === carteFlip[1].getAttribute("name")) {
                console.log("match");
                carteFlip.forEach((card) => {
                    card.classList.remove("flipped");
                    card.style.pointerEvents = "none";
                })
                nbePoints += 1;
                cmptCartes -= 1;
            } else {
                lockboard = true;
                console.log("wrong");
                carteFlip.forEach((card) => {
                    card.classList.remove("flipped");
                    setTimeout(() => {
                        card.classList.remove("toggleCard");
                        card.classList

                        lockboard = false;

                    }, 1000);
                });
                if (playerLives > 0) {
                    playerLives--;
                    maxMovesCount.textContent = playerLives;
                }
                nbeErreu += 1;
            }

            if ((cmptCartes == 0 || playerLives == 0) && getAuthenticatedUser()) {
                ajouterData(nbePoints, nbeErreu);
            }

        }/*else{
            carteFlip.forEach((card) => {
                card.classList.remove("flipped");
                setTimeout(() => {
                    
                    card.classList.remove("flipped");

                }, 1000);
            })
    }*/
        if (cmptCartes === 8) {

        }
        if (cmptCartes === 0) {
            clearTimeout(timeOut);

            Swal.fire({
                title: `<span style="color:white"><strong>congratulations, you succeeded in ${heures} : ${minutes} : ${secondes}</strong></span>`,
                imageUrl: `${cdm}`,
                width: 800,
                padding: '3em',
                color: '#716add',
                background: `rgba(15, 15, 15, 0.7)`,
                showDenyButton: true,
                confirmButtonText:
                    '<a style="font-family:\'Games\', sans-serif;">Ranking</a>\n',
                denyButtonText:
                    '<a style="font-family:\'Games\', sans-serif;">Restart</a>\n',
            }).then((result) => {
                if (result.isConfirmed) {
                    Navigate('/ranking')
                } else if (result.isDenied) {
                    Navigate('/level')
                }
            })
        }

    };
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

        timer.textContent = `${heures} : ${minutes} : ${secondes}`;
        timeOut = setTimeout(defilerTemps, 1000);
    };
    cardGenerator();

}

async function ajouterData(point, erreur) {
    console.log("requete")
    const pointData = {
        nbePoint: point,
        nbeErreu: erreur,
    }
    await addData(pointData)
}
export default GameSoloPage;