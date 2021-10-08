const element = document.querySelector('[data-js="app"]');

// com createElement

ReactDOM.render(
    React.createElement('p', {
        children: 'Texto inserido via ReactJS'
    }), element
)