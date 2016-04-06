---
title: CSS <span>shapes</span>
layout: post
author: Almir Filho
author_link: http://twitter.com/almirfilho
author_profile: https://plus.google.com/u/0/+AlmirFilho0/posts
author_facebook: https://www.facebook.com/almirflorenciofilho
image: images/posts/2013-07-03-css-shapes.jpg
tags: CSS
comments: true
keywords: >
  css, css3, css shapes, shapes, retangulo, circulo, poligono, elipse,
  especificacao, contorno, limite, flutua, float, forma, shape-inside,
  shape-outside, shape-margin, shape-image-threshold, shape-padding, grafico,
  revista, texto, imagem, rectangle, polygon, circle, ellipse
resumo: >
  Sabe quando você vai ler uma revista, e no meio do texto há uma imagem
  irregular, mas o texto elegantemente a _contorna_, respeitando sua forma?
  Ou quando aparece por exemplo, um gráfico de pizza, e dentro de cada fatia tem
  um texto que se _adequa_ a forma dela?
  Pois é, agora podemos fazer o mesmo com CSS.
related:
  - title: CSS Shapes Module Level 1 (draft)
    url: http://www.w3.org/TR/css-shapes/
    from: W3C
  - title: Freeing the Floats of the Future from the Tyranny of the rectangle
    url: http://blogs.adobe.com/webplatform/2013/03/27/freeing-the-floats-of-the-future-from-the-tyranny-of-the-rectangle/
    from: Adobe
  - title: Wrap text around ou inside any shape
    url: http://html.adobe.com/webplatform/layout/shapes/
    from: Adobe
---

<style>
.example.normal {
  font-size: 13px;
  line-height: 140%;
  font-style: italic;
}
.example.normal .flutua {
  width: 100px;
  height: 100px;
  float: left;
  border: 1px dashed #ccc;
  text-align: center;
  line-height: 100px;
  border-radius: 50%;
  font-style: normal;
}
#exemplo-shape-outside .flutua,
#exemplo-shape-margin .flutua {
  -webkit-shape-outside: circle(50px, 50px, 50px);
  -moz-shape-outside: circle(50px, 50px, 50px);
  -ms-shape-outside: circle(50px, 50px, 50px);
  shape-outside: circle(50px, 50px, 50px);
}
#exemplo-shape-outside-ellipse .flutua {
  width: 200px;
  height: 60px;
  -webkit-shape-outside: ellipse(50%, 50%, 50%, 50%);
  -moz-shape-outside: ellipse(50%, 50%, 50%, 50%);
  -ms-shape-outside: ellipse(50%, 50%, 50%, 50%);
  shape-outside: ellipse(50%, 50%, 50%, 50%);
}
#exemplo-shape-outside-polygon .flutua {
  width: 100px;
  height: 88px;
  border: none;
  border-radius: 0;
  -webkit-shape-outside: polygon(0 0, 100% 100%, 0 100%);
  -moz-shape-outside: polygon(0 0, 100% 100%, 0 100%);
  -ms-shape-outside: polygon(0 0, 100% 100%, 0 100%);
  shape-outside: polygon(0 0, 100% 100%, 0 100%);
}
#exemplo-shape-margin .margin {
  width: 70px;
  height: 70px;
  border: 1px solid #ccc;
  border-radius: 50%;
  margin: auto;
  margin-top: 14px;
}
.rolling-stones {
  float: left;
  width: auto !important;
  background: none !important;
  position: static !important;
}
#exemplo-imagem .rolling-stones {
  -webkit-shape-outside: polygon(0 0, 123px 0, 134px 36px, 155px 56px, 134px 78px, 109px 129px, 62px 164px, 0 164px);
  -moz-shape-outside: polygon(0 0, 123px 0, 134px 36px, 155px 56px, 134px 78px, 109px 129px, 62px 164px, 0 164px);
  -ms-shape-outside: polygon(0 0, 123px 0, 134px 36px, 155px 56px, 134px 78px, 109px 129px, 62px 164px, 0 164px);
  shape-outside: polygon(0 0, 123px 0, 134px 36px, 155px 56px, 134px 78px, 109px 129px, 62px 164px, 0 164px);
}
#exemplo-shape-inside {
  height: 200px;
}
#exemplo-shape-inside div {
  width: 200px;
  height: 200px;
  text-align: justify;
  overflow: hidden;
}
.inside-circle {
  float: left;
  margin-left: 50px;
  -webkit-shape-inside: circle(50%, 50%, 50%);
  -moz-shape-inside: circle(50%, 50%, 50%);
  -ms-shape-inside: circle(50%, 50%, 50%);
  shape-inside: circle(50%, 50%, 50%);
}
.inside-hexagon {
  float: right;
  margin-right: 50px;
  -webkit-shape-inside: polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%);
  -moz-shape-inside: polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%);
  -ms-shape-inside: polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%);
  shape-inside: polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%);
}
</style>

Sabe quando você vai ler uma revista, e no meio do texto há uma imagem
irregular, mas o texto elegantemente a _contorna_, respeitando sua forma?
Ou quando aparece por exemplo, um gráfico de pizza, e dentro de cada fatia tem
um texto que se _adequa_ a forma dela?

Pois é, eu não faço a mínima ideia de como eles fazem isso.
Só sei que agora podemos fazer o mesmo com CSS!

Se você ainda não entendeu nada, dê uma boa olhada na imagem a seguir.

![Penhasco com texto](/images/posts/2013-07-03-css-shapes1.jpg)

Não estou falando das colunas, isso é assunto para outro _post_ ;)
Perceba como o texto da coluna direita acompanha a forma do penhasco.

## Antes de continuar

Para visualizar os exemplos deste _post_ corretamente, você deve estar utilizando
o navegador __Google Chrome__ e é preciso habilitar uma _flag_ dele primeiro.
Na versão estável (atualmente 27) basta digitar chrome://flags na barra de
endereços, e habilitar a opção __Experimental WebKit features__, como na imagem
abaixo. Depois reinicie o navegador.

![Experimental WebKit features](/images/posts/2013-05-28-enable-webkit-experimental-features.jpg)

## CSS shapes

Antes de falar das aplicações das _CSS shapes_, vamos primeiramente
entender do que se tratam estas entidades.

_Shapes_ são formas geométricas que definem __contornos__ os quais conteúdos
_inline_ flutuam – ou seja, conteúdo textual e inicialmente imagens e elementos
definidos com `display: inline` ou `display: inline-block`.

<blockquote>
  <p>Shapes define arbitrary geometric contours around which inline content flows.</p>
  <footer> – <abbr title="World Wide Web Consortium">W3C</abbr> Public Working Draft 20 June 2013</footer>
</blockquote>

A Adobe e a Microsoft estão por trás desta especificação –
[CSS Shapes Module Level 1](http://www.w3.org/TR/css-shapes/) – cujo trabalho
ainda está em andamento, porém já podemos testar e brincar com várias coisas
graças ao Google Chrome.

## Formas básicas

Inicialmente, há 4 formas básicas definidas:

- Retângulo: através das funções `rectangle()` e `inset-rectangle()`;
- Círculo: através da função `circle()`;
- Elípse: através da função `ellipse()`;
- Polígono: através da função `polygon()`.

Vale observar que todos os valores usados como parâmetros destas funções podem
ser absolutos (`px`, `in`, `pt`, `cm`, etc.) ou relativos (`%`, `em`, `rem`,
`ex`, etc.)

### rectangle()

{% highlight css %}
/* rectangle(x, y, width, height, rx, ry) */
   rectangle(0, 0, 100px, 80px, 20%, 40%)
{% endhighlight %}

- `x` e `y`: coordenadas do ponto inicial nos _eixos X e Y_ (horizontal e vertical);
- `width` e `height`: largura e altura;
- `rx` e `ry`: raio dos cantos nas direções horizontal e vertical
(para bordas arredondadas) (opcional).

### inset-rectangle()

{% highlight css %}
/* inset-rectangle(top, right, bottom, left, rx, ry) */
   inset-rectangle(10%, 20%, 40px, 20%, 8px, 8px)
{% endhighlight %}

- `top`, `right`, `bottom` e `left`: Define o retângulo em relação ao seu
elemento ancestral;
- `rx` e `ry`: raio dos cantos nas direções horizontal e vertical
(para bordas arredondadas) – opcionais.

### circle()

{% highlight css %}
/* circle(cx, cy, radius) */
   circle(50%, 50%, 80px)
{% endhighlight %}

- `cx` e `cy`: coordenadas do ponto central nos _eixos X e Y_
(horizontal e vertical);
- `radius`: raio do círculo;

### ellipse()

{% highlight css %}
/* ellipse(cx, cy, rx, ry) */
   ellipse(50%, 50%, 80px, 200px)
{% endhighlight %}

- `cx` e `cy`: coordenadas do ponto central nos _eixos X e Y_
(horizontal e vertical);
- `rx` e `ry`: raios nos _eixos X e Y_ (horizontal e vertical).

### polygon()

{% highlight css %}
/* polygon(x1 y1, x2 y2, ..., xn yn) */
   polygon(10px 10px, 20px 10px, 20px 20px) /* um triângulo */
{% endhighlight %}

- `xn` e `yn`: tuplas com as coordenadas dos pontos do polígono no _eixos X e Y_
(horizontal e vertical). O polígono será fechado automaticamente ligando-se o
primeiro ao último ponto da lista.

## Aplicando as shapes

Agora que conhecemos os 4 tipos de formas básicas, podemos começar a utilizá-las
através das propriedades `shape-outside` e `shape-inside`.
Há também outras propriedades relacionadas às _shapes_, como `shape-margin`,
`shape-padding` e `shape-image-threshold`. Vamos a elas.

## shape-outside

Com `shape-outside` é possível definir o contorno externo de um elemento.
Atualmente apenas funciona em elementos flutuantes (com `float: left` ou
`float: right`).

Por exemplo, podemos ter uma `<div>` de tamanho 100x100px que flutua à esquerda de
um texto, e ainda ter a forma de um círculo (com a propriedade `border-radius`):

{% highlight html %}
<article>
    <div class="flutua"></div>
    Vou mostrando como sou e vou sendo como posso (...)
</article>
{% endhighlight %}

E `.flutua` definido no CSS abaixo, vamos ter algo parecido como isto:

<div class="img example normal bordered" id="exemplo-float">
  <div class="flutua"><code>.flutua</code></div>
  Vou mostrando como sou e vou sendo como posso.
  Jogando meu corpo no mundo, andando por todos os cantos.
  E pela lei natural dos encontros, eu deixo e recebo um tanto.
  E passo aos olhos nus ou vestidos de lunetas.
  Passado, presente, participo sendo o mistério do planeta.
  O tríplice mistério do stop, que eu passo por e sendo ele no que fica em cada um.
  No que sigo o meu caminho e no ar que fez e assistiu.
  Abra um parênteses, não esqueça que independente disso eu não passo de um malandro.
  De um moleque do Brasil, que peço e dou esmolas.
  Mas ando e penso sempre com mais de um, por isso ninguém vê minha sacola.
</div>

<div class="example-code">
{% highlight css %}
.flutua {
    width: 100px;
    height: 100px;
    float: left;
    border-radius: 50%;
}
{% endhighlight %}
</div>

Perceba que, apesar do elemento `.flutua` ter sua aparência circular, o seu
_layout_ é retangular. Todos os elementos
<abbr title="HyperText Markup Language">HTML</abbr> são assim – no final das
contas, tudo é um monte de quadrado pro navegador –, com exceção aos elementos
gráficos <abbr title="Scalable Vector Graphics">SVG</abbr>.

Como já foi dito, a propriedade `shape-outside` permite definir um contorno
externo de maneira um pouco _diferente_. Vamos definir um círculo do mesmo
tamanho e localização que o ilustrado por `.flutua`, e veremos o que acontece.

### shape-outside: circle()

<div class="img example normal bordered" id="exemplo-shape-outside">
  <div class="flutua"><code>.flutua</code></div>
  Vou mostrando como sou e vou sendo como posso.
  Jogando meu corpo no mundo, andando por todos os cantos.
  E pela lei natural dos encontros, eu deixo e recebo um tanto.
  E passo aos olhos nus ou vestidos de lunetas.
  Passado, presente, participo sendo o mistério do planeta.
  O tríplice mistério do stop, que eu passo por e sendo ele no que fica em cada um.
  No que sigo o meu caminho e no ar que fez e assistiu.
  Abra um parênteses, não esqueça que independente disso eu não passo de um malandro.
  De um moleque do Brasil, que peço e dou esmolas.
  Mas ando e penso sempre com mais de um, por isso ninguém vê minha sacola.
</div>

<div class="example-code">
{% highlight css %}
.flutua {
    /* ... */
    shape-outside: circle(50px, 50px, 50px);
}
{% endhighlight %}
</div>

_Voilà!_ Agora o texto acompanha a forma definida!
Como o tamanho de `.flutua` é 100x100px, seu ponto central é (`50px`, `50px`), e
seu raio também é `50px`, de modo a preencher toda a largura e altura do elemento.
Hora de brincar com outras formas:

### shape-outside: ellipse()

<div class="img example normal bordered" id="exemplo-shape-outside-ellipse">
  <div class="flutua"><code>.flutua</code></div>
  Vou mostrando como sou e vou sendo como posso.
  Jogando meu corpo no mundo, andando por todos os cantos.
  E pela lei natural dos encontros, eu deixo e recebo um tanto.
  E passo aos olhos nus ou vestidos de lunetas.
  Passado, presente, participo sendo o mistério do planeta.
  O tríplice mistério do stop, que eu passo por e sendo ele no que fica em cada um.
  No que sigo o meu caminho e no ar que fez e assistiu.
  Abra um parênteses, não esqueça que independente disso eu não passo de um malandro.
  De um moleque do Brasil, que peço e dou esmolas.
  Mas ando e penso sempre com mais de um, por isso ninguém vê minha sacola.
</div>

<div class="example-code">
{% highlight css %}
.flutua {
    width: 200px;
    height: 60px;
    /* ... */
    shape-outside: ellipse(50%, 50%, 50%, 50%);
}
{% endhighlight %}
</div>

### shape-outside: polygon()

<div class="img example normal bordered" id="exemplo-shape-outside-polygon">
  <div class="flutua"> </div>
  Vou mostrando como sou e vou sendo como posso.
  Jogando meu corpo no mundo, andando por todos os cantos.
  E pela lei natural dos encontros, eu deixo e recebo um tanto.
  E passo aos olhos nus ou vestidos de lunetas.
  Passado, presente, participo sendo o mistério do planeta.
  O tríplice mistério do stop, que eu passo por e sendo ele no que fica em cada um.
  No que sigo o meu caminho e no ar que fez e assistiu.
  Abra um parênteses, não esqueça que independente disso eu não passo de um malandro.
  De um moleque do Brasil, que peço e dou esmolas.
  Mas ando e penso sempre com mais de um, por isso ninguém vê minha sacola.
</div>

<div class="example-code">
{% highlight css %}
.flutua {
    width: 100px;
    height: 88px;
    /* um triângulo: */
    shape-outside: polygon(0 0, 100% 100%, 0 100%);
}
{% endhighlight %}
</div>

## shape-margin

Esta propriedade é bem simples, apenas define uma margem para a _shape_ definida
(o resultado é o mesmo da propriedade `margin` em elementos comuns).

<p class="obs"><strong>OBS.:</strong> Tentei testar esta propriedade no Chrome
Stable 27 e no Chrome Canary 30, mas o resultado ainda não é o esperado nas
implementações atuais. O exemplo abaixo é apenas uma representação do que
deveria acontecer.</p>

<div class="img example normal bordered" id="exemplo-shape-margin">
  <div class="flutua">
    <div class="margin"><code>.flutua</code></div>
  </div>
  Vou mostrando como sou e vou sendo como posso.
  Jogando meu corpo no mundo, andando por todos os cantos.
  E pela lei natural dos encontros, eu deixo e recebo um tanto.
  E passo aos olhos nus ou vestidos de lunetas.
  Passado, presente, participo sendo o mistério do planeta.
  O tríplice mistério do stop, que eu passo por e sendo ele no que fica em cada um.
  No que sigo o meu caminho e no ar que fez e assistiu.
  Abra um parênteses, não esqueça que independente disso eu não passo de um malandro.
  De um moleque do Brasil, que peço e dou esmolas.
  Mas ando e penso sempre com mais de um, por isso ninguém vê minha sacola.
</div>

<div class="example-code">
{% highlight css %}
.flutua {
    /* ... */
    shape-outside: circle(50%, 50%, 50%);
    shape-margin: 15px;
}
{% endhighlight %}
</div>

## Contornando imagens

Uma ótima aplicação das CSS Shapes é contornar imagens. Da mesma maneira que
fizemos há pouco, a diferença é que o elemento em questão é uma imagem – e
imagens são quadradas como qualquer outro elemento.

<div class="img example normal bordered" id="exemplo-imagem">
  <img class="rolling-stones" src="/images/posts/2013-07-03-rolling-stones.png" />
  Childhood living is easy to do<br />
  The things you wanted I bought them for you<br />
  Graceless lady, you know who I am<br />
  You know I can't let you slide through my hands<br />
  Wild horses couldn't drag me away<br />
  Wild, wild horses couldn't drag me away<br />
  I watched you suffer a dull aching pain<br />
  Now you decided to show me the same<br />
  No sweeping exits or offstage lines
</div>

<div class="example-code">
{% highlight css %}
.rolling-stones {
    float: left;
    shape-outside: polygon(0 0, 123px 0, 134px 36px, 155px 56px, 134px 78px, 109px 129px, 62px 164px, 0 164px);
}
{% endhighlight %}
</div>

### Contornando imagens automaticamente

A [especificação](http://www.w3.org/TR/css-shapes/) define também que deve ser
possível realizar o contorno de uma imagem de maneira automática apenas passando
a URL da imagem como valor da propriedade `shape-outside`.

O problema disso é que o navegador vai usar heurísticas e algoritmos para
processamento de imagens que não são perfeitos.
Os resultados podem ser bastante divergentes dependendo da imagem e da sua
qualidade gráfica.
Por isso, foi preciso deixar isso um pouco no controle do desenvolvedor, que pode
utilizar-se da propriedade `shape-image-threshold` para controlar a aplicação da
_shape_.

<p class="obs"><strong>OBS.:</strong> Esta funcionalidade ainda não foi
implementada em nenhum navegador até o momento.</p>

{% highlight css %}
.rolling-stones {
    float: left;
    shape-outside: url('rolling_stones.png');
    shape-image-threshold: 0.3;
}
{% endhighlight %}

## shape-inside

Com `shape-inside` é possível realizar o oposto de `shape-outside`, ou seja, é
possível definir __limites internos__ ao elemento.
Podemos dizer que uma _shape_ definida em `shape-inside` vai _"empacotar"_ o
conteúdo do elemento em si. Dois exemplos:

<div class="img example normal bordered" id="exemplo-shape-inside">
  <div class="inside-circle">
    Childhood living is easy to do. The things you wanted I bought them for you.
    Graceless lady, you know who I am. You know I can't let you slide through my
    hands.
    Wild horses couldn't drag me away. Wild, wild horses couldn't drag me away.
    I watched you suffer a dull aching pain. Now you decided to show me the same.
    No sweeping exits or offstage lines.
  </div>
  <div class="inside-hexagon">
    Childhood living is easy to do. The things you wanted I bought them for you.
    Graceless lady, you know who I am. You know I can't let you slide through my
    hands.
    Wild horses couldn't drag me away. Wild, wild horses couldn't drag me away.
    I watched you suffer a dull aching pain. Now you decided to show me the same.
    No sweeping exits or offstage lines.
  </div>
</div>

<div class="example-code">
{% highlight css %}
.inside-circle {
    shape-inside: circle(50%, 50%, 50%);
}

.inside-hexagon {
    shape-inside: polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%);
}
{% endhighlight %}
</div>

## shape-padding

Simplesmente aplica um _padding_ interior à _shape_. Funcionando no Chrome.

## Lindo, né? Mas...

Apesar de já estar implementada com prefixo no Google Chrome
(`-webkit-shape-inside`), esta propriedade foi removida da
[Especificação _Level 1_](http://www.w3.org/TR/css-shapes/), pois optou-se por
apenas incluí-la em especificações futuras. O mesmo se aplica à propriedade
`shape-padding`.

<blockquote>
  <p>A future level of CSS Shapes will define a shape-inside property, which will define a shape to wrap content within the element.</p>
  <footer> – <abbr title="World Wide Web Consortium">W3C</abbr> Public Working Draft 20 June 2013</footer>
</blockquote>

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
      <td class="property"><code>shape-outside</code></td>
      <td>25 <code class="obs">*1</code><br /><code class="small">-webkit-</code></td>
      <td>--</td>
      <td>--</td>
      <td>--</td>
      <td>--</td>
    </tr>
    <tr>
      <td class="property"><code>shape-margin</code></td>
      <td>--</td>
      <td>--</td>
      <td>--</td>
      <td>--</td>
      <td>--</td>
    </tr>
    <tr>
      <td class="property"><code>shape-image-threshold</code></td>
      <td>--</td>
      <td>--</td>
      <td>--</td>
      <td>--</td>
      <td>--</td>
    </tr>
    <tr>
      <td class="property"><code>shape-inside</code></td>
      <td>25 <code class="obs">*1</code> <code class="obs">*2</code><br /><code class="small">-webkit-</code></td>
      <td>--</td>
      <td>--</td>
      <td>--</td>
      <td>--</td>
    </tr>
    <tr>
      <td class="property"><code>shape-padding</code></td>
      <td>25 <code class="obs">*1</code> <code class="obs">*2</code><br /><code class="small">-webkit-</code></td>
      <td>--</td>
      <td>--</td>
      <td>--</td>
      <td>--</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="6">
        *1 – Features habilitadas através de uma flag<br />
        *2 – Propriedades removidas da spec por hora
      </td>
    </tr>
  </tfoot>
</table>