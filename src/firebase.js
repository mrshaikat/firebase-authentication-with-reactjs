
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCtoC8UYKc6KC36TEtFazBZttPc9nAxtsk",
  authDomain: "guestbook-9fdd9.firebaseapp.com",
  projectId: "guestbook-9fdd9",
  storageBucket: "guestbook-9fdd9.appspot.com",
  messagingSenderId: "972417053899",
  appId: "1:972417053899:web:213583d264688dce80d74e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app); 

const registerWithEmailAndPassword = async (email,password)=>{
    try{
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    return user;
    }catch(err){
       throw (err)
    }
}

const loginWithEmailAndPassword = async (email, password) =>{
    try{
        const response = await signInWithEmailAndPassword(auth, email, password);
        return response;
        }catch(err){
           throw (err)
        }
}


const sendPasswordReset = async (email) => {
  try{
    await sendPasswordResetEmail(auth, email)
  }catch(err){
    throw (err)
  }
}


export { auth, loginWithEmailAndPassword, registerWithEmailAndPassword, sendPasswordReset, signOut };

