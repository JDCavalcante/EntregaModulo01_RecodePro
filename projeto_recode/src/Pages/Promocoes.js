import Navbar from "../Componets/Navbar"
import Footer from "../Componets/Footer"
import Praia02 from './Imagens/praia2.jpg'
import Promo01 from './Imagens/promo01.png'
import Promo02 from './Imagens/promo02.png'
import Promo03 from './Imagens/promo03.png'
import Promo04 from './Imagens/promo04.png'
import Promo05 from './Imagens/promo05.png'
import Promo06 from './Imagens/promo06.png'
import Promo07 from './Imagens/promo07.png'
import Promo08 from './Imagens/promo08.png'
import Promo09 from './Imagens/promo09.png'
import Promo10 from './Imagens/promo10.png'

const Promocoes = () => {
    return (
        <>
            <header>
                <Navbar />
                <div>
                    <img classname="overflow-hidden" src={Praia02} alt="Foto da Praia" />

                    <div className="barra container-fluid overflow-hidden justify-content-center align-items-center text-center">
                        <div className="row container-fluid h-100 ">
                            <div className="col text-white  justify-content-center align-items-center text-center">
                                <h1>PROMOÇÕES</h1>
                                <p> VIAGE MUITO, POR MUITO POUCO! </p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <div>
                    <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} mt-5">
                        <h3>Tá pensando em passar as férias no nordeste? Aqui vão 5 motivos para que você escolha o Ceará como o seu destino principal:</h3>
                            <div className="card m-auto mb-2" style={{ width: '18rem',height: '30rem' }}>
                            <img src={Promo01} className="card-img-top" alt="..." style={{ width: '90%', height: '50%'}}/>
                            <div className="card-body">
                                <h5 className="card-title">Praia da Lagoinha - Paraipaba</h5>
                                <p className="card-text text-justify" style={{height: '' }}>Não esqueça de fazer o tradicional passeio pelo centrinho depois de curtir a praia.</p>
                                <a href='/Contato' className="btn btn-primary" style={{ backgroundColor: '#558b2f' }}>AGENDE AGORA</a>
                            </div>
                        </div>
                        <div className="card m-auto mb-2" style={{ width: '18rem',height: '30rem' }}>
                            <img src={Promo02} className="card-img-top" alt="..." style={{ width: '90%', height: '50%'}}/>
                            <div className="card-body">
                                <h5 className="card-title">Flecheiras – Trairi</h5>
                                <p className="card-text text-justify" style={{height: '10rem' }}>Perfeito para quem busca um dia de tranquilidade longe das movimentadas praias. </p>
                                <a href='/Contato' className="btn btn-primary" style={{ backgroundColor: '#558b2f' }}>AGENDE AGORA</a>
                            </div>
                        </div>
                        <div className="card m-auto mb-2" style={{ width: '18rem',height: '30rem' }}>
                            <img src={Promo03} className="card-img-top" alt="..." style={{ width: '90%', height: '50%'}} />
                            <div className="card-body">
                                <h5 className="card-title">Guajiru – Trairi</h5>
                                <p className="card-text text-justify" style={{height: '10rem' }}>Em Guajiru, espere encontrar um mar formado por piscinas naturais e de temperaturas amenas.</p>
                                <a href='/Contato' className="btn btn-primary" style={{ backgroundColor: '#558b2f' }}>AGENDE AGORA</a>
                            </div>
                        </div>
                        <div className="card m-auto mb-2" style={{ width: '18rem',height: '30rem' }}>
                            <img src={Promo04}className="card-img-top" alt="..." style={{ width: '90%', height: '50%'}}/>
                            <div className="card-body">
                                <h5 className="card-title">Praia das Fontes – Beberibe</h5>
                                <p className="card-text text-justify" style={{height: '10rem' }}>Um local ideal para a família curtir um dia relaxante e desfrutar de uma bela paisagem.</p>
                                <a href='/Contato' className="btn btn-primary" style={{ backgroundColor: '#558b2f' }}>AGENDE AGORA</a>
                            </div>
                        </div>
                        <div className="card m-auto mb-2" style={{ width: '18rem',height: '30rem' }}>
                            <img src={Promo05} className="card-img-top" alt="..." style={{ width: '90%', height: '50%'}}/>
                            <div className="card-body">
                                <h5 className="card-title">Barra do Cauipe – Beberibe</h5>
                                <p className="card-text text-justify" style={{height: '10rem' }}>Destino que atrai muitos aventureiros e praticantes de kite surfe.</p>
                                <a href='/Contato' className="btn btn-primary" style={{ backgroundColor: '#558b2f' }}>AGENDE AGORA</a>
                            </div>
                        </div>
                    </div>
                    <h3 className="mt-5">Achou pouco? Pois toma, aqui vão 5 motivos para que você escolha o Ceará como o seu destino principal:</h3>
                    <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
                        <div className="card m-auto mb-2" style={{ width: '18rem',height: '30rem' }}>
                            <img src={Promo06} className="card-img-top" alt="..." style={{ width: '90%', height: '50%'}} />
                            <div className="card-body">
                                <h5 className="card-title">Icaraí de Amontada – Amontada</h5>
                                <p className="card-text text-justify" style={{height: '' }}>Carinhosamente chamada por seus moradores de Icaraizinho, esta vila de pescadores possui piscinas naturais.</p>
                                <a href='/Contato' className="btn btn-primary" style={{ backgroundColor: '#558b2f' }}>AGENDE AGORA</a>
                            </div>
                        </div>
                        <div className="card m-auto mb-2" style={{ width: '18rem',height: '30rem'}}>
                            <img src={Promo07}className="card-img-top" alt="..."style={{ width: '90%', height: '50%'}} />
                            <div className="card-body">
                                <h5 className="card-title">Ponta Grossa – Canoa Quebrada</h5>
                                <p className="card-text text-justify" style={{height: '10rem' }}>Praia da Ponta Grossa, um paraíso verde e vermelho que combina a cor do mar com suas falésias, dunas e coqueiros. </p>
                                <a href='/Contato' className="btn btn-primary" style={{ backgroundColor: '#558b2f' }}>AGENDE AGORA</a>
                            </div>
                        </div>
                        <div className="card m-auto mb-2" style={{ width: '18rem' ,height: '30rem' }}>
                            <img src={Promo08} className="card-img-top" alt="..." style={{ width: '90%', height: '50%'}} />
                            <div className="card-body">
                                <h5 className="card-title">Canoa Quebrada – Aracati</h5>
                                <p className="card-text text-justify" style={{height: '10rem' }}>Explore a incrível vista desta praia de cima de suas escadarias, admirando as falésias em frente as dunas.</p>
                                <a href='/Contato' className="btn btn-primary" style={{ backgroundColor: '#558b2f' }}>AGENDE AGORA</a>
                            </div>
                        </div>
                        <div className="card m-auto mb-2" style={{ width: '18rem',height: '30rem' }}>
                            <img src={Promo09} className="card-img-top" alt="..."style={{ width: '90%', height: '50%'}}/>
                            <div className="card-body">
                                <h5 className="card-title">Praia do Futuro – Fortaleza</h5>
                                <p className="card-text text-justify" style={{height: '10rem' }}>A praia mais famosa de Fortaleza tem uma infraestrutura totalmente diferenciada, com barracas. </p>
                                <a href='/Contato' className="btn btn-primary" style={{ backgroundColor: '#558b2f' }}>AGENDE AGORA</a>
                            </div>
                        </div>
                        <div className="card m-auto mb-2" style={{ width: '18rem',height: '30rem' }}>
                            <img src={Promo10} className="card-img-top" alt="..." style={{ width: '90%', height: '50%'}} />
                            <div className="card-body">
                                <h5 className="card-title" >Tatajuba – Camocim</h5>
                                <p className="card-text text-justify" style={{height: '10rem' }}>Além de suas maravilhosas águas esverdeadas, Tatajuba ainda oferece aos seus visitantes um passeio de bugue.</p>
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
export default Promocoes