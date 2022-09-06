import './sobre.css'
import Navbar from "../Componets/Navbar"
import Footer from "../Componets/Footer"
import Praia02 from './Imagens/praia2.jpg'
import Pessoa01 from './Imagens/pessoa01.jpg'
import Pessoa02 from './Imagens/pessoa02.jpg'
import Pessoa03 from './Imagens/pessoa03.png'

const Sobre = () => {

    return (
        <>
            <header>
                <Navbar />
                <div>
                    <img classname="overflow-hidden" src={Praia02} alt="Foto da Praia" />

                    <div className="barra container-fluid overflow-hidden justify-content-center align-items-center text-center">
                        <div className="row container-fluid h-100 ">
                            <div className="col-1 text-white h-50 w-25">
                                <h1>SOBRE NÓS E NOSSO TIME</h1>
                                <p> DEV TUR </p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            
            <main>
                <div className="overflow-auto">
                    <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}" style={{ height: 700 }}>
                        <div className="card-group h-75 m-4 p-5">
                            <div className="card m-5 ">
                                <img src={Pessoa01} className="card-img-top rounded-circle" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Francisco da Cruz</h5>
                                    <h6 className="opacity-50 ">Diretor e Proprietário</h6>
                                    <p className="card-text">O Fundador e Diretor Administrativo da Ndaga Tours And Safaris. Tenho forte experiência e grande equipe de pessoas que garante a mais alta qualidade de serviços.</p>
                                </div>
                            </div>
                            <div className="card m-5">
                                <img src={Pessoa02} className="card-img-top rounded-circle " alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title mt-2">João da Forca</h5>
                                    <h6 className="opacity-50 ">Guia turístico</h6>
                                    <p className="card-text">Um guia turístico do Nordeste do Brasil com experiência de mais de 10 anos em condução e orientação de trilhas.</p>
                                </div>
                            </div>
                            <div className="card m-5">
                                <img src={Pessoa03} className="card-img-top rounded-circle" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title mt-2">José do Pé</h5>
                                    <h6 className="opacity-50 ">Técnico de Tecnologia da Informação (TI)</h6>
                                    <p className="card-text">Um Programador (Desenvolvedor Web) com experiência de 7 anos em desenvolvedor web e otimização de mecanismos de busca.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )

}
export default Sobre