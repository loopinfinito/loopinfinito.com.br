---
title: CSS Filters
layout: post
author: Caio Gondim
author_link: http://twitter.com/caio_gondim
resumo: A Adobe, Apple e Opera estão <a href="https://dvcs.w3.org/hg/FXTF/raw-file/tip/filters/index.html">trabalhando juntas</a> para trazer alguns efeitos no estilo Photoshop para o CSS. Esses efeitos, chamados de filtros, irão nos permitir modificar a renderização de qualquer elemento DOM, de um simples <code>p</code>, até elementos mais complexos como <code>image</code> ou <code>video</code>.
tags: CSS
keywords: css, css filters, html5, adobe, apple, webkit, frontend, front end, webdev, desenvolvimento web
comments: true
---
<style>

	#cssfilter-img-base:hover {
		-webkit-transition: all 1s linear;
	}

	#cssfilter-img-base:hover {
		-webkit-filter: saturate(4);
	}

</style>
A Adobe, Apple e Opera estão <a href="https://dvcs.w3.org/hg/FXTF/raw-file/tip/filters/index.html">trabalhando juntas</a> para trazer alguns efeitos no estilo Photoshop para o CSS.
Esses efeitos, chamados de filtros, irão nos permitir modificar a renderização de qualquer elemento DOM, de um simples <code>p</code>, até elementos mais complexos como <code>image</code> ou <code>video</code>.

Alguns dos efeitos já definidos na especificação são <code>grayscale</code>, <code>blur</code>, <code>sepia</code>, <code>saturate</code>, <code>opacity</code>, <code>brightness</code>, <code>contrast</code>, <code>hue-rotate</code> e <code>invert</code>.
Aos familiarizados com Photoshop ou qualquer programa de edição de imagem, eles devem ser bastante auto-explicativos.
Mas de qualquer forma, vamos explorar cada filtro, um a um.

Em todos os exemplos, iremos usar a imagem abaixo como base.
Para verificar se o seu navegador suporta o CSS Filter, apenas passe o mouse por cima da imagem. Se ela modificar (saturar), quer dizer que o seu navegador suporta e já está aplicando um filtro no evento hover desta imagem.

<p><img src="http://loopinfinito.com.br/images/posts/jeri.jpg" id="cssfilter-img-base" /></p>

## Grayscale
<p><img src="http://loopinfinito.com.br/images/posts/jeri-grayscale.png" /></p>
Com o filtro <code>grayscale</code> nós indicamos o quão preto-e-branco queremos que o elemento fique, numa escala de 0 a 1 ou 0% 100%.

<pre><code data-language="css">
img {
    -webkit-filter: grayscale(100%);
}
</code></pre>

## Blur
<p><img src="http://loopinfinito.com.br/images/posts/jeri-blur.png" /></p>
Com o filtro <code>blur</code> podemos embaçar um elemento. Algo parecido como ver uma foto sem óculos (eu imagino que seja assim).
Os valores são definidos em pixels. Quanto maior o valor, mais embaçado o elemento.

<pre><code data-language="css">
img {
    -webkit-filter: blur(3px);
}
</code></pre>

## Sepia
<p><img src="http://loopinfinito.com.br/images/posts/jeri-sepia.png" /></p>
Este efeito é normamelmente usado em fotos, dando a elas um efeito de fotos antigas.
Os valores do efeito vão de 0 a 1.

<pre><code data-language="css">
img {
    -webkit-filter: sepia(1);
}
</code></pre>

## Saturate
<p><img src="http://loopinfinito.com.br/images/posts/jeri-saturate.png" /></p>
Com o <code>saturate</code> modificamos o canal saturação da cores do elemento. 
Quanto maior a saturação, mais vivas as cores estarão, e quanto menor a saturação, mais próximas do cinza elas estarão.
Com o <ceode>saturate</ceode> em 0, obtemos o mesmo resultado que o <code>grayscale</code> em 100%

<pre><code data-language="css">
img {
    -webkit-filter: saturate(4);
}
</code></pre>

## Opacity
<p><img src="http://loopinfinito.com.br/images/posts/jeri-opacity.png" /></p>
Ok, esse é bastante fácil. Simplesmente mude a opacidade do elemento.
Os valores vão de 0 a 1. 0 deixa o elemento invisível.

<pre><code data-language="css">
img {
    -webkit-filter: opacity(0.5);
}
</code></pre>

## Brightness
<p><img src="http://loopinfinito.com.br/images/posts/jeri-brightness.png" /></p>
O <code>brightness</code> altera o brilho do elemento. Os valores vão de 100% a 0%. Em 100%, com o brilho no máximo, o elemento fica totalmente branco.

<pre><code data-language="css">
img {
    -webkit-filter: brightness(50%);
}
</code></pre>

## Contrast
<p><img src="http://loopinfinito.com.br/images/posts/jeri-contrast.png" /></p>
Também bastante óbvio. Aqui alteramos a saturação do elemento. 
O valor desse filtro pode ser expresso em unidades (0, 1, 3, 4, ...) ou em percentagem (0%, 100%, 1500%).

<pre><code data-language="css">
img {
    -webkit-filter: constrast(1.5);
}
</code></pre>

## Hue Rotate
<p><img src="http://loopinfinito.com.br/images/posts/jeri-hue-rotate.png" /></p>
Neste filtro podemos mover todas as cores do elemento em graus dentro da roda de cores.
Com 0deg não iremos realizar nenhuma alteração, enquanto com 180deg iremos inverter todas as cores.

<pre><code data-language="css">
img {
    -webkit-filter: hue-rotate(180deg);
}
</code></pre>

## Invert
<p><img src="http://loopinfinito.com.br/images/posts/jeri-invert.png" /></p>
Com o <code>invert</code> invertemos todas as cores.
Na verdade a inversão completa acontece apenas se usarmos o valor 100%.
Com 50% as cores estarão no meio caminho entre suas cores invertidas, o que significa que estarão com um tom de cinza.
Os valores vão de 0% a 100%.

<pre><code data-language="css">
img {
    -webkit-filter: invert(100%);
}
</code></pre>

## Vários filtros
<p><img src="http://loopinfinito.com.br/images/posts/jeri-various.png" /></p>
Também é possível o uso de vários filtros em conjunto, para obtermos um efeito mais único.
Na imagem acima usamos <code>hue-rotate</code> e <code>sepia</code>.

<pre><code data-language="css">
img {
    -webkit-filter: hue-rotate(60deg) sepia(1);
}
</code></pre>

Como podemos ver o CSS Filters vem adicionar ainda mais poder ao HTML5. E isto é só uma prévia do que há por vir, como os <a href="http://www.youtube.com/watch?v=NZRqnohI3m4">CSS Shaders</a>.

No momento em que escrevo este post, os CSS Filters rodam no <a href="http://tools.google.com/dlpage/chromesxs">Google Chrome Canary</a>, <a href="http://www.google.com/chrome/intl/en/eula_dev.html">Google Chrome dev channel</a> e <a href="http://nightly.webkit.org/">WebKit Nightly Build</a>.

<aside class="fonte">
	<h3>Referência</h3>
	<ul>
		<li>→<a href="http://net.tutsplus.com/tutorials/html-css-techniques/say-hello-to-css3-filters/">NetTuts</a></li>
		<li>→<a href="http://davidwalsh.name/css-filters">David Walsh</a></li>
		<li>→<a href="http://updates.html5rocks.com/2011/12/CSS-Filter-Effects-Landing-in-WebKit">HTML5 Rocks</a></li>
		<li>→<a href="https://dvcs.w3.org/hg/FXTF/raw-file/tip/filters/index.html">W3C</a></li>
	</ul>
</aside>