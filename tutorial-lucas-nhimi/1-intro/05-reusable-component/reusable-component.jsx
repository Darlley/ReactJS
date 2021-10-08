const $elementReusableComponent = document.querySelector('[data-js="reusable-component"]');

// Componentes dinámicos e reuntilizaveis

const ReusableComponentJSX = ({ children }) => {
    return <p>{children}</p>
}
const ReusableComponentApp = (props) => {
    return <h2>{props.text1} {props.text2}</h2>
}

ReactDOM.render(
    <React.Fragment>
        <ReusableComponentJSX>
            Texto inserido via ReactJS (com JSX e Babel)
        </ReusableComponentJSX>
        <ReusableComponentApp text1="Primeiro" text2="componente"  />
    </React.Fragment>,
    $elementReusableComponent
)