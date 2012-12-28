---
title: CSS <span>blend modes</span> <span class="light">parte 2</span>
layout: post
author: Almir Filho
author_link: http://twitter.com/almirfilho
author_profile: https://plus.google.com/111718150595519513871/
resumo: --
image: images/posts/2013-01-08-css-blend-modes-parte-2.jpg
tags: CSS
keywords: css, css3, blend mode, blend, blend-mode, background, fundo, w3c, grafico, filter, filtros, mistura, backdrop, overlay, elemento, imagem, composicao, calculo, alpha-compositing, knock-out, isolation
comments: false
---
dadasdas
Se você ainda não viu, no meu último *post* falei sobre a novidade
[**CSS blend modes**](#),
e este *post* é uma continuação, pois irei falar como será possível
aplicar os *blend modes* apenas nos *backgrounds* dos elementos.

## Novas propriedades

O *draft* da especificação [*CSS Blend Modes Level 1*](#)
introduz mais **6 novas propriedades** – todas referentes a *background*:

### background-alpha-compositing

dasdasdas

### background-blend-mode

dasdas

### box-shadow-blend-mode

dasdadsasdas

### text-shadow-blend-mode

dasdasd

### foreground-blend-mode

dasdada

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

<aside class="fonte">
    <h3>Referência</h3>
    <ul>
        <li>→<a href="http://www.w3.org/TR/compositing/" alt="Compositing and Blending 1.0" title="Compositing and Blending 1.0">Compositing and Blending 1.0</a> <span class="comment">// W3C</span></li>
    </ul>
</aside>
