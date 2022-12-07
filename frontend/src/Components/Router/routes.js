
import HomePage from '../Pages/HomePage';
import LevelPage from '../Pages/LevelPage';
import Logout from '../Pages/Logout';
import Contact from '../Pages/Contact'
import ContactView from '../Pages/ContactView'
import GameSoloPage from "../Pages/GameSoloPage";

const routes = {
  '/': HomePage,
  '/level': LevelPage,
  '/logout':Logout,
  '/contact':Contact,
  '/gameSolo':GameSoloPage,
  '/contactView':ContactView
};

export default routes;
