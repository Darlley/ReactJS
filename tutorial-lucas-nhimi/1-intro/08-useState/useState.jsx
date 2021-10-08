const $elementState = document.querySelector('[data-js="use-state"]');

function App() {

    const [value, setValue] = React.useState('Nome do canal')

    function handleClick(){
        value == 'Nome do canal' ? setValue('Darlley Brito') : setValue('Nome do canal');
    }

    return (
        <div>
            <h2>Hook useState component</h2>
            <button onClick={handleClick}>Exibir</button>
            <p>{value}</p>
        </div>
    )
}

ReactDOM.render(
    <App />,
    $elementState
)