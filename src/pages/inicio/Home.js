import React from 'react';
import './styles.css';


export function Home() {
  return (
    <div className="message-container">
      <div style={{ textAlign: 'center',fontSize: '24px' }}>
      <p>BIENVENIDO A NUESTRA PAGINA WEB</p></div>
      <p className="message-text"></p>
      <div className="app-container">
      <div style={{ position: 'relative', height: '500px' }}>
      <img className="message-image" src="/imagen/bandicam 2023-04-05 12-37-19-536.jpg" alt="Imagen 1" style={{ position: 'absolute', top: '100px', left: '50px', width: '300px' }} />
      <img className="message-image" src="/imagen/bandicam 2023-04-05 12-31-50-619.jpg" alt="Imagen 2" style={{ position: 'absolute', top: '100px', right: '50px', width: '300px' }} />
      <img className="message-image" src="/imagen/bandicam 2023-04-05 12-32-25-319.jpg" alt="Imagen 3" style={{ position: 'absolute', bottom: '0px', left: '35%', transform: 'translateX(-50%)', width: '500px' }} />
    </div>      
  </div>
</div>

  );
}

export default Home;
