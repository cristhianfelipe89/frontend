const TablaEventos = ({ eventos }) => (
  <div className="overflow-x-auto">
    <table className="w-full text-sm border-collapse rounded-lg overflow-hidden">
      <thead>
        <tr className="bg-blue-600 text-white">
          <th className="px-6 py-4 text-center font-semibold uppercase tracking-wider">Botón</th>
          <th className="px-6 py-4 text-center font-semibold uppercase tracking-wider">Hora</th>
        </tr>
      </thead>
      <tbody>
        {eventos.length === 0 ? (
          <tr>
            <td colSpan="2" className="text-center px-6 py-6 text-gray-500 bg-gray-50">No hay eventos aún</td>
          </tr>
        ) : (
          eventos.map((evento, idx) => (
            <tr
              key={idx}
              className={
                idx % 2 === 0 ? 'bg-white hover:bg-blue-50 transition-all' : 'bg-gray-100 hover:bg-blue-50 transition-all'
              }
            >
              <td className="px-6 py-4 text-center text-gray-800 font-medium">{evento.boton}</td>
              <td className="px-6 py-4 text-center text-gray-600">{new Date(evento.hora).toLocaleString()}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  </div>
);

export default TablaEventos;
