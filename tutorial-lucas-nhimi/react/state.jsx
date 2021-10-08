const $elementState = document.querySelector('[data-js="state"]');

const state = { chanelName: 'Nome do canal:' }

function App() {
    function handleClick(){
        Object.assign(state, {chanelName: 'Darlley Brito'})
        renderApp()
    }

    return (
        <div>
            <h2>State component</h2>
            <button onClick={handleClick}>Exibir</button>
            <p>{state.chanelName}</p>
        </div>
    )
}

function renderApp(){
    ReactDOM.render(
        <App />,
        $elementState
    )
}
renderApp()
