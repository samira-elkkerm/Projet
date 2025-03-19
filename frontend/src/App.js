<<<<<<< HEAD
import React from 'react';
import { Provider } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import store from './redux/store';
import Accueil from './composants/Client/Accueil';
import Boutique from './composants/Client/Boutique';
import Contact from './composants/Client/Contact';
import Panier from './composants/Client/Panier';
import Connecter from './composants/Client/Connecter'; 
import Inscrire from './composants/Client/Inscrire';   
import TableauBord from './composants/Admin/TableauBord';
import GestionCommandes from './composants/Admin/GestionCommandes';
import GestionUtilisateur from './composants/Admin/GestionUtilisateur';
import GestionProduits from './composants/Admin/GestionProduits';
import GestionPaiement from './composants/Admin/GestionPaiement';
import BarreCategories from './composants/Client/BarreCategories';


import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
=======
import React from "react";
import { Provider } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import store from "./redux/store";
import Accueil from "./composants/Client/Accueil";
import Boutique from "./composants/Client/Boutique";
import Contact from "./composants/Client/Contact";
import Panier from "./composants/Client/Panier";
import Connecter from "./composants/Connecter";
import Inscrire from "./composants/Inscrire";
import TableauBord from "./composants/Admin/TableauBord";
import GestionCommandes from "./composants/Admin/GestionCommandes";
import GestionUtilisateur from "./composants/Admin/GestionUtilisateur";
import GestionProduits from "./composants/Admin/GestionProduits";
import GestionPaiement from "./composants/Admin/GestionPaiement";
>>>>>>> f2826dddd57e0d654b7aa3a236d8b409c8fb5293

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
  <Provider store={store}>
    <>
    
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Boutique" element={<Boutique />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Panier" element={<Panier />} />

        <Route path="/Connecter" element={<Connecter />} />
        <Route path="/Inscrire" element={<Inscrire />} />

        <Route path="/TableauBord" element={<TableauBord />} />
        <Route path="/GestionCommandes" element={<GestionCommandes />} />
        <Route path="/GestionUtilisateur" element={<GestionUtilisateur />} />
        <Route path="/GestionProduits" element={<GestionProduits />} />
        <Route path="/GestionPaiement" element={<GestionPaiement />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  </Provider>
);

export default App;
