// import React
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

// import perso
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

// pages
import Accueil from './pages/Accueil'
import Profil from './pages/Profil';
import Reglages from './pages/Reglages';
import Communaute from './pages/Communaute';
import Error from './pages/Error';

// composants
import Header from "./components/Header";
// import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <Router>

        <Header/>

        <Routes>

            <Route path="/" element={<Accueil />} />

            <Route path="/profil/:id" element={<Profil />} />

            <Route path="/reglages" element={<Reglages />} />
            <Route path="/communaute" element={<Communaute />} />

            {/* page d'erreur */}
            <Route path="/*" element={<Error/>}/>

        </Routes>

    </Router>
)