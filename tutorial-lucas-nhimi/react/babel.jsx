const $elementBabel = document.querySelector('[data-js="babel"]');

// Com JSX


// Componentes
const ElementJSX = () => {
    return <p>Texto inserido via ReactJS (com JSX e Babel)</p>
} // componente estático
const App = ({ children, text }) => {
    return <h2>{text} {children}</h2>
} // componente dinamico e reutilizavel

ReactDOM.render(
    <React.Fragment>
        <ElementJSX />
        <App text="Primeiro">componente </App>
    </React.Fragment>,
    $elementBabel
)