'use strict'

/* o uso do 'use strict' é opcional
 * export function render() {
 *     console.log('renderizar')
 * }
 * export nomeado: precisa de um nome
 */

function render (escopo) {
  console.log(`Aula 6.0.1 - - - Renderizado por: ${escopo}`)
}

export { render } // export nomeado só é possível importar com o mesmo nome exportado mas é possivel renomear { render as novoNome }

// shorthand noation
export default {
  render
}
