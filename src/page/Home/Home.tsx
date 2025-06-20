import './Home.css';


export default function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <h1>
          Olá, eu sou <span className="highlight">Gustavo Ribeiro</span>
        </h1>
        <h2 className='font-bold'><em>Engenheiro de Software</em></h2>
        <p>
          Apaixonado por tecnologia e desenvolvimento de software. Crio soluções
          que transformam ideias em projetos incríveis.
        </p>
        <div>
          <div className="containerContato">
            <a className="gmail" href="mailto:gustavo.rsilva08@gmail.com" target="_blank">
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a className="instagram" href="https://www.instagram.com/guh_rsilvaa/" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://wa.me/5511994048809?text=Sua%20mensagem%20aqui" className="whatsapp" target="_blank">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a className="linkedin" href="https://www.linkedin.com/in/gustavo-r13/" target="_blank">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a className="github" href="https://github.com/Guhfrontend" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};
