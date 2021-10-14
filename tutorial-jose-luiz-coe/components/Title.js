const Title = (props) => {
    // React.createElement('h1', null, "Iniciando no ReactJS")

    return (
        <div>
            <h1>Oii {prompt("Qual o seu nome? O.o")} sz</h1>
            <h2>{props.lastName}</h2>
        </div>
    )
}