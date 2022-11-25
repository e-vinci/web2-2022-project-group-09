import UserIcon1 from '../../img/userI1.jpg';
import UserIcon2 from '../../img/userI2.png';
import { isAuthenticated, setAnonymeUser, setAuthenticatedUser } from '../../utils/auths';
import Navbar from '../Navbar/Navbar';
import Navigate from '../Router/Navigate';

let homePage="";

if(isAuthenticated()){
  console.log("if")
  homePage='<p> Vous etes deja connecter <a href="/logout" > cliquer ici </a> pour vous deconnecter </p>'

}else{
  console.log("else")
homePage=`
<form class="connexion">  
       <img src="${UserIcon1}">     
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
         
             <div>
         
               Remember me    <input type="checkbox" checked="checked">  </div> 
    
      </div>   
  </form> 
   
             <form class="connexion2">  
       <img src="${UserIcon2}">     
      <div class="container">  
        
    <div>
          <input type="text" placeholder="Enter Username" name="username" id="usernameAnonym" required/>  
 </div>  
           <div>
           <input type="submit" id="anonymLogin"  value="Play Without An Account (No classement Provided)"/>
             </div>  
             <div>

      </div>   
  </form> 

` 
}


const HomePage = () => {
  Navbar();
  console.log(isAuthenticated())
  const main = document.querySelector('main');  
  main.innerHTML = homePage

  document.addEventListener('submit',async (e)=>{
    e.preventDefault();
    const type=e.submitter.id
    const username=document.querySelector('#username').value;
    const password=document.querySelector('#password').value;
    const usernameAnonyme=document.querySelector('#usernameAnonym').value;
  
   if(type==="login"){
    
    const OPTIONS={
      method:'POST',
      body:JSON.stringify({
        username,
        password
      }),
      headers:{
        'Content-Type':'application/json' ,
      }

    };
   const response=await fetch('/api/auth/login',OPTIONS);
   if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

   const authenticatedUser = await response.json();
   setAuthenticatedUser(authenticatedUser)
  }
  
  if(type==="register"){

   const OPTIONS={
    method:'POST',
    body:JSON.stringify({
      username,
      password
    }),
    headers:{
      'Content-Type':'application/json' ,
    }

  };
 const response=await fetch('/api/auth/register',OPTIONS);
 if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

 const authenticatedUser = await response.json();
setAuthenticatedUser(authenticatedUser)

  }

  if(type==="anonymLogin"){
    console.log(usernameAnonyme)
   setAnonymeUser(usernameAnonyme); 
  }

  Navigate('/new');
});



};





export default HomePage;
