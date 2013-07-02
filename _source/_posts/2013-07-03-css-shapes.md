---
title: CSS <span>shapes</span>
layout: post
author: Almir Filho
author_link: http://twitter.com/almirfilho
author_profile: https://plus.google.com/111718150595519513871/
image: images/posts/2013-07-03-css-shapes.jpg
tags:
comments: false
keywords: >

resumo: >
  Sabe quando você vai ler uma revista, e no meio do texto há uma imagem
  irregular, mas o texto elegantemente a _contorna_, respeitanto sua forma?
  Ou quando aparece por exemplo, um gráfico de pizza, e dentro de cada fatia tem
  um texto que se _adequa_ a forma dela?
  Pois é, agora podemos fazer o mesmo com CSS.
related:
  - title: CSS Shapes Module Level 1 (draft)
    url: http://www.w3.org/TR/css-shapes/
    from: W3C
---

Sabe quando você vai ler uma revista, e no meio do texto há uma imagem
irregular, mas o texto elegantemente a _contorna_, respeitanto sua forma?
Ou quando aparece por exemplo, um gráfico de pizza, e dentro de cada fatia tem
um texto que se _adequa_ a forma dela?

Pois é, eu não faço a mínima idéia de como eles fazem isso.
Só sei que agora podemos fazer o mesmo com CSS!

Se você ainda não entendeu nada, dê uma boa olhada na imagem a seguir.

![Penhasco com texto](/images/posts/2013-07-03-css-shapes1.jpg)

Não estou falando das colunas, isso é assunto para outro _post_ ;)
Perceba como o texto da coluna direita acompanha a forma do penhasco.

Mas antes de falar das aplicações das _CSS shapes_, vamos primeiramente
entender do que se tratam estas entidades.

## CSS shapes

_Shapes_ são formas geométricas que definem contornos os quais conteúdos
_inline_ flutuam – ou seja, conteúdo textual e inicialmente imagens e elementos
definidos com `display: inline` ou `display: inline-block`.

<blockquote>
  <p>Shapes define arbitrary geometric contours around which inline content flows.</p>
  <footer> – <abbr title="World Wide Web Consortium">W3C</abbr> Public Working Draft 20 June 2013</footer>
</blockquote>

A Adobe e a Microsoft estão por trás desta especificação –
[CSS Shapes Module Level 1](http://www.w3.org/TR/css-shapes/) – cujo trabalho
ainda está em andamento, porém já podemos testar e brincar com várias coisas
graças ao Google Chrome.

## Formas básicas

Inicialmente, há 4 formas básicas definidas:

- Retângulo: através das funções `rectangle()` e `inset-rectangle()`;
- Círculo: através da função `circle()`;
- Elípse: através da função `ellipse()`;
- Polígono: através da função `polygon()`.

Vale observar que todos os valores usados como parâmetros destas funções podem
ser absolutos (`px`, `in`, `pt`, `cm`, etc.) ou relativos (`%`, `em`, `rem`,
`ex`, etc.)

### rectangle()

{% highlight css %}
/* rectangle(x, y, width, height, rx, ry) */
   rectangle(0, 0, 100px, 80px, 20%, 40%)
{% endhighlight %}

- `x` e `y`: coordenadas do ponto inicial nos _eixos X e Y_ (horizontal e vertical);
- `width` e `height`: largura e altura;
- `rx` e `ry`: raio dos cantos nas direções horizontal e vertical
(para bordas arredondadas) (opcional);

### inset-rectangle()

{% highlight css %}
/* inset-rectangle(top, right, bottom, left, rx, ry) */
   inset-rectangle(10%, 20%, 40px, 20%, 8px, 8px)
{% endhighlight %}

- `top`, `right`, `bottom` e `left`: Define o retângulo em relação ao seu
elemento ancestral;
- `rx` e `ry`: raio dos cantos nas direções horizontal e vertical
(para bordas arredondadas) (opcional);

### circle()

{% highlight css %}
/* circle(cx, cy, radius) */
   circle(50%, 50%, 80px)
{% endhighlight %}

- `cx` e `cy`: coordenadas do ponto central nos _eixos X e Y_
(horizontal e vertical);
- `radius`: raio do círculo;

### ellipse()

{% highlight css %}
/* circle(cx, cy, rx, ry) */
   circle(50%, 50%, 80px, 200px)
{% endhighlight %}

- `cx` e `cy`: coordenadas do ponto central nos _eixos X e Y_
(horizontal e vertical);
- `rx` e `ry`: raios nos _eixos X e Y_ (horizontal e vertical);

### polygon()

{% highlight css %}
/* polygon(x1 y1, x2 y2, ..., xn yn) */
   polygon(10px 10px, 20px 10px, 20px 20px) /* um triângulo */
{% endhighlight %}

- `xn` e `yn`: tuplas com as coordenadas dos pontos do polígono no _eixos X e Y_
(horizontal e vertical). O polígono será fechado automaticamente ligando-se o
primeiro ao último ponto da lista;

## Propriedades

dasdasdas

### shape-outside

dasdasdas

### shape-margin

dadasdasd

### shape-image-threshold

dasdasaad

## Propriedades que saíram da spec

dasdasdasd

### shape-inside

dasdasdas

### shape-padding

dsadasd

## Voltando ao exemplo inicial

Como prometido, agora que já sabemos tudo sobre CSS Shapes, vamos implementar
o exemplo inicial deste _post_. Abaixo temos a mesma foto com seu texto removido
(obrigado Photoshop):

![Penhasco sem texto](/images/posts/2013-07-03-css-shapes1.jpg)

Vamos utlizar esta imagem como fundo de uma `<div>` qualquer que contenha algum
conteúdo textual:

<div class="img example" id="exemplo">
fazer css =P
</div>

## Suporte

dasdasdsa