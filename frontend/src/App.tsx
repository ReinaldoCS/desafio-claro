import { Routes, Route } from "react-router-dom";
import ReactModal from 'react-modal';

import Login from "./pages/Login";
import Register from "./pages/Register";
import { Modal } from "./components/Modal";

import GlobalStyle from './global.css';
import { useState } from "react";

ReactModal.setAppElement('#root');

export function App() {
  const [showModal, setShowModal] = useState(false);


  return (
    <>
      <GlobalStyle />
      {/* <Routes>
        <Route path='/' element={ <Login /> } />
        <Route path='/cadastro' element={ <Register /> } />
      </Routes> */}

      <button type="button" onClick={() => setShowModal(!showModal)}>Abrir modal</button>

      <Modal 
        isOpen={showModal}
        onRequestClose={() => setShowModal(!showModal)}
        title="Cadastrado finalizado!" 
        description="Parabéns, seu cadastro foi realizado com sucesso!!!"
      />
    </>
  );
}

