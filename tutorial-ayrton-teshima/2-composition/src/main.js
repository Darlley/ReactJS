const NomeContext = React.createContext("nome");

function MeuComponente1() {
  	const nome = "Composition";

	return (
		<div className="componente-1">
			<MeuComponente2>
				<MeuComponente4 description={nome} />
			</MeuComponente2>
		</div>
	)
}
function MeuComponente2({children}) {
	return (
		<div className="componente-2">
			<header>Header</header>
			{children}
			<footer>Footer</footer>
		</div>
	)
}
function MeuComponente3() {
	return (
		<div className="componente-3">
			<MeuComponente4 />
		</div>
	)
}

function MeuComponente4(props) {
  return (
	<div className="componente-4">
		<p>Componente 4 - {props.description}</p>
	</div>
  )
}

function MeuComponente() {
  return (
		<div id="componentes">
    	<MeuComponente1 />
		</div>
  )
}

ReactDOM.render(
  <MeuComponente />,
  document.querySelector('[data-js="app"]')
)
