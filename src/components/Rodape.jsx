
function Rodape() {
  return (
    <footer className="rodape">
      <div className="rodape-conteudo">
        <div className="rodape-marca">
          <h2>SENAI<span>.</span></h2>
          <p>
            Educação profissional para transformar
            conhecimento em oportunidades.
          </p>
        </div>

        <div className="rodape-links">
          <h3>Navegação</h3>
          <a href="#inicio">Início</a>
          <a href="#cursos">Nossos cursos</a>
        </div>

        <div className="rodape-info">
          <h3>Catálogo de Cursos</h3>
          <p>Formação técnica e profissional</p>
          <p>Tecnologia e inovação para o futuro.</p>
        </div>
      </div>

      <div className="rodape-final">
        <p>
          © {new Date().getFullYear()} Catálogo de Cursos SENAI.
          Todos os direitos reservados.
        </p>
        <span>Educação que transforma.</span>
      </div>
    </footer>
  );
}

export default Rodape;
