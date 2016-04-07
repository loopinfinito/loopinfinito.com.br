---
title: CSS <span>Supports</span>
layout: post.html
author: Caio Gondim
author_link: http://twitter.com/caio_gondim
author_profile: https://plus.google.com/109656206006790732674/
author_facebook: https://www.facebook.com/caiogondim
image: images/posts/2013-12-10-css-supports.jpg
tags: CSS
comments: true
keywords: >
  css, suporte, supports, progressive enhancement, graceful degradation,
  chrome, firefox, css object model, javascript css api
resumo: >
  Antes feito apenas via JavaScript, a nova regra `@supports` do CSS vai nos
  permitir testar, de forma nativa, o suporte de uma dada _feature_ no
  navegador. Fazendo com que fique mais fácil trabalhar com _progressive
  enhancement_, já que facilita na escrita de códigos de _fallback_ para os
  cenários em que o navegador não suporta a regra (ou conjunto de regras) que
  queremos usar.
related:
  - title: "@supports"
    url: https://developer.mozilla.org/en-US/docs/Web/CSS/@supports
    from: Mozilla Developer Network
  - title: "CSS @supports"
    url: https://developer.mozilla.org/en-US/docs/Web/API/CSS.supports
    from: Mozilla Developer Network
  - title: CSS @supports
    url: http://davidwalsh.name/css-supports
    from: The David Walsh blog
  - title: Feature detection with CSS @supports
    url: http://www.developerdrive.com/2013/09/feature-detection-with-css-supports/
    from: Developer Drive
  - title: CSS Conditional Rules Module Level 3
    url: http://dev.w3.org/csswg/css-conditional/#at-supports
    from: W3C CSS Working Group
  - title: Firefox supports @⁠supports, gets my support
    url: http://www.broken-links.com/2012/08/06/firefox-supports-supports-gets-my-support/
    from: Broken Link
---

O CSS hoje já possui um bom mecanismo para
[_graceful degradation_](http://dev.opera.com/articles/view/graceful-degradation-progressive-enhancement/),
apenas ignorando as regras que não consegue interpretar. Mas isso as vezes não é
suficiente, como, por exemplo, quando várias regras são interdependentes e
apenas não as interpretar pode quebrar o layout inteiramente, como no uso de um
novo _layout engine_ — flexbox,
[grid](http://loopinfinito.com.br/2013/10/08/css-grid-isso-muda-tudo-de-novo/).

E quando queremos trabalhar com
[_progressive enhacement_](http://alistapart.com/article/progressiveenhancementwithcss),
ou seja, usando novas _features_ quando disponíveis, isso é normalmente feito
com um _feature detection_ via JavaScript. O que, na maioria das vezes, não nos
dá uma experiência ótima pois pode causar alguns _blinks_ no _layout_ da página.

Com o CSS __supports__ temos uma solução nativa para teste de suporte de
_features_, podendo escrever códigos de _fallback_ dentro de condicionais de um
modo muito similar ao nosso já conhecido e amado CSS Media Queries.


## Sintaxe

Sua sintaxe é, como dito acima, semelhante ao
[CSS Media Queries](http://www.w3.org/TR/css3-mediaqueries/). Primeiro usamos a
nova [at-rule](https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule)&nbsp;
`@supports` e, entre parênteses, a regra (junto com o valor) que queremos
verificar se o navegador suporta. Como no exemplo abaixo.

{% highlight css %}
@supports (propriedade:valor) {
  /*
  este código só irá ser interpretado caso
  o navegador dê suporte a propriedade testada
  */
}
{% endhighlight %}

Usando a sintaxe descrita acima podemos verificar se um navegador suporta
_transform_ com `rotate` da seguinte forma:

{% highlight css %}
@supports (transform: rotate(45deg)) {
  /*
  este código só será interpretado caso o navegador
  suporte transform rotate com 45 unidades expressas em graus
  */
}
{% endhighlight %}

Reparem que no trecho de código acima estamos verificando se o navegador dá
suporte à regra `transform` e, além disso, se ele suporta o valor `rotate`
com 45 unidades, sendo essas unidades expressas em graus.

Podemos também usar condicionais como `or`, `not` e `and` para
verificarmos regras em conjunto ou verificar se o navegador __não__ suporta uma
dada _feature_, facilitando a escrita de códigos de _fallback_.

{% highlight css %}
@supports (display: flexbox) or (display: -webkit-flex) {
  /* aqui temos suporte ao flexbox */
}
@supports (not (display: flexbox) or (display: -webkit-flexbox)) {
  /* aqui não temos suporte ao flexbox */
}
@supports ((display: flexbox) and (not (display: inline-grid))) {
  /* aqui não temos suporte ao inline-grid, mas temos ao flexbox */
}
{% endhighlight %}

É importante lembrar também de testar pelas regras prefixadas. Como fizemos
acima ao testar o suporte à regra `flexbox`.

## JavaScript <abbr title="Access Programming Interface">API</abbr>

Também é fornecida uma <abbr title="Access Programming Interface">API</abbr>
em JavaScript que podemos usar de forma muito parecida ao CSS. No objeto
global `CSS` temos um novo método `supports` em que nele podemos passar dois
argumentos, sendo o primeiro a regra e o segundo o valor a serem testados, ou
apenas 1 argumento sendo este uma _string_ ta qual usaríamos em CSS.

{% highlight javascript %}
if (CSS.supports('display', 'flex')) {
  // temos suporte ao flexbox
} else {
  // aqui não temos suporte ao flexbox
}

if (CSS.supports('(display: flexbox) and (not (display: inline-grid))')) {
  // temos suporte ao flexbox, mas não ao inline-grid
}
{% endhighlight %}

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
      <td class="property">@supports</td>
      <td>28</td>
      <td>--</td>
      <td>22</td>
      <td>--</td>
      <td>12.1</td>
    </tr>
    <tr>
      <td class="property">CSS.supports</td>
      <td>28</td>
      <td>--</td>
      <td>22</td>
      <td>--</td>
      <td>12.1</td>
    </tr>
  </tbody>
</table>

Aqui vem a parte _meta_ do _post_. Vamos falar do suporte de uma _feature_ que
testa o suporte de outras _features_. Por ser uma _spec_ relativamente nova, ela
atualmente roda apenas no Chrome 28+, Firefox 22+ e Opera 12.1+.
