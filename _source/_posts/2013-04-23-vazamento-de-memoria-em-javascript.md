---
title: Vazamento de memória <span class="light">em JavaScript</span>
layout: post
author: Caio Gondim
author_link: http://twitter.com/caio_gondim
author_profile: https://plus.google.com/109656206006790732674/
image: images/posts/2013-04-23-vazamento-de-memoria-em-javascript.jpg
tags: javascript
comments: false
keywords: >
  javascript, js, vazamento de memória, memory leak, alocação de memória,
  garbage collector, coletor de lixo, mark and sweep
resumo: >
  Isso não é um problema apenas de linguagens baixo nível como C ou Objective-C.
  Também há vazamento de memória em JavaScript. Neste post vamos entender
  como funciona o mecanismo de liberação automática de memória e como evitar
  _memory leaks_ para que nossa aplicação não se torne uma devorada de memória _RAM_.
---

Acredito que a maioria das pessoas não saiba que é possível termos vazamento de
memória em JavaScript. Afinal, nós não alocamos explicitamente memória como em
linguagens de baixo nível como C, C++ ou Objective-C. Então, se nós não somos
responsáveis por essa alocação de memória, se houver um _leak_ a culpa será da
linguagem, e não do programador.

Certo?

__Errado__.

É importante sabermos como a liberação automática de memória funciona
para evitarmos alguns casos específicos onde a memória pode nunca ser liberada.
Mas antes de falarmos sobre vazamento de memória vamos
utilizar a técnica [Jack Estripador](http://pt.wikipedia.org/wiki/Jack,_o_Estripador)
e dividir o problema em partes.
Primeiro vamos entender um pouco do ciclo de vida da memória, depois como funciona a
liberação automática de memória no JavaScript para, só então, sairmos da teoria
e vermos um experimento.

## Ciclo de vida da memória

O ciclo de vida da memória é praticamente o mesmo não importando a linguagem.
Ele se dá em 3 passos:

- Alocação
- Uso
- Liberação

Nós __alocamos__ memória quando declaramos uma variável, declaramos uma função,
aumentamos o tamanho de nosso _array_, etc. Nós __usamos__ aquele trecho de
memória quando acessamos ou escrevemos algo nele. E nós devemos __liberar__ memória
para dar espaço para futuras alocações pois, caso contrário, iriamos consumir
rapidamente toda a memória do computador.

Esses dois primeiros passos acontecem de forma __explícita__ em todas as
linguagens, ou seja, o programador que define quando (não como) a memória será
alocada e usada. Já o terceiro passo é __explícito__ apenas em linguagens de __baixo
nível__, onde o programador tem que fazer todo o trabalho de sempre liberar
memória que não está mais sendo usada. E __implícito__ em linguagens de __alto nível__
como JavaScript, Ruby e Python, onde a própria linguagem cuidará disso.

## Garbage Collection

Como foi dito, a liberação de memória no JavaScript é feita de forma __implícita__
(automática, transparente). E esta mágica é chamada de _garbage collection_, ou
coleta de lixo.
Existem algumas maneiras dferentes de se implementar um coletor de lixo, mas
hoje todos os grandes navegadores utilizam um algoritmo (heurística) chamado de
_Mark and Sweep_ para marcar trechos de memória que não estão mais sendo
utilizados. Em outras palavras, ele que diz o que é e o que não é lixo para que
o coletor recolha.

### _Mark and Sweep_

Descendo um pouco mais na toca do coelho, vamos entender como funciona o _Mark
and Sweep_. Na primeira etapa, ele sai varrendo todos os objetos alocados em
memória. A varredura é iniciada pelos objetos raízes, que no caso do JavaScript
no _browser_ é o objeto `window`. A partir dele, ele sai visitando todos os
objetos a que `window` faz referência. E depois todos os objetos que os objetos
referenciados por `window` fazem referência, e assim por diante.
No final desta varredura, todos os objetos que __não foram visitados__ são marcados
como lixo e o no próximo evento de _garbage collection_ essa memória será
liberada.

Na animação abaixo temos um exemplo do algoritmo _Mark and Sweep_ fazendo a
varredura, marcando um objeto como lixo (o círculo laranja) e desse objeto sendo
recolhido pelo _Garbage Collector_.

<figure>
  <img src="/images/posts/2013-04-23-mark-and-sweep.gif"
      title="Mark and Sweep" alt="Mark and Sweep" />
</figure>

## Exemplo de vazamento

Acredito que a melhor forma de aprender é sempre pondo em prática o que se aprende.
Pra isso fiz um experimento pra que fique mais fácil de mostrar um _memory leak_
e como detectar. Ele está no [Github](http://caiogondim.github.io/vazamento-memoria-js-experimento/)
e eu aconselho que vocês tentem repetir os passos que vamos fazer para ver na real
como detectar um vazamento de memória.

### O experimento

O experimento é uma aplicação onde temos várias fotos em miniatura e quando
clicamos em uma das miniaturas, podemos vê-la em um tamanho maior. O _GIF_ tosco
abaixo vai ajudar a explicar o experimento a quem ainda não clicou no link do
[Github](http://caiogondim.github.io/vazamento-memoria-js-experimento/).

<figure>
  <img src="/images/posts/2013-04-23-vazamento-memoria-js-experimento.gif"
      title="Experimento" alt="Experimento" />
</figure>

Vamos focar apenas nesta parte do código, pois é aqui que a mágica acontece.

{% highlight javascript %}
$('.miniatura').on('click', function(event) {
  var img = $('<img />')
    .addClass('lightbox')
    .attr('src', $(this).attr('src'))
    .on('click', function(event) {
      $(this).remove()
    })
    .appendTo('body')

  $(window).on('resize', function() {
    resizeImg(img)
  })
})

function resizeImg(img) {
  console.log(img)
}
{% endhighlight %}

Sem pânico! Vamos entender o código passo-a-passo. Estou definindo que ao clicar
em uma miniatura, é criada um novo elemento `img` com o mesmo `src` da imagem
clicada. E nessa imagem que acabamos de criar, adicionamos a classe `lightbox`
para deixá-la maior e centralizada por CSS. E ao final disso tudo, inserimos
ela no DOM com o método `appendTo('body')`. E, no _click_ desta imagem recém-criada,
ela é removida do _DOM_.

Logo depois setamos um evento `resize` à `window` que dispara a função
`resizeImg` passando a imagem criada há pouco como parâmetro. Imaginem que
gostariamos de mudar as dimensões da imagem de acordo com o tamanho do
_viewport_. Essa funcionalidade não foi implementada para deixar o experimento
simples e, também, porque não iria fazer nenhuma diferença para demonstrar o _leak_.

Até aqui tudo bem. Quando clicamos em uma imagem de miniatura ela cria uma imagem
de forma dinâmica. E quando clicamos nela novamente, ela é removida. Nenhum _leak_
aparente. Estamos alocando, usando e liberando a memória, pois estamos removendo
a imagem do DOM, permintindo assim que ela seja coletada pelo coletor de lixo.

Certo?

__Errado__.

### Detectando

Vamos analisar o comportamento do experimento com a ajuda do Chrome Dev Tools.
Abrindo a aba _Timeline_, iremos gravar uma sessão de uso com o seguinte cenário:
Vamos clicar uma vez em uma miniatura para abrir uma imagem maior, logo depois
na imagem maior para que ele seja removida do _DOM_, e repetir este processo 5
vezes.

<figure>
  <img src="/images/posts/2013-04-23-timeline.jpg"
      title="Chrome Dev Tools Timeline" alt="Chrome Dev Tools Timeline" />
</figure>

Na imagem acima, o gráfico verde corresponde ao número de nós na árvore DOM na
nossa página. É nele que temos que ficar de olho. Cada degrau no gráfico verde
corresponde a um clique em uma miniatura. A cada clique são criados dois nós do
DOM. Um dos nós é a imagem, e o outro nó é a imagem adicionada à árvore com o
método `appendTo('body')`.

A página é iniciada com __39__ _DOM nodes_. No pico do gráfico temos __49__ nós,
pois demos 5 cliques e a cada clique eram criados 2 nós adicionais. Depois temos
uma queda no número de nós. É quando o _garbage collector_ é chamado. Mas ele
deveria remover todos os nós que acabamos de criar. Porém só remove __5 dos 10__
que acabamos de criar. Por que?

### O que houve

O erro acontece quando setamos o evento `resize` da `window`. Quando
removemos a imagem do _DOM_, o evento continua a ter uma referência à imagem,
evitando que o _mark and sweep_ a marque como lixo para que seja recolhida pelo
coletor de lixo.

<figure>
  <img src="/images/posts/2013-04-23-leak-passo-a-passo.gif"
      title="Vazamento passo-a-passo" alt="Vazamento passo-a-passo" />
</figure>

Na animação acima podemos ver com mais clareza porque as imagens criadas
não são marcadas como lixo. O objeto `window` possui uma referência para
`document`, `document` possui uma referência para `body`, e `body` possui uma
referência para `img`, pois acabamos de adicioná-la a ele.

Quando adicionamos o evento `resize` do `window`, passamos a imagem como
referência. Então `window` tem uma referência para o evento `resize` e este
evento possui uma referência para a imagem.

Quando removemos a imagem do _DOM_, `body` não aponta mais para a imagem, porém
o evento `resize` do `window` continua. O que torna a imagem inelegível para
ser marcada como lixo. E por isso ela nunca será liberada da memória.

<aside class="fonte">
  <h3>Referência</h3>
  <ul>
    <li>→
      <a href="https://developer.mozilla.org/en-US/docs/JavaScript/Memory_Management">
        Memory Management
      </a>
      <span class="comment">// Mozilla Developer Network</span>
    </li>
    <li>→
      <a href="http://vimeo.com/53073654">
        Secrets of the Chrome Dev Tools
      </a>
      <span class="comment">// Øredev Conference 2012</span>
    </li>
  </ul>
</aside>
