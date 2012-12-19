---
title: CSS <span>blend modes</span>
layout: post
author: Almir Filho
author_link: http://twitter.com/almirfilho
author_profile: https://plus.google.com/111718150595519513871/
resumo: --
image: images/posts/2012-12-19-css-blend-modes.jpg
tags: css
keywords: css, css3, blend mode, blend, blend-mode, w3c, grafico, filter, filtros, mistura, backdrop, overlay, elemento, imagem
comments: false
---
<style>
	div.image-code pre { margin-top: -9px !important; }
</style>

Quem trabalha com imagens em aplicativos gráficos como Photoshop, Fireworks, etc.,
provavelmente já sabe do que se trata.
*Blending* é o ato de realizar **composições** entre cores.
E como acontece no Photoshop ou no Fireworks, muitas dessas composições já
estão pré-definidas e prontas para uso, essas composições são os **blend modes**, que agora
estão vindo a fazer parte do CSS – graças ao trabalho da **Adobe** –, assim como
já acontenceu com os [filtros CSS](http://loopinfinito.com.br/2012/04/14/css-filters/).

## Novas propriedades

Uma série de novas propriedades foram definidas: `alpha-compositing`, `blend-mode`, `isolation`,
e `knock-out`. Falarei sobre cada uma delas posteriormente, primeiro vamos começar pelo
óbvio: a propriedade `blend-mode`.

Vamos começar a brincadeira aplicando um *blend mode* a um determinado elemento:

<div class="image-code">
{% highlight css %}
img.blend {
    blend-mode: overlay;
}
{% endhighlight %}
</div>

Agora toda `img` com a classe `.blend` será renderizada como *overlay* (o veremos a seguir).

Com o intúito de melhorar a didática (vocês sabem como é aqui no Loop), iremos utilizar
a imagem abaixo como exemplo no decorrer deste post.

<figure>
	<img src="/images/posts/2012-12-19-original.jpg" title="Gostosas na praia (original)" alt="Gostosas na praia (original)" height="200" />
</figure>

## Entendendo blend modes

*Blending* é simplesmente fazer uma mistura de cores de um elemento com o que há
debaixo dele (também chamado de *backdrop*).
Essa mistura é realizada através de cálculos com as cores do elemento em questão
e seu respectivo *backdrop*.
Então, cada *blend mode* basicamente define uma **função matemática** que será
usada para obter uma determinada composição.
Caso queira saber mais sobre como estes cálculos são realizados,
[leia isso](http://www.w3.org/TR/compositing/#whatiscompositing).

Inicialmente já estão previstos **16 blend modes**, e poderemos utilizá-los através
da nova propriedade `blend-mode`, mas antes, vamos melhorar **só um pouquinho**
a nossa imagem de exemplo.

Vamos adicionar outras imagens em cima da mesma, e vamos considerar que estas
novas imagens são da classe `.heineken` (veja abaixo).

### normal

<figure>
	<img src="/images/posts/2012-12-19-normal.jpg" title="Gostosas na praia (normal)" alt="Gostosas na praia (normal)" height="200" />
</figure>

<div class="image-code">
{% highlight css %}
img.heineken {
    blend-mode: normal;
}
{% endhighlight %}
</div>

Como o próprio nome já diz, este não tem nada de mais, é apenas o valor de *blending*&nbsp;**padrão**
de qualquer elemento – este será renderizado sem nenhuma composição gráfica.

### multiply

<figure>
	<img src="/images/posts/2012-12-19-multiply.jpg" title="Gostosas na praia (multiply)" alt="Gostosas na praia (multiply)" height="200" />
</figure>

<div class="image-code">
{% highlight css %}
img.heineken {
    blend-mode: multiply;
}
{% endhighlight %}
</div>

### screen

<figure>
	<img src="/images/posts/2012-12-19-screen.jpg" title="Gostosas na praia (screen)" alt="Gostosas na praia (screen)" height="200" />
</figure>

<div class="image-code">
{% highlight css %}
img.heineken {
    blend-mode: screen;
}
{% endhighlight %}
</div>

### overlay

<figure>
	<img src="/images/posts/2012-12-19-overlay.jpg" title="Gostosas na praia (overlay)" alt="Gostosas na praia (overlay)" height="200" />
</figure>

<div class="image-code">
{% highlight css %}
img.heineken {
    blend-mode: overlay;
}
{% endhighlight %}
</div>

### darken

<figure>
	<img src="/images/posts/2012-12-19-darken.jpg" title="Gostosas na praia (darken)" alt="Gostosas na praia (darken)" height="200" />
</figure>

<div class="image-code">
{% highlight css %}
img.heineken {
    blend-mode: darken;
}
{% endhighlight %}
</div>

### lighten

<figure>
	<img src="/images/posts/2012-12-19-lighten.jpg" title="Gostosas na praia (lighten)" alt="Gostosas na praia (lighten)" height="200" />
</figure>

<div class="image-code">
{% highlight css %}
img.heineken {
    blend-mode: lighten;
}
{% endhighlight %}
</div>

### color-dodge

<figure>
	<img src="/images/posts/2012-12-19-color-dodge.jpg" title="Gostosas na praia (color-dodge)" alt="Gostosas na praia (color-dodge)" height="200" />
</figure>

<div class="image-code">
{% highlight css %}
img.heineken {
    blend-mode: color-dodge;
}
{% endhighlight %}
</div>

### color-burn

<figure>
	<img src="/images/posts/2012-12-19-color-burn.jpg" title="Gostosas na praia (color-burn)" alt="Gostosas na praia (color-burn)" height="200" />
</figure>

<div class="image-code">
{% highlight css %}
img.heineken {
    blend-mode: color-burn;
}
{% endhighlight %}
</div>

### hard-light

<figure>
	<img src="/images/posts/2012-12-19-hard-light.jpg" title="Gostosas na praia (hard-light)" alt="Gostosas na praia (hard-light)" height="200" />
</figure>

<div class="image-code">
{% highlight css %}
img.heineken {
    blend-mode: hard-light;
}
{% endhighlight %}
</div>

### soft-light

<figure>
	<img src="/images/posts/2012-12-19-soft-light.jpg" title="Gostosas na praia (soft-light)" alt="Gostosas na praia (soft-light)" height="200" />
</figure>

<div class="image-code">
{% highlight css %}
img.heineken {
    blend-mode: soft-light;
}
{% endhighlight %}
</div>

### difference

<figure>
	<img src="/images/posts/2012-12-19-difference.jpg" title="Gostosas na praia (difference)" alt="Gostosas na praia (difference)" height="200" />
</figure>

<div class="image-code">
{% highlight css %}
img.heineken {
    blend-mode: difference;
}
{% endhighlight %}
</div>

### exclusion

<figure>
	<img src="/images/posts/2012-12-19-exclusion.jpg" title="Gostosas na praia (exclusion)" alt="Gostosas na praia (exclusion)" height="200" />
</figure>

<div class="image-code">
{% highlight css %}
img.heineken {
    blend-mode: exclusion;
}
{% endhighlight %}
</div>

### hue

<figure>
	<img src="/images/posts/2012-12-19-hue.jpg" title="Gostosas na praia (hue)" alt="Gostosas na praia (hue)" height="200" />
</figure>

<div class="image-code">
{% highlight css %}
img.heineken {
    blend-mode: hue;
}
{% endhighlight %}
</div>

### saturation

<figure>
	<img src="/images/posts/2012-12-19-saturation.jpg" title="Gostosas na praia (saturation)" alt="Gostosas na praia (saturation)" height="200" />
</figure>

<div class="image-code">
{% highlight css %}
img.heineken {
    blend-mode: saturation;
}
{% endhighlight %}
</div>

### color

<figure>
	<img src="/images/posts/2012-12-19-color.jpg" title="Gostosas na praia (color)" alt="Gostosas na praia (color)" height="200" />
</figure>

<div class="image-code">
{% highlight css %}
img.heineken {
    blend-mode: color;
}
{% endhighlight %}
</div>

### luminosity

<figure>
	<img src="/images/posts/2012-12-19-luminosity.jpg" title="Gostosas na praia (luminosity)" alt="Gostosas na praia (luminosity)" height="200" />
</figure>

<div class="image-code">
{% highlight css %}
img.heineken {
    blend-mode: luminosity;
}
{% endhighlight %}
</div>

Se quiser saber mais detalhes a nível matemático sobre qualquer um desses
*blend modes*, dê uma sacada [aqui](http://www.w3.org/TR/compositing/#blending).

## Propriedades alpha-compositing, knock-out e isolation

Além da propriedade `blend-mode`, existem outras propriedades referentes a composição:
`alpha-compositing`, `knock-out` e `isolation`.

### alpha-compositing

Define o modo de composição usado quando é realizada a composição de um elemento.
Seu valor padrão é `source-over`, e existem mais
[12 possibilidades](http://www.w3.org/TR/compositing/#alpha-compositing).
Por ser um assunto bastante extenso e matemático demais, não entrarei em
detalhes, mas caso você queira saber mais sobre o assunto, visite a seção sobre
[Composição avançada](http://www.w3.org/TR/compositing/#advancedcompositing)
do *draft* da especificação W3C.

### knock-out

Define se um grupo de elementos é ou não um grupo *knock-out*.
A diferença em relação a um grupo normal é que os elementos de um grupo *knock-out* realizam
composição e *blending* apenas com os elementos de **fora do grupo** – ou seja, com o
**backdrop do grupo**, e os elementos do próprio grupo não são considerados.

Para entendermos melhor, vejamos o exemplo abaixo:

<figure>
	<img src="/images/posts/2012-12-19-knockout1.jpg" title="Gostosas na praia" alt="Gostosas na praia" height="200" />
</figure>

No exemplo acima temos um exemplo que mostra as mesmas duas imagens de antes com o seus
*blend-modes* como `darken`.
A diferença aqui é que elas estão se sobrepondo – note que a estrela sobrepõe a cerveja.
Agora, vamos considerar que estas duas imagens estão agrupadas dentro de uma `<div>` qualquer:

{% highlight html %}
<div>
    <img src="cerveja.jpg" />
    <img src="estrela.jpg" />
</div>
{% endhighlight %}

Agora compare a imagem acima com o exemplo abaixo. Consegue notar a diferença?
No exemplo abaixo, o grupo (a `<div>`) é um grupo *knock-out*.

<figure>
	<img src="/images/posts/2012-12-19-knockout2.jpg" title="Gostosas na praia (knock-out)" alt="Gostosas na praia (knock-out)" height="200" />
</figure>

<div class="image-code">
{% highlight css %}
div {
    knock-out: knock-out;
}
{% endhighlight %}
</div>

Perceba como os elementos de dentro do grupo realizam o *blending* apenas considerando
o **backdrop do grupo** e ignorando o outros elementos do mesmo grupo.
No nosso caso, a estrela ignora a cerveja e só faz o *blending* com o *backdrop*
da `<div>` (as gostosas ao fundo). O valor padrão de `knock-out` é `preserve`.

### isolation

Define se um grupo é isolado ou não (o comportamento padrão é *não isolado*).
Dizer que um grupo é isolado implica em dizer que os elementos de um mesmo grupo realizarão
*blending* usando um *backdrop* preto e totalmente transparente – `rgba(0, 0, 0, 0)` –,
em vez do *backdrop* normal.
Para mais detalhes, [leia isso](http://www.w3.org/TR/compositing/#isolationblending).

## Blend-modes no background!

No próximo *post* falarei sobre como é possível aplicar tudo o que vimos aqui hoje
apenas aos *backgrounds* dos elementos (o post já está grande demais).
Então podem aguardar mais coisa boa vindo por ai.

## Suporte

Nenhum navegador ainda se aventurou em implementar nenhuma dessas novidades que
acabamos de ver. E também não há previsões.

### Mas calma lá!

A Adobe fez um *fork* do **Chromium**, implementou
algumas funcionalidades e disponibilizou para demonstrar o uso dos *blend modes*.
Se você estiver afim de testar, faça o download do Chromium deles
[aqui](https://github.com/adobe/webkit/downloads) e teste acessando
[essa página de testes](http://adobe.github.com/web-platform/demos/compositing/blend-photogallery/index.html).
Eu fiz o teste e é show de bola.

## Blend modes no *background*?

<figure>
	<img src="/images/bottini.jpg" title="Não tem problema!" alt="Não tem problema!" height="200" />
</figure>

Também é possível aplicar um *blend mode* apenas no **background** de um elemento.
Por exemplo, se tivermos uma `<div>` com uma imagem de fundo e que contenha outros
elementos:

{% highlight html %}
<div>
    <h1>Título</h1>
    <p>Lorem Ipsum</p>
</div>
{% endhighlight %}

E com o CSS:

{% highlight css %}
div {
    background-image: url(imagem.jpg);
    background-blend-mode: hard-light;
}
{% endhighlight %}

O *blend mode*&nbsp;`hard-light` será aplicado apenas à imagem de fundo da `<div>`,
e não ao seu conteúdo (`<h1>` e `<p>`).

### Mas Bottini, e multiplos backgrounds?

**Também não tem problema!**
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## E um feliz natal! Hohoho!

É isso ai pessoal, este foi o meu último post ano. Espero ter fechado com chave de ouro =D
Boas festas a todos, e nos encontramos por aqui em 2013! o/

<aside class="fonte">
    <h3>Referência</h3>
    <ul>
        <li>→<a href="http://www.w3.org/TR/compositing/" alt="Compositing and Blending 1.0" title="Compositing and Blending 1.0">Compositing and Blending 1.0</a> <span class="comment">// W3C</span></li>
    </ul>
</aside>