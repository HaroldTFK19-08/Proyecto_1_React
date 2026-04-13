function Footer() {
    return (
        <footer className="footer">
            <div className="footer-contenido">
                {/* IZQUIERDA */}
                <div className="footer-logo">
                <h3>The Digital Curator</h3>
                <p>© 2026 All rights reserved</p>
                </div>
                {/* CENTRO */}
                <div className="footer-links">
                <span>Privacidad</span>
                <span>Terminos</span>
                <span>Support</span>
                </div>
                {/* DERECHA (ICONOS) */}
                <div className="footer-icons">
                <i className="bi bi-facebook"></i>
                <i className="bi bi-twitter-x"></i>
                <i className="bi bi-instagram"></i>
                </div>
            </div>
        </footer>
    );
}
export default Footer;