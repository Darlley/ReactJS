// components + props
function Somar(props){ 
    // ({ isto é uma desestruturação })
    // A e B viram variaveis com os valores de props.a e props.b
    return `Resultado de ${props.a} + ${props.b} = ${props.a+props.b}`
}

ReactDOM.render(
    <div>
        <h2>Props + Componentes</h2>
        <Somar a={1} b={2} />
    </div>,
    document.querySelector('[data-js="root"]')
)