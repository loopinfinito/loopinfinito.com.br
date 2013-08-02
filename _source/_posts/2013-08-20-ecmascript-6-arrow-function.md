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
  javascript, arrow function, função seta, ecmascript, ecmascript 6, js, coffeescript, firefox
resumo: >
  Inspirado no CoffeeScript, a versão 6 do ECMAScript nos traz um jeito mais
  simples e elegante de definirmos funções, as chamadas **arrow function**. Não só
  _syntatic sugar_, elas vêem para resolve (de forma elegante) o problema do
  `this` dinâmico que todos já enfrentamos ao passarmos funções como _callback_.
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


## _this_ léxico

No JavaScript o valor do `this` é setado dinamicamente em tempo de execução. Ele
sempre faz referência ao objeto ao qual a função atual é um método. Em outras
palavras, ele faz referência ao objeto dono da função. Caso a função não
pertença a nenhum objeto (não seja método de nenhum objeto) ele aponta para o
objeto global — `window` no caso dos navegadores.

Nas funções passadas como _callback_, o valor do `this` é igual ao da `window`,
uma vez que estamos passamos uma função como argumento e nenhum objeto a possui.
No _strict mode_ o `this` é igual a `undefined` dentro de uma função passada
como _callback_.

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

No exemplo acima um erro é gerado, uma vez que `this` aponta para `window` e não
ao objeto `armazem`, como é esperado. Temos alguns jeitos de contornar isso,
claro. Mas não vamos entrar em detalhes sobre isso agora.

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
"magra" (`->`) ou a seta "gorda" (`=>`). No final, a seta "gorda" (<em>fat
arrow</em>) acabou se tornando o padrão para se tornar compatível com
CoffeeScript, que já possui _fat arrow_ e se comporta de uma maneira similar à
proposta do ECMAScript 6.

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

Por baixo dos panos, as _arrow function_ são apenas _syntatic sugar_ para o
método `Function.prototype.bind`.


## Não podem ser usadas como construtores

Usar `new` com _arrow functions_ não é possível, pois elas não possuem o método
interno \[\[Construct\]\] (o que permite que uma função normal seja usada com
`new`) e muito menos a propriedade `prototype`. E já que seu _this_ é léxico, e
não dinâmico, não faria o mínimo sentido de qualquer forma.

{% highlight javascript %}
var foo = new () => {}; // gera um erro
{% endhighlight %}

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
      <td class="property"><code>arrow function</code></td>
      <td>--</td>
      <td>--</td>
      <td>22.0</td>
      <td>--</td>
      <td>--</td>
    </tr>
  </tbody>
</table>

Por ser uma nova _feature_ do também novo ECMAScript 6.0, apenas um _browser_, o
Firefox 22.0, dá suporte.
