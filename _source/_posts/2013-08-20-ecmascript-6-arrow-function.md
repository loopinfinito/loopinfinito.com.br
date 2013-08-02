---
title: ECMAScript 6 <span>Arrow Function</span>
layout: post
author: Caio Gondim
author_link: http://twitter.com/caio_gondim
author_profile: https://plus.google.com/109656206006790732674/
image: images/posts/2013-08-20-ecmascript-6-arrow-function.jpg
tags: javascript
comments: false
keywords: >
  lorem, ipsum
resumo: >
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, sapiente
  voluptate commodi ea tenetur nulla reiciendis tempora autem reprehenderit
  facere accusantium deserunt non molestias veniam iure. Minus, alias sequi
  neque
related:
  - title: Thoughts on ECMAScript 6 and new syntax
    url: http://www.nczonline.net/blog/2012/07/24/thoughts-on-ecmascript-6-and-new-syntax/
    from: NCZOnline
  - title: ECMAScript Harmony’s arrow functions
    url: http://whattheheadsaid.com/2013/06/ecmascript-harmonys-arrow-functions
    from: What the Head Said
  - title: ECMAScript 6 and Arrow Function
    url: http://ariya.ofilabs.com/2013/02/es6-and-arrow-function.html
    from: Ariya Hidayat
  - title: Arrow Functions
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/arrow_functions
    from: Mozilla Developer Network
  - title: ECMAScript.next arrow functions and method definitions
    url: http://www.2ality.com/2012/04/arrow-functions.html
    from: 2ality
---

Inspirado no CoffeeScript, a versão 6 do ECMAScript nos traz um jeito mais
simples e elegante de definirmos funções, as chamadas **arrow function**. Não só
_syntatic sugar_, elas vêem para resolve (de forma elegante) o problema do
`this` dinâmico que todos já enfrentamos ao passarmos funções como _callback_.


## O problema do _this_ dinâmico

Para entendermos o problema do `this` dinâmico em algumas situações, vamos
entender como funcionam os dois tipos de escopo no JavaScript: o escopo
__dinâmico__ e o escopo __léxico__.

Toda vez que uma função é executada no JavaScript, ela possui dois diferentes
escopos (contextos): o escopo __léxico__ e o escopo __dinâmico__. O escopo
léxico é formado por todos os contrutores sintáticos que estão ao redor da
função, ele está mais ligado a estrutura do código. O escopo dinâmico é formado
pela função que chamou a função, que chamou nossa função, e assim
sucessivamente. Ele está mais ligado ao tempo de execução do código.

Quando invocamos uma variável que não foi definida no escopo atual, o JavaScript
continua a subir no escopo léxico a procura desta variável, até chegar no objeto
global (no caso do navegador, o `window`). Caso tenha chegado no escopo global e
mesmo assim nenhuma variável com o nome desejado tenha sido encontrada, um erro
é disparado.

{% highlight javascript %}
var foo = 'lorem';

(function() {
  var bar = 'ipsum';
  console.log(foo);
}())

console.log(ipsum); // gera um erro
{% endhighlight %}

No exemplo acima, onde chamamos `console.log(foo)`, a variável `foo` não existe
no contexto léxico de invocação da função, então o JavaScript sobe mais um nível
no contexto procurando uma variável chamada `foo`. Na execução do código
`console.log(ipsum)`, não existe uma variável chamada `ipsum` no contexto atual,
e nós não podemos mais subir no contexto uam vez que já estamos no escopo
global. Até há um a variável chamada `ipsum` em um escopo mais abaixo, mais o
JavaScript apenas __sobe__ no escopo procurando por variáveis, nunca desce.

Já o `this` é setado dinamicamente, em tempo de execução. Quando uma função é
executada, o valor do `this` é setado como sendo o valor do objeto que a
possui. Em outras palavras, `this` equivale ao objeto ao qual essa função é um
método. O problema de tudo isso é que — na maioria das vezes — o `this` não tem uso
prático em funções que servem como _callback_.

{% highlight javascript %}
var armazem = {
  estabelecimentoNome: 'Armazém do Chico',

  logVendaDeCerveja: function(cervejas) {
    cervejas.forEach(function(cerveja) {
      console.log(this.estabelecimentoNome + ' vendeu ' + cerveja);
    });
  }
}

armazem.logVendaDeCerveja(cervejas); // gera um erro
{% endhighlight %}

No exemplo acima, o método `forEach` do suposto _array_ de cervejas recebe um
_callback_ como argumento. No momento de execução, o `this` aponta ao objeto
`window`, já que essa função não é método de nenhum objeto — no _strict mode_
seria disparado um erro . E já que o `this` aponta para o escopo global, não tem
nenhum uso prático.

Temos alguns jeitos de contornar isso, claro. Mas não vamos entrar em detalhes
sobre isso agora.

As _arrow functions_ vêem solucionar principalmante esse tipo de cenário. Com
elas, o valor do `this` deixa de ser dinâmico e passa a ser estático. O que as
tornam perfeitas para uso em _callbacks_. O exemplo acima poderia ser reescrito
da seguinte forma:

{% highlight javascript %}
var armazem = {
  estabelecimentoNome: 'Armazém do Chico',

  logVendaDeCerveja: function(cervejas) {
    cervejas.forEach(cerveja => {
      console.log(this.estabelecimentoNome + ' vendeu ' + cerveja);
    });
  }
}

armazem.logVendaDeCerveja(cervejas);
{% endhighlight %}

Agora o valor do `this` está setado estaticamente como sendo uma referência ao
objeto `armazem`. Ou, o valor do `this` foi setado como um `this` léxico, e não
mais dinâmico.

## Sintaxe menos verbosa

Havia uma dúvida entre qual tipo de seta usar para as _arrow functions_. A seta
"magra" (`->`) ou a seta "gorda" (`=>`). No final, a seta "gorda" (_fat arrow_)
acabou se tornando o padrão para se tornar compatível com CoffeeScript, que já
possui _fat arrow_ e se comporta de uma maneira similar à proposta do ECMAScript
6.

{% highlight javascript %}
let soma = (a, b) => {
  return a + b
}
{% endhighlight %}

Para definirmos argumentos, existem 3 maneiras possíveis. Sem argumentos, um
argumento e vários argumentos.

{% highlight javascript %}
() => { ... } // sem argumentos
a => { ... } // um argumento
(a, b) => { ... } // vários argumentos
{% endhighlight %}

Na especificação do corpo da função, podemos definir como um bloco (a forma
padrão) ou como uma expressão que é retornada implicitamente.

{% highlight javascript %}
a => { return 2 * a } // bloco
a => 2 * a // expressão, equivalente à linha anterior
{% endhighlight %}

Por baixo dos panos, as _arrow function_ são apenas _syntatic sugar_ para o método
`Function.prototype.bind`.


## Não podem ser usadas como construtores

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, obcaecati,
voluptatibus itaque fugit mollitia doloribus repellat ipsa eius laborum
assumenda labore porro laudantium rerum! Illo, asperiores consequuntur ad
nesciunt doloribus.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, quasi,
mollitia, nemo, dignissimos reiciendis blanditiis est exercitationem architecto
odio rerum iure ex maiores itaque commodi molestias aliquam nostrum sapiente
necessitatibus.
