import { Link } from "react-router-dom";
import './header.css';

function Header(){
    return( // para mostrar na tela o que eu quero/ renderizar
        <div className="header">
            <Link className="link-header" to="/">ACME Tempo</Link>
            <Link className="link-home" to="/">Home</Link>
        </div>
    );
}

export default Header;