---
title: Entendendo <span class="light">captura</span> e <span class="light">propagação</span> de eventos
layout: post
author: Almir Filho
author_link: http://twitter.com/almirfilho
author_profile: https://plus.google.com/111718150595519513871/
image: images/posts/2013-04-23-entendendo-a-propagacao-de-eventos-no-dom.jpg
tags:
comments: false
keywords: >
resumo: >
  Se um elemento e um de seus ancestrais tiverem ambos _listeners_ definidos
  para o __mesmo__ evento, qual deverá ser disparado __primeiro__?
  Não surpreendentemente, depende do navegador.
related:
  - title: Event Order
    url: http://www.quirksmode.org/js/events_order.html
    from: quirksmode
---
<style>
.disk {cursor: pointer;}
.roof {fill: #bbb;}
.wall {fill: #888;}
.border {fill: white;}
.label {fill: white; font-size: 13px;}
.disk:hover .roof {fill: #aaa;}
.disk:hover .wall {fill: #777;}
.capture .roof,
.capture:hover .roof {fill: #45B648;}
.capture .wall,
.capture:hover .wall {fill: #0D733A;}
.bubble .roof,
.bubble:hover .roof {fill: #63B1D8;}
.bubble .wall,
.bubble:hover .wall {fill: #0069A0;}
.name {fill: #666; font-style: italic;}
.arrow {fill: #ddd; opacity: 0.5;}
.arrow.capture {fill: #45B648;}
.arrow.bubble {fill: #63B1D8;}
</style>

Uma pergunta simples: Se um elemento e um de seus ancestrais tiverem ambos
_listeners_ definidos para o __mesmo__ evento, qual deverá ser disparado
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

## Background histórico

Como tudo na vida, há uma razão histórica do porquê das coisas.
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
(ou simplesmente __bubbling__).

## Capturing ou bubbling?

As duas abordagens são completamente opostas.
Porém, em ambas é feita uma varredura em todos os elementos ancestrais ao elemento
de onde ocorreu o evento.
A diferença está justamente na ordem de como esta varredura será feita.

### Fase de captura

Na captura, os elementos ancestrais têm precedência na varredura, de modo que a
varredura ocorra sempre partindo do elemento mais básico até o elemento mais
específico (mais perto de onde ocorreu o evento).
No nosso exemplo, a fase de captura ocorreria nesta ordem:

- Caso o usuário clique em `#tres`: `#um` » `#dois` » `#tres`.
- Caso o usuário clique em `#dois`: `#um` » `#dois`.

### Fase de _bubbling_

No bubbling, os elementos específicos têm precedência na varredura, de modo que a
varredura ocorra sempre partindo do elemento mais específico até o elemento mais
básico (mais perto da raiz do documento).
No nosso exemplo, a fase de _bubbling_ ocorreria nesta ordem:

- Caso o usuário clique em `#tres`: `#tres` » `#dois` » `#um`.
- Caso o usuário clique em `#dois`: `#dois` » `#um`.

Abaixo temos um exemplo interativo.
Clique em cada um dos discos e veja o que acontece.

<svg width="700px" height="280px" class="img">
	<g id="capturing-tower" class="tower" transform="matrix(1.25 0 0 1.25 -55 0)">
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
	<g id="bubbling-tower" class="tower" transform="matrix(1.25 0 0 1.25 245 0)">
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
		<polygon class="arrow bubble" transform="matrix(1 0 0 1 232 0)" points="74.79,25.042 74.79,147.736 65.847,147.736 79.862,171.999 93.875,147.736 84.932,147.736 84.932,25.042"/>
		<text class="name" transform="matrix(1 0 0 1 178 215)">bubbling</text>
	</g>
</svg>

## A solução W3C: capturing com bubbling

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<script>
$(document).ready( function(){

	var time = 700

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
				$(disks[i]).attr('class', 'disk capture').siblings('g').attr('class', 'disk')

			else if(!canceled) {
				setTimeout( function(j){
					$(disks[i]).attr('class', 'disk capture').siblings('g').attr('class', 'disk')
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
					$(disks[c]).attr('class', 'disk bubble').siblings('g').attr('class', 'disk')

				else {
					setTimeout( function(){
						$(disks[c]).attr('class', 'disk bubble').siblings('g').attr('class', 'disk')

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

	$('#capturing-tower .disk').click(function(){
		capture('#capturing-tower', this, false)
	})

	$('#bubbling-tower .disk').click(function(){
		bubble('#bubbling-tower', this)
	})
})
</script>