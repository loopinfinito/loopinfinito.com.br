---
title: Mude tudo com a <span>Fullscreen API</span>
layout: post
author: Almir Filho
author_link: http://twitter.com/almirfilho
author_profile: https://plus.google.com/111718150595519513871/
resumo: lorem
image: images/posts/2012-11-27-fullscreen-api.jpg
tags:
keywords:
comments: true
---
<style>
/* compilado com o less para todos os prefixos */
:-webkit-full-screen #wrapper{position:static;width:auto;margin:0;left:none;}
:-webkit-full-screen #links,:-webkit-full-screen #main,:-webkit-full-screen .post-meta,:-webkit-full-screen #post-number{display:none;}
:-webkit-full-screen #content h1{margin-bottom:60px;}
:-webkit-full-screen #content .post-container{margin-bottom:0 !important;}:-webkit-full-screen #content .post-container article{width:auto;background:none;border:none;padding:70px 100px 0px 100px;}:-webkit-full-screen #content .post-container article section{-webkit-column-count:2;-webkit-column-rule:1px solid #ccc;-webkit-column-gap:100px;-moz-column-count:2;-moz-column-rule:1px solid #ccc;-moz-column-gap:100px;-ms-column-count:2;-ms-column-rule:1px solid #ccc;-ms-column-gap:100px;-o-column-count:2;-o-column-rule:1px solid #ccc;-o-column-gap:100px;column-count:2;column-rule:1px solid #ccc;column-gap:100px;margin-bottom:30px;}:-webkit-full-screen #content .post-container article section img{position:static;width:100%;height:auto;left:auto;border-radius:4px;}
:-webkit-full-screen #content .post-container article table.support{width:auto;left:auto;position:static;}
:-webkit-full-screen #content .post-container aside.fonte{width:auto;position:static;left:auto;margin-bottom:0;padding:30px 0px 0px 0px;background:none;}
:-webkit-full-screen footer#disqus_thread{position:static;left:auto;margin:auto;background:none;padding:50px 0 0 0;width:100%;border-top:1px solid #CCC;}:-webkit-full-screen footer#disqus_thread iframe{width:700px !important;margin:auto;display:block;}
:-moz-full-screen #wrapper{position:static;width:auto;margin:0;left:none;}
:-moz-full-screen #links,:-moz-full-screen #main,:-moz-full-screen .post-meta,:-moz-full-screen #post-number{display:none;}
:-moz-full-screen #content h1{margin-bottom:60px;}
:-moz-full-screen #content .post-container{margin-bottom:0 !important;}:-moz-full-screen #content .post-container article{width:auto;background:none;border:none;padding:70px 100px 0px 100px;}:-moz-full-screen #content .post-container article section{-webkit-column-count:2;-webkit-column-rule:1px solid #ccc;-webkit-column-gap:100px;-moz-column-count:2;-moz-column-rule:1px solid #ccc;-moz-column-gap:100px;-ms-column-count:2;-ms-column-rule:1px solid #ccc;-ms-column-gap:100px;-o-column-count:2;-o-column-rule:1px solid #ccc;-o-column-gap:100px;column-count:2;column-rule:1px solid #ccc;column-gap:100px;margin-bottom:30px;}:-moz-full-screen #content .post-container article section img{position:static;width:100%;height:auto;left:auto;border-radius:4px;}
:-moz-full-screen #content .post-container article table.support{width:auto;left:auto;position:static;}
:-moz-full-screen #content .post-container aside.fonte{width:auto;position:static;left:auto;margin-bottom:0;padding:30px 0px 0px 0px;background:none;}
:-moz-full-screen footer#disqus_thread{position:static;left:auto;margin:auto;background:none;padding:50px 0 0 0;width:100%;border-top:1px solid #CCC;}:-moz-full-screen footer#disqus_thread iframe{width:700px !important;margin:auto;display:block;}
:-ms-full-screen #wrapper{position:static;width:auto;margin:0;left:none;}
:-ms-full-screen #links,:-ms-full-screen #main,:-ms-full-screen .post-meta,:-ms-full-screen #post-number{display:none;}
:-ms-full-screen #content h1{margin-bottom:60px;}
:-ms-full-screen #content .post-container{margin-bottom:0 !important;}:-ms-full-screen #content .post-container article{width:auto;background:none;border:none;padding:70px 100px 0px 100px;}:-ms-full-screen #content .post-container article section{-webkit-column-count:2;-webkit-column-rule:1px solid #ccc;-webkit-column-gap:100px;-moz-column-count:2;-moz-column-rule:1px solid #ccc;-moz-column-gap:100px;-ms-column-count:2;-ms-column-rule:1px solid #ccc;-ms-column-gap:100px;-o-column-count:2;-o-column-rule:1px solid #ccc;-o-column-gap:100px;column-count:2;column-rule:1px solid #ccc;column-gap:100px;margin-bottom:30px;}:-ms-full-screen #content .post-container article section img{position:static;width:100%;height:auto;left:auto;border-radius:4px;}
:-ms-full-screen #content .post-container article table.support{width:auto;left:auto;position:static;}
:-ms-full-screen #content .post-container aside.fonte{width:auto;position:static;left:auto;margin-bottom:0;padding:30px 0px 0px 0px;background:none;}
:-ms-full-screen footer#disqus_thread{position:static;left:auto;margin:auto;background:none;padding:50px 0 0 0;width:100%;border-top:1px solid #CCC;}:-ms-full-screen footer#disqus_thread iframe{width:700px !important;margin:auto;display:block;}
:-o-full-screen #wrapper{position:static;width:auto;margin:0;left:none;}
:-o-full-screen #links,:-o-full-screen #main,:-o-full-screen .post-meta,:-o-full-screen #post-number{display:none;}
:-o-full-screen #content h1{margin-bottom:60px;}
:-o-full-screen #content .post-container{margin-bottom:0 !important;}:-o-full-screen #content .post-container article{width:auto;background:none;border:none;padding:70px 100px 0px 100px;}:-o-full-screen #content .post-container article section{-webkit-column-count:2;-webkit-column-rule:1px solid #ccc;-webkit-column-gap:100px;-moz-column-count:2;-moz-column-rule:1px solid #ccc;-moz-column-gap:100px;-ms-column-count:2;-ms-column-rule:1px solid #ccc;-ms-column-gap:100px;-o-column-count:2;-o-column-rule:1px solid #ccc;-o-column-gap:100px;column-count:2;column-rule:1px solid #ccc;column-gap:100px;margin-bottom:30px;}:-o-full-screen #content .post-container article section img{position:static;width:100%;height:auto;left:auto;border-radius:4px;}
:-o-full-screen #content .post-container article table.support{width:auto;left:auto;position:static;}
:-o-full-screen #content .post-container aside.fonte{width:auto;position:static;left:auto;margin-bottom:0;padding:30px 0px 0px 0px;background:none;}
:-o-full-screen footer#disqus_thread{position:static;left:auto;margin:auto;background:none;padding:50px 0 0 0;width:100%;border-top:1px solid #CCC;}:-o-full-screen footer#disqus_thread iframe{width:700px !important;margin:auto;display:block;}
:full-screen #wrapper{position:static;width:auto;margin:0;left:none;}
:full-screen #links,:full-screen #main,:full-screen .post-meta,:full-screen #post-number{display:none;}
:full-screen #content h1{margin-bottom:60px;}
:full-screen #content .post-container{margin-bottom:0 !important;}:full-screen #content .post-container article{width:auto;background:none;border:none;padding:70px 100px 0px 100px;}:full-screen #content .post-container article section{-webkit-column-count:2;-webkit-column-rule:1px solid #ccc;-webkit-column-gap:100px;-moz-column-count:2;-moz-column-rule:1px solid #ccc;-moz-column-gap:100px;-ms-column-count:2;-ms-column-rule:1px solid #ccc;-ms-column-gap:100px;-o-column-count:2;-o-column-rule:1px solid #ccc;-o-column-gap:100px;column-count:2;column-rule:1px solid #ccc;column-gap:100px;margin-bottom:30px;}:full-screen #content .post-container article section img{position:static;width:100%;height:auto;left:auto;border-radius:4px;}
:full-screen #content .post-container article table.support{width:auto;left:auto;position:static;}
:full-screen #content .post-container aside.fonte{width:auto;position:static;left:auto;margin-bottom:0;padding:30px 0px 0px 0px;background:none;}
:full-screen footer#disqus_thread{position:static;left:auto;margin:auto;background:none;padding:50px 0 0 0;width:100%;border-top:1px solid #CCC;}:full-screen footer#disqus_thread iframe{width:700px !important;margin:auto;display:block;}
</style>

A cada dia que passa mais APIs surgem no HTML5, e estas APIs estão ficando
cada vez mais específicas no contexto do desenvolvimento front-end.
É o caso desta nova API que iremos abordar hoje – a **API Fullscreen** –
que agora nos dá o poder de entrar em modo de tela cheia através de simples
chamadas em JavaScript.

Confesso que quando comecei a pesquisar sobre a Fullscreen API não achei
lá muita graça, talvez por ser uma API que propõe algo muito simples –
como de fato ela é muito simples –, talvez não valesse a pena fazer um
post totalmente dedicado a ela.
Entretanto tive uma idéia de caso de uso para aplicar neste post, o que
tornou as coisas bem mais interessantes.
Bem, chega de papo furado. Espero que gostem.

## Chega de bla bla

A API de Fullscreen nos permite mostrar uma página web (que termozinho mais 1990 hein =P)
em tela cheia de maneira programática simplesmente chamando o método
`requestFullscreen()` e, analogamente, `exitFullscreen()` para sair dela (dããa).

## Entrando em tela cheia

dadasdasdas

## Saindo da tela cheia

exitFullscreen e cancelFullscreen
dadasdasd

## Disparando eventos

### fullscreenchange
dasdasd

### fullscreenerror
dadasdasd

## Propriedades

### fullscreenEnabled
dadasdasd

### fullscreenElement
dasdasdas

### isFullScreen
fora do padrão

## CSS Mêooooo!

### :full-screen
dasdasddasdas

### ::backdrop
dasdasdasda

## iframe
allowfullscreen

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
			<td class="property"><code>requestFullScreen()</code>, <code>cancelFullScreen()</code></td>
			<td>20<br /><code class="small">-webkit</code></td>
			<td>6<br /><code class="small">-webkit</code></td>
			<td>10<br /><code class="small">-moz</code></td>
			<td>--</td>
			<td>--</td>
		</tr>
		<!-- <tr>
			<td class="property"><code>exitFullScreen()</code></td>
			<td>20<br /><code class="small">-webkit</code></td>
			<td>-</td>
			<td>-</td>
			<td>-</td>
			<td>-</td>
		</tr> -->
		<tr>
			<td class="property"><code>fullScreenElement</code></td>
			<td>20 **<br /><code class="small">-webkit</code></td>
			<td>6<br /><code class="small">-webkit</code></td>
			<td>10<br /><code class="small">-moz</code></td>
			<td>--</td>
			<td>--</td>
		</tr>
		<tr>
			<td class="property"><code>fullScreenEnabled</code></td>
			<td>20 **<br /><code class="small">-webkit</code></td>
			<td>6<br /><code class="small">-webkit</code></td>
			<td>10<br /><code class="small">-moz</code></td>
			<td>--</td>
			<td>--</td>
		</tr>
		<tr>
			<td class="property"><code>:full-screen</code></td>
			<td>20<br /><code class="small">-webkit</code></td>
			<td>6<br /><code class="small">-webkit</code></td>
			<td>10<br /><code class="small">-moz</code></td>
			<td>--</td>
			<td>--</td>
		</tr>
	</tbody>
	<tfoot>
		<tr>
			<td colspan="6">* Suporte parcial</td>
		</tr>
	</tfoot>
</table>

nomes diferentes

<aside class="fonte">
    <h3>Referência</h3>
    <ul>
        <li>→<a href="http://davidwalsh.name/fullscreen" alt="Fullscreen API" title="Fullscreen API">Fullscreen API</a> <span class="comment">// The David Walsh Blog</span></li>
        <li>→<a href="https://developer.mozilla.org/en-US/docs/DOM/Using_fullscreen_mode" alt="Using fullscreen mode" title="Using fullscreen mode">Using fullscreen mode</a> <span class="comment">// MDN</span></li>
        <li>→<a href="http://dvcs.w3.org/hg/fullscreen/raw-file/tip/Overview.html" alt="Fullscreen" title="Fullscreen">Fullscreen</a> <span class="comment">// W3C</span></li>
        <li>→<a href="" alt="" title="">ad</a> <span class="comment">// </span></li>
    </ul>
</aside>

<script>
$('h1').click( function( event ){
	event.preventDefault();
	console.log(document.webkitFullscreenElement);
	console.log(document.webkitFullscreenEnabled);
	if( document.documentElement.webkitRequestFullScreen != null){
		document.documentElement.webkitRequestFullScreen();
		document.webkitCancelFullScreen();
	}
	// console.log(document.mozFullScreenElement);
	// console.log(document.mozFullScreenEnabled);
	if( document.documentElement.mozRequestFullScreen != null ){
		document.documentElement.mozRequestFullScreen();
		document.mozCancelFullScreen();
	}
});

document.addEventListener("webkitfullscreenchange", function( event ) {
	console.log(event)
})
// document.addEventListener("mozfullscreenchange", function( event ) {
// 	console.log(event)
// })
</script>