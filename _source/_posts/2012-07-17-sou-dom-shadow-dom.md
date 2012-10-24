---
title: Sou DOM, <span>Shadow DOM</span>
layout: post
author: Almir Filho
author_link: http://twitter.com/almirfilho
author_profile: https://plus.google.com/111718150595519513871/
resumo: Shadow DOM é uma especificação (ainda em status de rascunho) que faz parte do recente trabalho <strong>Web Components</strong> da W3C. Neste post vamos entender o que é, como funciona e o que muda com esta novidade.
image: images/posts/2012-07-17-shadow-dom.jpg
tags: web-components HTML
keywords: shadow-dom, shadow dom, web-components, web components, html, html5, component, widget, encapsulamento, componente
comments: true
---
<style>
.back {
	transition: fill 0.3s ease;
	-o-transition: fill 0.3s ease;
	-ms-transition: fill 0.3s ease;
	-moz-transition: fill 0.3s ease;
	-khtml-transition: fill 0.3s ease;
	-webkit-transition: fill 0.3s ease;
}
.node:hover .back {
	fill: #ccc;
}
.node:hover rect.back {
	fill: #999;
}
</style>

Shadow DOM é uma especificação (ainda em status de rascunho) que faz parte do recente trabalho **[Web Components](http://www.w3.org/TR/components-intro/)** da W3C, que é composto por mais 3 partes: *templates*, *decorators* e *custom elements* – falaremos mais sobre estes novíssimos recursos futuramente por aqui no Loop Infinito.
Corrijam-me se eu estiver falando besteira, mas acredito que o Web Components será um trabalho estável apenas quem sabe num suposto **HTML6**.

Shadow DOM é simplesmente uma sub-árvore de elementos DOM que pode ser aninhada dentro de outro elemento (host). A diferença é que, quando um elemento qualquer possui uma shadow DOM, seus elementos filhos comuns não são renderizados, em vez disso, o conteúdo da shadow DOM que é renderizado.

Na verdade, a shadow DOM existe desde os primórdios da web, e sempre esteve presente em nossos navegadores para que a componentização viesse a se tornar possível. A novidade aqui é que este recurso agora torna-se acessível a nós, desenvolvedores. Agora vamos entender como funciona.

## Visão estrutural

<svg width="700px" height="432px" class="img">
	<g>
		<line fill="none" stroke="#CCCCCC" stroke-miterlimit="10" x1="169.896" y1="0" x2="169.457" y2="86.315"/>
		<line fill="none" stroke="#CCCCCC" stroke-miterlimit="10" x1="229.795" y1="227.043" x2="230.444" y2="347.14"/>
		<line fill="none" stroke="#CCCCCC" stroke-miterlimit="10" x1="109.999" y1="227.043" x2="149.853" y2="347.14"/>
		<line fill="none" stroke="#CCCCCC" stroke-miterlimit="10" x1="109.999" y1="227.043" x2="70.352" y2="347.14"/>
		<line fill="none" stroke="#CCCCCC" stroke-miterlimit="10" x1="169.897" y1="108.334" x2="231.533" y2="228.431"/>
		<line fill="none" stroke="#CCCCCC" stroke-miterlimit="10" x1="169.897" y1="108.334" x2="108.469" y2="228.431"/>
		<g class="node">
			<circle class="back" fill="#EEEEEE" stroke="#CCCCCC" stroke-miterlimit="10" cx="170.222" cy="102.308" r="31.99"/>
			<text transform="matrix(1 0 0 1 148.6968 101.5366)" enable-background="new">
				<tspan x="0" y="0" font-size="12.3385">shadow</tspan>
				<tspan x="9.939" y="14.806" font-size="12.3385">host</tspan>
			</text>
		</g>
		<g class="node">
			<circle class="back" fill="#EEEEEE" stroke="#CCCCCC" stroke-miterlimit="10" cx="109.541" cy="227.737" r="31.99"/>
			<text transform="matrix(1 0 0 1 96.2451 232.4102)" font-size="12.3385">child</text>
		</g>
		<g class="node">
			<circle class="back" fill="#EEEEEE" stroke="#CCCCCC" stroke-miterlimit="10" cx="230.427" cy="227.737" r="31.99"/>
			<text transform="matrix(1 0 0 1 217.1318 232.4102)" font-size="12.3385">child</text>
		</g>
		<g class="node">
			<circle class="back" fill="#EEEEEE" stroke="#CCCCCC" stroke-miterlimit="10" cx="71.423" cy="346.445" r="25.184"/>
			<text transform="matrix(1 0 0 1 60.9565 350.124)" font-size="9.7132">child</text>
		</g>
		<g class="node">
			<circle class="back" fill="#EEEEEE" stroke="#CCCCCC" stroke-miterlimit="10" cx="147.658" cy="346.445" r="25.184"/>
			<text transform="matrix(1 0 0 1 137.1914 350.124)" font-size="9.7132">child</text>
		</g>
		<g class="node">
			<circle class="back" fill="#EEEEEE" stroke="#CCCCCC" stroke-miterlimit="10" cx="230.427" cy="346.445" r="25.184"/>
			<text transform="matrix(1 0 0 1 219.9609 350.124)" font-size="9.7132">child</text>
		</g>
	</g>
	<g>
		<rect x="386.5" y="64.5" fill="#EEEEEE" stroke="#CCCCCC" stroke-miterlimit="10" width="276" height="349"/>
		<rect x="379.5" y="58.5" fill="#EEEEEE" stroke="#CCCCCC" stroke-miterlimit="10" width="277" height="348"/>
		<rect x="373.5" y="51.5" fill="#EEEEEE" stroke="#CCCCCC" stroke-miterlimit="10" width="276" height="349"/>
		<line fill="none" stroke="#ABACAD" stroke-miterlimit="10" x1="523.845" y1="110.512" x2="585.481" y2="230.608"/>
		<line fill="none" stroke="#ABACAD" stroke-miterlimit="10" x1="523.845" y1="110.512" x2="462.417" y2="230.608"/>
		<line fill="none" stroke="#ABACAD" stroke-miterlimit="10" x1="463.946" y1="229.221" x2="503.801" y2="349.317"/>
		<line fill="none" stroke="#ABACAD" stroke-miterlimit="10" x1="463.946" y1="229.221" x2="424.299" y2="349.317"/>
		<g class="node">
			<rect class="back" x="478.5" y="323.5" fill="#CACBCB" stroke="#9D9D9E" stroke-miterlimit="10" width="49" height="49"/>
			<text transform="matrix(1 0 0 1 493.3174 352.3027)" font-size="9.7132">child</text>
		</g>
		<g class="node">
			<rect class="back" x="400.5" y="323.5" fill="#CACBCB" stroke="#9D9D9E" stroke-miterlimit="10" width="49" height="49"/>
			<text transform="matrix(1 0 0 1 414.9043 352.3027)" font-size="9.7132">child</text>
		</g>
		<g class="node">
			<rect class="back" x="552.5" y="197.5" fill="#CACBCB" stroke="#9D9D9E" stroke-miterlimit="10" width="63" height="61"/>
			<text transform="matrix(1 0 0 1 571.0811 232.4102)" font-size="12.3385">child</text>
		</g>
		<g class="node">
			<rect class="back" x="432.5" y="197.5" fill="#CACBCB" stroke="#9D9D9E" stroke-miterlimit="10" width="62" height="61"/>
			<text transform="matrix(1 0 0 1 450.1943 232.4102)" font-size="12.3385">child</text>
		</g>
		<g class="node">
			<rect class="back" x="493.5" y="73.5" fill="#CACBCB" stroke="#9D9D9E" stroke-miterlimit="10" width="62" height="61"/>
			<text transform="matrix(1 0 0 1 502.6455 101.5366)" enable-background="new">
				<tspan x="0" y="0" font-size="12.3385">shadow</tspan>
				<tspan x="10.969" y="14.806" font-size="12.3385">root</tspan>
			</text>
		</g>
	</g>
	<g>
		<rect x="113.5" y="25.5" fill="#FFFFFF" stroke="#ABACAD" stroke-miterlimit="10" width="112" height="23"/>
		<text transform="matrix(1 0 0 1 120.9229 41.4062)" font-size="16">document tree</text>
	</g>
	<text transform="matrix(1 0 0 1 374.5 43.5625)" font-size="16">Sub-árvores shadow DOM</text>
	<g>
		<line fill="none" stroke="#717375" stroke-miterlimit="10" x1="204.39" y1="102.308" x2="206.89" y2="102.301"/>
		<line fill="none" stroke="#717375" stroke-miterlimit="10" stroke-dasharray="4.9928,4.9928" x1="211.882" y1="102.288" x2="478.998" y2="101.569"/>
		<line fill="none" stroke="#717375" stroke-miterlimit="10" x1="481.495" y1="101.562" x2="483.995" y2="101.556"/>
		<polygon fill="#717375" points="482.549,106.546 491.171,101.537 482.522,96.574"/>
	</g>
</svg>

Como mencionei anteriormente, uma shadow DOM pode ser aninhada a qualquer elemento, chamaremos este elemento de **host**.
E qualquer elemento (host) pode ter várias shadow DOMs (figura acima).
No momento da renderização, o conteúdo dentro de host é substituído pelo conteúdo da shadow DOM (figura abaixo).
Os lugares onde os elementos da sub-árvore shadow são inseridos em host são chamados de *pontos de inserção*.
No exemplo abaixo, temos 2 pontos de inserção (os 2 filhos de shadow host).

<svg width="700px" height="432px" class="img">
	<line fill="none" stroke="#CCCCCC" stroke-miterlimit="10" x1="350.623" y1="0" x2="350.149" y2="93.175"/>
	<line fill="none" stroke="#CCCCCC" stroke-miterlimit="10" x1="350.19" y1="101.077" x2="445.624" y2="225.323"/>
	<line fill="none" stroke="#CCCCCC" stroke-miterlimit="10" x1="350.19" y1="101.077" x2="255.036" y2="225.323"/>
	<g class="node">
		<circle class="back" fill="#EEEEEE" stroke="#CCCCCC" stroke-miterlimit="10" cx="350.629" cy="92.967" r="43.06"/>
		<text transform="matrix(1 0 0 1 321.6553 91.9287)" enable-background="new">
			<tspan x="0" y="0" font-size="16.6081">shadow</tspan>
			<tspan x="13.378" y="19.93" font-size="16.6081">host</tspan>
		</text>
	</g>
	<line fill="none" stroke="#ABACAD" stroke-miterlimit="10" x1="258.371" y1="233.117" x2="324.485" y2="369.832"/>
	<line fill="none" stroke="#ABACAD" stroke-miterlimit="10" x1="258.371" y1="233.117" x2="192.534" y2="369.832"/>
	<g class="node">
		<rect class="back" x="290.5" y="334.5" fill="#CACBCB" stroke="#9D9D9E" stroke-miterlimit="10" width="66" height="66"/>
		<text transform="matrix(1 0 0 1 301.6548 365.8535)" enable-background="new">
			<tspan x="0" y="0" font-size="13.0743">shadow</tspan>
			<tspan x="8.72" y="15.689" font-size="13.0743">child</tspan>
		</text>
	</g>
	<g class="node">
		<rect class="back" x="160.5" y="334.5" fill="#CACBCB" stroke="#9D9D9E" stroke-miterlimit="10" width="66" height="66"/>
		<text transform="matrix(1 0 0 1 171.168 365.8535)" enable-background="new">
			<tspan x="0" y="0" font-size="13.0743">shadow</tspan>
			<tspan x="8.721" y="15.689" font-size="13.0743">child</tspan>
		</text>
	</g>
	<g class="node">
		<rect class="back" x="402.5" y="189.5" fill="#CACBCB" stroke="#9D9D9E" stroke-miterlimit="10" width="85" height="83"/>
		<text transform="matrix(1 0 0 1 416.4385 227.4121)" enable-background="new">
			<tspan x="0" y="0" font-size="16.6081">shadow</tspan>
			<tspan x="11.078" y="19.93" font-size="16.6081">child</tspan>
		</text>
	</g>
	<g class="node">
		<rect class="back" x="216.5" y="189.5" fill="#CACBCB" stroke="#9D9D9E" stroke-miterlimit="10" width="82" height="83"/>
		<text transform="matrix(1 0 0 1 228.7827 227.4121)" enable-background="new">
			<tspan x="0" y="0" font-size="16.6081">shadow</tspan>
			<tspan x="11.078" y="19.93" font-size="16.6081">child</tspan>
		</text>
	</g>
	<g>
		<polyline fill="none" stroke="#CCCCCC" stroke-miterlimit="10" points="523.5,418 523.5,420.5 521,420.5"/>
		<line fill="none" stroke="#CCCCCC" stroke-miterlimit="10" stroke-dasharray="5,5" x1="516" y1="420.5" x2="138" y2="420.5"/>
		<polyline fill="none" stroke="#CCCCCC" stroke-miterlimit="10" points="136,420.5 133.5,420.5 133.5,418"/>
		<line fill="none" stroke="#CCCCCC" stroke-miterlimit="10" stroke-dasharray="5,5" x1="133.5" y1="413" x2="133.5" y2="174"/>
		<polyline fill="none" stroke="#CCCCCC" stroke-miterlimit="10" points="133.5,171 133.5,168.5 136,168.5"/>
		<line fill="none" stroke="#CCCCCC" stroke-miterlimit="10" stroke-dasharray="5,5" x1="141" y1="168.5" x2="518" y2="168.5"/>
		<polyline fill="none" stroke="#CCCCCC" stroke-miterlimit="10" points="521,168.5 523.5,168.5 523.5,171"/>
		<line fill="none" stroke="#CCCCCC" stroke-miterlimit="10" stroke-dasharray="5,5" x1="523.5" y1="176" x2="523.5" y2="415"/>
	</g>
	<text transform="matrix(1 0 0 1 454.957 391.7188)">
		<tspan x="0" y="0" fill="#616162" font-size="12">Sub-árvore</tspan>
		<tspan x="-12.792" y="14.4" fill="#616162" font-size="12">shadow DOM</tspan>
	</text>
</svg>

## Encapsulamento faz todo o sentido

Uma das grandes razões para a implementação da Shadow DOM pelos navegadores é para poder manter seus widgets inalteráveis,
isolando-os de todo tipo de acesso – ou seja, mantendo tudo dentro de uma **caixa preta**.

Sabe esses componentes de interface que usamos em nossas aplicações como `<select>` (*combo box*) e `<input>` dos tipos `text`, `range`, `number`, `color`, `datetime` etc? Pois bem, estes componentes não passam de elementos HTML estilizados com CSS de acordo com o estilo de cada plataforma, acredite. A grande diferença é o **encapsulamento**.

Por exemplo, sabemos que o elemento `<input type="range">` se parece com o seguinte:

<figure class="content">
	<img src="/images/posts/2012-07-17-range.jpg" alt="input range" title="input range" />
</figure>

O input `range` visivelmente é composto basicamente por 2 partes: uma trilha e um botão – o qual é possível deslizar pela trilha.

Sabemos que não temos acesso aos elementos internos do componente/widget, não podemos manipula-los e nem mesmo estiliza-los, justamente porque **não temos acesso** a shadow DOM do elemento. Para ilustrar este exemplo, suponha que tenhamos:

{% highlight html %}
<input type="range" id="slider" />
{% endhighlight %}

Se tentarmos obter o primeiro elemento filho de `#slider` via JavaScript:

{% highlight javascript %}
var slider = document.getElementsById( "slider" )
console.log( slider.firstChild ) // retorna null
{% endhighlight %}

Nada é retornado, mas como isto é possível, então? **Isso é a shadow DOM em ação**.
Apenas  precisamos incluir `<input type="range">` em nosso código e o navegador se vira com o resto, ou seja, com a montagem estrutural e com a renderização do componente por completo.

Este tipo de coisa acontece muito, os componentes são encapsulados em apenas um elemento (definido no código) que age como uma caixa preta, mas o que rola por baixo dos panos é algo bem mais complexo.

<figure class="content right">
	<img src="/images/posts/2012-07-17-video.jpg" alt="Rolling Stones" title="Rolling Stones" />
</figure>

O elemento `<input type="range">` é bem simples em relação a outros, como por exemplo `<audio>` e `<video>`, que possuem controles de play/pause, volume, trilha, rewind, forward, display de tempo, etc. E no caso de `<video>`, ainda há o display de mídia (onde toca o vídeo) e um botão para tela cheia.

## Mais liberdade

Imagine poder ter acesso aos elementos dos componentes e poder modificar as propriedades inerentes a apresentação de qualquer um deles. Isto se torna possível com a abertura da shadow DOM.

Quando o assunto é design de UI, quem nunca desejou poder alterar os estilos dos componentes, de modo que estes apareceriam sempre de forma igual independente de plataforma?
Por exemplo, poder estilizar o player de vídeo mostrado acima com as cores da sua aplicação.

## Tente você

Com o navegador Google Chrome **é possível visualizar** a shadow DOM de vários elementos de formulário pelo *Web Inspector*.
As instruções para tornar isto possível estão [neste post](http://chemicaloliver.net/programming/inspecting-the-shadow-dom-in-google-chrome-inspector/) (em inglês).

Tentei usar a [ShadowRoot API](http://www.w3.org/TR/shadow-dom/#api-shadow-root) para implementar algum exemplo customizado de widget aqui no post, mas infelizmente esta API ainda não está disponível – nem nas versões mais novas do Google Chrome Canary e Webkit.
Então, por enquanto ficaremos só na vontade, e assim que soubermos de algo, prometo fazer um post sobre criação de widgets com a Shadow DOM.

No próximo post falarei sobre estilização de widgets de formulário com CSS através de novos seletores e propriedades que permitem o alcance aos estilos da shadow DOM.

<aside class="fonte">
	<h3>Referência</h3>
	<ul>
		<li>→<a href="http://www.w3.org/TR/components-intro/#shadow-dom-section" alt="Shadow DOM" title="Shadow DOM">Web Components: Shadow DOM Section</a> <span class="comment">//W3C</span></li>
		<li>→<a href="http://www.w3.org/TR/shadow-dom/#api-shadow-root" alt="ShadowRoot API" title="ShadowRoot API">ShadowRoot API</a> <span class="comment">//W3C</span></li>
		<li>→<a href="http://glazkov.com/2011/01/14/what-the-heck-is-shadow-dom/" alt="What the Heck is Shadow DOM?" title="What the Heck is Shadow DOM?">What the Heck is Shadow DOM?</a></li>
		<li>→<a href="http://chemicaloliver.net/programming/inspecting-the-shadow-dom-in-google-chrome-inspector/" alt="Inspecting the Shadow DOM in Google Chrome Inspector" title="Inspecting the Shadow DOM in Google Chrome Inspector">Inspecting the Shadow DOM in Google Chrome Inspector</a></li>
	</ul>
</aside>