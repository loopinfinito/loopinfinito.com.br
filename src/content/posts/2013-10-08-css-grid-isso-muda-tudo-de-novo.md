---
title: "CSS grid: isso muda tudo de novo"
author: Almir Filho
author_link: http://twitter.com/almirfilho
author_profile: https://plus.google.com/u/0/+AlmirFilho0/posts
author_facebook: https://www.facebook.com/almirflorenciofilho
image: images/posts/2013-10-08-css-grid-isso-muda-tudo-de-novo.jpg
tags: CSS
comments: true
keywords: >
  css grid, grid, css, layout, independencia, estrutura, html, especificacao,
  spec, w3c, linhas, colunas, região, area, tabela, display, display grid,
  conteúdo, associação de conteúdo, grid-template-rows, grid-template-columns,
  grid-area, grid-row, grid-column, grid-row-start, grid-column-start, fr,
  unidade fr, grid-row-end, grid-column-end, grid-template-areas, espaço livre,
  flexivel, template, grid template, responsivo, grid responsivo, template
  responsivo, media queries, ie, ie10, ie11, internet explorer, suporte, colspan
resumo: >
  Esta nova especificação nos permitirá construir e manter _layouts_ de forma
  fácil e __independente__ da estrutura HTML. Enfim teremos realmente
  apresentação separada do conteúdo. Mas atenção, se você tem problemas
  cardíacos, melhor não ler este _post_, pois seu conteúdo é altamente
  empolgante e pode ser perigoso principalmente para pessoas hipertensas.
related:
  - title: CSS Grid Layout
    url: http://www.w3.org/TR/css3-grid-layout/
    from: W3C
  - title: Grid layout
    url: http://msdn.microsoft.com/en-us/library/ie/hh673533(v=vs.85).aspx
    from: Microsoft
  - title: grid
    url: http://css-tricks.com/almanac/properties/g/grid/
    from: css-tricks
  - title: Giving Content Priority with CSS3 Grid Layout
    url: http://24ways.org/2012/css3-grid-layout/
    from: 24 WAYS
---

Atenção, se você tem problemas cardíacos, melhor não ler este _post_, pois seu
conteúdo é altamente empolgante e pode ser perigoso principalmente para pessoas
hipertensas.

Este conteúdo foi abordado em nossa palestra
[__CSS Layout: o ontem, o hoje e o depois__](http://loopinfinito.com.br/2013/06/14/css-layout-pos-apocalipse/ "CSS Layout: o ontem, o hoje e o depois"),
juntamente com o _Flexbox_, as _Exclusions_, as
[_Shapes_](http://loopinfinito.com.br/2013/07/03/css-shapes/ "CSS Shapes"), as
[_Regions_](http://loopinfinito.com.br/2013/09/10/css-regions-e-bruce-lee/ "CSS Regions e Bruce Lee"),
o _Box Model_ e as Tabelas.

## Não confundir

Quando falo de __CSS Grid Layout__, não estou falando sobre como desenvolver
_sistemas de grids_, tais como o do [Bootstrap](http://getbootstrap.com/css/#grid)
ou [Foundation](http://foundation.zurb.com/docs/components/grid.html).
_CSS Grid Layout_ é uma __novíssima__&nbsp;
[especificação W3C](http://www.w3.org/TR/css3-grid-layout/) (ainda em andamento)
que propõe uma nova maneira de _"leiautar"_ na Web.
Dentre suas várias vantagens, _CSS grid_ é muito mais simples e fácil de
usar que o atual e mais conhecido modelo [Box model](http://www.w3.org/TR/CSS2/box.html).

## Quem se lembra?

Quem é das antigas lembra que os _layouts_ de páginas eram feitos geralmente com
`<table>`, ou seja, o _site_ inteiro era um grande tabelão, e isso sem contar
com as tabelas aninhadas.

Algo como o [site da BOL em 2000](http://web.archive.org/web/20001018115733/http://www.bol.com.br/home1.jsp;target=_top)
(olhem o código fonte, eu mesmo achei tabelas aninhadas em 3 níveis).

Depois das tabelas, surgiu o [Tableless](http://pt.wikipedia.org/wiki/Tableless),
que é uma metodologia de construção de _layouts_ que sugere a utilização do
_box model_ — e não mais as tabelas — para _layouts_.
Mas isso tudo, é claro que vocês já sabiam.

## CSS Grid

Com as _grids_&nbsp;<abbr title="Cascading Style Sheets">CSS</abbr> será possível
definir o nosso espaço em tela em __regiões__. Estas regiões poderão ser
flexíveis de várias maneiras, de acordo com a situação.

### Independência estrutural = liberdade

Similarmente às tabelas, as regiões de uma _grid_ são definidas através de
__linhas e colunas__, mas diferente das tabelas, não dependemos de elementos
<abbr title="HyperText Markup Language">HTML</abbr> para isto, ou seja, toda a
definição da _grid_ e de como seu conteúdo deverá se organizar no _layout_ é
feito apenas via CSS — tornando enfim a apresentação de conteúdo independente de
marcações estruturais.

## Crie a grid

Antes de tudo, é preciso declarar que um elemento em seu CSS será uma _grid_.
Podemos fazer isso definindo a propriedade `display` com o valor `grid`.
Simples.

<p class="obs">
  <strong>OBS.:</strong> Irei utilizar IDs para o CSS apenas porque acho mais
  didático, mas não façam isso em casa, usem classes (se não, o titio
  <a href="http://twitter.com/bernarddeluna" title="Bernard de Luna" target="_blank">Bernard</a>
  briga).
</p>

<figure>
  <img src="/images/posts/2013-10-08-grid-1.png" alt="display: grid" width="700" height="200" />
</figure>
<div class="image-code">
```css
#container {
    display: grid;
}
```
</div>

Depois, só precisamos executar __2 passos__:

1. Definir as regiões da _grid_;
2. Associar o conteúdo à _grid_.

## 1. Defina as regiões

Para definir as regiões da nossa _grid_, utilizaremos as novas propriedades
`grid-template-rows` e `grid-template-columns`, que definem nada mais nada
menos que as linhas e colunas da nossa _grid_.

<figure>
  <img src="/images/posts/2013-10-08-grid-linhas-colunas.png" alt="regiões da grid" width="700" height="200" />
</figure>
<div class="image-code">
```css
#container {
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: auto auto auto;
}
```
</div>

No trecho acima, estamos definindo 2 linhas de altura automática (`auto auto`) e
3 colunas também de largura automática (`auto auto auto`).
Com isso teremos como resultado uma _grid_ com 6 regiões — exatamente da mesma
maneira que seria com as tabelas.
Podemos também definir as dimensões com qualquer unidade CSS (`px`, `em`, `%`,
`ex`, `pt`, etc).

### Regiões flexíveis com fr

Eis uma nova unidade CSS: [`fr`](http://www.w3.org/TR/css3-grid-layout/#fr-unit)
(<em>free space</em>) é uma unidade flexível, e que representa uma determinada fração
do __espaço livre__ de uma _grid_.
`fr` funciona de forma similar às unidades flexíveis da especificação
[Flexbox](http://www.w3.org/TR/css3-flexbox/ "Especificação do Flexbox").

Para que uma região possa ocupar todo o espaço horizontal livre, por exemplo,
podemos especificar sua coluna com `1fr` — que nesse caso representará 100% do
espaço horizontal livre:

<figure>
  <img src="/images/posts/2013-10-08-grid-flexivel-1.png" alt="regiões flexíveis" width="700" height="200" />
</figure>
<div class="image-code">
```css
#container {
    /* ... */
    grid-template-columns: auto auto 1fr;
}
```
</div>

A mesma coisa para a coluna do meio:

<figure>
  <img src="/images/posts/2013-10-08-grid-flexivel-2.png" alt="regiões flexíveis 2" width="700" height="200" />
</figure>
<div class="image-code">
```css
#container {
    /* ... */
    grid-template-columns: auto 1fr auto;
}
```
</div>

Se quisermos que o espaço livre seja dividido igualmente entre mais colunas,
basta atribuir o mesmo valor a elas (`1fr`):

<figure>
  <img src="/images/posts/2013-10-08-grid-flexivel-3.png" alt="regiões flexíveis 3" width="700" height="200" />
</figure>
<div class="image-code">
```css
#container {
    /* ... */
    grid-template-columns: auto 1fr 1fr;
}
```
</div>

Para que uma coluna tenha o dobro da outra (ou qualquer outra proporção), os
valores serão calculados proporcionalmente de acordo com suas definições.
No exemplo abaixo, as colunas 2 e 3 ocupam todo o espaço livre, de modo que a
coluna 3 tenha o dobro da largura da coluna 2.

<figure>
  <img src="/images/posts/2013-10-08-grid-flexivel-4.png" alt="regiões flexíveis 4" width="700" height="200" />
</figure>
<div class="image-code">
```css
#container {
    /* ... */
    grid-template-columns: auto 1fr 2fr;
}
```
</div>

E é claro, tudo isso pode também ser aplicado às alturas das linhas:

<figure>
  <img src="/images/posts/2013-10-08-grid-flexivel-5.png" alt="regiões flexíveis 5" width="700" height="200" />
</figure>
<div class="image-code">
```css
#container {
    /* ... */
    grid-template-rows: 1fr 1fr;
}
```
</div>

## 2. Associe o conteúdo

Até aqui, tudo bem, _grid_ definida e pronta para uso, mas não está faltando
algo?
Sim, falta algo bem importante: __o conteúdo__.
Tudo isso que fizemos até agora foi apenas a definição de uma _grid_ vazia.
Agora é preciso jogar nosso conteúdo lá dentro.

### Preste atenção neste HTML

Vamos utilizar __este mesmo trecho__ de HTML abaixo durante todo o resto deste
_post_, isto é, sem modificá-lo.

```html
<div id="page-container">
    <header id="page-header"> ... </header>
    <nav id="page-menu"> ... </nav>
    <section id="page-content"> ... </section>
    <footer id="page-footer"> ... </footer>
</div>
```

Seja a _grid_ definida da seguinte maneira:

<figure>
  <img src="/images/posts/2013-10-08-grid-content-1.png" alt="grid content" width="700" height="300" />
</figure>
<div class="image-code">
```css
#page-container {
    display: grid;
    grid-template-columns: 300px 500px;
    grid-template-rows: 150px auto 200px;
}
```
</div>

É preciso decidir qual conteúdo _X_ vai estar localizado na região _Y_, e para
isso vamos utilizar as novas propriedades `grid-row`, `grid-row-start`,
`grid-row-end`, `grid-column`, `grid-column-start` e `grid-column-end`.

<figure>
  <img src="/images/posts/2013-10-08-grid-content-2.png" alt="grid content" width="700" height="300" />
</figure>
<div class="image-code">
```css
#page-header {
    grid-row: 1;
    grid-column-start: 1;
    grid-column-end: 2;
}

#page-menu {
    grid-row: 2;
    grid-column: 1;
}

#page-content {
    grid-row: 2;
    grid-column: 2;
}

#page-footer {
    grid-row: 3;
    grid-column: 1 / 2;
}
```
</div>

### grid-row-start|end e grid-column-start|end

Podemos especificar como um determinado conteúdo vai se comportar numa _grid_
fazendo __span__ entre suas regiões (`colspan`&nbsp;_feelings_?).

- `grid-row-start` e `grid-row-end`: linhas de onde começa e termina o conteúdo.
- `grid-column-start` e `grid-column-end`: colunas de onde começa e termina o conteúdo.

No trecho CSS acima, `#page-header` está localizado na linha 1, começando na
coluna 1 e se estendendo pela coluna 2.

### grid-row e grid-column

Há duas possibilidades para utilizar estas propriedades:

1. Definir a linha/coluna;
2. Definir o começo e término da linha/coluna (sendo assim um atalho para
_start_ e _end_).

Por exemplo, no trecho CSS acima, `#page-footer` está localizado na linha 3
(começo e término), começando na coluna 1 e se estendendo pela coluna 2.

É importante notar que aqui fizemos apenas associações de __1 para 1__.
Mas nada impede de termos associações de __N para 1__, ou seja, vários conteúdos
sendo colocados na mesma região.

## Templates nomeados, a cereja do bolo

Já que vimos como criar _grids_ e como associar conteúdo, agora vamos aprender a
fazer tudo isso novamente, só que de uma maneira mais bonita, por assim dizer.

Com o intuito de facilitar nossa vida (ainda mais), é possível definir uma
_grid_ com nomes — em vez de números — através da propriedade
`grid-template-areas`.

<figure>
  <img src="/images/posts/2013-10-08-grid-template.png" alt="grid template" width="700" height="300" />
</figure>
<div class="image-code">
```css
#container {
    display: grid;
    grid-template-areas: "cabecalho cabecalho"
                         "menu conteudo"
                         "rodape rodape";
}
```
</div>

O uso de `grid-template-areas` é bem simplificado, basta definirmos uma _string_
para cada linha, e dentro de cada _string_ definimos um identificador para cada
região, separados por espaço em branco.

Dessa maneira, definimos uma _grid_ de forma mais visual e sem a necessidade de
usar as duas propriedades `grid-template-rows` e `grid-template-columns`.

O legal dessa abordagem é que ela já torna mais fácil de fazer _span_ de
regiões, perceba que as regiões __cabecalho__ e __rodape__ fazem _span_ nas
duas colunas presentes da _grid_.
E isso é facilmente alcançado apenas repetindo o mesmo nome da região em suas
adjacências.

### Associando conteúdo like a boss

Para associar o conteúdo com esta abordagem de templates nomeados, usaremos a
propriedade `grid-area`, e não precisaremos mais das propriedades `grid-row` e
`grid-column`:

```css
#page-header  { grid-area: cabecalho; }
#page-menu    { grid-area: menu; }
#page-content { grid-area: conteudo; }
#page-footer  { grid-area: rodape; }
```

Muito simples, não?

## Templates responsivos

Que tal tornar responsivo o _layout_ de uma aplicação do jeito mais fácil
possível?
Com os templates nomeados e _media queries_, isso se torna muito fácil.
Vamos implementar agora um _layout mobile_ simples para nossa _grid_:

<figure>
  <img src="/images/posts/2013-10-08-grid-template-2.png" alt="grid template responsivo" width="700" height="300" />
</figure>
<div class="image-code">
```css
/* definição normal da grid */
#container {
    display: grid;
    grid-template-areas: "cabecalho cabecalho"
                         "menu conteudo"
                         "rodape rodape";
}

#page-header  { grid-area: cabecalho; }
#page-menu    { grid-area: menu; }
#page-content { grid-area: conteudo; }
#page-footer  { grid-area: rodape; }

/* definição responsiva da grid */
@media screen and (max-device-width: 800px), screen and (max-width: 800px) {
    #container {
        grid-template-areas: "cabecalho"
                             "conteudo"
                             "rodape";
    }

    #page-menu { grid-area: cabecalho; } /* reassocia o conteúdo a outra região */
}
```
</div>

E _voilà_!
Mudamos praticamente todo o _layout_ sem precisar mexer numa cacetada de
propriedades.
Perceba que a região __menu__ deixou de existir, então se ainda quisermos exibir
o conteúdo de `#page-menu`, será preciso associá-lo a outra região — no nosso
caso, o menu foi para a região __cabecalho__.

Acredite, é __apenas isso__. Não esqueça que o resto do conteúdo já está
associado às suas respectivas regiões, de modo que não precisamos mais nos
preocupar com isso.

## Quer mais? Então pega!

Há ainda muita coisa sobre esta especificação, como alinhamento vertical e
horizontal automático de conteúdo, regiões fluidas, reordenação de conteúdo com
`order`, _grids_ implícitas com linhas e colunas automáticas, _subgrids_,
_inline grids_, etc.
Decidi não discorrer sobre nenhum desses assuntos pois o _post_ já se encontra
demasiado grande, mas caso queira saber mais, clique
[aqui](http://www.w3.org/TR/css3-grid-layout/).

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
            <td class="property">Grid Layout box model</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>10* <code class="small">-ms-</code></td>
            <td>--</td>
        </tr>
    </tbody>
    <tfoot>
        <tr><td colspan="6">* parcialmente implementado</td></tr>
    </tfoot>
</table>

Esse é o momento em que todo mundo fala:
__Só o IE?__ O que será que está acontecendo com este mundo?
Pois é, amigos, apenas o IE é que dá suporte à partir da sua versão 10 (ainda
que seja parcial).
E se você usa Windows e tem o IE10 — ou IE11 —, pode testar a CSS Grid com
[__esse experimento__](http://ie.microsoft.com/testdrive/Graphics/hands-on-css3/hands-on_grid.htm)!