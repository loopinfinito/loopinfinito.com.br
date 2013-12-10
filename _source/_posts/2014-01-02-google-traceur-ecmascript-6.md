---
title: Google Traceur, ou <span>“Como usar ECMAScript 6 hoje”</span>
layout: post
author: Caio Gondim
author_link: http://twitter.com/caio_gondim
author_profile: https://plus.google.com/109656206006790732674/
image: images/posts/2014-01-02-traceur.jpg
tags: JavaScript
comments: false
keywords: >
  lorem, ipsum
resumo: >
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium,
  eligendi, odio, neque sapiente quae quos consectetur reiciendis similique iste
  iure nulla obcaecati odit! Perferendis, recusandae blanditiis harum dolorum
  aperiam reiciendis.
related:
  - title: Lorem
    url: http://loopinfinito.com.br
    from: Loop Infinito
---

Google Traceur é um compilador de ECMAScript 6 para o JavaScript de hoje. O seu
objetivo é tornar possível o uso de _features_ da linguagem que ainda não foram
implementadas na maioria dos _browsers_ e, até mesmo, outras que ainda estão
sendo discutidas.

Algumas das principais _features_ suportadas hoje em dia são:

### Classes

Implementa a especificação ainda em rascunho do ECMAScript 6 sobre classes.
Apenas suporta a implementação mínima, pois muito ainda está sendo discutido
sobre como de fato irá ser a especificação final.

{% highlight javascript %}
class Monstro extends Personagem {
  constructor(x, y, nome) {
    super(x, y);
    this.nome = nome;
    this.life_ = 100;
  }

  ataca(personagem) {
    super.attack(personagem);
  }

  get isVivo() { return this.life > 0; }
  get life() { return this.life_; }
  set life(valor) {
    if (valor < 0) throw new Error('Health must be non-negative.');
    this.life_ = valor;
  }
}
{% endhighlight %}

Reparem no código acima que temos alguns elementos comuns em linguagens
orientadas a objeto, como uma função construtora, herança, uma palavra reservada
para chamarmos a classe pai. Além disso, as definições dos métodos não necessitam
ser declarados com `function` como uma função normal e podemos também setar
métodos `get` e `set` para atributos que irão ser chamados quando passarmos um
novo valor para um atributo ou pedirmos seu valor atual.

### Modules

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, culpa,
excepturi itaque adipisci nam fuga velit veniam dolor delectus eius impedit
ipsum. Perferendis debitis commodi suscipit explicabo excepturi facilis soluta.

### Iterators e Loops `for of`

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, officia,
mollitia, earum quisquam vero eligendi officiis est sint nam ratione animi natus
amet quidem alias esse aspernatur debitis eaque sequi.

### Generators

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, perspiciatis,
animi, dolorem provident porro deleniti praesentium id ducimus veniam eaque
nesciunt suscipit fugiat eum accusamus quam sint quaerat modi eveniet.

### Deferred functions

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque,
consequatur, at, nostrum est enim sit suscipit iure aspernatur vero et sed saepe
asperiores blanditiis earum temporibus molestias iusto numquam itaque?

### Block scoped bindings

Aqui temos escopo a nível de bloco, e não mais apenas a nível de função e
global. Isto assegura que as variáveis não vazem de um escopo sem a necessidade
de usarmos
[funções de execução imediata](https://github.com/caiogondim/js-patterns-sublime-snippets#immediate-function)

{% highlight javascript %}
{
    const salario = 750,
    nome = 'n3rd',
    sobrenome = 'l33t'
};
// não é acessível fora do escopo do objeto onde foi definido
console.log(salario)
{% endhighlight %}

As palavras reservadas `const` e `let` são, até o momento, as únicas que possuem
esse comportamento de escopo em bloco.

### Parâmetros default

Tão óbvio que os novatos em JS nem conseguem acreditar que não existe um meio
de setarmos valores _default_ para em parâmetros. Finalmente agora é possível.

{% highlight javascript %}
function foo(a = 1, b = 2, c = 3) {
    // ...
}

foo(3); // a = 3, b = 2, c = 3
{% endhighlight %}

### Rest parameters

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, saepe,
ipsam, excepturi repudiandae ea unde reiciendis magnam qui nostrum earum
reprehenderit voluptas nisi facilis dolore quod provident cum obcaecati et.

### Spread operator

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, laudantium,
esse, rem reiciendis delectus quos eaque provident nihil blanditiis veniam nulla
sed asperiores facere autem enim mollitia debitis repellendus ad.

### Atalho para inicializador de objeto

Um ótimo atalho para, principalmente, funções construtoras. Evita o repetitivo
código `var x = x`.

{% highlight javascript %}
var obj = { x, y }
// um atalho para o código abaixo
var obj = { x: x, y: y }

function f(x, y) { return {x: x, y: y}; }
// o mesmo que o código abaixo
function f(x, y) { return {x, y}; }
{% endhighlight %}

### Property method assignment

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, fugit
molestiae quisquam eveniet doloribus commodi repellat veniam suscipit nostrum
quo voluptatum quae quam harum explicabo ab delectus sunt architecto. Maxime.

## Integrando no Grunt

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, quasi,
accusamus, deleniti, quis reiciendis quisquam vitae dolore totam qui incidunt ab
illo est eaque ea magnam amet facilis id ad.


