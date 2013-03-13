---
title: Console e Command Line <span class="light">API</span>
layout: post
author: Caio Gondim
author_link: http://twitter.com/caio_gondim
author_profile: https://plus.google.com/109656206006790732674/
image: images/posts/2013-03-13-console-api.jpg
tags: javascript
comments: true
keywords: >
  console, command line, api, debug, depurar, código, javascript, js,
  chrome, firefox, browser, error, warn, log, terminal, sublime text, plugin,
  monitorEvents, time
resumo: >
  Antes, para _debugar_ código, enchiamos nosso código de `alert()`. Hoje temos
  várias ferramentas que nos auxiliam a melhor debugar, e entre elas estão
  o Console e a Command Line API.
---

Antes, para _debugar_ código, enchiamos nosso código de `alert()`. Hoje temos
várias ferramentas que nos auxiliam a melhor debugar, e entre elas estão
o Console e a Command Line <abbr title="Application Program Interface">API</abbr>.

Neste _post_ vamos focar no __Chrome__. Mas a maior
parte das <abbr title="Application Program Interface">APIs</abbr> também foram
implementadas por outros _browsers_, como o Firefox. Para chamar o Console no Chrome, vá no menu
_View_ > _Developer_ > _JavaScript Console_, ou pelo atalho ⌘⌥J no Mac, Control +
Shift + J no Windows e Linux. Com o console visível, vamos dar uma olhada nos
métodos mais populares e úteis.

## log, warn e error

Esses são os métodos básicos. Com eles imprimimos uma mensagem diretamente no
console. A única diferença entre eles é o _layout_ da mensagem. Com _warn_
aparece um ícone amarelo de alerta ao lado da mensagem, com _error_ um
ícone e mensagem em vermelho. Com _log_ apenas uma mensagem normal.

<figure>
  <img src="/images/posts/2013-03-13-console-log-warn-error.jpg"
      title="console.log(), console.warn(), console.error()"
      alt="console.log(), console.warn(), console.error()" height="200" />
</figure>

## $$()

Funciona de modo similar à função `$` do jQuery. Retorna um _array_ de elementos
de acordo com o seletor <abbr title="Cascading Style Sheets">CSS</abbr> passado.

<figure>
  <img src="/images/posts/2013-03-13-console-$$.jpg" title="$$()" alt="$$()" />
</figure>

## $0, $1, $3 e $4

`$0` funciona como um atalho para o último elemento selecionado na aba
__Elements__. Já `$1` é o atalho para o penúltimo elemento. E assim por diante
até o `$4`.

<figure>
  <img src="/images/posts/2013-03-13-console-$0.jpg" title="$_" alt="$_" />
</figure>

<h2>$_</h2>

Atalho para o último valor computado, ou retornado. Mais fácil com um exemplo.

<figure>
  <img src="/images/posts/2013-03-13-console-$_.jpg" title="$_" alt="$_" />
</figure>

No exemplo acima, antes de chamarmos `$_`, o último valor computado foi o da
expresssão `$$()`. Então quando chamamos `$_.length`, obtemos o mesmo valor que
`$$('.post-container h2').length`.

## Limpando o console

Para limpar o console o atalho é ⌘K no Mac e Control + L no Windows e
Linux. Você pode também usar o método `console.clear()` caso queira limpar o
console de tempos em tempos de forma programática.

## Medindo tempo

Ótimo para verificar quanto tempo determinada parte do código está
demorando para ser executada. Basta chamar `console.time('100.000
objetos')` e, quando quiser finalizar a medição, chamar o método
`console.log('100.000 objetos')` com a mesma _string_ passada anteriormente.

<figure>
  <img src="/images/posts/2013-03-13-console-time.jpg" title="console.time()"
      alt="console.time()" />
</figure>

## Monitorando eventos

A função `monitorEvents()` fica monitorando um objeto por um ou mais eventos
especificados. Quando um evento ocorre, ela imprime o objeto `Event` no console.

<figure>
  <img src="/images/posts/2013-03-13-monitor-events.jpg" title="monitorEvents()"
      alt="monitorEvents()" height="200" />
</figure>

## Snippets para Sublime Text

<figure>
  <img src="/images/posts/2013-03-13-sublime-package.jpg" title="Sublime Text package"
      alt="Sublime Text package" height="200" />
</figure>

E para facilitar ainda mais, eu acabei criando um _package_ do Sublime Text.
Ele pode ser instalado pelo próprio _Package Control_. O nome do pacote é
__JavaScript Console__ e as instruções de uso estão na página do
projeto no [GitHub](https://github.com/caiogondim/js-console-sublime-snippets#javascript-console-sublime-text-snippets).
Qualquer dúvida, melhoria ou elogio, por favor, não hesitem de abrir uma _issue_
ou falar aqui embaixo nos comentários.

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
