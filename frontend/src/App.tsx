import { Routes, Route } from "react-router-dom";
import ReactModal from 'react-modal';

import Login from "./pages/Login";
import Register from "./pages/Register";

import GlobalStyle from './global.css';

ReactModal.setAppElement('#root');

export function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={ <Login /> } />
        <Route path='/cadastro' element={ <Register /> } />
      </Routes>
    </>
  );
}

