
import HomePage from '../Pages/HomePage';
import NewPage from '../Pages/NewPage';
import Logout from '../Pages/Logout';
import Contact from '../Pages/Contact'
import ContactView from '../Pages/ContactView'

const routes = {
  '/': HomePage,
  '/new': NewPage,
  '/logout':Logout,
  '/contact':Contact,
  '/contactView':ContactView
};

export default routes;
