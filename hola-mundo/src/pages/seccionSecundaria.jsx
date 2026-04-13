function SegundaSeccion() {
    return (
        <section className="segunda-seccion">
            <h1><strong>Seccion segundaria</strong></h1>
            {/* CARD 1 */}
            <div className="tarjetas">
                <div className="card-noticia">
                    <div className="img-card"></div>
                        <h3>
                        Cómo los nuevos procesadores están redefiniendo lo que creíamos posible en el procesamiento
                        </h3>
                        <p>
                        Cómo los nuevos procesadores están redefiniendo lo que creíamos posible en el procesamiento de datos...
                        </p>
                    </div>
                {/* CARD 2 */}
                <div className="card-noticia">
                    <div className="img-card2"></div>
                        <h3>
                        La inteligencia artificial acelera la innovación en múltiples industrias
                        </h3>
                        <p>
                        Nuevas herramientas impulsadas por IA están cambiando la forma en que las empresas operan...
                        </p>
                </div>
                {/* CARD 3 */}
                <div className="card-noticia">
                    <div className="img-card3"></div>
                    <h3>
                    Energías renovables y su impacto en el futuro global
                    </h3>
                    <p>
                    La transición hacia fuentes limpias está marcando un cambio clave en la economía mundial...
                    </p>
                </div>
                <div className="card-noticia">
                    <div className="img-card4"></div>
                    <h3>
                    Inteligencia artificial en futuras guerras
                    </h3>
                    <p>
                    El uso de la inteligencia artificial en la guerra está transformando profundamente ...
                    </p>
                </div>
            </div>
        </section>
    );
}

export default SegundaSeccion;