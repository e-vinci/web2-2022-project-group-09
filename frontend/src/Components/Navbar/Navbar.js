
import { isAuthenticated } from "../../utils/auths";

const Navbar = () => {
  const navbarWrapper = document.querySelector('#navbarWrapper');
  let navbar = '';

  if (window.location.pathname === '/' && !isAuthenticated()) {
    navbar += `
  <h1>
  DISCOVER OR RE  <span style="color:#FFFF8F">DISCOVER THE </span> <span style="color:#C41E3A">CAPITAL OF EUROPE	</span>
 </h1>
  `;
  } else {
    navbar += `
 <ul>
 <li >
   <a data-uri="/ranking">Ranking</a>
   </li> 
 ${isAuthenticated() ? ' <li> <a data-uri="/mystats">MyStats</a> </li>   ' : '<li> <a   href="#"  data-uri="/" >Login/Register</a> </li>'}
 <li>
   <a  href="#" data-uri="/contact">Contact</a>
  </li> 
  ${isAuthenticated() ? '<li> <a href="#" data-uri="/logout" >Logout</a> </li>' : ''}
 </ul>
 `;
  }



  navbar += `
<hr class="hr1">  
<hr class="hr2">  
<hr class="hr3"> 
`;


  navbarWrapper.innerHTML = navbar;
};


export default Navbar;