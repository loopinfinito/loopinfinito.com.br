---
title: Novos seletores CSS4
tags: css
author: Caio Gondim
author_link: http://twitter.com/caio_gondim
author_profile: https://plus.google.com/109656206006790732674/
author_facebook: https://www.facebook.com/caiogondim
image: images/posts/2012-06-24-novos-seletores-css4.jpg
comments: true
keywords: >
  css, css3, css4, stylesheet, style, webdev, html5, web, development, front-end
resumo: >
  Imagino que nem metade da especificação do CSS3 foi implementada e já estamos
  falando de CSS4, mas temos que estar cientes do que está por vir.
  Afinal, pior que um navegador ultrapassado é um programador desatualizado.
---

Imagino que nem metade da especificação do CSS3 foi implementada e já estamos falando de CSS4,
mas temos que estar cientes do que está por vir.
Afinal, pior que um navegador ultrapassado é um desenvolvedor desatualizado.

## $E > F

Um dos novos seletores mais empolgantes e poderosos. Com ele, podemos
estilizar um elemento (`$E`) em relação aos seus filhos (`F`).
Com o símbolo `$` declaramos em que elemento iremos aplicar os estilos.

No exemplo abaixo, iremos selecionar apenas as tags `div` que
possuem uma `ul` com a classe *menu*.

```css
/* seleciona a <div>, e não a <ul> */
$div ul.menu { ... }
```

Podemos misturá-lo com outros e assim ter mais poder para
selecionar exatamente os elementos que queremos, sem a necessidade de marcação
adicional.

```css
/* estiliza o <h2> que possui um elemento <a> como filho direto */
$h2 > a { ... }

/* estiliza as <ul> que possuem apenas uma <li> */
$ul > li:only-child { ... }

/* estiliza a <div> que possui um <h2> e <p> como descendentes */
$div h2 ~ p { ... }
```

## E:not(s1, s2)

Já presente no CSS3, agora a pseudo-classe <code>:not()</code> pode receber mais de um seletor.
Combinadores como `+`, `~` e `>` não são suportados.

```css
/* seleciona todos os elementos, menos os <p> e <a> */
*:not(p, a) { ... }

/* seleciona todos os <input>, com exceção dos checked */
input:not(:checked) { ... }

/* seletor não válido */
a:not(p > a) { ... }
```

## E:matches(s1, s2)

Meu segundo seletor favorito.
Com ele podemos expressar em um único seletor o que antes era necessário declarar em várias linhas.

```css
/* seleciona todos os <a> e <p> que estão dentro de um <section> */
section :matches(a, p) { ... }

/* seleciona as <img> que estão dentro de <figure> ou <div class="foto-principal"> */
:matches(figure, div.foto-principal) img { ... }

/* seleciona os <input> nos estados de focus e hover  */
input:matches(:focus, :hover) { ... }
```

## E\[foo="bar" i\]

O mesmo que `E\[foo="bar"\]`, porém este é *case-insensitive*.
Reparem o `i` adicional.
Não me vejo utilizando, mas se algum dia for necessário é bom saber que existe.

```css
/* seleciona os elementos <div data-user="JoAo">, <div data-user="JOAO"> e <div data-user="joao"> */
div[data-user="joao" i] { ... }

/* seleciona apenas <div data-user="joao"> */
div[data-user="joao"] { ... }
```

## E:local-link

Fácil e útil. Seleciona apenas os links que apontam para dentro da página atual.

```css
/* seleciona todos os links que apontam para um elemento dentro do documento */
a:local-link { ... }

/* seleciona todos os links que apontam para fora do documento atual */
a:not(:local-link) { ... }
```

## E:local-link(0)

Semelhante ao `:local-link`, porém seleciona todos os links que apontam para o domínio atual.

```css
/* seleciona todos os links que apontam para o mesmo domínio atual */
a:local-link(0) { ... }

/* seleciona todos os links que apontam para um domínio diferente do atual */
a:not(:local-link(0)) { ... }
```

## E /foo/ F

Este seletor é um pouco mais complexo.
No código `E /foo/ F`, selecionamos o elemento `F` cujo ID esteja no atributo `/foo/` de `E`.
OK, melhor um exemplo.

```css
/* selecionamos o <input> quando o seu <label> estiver no estado hover ou focus */
label:matches(:hover, :focus) /for/ input { ... }
```

No exemplo acima, aplicamos uma regra ao `input` quando o seu `label` estiver
`:hover` ou `:focus`. Fazemos a relação entre `label` e `input` através de um
atributo que ficará entre as barras, no caso o atributo `for`. Este atributo
deve conter o ID do elemento a direita como valor. No exemplo acima um
`input`.

O interessante deste seletor é que o elemento a direita não precisa estar dentro do elemento a esquerda (como acontece com os seletores compostos) ou ser irmão (como acontece com os combinadores `+` ou `~`).
É um novo tipo de combinador que faz uma referência a um outro elemento independente de seu parentesco na árvore HTML.
Chamamos este novo combinador de **combinador de referência**.

## /\* CSS3++ \*/

A especificação dos seletores CSS4 ainda está em fase de [rascunho](http://www.w3.org/TR/2011/WD-selectors4-20110929) e podem ocorrer mudanças até a versão final.
Mas é interessante acompanhá-la e saber como será o futuro da nossa querida linguagem e o que este futuro tem a nos oferecer.

E vocês, o que acharam dos novos seletores?
Conseguem se imaginar usando?
Ou acham que é apenas mais uma nova tecnologia que o IE não vai nos permitir usar tão cedo?

<h2 id="atualizacoes">Atualizações</h2>
<div class="update">
	<h3>20/11/2012</h3>
	<p>
		Uma correção ao post. <strong>Não existe CSS4</strong>.
	</p>
	<p>
		Com o HTML5, o CSS foi dividido em módulos e este que tratamos aqui no post é
		o <a href="http://dev.w3.org/csswg/selectors4/">módulo de seletores level 4</a>.
	</p>
</div>

<aside class="fonte">
	<h3>Referência</h3>
	<ul>
		<li><a href="http://www.w3.org/TR/2011/WD-selectors4-20110929/#overview" alt="W3C Selectors Level 4" title="W3C Selectors Level 4">W3C Selectors Level 4</a></li>
		<li><a href="http://davidwalsh.name/css4-preview" alt="David Walsh: CSS4 preview" title="David Walsh: CSS4 preview">David Walsh: CSS4 preview</a></li>
	</ul>
</aside>
