---
title: Uma xícara de <span>CoffeeScript</span>
layout: post
author: Almir Filho
author_link: http://twitter.com/almirfilho
resumo: CoffeeScript é uma linda linguagem que traz o que há de melhor (sintaticamente falando) em outras linguagens como Python e Ruby, e pra completar, também é compilável para JavaScript.
image: images/posts/2012-09-18-coffeescript.jpg
tags: coffeescript javascript
keywords: coffeescript, javascript, documentacao, script, ruby, python, string, interpolacao, classe, class, list, compreenshion, compreensao, lista, prototype
comments: true
---

Programador tem fama de gostar de café. Se você pertence a este distinto
grupo e também gosta de JavaScript, então provavelmente gostará de
**CoffeeScript**.

CoffeeScript é uma linda linguagem que traz o que há de melhor (sintaticamente
falando) em outras linguagens como Python e Ruby, e pra completar, também
é compilável para JavaScript.

O objetivo deste post é apenas apresentar uma breve introdução da linguagem
e suas principais vantagens. Para uma completa referência de CoffeeScript –
inclusive instruções de instalação –, recomendo que visite a documentação oficial, que
recentemente traduzimos para o português:
[coffeescript.com.br](http://coffeescript.com.br "CoffeeScript BR").

## Curiosidades

- É a 11ª liguagem mais usada no GitHub no momento. Ultrapassou C# recentemente. [GitHub Languages](https://github.com/languages/CoffeeScript)
- O GitHub usa CoffeeScript em suas aplicações. [GitHub Styleguide](https://github.com/styleguide/javascript)
- É a linguagem de *front-end* padrão do Ruby on Rails.
- O Dropbox recentemente [reescreveu todo o seu *front-end* em CoffeeScript](https://tech.dropbox.com/?p=361 "Dropbox dives into CoffeeScript"), tendo uma economia de mais de **5000 linhas** de código.

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
recurso super útil no estilo de Ruby, usando `#{}` dentro da *string*:

{% highlight coffeescript %}
numero = 42
string = "O número #{ numero } dividido por 3 é #{ numero / 3 }."
{% endhighlight %}

Em JavaScript, precisaríamos realizar a concatenação de *strings*:

{% highlight javascript %}
var numero, string;
numero = 42;
string = "O número " + numero + " dividido por 3 é " + (numero / 3) + ".";
{% endhighlight %}

## Intervalos

Os intervalos (*ranges*) são expressões que retornam *arrays* com números
sequenciais. Podemos utilizar intervalos para fazer iterações e fatiar (*slice*)
*arrays*:

{% highlight coffeescript %}
# definindo intervalos
sequenciaCrescente   = [0..10] # com .. inclui o último índice
sequenciaDecrescente = [7...3] # com ... exclui o último índice

bebidas = [ 'jack daniel’s', 'heineken', 'stella artois', 'martini', 'smirnoff ice' ]

# fatiamento de array
bebidasDeMacho  = bebidas[0..1]
bebidasDeMenina = bebidas[2..4]
{% endhighlight %}

O *script* acima gera a seguinte saída em JavaScript:

{% highlight javascript %}
var sequencia, bebidas, bebidasDeMacho, bebidasDeMenina;

sequenciaCrescente   = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
sequenciaDecrescente = [7, 6, 5, 4];

bebidas = [ 'jack daniel’s', 'heineken', 'stella artois', 'martini', 'smirnoff ice' ];

bebidasDeMacho  = bebidas.slice(0, 2);
bebidasDeMenina = bebidas.slice(2, 5);
{% endhighlight %}

## Compreensões de lista

Outra coisa trazida de Python, compreensões de lista são uma mão na roda.
São expressões que executam determinadas ações em *arrays*, objetos e intervalos,
e ainda retornam valores.
Por exemplo, vamos percorrer um objeto e retornar *strings*:

{% highlight coffeescript %}
nirvana =
    vocalista: 'Kurt Cobain'
    baixista: 'Krist Novoselic'
    baterista: 'Dave Grohl'

# iterando sobre chaves/valores do objeto
funcoes = for funcao, integrante of nirvana
    "#{integrante} é #{funcao}"
{% endhighlight %}

Perceba a diferença (quantidade de linhas e legibilidade) entre essas últimas 2
linhas do código acima e as 9 últimas linhas de JavaScript geradas abaixo:

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

Para fazer um `for` clássico, simplesmente utilizamos os <a href="#intervalos">intervalos</a>. Podemos basicamente
fazer de duas maneiras:

{% highlight coffeescript %}
# forma mais clássica
for numero in [0...5]
    console.log numero

# forma mais elegante
console.log numero for numero in [0...5]
{% endhighlight %}

## Operador existencial

Verificar a existência de variáveis em JavaScript é um pouco chato, pois precisa-se
efetuar 2 testes. CoffeeScript tem um operador `?` que torna essa tarefa
muito simples:

{% highlight coffeescript %}
rockBand = true if guitarra? and not sertanejoUniversitario?
{% endhighlight %}

`rockBand` será verdadeiro se existir `guitarra` e se não existir `sertanejoUniversitario`.
A seguir, o JavaScript equivalente:

{% highlight javascript %}
var rockBand;

if ((typeof guitarra !== "undefined" && guitarra !== null) && !(typeof sertanejoUniversitario !== "undefined" && sertanejoUniversitario !== null)) {
    rockBand = true;
}
{% endhighlight %}

## Classes

Taí uma coisa que qualquer programador OO sente bastante falta em JavaScript: declarações de
classes de maneira mais clara. Isso ocorre porque JavaScript é uma linguagem orientada a
protótipos, e trabalhar com prototipação e herança prototipada é um pouco confuso pra quem
vem da orientação à objetos. CoffeeScript oferece uma maneira simples de definição de classes
e herança, inclusive com construtores mais simples.

{% highlight coffeescript %}
class Animal
  constructor: (@nome) ->

  mover: (metros) ->
    alert @nome + " moveu-se #{metros}m."

class Cachorro extends Animal
  mover: ->
    alert "Au au!"
    super 5

class Gato extends Animal
  mover: ->
    alert "Miau!"
    super 45

toto = new Cachorro "Totó, o cachorro"
tom  = new Gato "Tom, o gato"

toto.mover()
tom.mover()
{% endhighlight %}

Quer adicionar propriedades ou métodos à sua classe (protótipo) em tempo de execução?

{% highlight coffeescript %}
Animal::morrer = ->
  alert "#{@nome} morreu =("
{% endhighlight %}

Eu poderia continuar falando das **N** coisas legais de CoffeeScript – como herança,
funções, *splats*, atribuições de troca, *switchs*, comparações em cadeia,
etc –, mas simplesmente não há necessidade, visto que temos um ótimo e completo guia da
linguagem aqui: [coffeescript.com.br](http://coffeescript.com.br "CoffeeScript BR").

## Por enquanto é isso

<figure>
    <img src="/images/posts/2012-09-18-haters-gonna-hate.jpg" width="700" height="200" alt="Haters Gonna Hate" title="Haters Gonna Hate" />
</figure>

CoffeeScript é um assunto muito polêmico. Eis um [link que achei bem engraçado](https://github.com/rails/rails/compare/9333ca7...23aa7da),
trata-se da discussão sobre o *commit* que adiciona o CoffeeScript como padrão no Ruby on Rails.
Salientando que esse foi um dos *commits* mais polêmicos da **história do GitHub**.
Vale dar uma olhada, os nerds se atracaram num grande bate boca com imagens bastante divertidas.

<aside class="fonte">
    <h3>Referência</h3>
    <ul>
        <li>→<a href="http://coffeescript.com.br" alt="CoffeeScript em português" title="CoffeeScript em português">CoffeeScript: documentação em português</a></li>
        <li>→<a href="http://coffeescript.org" alt="CoffeeScript" title="CoffeeScript">CoffeeScript: documentação em inglês</a></li>
    </ul>
</aside>