import { useState } from 'react';
import axios from 'axios';
import Button from './Button';
import { Bell, Menu, Search, Upload, User, Home, Wallet} from 'lucide-react';
import logo from './template/logochange.jpg';
import change from './change'  
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Change from './change'
function App() {
  const navigate = useNavigate();
  const goToChange= ()=> {
    navigate('/change');
  }
return (
  <Router> <div className="flex flex-col items-center pt-2 mb-5 mx-5 overflow-auto">
      {/* Barre de navigation */}
      <div className=" fixed flex justify-between items-center w-full">
        <div className="flex gap-4 items-center flex-shrink-0">
          <Button variant="ghost" size="icon">
            <Menu />
          </Button>
          <Button variant="ghost" size="icon">
            <Home />
          </Button>
          <a href="/">
            <img src={logo} alt="logo" className="h-10" />
          </a>
        </div>
        <div className="flex items-center">
          <Button size="icon" variant="ghost">
            <Wallet />
          </Button>
          <Button size="icon" variant="ghost">
            <User />
          </Button>
        </div>
      </div>

      <div className="flex justify-center w-full my-10">
        <h1 className="text-4xl font-bold">ExRate</h1>
      </div>

      <div className="w-full mt-10 px-5">

        <div className="mr-80 text-left p-4 bg-gray-100 rounded-md shadow-md mx-5 mb-10">
          <h2 className="text-xl">QUI SOMMES NOUS ?</h2>
          <h3>
            Nous sommes ExRate, une entreprise dynamique et innovante spécialisée dans l'échange de devises. Fondée avec l'idée de rendre le marché des taux de change plus accessible, transparent et sécurisé, notre mission est d'offrir des solutions financières efficaces aux particuliers, entreprises et institutions du monde entier.
          </h3>
        </div>

        <div className="ml-80 text-left p-4 bg-gray-200 rounded-md shadow-md mx-5 mb-10">
          <h1 className="text-xl">NOTRE MISSION ?</h1>
          <ul>
            <li>Transparence : Nous croyons en la transparence totale des taux et frais. Vous savez exactement ce que vous payez et pourquoi.</li>
            <li>Innovation : Nous utilisons les dernières technologies pour offrir des services de taux de change à la fois rapides et sécurisés.</li>
            <li>Accessibilité : Nous nous engageons à rendre les transactions financières internationales simples et accessibles à tous, peu importe la taille de votre entreprise.</li>
            <li>Fiabilité : Vous pouvez compter sur nous pour des transactions sans faille, que ce soit pour des paiements quotidiens ou des échanges à grande échelle.</li>
          </ul>
        </div>

        <div className="mr-80 text-left p-4 bg-gray-200 rounded-md shadow-md mx-5 mb-10">
          <h1 className="text-xl">POURQUOI NOUS ?</h1>
          <h2>
            Avec une expertise approfondie dans le domaine des devises et un réseau de partenaires financiers internationaux, nous offrons un service rapide et sécurisé pour tous vos besoins en matière de taux de change. Que vous soyez une entreprise ayant des transactions à l'international ou un particulier souhaitant effectuer un transfert de fonds, nous avons la solution qui vous convient.
          </h2>
          <ul>
            <li className="text-xl">Notre Equipe</li>
            <h3>
              Notre équipe est composée de professionnels de la finance, de la technologie et de l'innovation, tous dédiés à rendre vos transactions aussi simples et avantageuses que possible. Nous sommes là pour répondre à toutes vos questions et vous accompagner dans vos démarches financières.
            <li className="text-xl">Engagement envers nos clients</li>
            <h4>Chez ExRate, nous mettons un point d'honneur à offrir une expérience client de qualité, en offrant des conseils personnalisés et en vous guidant tout au long de vos échanges financiers. Votre satisfaction est notre priorité.</h4>
            </h3>
          </ul>
        </div>
      </div>
    </div>
    <Routes>
    <Route path="/change" element={<Change/>}/> 
    </Routes>
    </Router>
   
  );
}

export default App;