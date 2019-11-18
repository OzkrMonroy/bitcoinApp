import MasterPage from "../components/Master";
import fetch from 'isomorphic-unfetch'
import Precio from "../components/Precio";
import Noticias from "../components/Noticias";
import Eventos from "../components/Eventos";

const Index = (props) => (
  <MasterPage>
    <div className="row">
      <div className="col-12">
        <h2>Precio del Bitcoin</h2>
        <Precio
          precioBitcoin={props.precioBitcoin}
        />
      </div>
      <div className="col-md-8">
        <h2 className="my-5">Noticias sobre Bitcoin</h2>
        <Noticias
          noticias={props.noticiasBitcoin}
        />
      </div>
      <div className="col-md-4">
        <h2 className="my-5">Próximas Eventos Bitcoin</h2>
        {/* <Eventos
          eventos={props.eventosBitcoin}
        /> */}
        <p className="alert alert-danger">No disponible por el momento</p>
      </div>
    </div>
  </MasterPage>
);

Index.getInitialProps = async () => {
  const precios = await fetch('https://api.coinmarketcap.com/v2/ticker/1/')
  const resPrecio = await precios.json()

  const fecha = new Date();
  const formatFecha = `${fecha.getFullYear()}-${(fecha.getMonth() +1)}-${fecha.getDate()}}`

  console.log(formatFecha)

  const noticiasBitcoin = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&from=${formatFecha}&sortBy=publishedAt&apiKey=1540c1b047e542379323a6e162210c0f&language=es`)
  const resNoticias = await noticiasBitcoin.json()

  // const eventosBitcoin = await fetch('https://www.eventbriteapi.com/v3/events/search/?q=guatemala&sort_by=date&location.address=Guatemala&token=FPXB6KGJGWZLDDKRTBES')
  // const resEventos = await eventosBitcoin.json()
  
  return {
    precioBitcoin: resPrecio.data.quotes.USD,
    noticiasBitcoin: resNoticias.articles
    // eventosBitcoin: resEventos.events
  }
}

export default Index;

// Para hacer peticiones a una api no podemos usar fetch api o axios ya que estos se ejecutan en el navegador y 
//dado que estamos haciendo uso de nextJS tenemos que usar otra alternativa. Para ello vamos a instalar lo 
// siguiente: npm install --save-dev isomorphic-unfetch