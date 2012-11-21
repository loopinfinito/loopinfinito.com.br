---
title: Fullscreen API
layout: post
author: Almir Filho
author_link: http://twitter.com/almirfilho
author_profile: https://plus.google.com/111718150595519513871/
resumo: lorem
image: images/posts/2012-11-18-fullscreen-api.jpg
tags:
keywords:
comments: true
---
<style>
:-webkit-full-screen {

}
:-webkit-full-screen #wrapper {
	position: static;
	width: auto;
	margin: 0;
	left: none;
}
:-webkit-full-screen #links,
:-webkit-full-screen #main,
:-webkit-full-screen .post-meta,
:-webkit-full-screen #post-number {
	display: none;
}
:-webkit-full-screen .post-container {
	margin-bottom: 0 !important;
}
:-webkit-full-screen #content .post-container article {
	width: auto;
	background: none;
	border: none;
	padding: 70px 100px 0px 100px;
}
:-webkit-full-screen article section {
	-webkit-column-count: 2;
	-webkit-column-rule: 1px solid #ccc;
	-webkit-column-gap: 100px;
	margin-bottom: 30px;
}
:-webkit-full-screen #content h1 {
	margin-bottom: 60px;
}
:-webkit-full-screen #content .post-container article > section img {
	position: static;
	width: 100%;
	height: auto;
	left: auto;
	border-radius: 4px;
}
:-webkit-full-screen #content .post-container aside.fonte {
	width: auto;
	position: static;
	left: auto;
	margin-bottom: 0;
	padding: 30px 0px 0px 0px;
	background: none;
}
:-webkit-full-screen article table.support {
	width: auto;
	left: auto;
	position: static;
}
:-webkit-full-screen footer#disqus_thread {
	position: static;
	left: auto;
	margin: auto;
	background: none;
	padding: 50px 0 0 0;
	width: 100%;
	border-top: 1px solid #CCC;
}
:-webkit-full-screen #dsq-pagination {
	background: none;
}
:-webkit-full-screen #dsq-sort-by {
	display: none;
}
:-webkit-full-screen #dsq-content {
	display: block;
	width: 700px;
	margin: auto;
}
</style>

Confesso que quando comecei a pesquisar sobre a FullScreen API não achei
lá muita graça, talvez por ser uma API que propõe algo muito simples –
como de fato ela é –
A API de FullScreen nos permite mostrar uma página web em tela cheia de
maneira programática simplesmente chamando o método `requestFullScreen()`.

## dasda

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



<aside class="fonte">
    <h3>Referência</h3>
    <ul>
        <li>→<a href="http://davidwalsh.name/fullscreen" alt="Fullscreen API" title="Fullscreen API">Fullscreen API</a> <span class="comment">// The David Walsh Blog</span></li>
        <li>→<a href="https://developer.mozilla.org/en-US/docs/DOM/Using_fullscreen_mode" alt="Using fullscreen mode" title="Using fullscreen mode">Using fullscreen mode</a> <span class="comment">// MDN</span></li>
        <li>→<a href="" alt="" title="">ad</a> <span class="comment">// </span></li>
    </ul>
</aside>

<script>
$('h1').click( function( event ){
	event.preventDefault();
	console.log(document.webkitFullscreenElement);
	console.log(document.webkitFullscreenEnabled);
	document.documentElement.webkitRequestFullScreen();
	document.webkitCancelFullScreen();
	// console.log(document.mozFullScreenElement);
	// console.log(document.mozFullScreenEnabled);
	// document.documentElement.mozRequestFullScreen();
	// document.mozCancelFullScreen();
});

document.addEventListener("webkitfullscreenchange", function( event ) {
	console.log(event)
})
// document.addEventListener("mozfullscreenchange", function( event ) {
// 	console.log(event)
// })
</script>