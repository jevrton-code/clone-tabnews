// definição do nosso "objeto concreto"
function Home() {
  return (
    <div className="main-container">
      <div className="topbar-container">
        <div className="logo">jevrton</div>

        <div className="contact-container">
          <div className="contact">
            <a href="https://github.com/jevrton-code">github</a>
          </div>
          <div className="contact">
            <a href="https://www.linkedin.com/in/jevrton/">linkedin</a>
          </div>
        </div>
      </div>
      <div className="content-container">
        <div className="content">
          <div className="content-title">Opa! Página em Construção! 🔨</div>
          <div className="content-text">
            <p>
              Iai, bão? Essa página está em construção, mas não se preocupe!{" "}
              <br />
              Em breve, você encontrará aqui informações sobre mim, meu trabalho
              e projetos interessantes que estou desenvolvendo.
            </p>
            <p>
              Por enquanto, acesse meu perfil no GitHub e LinkedIn para conhecer
              melhor meu trabalho e minhas habilidades.
            </p>
          </div>
        </div>
      </div>
      <div className="footer-container">
        <div className="footer-text">
          Desenvolvido por jevrton através do curso{" "}
          <a className="footer-link" href="https://curso.dev/">
            curso.dev
          </a>
        </div>
        <div className="footer-text">Todos os direitos reservados</div>
        <div className="footer-text">© 2025 jevrton</div>
      </div>
    </div>
  );
}

// export da função padrão
export default Home;
