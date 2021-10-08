const $elementUseState = document.querySelector('[data-js="state"]');

const state = { 
    chanelName: 'Nome do canal:' 
}

function App() {
    function handleClick(){
        state.chanelName == 'Nome do canal' ? setState({chanelName: 'Darlley Brito'}) : setState({chanelName: 'Nome do canal'});
        renderizar()
    }

    return (
        <div>
            <h2>useState component</h2>
            <button onClick={handleClick}>Exibir nome</button>
            <p>{state.chanelName}</p>
        </div>
    )
}

function setState(newState){
    Object.assign(state, newState)
}

function renderizar() {
    ReactDOM.render(
        <App />,
        $elementUseState
    )
}
renderizar()