---
title: CSS position <span>sticky</span>
layout: post
author: Caio Gondim
author_link: http://twitter.com/caio_gondim
author_profile: https://plus.google.com/109656206006790732674/
image: images/posts/2013-05-23-css-position-sticky.jpg
tags: css
comments: false
keywords: >
  css, position sticky, webkit, google chrome, chrome canary
resumo: >
  O <code>sticky</code> é um novo valor da propriedade <code>position</code> do CSS.
  Com ele é possível criarmos elementos que se comportam ora como
  <code>position:fixed</code>, ora como <code>position:relative</code> dependendo
  de um valor de <em>offset</em> definido. <strong>É o quê?</strong>
related:
  - title: "Stick your landings! position: sticky lands in WebKit"
    url: http://updates.html5rocks.com/2012/08/Stick-your-landings-position-sticky-lands-in-WebKit
    from: HTML5 Rocks
---

<style>

  .title-sticky {
    background-color: #ccc !important;
    border-bottom: 1px solid white;
    color: #fff !important;
    width: 600px !important;
    margin-left: -50px !important;
    margin-bottom: 0 !important;
    margin-top: 0 !important;
    padding: 10px 50px !important;
    position: sticky;
    position: -webkit-sticky;
    position: -moz-sticky;
    position: -ms-sticky;
    position: -o-sticky;
    top: 0;
    z-index: 1;
  }

  .section-with-title-sticky p:last-child {
    margin-bottom: 0 !important;
    padding-bottom: 25px !important;
  }

</style>

O <code>sticky</code> é um novo valor da propriedade <code>position</code> do
<abbr title="Cascading Style Sheet">CSS</abbr>. Com ele é possível criarmos
elementos que se comportam ora como <code>position:fixed</code>, ora
como <code>position:relative</code> dependendo de um valor de <em>offset</em>
definido. <strong>É o quê?</strong>

<div class="section-with-title-sticky">
  <h2 class="title-sticky">O efeito</h2>

  <p>Com um exemplo sempre fica mais fácil.</p>

  <p>
    Caso você esteja usando o <a href="https://www.google.com/intl/en/chrome/browser/canary.html">Chrome Canary</a>, já deve ter percebido que os
    títulos deste <em>post</em> estão usando o <code>position:sticky</code>. Basta dar <em>scroll</em>
    na página até que os subtítulos do <em>post</em> batam no topo. Quando batem, ficam fixos no
    topo até que o elemento em que ele está contido (o elemento pai) suma por completo. No Chrome
    versão estável também é possível brincar com esse novo valor de <code>position</code>. Basta digitar
    <strong>chrome://flags</strong> na barra de endereços, e habilitar
    o experimento <strong>Experimental WebKit features</strong>, como na imagem
    abaixo.
  </p>

  <figure>
    <img src="/images/posts/2013-05-23-enable-webkit-experimental-features.jpg"
      title="Habilitar experimentos do WebKit"
      alt="Habilitar experimentos do WebKit" height="200" />
  </figure>

  <p>
    Caso tenha habilitado o experimento, é preciso reiniciar o navegador.
  </p>

  <p>
    Este efeito é muito comum no iOS,
    como nas <em>apps</em> de música e agenda do iPhone. Quando estamos vendo os
    contatos começados com a letra
    <strong>A</strong>, o cabeçalho que indica que estamos nesta letra fica sempre
    visível. Quando vamos para a próxima letra, a letra <strong>B</strong> neste
    caso, ela empurra a anterior e se mantém visivél enquanto houver contatos que
    comecem com ela.
  </p>
</div>

<div class="section-with-title-sticky">
  <h2 class="title-sticky">Sintaxe</h2>

  <p>
    Para usar a <code>position:sticky</code> é preciso, além de
    setar um elemento como <code>sticky</code>, usar a propriedade <code>top</code>.
    É a propriedade <code>top</code> que define a partir de onde o nosso elemento
    vai se comportar como <code>position:fixed</code>.
  </p>

  <div class="highlight"><pre><code class="css"><span class="nc">.title-sticky</span> <span class="p">{</span>
    <span class="k">position</span><span class="o">:</span> <span class="o">-</span><span class="n">webkit</span><span class="o">-</span><span class="n">sticky</span><span class="p">;</span> <span class="c">/* apenas chrome e webkit nightly */</span>
    <span class="k">top</span><span class="o">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="p">}</span>
  </code></pre></div>

  <p>
    No exemplo acima, os elementos com a classe <code>title-sticky</code> irão
    se comportar como <code>position:relative</code> até que estejam a 0 <em>pixels</em>
    do topo do <em>viewport</em>. A partir desse momento, eles se comportam como se possuissem
    <code>position:fixed</code>. E só irão subir junto com o <em>scroll</em>
    quando o elemento em que ele está contido estiver totalmente fora do <em>viewport</em>.
  </p>

  <p>
    Em outras palavras, os elementos com essa classe irão ficar fixos quando
    encostarem em cima do navegador (logo embaixo da barra de endereço) e só irão
    sumir quando o elemento pai também sumir, por completo.
  </p>

  <p>
    É péssimo explicar essa <em>feature</em>. E super simples de entender
    experimentando no navegador. Por favor, <strong>testem</strong>.
  </p>
</div>

<div class="section-with-title-sticky">
  <h2 class="title-sticky">Mas eu já faço isso com JS</h2>

  <p>
    Esse efeito não é nenhuma novidade. É possível obter o mesmo resultado
    com JavaScript. Nós mesmo usamos JavaScript para ter esse efeito no <code>aside</code>
    de nossos <em>posts</em>, onde aparecem a data, autor e <em>tags</em> do <em>post</em>.
    E não é nada difícil de ser implementado.
  </p>

  <p>
    Porém, o evento <code>scroll</code> deve ser usado com muita, mas muita cautela.
    Ele é disparado várias vezes em apenas um toque na <em>mouse wheel</em>. E, dependendo
    da computação que você está fazendo quando o evento é disparado, pode
    tornar a página pesada. Uma simples busca por elementos no
    <abbr title="Document Object Model">DOM</abbr>
    com jQuery já pode diminuir consideravelmente o número de <em>frames</em> por
    segundos da renderização da nossa página.
  </p>

  <p>
    Outra coisa a ser considerada é que cada vez mais os navegadores estão otimizando
    a rolagem implementando aceleração nas <abbr title="Graphics processing unit">GPU</abbr>s.
    Com o uso do JavaScript no eventos de <code>scroll</code>, nós podemos cair para uma aceleração padrão na <abbr title="Central processing unit">CPU</abbr>, por
    <em>software</em>, deixando o scroll mais "pesado".
  </p>

  <p>
    Além do que é bem mais fácil usarmos apenas <abbr title="Cascading Style Sheets">CSS</abbr>. E também faz mais sentido,
    já que estamos definindo <em>layout</em>.
  </p>

</div>

<div class="section-with-title-sticky">
  <h2 class="title-sticky">Quando posso usar?</h2>

  <p>
    Infelizmente o <code>position:sticky</code> ainda não é um padrão
    <abbr title="World Wide Web Consortium">W3C</abbr>. Ele foi
    <a href="http://lists.w3.org/Archives/Public/www-style/2012Jun/0627.html">proposto</a>
    mas até o momento implementado apenas pelo WebKit e agora Blink, o motor de
    renderização do Chrome (que é um <em>fork</em> do WebKit).
  </p>

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
        <td class="property">position:sticky;</td>
        <td>23 *</td>
        <td>--</td>
        <td>--</td>
        <td>--</td>
        <td>--</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="6">
          * Deve ser habilitado através de uma <em>flag</em>.
        </td>
      </tr>
    </tfoot>
  </table>

  <p>
    Mas nós sempre podemos encher o saco dos programadores dos nossos queridos
    navegadores
    <a href="https://bugzilla.mozilla.org/page.cgi?id=productdashboard.html&amp;tab=&amp;product=Firefox&amp;bug_status=open">abrindo</a>
    <a href="http://www.chromium.org/blink"><em>issues</em></a> em seus
    <a href="http://www.webkit.org/quality/reporting.html">projetos</a>.
    Apenas naqueles que forem <em>open source</em>, claro.
  </p>
</div>

