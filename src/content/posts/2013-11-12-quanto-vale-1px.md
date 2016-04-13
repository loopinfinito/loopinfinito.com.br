---
title: Quanto vale 1px?
tags: css
author: Caio Gondim
author_link: http://twitter.com/caio_gondim
author_profile: https://plus.google.com/109656206006790732674/
author_facebook: https://www.facebook.com/caiogondim
image: images/posts/2013-11-12-pixel.jpg
comments: true
keywords: >
  css, cascading stylesheets, pixel, em, ex, in, pt, pc, px, cm, mm,
  pixel referência, diâmetro angular, unidades absolutas, unidades relativas
resumo: >
  Em CSS, as unidades de medidas absolutas — como `in` (polegadas), `cm`
  (centímetros), `mm` (milímetros), `pt` (pontos), `pc` (picas (epa)) e `px`
  (<em>pixel</em>) — são todas relativas entre si. 1cm no
  <abbr title="Cascading Style Sheet">CSS</abbr> quase nunca é equivalente a 1cm
  real. Assim como 1px no <abbr title="Cascading Style Sheet">CSS</abbr> pode
  não ser o equivalente a 1 _pixel_ do dispositivo usado para renderização. Mas
  afinal, quanto vale 1px, então? A resposta para essa pergunta, assim como
  quase tudo na computação, é: __depende do contexto__.
related:
  - title: CSS 2 Specification
    url: http://www.w3.org/TR/CSS2/syndata.html#length-units
    from: W3C
  - title: CSS “px” is an Angular Measurement
    url: http://www.reddit.com/r/web_design/comments/16ha28/css_px_is_an_angular_measurement_and_has_nothing/
    from: Reddit
  - title: In CSS, “px” is not an angular measurement and it is not non-linear
    url: http://omnicognate.wordpress.com/2013/01/07/in-css-px-is-not-an-angular-measurement-and-it-is-not-non-linear/
    from: A Blog about Stuff
  - title: CSS Units
    url: https://www.webkit.org/blog/57/css-units/
    from: WebKit Blog
---

Em <abbr title="Cascading Style Sheet">CSS</abbr>, as unidades de medidas
absolutas — como `in` (polegadas), `cm` (centímetros), `mm` (milímetros), `pt`
(pontos), `pc` (picas (epa)) e `px` (<em>pixel</em>) — são todas relativas entre
si. 1cm no <abbr title="Cascading Style Sheet">CSS</abbr> quase nunca é
equivalente a 1cm real. Assim como 1px no
<abbr title="Cascading Style Sheet">CSS</abbr> pode não ser o equivalente a 1
_pixel_ físico do dispositivo usado para renderização. Mas afinal, quanto vale
1px, então? A resposta para essa pergunta, assim como quase tudo na computação,
é: __depende do contexto__.

Mas antes de responder quanto vale 1px e como ele é calculado, vamos voltar ao
básico (de base, e não de óbvio) e falar um pouco sobre as unidades relativas e
absolutas de medida de distância no
<abbr title="Cascading Style Sheet">CSS</abbr>.


## Unidades relativas

Em <abbr title="Cascading Style Sheet">CSS</abbr> temos dois tipos de unidades
de distância. As relativas e absolutas. As relativas são assim chamadas pois são
calculadas sempre em relação ao valor computado herdado do elemento pai. As
unidades relativas são:

- `em`: o _font-size_ da fonte
- `ex`: a "altura-x" da fonte

1em é o equivalente ao estilo computado da propriedade `font-size` do elemento
em que ele é usado. A exceção a essa regra é quando um elemento
pai possui um `em` especificado por
<abbr title="Cascading Style Sheet">CSS</abbr>. Ai então a propriedade será
calculada relativamente a esse valor herdado.

```css
body {
  font-size: 20px;
}

h1 {
  font-size: 3em; /* equivalente a 60px */
}

h1 span {
  font-size: 2em; /* equivalente a 120px */
}
```

Já a unidade `ex` é equivalente a altura do glifo __“x”__ da fonte em uso pelo
elemento sendo estilizado, e se comporta da mesma maneira que `em`. O que
diferencia é o seu valor base.


## Unidades absolutas

As unidades absolutas de medida de distância são:

- `in`: polegadas
- `cm`: centímetros
- `mm`: milímetros
- `pt`: pontos
- `pc`: picas
- `px`: _pixel_

Estas unidades são ditas como absolutas pois o seu valor computado final não é
relativo a valores computados herdados do elemento pai. Porém — e aqui que mora
o contra-senso — elas são calculadas de forma relativa entre si, como é
explicado na especificação da
<abbr title="World Wide Web Consortium">W3C</abbr>:

> Absolute length units are fixed in relation to each other. They are mainly
> useful when the output environment is known. The absolute units consist of the
> physical units (in, cm, mm, pt, pc) and the px unit:
>
> in: inches — 1in is equal to 2.54cm. <br />
> cm: centimeters <br />
> mm: millimeters <br />
> pt: points — the points used by CSS are equal to 1/72nd of 1in. <br />
> pc: picas — 1pc is equal to 12pt. <br />
> px: pixel units — 1px is equal to 0.75pt.

Na especificação podemos ver que as unidades são definidas umas em relação às
outras. 1in equivale a 2.54cm. 1pt é igual a 1/72 avos (primeira vez que uso
essa palavra fora da faculdade) de polegada. E 1px equivale a 0,75pt. Logo,
podemos __sempre__ afirmar que 1px equivale a 0,26458333mm. Correto?

Sempre é uma palavra muito forte.


## Ancoragem de unidades

Como disse, as unidades absolutas são calculadas de forma relativa umas às
outras. Mas tem de haver algo que não seja relativo, se não entramos numa
recursão infinita (loop infinito?). Para isso o
<abbr title="World Wide Web Consortium">W3C</abbr>, na especificaçào do
<abbr title="Cascading Style Sheet">CSS</abbr>, deixa claro que cabe ao
_user agent_ decidir qual será a unidade usada como âncora.

> For print media and similar high-resolution devices, the anchor unit should be
> one of the standard physical units (inches, centimeters, etc). For
> lower-resolution devices, and devices with unusual viewing distances, it is
> recommended instead that the anchor unit be the pixel unit.

Para dispositivos de alta resolução, a especificação recomenda que a unidade
âncora seja um valor padrão da física, como <abbr title="centímetro">cm</abbr>
ou <abbr title="polegadas">in</abbr>. Então, em dispositivos como
uma impressora que é um dispositivo de alta resolução, 1px será calculado em
relação a 1cm real. Aqui podemos dizer que 1px será o equivalente a
0,26458333mm.

O que, de certa forma, faz sentido. Pois se tratássemos 1px neste caso como a
menor unidade de representaçao visual, 1px seria igual a um ponto (<em>dot</em>)
da impressora. Com uma resolução padrão de uma impressora hoje é 300
<abbr title="dots per inches">dpi</abbr>, teriamos
_pixels_ de 0,08466667<abbr title="milímetros">mm</abbr>.

Já para dispositivos de baixa-resolução e dispositivos que normalmente são
usados a uma distância não comum — como projetores ou um
<a href="http://www.google.com/glass/start/">Google Glass</a> —, o recomendado é
a que a unidade âncora seja o _pixel_ referência. O que nos leva a mais uma
pergunta. O que é o _pixel_ referência?


## _Pixel_ referência

O _pixel_ referência é definido como sendo o ângulo visual de 1 _pixel_ em um
dispositivo com uma densidade de _pixels_ de 96
<abbr title="pontos por polegada">dpi</abbr> a uma distância de 28 polegadas do
observador .

_WHAT_?

Imaginem um observador (você) sentado a 28 polegadas de distância de um monitor
com uma densidade de 96 _pixels_ por polegada (seu clássico monitor). Podemos
fazer uma analogia deste ângulo citado anteriormente como sendo um triângulo. Um
dos pontos desse triângulo começa no seu olho, o outro ponto na base do _pixel_
e o terceiro ponto no extremo norte do _pixel_. O ângulo formado no vértice que
inicia no seu olho é o ângulo que é usado para calcular o _pixel_ referência.

Agora imaginem que afastamos a tela do observador (você). O ângulo será o mesmo,
porém a base do triângulo irá aumentar. Esta base é o nosso novo _pixel_
referência. Então, quanto mais longe um dispositivo, maior será seu _pixel_
referência. Quanto mais perto, menor será.

<figure>
  <img src="/images/posts/2013-11-12-pixel-referencia.jpg"
       alt="Pixel Referência"
       width="700"
       height="300" />
</figure>

Na imagem acima podemos ver que, na situação padrão, nosso _pixel_ referência
tem uma altura de 0.26mm. Caso a distância entre a tela e o observador aumente,
também aumenta o nosso _pixel_ referência.

Em um Google Glass, por exemplo, o _pixel_ referência será menor (fisicamente,
caso existisse) que o _pixel_ referência de nosso monitor convencional, pois
está muito mais próximo de nosso olho. Assim como o _pixel_ referência de um
grande projetor será maior, por estar mais longe do observador. Este abstração é
interessante pois faz com que as coisas pareçam ter um mesmo tamanho, não
importando a distância ou densidade do dispostivo em questão.

Podemos usar esta mesma matemática de forma inversa para calcularmos as
dimensões de objetos reais em _pixels_. Se considerarmos 1px como o valor do
_pixel_ em um monitor de 96<abbr title="dots per inches">dpi</abbr> podemos
pegar o [diâmetro angular](http://pt.wikipedia.org/wiki/Di%C3%A2metro_angular)
de objetos reais e transformar em _pixels_. A Lua, por exemplo, vista da terra,
tem 24,3px de altura (e largura, por ser uma esfera). A torre Eiffel, vista a
uma distância de 1 milha, tem 550,5px de altura.

<figure>
  <img src="/images/posts/2013-11-12-torre-eiffel-e-lua-em-pixels.jpg"
       alt="Torre Eiffel e Lua em pixels"
       width="700"
       height="300" />
</figure>

O valor de _pixels_ do dispositivo que equivale a 1 CSS px será então — de
acordo com a especificação — o número inteiro mais próximo da quantidade do
número de _pixels_ do dispositivo necessários para representar 1 CSS px.

Vamos usar de exemplo um iPhone. Nele, a quantidade inteira de _pixels_ mais
próxima usada para representar 1 _pixel_ referência em uma de suas dimensões é
2. Para cada pixel referência do iPhone, temos 4 _pixels_ de hardware, 2 na
altura e mais 2 na largura.

Ok. Agora sabemos quanto vale 1 CSS px. E o restante das outras unidades?


## Calculando as outras unidades

Caso o browser utilize o _pixel_ referência como unidade de ancoragem, todas as
outras serão calculadas com base nele. Usando ainda o iPhone como exemplo, vamos
calcular quanto vale 1 polegada no Safari dele.

Sabemos que 1 CSS _pixel_ equivale a 2 _pixels_ no iPhone. E que 1 CSS px é
igual a 0,75pt. 1 pt por sua vez é igual a 1/72 de CSS polegada. Então, com um
pouco de matemática podemos chegar a conclusão de que, no iPhone, 1 CSS pt é
igual a 2,66 _pixels_ nativos. 1 uma polegada em CSS no iPhone equivale a 192
_pixels_ nativos, e 1 CSS cm equivale a 75,59 _pixels_ físicos.

E depois de toda essa aula a pergunta continua: Quanto vale 1 _pixel_? A
resposta também continua a mesma: depende.
