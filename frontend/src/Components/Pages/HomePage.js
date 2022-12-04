import anime from 'animejs/lib/anime.es';
import UserIcon1 from '../../img/userI1.jpg';
import UserIcon2 from '../../img/userI2.png';
import cardGame from '../../img/gamecard.png';
import { isAuthenticated, setAnonymeUser, setAuthenticatedUser } from '../../utils/auths';

import Navbar from '../Navbar/Navbar';
import Navigate from '../Router/Navigate';

/* eslint-disable */
let homePage = "";

if (isAuthenticated()) {
  homePage = '<p> Vous etes deja connecter <a href="/logout" > cliquer ici </a> pour vous deconnecter </p>'

} else {
  homePage = `

   
      <div class="card-outer">

      <div class="card-container">
        <div class="card1">
          <div class="back">
          <form class="connexion">  
          <img src="${UserIcon1}" id="userIcon"> 
          <div class="container">  
          <div>
          <input type="text" placeholder="Enter Username" id="username" required/>  
 </div>  
           <div>
       
          <input type="password" placeholder="Enter Password" id="password"  required/>
      </div>  
           <div >
            <input type="submit"  id="login" value="Login"/>
             </div>  
             <div>
             <input type="submit" id="register"  value="Register"/>
       </div>  
         
             
         
    
      </div>   
  </form> 
          </div>
          <div class="front ">
        <img src=${cardGame} id="cardGame" >
           
           </div>
          </div>
        </div>
      </div>



      <div class="card-outer2">
      <div class="card2">
          <div class="back">
          <form class="connexion">  
          <img src="${UserIcon2}" id="userIcon"> 
          <form class="connexion2">  
    
              <div class="container">  
                
            <div>
                  <input type="text" placeholder="Enter Username" name="username" id="usernameAnonym" required/>  
         </div>  
                   <div>
                   <input type="submit" id="anonymLogin"  value="Play Without An Account (No classement Provided)"/>
                     </div>  
                     </div>
        
            
          </form class> 
          </div>
          <div class="front ">
        <img src=${cardGame} id="cardGame" >
           
           </div>

           </div>
           </div>


           <form class ="checkBox">
           <div class="terms">
           <!-- Your Content -->
           <!-- Your Content -->
         </div>
         I accept the <a href="https://www.termsandconditionsgenerator.com/live.php?token=W7ej6n7AD9xsGGwDXSD6uwai7u6pUTUM" target="_blank"> terms & conditions:  </a>

        <input type="checkbox" id="checkBox" value="" > 
           </form>

`
}


const HomePage = () => {
  const main = document.querySelector('main');
  main.innerHTML = homePage
  document.addEventListener('submit', async (e) => {
    e.preventDefault();
    const x = document.getElementById("checkBox");
    if (x.checked === false) {
      alert('Please accept the terms & conditions')
    } else {


      const type = e.submitter.id
      const username = document.querySelector('#username')?.value;
      const password = document.querySelector('#password')?.value;
      const usernameAnonyme = document.querySelector('#usernameAnonym')?.value;

      if (type === "login") {

        const OPTIONS = {
          method: 'POST',
          body: JSON.stringify({
            username,
            password
          }),
          headers: {
            'Content-Type': 'application/json',
          }

        };
        const response = await fetch('/api/auth/login', OPTIONS);
        if (!response.ok) alert('Mauvais identifiant')

        const authenticatedUser = await response.json();
        setAuthenticatedUser(authenticatedUser)
      }

      if (type === "register") {

        const OPTIONS = {
          method: 'POST',
          body: JSON.stringify({
            username,
            password
          }),
          headers: {
            'Content-Type': 'application/json',
          }

        };
        const response = await fetch('/api/auth/register', OPTIONS);
        if (!response.ok) alert('Ce compte existe deja ')

        const authenticatedUser = await response.json();
        setAuthenticatedUser(authenticatedUser)

      }

      if (type === "anonymLogin") {

        setAnonymeUser(usernameAnonyme);
      }
      x.checked = false;
      Navbar();
      Navigate('/new');
    }
  });

  let cardReturned = false;
  let cardReturned2 = false;


  const card = document.querySelector(".card1");
  card.addEventListener("click", () => {
    if (cardReturned2 === true) {
      cardReturned2 = false;
      document.querySelector(".card2").click();
      cardReturned2 = false;
    }
    if (cardReturned === true) return;
    anime({
      targets: card,
      scale: [{ value: 1 }, { value: 1.3 }, { value: 1, delay: 250 }],
      rotateY: { value: "+=180", delay: 200 },
      easing: "easeInOutSine",
      duration: 400,

    })

    cardReturned = true;

  });

  const card2 = document.querySelector(".card2");
  card2.addEventListener("click", () => {
    if (cardReturned === true) {
      cardReturned = false;
      document.querySelector(".card1").click();

      cardReturned = false;
    }
    if (cardReturned2 === true) return;
    anime({
      targets: card2,
      scale: [{ value: 1 }, { value: 1.3 }, { value: 1, delay: 250 }],
      rotateY: { value: "+=180", delay: 200 },
      easing: "easeInOutSine",
      duration: 400,

    })
    cardReturned2 = true;


  });

};





export default HomePage;