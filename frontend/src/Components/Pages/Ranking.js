/* eslint-disable */
import Navigate from '../Router/Navigate';



let user1;
let user2;
let user3;

let point1;
let point2;
let point3;


let ranking =

`
<div class="ranking" style="font-family: 'Games', sans-serif;">
    <h3 class="rankingTitle"> Ranking</h3>
    <div class="podium">
        <p class="userName2">${user2}</p>
        <div class="podium_rank second" id = "second">${point2}</div>
    </div>

    <div class="podium">
        <p class="userName1">${user1}</p>
        <div class="podium_rank first" id = "first">${point1}</div>
        
    </div>

    <div class="podium">
        <p class="userName3">${user3}</p>
        <div class="podium_rank third" id="third">${point3}</div>
    </div>

</div>
    </div>


`


function getMorePoint() {
    const main = document.querySelector('main');
    const divMorePoint = document.createElement('div');
    divMorePoint.className = 'divMorePoint';
    main.appendChild(divMorePoint);
    const buttonMorePoints = document.createElement('button');
    buttonMorePoints.className = 'btn1';
    buttonMorePoints.innerHTML = 'Get more points';
    divMorePoint.appendChild(buttonMorePoints);
    buttonMorePoints.addEventListener('click', () => {
        Navigate('/morePoints');
      });

  }

  function text(){
    const main = document.querySelector('main');
    main.innerHTML = ranking;
  }


  async function getRanking () {

    const main = document.querySelector('main');
    main.innerHTML = ranking;

    try {
        const options = {
          method: "GET", 
          headers: {
            "Content-Type": "application/json",
          },
        };
  
        const top3 = await fetch("/api/point/getTop3", options); 
        
  
        if (!top3.ok) {
          throw new Error(
            "fetch error : " + top3.status + " : " + top3.statusText
          );
        }

        const data = await top3.json();
        console.log(data);

        user1 = document.querySelector('.userName1');
        user1.innerHTML= JSON.stringify(data[0].login);

        point1 = document.querySelector('#first');
        point1.innerHTML=  JSON.stringify(data[0].point);

        user2 = document.querySelector('.userName2');
        user2.innerHTML= JSON.stringify(data[1].login);

        point2 = document.querySelector('#second');
        point2.innerHTML=  JSON.stringify(data[1].point);

        user3 = document.querySelector('.userName3'); 
        user3.innerHTML= JSON.stringify(data[2].login);

        point3 = document.querySelector('#third');
        point3.innerHTML=  JSON.stringify(data[2].point);


      } catch (error) {
        console.error("getRanking::error: ", error);
      }

  }


const Ranking = () => {

    text();
    getRanking();
    getMorePoint();
}


export default Ranking;