---
title: <span>@media</span> queries {<span class="light">nível:</span> 4}
layout: post
author: Almir Filho
author_link: http://twitter.com/almirfilho
author_profile: https://plus.google.com/111718150595519513871/
image: images/posts/2013-11-26-media-queries-nivel-4.jpg
tags: CSS
comments: false
keywords: >
  css, media queries, media query, 4, nivel 4, level 4, media, @media, script,
  pointer, hover, luminosity, luminosidade, iluminação, lux, acessibilide,
  mobile, feature, javascript, web, mouse, trackpad, air view, touch, dropdown,
  menu, contraste, suporte, firefox
resumo: >
  A nova especificação
  [_media queries_ nível 4](http://dev.w3.org/csswg/mediaqueries4/)
  introduz __4 novas e interessantes__&nbsp;_features_ de mídia, além das
  13 já existentes: `script`, `pointer`, `hover` e `luminosity`. Veremos que
  estas novas _features_ de mídia vêm para beneficiar primordialmente questões
  sobre acessibilide e _mobile_.
related:
  - title: Media Queries Level 4 (draft)
    url: http://dev.w3.org/csswg/mediaqueries4/
    from: W3C
  - title: Ambient Light Events
    url: http://loopinfinito.com.br/2013/07/30/ambient-light-events/
    from: Loop Infinito
  - title: Responding to environmental lighting with CSS Media Queries Level 4
    url: http://www.jordanm.co.uk/post/65776639602/responding-to-environmental-lighting-with-css-media
---

A nova especificação
[_media queries_ nível 4](http://dev.w3.org/csswg/mediaqueries4/)
introduz __4 novas e interessantes__&nbsp;_features_ de mídia, além das
[13 já existentes](http://www.w3.org/TR/css3-mediaqueries/).

São elas: `script`, `pointer`, `hover` e `luminosity`. Eu diria que estas novas
_features_ de mídia vêm para beneficiar primordialmente questões sobre
acessibilide e _mobile_. Veremos porque.

## @media script

A _feature_&nbsp;`script` detecta se JavaScript é suportado e está ativo ou não
— já que os navegadores geralmente possuem uma opção para desativá-lo (com
exceção ao [Firefox v23+](http://www.mozilla.org/en-US/firefox/23.0/releasenotes/))
e nem todo agente de usuário é um navegador _web_ na maneira como conhecemos. Um
leitor de _feeds_, por exemplo, geralmente ignora qualquer _script_ que esteja
numa página de um artigo.

Se quisermos moficicar algum estilo ou comportamento CSS caso o usuário __não__
tenha suporte ou JavaScript ativado, como por exemplo, mostrar as opções de um
menu _dropdown_ que apenas responde ao evento _mouse over_ por JavaScript
(prática muito comum).

{% highlight css %}
.menu-opcao {
    display: none;
}

/* para agentes de usuário sem javascript */
@media not script {
    /* mostra as opções do menu dropdown */
    .menu-opcao {
        display: block;
    }
}
{% endhighlight %}

Este caso é interessante pois um usuário poderá nunca ter acesso às opções do
seu menu. Esta _feature_ com certeza beneficia a acessibilide, e pode ser bem
útil se for preciso apenas modificar seu CSS, tornando desnessário o uso do
elemento `<noscript>` em seu <abbr title="HyperText Markup Language">HTML</abbr>.
Agora resolvemos esse problema __puramente com CSS__. _How nice!_

## @media pointer

Esta _feature_ fornece a presença e a precisão de um dispositivo apontador
(<em>pointer device</em>). Por dispositivo apontador entende-se um meio de
indicar pontos no sistema de  coordenadas da tela. São disposivitos apontadores:
_mouse_, _trackpad_, telas sensíveis ao toque, telas sensíveis a _Pen Stylus_
(como por exemplo, o [Palm](http://en.wikipedia.org/wiki/Palm_PDA)). Três
valores são possíveis para `pointer`:

- `none`: Não há dispositivo apontador;
- `coarse`: Há dispositivo apontador de baixa precisão (tela sensível ao toque);
- `fine`: Há dispositivo apontador de alta precisão (<em>mouse</em>, _trackpad_
e tela sensível a _Pen Stylus_).

{% highlight css %}
/* para telas de toque */
@media (pointer: coarse) {
    /* aumenta tamanho de checkboxes e radio buttons em 75% */
    input[type="radio"],
    input[type="checkbox"] {
        transform: scale(1.75);
    }
}
{% endhighlight %}

No exemplo acima estamos melhorando a acessibilide principalmente para os
usuários _mobile_, que podem ter dificuldade para marcar _checkboxes_ com
precisão.

## @media hover

Esta _feature_ também diz respeito aos dispositivos apontadores e tem uma
relação estreita com `pointer`, pois `hover` apenas indica se o dispositivo
apontador do usuário é ou não capaz de realizar __hover__, ou seja, de realizar
o evento _mouse over_. Exemplos de dispositivos para `hover` são _mouse_ e
_trackpad_.

Considerando o exemplo anterior do menu _dropdown_ com a
_feature_&nbsp;`script`, podemos refiná-lo ainda mais com `hover`, pois o menu
só deverá aprecer aberto se o usuário __não__ for capaz de realizar o evento
_mouse over_ (ou não ter JavaScript ativado).

{% highlight css %}
.menu-opcao {
    display: none;
}

/* para agentes de usuário sem javascript ou que não possam realizar hover */
@media not script or not hover {
    /* mostra as opções do menu dropdown */
    .menu-opcao {
        display: block;
    }
}
{% endhighlight %}

### mas pera ai..

Então quer dizer que `hover` é equivalente à `pointer: fine`? Considerando que
os dispositivos que têm `pointer: fine` são os mesmos que `hover` — _mouse_ e
_trackpad_ —, poderia ser. Contudo, há outros meios "apontadores" não tão óbvios
assim, como o recurso [_Air View_](http://www.youtube.com/watch?v=6_L8j8P3oi8)
do celular Samsung Galaxy S4. O _Air View_ torna possível que o usuário realize
um _hover_ sem precisar tocar na tela, e acredito que isto caracteriza um novo
tipo de dispositivo apontador. Se traduzíssemos isso numa _media query_, acho
que o resultado seria algo do tipo:

{% highlight css %}
@media hover and (pointer: coarse) {
    /* air view */
}
{% endhighlight %}

Procurei por alguma informação sobre este recurso funcionar dentro de
navegadores _web_, mas não obtive sucesso.

## @media luminosity

Esta é a _feature_ mais __Chuck Norris__ de todas.

![Chuck Norris aprova](/images/posts/2013-11-26-chuck-norris.jpg "Chuck Norris Aprova")

Talvez você já tenha ouvido falar na nova
<abbr title="Application Programming Interface">API</abbr> HTML5 de
[eventos de luminosidade](http://loopinfinito.com.br/2013/07/30/ambient-light-events/)
(já disponível no Firefox v22+), ela permite que tenhamos acesso à quantidade de
luminosidade do ambiente, ou seja, podemos saber se o usuário está situado num
lugar escuro, por exemplo.

Esta _feature_ nos permitirá fazer ajustes no CSS de acordo com a luminosidade
do ambiente. Logicamente, o dispositivo do usuário em questão deve ser equipado
com um sensor de luz — qualquer MacBook e a maioria dos dispositivos móveis já o
possuem. Os valores possíveis para `luminosity` são:

- `dim`: O dispositivo se encontra num ambiente escuro ou com pouca
iluminação. Exemplo: noite ou quarto escuro.
- `normal`: O ambiente tem um nível ideal de luminosidade. Exemplo: sala
iluminada adequadamente.
- `washed`: O ambiente tem um nível muito claro ou até excessivo em quantidade
de lux (para mais informações sobre a unidade lux,
[leia isto](http://loopinfinito.com.br/2013/07/30/ambient-light-events/)),
fazendo com que a tela adquira um aspecto meio "apagado". Exemplo: luz do dia.

### Isso é muito legal, mas onde eu uso?

Você deve estar se perguntando isso agora. Eu vi um
[caso de uso](http://www.jordanm.co.uk/post/65776639602/responding-to-environmental-lighting-with-css-media)
muito interessante, que diz respeito basicamente a leitura de texto. Várias
aplicações de leitores de _feeds_
([Pocket](https://itunes.apple.com/br/app/pocket-formerly-read-it-later/id309601447),
[Digg](https://itunes.apple.com/ca/app/digg/id362872995),
[Readability](https://itunes.apple.com/ca/app/readability/id460156587)) possuem
uma funcionalidade em comum, que é modificar o contraste do texto. Assim o
usuário pode alternar entre níveis de contraste de maneira a tornar o texto mais
confortável para leitura, como mostrado abaixo.

<picture>
	<img class="bordered"
	     alt="Contrastes do Pocket"
	     title="Contrastes do Pocket"
	     src="/images/posts/2013-11-26-pocket-prints.jpg" />
</picture>

Se você estivesse à noite na cama e com as luzes apagadas, qual contraste seria
o mais confortável para ler? Eu com certeza escolheria o da direita (com fundo
escuro).

Agora, como seria legal se uma aplicação fizesse isso de maneira totalmente
automática, hein? Com `luminosity`, será muito fácil (e sem JavaScript):

{% highlight css %}
body {
    color: #513B2C; /* marrom */
    background-color: #FBF0D9; /* bege */
}

/* ambiente escuro */
@media (luminosity: dim) {
    /* diminui o contraste do texto */
    body {
        color: #E2E2E2; /* cinza claro */
        background-color: #252525; /* cinza escuro */
    }
}

/* ambiente muito claro */
@media (luminosity: washed) {
    /* aumenta o contraste do texto */
    body {
        color: black;
        background-color: white;
    }
}
{% endhighlight %}

Acho que nem precisaria mencionar, mas como tudo, é bom utilizar esta _feature_
com parcimônia. Bom senso é sempre bem vindo. Acredito que outros bons casos de
uso para esta funcionalidade estão por vir, e vai de acordo com a criatividade
de cada um.

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
            <td class="property"><code>@media script</code></td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
        </tr>
        <tr>
            <td class="property"><code>@media pointer</code></td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
        </tr>
        <tr>
            <td class="property"><code>@media hover</code></td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
        </tr>
        <tr>
            <td class="property"><code>@media luminosity</code></td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
        </tr>
    </tbody>
</table>

Triste. Apesar da API JavaScript para os eventos de luminosidade já estar
parcialmente disponível no Firefox, sua versão para _media query_ ainda não.
Assim como nenhuma das outras.