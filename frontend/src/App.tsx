import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";

import GlobalStyle from './global.css';

export function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Login /> } />
        <Route path='/cadastro' element={ <Register /> } />
      </Routes>

      <GlobalStyle />
    </>
  );
}

