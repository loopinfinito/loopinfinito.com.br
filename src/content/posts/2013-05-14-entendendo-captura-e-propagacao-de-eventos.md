---
title: Entendendo <span class="light">captura</span> e <span class="light">propagação</span> de eventos
layout: post.html
author: Almir Filho
author_link: http://twitter.com/almirfilho
author_profile: https://plus.google.com/u/0/+AlmirFilho0/posts
author_facebook: https://www.facebook.com/almirflorenciofilho
image: images/posts/2013-05-14-entendendo-a-propagacao-de-eventos-no-dom.jpg
tags: javascript
comments: true
keywords: >
  javascript, evento, event, dom, propagacao, captura, bubbling, capturing, listener,
  manipulador, registrado, addEventListener, stopPropagation, navegador, w3c,
  netscape, ie, ie8, ie9, ancestral, disparar, varredura, clique, click
resumo: >
  Se um elemento e um de seus ancestrais tiverem ambos _listeners_ definidos
  para o __mesmo__ evento, qual deles deverá ser disparado __primeiro__?
  Não surpreendentemente, depende do navegador.
related:
  - title: Event Order
    url: http://www.quirksmode.org/js/events_order.html
    from: quirksmode
  - title: DOM Events
    url: https://developer.mozilla.org/en-US/docs/DOM_Client_Object_Cross-Reference/DOM_Events
    from: MDN
---
<style>
.disk {cursor: pointer;}
.roof {fill: #ddd;}
.wall {fill: #aaa;}
.border {fill: white;}
.label {fill: white; font-size: 13px;}
.disk:hover .roof {fill: #ccc;}
.disk:hover .wall {fill: #999;}
.capture .roof,
.capture:hover .roof {fill: #45B648;}
.capture .wall,
.capture:hover .wall {fill: #0D733A;}
.bubble .roof,
.bubble:hover .roof {fill: #63B1D8;}
.bubble .wall,
.bubble:hover .wall {fill: #0069A0;}
.target .roof,
.target:hover .roof {fill: red;}
.target .wall,
.target:hover .wall {fill: #d80000;}
.name {fill: #666; font-style: italic;}
.arrow {fill: #ddd; opacity: 0.5;}
.arrow.capture {fill: #45B648;}
.arrow.bubble {fill: #63B1D8;}
</style>

Uma pergunta simples: Se um elemento e um de seus ancestrais tiverem ambos
_listeners_ definidos para o __mesmo__ evento, qual deles deverá ser disparado
__primeiro__? Não surpreendentemente, depende do navegador.

{% highlight html %}
<div id="um">
    <div id="dois">
        <div id="tres">Rá!</div>
    </div>
</div>
{% endhighlight %}

No trecho HTML acima temos um elemento `#tres` dentro de um elemento `#dois`,
que por sua vez é filho do elemento `#um`.
Agora definiremos manipuladores para o evento __click__ em dois destes elementos:

{% highlight javascript %}
document.getElementById( 'tres' ).addEventListener( 'click', function( event ){
    console.log( '#tres clicado' )
})

document.getElementById( 'um' ).addEventListener( 'click', function( event ){
    console.log( '#um clicado' )
})

// ou, jQuery like
$('#tres').click( function( event ){
    console.log( '#tres clicado' )
})

$('#um').click( function( event ){
    console.log( '#um clicado' )
})
{% endhighlight %}

Agora, quando clicarmos em `#tres`, o que você acha que irá acontecer?
Dependendo do navegador, a ordem das execuções dos eventos pode ser invertida,
poderemos ter primeiro "#tres clicado" ou "#um clicado".
Vamos entender o porquê desta bagunça.

## Netscape vs. Internet Explorer

Como tudo na vida, há sempre um _background_ histórico.
E no caso de hoje, tudo começou lá na época da
[__guerra dos navegadores__](http://www.youtube.com/watch?v=0nz-lcuv3TM)
(se você ainda não assistiu, por favor assista!), quando os únicos navegadores
do mercado (Netscape e IE) implementavam suas _features_ da maneira que bem
entendiam.

### Não surpreendentemente...

Netscape e Microsoft chegaram a diferentes conclusões sobre como a propagação
de eventos deveria ocorrer.

Na abordagem da Netscape, o _click_ de `#um` teria precedência e seria disparado
primeiro – chamaram isso de fase de captura (ou simplesmente __capturing__).

Já na abordagem da Microsoft, o _click_ de `#tres` teria precendência e seria
disparado primeiro – chamaram isso de fase de <del>borbulhamento</del> _bubbling_
(ou simplesmente __bubbling__), justamente pelo fato de o evento se propagar em
direção a raiz do documento, como se estivesse "subindo a árvore DOM", ou seja,
como se estivesse "borbulhando" para cima.

## Capturing ou bubbling?

As duas abordagens são completamente opostas.
Porém, em ambas é feita uma varredura em todos os elementos ancestrais ao elemento
de onde ocorreu o evento.
A diferença está justamente na ordem de como esta varredura será feita.

### Fase de captura

Na captura, os elementos ancestrais têm precedência na varredura, de modo que a
varredura ocorra sempre partindo do elemento mais básico em direção até o elemento
mais específico (onde ocorreu o evento).
No nosso exemplo, a fase de captura ocorreria nesta ordem:

- Caso o usuário clique em `#tres`: `#um` » `#dois` » `#tres`.
- Caso o usuário clique em `#dois`: `#um` » `#dois`.

### Fase de _bubbling_

No bubbling, os elementos específicos têm precedência na varredura, de modo que a
varredura ocorra sempre partindo do elemento mais específico até o elemento mais
básico (em direção à raiz do documento).
No nosso exemplo, a fase de _bubbling_ ocorreria nesta ordem:

- Caso o usuário clique em `#tres`: `#tres` » `#dois` » `#um`.
- Caso o usuário clique em `#dois`: `#dois` » `#um`.

Lembrando que ainda há outros elementos mais básicos do documento, que também
sofrem as varreduras:

!['Capturing e bubbling'](/images/posts/2013-05-14-capturing_bubbling.jpg)

O exemplo acima ilustra o caso de o usuário clicar em `#tres`.

Abaixo temos um exemplo interativo.
Clique em cada um dos discos e veja uma simulação do que acontece na realidade.
A mudança de cor de cada elemento representa a varredura por eventos no mesmo.

<div class="img example bordered">
	<svg width="600px" height="280px">
		<g id="capturing-tower" class="tower" transform="matrix(1.25 0 0 1.25 -100 0)">
			<g class="disk">
				<path class="roof" d="M262.417,55.09c31.859,22.307,32.029,58.964,0.378,81.712c-31.651,22.746-83.321,23.103-115.179,0.795 c-31.859-22.307-32.028-58.963-0.378-81.71C178.888,33.139,230.56,32.782,262.417,55.09z"/>
				<path class="wall" d="M287.726,95.57c0.068,7.639,0.14,15.278,0.211,22.917 c0.14,15.099-7.858,30.271-24.009,41.878c-32.151,23.108-84.651,23.472-117.016,0.81c-16.114-11.283-24.248-26.18-24.386-41.146 c-0.07-7.64-0.141-15.278-0.212-22.919c0.14,14.967,8.272,29.863,24.385,41.146c32.366,22.662,84.864,22.299,117.019-0.81 C279.868,125.839,287.866,110.667,287.726,95.57z"/>
				<path class="border" d="M263.341,54.424c32.365,22.663,32.538,59.907,0.376,83.022c-32.154,23.108-84.652,23.472-117.019,0.81 c-32.365-22.663-32.537-59.906-0.384-83.015C178.478,32.125,230.976,31.762,263.341,54.424z M147.616,137.597 c31.858,22.308,83.528,21.951,115.179-0.795c31.651-22.748,31.48-59.405-0.378-81.712c-31.857-22.308-83.528-21.951-115.179,0.797 C115.587,78.634,115.756,115.29,147.616,137.597"/>
				<text class="label" transform="matrix(1 0 0 1 189 171)">#um</text>
			</g>
			<g class="disk">
				<path class="roof" d="M247.039,38.144c23.322,16.329,23.454,43.16,0.277,59.817c-23.169,16.65-60.997,16.912-84.32,0.584 c-23.32-16.329-23.445-43.167-0.277-59.818C185.897,22.07,223.719,21.814,247.039,38.144z"/>
				<path class="wall" d="M266.129,90.69l-0.212-22.919c0.001,0.147,0.003,0.292,0.001,0.439 c-0.01,2.031-0.22,4.062-0.63,6.08c-0.458,2.249-1.164,4.477-2.119,6.663c-1.322,3.03-3.124,5.979-5.404,8.787 c-2.568,3.164-5.744,6.149-9.528,8.867c-2.687,1.934-5.568,3.647-8.596,5.146c-3.756,1.86-7.743,3.387-11.875,4.581 c-2.984,0.863-6.044,1.552-9.149,2.068c-2.794,0.462-5.626,0.787-8.472,0.968c-2.79,0.18-5.592,0.224-8.387,0.129 c-2.947-0.096-5.884-0.345-8.787-0.744c-3.388-0.465-6.729-1.136-9.982-2.012c-7.616-2.053-14.755-5.231-20.908-9.54 c-11.867-8.311-17.858-19.276-17.959-30.295l0.212,22.919c0.103,11.018,6.092,21.983,17.958,30.294 c6.153,4.309,13.295,7.487,20.909,9.54c3.254,0.876,6.596,1.547,9.982,2.012c2.903,0.399,5.84,0.648,8.786,0.744 c2.794,0.095,5.599,0.051,8.389-0.129c2.845-0.181,5.676-0.503,8.47-0.969c3.106-0.516,6.166-1.204,9.15-2.067 c4.132-1.194,8.118-2.722,11.874-4.581c3.03-1.499,5.91-3.214,8.598-5.147c3.784-2.718,6.96-5.703,9.529-8.866 c2.28-2.808,4.082-5.757,5.404-8.788c0.955-2.186,1.662-4.413,2.119-6.661c0.411-2.017,0.62-4.05,0.63-6.08 C266.132,90.982,266.131,90.837,266.129,90.69z"/>
				<path class="border" d="M247.964,37.479c23.835,16.69,23.953,44.11,0.273,61.128c-23.68,17.019-62.32,17.286-86.156,0.597 c-23.836-16.69-23.963-44.104-0.283-61.123C185.478,21.063,224.128,20.789,247.964,37.479z M162.996,98.545 c23.323,16.328,61.151,16.066,84.32-0.584c23.177-16.657,23.045-43.488-0.277-59.817c-23.32-16.33-61.142-16.074-84.32,0.583 C139.551,55.377,139.676,82.216,162.996,98.545"/>
				<text class="label" transform="matrix(1 0 0 1 187 127)">#dois</text>
			</g>
			<g class="disk">
				<path class="roof" d="M229.333,24.893c13.496,9.45,13.568,24.978,0.16,34.613c-13.399,9.631-35.286,9.781-48.782,0.333 c-13.496-9.451-13.568-24.977-0.169-34.607C193.951,15.595,215.838,15.443,229.333,24.893z"/>
				<path class="wall" d="M240.802,42.038c0.071,7.641,0.143,15.279,0.212,22.92 c0.061,6.529-3.398,13.09-10.386,18.113c-13.911,9.997-36.626,10.153-50.629,0.349c-6.971-4.88-10.49-11.326-10.548-17.802 L169.237,42.7c0.061,6.476,3.58,12.921,10.551,17.802c14.001,9.804,36.716,9.648,50.627-0.351 C237.404,55.129,240.863,48.568,240.802,42.038z"/>
				<path class="border" d="M230.25,24.235c14.002,9.804,14.085,25.914,0.167,35.916c-13.911,9.999-36.626,10.155-50.627,0.351 c-14.004-9.804-14.078-25.919-0.167-35.917C193.541,14.581,216.247,14.43,230.25,24.235z M180.712,59.838 c13.496,9.449,35.382,9.299,48.782-0.333c13.408-9.635,13.336-25.163-0.16-34.613c-13.496-9.45-35.382-9.298-48.791,0.338 C167.144,34.862,167.216,50.387,180.712,59.838"/>
				<text class="label" transform="matrix(1 0 0 1 189 83)">#tres</text>
			</g>
			<polygon class="arrow capture" transform="matrix(1 0 0 1 15 0)" points="84.931,172 84.931,49.307 93.875,49.307 79.859,25.044 65.846,49.307 74.789,49.307 74.789,172"/>
			<text class="name" transform="matrix(1 0 0 1 175 215)">capturing</text>
		</g>
		<g id="bubbling-tower" class="tower" transform="matrix(1.25 0 0 1.25 185 0)">
			<g class="disk">
				<path class="roof" d="M262.417,55.09c31.859,22.307,32.029,58.964,0.378,81.712c-31.651,22.746-83.321,23.103-115.179,0.795 c-31.859-22.307-32.028-58.963-0.378-81.71C178.888,33.139,230.56,32.782,262.417,55.09z"/>
				<path class="wall" d="M287.726,95.57c0.068,7.639,0.14,15.278,0.211,22.917 c0.14,15.099-7.858,30.271-24.009,41.878c-32.151,23.108-84.651,23.472-117.016,0.81c-16.114-11.283-24.248-26.18-24.386-41.146 c-0.07-7.64-0.141-15.278-0.212-22.919c0.14,14.967,8.272,29.863,24.385,41.146c32.366,22.662,84.864,22.299,117.019-0.81 C279.868,125.839,287.866,110.667,287.726,95.57z"/>
				<path class="border" d="M263.341,54.424c32.365,22.663,32.538,59.907,0.376,83.022c-32.154,23.108-84.652,23.472-117.019,0.81 c-32.365-22.663-32.537-59.906-0.384-83.015C178.478,32.125,230.976,31.762,263.341,54.424z M147.616,137.597 c31.858,22.308,83.528,21.951,115.179-0.795c31.651-22.748,31.48-59.405-0.378-81.712c-31.857-22.308-83.528-21.951-115.179,0.797 C115.587,78.634,115.756,115.29,147.616,137.597"/>
				<text class="label" transform="matrix(1 0 0 1 189 171)">#um</text>
			</g>
			<g class="disk">
				<path class="roof" d="M247.039,38.144c23.322,16.329,23.454,43.16,0.277,59.817c-23.169,16.65-60.997,16.912-84.32,0.584 c-23.32-16.329-23.445-43.167-0.277-59.818C185.897,22.07,223.719,21.814,247.039,38.144z"/>
				<path class="wall" d="M266.129,90.69l-0.212-22.919c0.001,0.147,0.003,0.292,0.001,0.439 c-0.01,2.031-0.22,4.062-0.63,6.08c-0.458,2.249-1.164,4.477-2.119,6.663c-1.322,3.03-3.124,5.979-5.404,8.787 c-2.568,3.164-5.744,6.149-9.528,8.867c-2.687,1.934-5.568,3.647-8.596,5.146c-3.756,1.86-7.743,3.387-11.875,4.581 c-2.984,0.863-6.044,1.552-9.149,2.068c-2.794,0.462-5.626,0.787-8.472,0.968c-2.79,0.18-5.592,0.224-8.387,0.129 c-2.947-0.096-5.884-0.345-8.787-0.744c-3.388-0.465-6.729-1.136-9.982-2.012c-7.616-2.053-14.755-5.231-20.908-9.54 c-11.867-8.311-17.858-19.276-17.959-30.295l0.212,22.919c0.103,11.018,6.092,21.983,17.958,30.294 c6.153,4.309,13.295,7.487,20.909,9.54c3.254,0.876,6.596,1.547,9.982,2.012c2.903,0.399,5.84,0.648,8.786,0.744 c2.794,0.095,5.599,0.051,8.389-0.129c2.845-0.181,5.676-0.503,8.47-0.969c3.106-0.516,6.166-1.204,9.15-2.067 c4.132-1.194,8.118-2.722,11.874-4.581c3.03-1.499,5.91-3.214,8.598-5.147c3.784-2.718,6.96-5.703,9.529-8.866 c2.28-2.808,4.082-5.757,5.404-8.788c0.955-2.186,1.662-4.413,2.119-6.661c0.411-2.017,0.62-4.05,0.63-6.08 C266.132,90.982,266.131,90.837,266.129,90.69z"/>
				<path class="border" d="M247.964,37.479c23.835,16.69,23.953,44.11,0.273,61.128c-23.68,17.019-62.32,17.286-86.156,0.597 c-23.836-16.69-23.963-44.104-0.283-61.123C185.478,21.063,224.128,20.789,247.964,37.479z M162.996,98.545 c23.323,16.328,61.151,16.066,84.32-0.584c23.177-16.657,23.045-43.488-0.277-59.817c-23.32-16.33-61.142-16.074-84.32,0.583 C139.551,55.377,139.676,82.216,162.996,98.545"/>
				<text class="label" transform="matrix(1 0 0 1 187 127)">#dois</text>
			</g>
			<g class="disk">
				<path class="roof" d="M229.333,24.893c13.496,9.45,13.568,24.978,0.16,34.613c-13.399,9.631-35.286,9.781-48.782,0.333 c-13.496-9.451-13.568-24.977-0.169-34.607C193.951,15.595,215.838,15.443,229.333,24.893z"/>
				<path class="wall" d="M240.802,42.038c0.071,7.641,0.143,15.279,0.212,22.92 c0.061,6.529-3.398,13.09-10.386,18.113c-13.911,9.997-36.626,10.153-50.629,0.349c-6.971-4.88-10.49-11.326-10.548-17.802 L169.237,42.7c0.061,6.476,3.58,12.921,10.551,17.802c14.001,9.804,36.716,9.648,50.627-0.351 C237.404,55.129,240.863,48.568,240.802,42.038z"/>
				<path class="border" d="M230.25,24.235c14.002,9.804,14.085,25.914,0.167,35.916c-13.911,9.999-36.626,10.155-50.627,0.351 c-14.004-9.804-14.078-25.919-0.167-35.917C193.541,14.581,216.247,14.43,230.25,24.235z M180.712,59.838 c13.496,9.449,35.382,9.299,48.782-0.333c13.408-9.635,13.336-25.163-0.16-34.613c-13.496-9.45-35.382-9.298-48.791,0.338 C167.144,34.862,167.216,50.387,180.712,59.838"/>
				<text class="label" transform="matrix(1 0 0 1 189 83)">#tres</text>
			</g>
			<polygon class="arrow bubble" transform="matrix(1 0 0 1 235 0)" points="74.79,25.042 74.79,147.736 65.847,147.736 79.862,171.999 93.875,147.736 84.932,147.736 84.932,25.042"/>
			<text class="name" transform="matrix(1 0 0 1 178 215)">bubbling</text>
		</g>
	</svg>
</div>

## A solução W3C: capturing com bubbling

Na hora de padronizar, a W3C optou pela implementação de ambos os modelos.
Então, em um navegador que segue o padrão atual, qualquer evento primeiramente
passa pela fase de captura – até chegar ao elemento onde ocorreu o evento
corrente (*target*) – e então depois pela fase de _bubbling_.

<div class="img example bordered">
	<svg width="600px" height="280px">
		<g id="capturing-bubbling-tower" class="tower" transform="matrix(1.25 0 0 1.25 40 0)">
			<g class="disk">
				<path class="roof" d="M262.417,55.09c31.859,22.307,32.029,58.964,0.378,81.712c-31.651,22.746-83.321,23.103-115.179,0.795 c-31.859-22.307-32.028-58.963-0.378-81.71C178.888,33.139,230.56,32.782,262.417,55.09z"/>
				<path class="wall" d="M287.726,95.57c0.068,7.639,0.14,15.278,0.211,22.917 c0.14,15.099-7.858,30.271-24.009,41.878c-32.151,23.108-84.651,23.472-117.016,0.81c-16.114-11.283-24.248-26.18-24.386-41.146 c-0.07-7.64-0.141-15.278-0.212-22.919c0.14,14.967,8.272,29.863,24.385,41.146c32.366,22.662,84.864,22.299,117.019-0.81 C279.868,125.839,287.866,110.667,287.726,95.57z"/>
				<path class="border" d="M263.341,54.424c32.365,22.663,32.538,59.907,0.376,83.022c-32.154,23.108-84.652,23.472-117.019,0.81 c-32.365-22.663-32.537-59.906-0.384-83.015C178.478,32.125,230.976,31.762,263.341,54.424z M147.616,137.597 c31.858,22.308,83.528,21.951,115.179-0.795c31.651-22.748,31.48-59.405-0.378-81.712c-31.857-22.308-83.528-21.951-115.179,0.797 C115.587,78.634,115.756,115.29,147.616,137.597"/>
				<text class="label" transform="matrix(1 0 0 1 189 171)">#um</text>
			</g>
			<g class="disk">
				<path class="roof" d="M247.039,38.144c23.322,16.329,23.454,43.16,0.277,59.817c-23.169,16.65-60.997,16.912-84.32,0.584 c-23.32-16.329-23.445-43.167-0.277-59.818C185.897,22.07,223.719,21.814,247.039,38.144z"/>
				<path class="wall" d="M266.129,90.69l-0.212-22.919c0.001,0.147,0.003,0.292,0.001,0.439 c-0.01,2.031-0.22,4.062-0.63,6.08c-0.458,2.249-1.164,4.477-2.119,6.663c-1.322,3.03-3.124,5.979-5.404,8.787 c-2.568,3.164-5.744,6.149-9.528,8.867c-2.687,1.934-5.568,3.647-8.596,5.146c-3.756,1.86-7.743,3.387-11.875,4.581 c-2.984,0.863-6.044,1.552-9.149,2.068c-2.794,0.462-5.626,0.787-8.472,0.968c-2.79,0.18-5.592,0.224-8.387,0.129 c-2.947-0.096-5.884-0.345-8.787-0.744c-3.388-0.465-6.729-1.136-9.982-2.012c-7.616-2.053-14.755-5.231-20.908-9.54 c-11.867-8.311-17.858-19.276-17.959-30.295l0.212,22.919c0.103,11.018,6.092,21.983,17.958,30.294 c6.153,4.309,13.295,7.487,20.909,9.54c3.254,0.876,6.596,1.547,9.982,2.012c2.903,0.399,5.84,0.648,8.786,0.744 c2.794,0.095,5.599,0.051,8.389-0.129c2.845-0.181,5.676-0.503,8.47-0.969c3.106-0.516,6.166-1.204,9.15-2.067 c4.132-1.194,8.118-2.722,11.874-4.581c3.03-1.499,5.91-3.214,8.598-5.147c3.784-2.718,6.96-5.703,9.529-8.866 c2.28-2.808,4.082-5.757,5.404-8.788c0.955-2.186,1.662-4.413,2.119-6.661c0.411-2.017,0.62-4.05,0.63-6.08 C266.132,90.982,266.131,90.837,266.129,90.69z"/>
				<path class="border" d="M247.964,37.479c23.835,16.69,23.953,44.11,0.273,61.128c-23.68,17.019-62.32,17.286-86.156,0.597 c-23.836-16.69-23.963-44.104-0.283-61.123C185.478,21.063,224.128,20.789,247.964,37.479z M162.996,98.545 c23.323,16.328,61.151,16.066,84.32-0.584c23.177-16.657,23.045-43.488-0.277-59.817c-23.32-16.33-61.142-16.074-84.32,0.583 C139.551,55.377,139.676,82.216,162.996,98.545"/>
				<text class="label" transform="matrix(1 0 0 1 187 127)">#dois</text>
			</g>
			<g class="disk">
				<path class="roof" d="M229.333,24.893c13.496,9.45,13.568,24.978,0.16,34.613c-13.399,9.631-35.286,9.781-48.782,0.333 c-13.496-9.451-13.568-24.977-0.169-34.607C193.951,15.595,215.838,15.443,229.333,24.893z"/>
				<path class="wall" d="M240.802,42.038c0.071,7.641,0.143,15.279,0.212,22.92 c0.061,6.529-3.398,13.09-10.386,18.113c-13.911,9.997-36.626,10.153-50.629,0.349c-6.971-4.88-10.49-11.326-10.548-17.802 L169.237,42.7c0.061,6.476,3.58,12.921,10.551,17.802c14.001,9.804,36.716,9.648,50.627-0.351 C237.404,55.129,240.863,48.568,240.802,42.038z"/>
				<path class="border" d="M230.25,24.235c14.002,9.804,14.085,25.914,0.167,35.916c-13.911,9.999-36.626,10.155-50.627,0.351 c-14.004-9.804-14.078-25.919-0.167-35.917C193.541,14.581,216.247,14.43,230.25,24.235z M180.712,59.838 c13.496,9.449,35.382,9.299,48.782-0.333c13.408-9.635,13.336-25.163-0.16-34.613c-13.496-9.45-35.382-9.298-48.791,0.338 C167.144,34.862,167.216,50.387,180.712,59.838"/>
				<text class="label" transform="matrix(1 0 0 1 189 83)">#tres</text>
			</g>
			<polygon class="arrow capture" transform="matrix(1 0 0 1 15 0)" points="84.931,172 84.931,49.307 93.875,49.307 79.859,25.044 65.846,49.307 74.789,49.307 74.789,172"/>
			<polygon class="arrow bubble" transform="matrix(1 0 0 1 235 0)" points="74.79,25.042 74.79,147.736 65.847,147.736 79.862,171.999 93.875,147.736 84.932,147.736 84.932,25.042"/>
			<text class="name" transform="matrix(1 0 0 1 135 215)">capturing + bubbling</text>
		</g>
	</svg>
</div>

### A escolha é nossa

Então quer dizer que agora todos os eventos disparam 2 vezes (uma vez na fase
de captura e outra vez na fase de _bubbling_)? __Não.__

Nós, desenvolvedores, podemos escolher se queremos registrar um manipulador de
eventos (*handler*) na fase de captura ou _bubbling_.
Isto é possível com o método para registro de eventos `.addEventListener()` –
que faz parte da
[_DOM Level 2 Event specification_](http://www.w3.org/TR/2000/REC-DOM-Level-2-Events-20001113/)
da W3C. `.addEventListener()` possui 3 parâmetros:

- `type`: tipo de evento
- `handler`: função manipuladora do evento
- `useCapture`: se `true`, registra o manipulador na fase de captura, caso
contrário, registra na fase de _bubbling_. Este parâmetro é opcional e o seu
valor padrão é `false`, ou seja, __registros de eventos são feitos na fase de
_bubbling_ por padrão__.

<blockquote>
	<p>
	If true, <code>useCapture</code> indicates that the user wishes to initiate
	capture. After initiating capture, all events of the specified type will be
	dispatched to the registered <code>EventListener</code> before being
	dispatched to any <code>EventTargets</code> beneath them in the tree. Events
	which are bubbling upward through the tree will not trigger an
	<code>EventListener</code> designated to use capture.
	</p>
	<footer>
		– <abbr title="Document Object Model">DOM</abbr> Level 2 Events Specification.
	</footer>
</blockquote>

### Testando

Abaixo temos exemplos para ambos os tipos de registros:

{% highlight javascript %}
// registrando 'click' do elemento #tres na fase de bubbling (padrão)
document.getElementById( 'tres' ).addEventListener( 'click', function( event ){
    console.log( '#tres clicado' )
})

// registrando 'click' do elemento #dois na fase de capturing
document.getElementById( 'dois' ).addEventListener( 'click', function( event ){
    console.log( '#dois clicado' )
}, true)
{% endhighlight %}

Eis o que acontecerá (na ordem) quando o usuário clicar em `#tres`:

1. Começa a varredura da __fase de captura__ – iniciando pelo elemento mais ancestral;
2. A varredura de captura não encontra nada no elemento `#um` para captura;
3. A varredura de captura encontra registro do evento no elemento `#dois` para
captura e então o dispara (o console imprime "#dois clicado");
4. A varredura de captura chega ao elemento _target_ (`#tres`) – onde ocorreu o
clique – e não encontra nada para captura. Termina a varredura da fase de captura;
5. Começa a varredura da __fase de _bubbling___ – iniciando pelo elemento onde
ocorreu o clique (`#tres`);
6. A varredura de _bubbling_ encontra registro do evento no elemento `#tres` para
_bubbling_ e então o dispara (o console imprime "#tres clicado");
7. A varredura de _bubbling_ não encontra nada no elemento `#dois` para _bubbling_;
8. A varredura de _bubbling_ não encontra nada no elemento `#um` para _bubbling_;
9. A varredura de _bubbling_ prossegue até a raiz do documento e termina.

Abaixo, clique em `#tres` e veja o que acontece visualmente.
Depois que a interação acabar, tente clicar em `#dois`.

<div class="img example bordered">
	<svg width="600px" height="280px">
		<g id="tower-firing" class="tower" transform="matrix(1.25 0 0 1.25 40 0)">
			<g class="disk">
				<path class="roof" d="M262.417,55.09c31.859,22.307,32.029,58.964,0.378,81.712c-31.651,22.746-83.321,23.103-115.179,0.795 c-31.859-22.307-32.028-58.963-0.378-81.71C178.888,33.139,230.56,32.782,262.417,55.09z"/>
				<path class="wall" d="M287.726,95.57c0.068,7.639,0.14,15.278,0.211,22.917 c0.14,15.099-7.858,30.271-24.009,41.878c-32.151,23.108-84.651,23.472-117.016,0.81c-16.114-11.283-24.248-26.18-24.386-41.146 c-0.07-7.64-0.141-15.278-0.212-22.919c0.14,14.967,8.272,29.863,24.385,41.146c32.366,22.662,84.864,22.299,117.019-0.81 C279.868,125.839,287.866,110.667,287.726,95.57z"/>
				<path class="border" d="M263.341,54.424c32.365,22.663,32.538,59.907,0.376,83.022c-32.154,23.108-84.652,23.472-117.019,0.81 c-32.365-22.663-32.537-59.906-0.384-83.015C178.478,32.125,230.976,31.762,263.341,54.424z M147.616,137.597 c31.858,22.308,83.528,21.951,115.179-0.795c31.651-22.748,31.48-59.405-0.378-81.712c-31.857-22.308-83.528-21.951-115.179,0.797 C115.587,78.634,115.756,115.29,147.616,137.597"/>
				<text class="label" transform="matrix(1 0 0 1 189 171)">#um</text>
			</g>
			<g class="disk" data-handler="capture">
				<path class="roof" d="M247.039,38.144c23.322,16.329,23.454,43.16,0.277,59.817c-23.169,16.65-60.997,16.912-84.32,0.584 c-23.32-16.329-23.445-43.167-0.277-59.818C185.897,22.07,223.719,21.814,247.039,38.144z"/>
				<path class="wall" d="M266.129,90.69l-0.212-22.919c0.001,0.147,0.003,0.292,0.001,0.439 c-0.01,2.031-0.22,4.062-0.63,6.08c-0.458,2.249-1.164,4.477-2.119,6.663c-1.322,3.03-3.124,5.979-5.404,8.787 c-2.568,3.164-5.744,6.149-9.528,8.867c-2.687,1.934-5.568,3.647-8.596,5.146c-3.756,1.86-7.743,3.387-11.875,4.581 c-2.984,0.863-6.044,1.552-9.149,2.068c-2.794,0.462-5.626,0.787-8.472,0.968c-2.79,0.18-5.592,0.224-8.387,0.129 c-2.947-0.096-5.884-0.345-8.787-0.744c-3.388-0.465-6.729-1.136-9.982-2.012c-7.616-2.053-14.755-5.231-20.908-9.54 c-11.867-8.311-17.858-19.276-17.959-30.295l0.212,22.919c0.103,11.018,6.092,21.983,17.958,30.294 c6.153,4.309,13.295,7.487,20.909,9.54c3.254,0.876,6.596,1.547,9.982,2.012c2.903,0.399,5.84,0.648,8.786,0.744 c2.794,0.095,5.599,0.051,8.389-0.129c2.845-0.181,5.676-0.503,8.47-0.969c3.106-0.516,6.166-1.204,9.15-2.067 c4.132-1.194,8.118-2.722,11.874-4.581c3.03-1.499,5.91-3.214,8.598-5.147c3.784-2.718,6.96-5.703,9.529-8.866 c2.28-2.808,4.082-5.757,5.404-8.788c0.955-2.186,1.662-4.413,2.119-6.661c0.411-2.017,0.62-4.05,0.63-6.08 C266.132,90.982,266.131,90.837,266.129,90.69z"/>
				<path class="border" d="M247.964,37.479c23.835,16.69,23.953,44.11,0.273,61.128c-23.68,17.019-62.32,17.286-86.156,0.597 c-23.836-16.69-23.963-44.104-0.283-61.123C185.478,21.063,224.128,20.789,247.964,37.479z M162.996,98.545 c23.323,16.328,61.151,16.066,84.32-0.584c23.177-16.657,23.045-43.488-0.277-59.817c-23.32-16.33-61.142-16.074-84.32,0.583 C139.551,55.377,139.676,82.216,162.996,98.545"/>
				<text class="label" transform="matrix(1 0 0 1 187 127)">#dois</text>
			</g>
			<g class="disk" data-handler="bubble">
				<path class="roof" d="M229.333,24.893c13.496,9.45,13.568,24.978,0.16,34.613c-13.399,9.631-35.286,9.781-48.782,0.333 c-13.496-9.451-13.568-24.977-0.169-34.607C193.951,15.595,215.838,15.443,229.333,24.893z"/>
				<path class="wall" d="M240.802,42.038c0.071,7.641,0.143,15.279,0.212,22.92 c0.061,6.529-3.398,13.09-10.386,18.113c-13.911,9.997-36.626,10.153-50.629,0.349c-6.971-4.88-10.49-11.326-10.548-17.802 L169.237,42.7c0.061,6.476,3.58,12.921,10.551,17.802c14.001,9.804,36.716,9.648,50.627-0.351 C237.404,55.129,240.863,48.568,240.802,42.038z"/>
				<path class="border" d="M230.25,24.235c14.002,9.804,14.085,25.914,0.167,35.916c-13.911,9.999-36.626,10.155-50.627,0.351 c-14.004-9.804-14.078-25.919-0.167-35.917C193.541,14.581,216.247,14.43,230.25,24.235z M180.712,59.838 c13.496,9.449,35.382,9.299,48.782-0.333c13.408-9.635,13.336-25.163-0.16-34.613c-13.496-9.45-35.382-9.298-48.791,0.338 C167.144,34.862,167.216,50.387,180.712,59.838"/>
				<text class="label" transform="matrix(1 0 0 1 189 83)">#tres</text>
			</g>
			<polygon class="arrow capture" transform="matrix(1 0 0 1 15 0)" points="84.931,172 84.931,49.307 93.875,49.307 79.859,25.044 65.846,49.307 74.789,49.307 74.789,172"/>
			<polygon class="arrow bubble" transform="matrix(1 0 0 1 235 0)" points="74.79,25.042 74.79,147.736 65.847,147.736 79.862,171.999 93.875,147.736 84.932,147.736 84.932,25.042"/>
			<text class="name" transform="matrix(1 0 0 1 105 215)">capturing + bubbling + target</text>
		</g>
	</svg>
</div>

### E se...

...adicionarmos um manipulador para o evento `click` em cada uma das fases para
o __mesmo__ elemento? O que acontecerá?

{% highlight javascript %}
// registrando 'click' do elemento #tres na fase de bubbling
document.getElementById( 'tres' ).addEventListener( 'click', function( event ){
    console.log( '#tres clicado' )
})

// registrando O MESMO 'click' do MESMO ELEMENTO na fase de capturing
document.getElementById( 'tres' ).addEventListener( 'click', function( event ){
    console.log( '#tres clicado' )
}, true)
{% endhighlight %}

Felizmente, isto não é possível. O que vai acontecer no trecho de código acima
é a sobrescrita do novo registro sobre o último. Então o manipulador registrado
na fase de captura permanecerá, enquanto o outro (*bubbling*) será descartado.

## Cancelando a propagação? Mamata!

Consideremos o seguinte cenário: Digamos que temos os elementos `#um`, `#dois` e
`#tres` – todos com manipuladores para o evento __click__ na fase de _bubbling_.
Agora, digamos que, por alguma razão, quando ocorrer um clique em `#tres`, os
outros cliques em `#dois` e `#tres`&nbsp;__não deverão ser disparados__.

{% highlight javascript %}
document.getElementById( 'tres' ).addEventListener( 'click', function( event ){
    console.log( '#tres clicado' )
})

document.getElementById( 'dois' ).addEventListener( 'click', function( event ){
    console.log( '#dois clicado' )
})

document.getElementById( 'um' ).addEventListener( 'click', function( event ){
    console.log( '#um clicado' )
})
{% endhighlight %}

Pelo código acima, quando o usuário clicar em `#tres`, a saída do console será:

{% highlight text %}
#tres clicado
#dois clicado
#um clicado
{% endhighlight %}

Mas queremos apenas isto:

{% highlight text %}
#tres clicado
{% endhighlight %}

O que queremos na verdade é __impedir que o evento seja propagado__ para o resto
dos elementos. Ou seja, parar com a varredura da fase de _bubbling_ a partir de
um determinado momento. E para isso usaremos o método `.stopPropagation()`, que
pertence ao objeto do próprio evento:

{% highlight javascript %}
document.getElementById( 'tres' ).addEventListener( 'click', function( event ){
    console.log( '#tres clicado' )
    event.stopPropagation()
})
{% endhighlight %}

E voilá! O _bubbling_ parou por aí.

Bem, então voltando a pergunta do início deste _post_:
Se um elemento e um de seus ancestrais tiverem ambos listeners definidos para o
mesmo evento, qual deles deverá ser disparado primeiro?

No IE8 e inferiores, o elemento corrente (onde ocorreu o clique) disparará
primeiro, e depois seus ancestrais.
Já nos navegadores de respeito (IE9 incluso), vai depender de como os manipuladores
foram registrados.

<script>
$(document).ready( function(){

	var time = 500

	function captureBubble(tower_id){
		var disks = $(tower_id).find('.disk')
		disks.each( function(i, e){
			if(i == 0)
				$(disks[i]).attr('class', 'disk capture')

			else {
				setTimeout( function(){
					$(disks[i]).attr('class', 'disk capture').siblings('g').attr('class', 'disk')

					if(i == disks.length-1){
						disks.each( function(j, l){
							setTimeout( function(){
								var c = disks.length-1-j
								$(disks[c]).attr('class', 'disk bubble')

								if(disks.length-1 > c)
									$(disks[c+1]).attr('class', 'disk')

								if(c == 0)
									setTimeout( function(){
										$(disks[c]).attr('class', 'disk')
									}, time)
							}, time*(j+1))
						})
					}
				}, time * i)
			}
		})
	}

	function capture(tower_id, disk, bubbling){
		var disks = $(tower_id).find('.disk')
		var canceled = false
		disks.each( function(i, e){

			if(i == 0)
				visit( disks[i], 'capture' )

			else if(!canceled) {
				setTimeout( function(j){
					visit( disks[i], 'capture' )
				}, time * i)
			}

			if( disks[i] == disk ){
				canceled = true
				setTimeout( function(){
					$(disks[i]).attr('class', 'disk')
					if(bubbling)
						bubble(tower_id, disk)
				}, time * (i+1))
			}
		})
	}

	function bubble(tower_id, disk){
		var disks = $(tower_id).find('.disk')
		var allowed = false
		var s = 0;

		disks.each( function(j, l){
			var c = disks.length-1-j

			if( disks[c] == disk )
				allowed = true

			if(allowed){

				if(c == disks.length-1)
					visit( disks[c], 'bubble' )

				else {
					setTimeout( function(){
						visit( disks[c], 'bubble' )

						if(c == 0)
							setTimeout( function(){
								$(disks[c]).attr('class', 'disk')
							}, time)
					}, time * s)
				}
				s++
			}
		})
	}

	function visit(disk, type){
		var disk = $(disk)
		var handler = disk.attr('data-handler')

		if(type == 'capture' && handler == 'capture')
			type = 'target'
		else if(type == 'bubble' && handler == 'bubble')
			type = 'target'

		disk.attr('class', 'disk ' + type).siblings('g').attr('class', 'disk')
	}

	$('#capturing-tower .disk').click(function(){
		capture('#capturing-tower', this, false)
	})

	$('#bubbling-tower .disk').click(function(){
		bubble('#bubbling-tower', this)
	})

	$('#capturing-bubbling-tower .disk').click(function(){
		capture('#capturing-bubbling-tower', this, true)
	})

	$('#tower-firing .disk').click(function(){
		capture('#tower-firing', this, true)
	})
})
</script>