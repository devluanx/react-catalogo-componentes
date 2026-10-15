function Destaque(props){
    return(
        <>
        <div className="destaque">
            <h1>{props.titulo}</h1>
<p>Descrição:{props.descricao}</p>
        </div>
        </>
    )
}
export default Destaque;