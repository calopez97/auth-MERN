//Componente encargado de usar useContext para manejar
//estados en la aplicación.
import {
    useContext,
    createContext,
    useState,
    useEffect
} from 'react'



interface AuthProviderProps {
    children: React.ReactNode
}

//Inicializar 'Context' y declararle variables.
const AuthContext = createContext({
    isAuthenticated: false,
})


export function AuthProvider({ children }: AuthProviderProps) {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return(
        <AuthContext.Provider value={{ isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    ) 

}


export const useAuth = () => useContext(AuthContext);