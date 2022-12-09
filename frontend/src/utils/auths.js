const storeToken = 'token';

let currentUser;
let anonymUser;

const getAuthenticatedUser = () => {

  const serializedUser = localStorage.getItem(storeToken);
  if (!serializedUser) return undefined;

  currentUser = JSON.parse(serializedUser);
  return currentUser;
};
const getAnonymUser = () => anonymUser;

const setAuthenticatedUser = (authenticatedUser) => {
  const serializedUser = JSON.stringify(authenticatedUser);
  localStorage.setItem(storeToken , serializedUser);
  currentUser = authenticatedUser.username;
};

const clearAuthenticatedUser = () => {
  localStorage.removeItem(storeToken);
  currentUser = undefined;
};

const setAnonymeUser = (authenticatedUser) => {
    anonymUser = authenticatedUser;
  };
  
const isUserAnonyme = () => anonymUser !== undefined;


const isAuthenticated = () => currentUser !== undefined;



// eslint-disable-next-line object-curly-newline
export { getAuthenticatedUser, setAuthenticatedUser, isAuthenticated, clearAuthenticatedUser,setAnonymeUser,isUserAnonyme,getAnonymUser };