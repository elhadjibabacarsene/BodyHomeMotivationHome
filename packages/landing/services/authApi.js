import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import jwtDecode from 'jwt-decode';
import Router from 'next/router';

function logout() {
  window.localStorage.removeItem('authtoken');
  delete Axios.defaults.headers['Authorization'];
  console.log('deconnected');
  Router.push('/');
}
function authenticate(credentiels) {
  return Axios.post('http://127.0.0.1:8000/api/login',credentiels)
    .then((response) => response.data.token)
    .then((token) => {
      //On stocke le token dans le local storage
      window.localStorage.setItem('authtoken', token);
      //On définie le header par défaut pour toutes les requêtes
      setAxiosToken(token);
      sessionStorage.setItem('authtoken', token);
      console.log('connected');
      window.postMessage(token, 'http://localhost:3001');
    });
}

/**
 * Permet de donner à Axios le token pour toutes requêtes
 * @param token
 */
function setAxiosToken(token) {
  Axios.defaults.headers['Authorization'] = 'Bearer ' + token;
}

/**
 * Voir si on a un token
 * Si le token est valide => axios
 */
function setup() {
  const [token, setToken] = useState('');
  React.useEffect(() => {
    setToken(window.localStorage.getItem('authtoken'));
  });

  if (token) {
    //On décode le token
    const { exp: expiration } = jwtDecode(token);
    //Si le token n'est pas expiré
    if (expiration * 1000 > new Date().getTime()) {
      setAxiosToken(token);
      console.log('connection en cours');
      return true;
    } else {
      logout();
      return false;
    }
  }
}

export default {
  authenticate,
  logout,
  setup,
};
