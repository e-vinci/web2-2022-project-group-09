import { getAnonymUser, getAuthenticatedUser, isAuthenticated, isUserAnonyme } from "../../utils/auths"
import Navigate from '../Router/Navigate';
import { clearPage } from '../../utils/render';




const contactPage = () => {
    clearPage();
    const page = pageHtml();
    const main = document.querySelector('main');
    if (isAuthenticated() || isUserAnonyme()) {
        main.innerHTML = page;
    } else {
        main.innerHTML = "Vous n'avez pas acces a cet page";
    }


    document.querySelector('#messageSubmit').addEventListener('click', async (e) => {
        const content = document.querySelector('#message').value;
        const type = document.querySelector('#type').value;
        let response;
        const OPTIONS = {
            method: 'POST',
            body: JSON.stringify({
                type,
                content
            }),
            headers: {
                'Content-Type': 'application/json',
            }

        };

        if (isAuthenticated()) {
            response = await fetch('/api/message/addMessageUser', OPTIONS);
        } else {
            response = await fetch('/api/message/addMessageVisitor', OPTIONS);
        }

        if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

        e.preventDefault();

    });
    document.querySelector('#changePage').addEventListener('click', () => {
        Navigate('/contactView');
    });
};

function pageHtml() {
    const user = isAuthenticated() ? getAuthenticatedUser() : getAnonymUser();
    const contactpage = `<section class="contactpage">

  <div id="header">
   <p> Add Message</p> 
     <button type="button" id="changePage"  >View Message</button >
  </div>
  <div class="form">
  <div class="container">  
          <form>
  <div>
  <label>From </label>
  </div>
  <div>
        <input type="text" placeholder="${user}" id="username" readonly required/>  
  </div>  
        
  <div>
     
  <label for="">Choose a type of message:</label>
  </div>
  <div>
  <select id="type" required >
  <option value=""   disabled select   >Please Choose</option>
    <option value="question">Question</option>
    <option value="suggestion">Suggestion</option>
  
  </select>
    </div>  
         
    <div>
     <div>
  <label for="message">Write your message:</label>
  </div>
    <div >
        <textarea name="message" id="message" required ></textarea>
           </div>  
           
           <div>
           <button type="submit" id="messageSubmit"  value="Submit">Submit </button>
     </div>  
       </div>
  </form>
  </div>
  </section>
  
  
  
  `
    return contactpage;
}

export default contactPage;