---
title: Console <span class="light">API</span>
layout: post
author: Caio Gondim
author_link: http://twitter.com/caio_gondim
author_profile: https://plus.google.com/109656206006790732674/
image: images/posts/2013-03-07-console-api.jpg
tags: javascript
comments: false
keywords: >
  lorem, ipsum
resumo: >
  Antes, para _debugar_ código, enchiamos nosso código de `alert()`. Hoje temos
  várias ferramentas que nos auxiliam a melhor debugar o código, e entre elas está
  o Console API.
---

Neste _post_ vamos focar no console do __Chrome__. Mas a maior
parte da <abbr title="Application Program Interface">API</abbr> já foi
implementada por outros browsers. Para chamar o Console no Chrome, vá no menu
_View_ > _Developer_ > _JavaScript Console_, ou pelo atalho ⌘⌥J no Mac, Control +
Shift + J no Windows e Linux. Com o console visível, vamos dar uma olhada nos
métodos mais populares e úteis.

## .log(), .warn(), .error()

Esses são os métodos básicos. Com eles imprimimos uma mensagem diretamente no
console. A única diferença entre eles é o _layout_ da mensagem. Com _warn_
aparece um ícone amarelo de alerta ao lado da mensagem, com _error_ um
ícone e mensagem em vermelho. Com _log_ apenas uma mensagem normal.

<figure>
  <img src="/images/posts/2013-03-07-console-log-warn-error.jpg"
      title="console.log(), console.warn(), console.error()"
      alt="console.log(), console.warn(), console.error()" height="200" />
</figure>

## $$()

Funciona de modo similar à função `$` do jQuery. Retornar elementos de acordo
com o seletor CSS passado.

<figure>
  <img src="/images/posts/2013-03-07-console-$$.jpg" title="$$()" alt="$$()"
      height="200" />
</figure>

## $0 e $1

`$0` funciona como um atalho para o elemento atualmente selecionado na aba
__Elements__. Já `$1` é o atalho para o penúltimo elemento.

(gif)

<h2>$_</h2>

Atalho para o último valor computado, ou retornado. Mais fácil com um exemplo.

<figure>
  <img src="/images/posts/2013-03-07-console-$$.jpg"
      title="console.log(), console.warn(), console.error()"
      alt="console.log(), console.warn(), console.error()" height="200" />
</figure>

## Limpando console

Para limpar o console, o atalho é ⌘K no Mac e Control + L no Windows e
Linux. Você pode também usar o método `console.clear()` caso queira limpar o
console de tempos em tempos de forma programática.

## Medindo tempo

Ótimo para verfificarmos quanto tempo determinada parte de nosso código está
demorando para ser executado. Basta chamar `console.time('100.000
objetos')` e, quando quiser finalizar a medição, chamar o método
`console.log('100.000 objetos')` com a mesma _string_ passada anteriormente.

<figure>
  <img src="/images/posts/2013-03-07-console-time.jpg" title="console.time()"
      alt="console.time()" height="200" />
</figure>

## Monitorando eventos

A função `monitorEvents()` fica monitorando um objeto por um ou mais eventos
especificados. Quando um evento ocorre, ele imprime o objeto `Event` no console.

<figure>
  <img src="/images/posts/2013-03-07-monitor-events.jpg" title="monitorEvents()"
      alt="monitorEvents()" height="200" />
</figure>


<aside class="fonte">
  <h3>Referência</h3>
  <ul>
    <li>→
      <a href="http://getfirebug.com/wiki/index.php/Console_API">
        Console API
      </a>
      <span class="comment">// Firebug </span>
    </li>
    <li>→
      <a href="https://developers.google.com/chrome-developer-tools/docs/console">
        Using the Console
      </a>
      <span class="comment">// Chrome Dev Tools </span>
    </li>
  </ul>
</aside>
