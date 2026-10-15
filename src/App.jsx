import Cabecalho from "./components/Cabecalho";
import CardCurso from "./components/CardCurso";

function App(){

  return(
<>
<Cabecalho/>

<CardCurso nome="Desenvlvimento de Sistemas" duracao="1200 horas" modalidade="Presencial" nivel="Técnico"/>
</>

  )
}

export default App;