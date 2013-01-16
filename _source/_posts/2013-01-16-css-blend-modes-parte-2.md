---
title: CSS <span>blend modes</span> parte 2
layout: post
author: Almir Filho
author_link: http://twitter.com/almirfilho
author_profile: https://plus.google.com/111718150595519513871/
image: images/posts/2013-01-16-css-blend-modes-parte-2.jpg
tags: CSS
comments: false
keywords: >
  css, css3, blend mode, blend, blend-mode, background, fundo, w3c, grafico,
  filter, filtros, mistura, backdrop, overlay, elemento, imagem, composicao,
  calculo, alpha-compositing, knock-out, isolation
resumo: >
  Esta é uma continuação do nosso *post*&nbsp;
  [CSS blend modes](http://loopinfinito.com.br/2012/12/19/css-blend-modes/),
  pois iremos falar sobre como será possível aplicar os mesmos *blend modes* em
  outros lugares como **backgrounds** e **shadows**.
---

Se você ainda não viu, no meu último *post* falei sobre a novidade
[**CSS blend modes**](http://loopinfinito.com.br/2012/12/19/css-blend-modes/).
Este *post* é uma continuação do mesmo, pois irei falar sobre como será possível
aplicar os mesmos *blend modes* em outros lugares, como por exemplo em
**fundos** (propriedade `background`) e em **sombras** (propriedades
`box-shadow` e `text-shadow`).

O *draft* da especificação [*Compositing and Blending 1.0*](http://www.w3.org/TR/compositing/)
introduz mais **5 novas propriedades**: `background-blend-mode`,
`background-alpha-compositing`, `box-shadow-blend-mode`, `text-shadow-blend-mode`
e `foreground-blend-mode`. Falaremos sobre cada uma delas a seguir.

## Blend modes em backgrounds

Também é possível aplicar um *blend mode* apenas no **background** de um elemento.
Para isso temos 2 novas propriedades CSS: `background-alpha-compositing` e
`background-blend-mode`.

Para ilustrar as aplicações deste *post*, iremos usar a seguinte imagem
de exemplo:

<figure>
	<img src="/images/posts/2013-01-16-homer-original.jpg" title="Homer Original" alt="Homer Original" height="200" />
</figure>

Vamos considerar que a imagem acima pode ser composta por uma `<div>` geral
que tem o *Moe's* (bar do Moe) como fundo e por mais uma `<div>` de fundo
que contém o conteúdo – a imagem do Homer e seus nomes (HTML abaixo):

{% highlight html %}
<div class="bar">
    <div class="fundo-azul">
    	<img class="homer" src="homer.png" />
        <h1>Homer</h1>
        <h2>Simpson</h2>
    </div>
</div>
{% endhighlight %}

### background-blend-mode

Como vimos no [post anterior](http://loopinfinito.com.br/2012/12/19/css-blend-modes/),
teremos **16 blend modes** disponíveis, e poderemos aplicá-los da mesma
maneira para os *backgrounds* com a propriedade `background-blend-mode`.

Aplicando o *blend mode*&nbsp;**exclusion** no fundo da `div.fundo-azul`:

<figure>
	<img src="/images/posts/2013-01-16-homer-background.jpg" title="Homer background-blend-mode" alt="Homer background-blend-mode" height="200" />
</figure>

<div class="image-code">
{% highlight css %}
.fundo-azul {
    background-color: #4DA6FF; /* azul claro */
    background-blend-mode: exclusion;
}
{% endhighlight %}
</div>

Perceba que o *blend mode* apenas é aplicado ao *background* do elemento,
ou seja, no fundo azul – deixando os elementos filhos da `div.fundo-azul`
&nbsp;**inalterados**.

### background-alpha-compositing

Assim como a propriedade `alpha-compositing`, define o modo de composição
usado quando é realizada a composição em um **background** de um elemento.
Seu valor padrão é `source-over`, e existem mais
[12 possibilidades](http://www.w3.org/TR/compositing/#alpha-compositing).
Para saber mais, visite a seção sobre
[Composição avançada](http://www.w3.org/TR/compositing/#advancedcompositing)
do *draft* da especificação W3C.

## Blend modes em foregrounds

Ao contrário dos *backgrounds*, com a propriedade `foreground-blend-mode`
será possível definir o *blend mode* para **o texto e elementos filhos**.

### foreground-blend-mode

Vamos definir o `foreground-blend-mode` na `div.fundo-azul` como **exclusion**:

<figure>
	<img src="/images/posts/2013-01-16-homer-foreground.jpg" title="Homer foreground-blend-mode" alt="Homer foreground-blend-mode" height="200" />
</figure>

<div class="image-code">
{% highlight css %}
.fundo-azul {
    foreground-blend-mode: exclusion; /* elementos filhos */
    /* ... */
}
{% endhighlight %}
</div>

Assim todos os elementos aninhados no elemento `div.fundo-azul` (a imagem e os
textos) serão renderizados com o *blend mode* determinado e o fundo permanecerá
inalterado.

## Blend modes em sombras

Já tá virando brincadeira, né. Mas é verdade, *blend modes*&nbsp;**apenas
em sombras**! Sabemos que em CSS temos duas propriedades que definem sombras:
`box-shadow` e `text-shadow`, de maneira análoga teremos também mais duas
propriedades para aplicação de *blend modes* em sombras: `box-shadow-blend-mode`
e `text-shadow-blend-mode`.

### box-shadow-blend-mode

Vamos criar um efeito de *fading* na `div.fundo-azul` (como se ela estivesse
desaparecendo nas suas extremidades). Para conseguirmos isto
apenas precisamos aplicar uma sombra da mesma cor (azul claro) e aplicar o
mesmo *blend mode* (*exclusion*).

<figure>
	<img src="/images/posts/2013-01-16-homer-box-shadow.jpg" title="Homer box-shadow-blend-mode" alt="Homer box-shadow-blend-mode" height="200" />
</figure>

<div class="image-code">
{% highlight css %}
.fundo-azul {
    /* aplicando a sombra */
    box-shadow: 0px 0px 22px 22px #4DA6FF; /* mesma cor que o fundo */
    box-shadow-blend-mode: exclusion; /* mesmo blend mode que o fundo */
}
{% endhighlight %}
</div>

Legal, hein!?

### text-shadow-blend-mode

Agora é a vez de aplicar um *blend mode* em sombras de texto com a propriedade
`text-shadow-blend-mode`. Vamos aplicar o *blend mode*&nbsp;**overlay** na
sombra do elemento `<h1>`:

<figure>
	<img src="/images/posts/2013-01-16-homer-text-shadow.jpg" title="Homer text-shadow-blend-mode" alt="Homer text-shadow-blend-mode" height="200" />
</figure>

<div class="image-code">
{% highlight css %}
h1 {
    /* aplicando a sombra no texto */
    text-shadow: 7px 7px 1px black;
    text-shadow-blend-mode: overlay;
}
{% endhighlight %}
</div>

Perceba como a sombra de `<h1>` ("Homer") ficou bem direfente da sombra de
`<h2>` ("Simpson"), pois ela realiza um *blending* com o fundo azul.

## Multiplicidade de valores

Se qualquer uma das propriedades `background`, `box-shadow` ou `text-shadow`
forem definidar com múltiplos valores, também será possível definir seus
respectivos *blend modes* com múltiplos valores separando-os por `,`.
Abaixo um exemplo com `text-shadow-blend-mode`:

<figure>
	<img src="/images/posts/2013-01-16-loop.jpg" title="Looooop" alt="Looooop" height="200" />
</figure>

<div class="image-code">
{% highlight css %}
#psicodelia {
    color: white;
    font-size: 120px;
    /* aplicando multiplas sombras no texto */
    text-shadow: -10px 0px 12px #2692FF,
                  10px 0px 12px #2692FF,
                 -23px 0px 12px #FF7F00,
                  23px 0px 12px #FF7F00;
    /* aplicando os blend modes para cada sombra */
    text-shadow-blend-mode: difference,
                            exclusion,
                            difference,
                            exclusion;
}
{% endhighlight %}
</div>

O mesmo serve para `background-blend-mode` e `box-shadow-blend-mode`.

## Suporte

Nenhum navegador ainda se atreveu em implementar nada sobre *blend modes*,
afinal de contas a especificação ainda tem que amadurecer um pouco.
E também não há previsões disso.

### Como testar?

A Adobe fez um *fork* do **Chromium**, implementou algumas funcionalidades e
disponibilizou para demonstrar o uso dos *blend modes*. Se você estiver afim de
testar, faça o *download* do Chromium deles aqui e teste acessando
[essa página de testes](http://adobe.github.com/web-platform/demos/compositing/blend-photogallery/index.html).
Eu fiz o teste e é show de bola.

Por hoje é isso aê!

<aside class="fonte">
    <h3>Referência</h3>
    <ul>
        <li>→<a href="http://loopinfinito.com.br/2012/12/19/css-blend-modes/" alt="CSS Blend Modes" title="CSS Blend Modes">CSS Blend Modes parte 1</a> <span class="comment">// Loop Infinito</span></li>
        <li>→<a href="http://www.w3.org/TR/compositing/" alt="Compositing and Blending 1.0" title="Compositing and Blending 1.0">Compositing and Blending 1.0</a> <span class="comment">// W3C</span></li>
    </ul>
</aside>
