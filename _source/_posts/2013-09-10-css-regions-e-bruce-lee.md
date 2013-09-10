---
title: <span>CSS Regions</span> e Bruce Lee
layout: post
author: Almir Filho
author_link: http://twitter.com/almirfilho
author_profile: https://plus.google.com/111718150595519513871/
image: images/posts/2013-09-10-css-regions-e-bruce-lee.jpg
tags:
comments: false
keywords: >
  lorem
resumo: >
  Eu acho Bruce Lee muito foda e inspirador, então viajei geral nesse _post_.
  Hoje vamos aprender o que as __CSS Regions__ têm a ver com __Bruce Lee__.
  Isso mesmo! Esvazie sua mente, seja disforme, adápte-se, seja como a água.
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
  #all-content {
    -webkit-flow-into: bruce-lee-fodao;
    -moz-flow-into: bruce-lee-fodao;
    -ms-flow-into: bruce-lee-fodao;
    flow-into: bruce-lee-fodao;
    font-family: "Times New Roman", Times, serif;
    color: black;
    font-size: 17px;
    line-height: 18px;
    text-align: justify;
  }
  #experimento {
    position: relative;
    height: 432px;
    background: url(/../images/posts/2013-09-10-the-loop-infinito-times.jpg);
    padding: 0 !important;
    width: 700px !important;
  }
  #experimento .content {
    background: #F6EDD1;
    -webkit-flow-from: bruce-lee-fodao;
    -moz-flow-from: bruce-lee-fodao;
    -ms-flow-from: bruce-lee-fodao;
    flow-from: bruce-lee-fodao;
    overflow: hidden;
  }
  #area-left,
  #area-right,
  #area-center {
    position: absolute;
    bottom: 16px;
  }
  #area-left,
  #area-right {
    width: 150px;
  }
  #area-left .content,
  #area-right .content {
    width: 100%;
    height: 100%;
  }
  #area-left {
    left: 17px;
    height: 294px;
  }
  #area-right {
    right: 17px;
    height: 234px;
  }
  #area-center {
    width: 341px;
    height: 234px;
    left: 180px;
  }
  #area-center-1,
  #area-center-2,
  #area-image {
    width: 100%;
  }
  #area-center-1,
  #area-center-2 {
    height: 46px;
  }
  #area-image {
    height: 142px;
  }
  #text-input {
    width: 600px;
    height: 100px;
    margin-top: 10px;
  }
  #input {
    margin-top: 0 !important;
  }
</style>

Eu acho Bruce Lee muito foda e inspirador, então viajei geral nesse _post_.
Hoje vamos aprender o que as __CSS Regions__ têm a ver com __Bruce Lee__.
Isso mesmo! Esvazie sua mente, seja disforme, seja como a água.

<hr />

Com as __CSS Regions__ poderemos modificar o _layout_ e o modo como o conteúdo
flui em páginas _web_.
Um ótimo caso de uso são os jornais e revistas, que geralmente utilizam _layouts_
multi colunas com imagens, citações e por ai vai.

Construir um _layout_ multi coluna apenas com o _box model_ seria moleza.
Algumas _divs_, alguns _floats_ e pronto. Não é?

## Não seja tosco

O problema não é construir o _layout_, o problema é fazer o conteúdo (texto e
imagens) fluir corretamente por entre esses elementos de forma automática — caso
contrário, se "cortarmos" o conteúdo em várias partes diferentes e separá-lo
devidamente, ainda enfrentaremos uma série de problemas, pois, __1:__ os
navegadores renderizam fontes de formas diferentes, então seu _layout_
indubitavelmente quebrará em alguns navegadores; e __2:__ a manutenibilidade do
seu código arderá no fogo do inferno, visto que, se algumas propriedades de
aparência do texto mudarem (como tamanho de fonte, espaçamento de linha ou
letra, etc.), você terá que fazer tudo novamente. __Tosco__.

## Teste aqui

![Experimental WebKit features](/images/posts/2013-05-28-enable-webkit-experimental-features.jpg)

Para visualizar os experimento abaixo corretamente, você deve estar utilizando
o navegador __Google Chrome__ e é preciso habilitar uma _flag_ dele primeiro.
Na versão estável (atualmente 29) basta digitar __chrome://flags__ na barra de
endereços, e habilitar a opção __Experimental WebKit features__, como na imagem
acima. Depois reinicie o navegador.

Agora, tente modificar o conteúdo do _textarea_ abaixo e veja o que acontece ao
conteúdo do jornal.

<div id="experimento" class="img">
  <div id="all-content">lorem</div>
  <section id="area-left">
      <div class="content"> </div>
  </section>

  <section id="area-center">
      <div id="area-center-1" class="content"> </div>
      <div id="area-image"> </div>
      <div id="area-center-2" class="content"> </div>
  </section>

  <section id="area-right">
      <div class="content"> </div>
  </section>
</div>

<div id="input" class="img example bordered">
  <textarea id="text-input">
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </textarea>
</div>

## Definindo regiões

Em um jornal ou revista, é muito comum a utilização de um _layout_ com várias
colunas, como por exemplo o jornal do experimento acima.

Com uma rápida olhada, já podemos facilmente identificar várias áreas de
conteúdo e entender qual o seu fluxo, ou seja, por onde você começa e termina
sua leitura.
Agora vamos considerar que o HTML da estrutura seja organizado da seguinte
maneira:

![Estrutura](/images/posts/2013-09-10-estrutura.png)

{% highlight html %}
<header>
    <h1 class="title">...</h1>
</header>

<section id="area-left">
    <div class="content">...</div>
</section>

<section id="area-center">
    <h2 class="subtitle">...</h2>
    <div class="content">...</div>
    <picture class="image">...</picture>
    <div class="content">...</div>
</section>

<section id="area-right">
    <time class="date">...</time>
    <div class="content">...</div>
</section>
{% endhighlight %}

Até agora temos apenas elementos estruturais que representam nossas áreas de
conteúdo através da classe `.content`. Nada de novo por enquanto.

## Be water, my friend

Como [diria Bruce Lee](http://www.youtube.com/watch?v=2FQU0WeGSEM):

<blockquote>
  <p>
    Esvazie sua mente <br />
    Seja disforme <br />
    Sem contornos <br />
    Como água <br />
    Quando você coloca água em um copo, ela se torna o copo. <br />
    Você coloca água em uma garrafa, ela se torna a garrafa. <br />
    Você a coloca em uma chaleira, ela se torna a chaleira. <br />
    Seja água, meu amigo!
  </p>
  <footer>
    – Bruce Lee
  </footer>
</blockquote>

Se ligue bem nesse conceito, pois veremos que é exatamente sobre isso que se
tratam as CSS Regions.

## Named flows: a técnica do dragão

Um _named flow_ é basicamente um identificador que definimos para se referir a
um determinado conteúdo.
__Ele serve apenas para manipular este conteúdo.__
Para facilitar, pense como se ele fosse apenas uma __variável que armazena__
todo este conteúdo numa grande _string_. Simples.
Dessa maneira, podemos definir qualquer _named flow_ para qualquer conteúdo que
desejarmos.

<q class="pushing-quotes">
  Be <strong>formless</strong>, <strong>shapeless</strong>. Like <strong>water</strong>.
</q>

Hora de aplicar a técnica do mestre, que consiste em apenas 2 passos simples:
Seja __disforme__ e depois __adeque-se__ ao que desejar.

### flow-into (seja disforme)

Vamos começar transformando nosso conteúdo em algo __disforme__ — como água.
Para isso, ele não pode estar espalhado em diversos lugares, primeiramente
precisamos juntar todo o fluxo de conteúdo em um só lugar, como por exemplo, em
`article.all-content`:

{% highlight html %}
<article class="all-content">Todos os lorem ipsum...</article>
{% endhighlight %}

Agora, podemos criar nosso _named flow_ para o conteúdo de `.all-content`.
Basta utilizarmos a propriedade `flow-into`:

{% highlight css %}
.all-content {
    flow-into: bruce-lee-fodao;
}
{% endhighlight %}

Beleza, acabamos de mandar todo nosso conteúdo para um lugar imaginário chamado
de __bruce-lee-fodao__.

### flow-from (adeque-se)

Tão simples como criar o _named flow_, é usá-lo.
Nosso objetivo agora é fazer com que o conteúdo flua por todos elementos da
classe `.content`.

<q class="pushing-quotes">
  When you put water in a bottle, it <strong>becomes the bottle</strong>.
</q>

Ou seja, agora vamos fazer nossa "água" virar o "copo", a "garrafa", ou qualquer
outra coisa através da propriedade `flow-from`:

{% highlight css %}
.content {
    flow-flow: bruce-lee-fodao;
}
{% endhighlight %}

Agora o conteúdo de __bruce-lee-fodao__ fluirá automaticamente através de todos
os elementos `.content` da página.
Fácil demais, hein?

![Fluxo de conteúdo](/images/posts/2013-09-10-content-flow.png)

## E não é só isso...

A (futura) especificação das CSS Regions também compreende outras propriedades
como `break-before`, `break-after` e `break-inside`, que tratam basicamente do
comportamento da quebra do conteúdo quando acontecer as transições entre
regiões. Para mais detalhes,
[leia o rascunho](http://dev.w3.org/csswg/css-regions/#region-flow-break).

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
      <td class="property"><code>flow-into</code></td>
      <td>15 <code class="small">-webkit-</code></td>
      <td>--</td>
      <td>--</td>
      <td>10 <code class="small">-ms-</code></td>
      <td>--</td>
    </tr>
    <tr>
      <td class="property"><code>flow-from</code></td>
      <td>15 <code class="small">-webkit-</code></td>
      <td>--</td>
      <td>--</td>
      <td>10 <code class="small">-ms-</code></td>
      <td>--</td>
    </tr>
  </tbody>
</table>

Como é de se esperar, o suporte é inversamente proporcional ao grau de
felicidade proporcionada pela tecnologia.
Espero que tenham gostado!

<script type="text/javascript">
$(document).ready(function(){
  $('#all-content').text($('#text-input').val());
  $('#text-input').keyup(function(){
    $('#all-content').text($(this).val());
  });
});
</script>