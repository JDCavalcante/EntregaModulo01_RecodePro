import Sea from '../Pages/Imagens/Sea.mp4'

const Header = () => {

  return (
    <>
      <header>
        <div>
          <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
            <source src={Sea} type="video/mp4" />
          </video>

        </div>
        <section className="container justify-content-center align-items-center">
          <div className="box row text-white w-100 justify-content-center ">
            <div className="col-6 fs-3">
              <h1 >BEM VINDO A DEVTUR</h1>
              <p className="lead">Programe Sua Próxima Aventura!</p>
              <hr className="my-2" style={{ margin: 'auto', boxSizing: 'border-box', border: '1px solid chartreuse', backgroundColor: 'chartreuse' }} />
              <p className="lead">
                <a style={{ backgroundColor: '#558b2f' }} className="btn btn-lg text-white" href='/Contato' role="button">AGENDE
                  AGORA</a>
              </p>
            </div>
          </div>
        </section>
      </header>
    </>
  )
}
export default Header