import '../home_index/home_index.css'
import { FaFileArchive, FaGlobe, FaGlobeAfrica, FaWrench } from 'react-icons/fa'

function Home_Index () {
    return (
        <>
            <main>
                <div className="home">

                    <h1>Empresa Nacional de Parques de Ciência e Tecnologia,  E.P.</h1>

                    <h3><span>A empresa</span> do futuro <spam>já está em</spam> Moçambique</h3>

                    <div className="btn">
                        <a href="#" className="btn-1">CONTACTO</a>
                        <a href="#" className="btn-2">REGISTE-SE</a>
                    </div>

                    <div className="card-contair">
                        <div className="card">
                            <div className="icon"><FaWrench /></div>
                            <h5>Serviços</h5>
                            <p>
                                Treinamento
                                Profissional<br />
                                Certificação
                                Profissional<br />
                                Incubara de
                                Empresas
                                Desenvolvimento e
                                Consultoria de TI<br />
                            </p>
                            <a href="#" className="btn-3">SOLICITAR</a>
                        </div>

                        <div className="card">
                            <div className="icon"><FaGlobeAfrica /></div>
                            <h5>Parques</h5>
                            <p>
                                Parque da Maluana<br />
                                Parque de Mocuba<br />
                                Parque de Muereti<br />
                                Parque de Dombe<br />
                            </p>
                            <a href="#" className="btn-3">VISITAR</a>

                        </div>

                        <div className="card">
                            <div className="icon"><FaFileArchive /></div>
                            <h5>Documentos</h5>
                            <div className="documentos">
                                <a className="docs" href="/src/components/documentos/Relatorio de contas.pdf">ENPCT-Contas.pdf</a>
                                <a className="docs" href="/src/components/documentos/Relatorio de contas.pdf">valor gasto.pdf</a>
                                <a className="docs" href="/src/components/documentos/Relatorio de contas.pdf">receita anual 2023.pdf</a>
                            </div>
                            <a href="#" className="btn-3">VER MAIS</a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home_Index;