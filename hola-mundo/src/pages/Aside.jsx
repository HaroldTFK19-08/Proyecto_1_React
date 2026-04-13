function Navigation() {
    return (
    <aside className="nav-aside">
        <h5 className="nav-title">NAVIGATION</h5>
        <p className="nav-subtitle">Premium Content</p>
        <div className="nav-item active">
            <i className="bi bi-lightning-fill"></i>
            <span>Latest</span>
        </div>
        <div className="nav-item">
            <i className="bi bi-graph-up"></i>
            <span>Trending</span>
        </div>
        <div className="nav-item">
            <i className="bi bi-star-fill"></i>
            <span>Editor's Pick</span>
        </div>
        <div className="nav-item">
            <i className="bi bi-journal-text"></i>
            <span>Special Reports</span>
        </div>
        <div className="nav-item">
            <i className="bi bi-clock"></i>
            <span>Archives</span>
        </div>
    </aside>
);
}

export default Navigation;