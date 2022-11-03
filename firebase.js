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
  apiKey: "AIzaSyDUeyxS4L2A8MH-3LncHTz1_w29Rw8M56k",
    authDomain: "firecrud-aula.firebaseapp.com",
    projectId: "firecrud-aula",
    storageBucket: "firecrud-aula.appspot.com",
    messagingSenderId: "873141781141",
    appId: "1:873141781141:web:a7edfefc694a64f4df919c"
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