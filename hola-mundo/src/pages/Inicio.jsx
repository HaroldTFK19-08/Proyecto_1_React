function Inicio(){
    return(
        //inicio
        <header>
            <div className='Titulos'>
                <div>
                    <h1><strong>The Digital Curator</strong></h1>
                </div>
                <div className='Navegacion'>
                    <nav>
                        <ul className='lista'>
                            <li>Inicio</li>
                            <li>Usuarios</li>
                            <li>Changos</li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className='Iconos'>
                <div>
                    <i className="bi bi-bookmark"></i>
                </div>
                <div>
                    <i class="bi bi-person-circle"></i>
                </div>
            </div>
        </header>
    );
}
export default Inicio