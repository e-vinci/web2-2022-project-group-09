/* eslint-disable */
import Navigate from '../Router/Navigate';



let user1 = "Kevin";
let user2 = "Romelu";
let user3 = "Eden";

let point1;
let point2;
let point3;


let ranking =

`
<div class="ranking">

    <div class="podium">
        <p class="userName">${user2}</p>
        <div class="podium_rank second" id = "second">${point2}</div>
    </div>

    <div class="podium">
        <p class="userName">${user1}</p>
        <div class="podium_rank first" id = "first">${point1}</div>
        
    </div>

    <div class="podium">
        <p class="userName">${user3}</p>
        <div class="podium_rank trois id = "third">${point3}</div>
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
  
        const first = await fetch("/api/point/getFirst", options); 
        const seconde = await fetch("/api/point/getSeconde", options); 
        const third = await fetch("/api/point/getThird", options); 
  
        if (!first.ok) {
          throw new Error(
            "fetch error : " + first.status + " : " + first.statusText
          );
        }

        if (!seconde.ok) {
          throw new Error(
            "fetch error : " + seconde.status + " : " + seconde.statusText
          );
        }

        if (!third.ok) {
          throw new Error(
            "fetch error : " + third.status + " : " + third.statusText
          );
        }

        const data1 = await first.json(); 
        const data2 = await seconde.json(); 
        const data3 = await third.json(); 
        
        console.log(data1);
        console.log(data2);
        console.log(data3);

        point1 = document.querySelector('#first');
        point1.innerHTML= data1;

        point2 = document.querySelector('#second');
        point2.innerHTML= data2;

        point3 = document.querySelector('#third');
        point3.innerHTML= data3;
        
        
        //point1.innerHTML=  JSON.stringify(data1);
        //point2.innerHTML=  JSON.stringify(data2);
        //point3.innerHTML=  JSON.stringify(data3);

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