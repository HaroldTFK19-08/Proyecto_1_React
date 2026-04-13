function Navigation() {
    return (
    <aside className="nav-aside">
        <h5 className="nav-titulo">NAVIGATION</h5>
        <p className="nav-subtitulo">Premium Content</p>
        <div className="nav-item">
            <i className="bi bi-lightning-fill"></i>
            <span>Premiun</span>
        </div>
        <div className="nav-item">
            <i className="bi bi-graph-up"></i>
            <span></span>Trading
        </div>
        <div className="nav-item">
            <i className="bi bi-star-fill"></i>
            <span>Caficacion</span>
        </div>
        <div className="nav-item">
            <i className="bi bi-journal-text"></i>
            <span>Editar</span>
        </div>
        <div className="nav-item">
            <i className="bi bi-clock"></i>
            <span>Archivos</span>
        </div>
    </aside>
);
}

export default Navigation;