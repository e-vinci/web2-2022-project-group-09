/* eslint-disable */

let points;
let userName;

let mystats = 

`
<div id="mystats">

   <p> ${userName}</p>


    <div class="game-played">

        <p class ="title"> Game played : </p>
        <p> Score : ${points}</p>
       
    </div>

    
    <div class="game-error" >
        <p class ="title"> Average error per game : </p>
        <p > Score : ${points}</p>
    </div>

    <div class="total-point" >
        <p class ="title"> Winned point/Total Point : </p>
        <p > Score : ${points}</p> 
        
    </div>
  
</div>

`
 

const Mystats = () => {
    const main = document.querySelector('main');
    main.innerHTML = mystats;

}



export default Mystats;

