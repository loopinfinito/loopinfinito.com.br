---
title: Quanto vale <span>1px</span>?
layout: post
author: Caio Gondim
author_link: http://twitter.com/caio_gondim
author_profile: https://plus.google.com/109656206006790732674/
image: images/posts/2013-11-05-pixel.png
tags: CSS
comments: false
keywords: >
  lorem, ipsum
resumo: >
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, animi,
  unde cum impedit quibusdam voluptatibus dignissimos commodi assumenda soluta
  odio aliquid reprehenderit libero officia ut corporis velit nulla illo iure!
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

Em CSS, as unidades de medidas absolutas — como in (polegadas), cm (centímetros), mm
(milímetros), pt (pontos), pc (picas (epa))e px (pixel) — são todas relativas
entre si. 1 CSS cm quase nunca é equivalente a 1 cm real. Assim como 1 CSS px pode não
ser o equivalente a 1 pixel do dispositivo usado para
renderização. Mas afinal, quanto vale 1px? A resposta para essa pergunta,
assim como quase tudo na computação, é: __depende do contexto__.

Antes de responder quanto vale 1px, vamos voltar ao básico (de base, e não de óbvio)
e falar um pouco sobre as unidades relativas e absolutas de medida de distância
no CSS.


## Unidades relativas

Em CSS temos dois tipos de unidades de distância. As relativas e absolutas.
As relativas são assim chamadas pois são calculadas sempre em relação
ao valor computado herdado do elemento pai.
As unidades relativas são:

- em: o _font-size_ da fonte
- ex: a "altura-x" da fonte

1 _em_ é o equivalente ao estilo computado da propriedade "font-size" do elemento
em que ele é usado. A exceção a essa regra  é quando um elemento
pai possui um _em_ especificado por CSS. Ai então a propriedade em será calculada
relativamente a esse valor herdado.

{% highlight css %}
body {
  font-size: 20px;
}

h1 {
  font-size: 3em; /* equivalente a 60px */
}

h1 span {
  font-size: 2em; /* equivalente a 120px */
}
{% endhighlight %}

Já 1 _ex_ é equivalente a altura do glifo "x" da fonte em uso pelo elemento
sendo estilizado, e se comporta da mesma maneira que _em_. O que diferencia é o
seu valor base.


## Unidades absolutas

As unidades absolutas de medida de distância são:

- in: polegadas
- cm: centímetros
- mm: milímetros
- pt: pontos
- pc: picas
- px: pixel

Estas unidades são ditas como absolutas pois o seu valor computado final não são
relativos a valores computados herdados do elemento pai. Porém — e aqui que mora
o contra-senso — elas são calculadas de forma relativa entre si, como é explicado na
especificação da W3C:

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

Na especificação podemos ver que as unidades são definidas umas em relação as outras.
1 in equivale a 2.54cm. 1 pt é igual a 1/72 avos (primeira vez que uso essa palavra fora da faculdade)
de polegada. e 1px equivale a 1/75 avos (segunda vez) de pt. Logo, podemos __sempre__ afirmar
que 1px equivale a 0,26458333mm. Correto?

Sempre é uma palavra muito forte.


## Ancoragem de unidades

Como disse, as unidades absolutas são calculadas de forma relativa umas as outras.
Mas tem de haver algo que não seja relativo, se não entramos numa recursão infinita (loop infinito?).
Para isso o W3C na especificaçào do CSS diz que cabe ao _user agent_ decidir
qual será a unidade usada como âncora.

> For print media and similar high-resolution devices, the anchor unit should be
> one of the standard physical units (inches, centimeters, etc). For lower-
> resolution devices, and devices with unusual viewing distances, it is
> recommended instead that the anchor unit be the pixel unit.

Para dispositivos de alta resolução, a especificação recomenda que a unidade ancora
seja um valor padrão da física, como cm ou in. Então em dispositivos como uma impressora,
que é um dispositivo de alta reslução, 1px será calculado em relação a 1cm real.
Aqui podemos dizer que 1px será o equivalente a 0,26458333mm.

O que, de certa forma, faz sentido. Pois se tratassemos 1px neste caso como a menor
unidade de representaçao visual, 1px seria igual a um ponto (dot) da impressora.
Com uma resolução padrão de uma impressora hoje é 300dpi, teriamos pixels
de 0,08466667mm.

Já para dispositivos de baixa-resolução e dispositivos
que normalmente são usados a uma distância não comum — como projetores —, o recomendado é a que a unidade âncora seja
o pixel referência. O que nos leva a mais uma pergunta. O que é o pixel referencia?


## Pixel referencia

O pixel referência é definido como sendo o ângulo visual de 1 pixel em um
dispositivo com uma densidade de pixels de 96 dpi a uma distância do observador
de 28 polegadas.

WHAT?

Imaginem um observador (você) sentado a 28 polegadas de distância de um monitor
com uma densidade de 96 pixels por polegada (se clássico monitor). Podemos fazer uma analogia deste
ângulo citado anteriormente como sendo um triângulo. Um dos pontos desse
triângulo começa no seu olho, o outro ponto na base do pixel e o terceiro ponto
no extremo norte do pixel. O ângulo formado no vértice que inicia no seu olho é
o ângulo que é usado para calcular o pixel referência.

Agora imaginem que afastamos a tela do observador (você). O ângulo será o mesmo,
porém a base do triângulo irá aumentar. Esta base é o nosso novo pixel referência.
Então, quanto mais longe um dispositivo, maior será seu pixel referência. Quanto
mais perto, menor será.

<figure>
  <img src="/images/posts/2013-11-05-pixel-referencia.png"
       alt="Pixel Referência"
       width="700"
       height="300" />
</figure>

Na imagem acima podemos ver que, na situação padrão, nosso pixel referência tem
uma altura de 0.26mm. Caso a distância entre a tela e o observador aumente, também
aumenta o nosso pixel referência.

Em um Google Glass, por exemplo, o pixel referência será menor (fisicamente,
caso existisse) que o pixel referencia de nosso monitor convencional, pois estaá
muito mais próximo de nosso olho. Assim como o pixel referencia de um grande
projetor será maior, por estar mais longe do observador. Este abstração é
interessante pois faz com que as coisas pareçam ter um mesmo tamanho, não
importando a distância ou densidade do dispostivo em questão.

O valor de pixels do dispositivo que equivale a 1 CSS px será então — de acordo
com a especificação — o número inteiro mais próximo da quantidade do número de pixels
do dispositivo necessários para representar 1 CSS px.

Vamos usar de exemplo um iPhone. Nele, a quantidade inteira de pixels mais próxima usada
para representar 1 pixel referência em uma de suas dimensões é 2. Para cada pixel
referencia do iPhone, temos 4 pixels de hardware, 2 na altura e mais 2 na largura.

Ok. Agora sabemos quanto vale 1 CSS px. E o restante das outras unidades?


## Calculando as outras unidades

Caso o browser utilize o pixel referencia como unidade de ancoragem, todas as outras
serão calculadas com base nele. Usando ainda o iPhone como exemplo, vamos calcular
quando vale 1 polegada no Safari dele.

Sabemos quem 1 CSS pixel equivale a 2 pixels no iPhone. E que 1 CSS px é igual
a 0,75pt. 1 pt por sua vez é igual a 1/72 de CSS polegada. Então, com um pouco de
matemática podemos chegar a conclusão de que, no iPhone, 1 CSS pt é igual a 2,66 pixels nativos.
1 uma polegada em CSS no iPhone equivale a 192 pixels nativos, e 1 CSS cm equivale a
75,59 pixels físicos.

E depois de toda essa aula a pergunta continua: Quanto vale 1 pixels? A resposta
também continua a mesma: depende.
