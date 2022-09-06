import { useNavigate } from "react-router-dom";


const Navbar = () =>{

    const navigate = useNavigate()
    
    var nav = document.getElementById('nav');
    window.addEventListener("scroll", function (event) {
      if (window.pageYOffset > 50) {
  
        nav.style.height = "70px";
        nav.style.background = "#0d3040";
        nav.style.fontSize = "12pt";
  
  
      }
      else {
        nav.style.background = ""
        nav.style.height = "130px";
        nav.style.fontSize = "15pt";
      }
    });
    return (
        <>
        <nav id="nav" className="navbar navbar-expand-lg navbar-dark fixed-top" style={{borderBottom: '1px solid chartreuse'}}>
      <div className="container-fluid ">
        <a className="navbar-brand " href="">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="justify-content-end collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href='/'>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href='/Sobre'>Sobre</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href='/Destino'>Destino</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href='/Promocoes'>Promoções</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href= '/Contato'>Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
    )
}
export default Navbar