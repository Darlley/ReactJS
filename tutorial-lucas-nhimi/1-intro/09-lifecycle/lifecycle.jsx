const $elementLifecycle = document.querySelector('[data-js="lifecycle"]');

function App() {
    console.log('Início render App')

    const [value, setValue] = React.useState(() => {
        console.log('useState')
        return 'Nome do canal'
    })

    function handleClick(){
        value == 'Nome do canal' ? setValue('Darlley Brito') : setValue('Nome do canal');
    }

    React.useEffect(() => {
        console.log('useEffect com dependecia')
    }, [value])

    const exit = (
        <div>
            <h2>Lifecycle - Ciclo de vida de uma aplicação React</h2>
            <button onClick={handleClick}>Exibir</button>
            <p>{value}</p>
        </div>
    );

    console.log('Final render App')
    return exit
}

ReactDOM.render(
    <App />,
    $elementLifecycle
)