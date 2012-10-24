---
title: Pião da Casa Própria em <span>CSS 3D</span>
layout: post
author: Caio Gondim
author_link: http://twitter.com/caio_gondim
author_profile: https://plus.google.com/109656206006790732674/
resumo: Quem não lembra do <strong>lendário</strong> programa do Silvio Santos <a href="http://www.youtube.com/watch?v=X0YAnNNK2OE">Pião da Casa Própria</a>? Neste post vamos trazer esta lenda de volta a vida, desta vez encarnado em puro código HTML5, sem imagens ou plugins.
image: images/posts/2012-05-13-piao-da-casa-propria-em-css-3d.jpg
has_inner_image: false
tags: CSS 3D experimento
keywords: silvio santos, css3, 3d, html5, frontend, web, development, desenvolvimento, web development, animacao, piao da casa propria
comments: true
---

Quem não lembra do __lendário__ programa do Silvio Santos [Pião da Casa Própria](http://www.youtube.com/watch?v=X0YAnNNK2OE)?
Neste post vamos trazer esta lenda de volta a vida, desta vez encarnado em puro código HTML5, sem imagens ou plugins.
Se seu navegador for o Chrome, Safari ou Firefox atualizados, você poderá ver abaixo como nosso experimento irá ficar ao final deste post.

<iframe src="http://caiogondim.github.com/piao-da-casa-propria-em-css-3d/" frameborder="0" class="img" style="height:432px;" id="experimento-piao"> </iframe>

Todo o código deste experimento está disponível no [GitHub](https://github.com/caiogondim/piao-da-casa-propria-em-css-3d) e um preview completo pode ser visto [aqui](http://caiogondim.github.com/piao-da-casa-propria-em-css-3d/).

## A brincadeira é muito fácil

Vamos começar com o código HTML.
Apenas uma <code>div</code> contendo 6 outras <code>div</code>, uma para cada face do pião, a <code>div</code> wrapper, que servirá de container para o pião, e mais uma última para a moldura do pião.

{% highlight html %}
<div id="wrapper">
  <div id="piao">
    <!-- todas as faces do pião -->
    <div class="numero um">1</div>
    <div class="numero dois">2</div>
    <div class="numero tres">3</div>
    <div class="numero quatro">4</div>
    <div class="numero cinco">5</div>
    <div class="numero seis">6</div>
  </div>
  <div id="moldura"> </div>
</div>
{% endhighlight %}

Agora vamos dar um pouco de estilo ao pião e à moldura.

{% highlight css %}
#wrapper {
  width: 400px;
  height: 400px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -200px;
  margin-top: -200px;
}

#piao {
  position: relative;
  top: 40px; /* centraliza o pião */
  margin: 0 auto; /* centraliza o pião */
  height: 330px;
  width: 200px;
}

#piao .numero {
  position: absolute;
  height: 100%;
  width: 200px;
  border: 6px solid white;
  -webkit-box-sizing: border-box;
  text-align: center;
  line-height: 320px;
  font-family: Impact, sans-serif;
  font-size: 240px;
  color: white;
  background-color: rgb(0, 0, 0);
}

#moldura {
  height: 400px;
  width: 400px;
  border: 50px solid rgb(200, 0, 0);
  border-radius: 250px;
  position: absolute;
  top: -45px;
  left: -50px;
  /*
    1ª shadow: simula 3D no elemento, na parte interna
    2ª shadow: shadow interna para simular profundidade
    3ª shadow: simula 3D no elemento, na parte externa
    4ª shadow: shadow externa para simular profundidade
  */
  box-shadow:
    inset -1px -2px 0px 3px rgb(150, 0, 0),
    inset -1px -2px 10px 10px rgba(0, 0, 0, 0.5),
    -2px -2px 0px 3px rgb(150, 0, 0),
    -4px -4px 10px 10px rgba(0, 0, 0, 0.5);
}
{% endhighlight %}

Agora já podemos ver algo sem graça no browser com o código acima: um número 6 dentro de um círculo vermelho com um efeito 3D simulado.


## Posição no plano 3D

Vamos agora posicionar o pião no plano 3D. Mas antes uma breve explicação sobre o plano 3D em CSS.

Temos 3 eixos de coordenadas para posicionarmos os elementos relativos a eles.
O eixo __X é o eixo horizontal__ (esquerda-direita) e tem sua origem no ponto mais a esquerda.
O eixo __Y é o eixo vertical__ (cima-baixo) e, diferente de um plano cartesiano comum, tem seu início na parte mais acima do navegador.
Portanto, o ponto do seu navegador mais acima e a esquerda é o ponto de coordenadas X = 0 e Y = 0.

Mas para objetos 3D nós precisamos de mais um eixo, o eixo __Z__, que vai nos dar a sensação de __profundidade__.
Este eixo se inicia no monitor e cresce no sentido monitor &rarrw; você.
Então, quanto mais "distante" do monitor o objeto aparentar estar, maior o valor de Z.

Agora entendendo um pouco sobre o plano 3D, vamos organizar os elementos a fim de formar o pião.

{% highlight css %}
#piao > .numero.um {
  /*
    a rotação deste elemento é 0, o que já é o valor padrão
    então não há necessidade de redeclarar sua rotação
   */
}

#piao > .numero.dois {
  -webkit-transform: rotateY(60deg);
}

#piao > .numero.tres {
  -webkit-transform: rotateY(120deg);
}

#piao > .numero.quatro {
  -webkit-transform: rotateY(180deg);
}

#piao > .numero.cinco {
  -webkit-transform: rotateY(240deg);
}

#piao > .numero.seis {
  -webkit-transform: rotateY(300deg);
}
{% endhighlight %}

No trecho de CSS acima, nós giramos as faces em relação ao eixo Y.
Precisamos girar todas as faces a fim de fecharmos uma volta.
Como uma volta possui 360 graus e o pião possui 6 faces, então iremos rotacionar cada face em 60 graus mais a rotação da face anterior, ou seja, o primeiro elemento irá ser rotacionado em 60 graus, o segundo em 120 graus, o terceiro em 180 graus, e assim por diante até o último elemento.

Porém se rotacionarmos apenas no eixo Y os elementos, eles ficarão todos um por cima dos outros, apenas inclinados de forma diferente. Estarão todos no centro do que será nosso pião. Precisamos agora afastar as faces umas das outras. E para isso iremos usar a propriedade <code>translateZ</code>.

{% highlight css %}
#piao {
  ...
  -webkit-transform-style: preserve-3d;
}

#piao > .numero.um {
  -webkit-transform: translateZ(170px);
}

#piao > .numero.dois {
  -webkit-transform: rotateY(60deg) translateZ(170px);
}

#piao > .numero.tres {
  -webkit-transform: rotateY(120deg) translateZ(170px);
}

#piao > .numero.quatro {
  -webkit-transform: rotateY(180deg) translateZ(170px);
}

#piao > .numero.cinco {
  -webkit-transform: rotateY(240deg) translateZ(170px);
}

#piao > .numero.seis {
  -webkit-transform: rotateY(300deg) translateZ(170px);
}
{% endhighlight %}

Com o <code>transform-style: preserve-3d</code> estamos dizendo que os filhos diretos do elemento pião irão compartilhar o mesmo espaço 3D que o pai.
Caso contrário os elementos seriam renderizados de forma plana no elemento pai.

Depois, com a regra <code>translateZ</code>, estamos afastanto todos os elementos do seu ponto inicial no eixo Z.
Com o <code>rotateY</code> giramos todas as faces e com o <code>translateZ</code> é como se estivéssemos pedindo para que todas as faces dessem um passo de 170px à frente. Como giramos todas para um lado diferente, elas irão "caminhar" para um sentido diferente.

Com isso temos o nosso pião 3D, mas para deixar tudo mais interessante, vamos usar <code>animation</code> para fazer a rotação do pião.

## Animação em ritmo de festa

O efeito que queremos ver é o do pião rodando em relação ao seu eixo Y, o mesmo eixo em que rotacionamos as faces do pião.
Para isso iremos criar uma animação com o estado inicial no ponto 0 graus do eixo Y e estado final no 360 graus, ou seja, uma volta completa.

{% highlight css %}
/*
  animação para o pião rodar
  uma animação básica ao redor do eixo Y
*/
@-webkit-keyframes rodando {
  from { -webkit-transform: rotateY(0); }
  to   { -webkit-transform: rotateY(-360deg); }
}
{% endhighlight %}

No trecho acima definimos nossa animação e a chamamos de rodando (em homenagem).
Agora é só a usarmos no elemento que desejarmos.

{% highlight css %}
#piao {
  ...
  -webkit-animation: rodando 4s infinite linear;
}
{% endhighlight %}

Aqui dizemos que queremos animar o elemento pião, utilizando a animação "rodando", demorando 4 segundos para ir de seu estado inicial ao estado final, essa animação não irá parar (infinite) e a sua transição entre estados será linear.

Agora se checarmos no navegador, iremos finalmente ter nosso pião da casa própria em HTML5. E rodandooo.

## One more thing...

O Pião da Casa Própria não seria o mesmo sem a __clássica__ trilha sonnora. Então vamos adicioná-la ao experimento.
Iremos usar a nova tag <code>audio</code> para reproduzir a música sem a nececissade do Flash.
<!-- O seu uso é bastante simples.  -->
Basta declarar a tag <code>audio</code> e dentro dela as tags <code>source</code> com os caminhos para o mesmo arquivo salvo em diferentes codecs.

{% highlight html %}
<!-- trilha do pião da casa própria. máá ô-ê -->
<audio preload="auto" loop="true">
  <source src="piao-da-casa-propria-soundtrack.mp3" />
  <source src="piao-da-casa-propria-soundtrack.m4a" />
  <source src="piao-da-casa-propria-soundtrack.ogg" />
</audio>
{% endhighlight %}

O navegador irá tentar de cima para baixo executar os formatos, e quando achar um que possa reproduzir, irá carregar e não irá mais procurar por outros <code>source</code>.
O uso desta tag é necessário pois cada navegador dá suporte a um [diferente conjunto de codecs](http://html5doctor.com/native-audio-in-the-browser/).

Caso queiram escutar a trilha sonora agora e ver o pião rodando é só apertar o botão play no lado direito superior dentro do experimento, no [início](#experimento-piao) do post.
Utilizei a API JavaScript para controlar o comportamento da tag <code>audio</code>, mas para não perdemos o foco, essa API fica para um próximo post.

<aside class="fonte">
  <h3>Referência</h3>
  <ul>
    <li>→<a href="https://developer.mozilla.org/En/HTML/Element/Audio" alt="Mozilla Developer Network" title="Mozilla Developer Network">Mozilla Developer Network: audio</a></li>
    <li>→<a href="https://developer.mozilla.org/en/CSS/transform-style" alt="Mozilla Developer Network" title="Mozilla Developer Network">Mozilla Developer Network: transform style</a></li>
    <li>→<a href="http://www.webkit.org/blog-files/3d-transforms/morphing-cubes.html" alt="Webkit Morphing Cubes" title="Webkit Morphing Cubes">WebKit blog</a></li>
  </ul>
</aside>