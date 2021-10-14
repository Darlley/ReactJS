// componente como função (funcional)
const Menu = (props) => {
    /*
    React.createElement('nav', null,
        React.createElement('ul', null, 
            React.createElement('li', null, 'Lista em React #1'),
            React.createElement('li', null, 'Lista em React #2')
        )
    )
    */

    return (
        <nav>
            <ul>
                <li>Lista em JSX #1</li>
                <li>Lista em JSX #2</li>
            </ul>
        </nav>
    )
}

