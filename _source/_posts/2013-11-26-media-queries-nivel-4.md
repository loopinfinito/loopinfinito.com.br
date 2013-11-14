---
title: <span>@media</span> queries {<span class="light">nível:</span> 4}
layout: post
author: Almir Filho
author_link: http://twitter.com/almirfilho
author_profile: https://plus.google.com/111718150595519513871/
image: images/posts/2013-11-26-media-queries-nivel-4.jpg
tags:
comments: false
keywords: >
  css
resumo: >
  lorem
related:
  - title: Media Queries Level 4 (draft)
    url: http://dev.w3.org/csswg/mediaqueries4/
    from: W3C
---

A nova especificação de
[_media queries_ nível 4](http://dev.w3.org/csswg/mediaqueries4/)
introduz __4 novas e interessantes__&nbsp;_features_ de mídia, além das
[13 já existentes](http://www.w3.org/TR/css3-mediaqueries/).

São elas: `script`, `pointer`, `hover` e `luminosity`.
Eu diria que estas novas _features_ vêm para beneficiar primordialmente questões
sobre acessibilide e _mobile_. Veremos porque.

## @media script

A _feature_&nbsp;`script` detecta se JavaScript é suportado está ativo ou não —
já que os navegadores geralmente possuem uma opção para desativá-lo (com exceção
ao [Firefox v23+](https://bugzilla.mozilla.org/show_bug.cgi?id=851702)) e nem
todo agente de usuário é um navegador _web_ na maneira como conhecemos. Um
leitor de _feeds_, por exemplo, geralmente ignora qualquer _script_ que esteja
numa página de um artigo.

Se quisermos moficicar algum estilo ou comportamento CSS caso o usuário __não__
tenha suporte ou JavaScript ativado, como por exemplo, mostrar um menu
_dropdown_ que apenas responde ao evento _mouse over_ por JavaScript (caso muito
comum).

{% highlight css %}
.menu-opcao {
    display: none;
}

/* para agentes de usuário sem javascript */
@media not script {
    /* mostra menu dropdown aberto */
    .menu-opcao {
        display: block;
    }
}
{% endhighlight %}

Este caso é interessante pois um usuário poderá nunca ter acesso às opções do
seu menu.Esta _feature_ com certeza beneficia a acessibilide, e pode ser bem útil se for
preciso apenas modificar seu CSS, tornando desnessário o uso do elemento
`<noscript>` em seu <abbr title="HyperText Markup Language">HTML</abbr>.
Agora resolvemos esse problema __puramente com CSS__. _How nice!_

## @media pointer

Esta _feature_ fornece a presença e a precisão de um dispositivo apontador
(<em>pointer device</em>). Por dispositivo apontador entende-se um meio de
indicar pontos no sistema de  coordenadas da tela. São disposivitos apontadores:
_mouse_, _trackpad_, telas sensíveis ao toque, telas sensíveis a _Pen Stylus_
(como por exemplo, o [Palm](http://en.wikipedia.org/wiki/Palm_(PDA))). Três
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
apontador do usuário pode ou não realizar __hover__, ou seja, quando acontece
o evento _mouse over_. E para o _mouse over_ acontecer é necessário que exista
a seta do _mouse_, que aparece apenas quando o dispositivo é um _mouse_ ou um
_trackpad_.

### mas pera ai..

Então quer dizer que `hover` é o mesmo que `pointer: fine`? __Não__.

## @media luminosity

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.