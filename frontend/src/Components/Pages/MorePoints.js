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

        <tr >  
          <td> user2 </td>
          <td> 5 </td>
        </tr> 

        <tr >  
          <td> user1 </td>
          <td> 4 </td>
        </tr> 

        <tr >  
          <td> qwerty </td>
          <td> 1</td>
        </tr>

        <tr >  
          <td> azerty </td>
          <td> 1 </td>
        </tr>  

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

      //loadTable(data);

    } catch (error) {
      console.error("getMorePoint::error: ", error);
    }
}



function loadTable(data){
  const tablePointBody = document.getElementById('.tableData');
  let dataHtml = '';

  for(let userPoints of data){
    dataHtml += `<tr> <td>${userPoints}</td> <td>${userPoints}</td> </tr>`;

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