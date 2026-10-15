import Cabecalho from "./components/Cabecalho";
import CardCurso from "./components/CardCurso";
import Destaque from "./components/Destaque";

function App(){

  return(
<>
<Cabecalho/>

<CardCurso nome= "Desenvlvimento de Sistemas" duracao="1200 horas" modalidade="Presencial" nivel="Técnico"/>
<CardCurso
nome="Redes de Computadores" duracao="1250 horas" modalidade="Presencial" nivel="Técnico"/>
<CardCurso
nome="Manutenção de Computadores" duracao="1000 horas" modalidade="Presencial/EAD" nivel="Técnico"/>
<CardCurso
nome="Programação Web" duracao="1300 horas" modalidade="Presencial/EAD" nivel="Técnico"/>
<CardCurso
nome="Banco de Dados" duracao="900 horas" modalidade="EAD" nivel="Técnico"/>

<Destaque
/>
</>

  )
}

export default App;