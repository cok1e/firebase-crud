// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  // Put you credentials here
  apiKey: "AIzaSyB2BurO2tM90G0q3kMqq33fFYd2j70IpIk",
  authDomain: "fir-crud-aula-cda45.firebaseapp.com",
  projectId: "fir-crud-aula-cda45",
  storageBucket: "fir-crud-aula-cda45.appspot.com",
  messagingSenderId: "377544400039",
  appId: "1:377544400039:web:75a2dfd53f746d8fe40f82"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();

/**
 * Save a New Task in Firestore
 * @param {string} title the title of the Task
 * @param {string} description the description of the Task
 */
export const saveTask = (title, description) =>
  addDoc(collection(db, "tasks"), { title, description });

export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "tasks"), callback);
  

/**
 *
 * @param {string} id Task ID
 */
export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));

export const getTask = (id) => getDoc(doc(db, "tasks", id));

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, "tasks", id), newFields);

export const getTasks = () => getDocs(collection(db, "tasks"));
/** 
* @param {string} nome
* @param {string} descricao
* @param {string} valor
* @param {string} dataV
*/

export const saveProduto = (nome, quantidade, valor, dataV) =>
  addDoc(collection(db, "produto"), { nome, quantidade, valor, dataV });

export const onGetProduto = (callback) =>
  onSnapshot(collection(db, "produto"), callback);

  /**
 *
 * @param {string} ids Task ID
 */

export const deleteProduto = (id) => deleteDoc(doc(db, "produto", id));

export const getProduto = (id) => getDoc(doc(db, "produto", id));

export const updateProduto = (id, newFields) =>
  updateDoc(doc(db, "produto", id), newFields);

export const getProdutos = () => getDocs(collection(db, "produto"));