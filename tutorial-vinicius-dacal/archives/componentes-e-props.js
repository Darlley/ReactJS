// Props

const props = {
    a: 1,
    b: 2
}

// components + props
function Somar({ a, b }){ 
    // ({ isto é uma desestruturação })
    // A e B viram variaveis com os valores de props.a e props.b
    return `Resultado de ${props.a} + ${props.b} = ${props.a+props.b}`
}

ReactDOM.render(
    React.createElement('div', null,
        React.createElement('h2', null, 'Props + Componentes'),
        React.createElement(Somar, props)
    ),
    document.querySelector('[data-js="root"]')
)