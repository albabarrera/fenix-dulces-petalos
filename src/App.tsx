import React, { useEffect, useState } from 'react'

import './App.css'
import { Modal } from './components/Modal';

interface Data {
  id: string;
  name: string;
  binomialName: string;
  price: number;
  imgUrl: string;
  wateringsPerWeek: number;
  fertilizerType: string;
  heightInCm: number;
}

const App:React.FC = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [data, setData] = useState<Data[]| null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dulces-petalos.herokuapp.com/api/product');
        
        if (response.ok) {
          const jsonData = await response.json();

          setData(jsonData);
        } else {
          console.error('Error al obtener los datos:', response.statusText);
        }
      } catch (error) {
        console.error('Error en la llamada a la API:', error);
      }
    };

    fetchData();
  }, []);


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
        {data ? (
        data.map((product: Data) => 
          <li key={product.id} className='card' onClick={() => setIsModalActive(true)}>
            <img src={product.imgUrl} />
            <h2>{product.name}</h2>
          </li>
        )
      ) : (
        <p>Cargando datos...</p>
      )}
        </ul>
      </div>
    </main>
    </>
  )
}

export default App
