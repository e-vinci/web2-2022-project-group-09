
import HomePage from '../Pages/HomePage';
import NewPage from '../Pages/NewPage';
import Logout from '../Pages/Logout';
import Contact from '../Pages/Contact'
import ContactView from '../Pages/ContactView'
import GameSoloPage from "../Pages/GameSoloPage";

const routes = {
  '/': HomePage,
  '/new': NewPage,
  '/logout':Logout,
  '/contact':Contact,
  '/gameSolo':GameSoloPage,
  '/contactView':ContactView
};

export default routes;
