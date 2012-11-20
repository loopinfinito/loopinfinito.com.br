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
comments: false
---
<style>
:-webkit-full-screen {
	background: -webkit-linear-gradient(#333, #555) no-repeat #555;
	height: 100%;
}

:-webkit-full-screen article {
	background: black !important;
	border-color: #666 !important;
}

:-webkit-full-screen article aside {
	background: #444 !important;
	border-color: #666 !important;
}

:-webkit-full-screen aside.post-meta {
	text-shadow: 0px 2px 0px #222;
}

:-webkit-full-screen header#main nav ul li a {
	text-shadow: 0px 2px 0px #222;
}
</style>

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