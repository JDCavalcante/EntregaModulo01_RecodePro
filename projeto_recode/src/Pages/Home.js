import './Home.css'
import Card01 from './Imagens/Card01.jpg'
import Card02 from './Imagens/Card02.jpg'
import Card03 from './Imagens/Card03.jpg'
import Card04 from './Imagens/Card04.jpeg'
import Header from '../Componets/Header'
import Navbar from '../Componets/Navbar'
import Footer from '../Componets/Footer'

const Home = () => {

  return (
    <>
      <header>
        <Navbar />
        <Header />
      </header>
      <main>
        <div className="container">
          <div className=" row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}p-2 justify-content-around m-3">
            <div className="card m-3 text-center" style={{ border: '1px solid green', width: '25rem' }}>
              <img src={Card01} className="card-img-top mt-2" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Passeio de Carro</h5>
                <p style={{ textAlign: 'justify' }} className="card-text">Além de ser uma maneira divertida de conhecer
                  a Praia de Carro Quebrado, o
                  passeio de buggy é uma boa escolha para explorar melhor a região.</p>
                <a href='/Contato' className="btn btn-primary" style={{ backgroundColor: '#558b2f' }}>AGENDE AGORA</a>
              </div>
            </div>
            <div className="card m-3 text-center" style={{ border: '1px solid green', width: '25rem' }}>
              <img src={Card02} className="card-img-top mt-2" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Passeio de Barco</h5>
                <p className="card-text">O passeio de barco é mais uma boa maneira de conhecer o nosso destino, já
                  que a atividade revela cenários incríveis do litoral.</p>
                <a href='/Contato' className="btn btn-primary" style={{ backgroundColor: '#558b2f' }}>AGENDE AGORA</a>
              </div>
            </div>
          </div>
          <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}p-2 justify-content-around m-3">
            <div className="card m-3 text-center" style={{ border: '1px solid green', width: '25rem' }}>
              <img src={Card03} className="card-img-top mt-2" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Tirolesa</h5>
                <p className="card-text">Para os amantes de esportes radicais que tal uma tirolesa que possui 1.900
                  m de
                  extensão a uma altura de 130 metros do chão, chegando à velocidade média de 97 km/h.
                  of the card's content.</p>
                <a href='/Contato' className="btn btn-primary" style={{ backgroundColor: '#558b2f' }}>AGENDE AGORA</a>
              </div>
            </div>
            <div className="card m-3 text-center" style={{ border: '1px solid green', width: '25rem' }}>
              <img src={Card04} className="card-img-top mt-2" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Parapente</h5>
                <p className="card-text"> Você sabia que também pode dar uma voltinha com os parapentes? Voos
                  acompanhados de instrutores para você sentir aquele friozinho na barriga.</p>
                <a href='/Contato' className="btn btn-primary" style={{ backgroundColor: '#558b2f' }}>AGENDE AGORA</a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
export default Home;