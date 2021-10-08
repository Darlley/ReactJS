const $elementComponent = document.querySelector('[data-js="component"]');

// Componentes estáticos

const ComponentJSX = () => {
    return <p>Texto inserido via ReactJS (com JSX e Babel)</p>
}
const App = () => {
    return <h2>Primeiro componente</h2>
}

ReactDOM.render(
    <React.Fragment>
        <ComponentJSX />
        <App />
    </React.Fragment>,
    $elementComponent
)