import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { getDatabase, set, ref } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCBqBZM7BEwhOxYeiVGF2O50d__kUiGqMY",
    authDomain: "app-e0f8e.firebaseapp.com",
    databaseURL: "https://app-e0f8e-default-rtdb.firebaseio.com",
    projectId: "app-e0f8e",
    storageBucket: "app-e0f8e.appspot.com",
    messagingSenderId: "639593789333",
    appId: "1:639593789333:web:69cb460967a54ca4fae89c",
    databaseURL: "https://app-e0f8e-default-rtdb.firebaseio.com"
};

const firebaseApp = initializeApp(firebaseConfig)
const firebaseAuth = getAuth(firebaseApp)
const database = getDatabase()

const FirebaseContext = createContext(null)

export const useFirebase = () => useContext(FirebaseContext);


export const FirebaseProvider = (props) => {
    const signUserWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(firebaseAuth, email, password)
    }

    const putData = (key, data) => set(ref(database, key), data) 

    return (
        <FirebaseContext.Provider value={signUserWithEmailAndPassword}>
            {props.children}
        </FirebaseContext.Provider>
    )
}