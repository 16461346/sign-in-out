import "./App.css";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "./firebase.init";
import { useState } from "react";

const provider = new GoogleAuthProvider();

function App() {
  const [user,setUser]= useState(null);

  const handleSingIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSingOut=()=>{
    signOut(auth)
    .then(()=>{
      setUser(null)
    })
    .then(error=>{
      console.log(error)
    })
  }

  return (
    <>
      <h1>Google Sing-in Sing-out</h1>
     
     
      {user? <button className="btn" onClick={handleSingOut}>Sing Out</button>: <button className="btn" onClick={handleSingIn}>Google Sing in</button> }
      {
        user && <div>
        <p>{user.displayName}</p>
        <p>{user.email}</p>
        <img src={user.imageURL} alt="" />
      </div>
      }
    </>
  );
}

export default App;
