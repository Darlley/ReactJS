const $elementRender = document.querySelector('[data-js="render"]');

function tick() {
    const element = (
      <div>
        <h2>Renderização</h2>
        <p>It is {new Date().toLocaleTimeString()}.</p>
      </div>
    );
    ReactDOM.render(element, $elementRender);
}  
setInterval(tick, 1000);