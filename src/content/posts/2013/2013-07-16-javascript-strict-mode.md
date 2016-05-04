---
title: JavaScript Strict Mode
tags: javascript
author: caio
image: images/posts/2013-07-16-javascript-strict-mode.jpg
comments: true
keywords: >
  javascript, strict mode, parser, navegador, browser, js, ecmascript, amazon, firefox
resumo: >
  O __strict mode__ é uma nova _feature_ do ECMAScript 5 que permite que
  o código JavaScript rode em um modo mais rigoroso. Nele, a _engine_ de
  JavaScript tem seu comportamento modificado, gerando erros que antes eram
  silenciados e, até mesmo, proibindo o uso de certas partes da linguagem que são
  tidas como problemáticas, nos forçando assim a escrever um código de melhor
  qualidade e ajudando a capturar _bugs_ mais precocemente.
related:
  - title: ECMAScript 5 Strict Mode, JSON, and More
    url: http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/
    from: John Resig blog
  - title: It’s time to start using JavaScript strict mode
    url: http://www.nczonline.net/blog/2012/03/13/its-time-to-start-using-javascript-strict-mode/
    from: NCZonline
  - title: ECMA-262-5 in detail. Chapter 2. Strict Mode.
    url: http://dmitrysoshnikov.com/ecmascript/es5-chapter-2-strict-mode/
    from: Dmitry Soshnikov blog
  - title: Strict mode
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode
    from: Mozilla Developer Network
  - title: JavaScript’s Strict Mode and Why You Should Use It
    url: http://cjihrig.com/blog/javascripts-strict-mode-and-why-you-should-use-it/
    from: Colin Ihrig blog
---

O __strict mode__ é uma nova _feature_ do ECMAScript 5 que permite fazer que
o código JavaScript rode em um modo mais rigoroso. Neste modo, a _engine_ de
JavaScript tem seu comportamento modificado, gerando erros que antes eram
silenciados e, até mesmo, proibindo o uso de certas partes da linguagem que são
tidas como problemáticas, nos forçando assim a escrever um código de melhor
qualidade e ajudando a capturar _bugs_ mais precocemente.


## Habilitando

A primeira forma de habilitar o modo _strict_ é a nível de arquivo. Para isso,
basta por a string `"use strict";` ou `'use strict';` no começo de um arquivo
<abbr title="JavaScript">JS</abbr> para que todo o código deste arquivo seja
executado no modo _strict_.

Nenhum código pode vir antes da declaração `"use strict";` (apenas _whitespace_
e comentários são permitidos). Caso um trecho de código apareça antes, o modo
_strict_ não é disparado.

```javascript
// código "strict"
"use strict";
var foo = "bar";

// código "não strict"
var whatsUp = "suuup";
"use strict";
```

A outra forma de uso é a nível de função. Quando usado dentro de uma função,
apenas o código dentro dela é executado no modo _strict_. Todo o código
externo continua a ser executado normalmente.

```javascript
function foo() {
  "use strict";
  // código da função em modo "strict"
}

function bar() {
  // código da função em modo "não strict"
}
```

Hoje é muito comum concatenarmos arquivos para diminuir a quantidade de dados
trafegados e o número de requisições. Para não disparar o modo _strict_ em
código que não foi testado neste modo, é interessante deixarmos o código que
roda e foi testado para rodar no modo _strict_ isolado. As funções de invocação
imediata são perfeitas para isso.

```javascript
// código no modo "não strict"
(function() {
  "use strict";
  // código no modo "strict"
}());
// código no modo "não strict"
```

A Amazon teve um problema ao concatenar um arquivo
<abbr title="JavaScript">JS</abbr> que tinha `"use strict";` declarado de forma
global no arquivo com outros arquivos <abbr title="JavaScript">JS</abbr> que não
eram _strict compliant_. Como o arquivo que continha a declaração de modo
_strict_ global era o primeiro da fila de concatenação, ele fez com que o código
dos outros arquivos também rodassem no modo _strict_, disparando vários erros
que normalmente seriam silenciados. Esse episódio gerou, inclusive, uma abertura
de [_ticket_](https://bugzilla.mozilla.org/show_bug.cgi?id=579119) no Bugzilla
do Firefox — e com certeza alguns milhões foram pelo ralo.


## O que muda?

O _strict mode_ trouxe várias mudanças na forma de como o JavaScript é
executado. Mas vamos focar nas principais partes. Caso queira descer mais ainda
na toca do coelho, o artigo do
[Dmitry Soshnikov](http://dmitrysoshnikov.com/ecmascript/es5-chapter-2-strict-mode/)
é uma ótima leitura sobre todos os detalhes das mudanças que o _strict mode_
trouxe.


### Remoção do __with__

A tão mal compreendida declaração `with` foi removida da linguagem.
No _strict mode_ seu uso gera um erro de sintaxe.

```javascript
"use strict";

// gera um erro de sintaxe no "strict mode"
with (location) {
  console.log(href);
}
```


### Declaração implícita de __variáveis globais__

Um dos erros mais comuns em JavaScript. Sem o _strict mode_, uma nova variável
global é criada sempre que atribuimos um valor a uma variável não declarada. No
modo _strict_, isto gera um erro.

```javascript
// gera um erro no "strict mode"
(function() {
  "use strict";
  variavelNaoDeclarada = 'foo';
}());
```


### Restrição de nomes

O modo _strict_ impõe uma série de restrições aos nomes de variáveis, funções e
parâmetros. `eval` e `arguments` não mais podem ser usados como identificadores,
muito menos tentar atribuir um valor a eles. O que é muito bom, uma vez que o
JavaScript possui nativamente uma função `eval` e um objeto `arguments`.

```javascript
// gera um erro de sintaxe no "strict mode"
function() {
  "use strict";
  arguments = 'foo';
}
```

Algumas palavras também são proibidas de serem usadas como identificadores pois
são candidatas a serem usadas como nomes de futuras _features_ da linguagem.
Entre elas estão:

- implements
- interface
- let
- package
- private
- protected
- public
- static
- yield


### Uso do __this__

O uso do `this` foi levemente modificado. Quando usado dentro de uma função, o
`this` aponta para o objeto que contem a função. Porém quando a função não pertence
a um objeto específico, ele aponta para o objeto global `window`.

No modo _strict_, caso o `this` seja usado em uma função que é definida no escopo
global, ele retorna o valor `undefined`. Caso uma função pertença a um objeto,
ele continua a apontar para o objeto, como acontecia anteriormente.

```javascript
// retorna "undefined"
function() {
  "use strict";
  return this;
}
```

Isso evita erros comuns com funções usadas como construtores. No código abaixo
chamamos uma função construtora sem o uso do `new`. No modo não _strict_, o
`this` apontaria para `window` e uma variável global `nome` seria criada.

Como no _strict mode_ o `this` retorna `undefined`, e não podemos adicionar
propriedades a `undefined`, um erro é gerado. Quando usado da forma apropriada,
com o `new`, nenhum erro é disparado.

```javascript
"use strict";

function Blog(nome) {
  this.nome = nome;
}

// gera um erro no "strict mode"
var blog = Blog('Loop Infinito');
```


### Parâmetros e propriedades __duplicadas__

O JavaScript não reclama caso você declare duas propriedades de um objeto com o
mesmo nome. A última declaração vai simplesmente sobreescrever a anterior. O modo
_strict_ força o uso de nomes únicos de propriedades.

```javascript
"use strict";

// gera um erro de sintaxe no modo strict
obj = {
  foo: 1,
  bar: 2,
  foo: 3
}
```

Com o nome de parâmetros temos um cenário parecido. Normalmente o JavaScript
aceita como sintaxe válida a declaração de parâmetros com o mesmo nome. No modo
_strict_ isso gera um erro de sintaxe.

```javascript
// gera um erro de sintaxe
function foo(param1, param1) {
  "use strict";
  return param1 + 1;
}
```


### Variáveis do contexto _eval()_

O `eval`, em código não _strict_, pode adicionar variáveis ao contexto em que
ele está inserido. E antes do
<abbr title="JavaScript Object Notation">JSON</abbr> ser nativamente
implementado nos _browsers_, o `eval` era muito usado para construir objetos a
partir de _strings_ e os inserir no contexto externo ao `eval`.

Com o _strict mode_, o `eval` não pode mais adicionar variáveis fora de seu
contexto. Variáveis adicionadas no `eval` ficam contidas no contexto do `eval`.
No código abaixo, sem o _strict mode_, seria inserido uma variável `foo` e o
valor do `alert` seria "bar". No _strict mode_ acontece um erro de sintaxe pois
a variável não foi definida.

```javascript
"use strict";

eval('var foo="bar";');
alert(foo); // gera um erro de sintaxe no "strict mode"
```


### Números no sistema __octal__

Números no sistema octal são números representados na base 8. Ou seja, 10 em
octal equivale a 8 em decimal. Em JavaScript, e em várias outras linguagens, os
números no sistema octal são representados com um 0 na frente do número. 023 em
JavaScript equivale a 19 em decimal. Isso gerava muita confusão, já que muitos
achavam que um zero a esquerda não iria fazer nenhuma diferença na representação
do número.

```javascript
"use strict";

// gera um erro de sintaxe no modo strict
var foo = 023;
```

No modo _strict_ o uso de números no sistema octal não é permitido. Caso um 0
seja posto na frente de um número octal válido, será gerado um erro de sintaxe.
Caso contrário ele será simplesmente tratado como decimal.

```javascript
"use strict";

// octal válido. gera erro de sintaxe no "strict mode"
var foo = 023;

// ocatal não válido. é tratado como decimal
var bar = 08;
```

Como o número 08 não é um número octal válido, já que números no sistema octal
vão de 0 a 7, ele é tratado como um número decimal. No caso do número 023, por
ser um octal válido, um erro de sintaxe é gerado. Caso você não saiba o que um
octal é, ande pela sombra evitando o uso de 0's na frente de números.


<table class="support">
  <thead>
    <tr>
      <th class="subject"><h2>Suporte</h2></th>
      <th class="browser chrome"><div class="i"></div></th>
      <th class="browser safari"><div class="i"></div></th>
      <th class="browser firefox"><div class="i"></div></th>
      <th class="browser ie"><div class="i"></div></th>
      <th class="browser opera"><div class="i"></div></th>
    </tr>
    <tr>
      <th></th>
      <th colspan="5" class="base"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="property"><code>'use strict';</code></td>
      <td>26.0</td>
      <td>6.0</td>
      <td>21.0</td>
      <td>10.0</td>
      <td>15.0</td>
    </tr>
  </tbody>
</table>

O _strict mode_ pode ser usado sem medo em todos os navegadores. Caso um
navegador que não o implemente passe pela declaração `"use strict";`, ele irá
tratá-la como uma _string_ e não irá afetar o comportamento do código seguinte.

O cenário contrário também é compatível. Caso você desenvolva JavaScript em modo
_strict_ em um navegador que o implementa, o código válido no modo _strict_
deste navegador é retrocompatível com qualquer outro que implemente o ECMAScript
3. Ou seja, irá rodar até no IE.
