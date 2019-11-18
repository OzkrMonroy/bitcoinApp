const Noticia = ({noticia}) => {
  const {urlToImage, url, title, description, source} = noticia

  let image

  if(urlToImage !== '') {
    image = <img className="card-img-top" src={urlToImage} alt={title} />
  }else{
    image = <p className="text-center my-5">Imagen no disponible</p>
  }

  return ( 
    <div className="col-12 col-md-6 mb-4">
      <div className="card">
        <div className="card-image">
          {image}
        </div>
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{description}</p>
          <p className="card-text">{source.name}</p>
          <a href={url} className="btn btn-dark d-block" target="_blank">Leer Noticia</a>
        </div>
      </div>
    </div>
   );
}
 
export default Noticia;