---
title: <span>CSS Regions</span> e Bruce Lee
layout: post
author: Almir Filho
author_link: http://twitter.com/almirfilho
author_profile: https://plus.google.com/111718150595519513871/
image: images/posts/2013-09-10-css-regions2.jpg
tags:
comments: false
keywords: >
  lorem
resumo: >
  Hoje vamos aprender o que as __CSS Regions__ têm a ver com __Bruce Lee__.
  Isso mesmo! Esvazie sua mente, seja sem forma, adápte-se, seja como a água.
related:
  - title: CSS Regions Module Level 1 (draft)
    url: http://dev.w3.org/csswg/css-regions/
    from: W3C
---

<style>
  hr {
    display: block;
    border: none;
  }
  hr::before {
    display: block;
    width: 100px;
    content: '• • •';
    margin: auto;
    text-align: center;
    font-size: 13px;
    height: 10px;
    line-height: 10px;
    color: #ccc;
  }
</style>

Hoje vamos aprender o que as __CSS Regions__ têm a ver com __Bruce Lee__.
Isso mesmo! Esvazie sua mente, seja sem forma, seja como a água.

<hr />

Com as __CSS Regions__ poderemos modificar o _layout_ e o modo como o conteúdo
flui em páginas _web_.
Um ótimo caso de uso são os jornais e revistas, que geralmente utilizam _layouts_
multi colunas com imagens, citações e por ai vai.

Construir o _layout_ da imagem acima apenas com o _box model_ seria moleza.
Algumas _divs_, alguns _floats_ e pronto. Não é?

## Não seja tosco

O problema não é construir o _layout_, o problema é fazer o conteúdo (texto e
imagens) fluir corretamente por entre esses elementos de forma automática — caso
contrário, se "cortarmos" o conteúdo em várias partes diferentes e separá-lo
devidamente, ainda infrentaremos uma série de problemas, pois, __1:__ os
navegadores renderizam fontes de formas diferentes, então seu _layout_
indubitavelmente quebrará em alguns navegadores; e __2:__ a manutenibilidade do
seu código arderá no fogo do inferno, visto que, se algumas propriedades de
aparência do texto mudarem (como tamanho de fonte, espaçamento de linha ou
letra, etc.), você terá que fazer tudo novamente. __Tosco__.

## Antes de continuar

![Experimental WebKit features](/images/posts/2013-05-28-enable-webkit-experimental-features.jpg)

Para visualizar os exemplos deste _post_ corretamente, você deve estar utilizando
o navegador __Google Chrome__ e é preciso habilitar uma _flag_ dele primeiro.
Na versão estável (atualmente 29) basta digitar __chrome://flags__ na barra de
endereços, e habilitar a opção __Experimental WebKit features__, como na imagem
acima. Depois reinicie o navegador.

## Be water, my friend

Parafraseando [Bruce Lee](http://www.youtube.com/watch?v=2FQU0WeGSEM):

<blockquote>
  <p>
    Esvazie sua mente <br />
    Seja sem forma <br />
    Sem contornos <br />
    Como água <br />
    Quando você coloca água em um copo, ela se torna o copo. <br />
    Você coloca água em uma garrafa, ela se torna a garrafa. <br />
    Você a coloca em uma chaleira, ela se torna a chaleira.
  </p>
  <footer>
    – Bruce Lee
  </footer>
</blockquote>

Se ligue bem nesse conceito, pois veremos que é exatamente sobre isso que se
tratam as CSS Regions.

## Definindo regiões

Em um jornal ou revista, é muito comum a utilização de um _layout_ com várias
colunas:

![The Loop Infinito Times](/images/posts/2013-09-10-css-regions.jpg)

Com uma rápida olhada, já podemos facilmente identificar várias áreas de
conteúdo e entender qual o seu fluxo, ou seja, por onde você começa e termina
sua leitura.

Agora vamos considerar que o HTML da estrura seja o seguinte:

![Estrutura](/images/posts/2013-09-10-estrutura.png)

{% highlight html %}
<header>
    <h1 class="title">...</h1>
</header>

<section class="left">
    <div class="content">...</div>
</section>

<section class="center">
    <h2 class="subtitle">...</h2>
    <div class="content">...</div>
    <picture class="image">...</picture>
    <div class="content">...</div>
</section>

<section class="right">
    <time class="date">...</time>
    <div class="content">...</div>
</section>
{% endhighlight %}

dsadasdasdasdas

![Fluxo de conteúdo](/images/posts/2013-09-10-content-flow.png)

dasdasdasdasdasd

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
      <td class="property"><code>shape-outside</code></td>
      <td>25 <code class="obs">*1</code><br /><code class="small">-webkit-</code></td>
      <td>--</td>
      <td>--</td>
      <td>--</td>
      <td>--</td>
    </tr>
    <tr>
      <td class="property"><code>shape-margin</code></td>
      <td>--</td>
      <td>--</td>
      <td>--</td>
      <td>--</td>
      <td>--</td>
    </tr>
    <tr>
      <td class="property"><code>shape-image-threshold</code></td>
      <td>--</td>
      <td>--</td>
      <td>--</td>
      <td>--</td>
      <td>--</td>
    </tr>
    <tr>
      <td class="property"><code>shape-inside</code></td>
      <td>25 <code class="obs">*1</code> <code class="obs">*2</code><br /><code class="small">-webkit-</code></td>
      <td>--</td>
      <td>--</td>
      <td>--</td>
      <td>--</td>
    </tr>
    <tr>
      <td class="property"><code>shape-padding</code></td>
      <td>25 <code class="obs">*1</code> <code class="obs">*2</code><br /><code class="small">-webkit-</code></td>
      <td>--</td>
      <td>--</td>
      <td>--</td>
      <td>--</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="6">
        *1 – Features habilitadas através de uma flag<br />
        *2 – Propriedades removidas da spec por hora
      </td>
    </tr>
  </tfoot>
</table>