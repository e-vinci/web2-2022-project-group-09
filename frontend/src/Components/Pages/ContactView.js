import Navigate from '../Router/Navigate';
import { getAuthenticatedUser } from "../../utils/auths";



const contactPage = async () => {

    const main = document.querySelector('main');
    const mesage = await getMessage();
    const page = pageHtml(mesage);
    main.innerHTML = page;
    document.querySelector('#changePage').addEventListener('click', () => {
        Navigate('/contact');
    });

    document.querySelector('#delete').addEventListener('click', async (e) => {
        const { elementId } = e.target.dataset;

        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        await fetch(`/api/message/${elementId}`, options)
        contactPage();
    });
};

function pageHtml(mesage) {
    let contactpage = `
    <section class="contactpage">
            
    <div id="header">
    <button type="button" id="changePage"  >Add Message</button >
     <p> View Message</p>
    </div>`
    if (getAuthenticatedUser()) {
        Array.from(mesage.message).forEach(element => {
            contactpage += `
        <div id="message2"> 
        <div id="container2">
        <div id="type2"> ${element.type}</div> 
        <div id="content2" > ${element.content} </div>
        <button type="button" id="delete" data-element-id="${element.id_message}"> Delete </button>
        </div>
        </div>
           `;
        });


    } else {
        contactpage += 'Vous n etes pas connecter'
    }
    return contactpage;
}

async function getMessage() {
    const response = await fetch('/api/message')

    if (!response.ok) {
        throw new Error(`readAllMovies:: fetch error : ${response.status} : ${response.statusText}`);
    }

    const message = await response.json();
    return message;
}

export default contactPage;