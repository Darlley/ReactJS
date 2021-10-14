const Title = (props) => {
    // React.createElement('h1', null, "Iniciando no ReactJS")

    return (
        <div>
            <h1>Lista: {props.name} {props.lastName}</h1>
        </div>
    )
}