/* eslint-disable import/prefer-default-export */
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBVLvf548veMMzYzc2sd-HvQhVH56-f2H8',
  authDomain: 'netflix-clone-9691b.firebaseapp.com',
  projectId: 'netflix-clone-9691b',
  storageBucket: 'netflix-clone-9691b.appspot.com',
  messagingSenderId: '525133577525',
  appId: '1:525133577525:web:a99672ed2b08e2492c207c',
};
export const firebase = initializeApp(firebaseConfig);
export const db = getFirestore(firebase);
