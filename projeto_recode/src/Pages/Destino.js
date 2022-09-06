import './destino.css'
import Navbar from "../Componets/Navbar"
import Footer from "../Componets/Footer"
import Carrossel from '../Componets/Carrossel'
import Itinerario from './Imagens/Itinerario.png'
import Avaliacoes from './Imagens/avaliacoes.jpg'

const Destino = () => {
    return (
        <>

            <Navbar />
            <Carrossel />
            <main>
                <div>
                    <nav>
                        <div className="nav nav-tabs str" id="nav-tab" role="tablist">
                            <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Destaques</button>
                            <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Itinerário</button>
                            <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Avaliações</button>
                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
                                <div className="col m-3 ">
                                    <h2>DESTAQUES</h2>
                                    <p>Os sete dias em Jericoacoara para férias lhe darão tempo para explorar diferentes atrações de destino, que incluem o passeio de barco, Lagoas, Dunas e o Spice Tour</p>
                                </div>
                                <div className="col m-3 pr-3" >
                                    <table class="table table-responsive" style={{ alignContent: "center", width: "60%", cellspacing: "10px", cellpadding: "10px" }} >
                                        <thead class="table">
                                            <tr>
                                                <th colSpan={2} style={{ background: "#558b2f" }} class=" table-sm text-white" >VISÃO GERAL DA VIAGEM</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th width="40%" scope="row"><i class="bi bi-signpost-2"></i></th>
                                                <td>
                                                    <h6>Perfil de viagem</h6>
                                                    <div>Viagem de 7 dias</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row"><i class="bi bi-arrows-move"></i></th>
                                                <td>
                                                    <h6>Modelo</h6>
                                                    <div>Apresentar</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row"><i class="bi bi-upc-scan"></i></th>
                                                <td>
                                                    <h6>Código de viagem</h6>
                                                    <div>23dC</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row"><i class="bi bi-calendar3"></i></th>
                                                <td>
                                                    <h6>Dias de Caminhada</h6>
                                                    <div>7 dias</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row"><i class="bi bi-truck-flatbed"></i></th>
                                                <td className=''>
                                                    <h6>Transport</h6>
                                                    <div>Land Cruiser, Jeep</div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <div className="row ">
                                <div className="col m-3 pr-3" >
                                    <img className='img-fluid' src={Itinerario} alt="..." />
                                </div>

                                <div className="col m-3 mt-5 ">
                                    <div class="accordion" id="accordionExample">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="headingOne">
                                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    INCLUÍDO
                                                </button>
                                            </h2>
                                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    <ul >
                                                        <li>Todas as excursões mostradas no pacote</li>
                                                        <li>Pick up e drop off do seu hotel</li>
                                                        <li>Guia de turismo profissional</li>
                                                        <li>Todos os impostos e serviços, taxas do parque incluídas</li>
                                                        <li>Acomodações em hotel com plano de refeições com pensão completa</li>
                                                        <li>Taxa de espera de transferência e transporte</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="headingTwo">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    NÃO INCLUSO
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    <ul style={{ listStyle: 'circle' }} >
                                                        <li>Seguro médico</li>
                                                        <li>Voos internacionais e locais</li>
                                                        <li>Visto</li>
                                                        <li>Despesas de natureza pessoal</li>
                                                        <li>Desinfetante de máscara, cravo e todas as comodidades necessárias para a prevenção do COVID19, conforme indicado pelo governo</li>
                                                    </ul>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
                                    <div className="col m-3" >
                                        <img src={Avaliacoes} alt="" />
                                    </div>

                                    <div className="col m-3 mt-5 ">
                                        <form className='border-1'>
                                            <legend>DEIXE UM COMENTÁRIO</legend>
                                            <div class="form-group">
                                                <label for="exampleFormControlInput1">Nome Completo</label>
                                                <input type="text" class="form-control" id="exampleFormControlInput1"/>
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleFormControlSelect1">Endereço de Email</label>
                                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="nome@exemplo.com"/>
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleFormControlTextarea1">Adicionar comentário</label>
                                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                            </div>
                                        </form>
                                    </div>
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

export default Destino