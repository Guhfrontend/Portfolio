import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Header.css';

export default function Header() {
    // Array com os dados dos links de navegação
    const navLinks = [
        {
            className: 'link',
            to: '/',
            label: 'Inicio'
        },
        {
            className: 'link',
            to: '/about',
            label: 'Sobre'
        },
        {
            className: 'link',
            to: '/curriculum',
            label: 'Curriculo'
        },
        {
            className: 'link',
            to: '/project',
            label: 'Projetos'
        }
    ];

    return (
        <div className='m-5'>
            <motion.header 
                className="header"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <motion.nav 
                    className="navbar"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                >
                    <ul className="lista-links">
                        {navLinks.map((link, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ 
                                    delay: 0.3 + (index * 0.1),
                                    duration: 0.4,
                                    ease: "easeOut",
                                }}
                            >
                                <motion.div
                                    whileHover={{ 
                                        scale: 1.1,
                                        y: -2,
                                        transition: { duration: 0.2 }
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link 
                                        className={link.className}
                                        to={link.to}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            </motion.div>
                        ))}
                    </ul>
                </motion.nav>
            </motion.header>
        </div>
    );
}