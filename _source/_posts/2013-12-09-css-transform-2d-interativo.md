---
title: CSS <span>Transform</span>'ers <span>2D Interativo</span>
layout: post
author: Caio Gondim
author_link: http://twitter.com/caio_gondim
author_profile: https://plus.google.com/109656206006790732674/
image: images/posts/2013-12-09-css-transform.jpg
tags: CSS
comments: false
keywords: >
  lorem
resumo: >
  Lorem ipsum
related:
  - title: "CSS Transforms An Interactive Guide"
    url: http://csstransforms.com/
    from: CSS Transforms An Interactive Guide e-book
  - title: "@supports"
    url: https://developer.mozilla.org/en-US/docs/Web/CSS/@supports
    from: Mozilla Developer Network
  - title: "CSS Transform"
    url: http://css-tricks.com/almanac/properties/t/transform/
    from: CSS Tricks
---

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto commodi
possimus perspiciatis libero illum debitis consequuntur iure facilis vitae.
Aliquid sint quia eum voluptatum nulla debitis aliquam eaque expedita impedit.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad nulla enim pariatur
officia nihil. Assumenda, possimus libero maxime omnis! Magni, vel, autem at
quibusdam aspernatur mollitia tempore quo totam facere!


## Translate

A função `translate` é usada para movermos um elemento nos eixos X, Y, ou
ambos. Caso seja passado apenas um parâmetro para a função, o elemento será movido
em relação ao eixo X. Já com dois parâmetros, o primeiro será o valor usado
para a movimentação no eixo X, e o segundo para o eixo Y.

{% highlight css %}
img {
  transform: translate(13px, 10px); /* move elemento 13px em X e 10px em Y */
  transform: translate(13px); /* move elemento 13px no eixo X */
  transform: translateX(13px); /* move elemento 13px no eixo X */
  transform: translateY(10px); /* move elemento 10px no eixo Y */
}
{% endhighlight %}

Além de `px`, também podemos passar valores expressos em `%`. Neste caso, 100%
será equivalente a dimensão do elemento no eixo em que vamos efetuar o
`translate`. Em outras palavras: se vamos movimentar o elemento no eixo X, 100%
será igual a sua largura; se a movimentação ocorrer no eixo Y, 100% equivalerá a
altura do elemento. No experimento abaixo vocês podem ver a função `translate`
em ação de uma forma mais interativa e menos abstrata.

<iframe src="http://localhost:3000/#translate" height="432" width="700" class="img" frameborder="0">&nbsp;</iframe>

Reparem que valores negativos também são aceitos. Valores negativos em X
movimentam o elemento para a esquerda. Valores negativos em Y movimentam o
elemento para cima. Um `transform: translate(-10px);` moverá o elemento 10
_pixels_ para a esquerda. Enquanto um `transform: translate(-5px);` moverá o
elemento 5 _pixels_ para cima.


## Skew

A função `skew` irá “entortar” um elemento em relação a um dos eixos.

{% highlight css %}
img {
  transform: skewX(30deg); /* “entorta” o elemento horizontalmente */
  transform: skewY(30deg); /* “entorta” o elemento verticalmente */
}
{% endhighlight %}

As funções usadas para efetuarmos o _skew_ são `skewX` e `skewY`. Cada uma
recebe apenas um parâmetro, estes expressos em graus (`deg`). No experimento
abaixo fica bem mais fácil entender o que acontece quando aplicamos o `skew`.

<iframe src="http://localhost:3000/#skew" height="432" width="700" class="img" frameborder="0">&nbsp;</iframe>

Também existe uma função `skew`, que, na teoria, funcionaria como um atalho para
as funções `skewX` e `skewY`. Mas o seu resultado final não é o mesmo que o
das funções `skewX` e `skewY` usadas de forma separada com os mesmos parâmetros
de `skew`. O próprio
<abbr title="Mozilla Developer Network">MDN</abbr>
[desaconselha seu uso](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function).


## Rotate

A função `rotate`...rotaciona. Simples assim. Ela recebe um único parâmetro que
pode ser expresso em graus (`deg`), radianos (`rad`) ou voltas (`turn`).

{% highlight css %}
img {
  transform: rotate(30deg); /* rotaciona 30' no sentido horário */
  transform: rotate(-45deg); /* rotaciona 45' no sentido anti-horário */
  transform: rotate(2rad); /* rotaciona ~ 144,59' no sentido horário */
  transform: rotate(0.5turn); /* rotaciona meia-volta no sentido horário */
}
{% endhighlight %}

Valores positivos rotacionam o elemento no sentido horário, enquanto que valores
negativos rotacionam o elemento no sentido anti-horário. O experimento abaixo
mostra o `rotate` em ação.

<iframe src="http://localhost:3000/#rotate" height="432" width="700" class="img" frameborder="0">&nbsp;</iframe>


## Scale

Altera o tamanho do elemento em ambos os eixos ou apenas em um eixo específico.
Esta função aceita um ou dois parâmetros. Caso seja passado apenas um, a
alteração irá ocorrer tanto na altura como na largura. Caso sejam passados dois,
o primeiro argumento irá alterar a largura e o segundo irá alterar a altura.

Os valores passados como parâmetros não possuem unidades. Eles funcionam como
“multiplicadoes” do tamanho do elemento. Um `transform: scale(2)` irá duplicar
o tamanho do elemento. Um `transform: scale(0.5)` irá reduzí-lo pela metade.

{% highlight css %}
img {
  transform: scale(2); /* dobra o tamanho do elemento em todas as direções */
  transform: scale(2, 3); /* dobra a largura e deixa o elemento 3 vezes mais alto */
  transform: scaleX(0.5); /* reduz largura do elemento pela metade */
  transform: scaleY(2); /* deixa o elemento duas vezes mais alto */
}
{% endhighlight %}

Além da função `scale`, podemos usar as funções específicas de cada eixo: para
o eixo X a `scaleX` e para o eixo Y a `scaleY`. Abaixo também podemos interagir
com esta função e ver na prática como se comporta.

<iframe src="http://localhost:3000/#scale" height="432" width="700" class="img" frameborder="0">&nbsp;</iframe>

Observem no experimento acima que, ao passarmos valores negativos, nós
invertemos a imagem. Se passarmos um valor de -1 para `scaleX`, é como se
estivessemos espelhando o elemento. -1 para `scaleY` e o elemento irá ficar de
cabeça para baixo (invertido na vertical).


## Várias transformações

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, incidunt,
aperiam itaque optio deleniti voluptate esse tenetur harum nisi quibusdam amet
totam exercitationem magnam aut dolor suscipit at est ipsa.

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
            <td class="property">transform</td>
            <td>4 <code class="small">-webkit-</code></td>
            <td>3.1 <code class="small">-webkit-</code></td>
            <td>3.5</td>
            <td>9.0</td>
            <td>10.5 <code class="small">-webkit-</code></td>
        </tr>
    </tbody>
</table>
