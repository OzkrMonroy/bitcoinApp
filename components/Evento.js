const Evento = ({evento}) => {
  const {name, url, description} = evento

  let desc = description.text
  let title = name.text

  if(title.lenght > 50) {
    title = title.substr(0,50) + "..."
  }

  if(desc){
    desc = desc.substr(0, 150) + "..."
  }
  
  return ( 
    <a href={url} target="_blank" className="list-group-item active text-light mb-2">
      <h3 className="mb-3">{title}</h3>
      <p className="mb-1">{desc}</p>
    </a>
   );
}
 
export default Evento;