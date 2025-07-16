import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">MyApp</Link>
                <div className="navbar-nav">
                    <Link className="nav-link active" to="/">Home</Link>
                    <Link className="nav-link" to="/tasks">Tasks</Link>
                    <Link className="nav-link" to="/login">Login</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;