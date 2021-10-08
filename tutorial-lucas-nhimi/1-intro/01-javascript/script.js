const $rootElement = document.querySelector('[data-js="root"]');

const $element = document.createElement("p");
$element.textContent = "Texto inserido via JavaScript";
$rootElement.appendChild($element);