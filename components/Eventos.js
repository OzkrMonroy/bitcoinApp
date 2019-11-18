import Evento from "./Evento";

const Eventos = ({eventos}) => {
  return ( 
    <div className="list-group">
      {eventos.map((evento, index) => (
        <Evento
          key={index}
          evento={evento}
        />
      ))}
    </div>
   );
}
 
export default Eventos;