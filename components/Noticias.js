import Noticia from "./Noticia";

const Noticias = ({noticias}) => {

  return ( 
    <div className="row">
      {noticias.map((noticia, index) => (
        <Noticia
          key={index}
          noticia={noticia}/>
      ))}
    </div>
   );
}
 
export default Noticias;