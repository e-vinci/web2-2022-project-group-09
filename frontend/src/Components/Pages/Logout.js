import { clearAuthenticatedUser } from '../../utils/auths';
import Navigate from '../Router/Navigate';

const Logout = () => {
  console.log("logout")
  clearAuthenticatedUser();
  Navigate('/');
};

export default Logout;