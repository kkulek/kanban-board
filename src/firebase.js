import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    // apiKey: "AIzaSyA51j6f6mQLm3gUJpYQGNykrdFWE72KCBw",
    // authDomain: "kanban-app-77679.firebaseapp.com",
    // projectId: "kanban-app-77679",
    // storageBucket: "kanban-app-77679.appspot.com",
    // messagingSenderId: "177364646709",
    // appId: "1:177364646709:web:0e616f74b01a01efbdaa7c",


    apiKey: "AIzaSyA8Bol6XaF2z9Kg-kDm7ksdADvVtw1E0H4",
    authDomain: "kanban-2-ba042.firebaseapp.com",
    projectId: "kanban-2-ba042",
    storageBucket: "kanban-2-ba042.appspot.com",
    messagingSenderId: "1091604195991",
    appId: "1:1091604195991:web:95487c904e5bed7f8e57d2"

};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};