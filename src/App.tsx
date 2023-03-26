import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerForm from "./components/CustomerForm/CustomerForm";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./helpers/firebaseConfig";
import { authContext } from "./helpers/authContext";
import UserPage from "./components/UserPage/UserPage";
/// CONTEXT API
// useContext (hook) jest częścią całego narzędzie Context API
// oprócz useContext mamy do dyspozycji funkcje createContext i komponent ContextProvider

// SETUP CONTEXT API
// 1. Stwórzenie contextu poprzez wywołanie funkcji createContext w osobnym pliku.
// 2. Obwinięcie danej części aplikacji (lub całej aplikacji) providerem.
// 3. Przekazanie danych do provider'a
function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  return (
    <div className="App">
      <BrowserRouter>
        <authContext.Provider value={loggedIn}>
          {/* STATIC */}
          <Navbar />
          <Routes>
            {/* DYNAMIC */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/customer" element={<CustomerForm />} />
            <Route path="/user" element={<UserPage />} />
          </Routes>
          {/* STATIC */}
        </authContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;