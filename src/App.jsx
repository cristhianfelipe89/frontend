import React, { useEffect, useState } from 'react';
import TablaEventos from './components/TablaEventos';
import axios from 'axios';

function App() {
  const [eventos, setEventos] = useState([]);

  const fetchEventos = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/events`);
      //const res = await axios.get('http://localhost:5000/api/events'); //Local
      setEventos(res.data);
    } catch (error) {
      console.error('Error al cargar eventos:', error);
    }
  };

  useEffect(() => {
    fetchEventos();
    const interval = setInterval(fetchEventos, 3000); // actualizar cada 3s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-3xl p-8">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-8 text-center tracking-wide">
          Registro de Eventos Arduino
        </h1>
        <TablaEventos eventos={eventos} />
      </div>
    </div>
  );
}

export default App;