---
title: Simplificando a vida com <span>LESS</span>
layout: post
author: Almir Filho
author_link: http://twitter.com/almirfilho
author_profile: https://plus.google.com/u/0/+AlmirFilho0/posts
image: images/posts/2012-06-19-vida-boa.jpg
tags: CSS LESS
comments: true
keywords: >
  css, lesscss, less, less css, mixin, import, less portugues, portugues, br,
  pt, less br, less pt
resumo: >
  Finalmente passamos a utilizar LESS aqui no blog, neste post irei falar
  brevemente sobre LESS, expor suas principais vantagens e mostrar como fizemos
  aqui no Loop Infinito.
---

<style>
	.svg-title {
		font-family: Museo, MuseoRegular, Helvetica, Arial, sans-serif;
	}
	g.file:hover path.bg {
		transition: stroke 0.5s ease;
		-o-transition: stroke 0.5s ease;
		-ms-transition: stroke 0.5s ease;
		-moz-transition: stroke 0.5s ease;
		-khtml-transition: stroke 0.5s ease;
		-webkit-transition: stroke 0.5s ease;
	}
	g.file:hover path.bg,
	g.file:hover path.type-bg,
	g.file:hover text.type {
		transition: fill 0.5s ease;
		-o-transition: fill 0.5s ease;
		-ms-transition: fill 0.5s ease;
		-moz-transition: fill 0.5s ease;
		-khtml-transition: fill 0.5s ease;
		-webkit-transition: fill 0.5s ease;
	}
	g.file:hover path.bg {
		fill: white;
		stroke: #ddd;
	}
	g.file:hover path.type-bg {
		fill: #ddd;
	}
	g.file:hover text.type {
		fill: #666;
	}
</style>

Finalmente passamos a utilizar LESS aqui no blog, e neste post irei falar brevemente sobre esta ótima ferramenta, expor suas principais vantagens e mostrar como fizemos aqui no Loop Infinito.

## Pra quem ainda não conhece

LESS é tida como *a linguagem dinâmica de estilos*, e diferente de CSS – que é totalmente estática –, LESS estende vários recursos dinâmicos como **variáveis**, **mixins**, **operações** e **funções**.

### "Mas como isto é possível?"

Simples, há duas maneiras de colocar seu código LESS em produção numa página:

1. **Compilando para CSS**: LESS possui um compilador, com ele é possível gerar arquivos `.css` equivalentes a partir de arquivos `.less` – é implementado em Node.js (também existem compiladores LESS em outras linguagens).
2. **Utilizando o interpretador JS**: Também podemos apenas incluir arquivos `.less` em nossas páginas e utilizar o interpretador JavaScript que realizará uma análise do LESS e modificará os estilos dos elementos da página *on the fly*.

### "OK, mas então terei de aprender uma nova linguagem?"

Calma lá veloz, a sintaxe de LESS é **muito** parecida com CSS.
Na verdade, LESS se trata de um CSS turbinado (odeio esta palavra, mas é o jeito), pois tem tudo que há em CSS e mais um monte de funcionalidades super úteis.
Um exemplo? Quem nunca desejou **variáveis** em CSS?
Imagine poder guardar *aquele valor hexadecimal super chato* `#A9D73C` de uma cor em uma variável `@cor-link` e depois, quando precisar desta cor, apenas referenciar a variável `@cor-link` em qualquer parte do código CSS. Ex.:

{% highlight css %}
#the-beatles { color: @cor-link }
{% endhighlight %}

Pois é, LESS te dá isso e muito mais.

## Hora de fuçar

Não entrarei em detalhes sobre como usar os recursos de LESS neste post, pois para a vossa felicidade, **nós traduzimos a documentação do LESS para português!**
Trata-se de um dos projetos do Loop Infinito – e por falar nisso, vocês já deram uma olhadinha na nossa nova página de [Projetos](/projetos "Projetos Loop Infinito")?
Brevemente teremos mais coisas interessantes por lá ;)

Então pessoal, sem desculpas! Tem tudo lá, e bem explicado. Visitem: [lesscss.com.br](http://lesscss.com.br "Documentação do LESS em Português").

## Menos é mais

- Mais **manutenibilidade**
- Mais **simplicidade**
- Mais **organização**
- Mais **velocidade**
- Mais **beleza**

Aqui no Loop Infinito, como estava tudo escrito em CSS antes, tive que trabalhar todos os estilos novamente,
transformando tudo em LESS.
Mas é um pequeno esforço que vale totalmente a pena.
Eis o *antes e o depois*:

<svg class="img bordered" width="700" height="432">
	<rect x="-0.5" y="-1" fill="#F2F2F2" stroke="#B3B3B3" stroke-miterlimit="10" width="187" height="435"/>
	<g>
		<polygon fill="#B3B3B3" points="580,222.875 591,226.875 580,231.125 	"/>
		<line fill="none" stroke="#B3B3B3" stroke-miterlimit="10" x1="586" y1="226.5" x2="473" y2="226.5"/>
	</g>
	<g>
		<polygon fill="#B3B3B3" points="411.84,203.69 421.793,209.848 410.158,211.767 	"/>
		<line fill="none" stroke="#B3B3B3" stroke-miterlimit="10" x1="416.891" y1="208.871" x2="300.334" y2="185.056"/>
	</g>
	<g>
		<polygon fill="#B3B3B3" points="411.84,250.43 421.793,243.064 410.158,240.768 	"/>
		<line fill="none" stroke="#B3B3B3" stroke-miterlimit="10" x1="416.891" y1="244.232" x2="300.334" y2="272.723"/>
	</g>
	<g>
		<polygon fill="#B3B3B3" points="417.564,184.139 423.163,194.417 412.104,190.324 	"/>
		<line fill="none" stroke="#B3B3B3" stroke-miterlimit="10" x1="419.389" y1="191.141" x2="295.001" y2="82"/>
	</g>
	<g>
		<polygon fill="#B3B3B3" points="418.564,267.68 424.163,257.417 413.104,261.504 	"/>
		<line fill="none" stroke="#B3B3B3" stroke-miterlimit="10" x1="420.389" y1="260.688" x2="296.001" y2="369.667"/>
	</g>
	<text class="svg-title" transform="matrix(1 0 0 1 70 28)" font-size="18">Antes</text>
	<text class="svg-title" transform="matrix(1 0 0 1 410 28)" font-size="18">Depois</text>
	<g class="file less">
		<path class="bg" fill="#E6E6E6" stroke="#0071BC" stroke-miterlimit="10" d="M477.5,251.1c0,4.088-3.312,7.4-7.4,7.4H430.9
			c-4.088,0-7.4-3.312-7.4-7.4v-50.2c0-4.087,3.312-7.4,7.4-7.4H470.1c4.088,0,7.4,3.313,7.4,7.4V251.1z"/>
		<path class="type-bg" fill="#0071BC" d="M477,239v11.85c0,4.086-1.932,8.15-6.018,8.15H430.9c-4.089,0-7.9-4.064-7.9-8.15V239H477z"/>
		<text transform="matrix(1 0 0 1 440.4492 230.8066)" font-size="11">blog</text>
		<text class="type" transform="matrix(1 0 0 1 436.75 253.0068)" fill="#FFFFFF" font-size="11">LESS</text>
	</g>
	<g class="file less">
		<path class="bg" fill="#E6E6E6" stroke="#0071BC" stroke-miterlimit="10" d="M305.5,206.1c0,4.087-3.313,7.4-7.4,7.4h-39.2
			c-4.087,0-7.4-3.312-7.4-7.4v-50.2c0-4.087,3.313-7.4,7.4-7.4h39.2c4.087,0,7.4,3.313,7.4,7.4V206.1z"/>
		<path class="type-bg" fill="#0071BC" d="M305,194v11.849c0,4.087-1.931,8.151-6.018,8.151H258.9c-4.087,0-7.9-4.064-7.9-8.151V194H305z"/>
		<text transform="matrix(1 0 0 1 266.9067 185.8066)" font-size="11">code</text>
		<text class="type" transform="matrix(1 0 0 1 264.7495 208.0068)" fill="#FFFFFF" font-size="11">LESS</text>
	</g>
	<g class="file less">
		<path class="bg" fill="#E6E6E6" stroke="#0071BC" stroke-miterlimit="10" d="M305.5,296.1c0,4.089-3.313,7.4-7.4,7.4h-39.2
			c-4.087,0-7.4-3.312-7.4-7.4V245.9c0-4.088,3.313-7.4,7.4-7.4h39.2c4.087,0,7.4,3.312,7.4,7.4V296.1z"/>
		<path class="type-bg" fill="#0071BC" d="M305,284v11.85c0,4.086-1.931,8.15-6.018,8.15H258.9c-4.087,0-7.9-4.064-7.9-8.15V284H305z"/>
		<text transform="matrix(1 0 0 1 259.1973 275.8066)" font-size="11">projetos</text>
		<text class="type" transform="matrix(1 0 0 1 264.7495 298.0068)" fill="#FFFFFF" font-size="11">LESS</text>
	</g>
	<g class="file less">
		<path class="bg" fill="#E6E6E6" stroke="#0071BC" stroke-miterlimit="10" d="M305.5,386.1c0,4.089-3.313,7.4-7.4,7.4h-39.2
			c-4.087,0-7.4-3.312-7.4-7.4V335.9c0-4.089,3.313-7.4,7.4-7.4h39.2c4.087,0,7.4,3.312,7.4,7.4V386.1z"/>
		<path class="type-bg" fill="#0071BC" d="M305,374v11.849c0,4.087-1.931,8.151-6.018,8.151H258.9c-4.087,0-7.9-4.064-7.9-8.151V374H305z"/>
		<text transform="matrix(1 0 0 1 265.0586 365.8066)" font-size="11">sobre</text>
		<text class="type" transform="matrix(1 0 0 1 264.7495 388.0068)" fill="#FFFFFF" font-size="11">LESS</text>
	</g>
	<g class="file less">
		<path class="bg" fill="#E6E6E6" stroke="#0071BC" stroke-miterlimit="10" d="M305.5,116.1c0,4.087-3.313,7.4-7.4,7.4h-39.2
			c-4.087,0-7.4-3.313-7.4-7.4V65.9c0-4.087,3.313-7.4,7.4-7.4h39.2c4.087,0,7.4,3.313,7.4,7.4V116.1z"/>
		<path class="type-bg" fill="#0071BC" d="M305,104v11.849c0,4.086-1.932,8.151-6.018,8.151H258.9c-4.087,0-7.9-4.065-7.9-8.151V104H305z"/>
		<text transform="matrix(1 0 0 1 263.2104 95.8066)" font-size="11">discus</text>
		<text class="type" transform="matrix(1 0 0 1 264.7495 118.0068)" fill="#FFFFFF" font-size="11">LESS</text>
	</g>
	<g>
		<path class="bg" fill="#0071BC" stroke="#003D6C" stroke-miterlimit="10" d="M626.5,240.396c0,2.267-1.838,4.104-4.105,4.104h-21.788
			c-2.269,0-4.105-1.838-4.105-4.104v-27.792c0-2.267,1.838-4.104,4.105-4.104h21.788c2.269,0,4.105,1.838,4.105,4.104V240.396z"/>
		<path class="type-bg" fill="#003D6C" d="M626,231v9.479c0,2.269-0.639,4.521-2.942,4.521h-22.603c-2.307,0-4.455-2.254-4.455-4.521V231H626z"/>
		<text transform="matrix(1 0 0 1 601.4492 224.8066)" fill="#FFFFFF" font-size="11">blog</text>
		<text class="type" transform="matrix(1 0 0 1 601.6885 242.0068)" fill="#FFFFFF" font-size="9">CSS</text>
	</g>
	<g>
		<path fill="#B3B3B3" d="M389,141c0,3.866-3.134,7-7,7h-36c-3.866,0-7-3.134-7-7l0,0c0-3.866,3.134-7,7-7h36
			C385.866,134,389,137.134,389,141L389,141z"/>
		<text transform="matrix(1 0 0 1 344.1904 144.5)" fill="#4D4D4D" font-size="10">@import</text>
	</g>
	<g>
		<path fill="#B3B3B3" d="M389,197c0,3.866-3.134,7-7,7h-36c-3.866,0-7-3.134-7-7l0,0c0-3.866,3.134-7,7-7h36
			C385.866,190,389,193.134,389,197L389,197z"/>
		<text transform="matrix(1 0 0 1 344.1904 200.5)" fill="#4D4D4D" font-size="10">@import</text>
	</g>
	<g>
		<path fill="#B3B3B3" d="M389,257c0,3.866-3.134,7-7,7h-36c-3.866,0-7-3.134-7-7l0,0c0-3.866,3.134-7,7-7h36
			C385.866,250,389,253.134,389,257L389,257z"/>
		<text transform="matrix(1 0 0 1 344.1904 260.5)" fill="#4D4D4D" font-size="10">@import</text>
	</g>
	<g>
		<path fill="#B3B3B3" d="M389,311c0,3.866-3.134,7-7,7h-36c-3.866,0-7-3.134-7-7l0,0c0-3.866,3.134-7,7-7h36
			C385.866,304,389,307.134,389,311L389,311z"/>
		<text transform="matrix(1 0 0 1 344.1904 314.5)" fill="#4D4D4D" font-size="10">@import</text>
	</g>
	<g>
		<path fill="#B3B3B3" d="M564,226.5c0,7.346-3.134,13.5-7,13.5h-48c-3.866,0-7-6.154-7-13.5l0,0c0-7.346,3.134-13.5,7-13.5h48
			C560.866,213,564,219.154,564,226.5L564,226.5z"/>
		<text transform="matrix(1 0 0 1 507.8682 223.5)" fill="#1A1A1A" font-size="10">compilação</text>
		<text transform="matrix(1 0 0 1 515.9316 235.5)" fill="#1A1A1A" font-size="10">e minify</text>
	</g>
	<g class="file css">
		<path class="bg" fill="#E6E6E6" stroke="#999999" stroke-miterlimit="10" d="M121.5,116.1c0,4.087-3.313,7.4-7.4,7.4H74.9
			c-4.087,0-7.4-3.313-7.4-7.4V65.9c0-4.087,3.313-7.4,7.4-7.4h39.2c4.087,0,7.4,3.313,7.4,7.4V116.1z"/>
		<path class="type-bg" fill="#B3B3B3" d="M121,104v11.849c0,4.086-1.931,8.151-6.018,8.151H74.9c-4.087,0-7.9-4.065-7.9-8.151V104H121z"/>
		<text transform="matrix(1 0 0 1 84.4487 95.8066)" font-size="11">blog</text>
		<text class="type" transform="matrix(1 0 0 1 83.5298 118.0068)" fill="#FFFFFF" font-size="11">CSS</text>
		<text transform="matrix(1 0 0 1 129.5 94.5)"><tspan x="0" y="0" font-size="12">12 </tspan><tspan x="14.855" y="0" fill="#999999" font-size="12">KB</tspan></text>
	</g>
	<g class="file css">
		<path class="bg" fill="#E6E6E6" stroke="#999999" stroke-miterlimit="10" d="M121.5,205.1c0,4.087-3.313,7.4-7.4,7.4H74.9
			c-4.087,0-7.4-3.313-7.4-7.4v-50.2c0-4.087,3.313-7.4,7.4-7.4h39.2c4.087,0,7.4,3.313,7.4,7.4V205.1z"/>
		<path class="type-bg" fill="#B3B3B3" d="M121,193v12.098c0,4.086-1.931,7.902-6.018,7.902H74.9c-4.087,0-7.9-3.816-7.9-7.902V193H121z"/>
		<text transform="matrix(1 0 0 1 82.9067 185.0557)" font-size="11">code</text>
		<text class="type" transform="matrix(1 0 0 1 83.5298 207.2559)" fill="#FFFFFF" font-size="11">CSS</text>
		<text transform="matrix(1 0 0 1 129.5 184.5)"><tspan x="0" y="0" font-size="12">4</tspan><tspan x="6.156" y="0" fill="#828282" font-size="12"> </tspan><tspan x="8.699" y="0" fill="#999999" font-size="12">KB</tspan></text>
	</g>
	<g class="file css">
		<path class="bg" fill="#E6E6E6" stroke="#999999" stroke-miterlimit="10" d="M121.5,294.102c0,4.087-3.313,7.398-7.4,7.398H74.9
			c-4.087,0-7.4-3.312-7.4-7.398V243.9c0-4.088,3.313-7.399,7.4-7.399h39.2c4.087,0,7.4,3.312,7.4,7.399V294.102z"/>
		<path class="type-bg" fill="#B3B3B3" d="M121,282v12.348c0,4.085-1.931,8.652-6.018,8.652H74.9c-4.087,0-7.9-4.567-7.9-8.652V282H121z"/>
		<text transform="matrix(1 0 0 1 75.1973 274.3047)" font-size="11">projetos</text>
		<text class="type" transform="matrix(1 0 0 1 83.5298 296.5039)" fill="#FFFFFF" font-size="11">CSS</text>
		<text transform="matrix(1 0 0 1 129.5 273.5)"><tspan x="0" y="0" font-size="12">1</tspan><tspan x="6.156" y="0" fill="#828282" font-size="12"> </tspan><tspan x="8.699" y="0" fill="#999999" font-size="12">KB</tspan></text>
	</g>
	<g class="file css">
		<path class="bg" fill="#E6E6E6" stroke="#999999" stroke-miterlimit="10" d="M121.5,384.101c0,4.088-3.313,7.399-7.4,7.399H74.9
			c-4.087,0-7.4-3.312-7.4-7.399v-50.2c0-4.087,3.313-7.399,7.4-7.399h39.2c4.087,0,7.4,3.312,7.4,7.399V384.101z"/>
		<path class="type-bg" fill="#B3B3B3" d="M121,371v12.596c0,4.085-1.931,8.404-6.018,8.404H74.9c-4.087,0-7.9-4.319-7.9-8.404V371H121z"/>
		<text transform="matrix(1 0 0 1 81.0586 363.5527)" font-size="11">sobre</text>
		<text class="type" transform="matrix(1 0 0 1 83.5298 385.7529)" fill="#FFFFFF" font-size="11">CSS</text>
		<text transform="matrix(1 0 0 1 129.5 361.5)"><tspan x="0" y="0" font-size="12">2</tspan><tspan x="6.156" y="0" fill="#828282" font-size="12"> </tspan><tspan x="8.699" y="0" fill="#999999" font-size="12">KB</tspan></text>
	</g>
	<text transform="matrix(1 0 0 1 638.5 230.5)"><tspan x="0" y="0" font-size="12">18</tspan><tspan x="12.312" y="0" fill="#828282" font-size="12"> </tspan><tspan x="14.855" y="0" fill="#999999" font-size="12">KB</tspan></text>
</svg>

### Antes

Haviam 4 arquivos CSS: `blog.css` (estilos gerais), `code.css` (highlight de códigos), `projetos.css`
(página [Projetos](/projetos)) e `sobre.css` (página [Sobre](/sobre)).
Isso quer dizer que basicamente qualquer página do blog incluía pelo menos 2 arquivos cada – `blog.css` tem que estar
presente em todas as páginas, já as páginas dos posts incluem `code.css`; Projetos e Sobre incluem `projetos.css` e
`sobre.css` respectivamente.
Ou seja, **2 requisições a mais para cada clique de todo mundo que visita o blog**.

### Depois

Transformamos cada arquivo CSS em LESS e em `blog.less` importamos todos os outros arquivos. Dessa forma, é gerado
apenas um arquivo `blog.css` que contém os estilos de todos os arquivos `.less`. Assim diminuímos o número de
requisições para apenas 1 – já que todas as páginas apenas incluirão `blog.css` agora.
Percebam também que devido ao *minify* depois da compilação, ainda conseguimos economia em bytes – saímos dos 19KB para 18KB –, e ainda que a economia seja mínima, isso serve para provar que só há o que ganhar
usando LESS.

Recentemente comecei um novo projeto e não cometi o erro de postergar o uso do LESS novamente, já comecei utilizando-o
desde o nascimento do projeto, e vou dizer uma coisa: **é muito mais melhor de bão**!

<aside class="fonte">
	<h3>Referência</h3>
	<ul>
		<li><a href="http://lesscss.org" alt="LESS" title="LESS">LESS (documentação original em inglês)</a></li>
		<li><a href="http://lesscss.com.br" alt="LESS em Português" title="LESS em Português">LESS (documentação em português)</a></li>
	</ul>
</aside>
