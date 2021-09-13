import homePageLoad from './home.js';
import menuPageLoad from './menu.js';
import contactPageLoad from './contact.js';

const pageLoad = (page) => {
    switch (page) {
        case "home":
            homePageLoad(); break;
        case "menu":
            menuPageLoad(); break;
        case "contact":
            contactPageLoad(); break;
        default:
            homePageLoad();
    }
    

};
export default pageLoad