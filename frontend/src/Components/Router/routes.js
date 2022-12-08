
import HomePage from '../Pages/HomePage';
import LevelPage from '../Pages/LevelPage';
import Logout from '../Pages/Logout';
import Contact from '../Pages/Contact'
import ContactView from '../Pages/ContactView'
import GameSoloPage from "../Pages/GameSoloPage";
import Game1v1Page from "../Pages/Game1v1Page";

const routes = {
  '/': HomePage,
  '/level': LevelPage,
  '/logout':Logout,
  '/contact':Contact,
  '/gameSolo':GameSoloPage,
  '/contactView':ContactView,
  '/game1v1Page':Game1v1Page
};

export default routes;
