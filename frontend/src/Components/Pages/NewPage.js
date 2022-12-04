import Navigate from '../Router/Navigate';
import { clearPage } from '../../utils/render';
import Navbar from '../Navbar/Navbar';

const NewPage = () => {
  Navbar();
  clearPage();

  const onEasy = () => {
    Navigate("/gameSolo");
  };

  const onMedium = () => {
    Navigate("/gameSolo");
  };

  const onHard = () => {
    Navigate("/gameSolo");
  };
  const main = document.querySelector('main');
  const submit = document.createElement('input');
  submit.value = 'Go back to HomePage';
  submit.className = 'home';
  submit.addEventListener('click', () => {
    Navigate('/');
  });
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

  main.appendChild(divBoxes);
  divBoxes.appendChild(divColumn1);
  divBoxes.appendChild(divColumn2);
  divColumn1.appendChild(soloGameTitle);
  divColumn1.appendChild(btnEasy);
  divColumn1.appendChild(btnMedium);
  divColumn1.appendChild(btnHard);
  divColumn2.appendChild(title1v1);
  divColumn2.appendChild(submit);



};
export default NewPage ;