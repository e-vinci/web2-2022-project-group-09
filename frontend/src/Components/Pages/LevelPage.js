/* eslint-disable */

import Navigate from '../Router/Navigate';
import {clearPage} from '../../utils/render';
import Navbar from '../Navbar/Navbar';

let mode;

const LevelPage = () => {

    Navbar();
    clearPage();

    const onEasy = () => {
        mode = "easy";
        Navigate("/gameSolo");
        console.log(mode)
    };

    const onMedium = () => {
        mode = "medium";
        Navigate("/gameSolo");
    };

    const onHard = () => {
        mode = "hard";
        Navigate("/gameSolo");
    };
    const main = document.querySelector('main');

    const soloGameTitle = document.createElement("h1");
    soloGameTitle.innerHTML = 'Solo Game'

    const title1v1 = document.createElement("h1");
    title1v1.innerHTML = '1 vs 1'

    const divBoxes = document.createElement('div');
    divBoxes.className = 'boxes';

    const divColumn1 = document.createElement('div');
    divColumn1.className = 'column1';

    const divColumn2 = document.createElement('div');
    divColumn2.className = 'column2';

    const btnEasy = document.createElement('button');
    btnEasy.innerHTML = "Easy";
    btnEasy.className = 'levelEasy';
    btnEasy.addEventListener('click', onEasy);

    const btnMedium = document.createElement('button');
    btnMedium.innerHTML = "Medium";
    btnMedium.className = 'levelMedium';
    btnMedium.addEventListener('click', onMedium);

    const btnHard = document.createElement('button');
    btnHard.innerHTML = "Hard";
    btnHard.className = 'levelHard';
    btnHard.addEventListener('click', onHard);

    const btnEasy1 = document.createElement('button');
    btnEasy.innerHTML = "Easy";
    btnEasy.className = 'levelEasy';
    btnEasy.addEventListener('click', onEasy);

    const btnMedium1 = document.createElement('button');
    btnMedium.innerHTML = "Medium";
    btnMedium.className = 'levelMedium';
    btnMedium.addEventListener('click', onMedium);

    const btnHard1 = document.createElement('button');
    btnHard.innerHTML = "Hard";
    btnHard.className = 'levelHard';
    btnHard.addEventListener('click', onHard);

    main.appendChild(divBoxes);
    divBoxes.appendChild(divColumn1);
    divColumn1.appendChild(soloGameTitle);
    divColumn1.appendChild(btnEasy);
    divColumn1.appendChild(btnMedium);
    divColumn1.appendChild(btnHard);

    divBoxes.appendChild(divColumn2);
    divColumn2.appendChild(title1v1);
    divColumn2.appendChild(btnEasy1);
    divColumn2.appendChild(btnMedium1);
    divColumn2.appendChild(btnHard1);


};
export {mode, LevelPage as default};