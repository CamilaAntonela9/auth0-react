import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const Navbar = () => {
    const { isAuthenticated, user } = useAuth0();
    return (
    <nav className="navbar">
        <div className="logo">MiAplicacion</div>
        {isAuthenticated ? 
        (<>
        {user && ( <img 
        src={user.picture} 
        alt={user.name} 
        className="foto-navbar"
        /> )}

        <span className="usuario">Hola estas dentro, {user.name} :D</span>
        <LogoutButton />

        </>) : (<></>)}
        <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#login">Iniciar Sesión</a></li>
            <li><a href="#inicio">Aqui mismo :D</a></li>
        </ul>
    </nav>
    )
}

