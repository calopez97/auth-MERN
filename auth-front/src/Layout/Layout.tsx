import { Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

interface LayoutProps{
    children:React.ReactNode,
}

const Layout = ({children}:LayoutProps) => {

  return (
    <>
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/signup'}>Signup</Link>
                    </li>
                </ul>
            </nav>
        </header>

        <main>
            {children}
            <ToastContainer />
        </main>
    </>
  )
}

export default Layout