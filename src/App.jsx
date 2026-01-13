import { useAuth0 } from '@auth0/auth0-react';
import './App.css';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import LoginButton from './components/LoginButton';

function App() {
  const { isAuthenticated, isLoading, error } = useAuth0();

  //mostrar cargando si la autenticación está en proceso
  if (isLoading) {
    return <div className="cargando">
    Cargando...
    </div>
  }

  //retornar error si hay un problema de autenticación
  if (error) {
        console.log("Error: ",error)
    return <div className="error">
    Error de autenticación
    </div>
  }
   

 
//formato condicional: si está autenticado, mostrar perfil y botón de logout; si no, mostrar botón de login
return (
  <div className='contenedor'>
    <h1>Aplicacion autenticación</h1>
    {isAuthenticated ? <>
    <p>Sesión iniciada</p>
    <Profile />
    <LogoutButton />
    </> : <>
    <p>Inicia sesión para comenzar</p>
    <LoginButton />
    </>
    } 
  </div>
)
}
export default App
