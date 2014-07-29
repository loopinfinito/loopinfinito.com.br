---
title: <span>Acelerômetro</span> do Mallandro, <br />Glu glu <span class="light">ié ié</span>!
layout: post
author: Almir Filho
author_link: http://twitter.com/almirfilho
author_profile: https://plus.google.com/u/0/+AlmirFilho0/posts
image: images/posts/2012-10-10-acelerometro-do-mallandro-ie-ie.jpg
has_inner_image: false
tags: javascript experimento
comments: true
keywords: >
  javascript, html5, api, acelerometro, aceleracao, orientacao, jogo, chrome,
  firefox, orientation, acceleration, gravity, gravidade, serginho, mallandro,
  malandro, box2d, webaudio, rotacao
resumo: >
  Hoje vamos entender como funciona a nova **API de Acelerômetro** do HTML5, que
  usei num experimento bem legal chamado
  [**Cilada do Mallandro**](http://almirfilho.github.com/cilada/).
---
<style>
	iframe {
		width: 700px;
		height: 432px;
		border: none;
	}
</style>

Quem nunca brincou daquele joguinho com uma bolinha num labirinto?
O objetivo era basicamente desviar dos buracos e chegar até o final.
Infelizmente eu não consegui descobrir seu nome, mas basicamente você
inclinava o tabuleiro e a bolinha se movia, e era assim que se jogava
o jogo. Simples.

Nos últimos dias eu me envolvi e me diverti bastante com o desenvolvimento
desse mesmo jogo – só que, claro, numa versão *web* que funcionasse diretamente
no navegador.

Hoje vamos entender como funciona a nova **API de Acelerômetro do HTML5**.
Mas antes de começarmos a nerdice, peço que tentem jogar um pouco a
**Cilada do Mallandro**! (tem som)

<iframe src="http://almirfilho.github.com/cilada/" frameborder="0" class="img">frame do jogo</iframe>

### Requisitos para jogar
- O computador deve possuir **hardware de acelerômetro** (qualquer MacBook tem).
- Os únicos navegadores que dão suporte são o *Google Chrome* e *Mozilla Firefox*.

### Observações
- Pode ser melhor jogar diretamente da [página do projeto](http://almirfilho.github.com/cilada/),
pois aqui pelo post pode ficar meio lento (pra você que não tem uma Ferrari como
processador, assim como eu).
- Quem conseguir vencer, ganha um *brinde*.

## Cilada do Mallandro!

Pra quem quiser dar uma olhada no código, o projeto é aberto e está disponível
no [Github](http://github.com/almirfilho/cilada).

Utilizei a *engine* física **[Box2D](http://code.google.com/p/box2dweb/)** (portada para JavaScript)
para tratar as colisões e impactos de maneira eficiente, a **API Canvas** para desenhar a interface
gráfica, **jQuery** (bem, é jQuery), as novíssimas **APIs para Acelerômetro e Web Audio**,
e finalmente escrevi tudo em **[CoffeeScript](http://coffeescript.com.br)**.

Pretendo fazer um outro post detalhado sobre o desenvolvimento do Cilada do Mallandro – sobre
como utilizar a *engine* Box2D, a API Web Audio e tudo mais –, mas por hora, falarei apenas
da **API para Acelerômetro** – que é o foco deste post.

## Uma API muito louca

HTML5 define uma nova API para ter acesso às informações fornecidas por
dispositivos de aceleração e orientação (nos dispositivos que possuem acelerômetro).
Esta API consiste basicamente da implementação de três eventos: `deviceorientation`,
`devicemotion` e `compassneedscalibration`.
Para saber se seu navegador já suporta esses eventos, apenas realize os testes
(também pode ser necessário testar com *vendor prefixes*):

{% highlight javascript %}
if( window.DeviceOrientationEvent != null ){
    // seu navegador suporta DeviceOrientationEvent
}

if( window.DeviceMotionEvent != null ){
    // seu navegador suporta DeviceMotionEvent
}

if( window.CompassNeedsCalibrationEvent != null ){
    // seu navegador suporta CompassNeedsCalibrationEvent
}
{% endhighlight %}

Antes de prosseguirmos com os eventos, algo deve ficar bem claro: os eixos do
sistema de coordenadas usados. Os eventos retornam dados referentes a cada
um dos eixos **X**, **Y** e **Z** abaixo:

<figure>
	<img src="/images/posts/2012-10-10-eixos.png" title="Eixos" alt="Eixos" height="264" />
</figure>

Onde:
- **X** é o eixo que "percorre" a tela do dispositivo de lado a lado (perpendicular a Y e Z).
- **Y** é o eixo que "percorre" a tela do dispositivo de baixo a cima (perpendicular a X e Z).
- **Z** é o eixo que completa o sistema, é representado como estivesse "saindo" da tela (perpendicular a X e Y).

É claro que, estando em um *laptop*, estes eixos serão relativos ao plano no
teclado, e não ao plano da tela.

### O evento deviceorientation

Disparado quando há novos dados disponíveis fornecidos pelo sensor de orientação,
ou seja, quando a orientação atual muda. Para termos acesso a estes dados,
precisamos apenas definir uma função manipuladora para o evento `deviceorientation`:

{% highlight javascript %}
window.addEventListener( 'deviceorientation', function( orientData ){
    // faça algo de legal aqui
})
{% endhighlight %}

Todos os dados disponíveis na ocorrência do evento estarão em `orientData`.
As propriedades contidas em `orientData` são: `target`, `type`, `canBubble`,
`cancelable`, `alpha`, `beta`, `gamma` e `absolute`.

Neste post apenas nos interessam as propriedades `alpha`, `beta` e `gamma`.
Mas para uma descrição detalhada sobre cada uma delas, clique
[aqui](https://developer.mozilla.org/en-US/docs/Mozilla_event_reference/deviceorientation).

`alpha`, `beta` e `gamma` representam a rotação em graus **em torno** de cada um dos eixos
Z, X e Y respectivamente, como ilustrado abaixo:

<figure>
	<img src="/images/posts/2012-10-10-rotacao.png" title="Rotações" alt="Rotações" height="299" />
</figure>

Por exemplo, se deixarmos o *smartphone* do desenho acima em pé, ou seja, com
o eixo Y apontando para cima e o eixo Z apontando para nós, `beta` valerá 90,
pois apenas realizamos uma rotação de **90° em torno do eixo X**. Já se deixarmos
o mesmo *smartphone* de cabeça para baixo, `beta` valerá -90, pois realizamos
a mesma rotação no sentido contrário.

### O evento devicemotion

O evento `devicemotion` é disparado periodicamente e fornece dados sobre movimentos
físicos realizados durante um certo intervalo de tempo (o intervalo entre as
chamadas do próprio evento). Fornece dados sobre taxa de rotação, assim como
a aceleração referente a cada um dos três eixos. Para termos acesso a estes dados,
apenas definimos uma função para manipulação do evento `devicemotion`:

{% highlight javascript %}
window.addEventListener( 'devicemotion', function( eventData ){
    // faça algo de legal aqui
})
{% endhighlight %}

Os dados fornecidos por `eventData` são: `target`, `type`, `canBubble`,
`cancelable`, `acceleration`, `accelerationIncludingGravity`, `interval` e `rotationRate`.
Novamente, apenas irei focar em algumas propriedades, para uma descrição completa
de cada uma, clique [aqui](https://developer.mozilla.org/en-US/docs/Mozilla_event_reference/devicemotion).

- `acceleration` Fornece a aceleração do dispositivo em cada um dos três eixos –
propriedades `x`, `y` e `z` (unidade em m/s²).
- `accelerationIncludingGravity` Igualmente a `acceleration`, fornece a aceleração
do dispositivo em cada um dos três eixos (X, Y e Z). A diferença está no fato de
o *hardware* ter ou não a capacidade de **excluir** o efeito da gravidade. No caso de
o dispositivo estar "deitado" e em repouso, a aceleração no eixo Z sempre terá um
valor aproximado de 9.8 (gravidade terrestre) somado a seu valor.
- `rotationRate` Provê as taxas de rotação referentes a cada eixo, propriedades
`alpha`, `beta` e `gamma` (exatamente os mesmos dados fornecidos pelo evento
`deviceorientation`).

### O evento compassneedscalibration

Como o próprio nome diz,
este evento deverá ser acionado quando o navegador determinar que um acelerômetro
precisa ser calibrado. Isso deve ocorrer apenas se for preciso aumentar a precisão
ou corrigir alguma irregularidade nos dados. Este evento possui uma ação padrão
que fica a cargo de cada navegador. O navegador pode, por exemplo, mostrar detalhes
ao usuário de como realizar a calibração. Também deve ser possível modificar este
comportamento padrão de modo que as aplicações possam apresentar sua própria interface
para esta tarefa. Para mais detalhes clique
[aqui](http://dev.w3.org/geo/api/spec-source-orientation.html#compassneedscalibration).

## Divergências entre navegadores

Como já foi dito, apenas dois navegadores implementam eventos de acelerômetro
atualmente: **Google Chrome** e **Mozilla Firefox**.

Inicialmente eu desenvolvi o **Cilada do Mallandro** testando no Chrome,
e depois quando fui testar no Firefox, algumas coisas não funcionaram.
Vimos que existem dois principais eventos para obtermos dados de orientação,
`deviceorientation` e `devicemotion`, mas cada navegador implementa apenas
um dos dois atualmente.

### No Chrome

Como este é um jogo que necessita de dados sobre orientação, e não sobre
aceleração, comecei o desenvolvimento utilizando o evento `deviceorientation`,
o que ocorreu sem problemas no Google Chrome, pois o mesmo apenas dá suporte
a este evento – e não ao `devicemotion`.

### No Firefox

Já no Firefox, a coisa muda **completamente**. Diferente do Chrome, ele
dá suporte ao evento `devicemotion` e não ao `deviceorientation`.
"OK", pensei eu, "então apenas usarei os dados da propriedade `rotationRate`",
concluí. Mas, cadê o `rotationRate`? `rotationRate` sempre retornava igual a
`null`, então a saída foi usar os únicos dados que o evento `devicemotion`
estava me fornecendo: `accelerationIncludingGravity`, que fornece a aceleração
em cada um dos eixos com as propriedades `x`, `y` e `z`.

Particularmente, acho que o Firefox implementa da maneira incorreta. Pois se
inclinarmos nosso dispositivo, ele informará uma aceleração em cada um dos
eixos de maneira constante, inclusive se mantermos o dispositivo em repouso
com uma certa inclinação. **Então, por que minha aceleração no eixo X continua
constante se meu dispositivo está em repouso?**
Simplesmente não faz sentido. Na minha opinião estes dados deveriam ser convertidos em graus
e disponibilizados através da propriedade `rotationRate` ou no evento
`deviceorientation`.

No final das contas, tive que obter a "aceleração" nos eixos e converter os
valores de modo que se aproximassem dos valores em graus (como se estivesse
obtendo a orientação com `deviceorientation`). Ou seja, **uma bela de uma gâmbi**,
algo parecido com isto:

{% highlight javascript %}
// no Chrome, obtendo a orientação
window.addEventListener( 'devicemotion', function( orientData ){
    // seta o próximo impulso na bola
    ball.impulse.x = orientData.gamma / 2 / scale
    ball.impulse.y = orientData.beta / 2 / scale
})

// no Firefox, obtendo a aceleração
window.addEventListener( 'devicemotion', function( eventData ){
    // seta o próximo impulso na bola
    ball.impulse.x = eventData.accelerationIncludingGravity.x * (-3) / scale
    ball.impulse.y = eventData.accelerationIncludingGravity.y * 3 / scale
})
{% endhighlight %}

A variável `scale` é apenas uma constante do jogo.

## Suporte de hardware

Praticamente todos os dispositivos móveis
(*smartphones* e *tablets*) do mercado hoje em dia veem equipados com estes
dispositivos, e o que não faltam também são aplicativos e jogos que se utilizam
dessas habilidades. Já no *desktop* a coisa muda um pouco, com exceção dos MacBooks,
não conheço outros computadores que possuam *hardware* de acelerômetro, e apesar
de ter ouvido falar que outras fabricantes já estão embutindo acelerômetros em seus
produtos, não posso afirmar tal fato.

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
			<td class="property"><code>DeviceOrientationEvent</code></td>
			<td>7</td>
			<td>--</td>
			<td>--</td>
			<td>--</td>
			<td>--</td>
		</tr>
		<tr>
			<td class="property"><code>DeviceMotionEvent</code></td>
			<td>--</td>
			<td>--</td>
			<td>6</td>
			<td>--</td>
			<td>--</td>
		</tr>
		<tr>
			<td class="property"><code class="smaller">CompassNeedsCalibrationEvent</code></td>
			<td>--</td>
			<td>--</td>
			<td>--</td>
			<td>--</td>
			<td>--</td>
		</tr>
	</tbody>
	<tfoot>
		<tr>
			<td colspan="6">O Firefox já dava suporte parcial ao <code class="small">DeviceMotionEvent</code> com a interface <code class="small">mozOrientation</code> a partir da versão 3.6.</td>
		</tr>
	</tfoot>
</table>

## Suporte Móvel

Onde essas funcionalidades se fazem mais presentes, é justamente nos navegadores
de dispositivos móveis. O [caniuse.com](http://caniuse.com) informa que:

- **Safari iOS**: Desde a versão 4.2
- **Opera Mobile**: Desde a versão 12 (versão atual)
- **Browser (Android)**: Desde a versão 3.0
- **Chrome (Android)**: Desde a versão 18 (versão atual)
- **Firefox (Android)**: Desde a versão 15 (versão atual)

<aside class="fonte">
    <h3>Referência</h3>
    <ul>
        <li><a href="https://developer.mozilla.org/en-US/docs/Detecting_device_orientation" alt="Detecting Device Orientation" title="Detecting Device Orientation">Detecting Device Orientation</a> <span class="comment">// MDN</span></li>
        <li><a href="https://developer.mozilla.org/en-US/docs/DOM/Orientation_and_motion_data_explained" alt="Orientation and Motion Data Explained" title="Orientation and Motion Data Explained">Orientation and Motion Data Explained</a> <span class="comment">// MDN</span></li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Mozilla_event_reference/deviceorientation" alt="DeviceOrientationEvent" title="DeviceOrientationEvent">DeviceOrientationEvent</a> <span class="comment">// MDN</span></li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Mozilla_event_reference/devicemotion" alt="DeviceMotionEvent" title="DeviceMotionEvent">DeviceMotionEvent</a> <span class="comment">// MDN</span></li>
        <li><a href="http://dev.w3.org/geo/api/spec-source-orientation.html" alt="DeviceOrientation Event Specification" title="DeviceOrientation Event Specification">DeviceOrientation Event Specification</a> <span class="comment">// W3C</span></li>
    </ul>
</aside>
