

/**
 * Render the Navbar which is styled by using Bootstrap
 * Each item in the Navbar is tightly coupled with the Router configuration :
 * - the URI associated to a page shall be given in the attribute "data-uri" of the Navbar
 * - the router will show the Page associated to this URI when the user click on a nav-link
 */

 import { getAuthenticatedUser, getAnonymUser } from "../../utils/auths";

 const Navbar = () => {
const userAnonyme=getAnonymUser.usernam
  console.log(getAuthenticatedUser,userAnonyme)
  const navbarWrapper = document.querySelector('#navbarWrapper');
   let navbar='';

 // if(!getAnonymUser && !getAuthenticatedUser){
  
 navbar += `
   <h1>
   DISCOVER OR RE  <span style="color:#FFFF8F">DISCOVER THE </span> <span style="color:#C41E3A">CAPITAL OF EUROPE	</span>
  </h1>
   `;
/* }else{
  navbar += `
  <ul>
  <li >
    <a data-uri="/Ranking">Ranking</a>

  ${getAuthenticatedUser ? ' <li> <a data-uri="/Ranking">MyStats</a> </li>' : ''}
  ${getAnonymUser ? ' <li> <a data-uri="/Ranking">Login/Register</a> </li>' : ''}
    <li>
    <a data-uri="/Ranking">Contact</a>
   </li> 
   </li> 
  </ul>
  `;
 }
 */
 
 
 navbar += `
 <hr class="hr1">  
 <hr class="hr2">  
 <hr class="hr3"> 
 `;
  
   
   navbarWrapper.innerHTML = navbar;
 };
 
 export default Navbar;
 