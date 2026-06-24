import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav style={{padding: "30px", background: "#719675", color: "white", display: "flex", gap: "10px", alignItems: "center"}}>
            <h2 style={{ margin: 0, textAlign: "center", flexGrow: 1, fontSize: "45px"}}>Smart Invoice Parser</h2>

            <Link to="/" className="btn-link">
                Dashboard
            </Link>

            <Link to="/invoices" className="btn-link">
                Invoice History
            </Link>
        </nav>
    );
}

export default Navbar;