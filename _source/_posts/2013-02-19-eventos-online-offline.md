---
title: Eventos online e offline
layout: post
author: Caio Gondim
author_link: http://twitter.com/caio_gondim
author_profile: https://plus.google.com/109656206006790732674/
image: images/posts/2013-02-19-eventos-online-offline.jpg
tags: HTML5 javascript
comments: false
keywords: >
  html5, eventos, events, javascript, online, offline, rede, internet, net,
  conexão, connection
resumo: >
  Mais uma <abbr title="Application Program Interface">API</abbr> simples e útil
  do HTML5. Com ela temos acesso, de forma nativa, ao __status da conexão do
  navegador__, ou seja, se ele tem acesso ou não à rede.
---

Mais uma <abbr title="Application Program Interface">API</abbr> simples e útil
do <aabr title="HyperText Markup Language 5">HTML5</aabr>. Com ela temos acesso,
de forma nativa, ao __status da conexão do navegador__, ou seja, se ele tem
acesso ou não à rede. Não confundir com acesso à internet, já que é possível
estarmos conectados em uma rede local sem acesso externo à internet.

## API

A <abbr title="Application Program Interface">API</abbr> é bem direta ao ponto.
Basta adicionarmos _listeners_ aos objetos `window`, `document` ou ao elemento
`body` e passarmos a função que será executada uma vez que esses eventos forem
disparados. O evento irá, na verdade, acontecer no elemento `body`, mas irá
propagar até o objeto `window`, passando por `document`. Por isso podemos por o
_listener_ em qualquer um.

{% highlight javascript %}
// javascript puro
window.addEventListener('online', function() {
  // ...
})
window.addEventListener('offline', function() {
  // ...
})
{% endhighlight %}

No exemplo acima estamos escutando o evento através de JavaScript puro. No
exemplo abaixo estamos usando jQuery. O método `on` é agora o método padrão para
escutar eventos no jQuery, inclusive para os eventos clássicos como `click`,
`hover`, etc. Os dois códigos são equivalentes.

{% highlight javascript %}
// jQuery style
$(window)
  .on('online', function() {
    // ...
  })
  .on('offline', function() {
    // ...
  })
{% endhighlight %}

## Propriedade online

Também é possível detectar se o navegador está _online_ de forma síncrona.
Basta checar a propriedade `navigator.onLine`. Se ela retornar `true`, significa
que estamos com conexão à rede, se retornar `false`...vocês entenderam.

{% highlight javascript %}
if (navigator.onLine) {
  // está online
} else {
  // está offline
}
{% endhighlight %}

## Demo

O que melhor que um exemplo para demonstrar a nova
<abbr title="Application Program Interface">API</abbr>? Caso esteja usando o
Chrome, Safari ou Internet Explorer, __desconecte a sua máquina da rede desligando
o _Wi-Fi___ ou desplugando o cabo _ethernet_ para então ver uma animação
informando que a conexão foi perdida. Caso esteja no Firefox, vá no menu
_File_ > _Work Offline_ para que o evento _offline_ seja disparado. Conecte de
novo e, quando a conexão retornar, o aviso irá sumir. Simples e lindo, hein?

## Suporte e Inconsistências

Cada navegador interpreta o termo _offline_ de maneiradiferente. A especificação
do <aabr title="HyperText Markup Language 5">HTML5</aabr> informa que o evento
_offline_ deve ser disparado quando o computador perder conexão com a rede, e
não necessariamente com a internet.

<blockquote>
  <p>
    Returns false if the user agent is definitely offline (disconnected from
    the network). Returns true if the user agent might be online. The events
    online and offline are fired when the value of this attribute changes.
  </p>
  <footer>
    – WHATWG Browser state spec
  </footer>
</blockquote>

O que significa que, se apenas a conexão entre seu _access point_ e seu provedor
de internet for perdida, o evento offline não será disparado. Mas caso a conexão
entre o computador e o _access point_ for perdida e esta for a única interface
de rede de sua máquina, o evento _offline_ será disparado.

O Firefox não implementa a API como definida na especificação e apenas dispara
o evento quando explicitamente optamos que ele trabalhe no modo _offline_, como
fizemos anteriormente no _demo_.

O Opera, apesar de apresentar a propriedade `navigator.onLine`, parece não
implementar os eventos. E nem mesmo a propriedade é atualizada quando perdemos
conexão com a rede.

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
      <td class="property"><code>Eventos online/offline</code></td>
      <td>26.0</td>
      <td>6.0.2</td>
      <td>18.0</td>
      <td>10</td>
      <td>--</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="6">
        A versões dos navegadores acima foram as usadas nos testes,
        mas não quer dizer que a API foi implementada desde a versão informada.
      </td>
    </tr>
  </tfoot>
</table>

Infelizmente não achei, nem mesmo no [Can I Use](http://caniuse.com/), uma
tabela de suporte a estes eventos. Então na tabela acima estão todos os
_browsers_ com suas respectivas versões que usei para testar o experimento do
_post_.

<aside class="fonte">
  <h3>Referência</h3>
  <ul>
    <li>→
      <a href="https://developer.mozilla.org/en-US/docs/Online_and_offline_events">
			Online and offline events
      </a>
      <span class="comment">// Mozilla Developer Network </span>
    </li>
    <li>→
      <a href="http://stackoverflow.com/questions/3181080/how-to-detect-online-offline-event-cross-browser">
      How to detect online/offline event cross-browser?
      </a>
      <span class="comment">// Stack Overflow</span>
    </li>
    <li>→
      <a href="http://www.whatwg.org/specs/web-apps/current-work/#browser-state">
      Browser State
      </a>
      <span class="comment">// WHATWG HTML5 Spec</span>
    </li>
  </ul>
</aside>


<style>

  /* Widget
   -------------------- */
  .widget-conexao-status {
    position: fixed;
    top: 50% !important;
    left: 50% !important;
    margin-top: -150px;
    margin-left: -150px;
    width: 300px !important;
    height: 300px !important;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.7);
    -webkit-box-shadow: rgba(0, 0, 0, 0.7);
    -moz-box-shadow: rgba(0, 0, 0, 0.7);
    -ms-box-shadow: rgba(0, 0, 0, 0.7);
    box-shadow: rgba(0, 0, 0, 0.7);
    opacity: 0;
  }

  /* Plug
   -------------------- */
  .widget-plug {
    position: absolute !important;
    background-image: none !important;
    background-color: transparent !important;
    -webkit-transition: all 0.4s ease-out 0.7s;
    -moz-transition: all 0.4s ease-out 0.7s;
    -ms-transition: all 0.4s ease-out 0.7s;
    transition: all 0.4s ease-out 0.7s;
  }

  .widget-plug-macho {
    width: 166px !important;
  }

  .widget-plug-femea {
    width: 140px !important;
  }

  /* Widget online
   -------------------- */
  .online .widget-conexao-status {
    opacity: 0;
    -webkit-transform: scale(1.3);
    -moz-transform: scale(1.3);
    -ms-transform: scale(1.3);
    transform: scale(1.3);
    -webkit-transition: all 0.4s 0.7s ease-out;
    -moz-transition: all 0.4s 0.7s ease-out;
    -ms-transition: all 0.4s 0.7s ease-out;
    transition: all 0.4s 0.7s ease-out;
  }
    .online .widget-plug {
      transform: scale(1);
      -webkit-transition: all 0.5s 0s ease-in;
      -moz-transition: all 0.5s 0s ease-in;
      -ms-transition: all 0.5s 0s ease-in;
      transition: all 0.5s 0s ease-in;
    }

    .online .widget-plug-macho {
      bottom: 45px !important;
      left: 45px !important;
    }

    .online .widget-plug-femea {
      top: 45px !important;
      left: 115px !important;
    }

  /* Widget offline
   -------------------- */
  .offline .widget-conexao-status {
    opacity: 1;
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    -webkit-transition: all 0.5s ease-in;
    -moz-transition: all 0.5s ease-in;
    -ms-transition: all 0.5s ease-in;
    transition: all 0.5s ease-in;
  }

    .offline .widget-plug-macho {
      bottom: 20px !important;
      left: 20px !important;
    }

    .offline .widget-plug-femea {
      top: 20px !important;
      left: 140px !important;
    }

    /* Quotation
   -------------------- */
    blockquote {
      padding-left: 20px;
      border-left: 10px #ccc solid;
      color: #999;
      display: block;
    }

      blockquote footer {
        font-size: 14px;
      }


</style>

<div class="widget-conexao-status">
  <img class="widget-plug widget-plug-macho"
      src="/images/posts/2013-02-19-plug-macho.png" alt="Plug Macho" />
  <img class="widget-plug widget-plug-femea"
      src="/images/posts/2013-02-19-plug-femea.png" alt="Plug Fêmea" />
</div>

<script>
  $(document).ready(function() {
    $('body')
      .addClass('online')

    $(window)
      .on('online', function(event) {
        $('body')
          .removeClass('offline')
          .addClass('online')
      })
      .on('offline', function(event) {
        $('body')
          .removeClass('online')
          .addClass('offline')
      })
  })
</script>
