import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA51j6f6mQLm3gUJpYQGNykrdFWE72KCBw",
    authDomain: "kanban-app-77679.firebaseapp.com",
    projectId: "kanban-app-77679",
    storageBucket: "kanban-app-77679.appspot.com",
    messagingSenderId: "177364646709",
    appId: "1:177364646709:web:0e616f74b01a01efbdaa7c",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};