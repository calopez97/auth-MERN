import { Link } from "react-router-dom";

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
        </main>
    </>
  )
}

export default Layout