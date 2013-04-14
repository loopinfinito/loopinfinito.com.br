---
title: Vazamento de memória <span class="light">em JavaScript</span>
layout: post
author: Caio Gondim
author_link: http://twitter.com/caio_gondim
author_profile: https://plus.google.com/109656206006790732674/
image: images/posts/2013-03-03-vazamento-de-memoria-em-javascript.jpg
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
linguagens mais baixo nível como C, C++ ou Objective-C. Então, se nós não somos
responsáveis por essa alocação de memória, se houver um _leak_ a culpa será da
linguagem, e não do programador.

Certo?

__Errado  __.

É importante sabermos como a liberação automática de memória funciona
para evitarmos alguns casos específicos onde a memória pode nunca ser liberada.
Mas antes de falarmos sobre vazamento de memória vamos
utilizar a técnica [Jack Estripador](http://pt.wikipedia.org/wiki/Jack,_o_Estripador)
e vamos dividir o problema em partes.
Primeiro vamos entender um pouco do ciclo de vida da memória, depois como funciona a
liberação automática de memória no JavaScript para, só então, sairmos da teoria
e vermos um experimento mostrando um _memory leak_.

## Ciclo de vida da memória

O ciclo de vida da memória é praticamente o mesmo não importando a linguagem.
Ele se dá em 3 passos:

- Alocação
- Uso
- Liberação

Nós __alocamos__ memória quando declaramos uma variável, declaramos uma função,
aumentamos o tamanho de nosso _array_, etc. Nós __usamos__ aquele trecho de
memória quando acessamos ou escrevemos algo nele. E nós devemos liberar memória
para dar espaço para futuras alocações pois, caso contrário, iriamos consumir
rapidamente toda a memória do computador.

Esses dois primeiros passos acontecem de forma explícita em todas
as linguagens, ou seja, o programador que define quando (não como) a memória
será alocada e usada. Já o terceiro passo é explícito apenas em linguagens de baixo nível, onde o
programador tem que fazer todo o trabalho de sempre liberar memória que não está
mais sendo usada. E implícito em linguagens de alto nível como JavaScript, Ruby
e Python, onde a própria linguagem cuidará disso.

## Garbage Collection

Como foi dito, a liberação de memória no JavaScript é feita de forma implícita
(automática, transparente). A própria linguagem se encarrega de fazer esse
trabalho sujo para nós. Esta mágica é chamada de _garbage collection_, ou
coleção de lixo.

Existem algumas maneiras dferentes de se implementar um coletor de lixo, mas
hoje todos os grandes navegadores utilizam um algoritmo (heurística) chamado de
_Mark and Sweep_ para marcar trechos de memória que não estão mais sendo
utilizados, ou dizer o que é ou não lixo para que seja recolhido pelo coletor.

### _Mark and Sweep_

Descendo um pouco mais na toca do coelho, vamos entender como funciona o _Mark
and Sweep_. Na primeira etapa, ele sai varrendo todos os objetos alocados em
memória. A varredura é iniciada pelos objetos raízes, que no caso do JavaScript
no _browser_ é o objeto `window`. A partir dele, ele sai visitando todos os
objetos a que `window` faz referência. E depois todos os objetos que os objetos
referenciados por `window` fazem referência, e assim por diante.

No final desta varredura, todos os objetos que não foram visitados são marcados
como lixo e o no próximo evento de _garbage collection_ essa memória será
liberada. Talvez tudo fique mais claro com o passo-a-passo abaixo do algoritmo.

<figure>
  <img src="/images/posts/2013-03-03-mark-and-sweep.gif"
      title="Mark and Sweep" alt="Mark and Sweep" />
</figure>

## Vacilos da vida real

Sabendo como funciona a mágica da liberação automática de memória, vamos agora ver
como é possível termos

## lorem


Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id tempora debitis
aliquam itaque laboriosam rem ut sunt dolor veritatis porro modi ipsa. Commodi
saepe ex. Quae quas recusandae commodi libero.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia reiciendis at
adipisci voluptate veniam porro recusandae est veritatis ipsam obcaecati facilis
ad autem eum illum facere dolores vel neque distinctio.

<figure>
  <img src="/images/posts/2013-03-03-leak-passo-a-passo.gif"
      title="Vazamento passo-a-passo" alt="Vazamento passo-a-passo" />
</figure>

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<aside class="fonte">
  <h3>Referência</h3>
  <ul>
    <li>→
      <a href="https://developer.mozilla.org/en-US/docs/JavaScript/Memory_Management">
        Memory Management
      </a>
      <span class="comment">// Mozilla Developer Network</span>
    </li>
  </ul>
</aside>
