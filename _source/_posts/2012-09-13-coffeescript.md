---
title: Um pouco de <span>CoffeeScript</span>
layout: post
author: Almir Filho
author_link: http://twitter.com/almirfilho
resumo: teste
image: images/posts/2012-09-13-coffeescript.jpg
tags:
keywords:
comments: false
---

Programador tem fama de gostar de café. Se você pertence a este distinto
grupo e também gosta de JavaScript, então provavelmente gostará de
CoffeeScript também.

CoffeeScript é uma linda linguagem que traz o que há de melhor (sintaticamente
falando) em outras linguagens como Python e Ruby, e pra completar, também
é compilável para JavaScript.

O objetivo deste post é apenas apresentar uma breve introdução da linguagem
e suas principais vantagens. Para uma completa referência de CoffeeScript,
recomendo que visite a documentação oficial, que recentemente traduzimos para
o português: [coffeescript.com.br](http://coffeescript.com.br "CoffeeScript BR").

## Adeus ; e {}'s

Quem programa em Python ou Ruby, acaba detestando esse papo de ter que usar
`;` ao final das linhas. Outra coisa que também é chata – e sintaticamente
feia – é usar `{}` para delimitar blocos de comando, nesse caso, CoffeeScript
apenas considera a indentação do código (assim como em Python).

### Objetos

Para definir um simples objeto, até o uso de `,` é opcional:

{% highlight coffeescript %}
bandas =
    rock:
        nome: 'Creedence Clearwater Revival'
        ano: 1967
    funk:
        nome: James Brown
        ano: 1956
{% endhighlight %}

Mas se você quiser declarar tudo em uma única linha, deve-se utilizar `,`
normalmente. O JavaScript equivalente ao código acima é:

{% highlight javascript %}
bandas = {
    rock: {
        nome: 'Creedence Clearwater Revival',
        ano: 1967
    },
    funk: {
        nome: James Brown,
        ano: 1956
    }
};
{% endhighlight %}

## Interpolação de strings

JavaScript não tem interpolação de strings, então CoffeeScript nos traz esse
rescurso super útil no estilo de Ruby:

{% highlight coffeescript %}
numero = 42
string = "O número #{ numero } dividido por 3 é #{ numero / 3 }."
{% endhighlight %}

Em JS, precisamos realizar a concatenação de strings:

{% highlight javascript %}
numero = 42
string = "O número " + numero + " dividido por 3 é " + (numero / 3) + ".";
{% endhighlight %}

## Intervalos

Os intervalos (ranges) são expressões que retornam arrays com números
sequenciais. Podemos utilizar intervalos para fazer iterações e fatiar
arrays:

{% highlight coffeescript %}
sequenciaCrescente   = [0..10] # com .. inclui o último índice
sequenciaDecrescente = [7...3] # com ... exclui o último índice

bebidas = [ 'jack daniel’s', 'heineken', 'stella artois', 'martini', 'smirnoff ice' ]

bebidasDeMacho  = bebidas[0..1]
bebidasDeMenina = bebidas[2..4]
{% endhighlight %}

fsfdsfsd

{% highlight javascript %}
var sequencia, bebidas, bebidasDeMacho, bebidasDeMenina;

sequenciaCrescente   = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
sequenciaDecrescente = [7, 6, 5, 4]

bebidas = [ 'jack daniel’s', 'heineken', 'stella artois', 'martini', 'smirnoff ice' ]

bebidasDeMacho  = bebidas.slice(0, 2)
bebidasDeMenina = bebidas.slice(2, 5)
{% endhighlight %}

asdasdasd

## Compreensões de lista

Outra coisa trazida de Python, compreensões de lista são uma mão na roda.
São expressões que executam determinadas ações em arrays, objetos e intervalos,
e ainda retornam valores.
Por exemplo, vamos percorrer um objeto e retornar strings:

{% highlight coffeescript %}
nirvana =
    vocalista: 'Kurt Cobain'
    baixista: 'Krist Novoselic'
    baterista: 'Dave Grohl'

funcoes = for funcao, integrante of nirvana
    "#{integrante} é #{funcao}"
{% endhighlight %}

Perceba a diferença (quantidade de linhas e legibilidade) entre essas útimas 2
linhas do código acima e as 9 linhas de JavaScript geradas no script abaixo:

{% highlight javascript %}
var funcao, funcoes, integrante, nirvana;

nirvana = {
    vocalista: 'Kurt Cobain',
    baixista: 'Krist Novoselic',
    baterista: 'Dave Grohl'
};

funcoes = (function() {
    var _results;
    _results = [];
    for (funcao in nirvana) {
      age = yearsOld[funcao];
      _results.push("" + integrante + " é " + funcao);
    }
    return _results;
})();
{% endhighlight %}

## Operador existencial

Verificar a exitência de variáveis em JS é um pouco chato, pois precisa-se
efetuar 2 testes. CoffeeScript tem um operador `?` que torna essa tarefa
muito simples:

{% highlight coffeescript %}
rockBand = true if guitar? and not sertanejoUniversitario?
{% endhighlight %}

dasdasd

{% highlight javascript %}
var rockBand;

if ((typeof guitar !== "undefined" && guitar !== null) && !(typeof sertanejoUniversitario !== "undefined" && sertanejoUniversitario !== null)) {
    rockBand = true;
}
{% endhighlight %}

dasdasdasds