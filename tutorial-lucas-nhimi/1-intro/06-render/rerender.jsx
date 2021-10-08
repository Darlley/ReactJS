const $elementRender = document.querySelector('[data-js="render"]');

/* não renderizam da forma correta:

function Tick() {
  return (
    <div>
      <h2>Renderização</h2>
      <p>It is {new Date().toLocaleTimeString()}.</p>
    </div>
  );
}  
ReactDOM.render(<Tick />, $elementRender);

renderiza o componente interio como o JavaScriot puro:

function tick() {
    const Element = () => {
      return (
      <div>
        <h2>Renderização</h2>
        <p>It is {new Date().toLocaleTimeString()}.</p>
      </div>
      );
    }
    ReactDOM.render(<Element />, $elementRender);
}  
setInterval(tick, 1000);

// com JavaScript

function Jstick() {
  const currentTime = new Date().toLocaleTimeString()

  const CurrentElement = `
    <div>
      <p>${currentTime}</p>
    </div>
  `
  $elementRender.innerHTML = CurrentElement
}
setInterval(Jstick, 1000)

renderiza corretamente somente o elemento dentro do componente : */

function tick() {
  const item = (
    <div>
      <p>{new Date().toLocaleTimeString()}</p>
    </div>
  )
  ReactDOM.render(item, $elementRender)
}
setInterval(tick, 1000)

// somente o elemento é renderizado novamente por causa da virtual dom
