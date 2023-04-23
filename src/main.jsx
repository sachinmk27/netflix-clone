import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import { firebase, db } from './lib/firebase.prod';
import FirebaseContext from './context/firebase';

import 'normalize.css';
import GlobalStyles from './global-styles';

createRoot(document.getElementById('root')).render(
  <FirebaseContext.Provider value={{ firebase, db }}>
    <GlobalStyles />
    <App />
  </FirebaseContext.Provider>
);
