import React from 'react'
import ReactDOM from 'react-dom'
import Button from './components/Button';

const $root = document.querySelector('[data-js="root"]');

const App = () => {
    return (
        <div>
            <h2>Webpack</h2>
            <Button />
        </div>
    )
}

ReactDOM.render(<App />, $root)