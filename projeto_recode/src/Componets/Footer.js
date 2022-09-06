
const Footer = () => {

    return (

        <footer className="text-center text-lg-start text-muted">

            <section className="d-flex justify-content-center text-white justify-content-lg-between p-4" style={{ backgroundColor: '#0d3040', borderBottom: '1px solid chartreuse' }}>

                <div className="me-5 d-none d-lg-block">
                    <span>Conecte-se conosco nas redes sociais:</span>
                </div>

                <div>
                    <a href="https://www.facebook.com" className="btn-close-white me-4">
                        <i className="bi bi-facebook" />
                    </a>
                    <a href="https://twitter.com" className="btn-close-white me-4">
                        <i className="bi bi-twitter" />
                    </a>
                    <a href="https://www.google.com" className="btn-close-white me-4">
                        <i className="bi bi-google" />
                    </a>
                    <a href="https://www.instagram.com" className="btn-close-white me-4">
                        <i className="bi bi-instagram" />
                    </a>
                    <a href="https://br.linkedin.com" className="btn-close-white me-4">
                        <i className="bi bi-linkedin" />
                    </a>
                    <a href="https://github.com" className="btn-close-white me-4">
                        <i className="bi bi-github" />
                    </a>
                </div>

            </section>

            <section className="text-white" style={{ backgroundColor: '#0d3040' }}>
                <div className="container text-center text-md-start mt-0">

                    <div className="row pt-5">

                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem me-3" />DEV TUR
                            </h6>
                            <hr className="mt-2 mb-3 w-100" style={{ margin: 'auto', boxSizing: 'border-box', border: '1px solid chartreuse', backgroundColor: 'chartreuse' }} />
                            <p>
                                Venha conhecer nossos maravilhosos destinos e criar novas memórias cheias de aventura,
                                diversão e tudo o mais.
                            </p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                LINKS
                            </h6>
                            <hr className="mt-2 mb-3 w-100" style={{ margin: 'auto', boxSizing: 'border-box', border: '1px solid chartreuse', backgroundColor: 'chartreuse' }} />
                            <p>
                                <a href='/Contato' className="text-reset">Nossa Rotas</a>
                            </p>
                            <p>
                                <a href='/Contato' className="text-reset">Passeios</a>
                            </p>
                            <p>
                                <a href='/Contato' className="text-reset">Aventuras</a>
                            </p>
                            <p>
                                <a href='/Contato' className="text-reset">Pacotes</a>
                            </p>
                        </div>
                        
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                NEWS LETTER
                            </h6>
                            <hr className="mt-2 mb-3 w-100" style={{ margin: 'auto', boxSizing: 'border-box', border: '1px solid chartreuse', backgroundColor: 'chartreuse' }} />
                            <p>Assine nossa newsletter semanal para receber notícias e atualizações</p>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <span style={{ backgroundColor: 'chartreuse', fontWeight: 'bolder' }} className=" w-auto input-group-text text-bolder" id="basic-addon2">@</span>
                            </div>
                        </div>
                        
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Contato
                            </h6>
                            <hr className="mt-2 mb-3 w-100" style={{ margin: 'auto', boxSizing: 'border-box', border: '1px solid chartreuse', backgroundColor: 'chartreuse' }} />
                            <p><i className="bi bi-house me-3" /> Fortaleza - CE</p>
                            <p>
                                <i className="bi bi-envelope me-3" />
                                Dev-Tur@example.com
                            </p>
                            <p><i className="bi bi-phone me-3" /> +55 85994247315</p>
                            <p><i className="bi bi-phone me-3" /> +55 85994247315</p>
                        </div>
                        
                    </div>
                    
                </div>
            </section>
            
            <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2022 Copyright:
                <a className="text-reset fw-bold" href> João de Deus</a>
            </div>
            
        </footer>
   
    )
}
export default Footer