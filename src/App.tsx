import React, { useEffect } from "react";
import Background from "./components/Background";
import Footer from "./sections/Footer";
import NavBar from "./sections/NavBar";
import About from "./pages/About";
import Compare from "./pages/Compare";
import "./scss/index.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MyList from "./pages/MyList";
import Pokemon from "./pages/Pokemon";
import Search from "./pages/Search";
import { ToastContainer, ToastOptions, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { clearToasts, setUserStatus } from "./app/slices/AppSlice";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "./utils/FirebaseConfig";

function App() {
  const { toasts } = useAppSelector(({ app }) => app);
  const dispatch = useAppDispatch();

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) {
        dispatch(setUserStatus({ email: currentUser.email }));
      }
    });
  }, [dispatch]);

  useEffect(() => {
    if (toast.length) {
      const toastOptions: ToastOptions = {
        position: "bottom-right",
        autoClose: 2000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      };
      toasts.forEach((message: string) => {
        toast(message, toastOptions);
        dispatch(clearToasts());
      });
    }
  }, [toasts, dispatch]);

  return (
    <div className="main-container">
      <Background />
      <BrowserRouter basename="/Pokedex/">
        <div className="app">
          <NavBar />
          <Routes>
            <Route element={<Search />} path="/search" />
            <Route element={<MyList />} path="/list" />
            <Route element={<About />} path="/about" />
            <Route element={<Compare />} path="/compare" />
            <Route element={<Pokemon />} path="/pokemon/:id" />
            <Route element={<Navigate to="/pokemon/1" />} path="*" />
          </Routes>
          <Footer />
          <ToastContainer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
