import Swal from 'sweetalert2';
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
import Navigate from '../Router/Navigate';
import cdm from '../../img/cdm.jpg';
import ballonJ from '../../img/ballonJ.png';


const Game1v1Page = () => {
    clearPage()

    const difficulte = window.location.search.split('=')[1].split('%')[0]
    let timer = -1;
    if (difficulte === 'Easy') {
        timer = 4000;
    } else if (difficulte === 'Medium') {
        timer = 2000;
    } else {
        timer = 700;
    }

    let cmptCartes = 9;
    let pointJoueur1 = 0
    let pointJoueur2 = 0

    const divBackGame = document.createElement('div');
    divBackGame.className = 'divBackGame';

    const main = document.querySelector('main');

    const divColumn1 = document.createElement('div');
    divColumn1.className = 'player1';

    const divColumn2 = document.createElement('div');
    divColumn2.className = 'player2';

    const img = document.createElement('img');
    img.src = `${ballonJ}`
    img.setAttribute('id', 'imgBall0')

    const player1 = document.createElement("h1");
    player1.innerHTML = 'Player 1'

    const player1Cmpt = document.createElement("h6");
    player1Cmpt.innerHTML = `Point: ${pointJoueur1}`


    const player2 = document.createElement("h1");
    player2.innerHTML = 'Player 2'

    const player2Cmpt = document.createElement("h6");
    player2Cmpt.innerHTML = `Point: ${pointJoueur2}`

    let section = document.createElement('section');
    section.className = 'sectionCard'

    main.appendChild(divColumn1);
    main.appendChild(divColumn2);
    divColumn1.appendChild(player1);
    player1.appendChild(player1Cmpt)
    main.appendChild(img)
    divColumn2.appendChild(player2);
    player2.appendChild(player2Cmpt)
    main.appendChild(divBackGame);
    divBackGame.appendChild(section);

    let joueur = tirageAuSort(player1, player2);

    if (joueur === 'Player 1') {
        joueur = 'Player 2';
        setTimeout(() => img.setAttribute('id', 'imgBall2'), timer + 2000);
    } else {
        joueur = 'Player 1';
        setTimeout(() => img.setAttribute('id', 'imgBall1'), timer + 2000);
    }

    const generateData = () =>
        [
            { imgSrc: lukaku, name: "lukaku" },
            { imgSrc: courtois, name: "courtois" },
            { imgSrc: deBruyn, name: "deBruyn" },
            { imgSrc: meunier, name: "meunier" },
            { imgSrc: hazard, name: "hazard" },
            { imgSrc: mertenss, name: "mertenss" },
            { imgSrc: equipe, name: "equipe" },
            { imgSrc: batshuayi, name: "batshuayi" },
            { imgSrc: hazard2, name: "hazard2" },


            { imgSrc: lukaku, name: "lukaku" },
            { imgSrc: courtois, name: "courtois" },
            { imgSrc: deBruyn, name: "deBruyn" },
            { imgSrc: meunier, name: "meunier" },
            { imgSrc: hazard, name: "hazard" },
            { imgSrc: mertenss, name: "mertenss" },
            { imgSrc: equipe, name: "equipe" },
            { imgSrc: batshuayi, name: "batshuayi" },
            { imgSrc: hazard2, name: "hazard2" },

        ];
    const randomize = () => {
        const cardData = generateData();
        cardData.sort(() => Math.random() - 0.5);
        return cardData;
    };

    const regarderCarte = (e) => {
        const carteClick = e.target;
        carteClick.classList.add("flipped");
        const carteFlip = document.querySelectorAll(".flipped");
        if (carteFlip.length === 2) {
            if (carteFlip[0].getAttribute("name") === carteFlip[1].getAttribute("name")) {
                carteFlip.forEach((card) => {
                    const cart = card;
                    cart.classList.remove("flipped");
                    cart.style.pointerEvents = "none";
                })
                cmptCartes -= 1;
                if (joueur === 'Player 1') { pointJoueur1 += 1; mettreAJourCompteur(player1Cmpt, pointJoueur1) } else { pointJoueur2 += 1; mettreAJourCompteur(player2Cmpt, pointJoueur2) }

            } else {
                carteFlip.forEach((card) => {
                    card.classList.remove("flipped");
                    setTimeout(() => card.classList.remove("toggleCard"), 1000);
                });
                if (joueur === 'Player 1') {
                    joueur = 'Player 2';
                    setTimeout(() => img.setAttribute('id', 'imgBall2'), 1000);
                } else {
                    joueur = 'Player 1';
                    setTimeout(() => img.setAttribute('id', 'imgBall1'), 1000);
                }
            }
            if (carteFlip[0].getAttribute("name") === carteFlip[1].getAttribute("name") && cmptCartes === 0) {
                Swal.fire({
                    title: `<span style="color:black"><strong>Le gagnant est ${joueur}</strong></span>`,
                    imageUrl: `${cdm}`,
                    width: 800,
                    padding: '3em',
                    color: '#716add',
                    background: `#fff url("https://acegif.com/wp-content/uploads/gif/confetti-31.gif")`,
                    showCancelButton: true,
                    confirmButtonText: 'Replay',
                }).then((result) => {
                    if (result.isConfirmed) {
                        Navigate('/level')
                    }
                })
            }
        }

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
            setTimeout(() => card.classList.remove("toggleCard"), timer);
            setTimeout(() => card.addEventListener('click', e => {
                card.classList.toggle("toggleCard")
                regarderCarte(e)
            }), timer + 2000);
        })
    };

    cardGenerator()
};


function mettreAJourCompteur(playerCmpt, cmpt) {
    const player = playerCmpt;
    player.innerHTML = `Point: ${cmpt}`

}
function tirageAuSort(j1, j2) {
    const player = [j1.innerHTML, j2.innerHTML];
    return player[Math.floor(Math.random() * 2)];
}


export default Game1v1Page;