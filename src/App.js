import React, { useState } from "react";
import firebase from "./utils/Firebase";
import "firebase/auth";

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  firebase.auth().onAuthStateChanged((currentUser) => {
    !currentUser ? setUser(true) : setUser(currentUser);
    setIsLoading(false);
  });

  if (isLoading) {
    return null;
  }

  return !user ? <h1>Usuario no logeado</h1> : <UserLogged />;
}

function UserLogged() {
  const logout = () => {
    firebase.auth().signOut();
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <h1>Usuario logeado</h1>
      <button onClick={logout}>Cerrar Sesion</button>
    </div>
  );
}

export default App;
