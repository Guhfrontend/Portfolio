import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
    return (
        <div>
            <header className="header">
                <nav className="navbar">
                    <ul className="lista-links">
                        <Link className='link' to="/" >Inicio</Link>
                        <Link className='link' to="/about" >Sobre</Link>
                        <Link className='link' to="/curriculum" >Curriculo</Link>
                        <Link className='link' to="/project" >Projetos</Link>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
