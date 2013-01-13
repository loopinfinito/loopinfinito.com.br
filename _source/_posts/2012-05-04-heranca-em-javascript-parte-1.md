---
title: Herança em JavaScript <span class="light">parte I</span>
layout: post
author: Caio Gondim
author_link: http://twitter.com/caio_gondim
author_profile: https://plus.google.com/109656206006790732674/
image: images/posts/2012-05-04-heranca-em-javascript.jpg
tags: javascript
comments: true
keywords: >
  javascript, js, web development, desenvolvimento web, html5, front-end,
  programação, oop, orientação a objetos, herança, orientação a protótipos, java
resumo: >
  Uma das coisas que mais assusta programadores vindos de linguagens orientadas
  a objeto, como Java e C++, é a falta de classes em JavaScript. Muitos,
  inclusive, tentam simular este comportamento no JavaScript, mas poucos
  conseguem com sucesso. Neste post numa série de 2, iremos relembrar o que é
  herança, a cadeia de protótipos e como era feito a herança em JavaScript.
---

Diferente das linguagens mais conhecidas, como Java ou C++ que utilizam a orientação a objetos clássica, JavaScript utiliza uma abordagem diferente para compartilhar código entre entidades, chamada de orientação a protótipo.
Mas antes de entrarmos em detalhes, vamos primeiro relembrar o que é a herança clássica nas linguagens orientadas a objetos.

## Herança clássica
Herança em OOP é a capacidade de classes __compartilharem__ atributos e métodos entre si. Geralmente a herança é usada para compartilhar comportamentos generalizados e comuns entres as classes filhas.

### Show me the code

Imaginem que temos que representar em nossa aplicação alguns animais, como gato e cachorro. Com herança podemos definir comportamentos comuns entre eles apenas uma vez, como respirar, nascer e morrer, e reutilizar estes métodos já implementados apenas os herdando nas classes filhas.

Vamos implementar o cenário acima em Java. Como desejamos representar gatos e cachorros, e sabemos que eles possuem métodos similares, como nascer, morrer e respirar, vamos criar uma classe Animal e implementar estes métodos nela, para que gatos e cachorros possam herdá-los.

{% highlight java %}
// setamos a classe como abstrata pois não desejamos criar
// objetos do tipo animal, apenas os tipos mais
// especializados como Gato ou Cachorro podem ser instânciados
public abstract class Animal {
  public void nascer() {
    ...
  }

  public void morrer() {
    ...
  }

  public void respirar() {
    ...
  }
}
{% endhighlight %}

Agora definimos as classes Gato e Cachorro, que irão herdar de Animal e implementar métodos que só fazem sentido em seu próprio escopo, como miar no caso de Gato e latir no caso de Cachorro.

{% highlight java %}
// além do método miar, os objetos do tipo Gato
// terão também, devido a herança, os métodos de Animal
class Gato extends Animal {
  public void miar() {
    ...
  }

  // construtor
  public Gato() {
    ...
  }
}

// com os objetos do tipo Cachorro acontece o mesmo
// além do método latir, definido explicitamente na classe
// ele irá herdar os métodos nascer, morrer e respirar
class Cachorro extends Animal {
  public void latir() {
    ..
  }

  // construtor
  public Cachorro() {
    ...
  }
}
{% endhighlight %}

Definimos a relação de herança com a palavra reservada <code>extends</code>. Com isso as classes Gato e Cachorro irão possuir, além de seus próprios métodos, os métodos herdados de Animal, como nascer, morrer e respirar.

Então fica claro que com herança conseguimos um enorme reuso de código. De outra forma, teríamos que redefinir métodos e atributos comuns em todas as classes, tornando a manutenção do código mais complexa e propensa a erros.

## Cadeia de protótipos

Em JavaScript (quase) tudo é um objeto, não existem classes. Até mesmo as <code>function</code> são objetos.
Se quisermos herdar os métodos e atributos de um objeto, o utilizamos como protótipo do novo objeto a ser criado.
Mesmo que não esteja definido explicitamente no código, todos os outros objetos de JavaScript, com a exceção do objeto <code>Object</code>, utilizam um outro objeto como protótipo.

Como no exemplo abaixo, definimos um objeto vazio, um array vazio e uma função.
Eles todos herdarão métodos e atributos de seus protótipos.

{% highlight javascript %}
// aqui criamos um novo objeto genérico com o nome carro
// ele automaticamente usará o prototipo de Object
var carro = {}
carro.modelo = 'Celta'
carro.marca = 'Chevrolet'
carro.hasOwnProperty('modelo') // método herdado de Object
Object.getPrototypeOf(carro) // retorna Object

// frutas herdará as propriedades de Array
var frutas = [ 'morango', 'manga', 'laranja' ]
frutas.reverse() // método herdado de Array
frutas.hasOwnProperty('length') // método herdado de Object
Object.getPrototypeOf(frutas) // retorna []
Object.getPrototypeOf(Object.getPrototypeOf(frutas)) // retorna Object

// validarCPF irá herdar propriedades de Function
function validarCPF() {
  ...
  return true
}
// aqui vemos uma função se comportando como um objeto
validarCPF.call() // método herdado de Function
Object.getPrototypeOf(validarCPF) // retorna function Empty() {}

{% endhighlight %}

É interessante notar que a herança ocorre em __toda__ a cadeia de protótipos. Como quando definimos um array: ele herda todas as propriedades de Array e de Object, uma vez que Array usa Object como protótipo.
Podemos verificar isso chamando o protótipo do protótipo de frutas. O protótipo de frutas é Array, e o protótipo de Array é Object ou, o protótipo do protótipo de frutas é Object.

Quando chamamos a propriedade de um objeto, o interpretador/VM JavaScript primeiro procura esta propriedade dentro do objeto, caso não encontre procura em seu protótipo, caso não encontre novamente procura no protótipo do protótipo, e assim sucessivamente, percorrendo toda a cadeia de protótipos até alcançar um protótipo com valor <code>null</code>.

## Herança em JavaScript com construtores

O método mais difundido e crossbrowser de criação de objetos e herança em JavaScript é através de funções que funcionam como construtores. Nesse método, definimos funções que irão se comportar como construtores em linguagens clássicas orientadas a objeto. Depois de definida a função, podemos instanciar objetos do tipo definido usando <code>new</code>.

Em JavaScript, uma função também é um objeto, e ela possui a propriedade <code>prototype</code>.
Nesta propriedade definimos o prototipo da função, ou todas as propriedades que os objetos deste tipo irão ter se invocarmos <code>new</code>.

Ok, pode parecer complicado falando, mas fica bem fácil olhando o código.

{% highlight javascript %}
// criamos o construtor Animal
function Animal() {
}
Animal.prototype.nascer = function() {
  ...
}
Animal.prototype.morrer = function() {
  ...
}
Animal.prototype.respirar = function() {
  ...
}
{% endhighlight %}

Agora definimos Gato e Cachorro, e usamos Animal como protótipo.

{% highlight javascript %}
// criamos o construtor Gato
function Gato(nome) {
  this.nome = nome
}
Gato.prototype = new Animal() // definimos que Gato usa Animal como protótipo
Gato.prototype.constructor = Gato // para que não fique com o valor do construtor do objeto usado como protótipo
Gato.prototype.miar = function() { // método miar apenas para Gato
  ...
}

// criamos o construtor Cachorro
function Cachorro(nome) {
  this.nome = nome
}
Cachorro.prototype = new Animal() // definimos que Cachorro usa Animal como protótipo
Cachorro.prototype.constructor = Cachorro()
Cachorro.prototype.latir = function() {
  ...
}

var rex = new Cachorro('rex') // criamos um objeto do tipo Cachorro
rex.latir() // utilizando um método definido em Cachorro
rex.respirar() // utilizando um método herdado de Animal
rex.nome // retorna 'rex'
{% endhighlight %}

Precisamos criar um novo objeto do tipo Animal para setarmos como protótipo, pois caso contrário estariamos passando a referência para a função.

A propriedade <code>constructor</code> nos informa o construtor do objeto. Nós precisamos defini-la manualmente pois esta proprieda existe no objeto Animal que passamos por protótipo, então todos os objetos de Cachorro e Gato irão herdar a propriedade construtor com o setado valor como Animal. Esta propriedade pode ser útil caso seja preciso chamar um método de um dos objetos na cadeia de protótipos.

Podemos verificar que rex é de fato um cachorro perguntado se ele é uma instância de Cachorro.

{% highlight javascript %}
rex instanceof Cachorro // retorna true
rex instanceof Animal // retorn true. Cachorro.prototype --> Animal
rex instanceof Object // retorna true. Cachorro.prototype --> Animal.prototype --> Object
rex instanceof Array // retorna false
{% endhighlight %}

Interessante notar que rex também é uma instância de Animal, já que Cachorro usa Animal como protótipo. E também é instância de Object, já que Animal usa, implicitamente, Object como protótipo.

Por ser uma linguagem orientada a protótipos, nós podemos definir um novo ao método ao protótipo e todos os objetos já instanciados irão ter acesso a este método criado, o que é impossível de ser feito em linguagens como Java (me corrijam se estiver falando besteira).

{% highlight javascript %}
Cachorro.prototype.morder = function() {
  ...
}
rex.morder() // rex mesmo depois de instanciado terá acesso aos novos métodos definidos no protótipo de Cachorro
{% endhighlight %}

Um dos perigos dessa abordagem é que caso se esqueça de usar <code>new</code>, o <code>this</code> dentro da <code>function</code> irá se referenciar ao objeto global, e poderá sobreescrever algumas variáveis já declaradas antes.

Eu particularmente não sou a favor do uso do <code>new</code> pois ele torna ambíguo o uso de funções.
Pois algumas funcionam como construtores e outras como funções normais. E sintaticamente o <code>new</code> pode ser usado em qualquer tipo de função.

### Continua...

Este é o método padrão de herança em JavaScript.
Grande parte desta bagunça é devido ao JavaScript ter sido lançado __muito__ às pressas.
Porém o ECMAscript, o grupo que padroniza o JavaScript, vem adicionado várias funções para tornar o trabalho com herança mais simples e finalmente abraçando a orientação a protótipo.

E é sobre este novo método de trabalhar com herança no ECMAscript 5 que iremos discutir na 2ª parte do post.

<aside class="fonte">
  <h3>Referência</h3>
  <ul>
    <li>
      <a href="https://developer.mozilla.org/en/JavaScript/Guide/Inheritance_and_the_prototype_chain">
        Mozilla Developer Network: Inheritance and the Prototype Chain
      </a>
    </li>
    <li><a href="http://stackoverflow.com/questions/2709612/using-object-create-instead-of-new">StackOverflow: Using Object.create() instead of new</a></li>
    <li><a href="http://joost.zeekat.nl/constructors-considered-mildly-confusing.html">code.h(oe)kje: Constructors considered mildly confusing</a></li>
  </ul>
</aside>