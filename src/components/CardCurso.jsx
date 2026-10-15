function CardCurso(props){
    return(

        <>
        <div className="cards">
        <h2>Nome:{props.nome}</h2>
        <p>Duração:{props.duracao}</p>
        <p>Modalidade:{props.modalidade}</p>
        <p>Nível:{props.nivel}</p>
        </div>
        </>
    )
}

export default CardCurso;