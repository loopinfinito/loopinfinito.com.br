---
title: Miniaturas simplificadas com <span>CSS3</span>
layout: post
author: Almir Filho
author_link: http://twitter.com/almirfilho
author_profile: https://plus.google.com/111718150595519513871/
image: images/posts/2014-05-27-miniaturas.jpg
tags:
comments: false
keywords: >
  miniaturas
resumo: >
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
related:
  - title: CSS Image Values and Replaced Content Module Level 3
    url: http://www.w3.org/TR/css3-images/
    from: W3C
---
<style type="text/css">
.example-thumbs {
	font-size: 0;
	text-align: center;
}
.example-thumbs figure {
	display: inline-block;
	margin-left: 15px;
}
.example-thumbs figure:first-child {
	margin-left: 0;
}
.example-thumbs figcaption {
	font-size: 13px;
	text-align: center;
}
#content .post-container article > section .example-thumbs img {
	position: static;
	width: auto;
}
#content .post-container article > section .example-thumbs img.img-achatada {
	width: 189px;
	height: 117px;
}
#content .post-container article > section .example-thumbs img.img-proporcional {
	width: 130px;
}
</style>

Perambulando pelos padrões da W3C, encontrei uma coisa bem interessante na
[especificação de imagens CSS3](http://www.w3.org/TR/css3-images/) — a mesma que
define os gradientes. Trata-se do modo de definição de tamanhos para imagens, o
que achei bastante útil principalmente para quando precisamos construir
miniaturas (_thumbnails_) para visualizar imagens.

A seguir está resumido como fazemos para definir tamanhos de imagens
normalmente, mas se quiser, pode pular essa parte e [ir direto pro que
interessa](#miniaturas).

## Relembrando imagens

Sabemos que podemos controlar o tamanho de uma imagem principalmente de duas
maneiras: atributos HTML ou propriedades CSS. Com HTML:

{% highlight html %}
<img width="700" height="432" src="einstein.jpg" alt="Einstein Big Bang!" />
{% endhighlight%}

Ou com CSS:

{% highlight css %}
img {
    width: 700px;
    height: 432px;
}
{% endhighlight %}

Se as dimensões especificadas resultarem em uma proporção diferente da imagem
original, então a imagem resultante será achatada. Sabemos também que se
omitirmos as definições de dimensões, a imagem será renderizada com seu tamanho
original. Já se definirmos apenas uma das dimensões, a outra será calculada
respeitando-se a proporção original da imagem. Até aqui, nenhuma novidade.
Abaixo são mostrados os diferentes resultados dessas combinações.

<div class="example-thumbs">
	<figure>
		<img src="/images/posts/2014-05-27-einstein.jpg" alt="Tamanho original" />
		<figcaption>Original (189x227)</figcaption>
	</figure>
	<figure>
		<img src="/images/posts/2014-05-27-einstein.jpg" alt="Tamanho achatado" class="img-achatada" />
		<figcaption>Achatada (189x117)</figcaption>
	</figure>
	<figure>
		<img src="/images/posts/2014-05-27-einstein.jpg" alt="Tamanho proporcional" class="img-proporcional" />
		<figcaption>Proporcional (130x156)</figcaption>
	</figure>
</div>

{% highlight html %}
<img src="einstein.jpg" alt="Original" />
<img src="einstein.jpg" alt="Achatada" width="189" height="117" />
<img src="einstein.jpg" alt="Proporcional" width="130" />
{% endhighlight%}

## Miniaturas

Miniaturas sempre dão trabalho. Eis o porquê. Galerias quando mostradas em forma
de miniaturas têm que ser organizadas de forma homogênea, como se fosse um
grande tabelão — ou _grid_. Isso seria bem fácil se todas as imagens tivessem a
mesma proporção, mas não é o que acontece. Imagens podem ser de três tipos
simples de proporções, o que reflete em seu tipo de orientação: retrato (altura
maior que largura), paisagem (largura maior que altura) ou quadrada (largura
igual a altura). Dispor todos esses tamanhos de forma organizada numa _grid_ (e
de forma dinâmica) é algo nada simples de se fazer, visto que não há uma solução
pronta para isso. Então, geralmente se opta por montar uma _grid_ com
espaçamentos (_slots_) quadrados e fazer com que cada imagem se ajuste lá dentro
de alguma maneira.


