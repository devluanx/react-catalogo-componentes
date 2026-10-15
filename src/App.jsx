import Cabecalho from "./components/Cabecalho";
import CardCurso from "./components/CardCurso";
import Destaque from "./components/Destaque";
import "./App.css"

const cursos = [
  {
    nome: "Desenvolvimento de Sistemas",
    duracao: "1200 horas",
    modalidade: "Presencial",
    nivel: "Técnico",
    vagas: 0
  },
  {
    nome: "Redes de Computadores",
    duracao: "1250 horas",
    modalidade: "Presencial",
    nivel: "Técnico",
    vagas: 12
  },
  {
    nome: "Manutenção de Computadores",
    duracao: "1000 horas",
    modalidade: "Presencial/EAD",
    nivel: "Técnico",
    vagas: 8
  },
  {
    nome: "Programação Web",
    duracao: "1300 horas",
    modalidade: "Presencial/EAD",
    nivel: "Técnico",
    vagas: 15
  },
  {
    nome: "Banco de Dados",
    duracao: "900 horas",
    modalidade: "EAD",
    nivel: "Técnico",
    vagas: 20
  },
  {
    nome:"Desenvolvimento Mobile",
    duracao:"670 horas",
    modalidade: "EAD",
    nivel:"Técnico",
    vagas: 5
  }
];

function App(){

  return(
<>
<Cabecalho/>

<div className="listaCursos">
  {cursos.map((curso,index) =>(
    <CardCurso
    key={index}
    nome={curso.nome}
    duracao={curso.duracao}
    modalidade={curso.modalidade}
    nivel={curso.nivel}
    vagas={curso.vagas}/>
  ))}
</div>


<Destaque
titulo="Programação Web" descricao="Desenvolva WebSites"/>
<Destaque
titulo="Banco de Dados" descricao="Aprenda oque é Banco de Dados, SGBD´s entre outras diversas coisas"/>
<Destaque
titulo="Manutenção de Computadores" descricao="Aprenda a consertar o seu próprio computador"/>
</>

  )
}

export default App;