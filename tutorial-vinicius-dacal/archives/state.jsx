// components + props + state

function MostrarSoma({a,b}){

    const [values, setValues] = React.useState({a,b})

    function somar(event){
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div className="form">
            <input name="a" value={values.a} type="text" onChange={somar} />
            <input name="b" value={values.b} type="text" onChange={somar} />
            <div>
                <p>Resultade de {values.a || 0} + {values.b || 0} = { Number(values.a || 0) +Number(values.b || 0)}</p>                
            </div>
        </div>
    );
}

ReactDOM.render(
    <div>
        <h2>Props + Componentes + State e renderização condicional</h2>
        <MostrarSoma a={1} b={2} />
    </div>,
    document.querySelector('[data-js="root"]')
)