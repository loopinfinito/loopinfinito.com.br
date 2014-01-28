---
title: Google Traceur, ou <span>“Como usar ECMAScript 6 hoje”</span>
layout: post
author: Caio Gondim
author_link: http://twitter.com/caio_gondim
author_profile: https://plus.google.com/109656206006790732674/
image: images/posts/2014-01-28-traceur.jpg
tags: JavaScript
comments: true
keywords: >
  javascript, js, google traceur, ecmascript 6, grunt, gulp, classes,
  orientação a objetos, oop, programação orientada a objetos, escopo,
  parâmetros
resumo: >
  Google Traceur é um compilador de ECMAScript 6 para o JavaScript de hoje. O
  seu objetivo é tornar possível o uso de _features_ da linguagem que ainda não
  foram implementadas na maioria dos _browsers_ e, até mesmo, outras que ainda
  estão sendo discutidas.
related:
  - title: Google Traceur compiler
    url: https://github.com/google/traceur-compiler
    from: GitHub
  - title: Google Traceur REPL
    url: http://google.github.io/traceur-compiler/demo/repl.html
    from: GitHub
  - title: grunt-traceur
    url: https://npmjs.org/package/grunt-traceur
    from: npm
  - title: ECMAScript Harmony Wiki
    url: http://wiki.ecmascript.org/doku.php?id=harmony:harmony
    from: ecmascript.org
---

Google Traceur é um compilador de ECMAScript 6 para o JavaScript de hoje. O seu
objetivo é tornar possível o uso de _features_ da linguagem que ainda não foram
implementadas na maioria dos _browsers_ e, até mesmo, outras que ainda estão
sendo discutidas.

Além de tornar possível o teste de _features_ da especificação do ECMAScript 6,
um dos intuitos do projeto é fazer com que a comunidade participe de forma mais
ativa no futuro do JavaScript, fazendo com que os desenvolvedores usem e testem
hoje o que poderá vir a ser o futuro da linguagem e, assim, opinar e
influenciar na nova especificação antes que esta se dê por **fechada**.

Algumas das principais _features_ suportadas hoje em dia são:


### Classes

Implementa a especificação ainda em rascunho do ECMAScript 6 sobre classes.
Apenas suporta a implementação mínima, pois muito ainda está sendo discutido
sobre como de fato irá ser a especificação final.

{% highlight javascript %}
class Monstro extends Personagem {
  constructor(x, y, nome) {
    super(x, y)
    this.nome = nome
    this.life_ = 100
  }

  ataca(personagem) {
    super.attack(personagem)
  }

  get isVivo() { return this.life_ > 0 }
  get life() { return this.life_ }
  set life(valor) {
    if (valor < 0) {
      throw new Error('Life não pode ser negativo.')
    }

    this.life_ = valor
  }
}
{% endhighlight %}

Reparem no código acima que temos alguns elementos comuns em linguagens
orientadas a objeto como: uma função construtora, herança e uma palavra
reservada para chamarmos a classe pai. Além disso, as definições dos métodos não
necessitam ser declarados com `function` como uma função normal e podemos também
definir métodos `get` e `set` para atributos que irão ser chamados quando
passarmos um novo valor para um atributo ou pedirmos seu valor atual.


### Destructuring Assignment

Um atalho para inicializar ou definir várias variáveis de uma só vez.

{% highlight javascript %}
var ponto = {x: 1, y: 2}
var retangulo = {topLeft: {x: 3, y: 4}, bottomRight: {x: 5, y: 6}}

var {x, y} = ponto // descompacta o ponto
console.log(x, y) // imprime 1 2

// descompacta o retângulo
var {topLeft: {x: x1, y: y1}, bottomRight: {x: x2, y: y2}} = retangulo
console.log(x1, y1, x2, y2) // imprime 3 4 5 6
{% endhighlight %}


### Block scoped bindings

Aqui temos escopo a nível de bloco, e não mais apenas a nível de função e
global. Isto assegura que as variáveis não vazem de um escopo sem a necessidade
de usarmos
[funções de execução imediata](https://github.com/caiogondim/js-patterns-sublime-snippets#immediate-function).

{% highlight javascript %}
{
  const salario = 750,
  nome = 'n3rd',
  sobrenome = 'l33t'
}
// não é acessível fora do escopo do objeto onde foi definido
console.log(salario)
{% endhighlight %}

As palavras reservadas `const` e `let` são, até o momento, as únicas que possuem
esse comportamento de escopo em bloco.

### Parâmetros default

Tão óbvio que os novatos em JS nem conseguem acreditar que não existe um meio
de definirmos valores _default_ para parâmetros. Finalmente agora é possível.

{% highlight javascript %}
function foo(a = 1, b = 2, c = 3) {
  // ...
}

foo(3) // a = 3, b = 2, c = 3
{% endhighlight %}

### Rest parameters

Permite que funções tenham um número variável de parâmetros sem a necessidade
do uso do objeto `arguments`.

{% highlight javascript %}
var ouro = prata = restante = 'desconhecido'

function concedeMedalha(primeiro, segundo, ...outros) {
  ouro = primeiro
  prata = segundo
  restante = outros
}

concedeMedalha('Michael Phelps', 'Liu Xiang', 'Yao Ming', 'Allyson Felix')

console.log(ouro) // imprime “Michael Phelps”
console.log(prata) // imprime “Liu Xiang”
console.log(restante.join(', ')) // imprime o “Yao Ming, Allyson Felix”
{% endhighlight %}


### Spread operator

O _spread operator_ é como o inverso do _rest parameters_.
Ele expande um _array_ em em argumentos formais.
Continuando com o exemplo acima, imaginem que agora, no lugar de passarmos um
a um os competidores para a função `concedeMedalha`, pudessemos passar um
_array_ e cada posição desse _array_ ser interpretado como um argumento.

{% highlight javascript %}
var ouro = prata = restante = 'desconhecido'

function concedeMedalha(primeiro, segundo, ...outros) {
  ouro = primeiro
  prata = segundo
  restante = outros
}

var competidores = [
  'Michael Phelps',
  'Liu Xiang',
  'Yao Ming',
  'Allyson Felix'
]

concedeMedalha(...competidores)

console.log(ouro) // imprime “Michael Phelps”
console.log(prata) // imprime “Liu Xiang”
console.log(restante.join(', ')) // imprime o “Yao Ming, Allyson Felix”
{% endhighlight %}


### Atalho para inicializar objeto

Evita o repetitivo código `{x: x, y: y, z: z}` quando estamos definindo um
objeto cujo a chave possui o valor da variável de mesmo nome.

{% highlight javascript %}
var obj = {x, y}
// um atalho para o código acima
var obj = {x: x, y: y}

function f(x, y) { return {x: x, y: y} }
// o mesmo que o código acima
function f(x, y) { return {x, y} }
{% endhighlight %}

Reparem que na primeira linha do trecho de código acima, inicializamos a
variável `obj` com o valor `{x, y}`, o que é sintaticamente errado no
ECMAScript 3. O que este “atalho” faz é _setar_ um objeto com chave `x` com o
valor da variável `x`. Falando em JS, ele evita que você digite repetidamente
este trecho: `var obj = {x: x, y: y}`, dando um atalho para tal, desta forma:
`var obj = {x, y}`. Dificil de explicar, mas fácil de entender. Tenta
acompanhar esse outro exemplo.

{% highlight javascript %}
var nome = "Joao"
var sobrenome = "Silva"

var pessoa = {nome, sobrenome} // o mesmo que `var pessoa = {nome: nome, sobrenome: sobrenome}`
{% endhighlight %}


### Property method assignment

Permite que métodos de objetos sejam definidos de uma maneira mais clara.
Reparem que, abaixo, definimos os métodos `bunizar` e `ligar` sem usar
a palavra-reservada `function`.

{% highlight javascript %}
var carro = {
  nome: 'Lorem',
  marca: 'Ipsum',
  buzinar() {
    // ...
  },
  ligar() {
    // ...
  }
}
{% endhighlight %}

Isto é, até o momento, o que o Google Traceur suporta sobre
_Property method assignment_. Porém a
[especificação](http://wiki.ecmascript.org/doku.php?id=harmony:concise_object_literal_extensions#methods)
abrange mais detalhes.


### E mais...

Existem mais algumas _features_ que o o Google Traceur suporta, como
[promises](https://github.com/google/traceur-compiler/wiki/LanguageFeatures#promises),
[iterators](https://github.com/google/traceur-compiler/wiki/LanguageFeatures#iterators-and-for-of-loops),
[generatos](https://github.com/google/traceur-compiler/wiki/LanguageFeatures#generators)
e outros. Optei por abranger as mais consolidadas na especificação e de mais
fácil entendimento, caso contrário este _post_ iria virar uma bíblia.
A quem quiser descer na toca do coelho, aconselho a
[Wiki do projeto](https://github.com/google/traceur-compiler/wiki/LanguageFeatures)
e, claro, a própria
[especificação do ECMAScript 6](http://wiki.ecmascript.org/doku.php?id=harmony:harmony).


## Integrando no Grunt

<figure>
  <img
    src="/images/posts/2014-01-28-grunt.jpg"
    alt="Pixel Referência"
    width="700"
    height="300"
  />
</figure>

E como já dizia Steve Jobs: “There is a Grunt task for that!”. Integrar o
processo de tradução/compilação/transpilação de ECMAScript 6 para o JS de hoje
fica fácil com o Grunt. Vamos usar o pacote **grunt-traceur** para tal.

No terminal, entre na pasta do seu projeto e vamos instalar todos os pacotes
necessários. Primeiro vamos instalar o Grunt e, logo em seguida, o grunt-
traceur.

{% highlight bash %}
npm install -g grunt-cli
npm install grunt --save-dev
npm install grunt-traceur --save-dev
{% endhighlight %}

Algumas considerações sobre os comandos usados acima: a _flag_&nbsp;`-g` usada para
instalar o Grunt é para que o **grunt-cli** seja instalado de forma global, que
é um passo necessário para usar o grunt no terminal sem informamos o `PATH` do
seu executável; a _flag_&nbsp;`--save-dev` para que as dependências sejam
automaticamente inseridas no seu arquivo **package.json**.

Com Grunt e grunt-traceur instalados, agora podemos configurar nosso Gruntfile.
Crie um arquivo chamado **Gruntfile.js** (ou Gruntfile.coffee) na raíz do seu
projeto. Abaixo um exemplo de um Gruntfile.js completo. Caso você já possua um,
extraia apenas as partes relacionadas ao grunt-traceur.

{% highlight javascript %}
module.exports = function (grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-traceur')

  var gruntConfig = {}

  gruntConfig.traceur = {
    options: {
      blockBinding: true // habilita `let` e `const`
    },
    custom: {
      files: {
        'static/app.js': [
          'assets/character.js',
          'assets/monster.js',
          'assets/main.js'
        ]
      }
    }
  }

  grunt.initConfig(gruntConfig)
}
{% endhighlight %}

No objeto `files` passamos como chave o arquivo de _output_ e como valor um
_array_ com todos os arquivos que serão compilados, em ordem. No exemplo acima,
os arquivos `assets/character.js`, `assets/monster.js` e `assets/main.js` serão
todos compilados e concatenados no arquivo `static/app.js`.

Agora basta rodar no seu terminal o comando `grunt traceur` toda vez que você
modificar seus arquivos JavaScript.

Mas isso obviamente vai ficar muito chato depois da terceira vez que você tiver
que mudar para o terminal e digitar manualmente `grunt traceur`. Para deixar
esse processo de _build_ mais automatizado: “There is a Grunt task for that”.

Vamos usar a _task_ watch do Grunt para que toda vez que modificarmos os
arquivos JS escritos em ECMAScript 6, eles sejam compilados para o JavaScript de
hoje.

Para instalar o pacote **grunt-watch** digite no seu terminal o comando abaixo:

{% highlight bash %}
npm install grunt-watch --save-dev
{% endhighlight %}

E agora vamos configurar a _task_. Vamos adicionar um objeto `watch` ao nosso
objeto de configuração do Grunt.

{% highlight javascript %}
grunt.loadNpmTasks('grunt-watch')

gruntConfig.watch = {
  traceur: {
    files: ['./caminho/para/arquivos/ecmascript6/*.js'],
    tasks: ['traceur']
  }
}
{% endhighlight %}

Com isso, basta rodarmos no terminal o comando `grunt watch:traceur` e, toda vez
que um arquivo for modificado, ele será traduzido/compilado/transpilado para
o JavaScript compatível hoje na maioria dos _browsers_.


## Integrando no Gulp

<figure>
  <img
    src="/images/posts/2014-01-28-gulp.png"
    alt="Gulp"
    width="700"
    height="300"
  />
</figure>

E se você, JS hipster, acha o Grunt uma ferramenta muito _mainstream_, não se
preocupe: também existe um módulo para Gulp. Ele foi escrito pelo
[@sindresorhus](https://github.com/sindresorhus/) e você pode ver mais detalhes
do pacote na
[página do projeto no GitHub](https://github.com/sindresorhus/gulp-traceur).

Instruções para instalar? Se você usar o Gulp com certeza não precisa de
instruções para instalar. Você lê o código diretamente, não é isso?
