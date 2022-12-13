/* eslint-disable */
import Navigate from '../Router/Navigate';


let morePoint =  
`

  <table class="tablePoints">

      <thead>
        <tr >  
          <th class="th"> Username </th>
          <th class="th"> number of point </th>
        </tr>
      </thead>
      
      <tbody class="tableData"> 

      </tbody>    
      
  </table>

`

async function getMorePoint () {

  try {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetch("/api/point/getMorePoints", options); 

      if (!response.ok) {
        throw new Error(
          "fetch error : " + response.status + " : " + response.statusText
        );
      }

      const data = await response.json(); 

      console.log(data);

      loadTable(data);

    } catch (error) {
      console.error("getMorePoint::error: ", error);
    }
}



function loadTable(data){
  let tablePointBody = document.querySelector('.tableData');
  let dataHtml = ' ';
  let size = data.length;

  for(let i = 0; i < size; i++){
    dataHtml += `<tr style="font-family: 'Games', sans-serif;">
 <td>${data[i].login}</td> <td>${data[i].point}</td> </tr>`;

  }

  console.log(dataHtml);
  tablePointBody.innerHTML = dataHtml;

}



function text(){
  const main = document.querySelector('main');
  main.innerHTML = morePoint;
}

const MorePoints = () => {

  text();
  getMorePoint();

}

export default MorePoints;