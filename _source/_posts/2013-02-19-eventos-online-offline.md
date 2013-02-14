---
title: Eventos online e offline
layout: post
author: Caio Gondim
author_link: http://twitter.com/caio_gondim
author_profile: https://plus.google.com/109656206006790732674/
image: images/posts/2013-02-19-eventos-online-offline.jpg
tags: html
comments: false
keywords: >
  html5, eventos, events
resumo: >
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet ex
  voluptas asperiores reiciendis ipsum voluptate natus voluptatibus hic
  cum fugiat fugit beatae consectetur est! Optio laboriosam dolorum praesentium
  officia et.
---

Mais uma <abbr title="Application Program Interface">API</abbr> simples e útil
do HTML5. Com ela temos acesso, de forma nativa, ao status da conexão do
navegador, ou seja, se ele tem acesso ou não à internet. Muito útil caso você
queira deixar seu _webapp_ funcionando enquanto estiver _offline_ e sincronizar
todas as mudanças feitas quando estiver _online_ novamente.

O que melhor que um exemplo para demonstrar a nova
<abbr title="Application Program Interface">API</abbr>? desconecte a sua máquina
da internet desligando o seu Wi-Fi ou desplugando o cabo _ethernet_ e você verá
uma animação informando que a conexão foi perdida. Conecte de novo e, quando a
conexão retornar, o aviso irá sumir. Simples e lindo, hein?

## API

A <abbr title="Application Program Interface">API</abbr> é bem direta ao ponto.
Basta adicionarmos _listeners_ aos objetos `window`, `document` ou ao elemento
`body` e passarmos a função que será executada uma vez que esses eventos forem
disparados.

{% highlight javascript %}
// javascript puro
window.addEventListener('online', function() {
  // ...
})
window.addEventListener('offline', function() {
  // ...
})
{% endhighlight %}

No exemplo acima estamos escutando o evento através em JavaScript puro. No
exemplo abaixo estamos usando jQuery. O método `on` é agora o método padrão para
escutar eventos no jQuery, inclusive para os eventos clássicos como `click`,
`hover`, etc. Os dois códigos são semânticamente idênticos. A diferença é que o
primeiro usa a sintaxe nativa do JavaScript, e o outro a sintaxe jQuery.

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
que estamos com conexão à internet, se retornar `false`...vocês entenderam.

{% highlight javascript %}
if (navigator.onLine) {
  // está online
} else {
  // está offline
}
{% endhighlight %}


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
      <a href="https://developer.mozilla.org/en-US/docs/Online_and_offline_events">
      Online and offline events
      </a>
      <span class="comment">// Mozilla Developer Network </span>
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
      .add(navigator)
      .add(document)
      .add(document.body)
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
