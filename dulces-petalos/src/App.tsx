import React, { useState } from 'react'

import './App.css'
import { Modal } from './components/Modal';

const App:React.FC = () => {
  const [isModalActive, setIsModalActive] = useState(false);

  return (
    <>
    <main>
      {isModalActive && (
        <Modal 
        onClose={() => setIsModalActive(false)}
          title="Nombre flor"
         >
          <p>Ficha flor</p>
         </Modal>
      )}
      <h1>Dulces Pétalos</h1>
        <div>
        <ul className='cardsList'>
          <li className='card' onClick={() => setIsModalActive(true)}>
            <h2>Flor 1</h2>
          </li>
          <li className='card' onClick={() => setIsModalActive(true)}>
            <h2>Flor 2</h2>
          </li>
          <li className='card' onClick={() => setIsModalActive(true)}>
            <h2>Flor 3</h2>
          </li>
        </ul>
      </div>
    </main>
    </>
  )
}

export default App
