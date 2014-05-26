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
.galeria {
	display: block;
	box-sizing: border-box;
	width: 700px;
	position: relative;
	left: -50px;
	font-size: 0;
	text-align: center;
	line-height: 0;
}
#content .post-container article > section img.galeria-img {
	position: static;
	display: inline-block;
	left: 0;
	width: 140px;
	height: 140px;
	border: 1px solid #ccc;
	margin: 12px;
	font-size: 15px;
	background: #ddd;
}
#content .post-container article > section img.galeria-img.original {
	width: auto;
	height: auto;
}
.galeria-img.fill {
	object-fit: fill;
}
.galeria-img.none {
	object-fit: none;
}
.galeria-img.cover {
	object-fit: cover;
}
.galeria-img.contain {
	object-fit: contain;
}
.galeria-img.scale-down {
	object-fit: scale-down;
}
.galeria-figure {
	display: inline-block;
}
.galeria-figure figcaption {
	font-size: 13px;
	line-height: 150%;
}
.galeria-arrow {
	display: inline-block;
	width: 37px;
	height: 30px;
	background: url(/images/posts/2014-05-27-arrow.png);
	vertical-align: 75px;
	margin: 0 20px;
}
.galeria-arrow.small {
	margin: 0;
}
.galeria-arrow.tall {
	vertical-align: 120px;
}
</style>

Perambulando pelos padrões da W3C, encontrei uma coisa bem interessante na
[especificação de imagens CSS3](http://www.w3.org/TR/css3-images/) — a mesma que
define os gradientes. Trata-se do modo de definição de tamanhos para imagens com
as propriedades CSS `object-fit` e `object-position`, o que achei bastante útil
principalmente para quando precisamos construir miniaturas (<em>thumbnails</em>)
para visualizar imagens. Abaixo temos uma mini galeria com algumas imagens.

<div class="galeria">
	<img src="/images/posts/2014-05-27-miniatura1.jpg" alt="Imagem 1" class="galeria-img fill" />
	<img src="/images/posts/2014-05-27-miniatura1.jpg" alt="Imagem 2" class="galeria-img none" />
	<img src="/images/posts/2014-05-27-miniatura1.jpg" alt="Imagem 3" class="galeria-img cover" />
	<img src="/images/posts/2014-05-27-miniatura1.jpg" alt="Imagem 4" class="galeria-img contain" />
	<img src="/images/posts/2014-05-27-miniatura2.jpg" alt="Imagem 5" class="galeria-img fill" />
	<img src="/images/posts/2014-05-27-miniatura2.jpg" alt="Imagem 6" class="galeria-img none" />
	<img src="/images/posts/2014-05-27-miniatura2.jpg" alt="Imagem 7" class="galeria-img cover" />
	<img src="/images/posts/2014-05-27-miniatura2.jpg" alt="Imagem 8" class="galeria-img contain" />
</div>

As miniaturas acima foram compostas __apenas__ com o elemento `<img>`, ou seja,
não foi preciso fazer uso de um elemento pai para servir de _empacotador_ para a
imagem — coisa que é muito comum na construção de miniaturas, constuma-se
utilizar uma `<div>` com `overflow: hidden` e fazer o redimensionamento da
imagem para acompanhar o tamanho da `<div>`.

{% highlight html %}
<!-- Isso -->
<img class="galeria-img" src="einstein.jpg" alt="Einstein" />

<!-- Não isso -->
<div class="galeria-thumb">
    <img  class="galeria-img" src="einstein.jpg" alt="Einstein" />
</div>
{% endhighlight %}

Note que as quatro primeiras imagens são a mesma imagem, assim como as quatro
últimas. A imagem do Einstein tem uma orientação de retrato (altura maior que
largura), enquanto que a imagem do Chico Science tem uma orientação de paisagem
(largura maior que altura).


## object-fit

Cada uma das quatro ocorrências dessas imagens tem um comportamento diferente.
Esse comportamento é definido através da propriedade `object-fit`, e com o uso
dessa propriedade, fica visível que há uma separação entre o __elemento
invólucro__ (pai) e o __conteúdo__ (<em>bitmap</em>) da imagem — o que já dá
para perceber se utilizarmos a propriedade `padding` em uma imagem.

Então, o elemento `<img>` não é apenas um elemento, afinal de contas; mas pelo
menos dois — assim como a maioria dos elementos HTML, afinal, a [Shadow
DOM](http://loopinfinito.com.br/2012/07/17/sou-dom-shadow-dom/ "Sou DOM, Shadow
DOM") está aí.

A propriedade `object-fit` define como o conteúdo da imagem é apresentado em
relação ao seu elemento invólucro (elemento pai), e pode ter seu valor igual a
`fill`, `none`, `cover`, `contain` ou `scale-down`. Para notar as diferenças do
uso dessa propriedade, é necessário que a imagem em questão tenha altura e
largura definidas. No nosso exemplo acima temos ambas as dimensões com 140
_pixels_:

{% highlight css %}
.galeria-img {
    width: 140px;
    height: 140px;
}
{% endhighlight %}

Agora, vamos ao que interessa.

### fill

Este é o valor padrão para `object-fit`. Para uma imagem com com altura e
largura definidas, sua forma será __achatada__ se a proporção resultante for
diferente da original (comportamento padrão das imagens até então).

<div class="galeria">
	<figure class="galeria-figure">
		<img src="/images/posts/2014-05-27-miniatura1.jpg" alt="Imagem Original" class="galeria-img original" />
		<figcaption>Imagem original</figcaption>
	</figure>
	<div class="galeria-arrow"> </div>
	<figure class="galeria-figure">
		<img src="/images/posts/2014-05-27-miniatura1.jpg" alt="Imagem com fill" class="galeria-img fill" />
		<figcaption>140x140px com <code>fill</code></figcaption>
	</figure>
</div>

{% highlight css %}
.galeria-img {
    width: 140px;
    height: 140px;
    object-fit: fill;
}
{% endhighlight %}

### none

Com `none`, não é realizado nenhum processamento na imagem, mas ela será
"_cropada_" (<em>crop</em>) pelas dimensões definidas, ou seja, será renderizada
com seu _bitmap_ inalterado, porém __cortado__. Com um exemplo fica mais fácil de
entender:

<div class="galeria">
	<figure class="galeria-figure">
		<img src="/images/posts/2014-05-27-miniatura1.jpg" alt="Imagem Original" class="galeria-img original" />
		<figcaption>Imagem original</figcaption>
	</figure>
	<div class="galeria-arrow"> </div>
	<figure class="galeria-figure">
		<img src="/images/posts/2014-05-27-miniatura1.jpg" alt="Imagem com none" class="galeria-img none" />
		<figcaption>140x140px com <code>none</code></figcaption>
	</figure>
</div>

{% highlight css %}
.galeria-img {
    width: 140px;
    height: 140px;
    object-fit: none;
}
{% endhighlight %}

Agora, vejamos o que acontece quando uma das dimensões definidas excede sua
correspondente original:

<div class="galeria">
	<figure class="galeria-figure">
		<img src="/images/posts/2014-05-27-miniatura1.jpg" alt="Imagem Original" class="galeria-img original" />
		<figcaption>Imagem original</figcaption>
	</figure>
	<div class="galeria-arrow"> </div>
	<figure class="galeria-figure">
		<img src="/images/posts/2014-05-27-miniatura1.jpg" alt="Imagem com none" class="galeria-img none" style="width: 220px;" />
		<figcaption>220x140px com <code>none</code></figcaption>
	</figure>
</div>

{% highlight css %}
.galeria-img {
    width: 220px;
    height: 140px;
    object-fit: none;
}
{% endhighlight %}

Como dito, nenhumo processamento foi feito na imagem, e ala mantem seu tamnaho
original. Pode-se perceber também que, nesses dois exemplos, a imagem resultante
foi posicionada de forma centralizada. Veremos isso mais adiante com a
propriedade [`object-position`](#objectposition).

### cover

Igualmente a `none`, mantém a proporção original da imagem, porém faz um
redimensionamento na imagem para que esta possa __preencher__ toda a área
definida pelas dimensões especificadas. A seguir temos o mesmo exemplo do caso
anterior, a única coisa que muda é o valor de `object-fit` para `cover`.

<div class="galeria">
	<figure class="galeria-figure">
		<img src="/images/posts/2014-05-27-miniatura1.jpg" alt="Imagem Original" class="galeria-img original" />
		<figcaption>Imagem original</figcaption>
	</figure>
	<div class="galeria-arrow"> </div>
	<figure class="galeria-figure">
		<img src="/images/posts/2014-05-27-miniatura1.jpg" alt="Imagem com cover" class="galeria-img cover" style="width: 220px;" />
		<figcaption>220x140px com <code>cover</code></figcaption>
	</figure>
</div>

{% highlight css %}
.galeria-img {
    width: 220px;
    height: 140px;
    object-fit: cover;
}
{% endhighlight %}

### contain

Mantém a proporção original como em `cover`, mas faz um redimensionamento na
imagem de modo que esta não seja cortada e seja __mostrada completamente__
dentro da área definida pelas dimensões especificadas.

<div class="galeria">
	<figure class="galeria-figure">
		<img src="/images/posts/2014-05-27-miniatura1.jpg" alt="Imagem Original" class="galeria-img original" />
		<figcaption>Imagem original</figcaption>
	</figure>
	<div class="galeria-arrow"> </div>
	<figure class="galeria-figure">
		<img src="/images/posts/2014-05-27-miniatura1.jpg" alt="Imagem com contain" class="galeria-img contain" />
		<figcaption>140x140px com <code>contain</code></figcaption>
	</figure>
</div>

{% highlight css %}
.galeria-img {
    width: 140px;
    height: 140px;
    object-fit: contain;
}
{% endhighlight %}

### scale-down

Esse é um valor que pode causar um pouco de confusão. Ele fará com que a imagem
se comporte de dois jeitos diferentes, dependendo do seu tamanho. `scale-down`
irá sempre se comportar igual a `none` ou `contain`. O comportamente resultante
irá ser sempre o que representar um __menor tamanho__ de imagem desenhada — e
isso dependerá das dimensões originais da imagem e das dimensões definidas para
o elemento `<img>`. De novo, com um exemplo fica mais fácil:

<div class="galeria">
	<figure class="galeria-figure">
		<img src="/images/posts/2014-05-27-miniatura1.jpg" alt="Imagem Original" class="galeria-img original" />
		<figcaption>Imagem original</figcaption>
	</figure>
	<div class="galeria-arrow small tall"> </div>
	<figure class="galeria-figure">
		<img src="/images/posts/2014-05-27-miniatura1.jpg" alt="Imagem com scale-down" class="galeria-img scale-down" style="height:250px; width:120px;" />
		<figcaption>120x250px <code>scale-down</code></figcaption>
	</figure>
	<div class="galeria-arrow small tall"> </div>
	<figure class="galeria-figure">
		<img src="/images/posts/2014-05-27-miniatura1.jpg" alt="Imagem com scale-down" class="galeria-img scale-down" style="height:250px; width:200px;" />
		<figcaption>200x250px com <code>scale-down</code></figcaption>
	</figure>
</div>

{% highlight css %}
.einstein-fit-1 {
    width: 120px;
    height: 250px;
    object-fit: scale-down;
}

.einstein-fit-2 {
    width: 200px;
    height: 250px;
    object-fit: scale-down;
}
{% endhighlight %}

Podemos perceber que nas duas imagens temos a mesma altura, e apenas mudamos a
largura de um para o outro. No primeiro caso, `scale-down` se comporta como
`contain`, pois `none` resultaria numa imagem maior. Já no segundo caso, temos o
oposto, `scale-down` se comporta como `none`, pois `contain` resultaria numa
imagem maior. Simples, não é?


## object-position

O propósito de `object-position` é bem simples: posicionar o conteúdo da imagem
dentro do emento `<img>`. O seu valor é definido exatamente da mesma maneira que
a propriedade `background-position`. No exemplo a seguir temos imagens definidas
com `object-fit: cover` e modificamos seu alinhamento vertical.

<div class="galeria">
	<figure class="galeria-figure">
		<img src="/images/posts/2014-05-27-miniatura1.jpg" alt="Imagem com cover" class="galeria-img cover" />
		<figcaption>140x140px com <code>cover</code></figcaption>
	</figure>
	<div class="galeria-arrow small"> </div>
	<figure class="galeria-figure">
		<img src="/images/posts/2014-05-27-miniatura1.jpg" alt="Imagem com cover" class="galeria-img cover" style="object-position:50% 0%;" />
		<figcaption>140x140px com <code>cover</code> no topo</figcaption>
	</figure>
	<div class="galeria-arrow small"> </div>
	<figure class="galeria-figure">
		<img src="/images/posts/2014-05-27-miniatura1.jpg" alt="Imagem com cover" class="galeria-img cover" style="object-position:50% 100%;" />
		<figcaption>140x140px com <code>cover</code> na base</figcaption>
	</figure>
</div>

{% highlight css %}
.einstein-fit-1 {
    object-fit: cover;
    object-position: 50% 50%; /* valor padrão */
}

.einstein-fit-2 {
    object-fit: cover;
    object-position: 50% 0%; /* alinhada ao topo */
}

.einstein-fit-3 {
    object-fit: cover;
    object-position: 50% 100%; /* alinhada à base */
}
{% endhighlight %}

Agora, para ilustrar o alinhamento horizontal, no exemplo a seguir temos imagens
definidas com `object-fit: contain`.

<div class="galeria">
	<figure class="galeria-figure">
		<img src="/images/posts/2014-05-27-miniatura1.jpg" alt="Imagem com contain" class="galeria-img contain" />
		<figcaption>140x140px com <code>contain</code></figcaption>
	</figure>
	<div class="galeria-arrow small"> </div>
	<figure class="galeria-figure">
		<img src="/images/posts/2014-05-27-miniatura1.jpg" alt="Imagem com contain" class="galeria-img contain" style="object-position:0% 50%;" />
		<figcaption>140x140px com <code>contain</code> no topo</figcaption>
	</figure>
	<div class="galeria-arrow small"> </div>
	<figure class="galeria-figure">
		<img src="/images/posts/2014-05-27-miniatura1.jpg" alt="Imagem com contain" class="galeria-img contain" style="object-position:100% 50%;" />
		<figcaption>140x140px com <code>contain</code> na base</figcaption>
	</figure>
</div>

{% highlight css %}
.einstein-fit-1 {
    object-fit: contain;
    object-position: 50% 50%; /* valor padrão */
}

.einstein-fit-2 {
    object-fit: contain;
    object-position: 0% 50%; /* alinhada à esquerda */
}

.einstein-fit-3 {
    object-fit: contain;
    object-position: 100% 50%; /* alinhada à direita */
}
{% endhighlight %}

Claro que também é possível utilizar outras unidades como `px`, `em`, etc. e
valores negativos também.

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
            <td class="property"><code>object-fit</code></td>
            <td>31</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>19</td>
        </tr>
        <tr>
            <td class="property"><code>object-position</code></td>
            <td>31</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>19</td>
        </tr>
    </tbody>
</table>

Informações segundo o [caniuse](http://caniuse.com/#search=object-fit "object-fit no caniuse.com").
Apenas o Google Chrome e o Opera dão suporte atualmente (logicamente, agora que
o Opera também usa o blink).
