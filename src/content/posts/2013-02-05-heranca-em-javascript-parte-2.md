---
title: Herança em JavaScript <span class="light">parte II</span>
layout: post.html
author: Caio Gondim
author_link: http://twitter.com/caio_gondim
author_profile: https://plus.google.com/109656206006790732674/
author_facebook: https://www.facebook.com/caiogondim
image: images/posts/2013-02-05-heranca-em-javascript-parte-2.jpg
tags: javascript
comments: true
keywords: >
  javascript, js, web development, desenvolvimento web, html5, front-end,
  programação, oop, orientação a objetos, herança, orientação a protótipos, java
resumo: >
  E finalmente sai a parte II do post __Herança com JavaScript__. Na
  [parte I](http://loopinfinito.com.br/2012/05/04/heranca-em-javascript-parte-1/)
  relembramos o que é herança em linguagens de programação orientadas a objeto
  baseadas em classes, a cadeia de protótipos no JavaScript e como a utilizar
  para simular herança. Nesta parte II abordaremos alguns novos métodos definidos
  pela especificação ECMAScript 5 que facilitará bastante o trabalho com
  herança e protótipos.
---

O JavaScript é uma linguagem orientada a objetos baseada em protótipos mas
que, ao longo de seu desenvolvimento, foi forçada a "parecer" uma
linguagem baseada em classes. Com o ECMAScript 5 é finalmente possível
programar em JavaScript utilizando os conceitos de prototipação, herdando
propriedades diretamente de um objeto.

## Clonando

Um dos novos métodos adicionados pela especificação ECMAScript 5 é o
`Object.create`. Com ele nós podemos criar um novo objeto clone de um outro.
Em outras palavras, usar um objeto existente como protótipo.

No exemplo abaixo primeiro definimos um objeto __pessoa__, para logo depois
criarmos um novo objeto __joao__ que contém exatamente todas as propriedades de
pessoa.

{% highlight javascript %}
var pessoa = {
  caminhar: function() {
    // ...
  },
  falar: function() {
    // ...
  }
}

var joao = Object.create(pessoa)
joao.caminhar() // método clonado de *pessoa*
{% endhighlight %}



Com este método é possível também criarmos um objeto sem propriedades, que não
usa nenhum outro como protótipo. O que era impossível antes.

{% highlight javascript %}
var obj = {}
obj.toString() // método herdado de Object

var objVirgem = Object.create(null)
objVirgem.toString() // não possui nenhum método
{% endhighlight %}

## Extendendo

Além de simplesmente clonar, é possível criar um novo objeto extendendo um já
existente.

{% highlight javascript %}
var animal = {
  respirar: function() {
    // ...
  },
  reproduzir: function() {
    // ...
  }
}

var cachorro = Object.create(animal, {
  latir: {
    value: function() {
      // ...
    }
  }
})

cachorro.respirar() // método herdado
cachorro.latir() // método adicionado
{% endhighlight %}

No exemplo acima criamos um novo objeto do tipo __cachorro__ que contem todas as
propriedades de __animal__ além de um novo método __latir__.

## Definindo propriedades

O novo meio de definirmos novas propriedades em um objeto é através do método
`Object.defineProperty`. No ECMAScript 5, as propriedades de um objeto não são
mais apenas valores acessados através de uma chave. Agora podemos definir _setters_,
_getters_, se a propriedade é apenas de leitura, enumerável, ...

{% highlight javascript %}
Object.defineProperty(cachorro, 'dormir', {
  value: function() {
    // ...
  },
  writable: false,
  enumerable: false,
  configurable: false
})
{% endhighlight %}

Os _descriptors_ de uma propriedade podem ser:

- __value__: o valor da propriedade. pode ser uma função, um objeto, um número, ...
- __writable__: se `false`, o valor não pode ser alterado.
- __configurable__: se `false`, não é possível deletar a propriedade ou modificar seus atributos (`writable`, `configurable` ou `enumerable`)
- __enumerable__: se `true`, a propriedade será iterada em um _loop_&nbsp;`for (var prop in obj){}`

Além disso é possivel definir _getters_ and _setters_ que irão ser disparados
de forma transparente toda vez que a propriedade for acessada ou modificada.

{% highlight javascript %}
Object.defineProperty(cachorro, 'idade', {
  value: 1,
  get: funtion() {
    // já que cada ano de um cachorro é equivalente a 7 anos nossos
    return idade * 7
  },
  set: function(value) {
    idade = value
  }
})

cachorro.idade = 3
cachorro.idade // retorna 21 (3*7)
{% endhighlight %}

## Métodos super

No exemplo abaixo, definimos uma nova propriedade __respirar__ no objeto
cachorro. Mas essa propriedade já havia sido herdada do objeto __animal__, então
acabamos a sobreescrevendo.

{% highlight javascript %}
Object.defineProperty(cachorro, 'respirar', {
  value: function(){
    // ...
  }
})
cachorro.respirar() // dispara função que acabamos de definir
{% endhighlight %}

Mas mesmo assim ainda podemos percorrer a cadeia de protótipos e acessar o método
definido no protótipo de cachorro, o método definido no objeto animal. O novo
método `Object.getPrototypeOf` nos dá acesso ao protótipo de um objeto. Então
basta acessarmos o protótipo de __cachorro__ e chamarmos o método anteriormente
sobreescrito.

{% highlight javascript %}
Object.getPrototypeOf(cachorro).respirar()
// o mesmo que
animal.respirar()
{% endhighlight %}

## Modificando protótipo em tempo de execução

Em linguagens baseadas em protótipos podemos facilmente adicionar ou remover
propriedades a objetos, bastando modificar seus protótipos. Por exemplo, caso
um novo método seja implementado em animal, todos os objetos que usam animal
como protótipo terão este método disponível.

{% highlight javascript %}
cachorro.morrer() // undefined

Object.defineProperty(animal, 'morrer', {
  value: function() {  }
})
cachorro.morrer() // dispara função definida em animal
{% endhighlight %}

Então imaginem que queremos dar a todos os cachorros já criados em nossa aplicação
um novo método. Para isso basta acessar o protótipo de cachorro e definir uma nova
propriedade. Após isso, todos os cachorros já poderão usar o novo método.

{% highlight javascript %}
Object.defineProperty(Object.getPrototypeOf(cachorro), 'comer', {
  value: function() {}
})
{% endhighlight %}

## E no IE?

Infelizmente apenas a partir da versão 9 do IE que temos suporte a estas novas
_features_ do JavaScript. E sabemos que o IE 9 não roda no Windows XP, então ainda
temos algum tempo para aprender e dominar este novo jeito de desenvolver com
JavaScript.

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
      <td class="property"><code>Object.create()</code></td>
      <td>5.0</td>
      <td>5.0</td>
      <td>4.0</td>
      <td>9.0</td>
      <td>11.60</td>
    </tr>
    <tr>
      <td class="property"><code>Object.defineProperty()</code></td>
      <td>5.0</td>
      <td>5.1</td>
      <td>4.0</td>
      <td>9.0</td>
      <td>11.60</td>
    </tr>
    <tr>
      <td class="property"><code>Object.getPrototypeOf()</code></td>
      <td>5.0</td>
      <td>5.0</td>
      <td>3.5</td>
      <td>9.0</td>
      <td>--</td>
    </tr>
  </tbody>
</table>

Mas caso você tenha espiríto aventureiro, existe um
[_shim_](https://github.com/kriskowal/es5-shim) para que estes novos métodos
funcionem (ou parcialmente funcionem) em navegadores antigos.

<aside class="fonte">
  <h3>Referência</h3>
  <ul>
    <li>
      <a href="http://ejohn.org/blog/objectgetprototypeof/">
        Object.getPrototypeOf
      </a>
      <span class="comment">// John Resig</span>
    </li>
    <li>
      <a href="http://loopinfinito.com.br/2012/05/04/heranca-em-javascript-parte-1/">
        Herança em JavaScript parte I
      </a>
      <span class="comment">// Loop Infinito</span>
    </li>
    <li>
      <a href="http://ejohn.org/blog/ecmascript-5-objects-and-properties/">
        ECMAScript 5 Objects and Properties
      </a>
      <span class="comment">// John Resig</span>
    </li>
    <li>
      <a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/create">
        Object.create
      </a>
      <span class="comment">// MDN</span>
    </li>
    <li>
      <a href="http://wikipedia.qwika.com/en2pt/Prototype-based_programming">
        Prototype-based Programming
      </a>
      <span class="comment">// Wikipedia</span>
    </li>
  </ul>
</aside>
