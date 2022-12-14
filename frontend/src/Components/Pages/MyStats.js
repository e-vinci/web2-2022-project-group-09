

let nbeGameJoue;
let moyennErreur;
let point;
let userName;

const mystats = `

  <div id="mystats">
    <p class = "userName"> ${userName}</p>


    <div class="game-played">

      <p class ="title"> Game played : </p>
      <p class = gamePlayed> Score : ${nbeGameJoue}</p>
      
    </div>

    
    <div class="game-error" >

        <p class ="title"> Average error per game : </p>
        <p class = "gameError"> Score : ${moyennErreur}</p>

    </div>

    <div class="total-point" >

        <p class ="title"> Winned point/Total Point : </p>
        <p class = "totalPoint"> Score : ${point}</p> 
        
    </div>

  </div>
  `;


  function text(){
    const main = document.querySelector('main');
    main.innerHTML = mystats;
  }


async function getMystats () {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  
  const response = await fetch("/api/point/getUserStats",options); 
  
    if (!response.ok) {
        throw new Error("fetch error : ");
    }
  
    const data = await response.json(); 
    console.log(data);

    userName = document.querySelector('.userName');
    userName.innerHTML= JSON.stringify(data[0].login);

    nbeGameJoue = document.querySelector('.gamePlayed');
    nbeGameJoue.innerHTML= JSON.stringify(data[0].nbeGameJoue);

    moyennErreur = document.querySelector('.gameError');
    moyennErreur.innerHTML= JSON.stringify(data[0].moyennErreur);

    point = document.querySelector('.totalPoint');
    point.innerHTML= JSON.stringify(data[0].point); 
}


const Mystats = () => {
  text();
  getMystats ()


}


export default Mystats;

