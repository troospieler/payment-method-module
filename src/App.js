import './App.scss';
import React, { useState } from 'react';
import { Modal } from './components/modal/Modal';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <button
        onClick={() => {
          console.log(showModal);
          setShowModal(true);
        }}
        id="button" 
        сlassName="button" 
        type="button"
      >
      Открыть модалку
      </button>
      {/* {showModal && <Modal setShowModal={setShowModal}/>} */}
      <Modal setShowModal={setShowModal}/>
    
    </div>
  );
}

export default App;
