import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../Auth/AuthProvider'
//Tiene la única caracteristica de que sí el usuario
//está autenticado muestre el contenido de esa ruta
//Sí no, qué redirija al usuario a otra ruta
const ProtectedRoute = () => {
 
    const { isAuthenticated } = useAuth();
    

  return isAuthenticated ? <Outlet /> : <Navigate to='/' />
}

export default ProtectedRoute

//TODO terminar de ver el tuto de vidamrr
