---
title: Hoisting e escopo em JavaScript
tags: javascript
author: Caio Gondim
author_link: http://twitter.com/caio_gondim
author_profile: https://plus.google.com/109656206006790732674/
author_facebook: https://www.facebook.com/caiogondim
image: images/posts/2014-10-29-javascript-hoisting.jpg
comments: true
keywords: >
  javascript, hoisting, escopo, c, linguagem, ecmascript, ecmascript 6, es6, js,
  declaração de variáveis, declaração de funções, var, let, variável, erro
resumo: >
  O JavaScript é uma linguagem cheia de pequenas surpresas que pode espantar até
  o mais experiente programador. Neste *post* vamos estudar um pouco mais sobre
  uma delas — o *hoisting* — e saber como se comporta mais esse *dark corner* da
  nossa querida linguagem.
related:
  - title: "JavaScript Scoping and Hoisting"
    url: http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html
    from: adequately good
  - title: "A Dangerous Example of Javascript Hoisting"
    url: http://thecomputersarewinning.com/post/a-dangerous-example-of-javascript-hoisting/
    from: the computers are winning
  - title: "Function Declarations vs. Function Expressions"
    url: http://javascriptweblog.wordpress.com/2010/07/06/function-declarations-vs-function-expressions/
    from: JavaScript, JavaScript... by Angus Croll
  - title: "Does a browser truly read JavaScript line by line OR does it make multiple passes?"
    url: http://stackoverflow.com/questions/15395347/does-a-browser-truly-read-javascript-line-by-line-or-does-it-make-multiple-passe
    from: stackoverflow
  - title: "let"
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
    from: Mozilla Developer Network
---

O JavaScript é uma linguagem cheia de pequenas surpresas que pode espantar até
o mais experiente programador. Vamos tomar como exemplo o trecho de código
abaixo. Você sabe quais valores serão impressos?

```javascript
// Exemplo 1
var a = 1

function foo() {
  console.log(a)
  var a = 2
  console.log(a)
}

foo()

console.log(a)
```

Pela “lógica”, deveria ser primeiro impreso `1`, `1` e `2`, correto? **Não**. E
neste outro trecho de código, qual será a saída?

```javascript
// Exemplo 2
function foo() {
  function bar() {
    return 3
  }

  return bar()

  function bar() {
    return 8
  }
}

console.log(foo())
```

Se você não respondeu `undefined`, `2` e `1` para o exemplo 1 e `8` para o
exemplo 2, aconselho a leitura deste *post*. Aqui vamos discutir um pouco sobre
o **_hoisting_** no JavaScript. Mas antes de elaborarmos mais sobre os motivos
que levaram nosso código a se comportar de tal forma, vamos de volta ao básico e
falar sobre **escopo**.


## Escopo

Escopo em JavaScript é um tópico que gera bastante confusão para iniciantes na
linguagem. Apesar de pertencer a família das linguagens baseadas em C, o escopo
em JavaScript não funciona da mesma forma como em C, C++ ou mesmo Java. Vamos
usar o seguinte trecho de código em C como exemplo:

```c
// Exemplo 3
#include <stdio.h>

int main() {
  int a = 1;
  printf("%d\n", a); //=> 1

  if (1) {
    int a = 2;
    printf("%d\n", a); //=> 2
  }

  printf("%d\n", a); //=> 1
}
```

No código acima, o exemplo 3 irá imprimir `1`, `2` e `1`. Isso acontece porque
em C (assim como Java e C++), temos escopo por bloco. Em JavaScript só temos
escopo a nível de função. O código anterior traduzido de uma forma “ingênua” pra
JavaScript seria algo assim:

```javascript
// Exemplo 4
var a = 1
console.log(a) //=> 1

if (true) {
  var a = 2
  console.log(a) //=> 2
}

console.log(a) //=> 2
```

Mas este código — exemplo 4 — não se comporta da mesma forma que o código
anterior em C — exemplo 3. Repare que o bloco `if` não cria um escopo. Logo,
quando a variável recebe o valor `2`, ela continuará com este mesmo valor mesmo
fora do bloco `if`.

Para criarmos um escopo dentro do `if` temos que usar uma função — uma
<abbr title="Immediately-invoked function expression">IIFE</abbr> —
pois, em JavaScript, esta é a única ferramenta que temos para criar um escopo.

```javascript
// Exemplo 5
var a = 1
console.log(a) //=> 1

if (true) {
  (function() {
    var a = 2
    console.log(a) //=> 2
  }())
}

console.log(a) //=> 1
```

Agora sim nosso algoritmo em JavaScript está se comportando de forma semelhante
ao nosso código anterior em C. Mesmo sendo considerada como uma linguagem que
pertence a família C, escopo em JavaScript funciona de um modo bastante
diferente. Lembre-se: **escopo em JavaScript apenas com o uso de funções**. E
com o uso de *closures* podemos criar escopos onde e quando quisermos em nosso
código, simulando assim o comportamento de outras linguagens.

### Declaração e nomes no escopo

Existem 4 maneiras de um nome entrar em um escopo em JavaScript:

- **Definido pela linguagem**: todo escopo possui o `this`, e caso seja uma função, também o `arguments`.
- **Parâmetros de uma função**: caso uma função seja chamada na forma `foo(a, b)`, `a` e `b` entram no escopo da função.
- **Declaração de uma função**: funções declaradas na forma `function foo() {}`.
- **Declaração de uma variável**: variáveis declaradas como `var bar`.

Porém, para cada diferente método de entrada no escopo há diferença na
ordem de resolução de nomes. Alguns podem ser resolvidos primeiro mesmo
aparecendo ao fim do escopo, enquanto outros podem ter apenas seus nomes
resolvidos, sem ter seus valores inicializados. E é esse comportamento não
explicito de resolução de nomes e inicialização de valores do JavaScript que foi
batizado como **_hoisting_** por [Ben Cherry](http://twitter.com/bcherry).


## Hoisting

[*Hoist* em inglês](http://dictionary.reference.com/browse/hoist) significa
levantar ou suspender algo através de um aparato mecânico. Em bom português,
significa usar o guindaste para elevar um objeto. E é isto o que acontece em
JavaScript quando declaramos uma variável ou função. Sua declaração é “elevada”
para o topo do escopo.

Apesar de não ser óbvio, o modo como o *hoisting* funciona é fácil de ser
entendido. Vamos estudar todos os casos e saber como se comporta mais esse
*dark corner* da nossa querida linguagem.

### Variable hoisting

Toda vez que uma variável é definida, sua **declaração** é *hoisted*, mas não
sua inicialização. O que quer dizer que a declaração da variável vai para cima
do escopo antes mesmo do código ser executado, mas esta variável não recebe
nenhum valor e permanece como `undefined`.

```javascript
// Exemplo 6
// Irá imprimir o erro dentro do `catch`
try {
  console.log(a)
} catch (e) {
  console.error('A variável `a` não foi definida.')
}

// Exemplo 7
// Irá imprimir `undefined`
try {
  console.log(a)
  var a = 2
} catch (e) {
  console.error('A variável `a` não foi definida.')
}
```

Reparem no código acima que no exemplo 6, quando tentamos imprimir o valor de
`a`, recebemos um erro pois esta variável não existe. Já no exemplo 7,
`undefined` será impresso, mesmo tendo a declaração de `a` depois do do comando
`console.log`. Ali ocorreu um `hoisting` da **declaração** da variável `a`, mas
não da sua **inicialização**.

O código do exemplo 7 se comporta da mesma forma que este no exemplo 8:

```javascript
// Exemplo 8
// Irá imprimir `undefined`
try {
  var a
  console.log(a)
  a = 2
} catch (e) {
  console.error('a não existe no contexto atual')
}
```

No código acima — exemplo 8 — reescrevemos o exemplo 7 de tal forma que faça
mais sentido para nós, já que este código será executado de forma linear.

Repare que apenas a **declaração** da variável vai para o topo, mas não sua
inicialização. Esta continua no mesmo lugar em que definimos no nosso código.
Por isso recebemos um `undefined` quando tentamos acessar seu valor.

<q class="pushing-quotes">
  Apenas a <strong>declaração</strong> de uma variável é hoisted, não sua
  inicialização.
</q>

### Function hoisting

O *hosting* com funções acontece de maneira diferente. Aqui, não só o nome da
função é *hoisted* como também seu corpo.

```javascript
// Exemplo 9
foo()
function foo() {
  console.log('bar')
}
```

O código acima irá imprimir `bar`, sem nenhum erro. Mesmo executando uma função
antes mesmo de ser definida. Isso porque tanto o nome da função como seu corpo
são *hoisted*.

Vamos analisar novamente o exemplo 2 que apareceu logo no começo do *post*. Por
que seu *output* é `8`?

```javascript
// Exemplo 2
function foo(){
  function bar() {
    return 3
  }

  return bar()

  function bar() {
    return 8
  }
}

console.log(foo())
```

Dentro do escopo da função `foo`, primeiro temos a definição da função `bar` que
já está no topo. Depois do `return` temos uma outra definição de função com o
nome de `bar`. Apesar de aparecer ao fim do escopo, ela é *hoisted* — vai para o
topo antes da execução. Como ela é a segunda função com o mesmo nome, ela acaba
por **sobreescrever a primeira**, e o nome `bar` acaba por fazer referência à
segunda função.

<hr />

Uma função pode ser declarada também como uma expressão, e quando declarada
desta forma, ela obedece a regra de *hoisting* de variável. Apenas seu nome será
*hoisted*.

```javascript
// Exemplo 10
foo() //=> TypeError
var foo = function() {}
```

No exemplo acima — exemplo 10 — será disparado um erro do tipo `TypeError`, nos
avisando que `undefined` não pode ser usado como uma função.


## ECMAScript 6

O ECMAScript 6 introduz um novo meio de definir variáveis através do `let`. Com
ele nós temos escopo a nível de bloco. No exemplo 11 temos um trecho de código
extraído da [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let).

```javascript
// Exemplo 11
function varTest() {
  var x = 31
  if (true) {
    var x = 71 // mesma variável
    console.log(x) // 71
  }
  console.log(x) // 71
}

function letTest() {
  let x = 31
  if (true) {
    let x = 71 // variável diferente
    console.log(x) // 71
  }
  console.log(x) // 31
}
```

Com o `let`, é criado um diferente escopo também dentro de blocos como `if`,
`for`, `while`, etc.

<hr />

Outra diferença com o uso do `let` é que não temos *hoisting*, ou seja, a
declaração da variável não vai para o topo do escopo antes da execução do
código.

```javascript
// Exemplo 12
function fooLet() {
  console.log(bar) //=> ReferenceError
  let bar = 2
}
fooLet()

function fooVar() {
  console.log(bar) //=> Undefined
  var bar = 2
}
fooVar()
```

No exemplo 12 temos dois trechos de código, um deles declara a variável `bar`
com `var`, o outro com `let`. Quando usamos `let` não há *hoisting*, e então
recebemos um `ReferenceError`.


## Protip

Como dica para evitar comportamentos inesperados, declare todas suas variáveis —
todas mesmo — no topo das funções, utilize apenas um único `var` por escopo e
habilite a *flag*&nbsp;`onevar` do [JSHint](http://www.jshint.com).
