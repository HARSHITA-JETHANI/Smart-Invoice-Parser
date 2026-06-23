import { Link } from "react-router-dom";

function Navbar() {

    return (
        <nav>

            <h2>Smart Invoice Parser</h2>

            <Link to="/">
                Dashboard
            </Link>

            {" | "}

            <Link to="/invoices">
                Invoice History
            </Link>

        </nav>
    );

}

export default Navbar;