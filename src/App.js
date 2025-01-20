import React, { useState, useEffect } from 'react';
import './App.css';
import Topo from './componentes/TopoMenu/Topo';
import SobreNos from './componentes/sobreSessao1/sobreNos';
import { Servicos } from './componentes/servicosSessao2/servicos';
import Navbar from './componentes/barraMenu/barra';
 import Proficionais from './componentes/proficionaisSessao3/proficionais';
  import Local from './componentes/localizacao/local';
import Footer from './componentes/footer/footer';
import { data } from './componentes/data';
 

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulando uma espera de 2 segundos para carregar
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="loading-circle"></div>
      ) : (
        <>
        <div className='whatsapp'>
        <a href={data.whatsapp.linkWhatsap} target='_blank' rel='noopener noreferrer'>
        <img src={data.whatsapp.imgWhatsapp} alt='whatsapp' />
      </a>        </div>
        
          <Topo />
        
          <Navbar/>
          <SobreNos />
          <Servicos/>
           <Proficionais/>
            
           <Local/>
           <Footer/>
     
        </>
      )}
    </div>
  );
}

export default App;
