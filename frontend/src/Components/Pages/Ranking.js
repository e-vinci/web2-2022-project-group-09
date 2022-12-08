/* eslint-disable */
import Navigate from '../Router/Navigate';


const user1 = "Kevin";
const user2 = "Romelu";
const user3 = "Eden";

const timer1 = 2;
const timer2 = 6;
const timer3 = 10


let ranking =

`
<div class="ranking">

    <div class="podium">
        <p class="userName">${user2}</p>
        <div class="podium_rank second">${timer2}</div>
    </div>

    <div class="podium">
        <p class="userName">${user1}</p>
        <div class="podium_rank first">${timer1}</div>
        
    </div>

    <div class="podium">
        <p class="userName">${user3}</p>
        <div class="podium_rank trois">${timer3}</div>
    </div>
    
</div>

<div class = "morePoint"> 
    <button type = "button"> </button>
</div>


`
 
  
function getMorePoint() {
    const main = document.querySelector("button");
    
    main.innerText = 'Get more point';
    main.addEventListener('click', () => {
        Navigate('/level');
      });

  }

  function text(){
    const main = document.querySelector('main');
    main.innerHTML = ranking;
  }


const Ranking = () => {

    text();
    getMorePoint();
}


export default Ranking;