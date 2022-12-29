// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, listAll } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAd4D_mOljgaDvh3c3qR5RhKZCHd_tfRQ",
  authDomain: "reprostoragerules.firebaseapp.com",
  projectId: "reprostoragerules",
  storageBucket: "reprostoragerules.appspot.com",
  messagingSenderId: "1026449265021",
  appId: "1:1026449265021:web:44323f10aef03f0d19fc14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

console.log("online two")



const storage = getStorage();

// Create a reference under which you want to list
const listRef = ref(storage, 'test');

// Find all the prefixes and items.
listAll(listRef)
  .then((res) => {
    res.prefixes.forEach((folderRef) => {
    
      console.log("Folder Ref:");
      console.log(folderRef);
    });
    res.items.forEach((itemRef) => {
      console.log("itemRef");
      console.log(itemRef);
    });
  }).catch((error) => {
    // Uh-oh, an error occurred!
    console.log(error);
  });