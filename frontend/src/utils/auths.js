let currentUser;
let anonymUser;

const getAuthenticatedUser = () => currentUser;
const getAnonymUser = () => anonymUser;

const setAuthenticatedUser = (authenticatedUser) => {
  currentUser = authenticatedUser.username;
};
const setAnonymeUser = (authenticatedUser) => {
    anonymUser = authenticatedUser;
   
  };
  
  const isUserAnonyme = () => anonymUser !== undefined;


const isAuthenticated = () => currentUser !== undefined;

const clearAuthenticatedUser = () => {
  currentUser = undefined;
};

// eslint-disable-next-line object-curly-newline
export { getAuthenticatedUser, setAuthenticatedUser, isAuthenticated, clearAuthenticatedUser,setAnonymeUser,isUserAnonyme,getAnonymUser };