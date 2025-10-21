import "./App.css";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase.init";
import { useState } from "react";

const provider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

function App() {
  const [user, setUser] = useState(null);

  const handleSingIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGithub = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

 const handleSingOut = () => {
  signOut(auth)
    .then(() => {
      setUser(null);
    })
    .catch((error) => {
      console.log(error);
    });
};



  return (
    <>
      <h1>Google Sing-in Sing-out</h1>

      {user ? (
        <button className="btn" onClick={handleSingOut}> Sign Out</button>
       ) : (
        <>
          <button className="btn" onClick={handleSingIn}>
            Google Sign In
          </button>
          <br />
          <button className="btn" onClick={handleGithub}>
            Github Sign In
          </button>
        </>
      )}

      {user && (
        <div>
          <p>{user.displayName}</p>
          <p>{user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </>
  );
}

export default App;
