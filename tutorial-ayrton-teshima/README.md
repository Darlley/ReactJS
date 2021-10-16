![thumbnail](https://i.ytimg.com/vi/Ws9WVHhNq5M/maxresdefault.jpg)

React é um biblioteca baseada em componentes (components-based), tudo são components (funções ou classes)!
Por conta de muitos componentes encadeados a tendência natural da propagação das informações entre os componentes é de cima para baixo, do componente pai ao componente filho (One-way data flow / One-way binding). E para burlar este fluxo para que possa ocorrer o envio de informações de baixo para cima muitas bibliotecas criaram gerenciadores de estados, o React tem o Redux (o Angular tem NgRx e o para o Vue.js existe o Redux), mas existem formas de se evitar isso tem recorrer a algum desses generenciadores de estado: Context API e a técnica de composition.

1. CONTEXT API (createContext)

É um componente que trabalha em duas etapas, com o .Provider (um componente que provê a informação) e o .Consumer (o componente que lê a informação).

2. COMPOSITION

O compoente criado da forma tradicional não tem filho e assim ocorre um encademento de componentes até chegar ao filho. A técnica de composition é especificar de dentro de um compoente que esta dentro do componente principal qual o seu filho. No próprio componente principal você consegue dizer qual o componente filho e qual o componente neto. Ao invés de componente vô -> chamar componente filho -> para chamar o componente neto, agora basta dizer do componente vô -> diz qual o componente pai + componente filho.

3. STATE E GERENCIAMENTE DE ESTADO

O state é o cérebro do componente, diferente das props que são somente propriedades que armazenam informações do componente. Ele comanda quando renderizar novas informações, a forma tradicional de se fazer isto eram com classes utilizando setState e a forma atual é através dos hooks (useState).
Tanto o valor do estado como sua mudança podem ser elevados (elevação de estado, isto é, repassados via argumentos como props de um componente a outro) e conforme a hierarquia de componentes vai ficando cada vez mais complexa é necessário o uso de gerenciadores de estados como Redux.

> React tem reatividade, componentes reativos, componentes que não precisam recarregar a tela para atualizar seus valores.

4. CICLO DE VIDA DE UM COMPONENTE (Lifecycle)

O ciclo de vida (o hook chamado useEffect) de um componente de classe é diferente de um funcional. O componente é criado, nomeado, atualizado... e podemos criar funções para cada etapa para executar diferentes coisas (uma requeste no back-end quando o componente ser criado, ou alguma interação na interface atualize alguma informação desta interface, etc)

Para gerar o bundle do Babel:

> npx babel src/main.js -o dist/bundle.js -w