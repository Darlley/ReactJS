const NomeContext = React.createContext("nome");

function MeuComponente1(props) {
  	const nome = "Composition";

	return (
		<div className="componente-1">
			<MeuComponente2>
				<MeuComponente3 description={nome} onClickIncrementar={props.onClickIncrementar} />
			</MeuComponente2>
		</div>
	)
}

function MeuComponente2(props) {
	return (
		<div className="componente-2">
			<header>Header</header>
			{props.children}
			<footer>Footer</footer>
		</div>
	)
}

function MeuComponente3(props) {
	return (
		<div className="componente-3">
			<MeuComponente4 onClickIncrementar={props.onClickIncrementar} />
		</div>
	)
}

function MeuComponente4(props) {

	const [idade, setIdade] = React.useState(28);
	setTimeout(function(){
		setIdade(29)
	}, 1000)

	return(
		<div className="componente-4">
			<p>Componente 4 - {props.description} {idade}</p>
			<button type="button" onClick={props.onClickIncrementar}>Incrementar</button>
		</div>
  	)
}

function MeuComponente(props) {
  	return (
		<div id="componentes">
    		<MeuComponente1 onClickIncrementar={props.onClickIncrementar} />
		</div>
  	)
}
function MeuComponenteIrmao(props){
	return (
		<div id="componente-irmao">
			<MeuComponenteIrmao2 contador={props.contador} />
		</div>
	)
}
function MeuComponenteIrmao2(props){
	React.useEffect(function(){
		localStorage.setItem('Contador', props.contador)
	})
	return (
		<h2>Contador: {props.contador}</h2>
	)
}

function AppComponente(){
	const [contador, incrementaContador] = React.useState(parseInt(localStorage.getItem('contador'), 10) || 0)
	const somar = () =>{
		incrementaContador(contador + 1)
	}
	return (
		<React.Fragment>
			<MeuComponente onClickIncrementar={somar} />
			<MeuComponenteIrmao contador={contador} />
		</React.Fragment>
	)
}

ReactDOM.render(
  <AppComponente />,
  document.querySelector('[data-js="app"]')
)
