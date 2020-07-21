import tokenService from './tokenService';

const BASE_URL = 'api/users';

function signup(user) {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(user)
  })
  .then(res => {
    if (res.ok) return res.json();
    // Probably a duplicate email
    throw new Error('Email already taken!');
  })
  // Parameter destructuring!
  .then(({token}) => tokenService.setTokenInLocalStorage(token));
  // The above could have been written as
  //.then((token) => token.token);
}

function getUser() {
  return tokenService.getUserFromToken();
}

// function getAllUsersAPI() {
//   return fetch(BASE_URL, {
//       headers: {
//           'Authorization': `Bearer ${tokenService.getTokenFromLocalStorage()}`
//       }
//   })
//   .then(allUsers => allUsers.json());
// }

function isAdmin() {
  return getUser() ? getUser().isAdmin : false;
}

// async function isAdmin() {
//   // const user = this.getAllUsersAPI();
//   const user = getUser();
//   console.log(user,'user console log');
//   // await getAllUsersAPI(user).isAdmin;
//   await getUser(user).isAdmin;
// }

function logout() {
  tokenService.removeTokenFromStorage();
}

function login(creds) {
  return fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(creds)
  })
  .then(res => {
    // Valid login if we have a status of 2xx (res.ok)
    if (res.ok) return res.json();
    throw new Error('Bad Credentials!');
  })
  .then(({token}) => tokenService.setTokenInLocalStorage(token));
}

export default {
  signup, 
  getUser,
  // getAllUsersAPI,
  isAdmin,
  logout,
  login
};