import './contato.css'
import Navbar from "../Componets/Navbar";
import turismoDeAventura  from '../Pages/Imagens/turismo-de-aventura.jpg'
import Footer from "../Componets/Footer";

const Contato = () => {

  return (
    <div>
      <header>
        <Navbar/>
        <div>
        <img className="container-fluid" src={turismoDeAventura} alt />
        <section className="barra container-fluid">
          <div className="box row text-white w-100 justify-content-center align-items-center text-center">
            <div className="col-3 fs-3">
              <h1 className="f ">CONTATE - NOS</h1>
              <hr className="my-2 w-50" style={{ margin: 'auto', boxSizing: 'border-box', border: '1px solid chartreuse', backgroundColor: 'chartreuse' }} />
              <p className="lead">Entre em contato conosco!</p>
            </div>
          </div>
        </section>
        </div>
      </header>
      <main>
      <div className="bg-white container-fluid " style={{ display: 'flex', justifyContent: 'center', height: 600 }}>
        <div className="row" style={{ backgroundColor: '#e6e4d7', zIndex: 4, height: '100%', width: '60%', marginTop: '-50px' }}>
          <div className="row w-100">
            <div className="col text-center">
              <i className="bi-geo-alt-fill rounded-circle" style={{ backgroundColor: 'chartreuse' }} />
              <h3>DEV TUR</h3>
              <h4>FORTALEZA</h4>
              <h4>CEARÁ</h4>
              <h4>BRASIL</h4>
              <hr className=" w-50" style={{ margin: 'auto', boxSizing: 'border-box', border: '1px solid chartreuse', backgroundColor: 'chartreuse' }} />
            </div>
          </div>
          <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
            <form className="row g-3">
              <div className="col-12">
                <label htmlFor="inputName" className="form-label">Nome Completo</label>
                <input type="text" className="form-control" id="Nome" placeholder />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress2" className="form-label">Mensagem</label>
                <input type="text" className="form-control" id="Mensagem" placeholder />
              </div>
              <div className="col-md-12">
                <label htmlFor="inputEmail4" className="form-label">Email</label>
                <input type="email" className="form-control" id="Email" />
              </div>
              <div className="col-12">
                <button type="submit" style={{ backgroundColor: 'chartreuse' }} className="btn">ENVIAR</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </main>
      <Footer/>
    </div>

  )
}
export default Contato;