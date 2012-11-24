---
title: Mude tudo com a <span>Fullscreen API</span>
layout: post
author: Almir Filho
author_link: http://twitter.com/almirfilho
author_profile: https://plus.google.com/111718150595519513871/
resumo: lorem
image: images/posts/2012-11-27-fullscreen-api.jpg
tags: html5 javascript css
keywords: full, screen, fullscreen, html5, html, javascript, api, fullscreen api, tela cheia, tela-cheia, tela, cheia, css, css3
comments: false
---
<style>
/* compilado com o less para todos os prefixos */
:-webkit-full-screen #wrapper{position:static;width:auto;margin:0;left:none;}
:-webkit-full-screen #links,:-webkit-full-screen #main,:-webkit-full-screen .post-meta,:-webkit-full-screen #post-number{display:none;}
:-webkit-full-screen #content h1{margin-bottom:60px;}
:-webkit-full-screen #content .post-container{margin-bottom:0 !important;}:-webkit-full-screen #content .post-container article{width:auto;background:none;border:none;padding:70px 100px 0px 100px;}:-webkit-full-screen #content .post-container article section{-webkit-column-count:2;-webkit-column-rule:1px solid #ccc;-webkit-column-gap:100px;-moz-column-count:2;-moz-column-rule:1px solid #ccc;-moz-column-gap:100px;-ms-column-count:2;-ms-column-rule:1px solid #ccc;-ms-column-gap:100px;-o-column-count:2;-o-column-rule:1px solid #ccc;-o-column-gap:100px;column-count:2;column-rule:1px solid #ccc;column-gap:100px;margin-bottom:30px;}:-webkit-full-screen #content .post-container article section img{position:static;width:100%;height:auto;left:auto;border-radius:4px;}:-webkit-full-screen #content .post-container article section img.post-image{box-shadow:1px 1px 0px white;}
:-webkit-full-screen #content .post-container article code{background-color:white;}
:-webkit-full-screen #content .post-container article pre{width:auto;position:static;left:auto;padding:20px;border-radius:4px;box-shadow:1px 1px 0px white;}:-webkit-full-screen #content .post-container article pre code{background-color:#333;}
:-webkit-full-screen #content .post-container article table.support{width:auto;left:auto;position:static;}
:-webkit-full-screen #content .post-container aside.fonte{width:auto;position:static;left:auto;margin-bottom:0;padding:30px 0px 0px 0px;background:none;}
:-webkit-full-screen footer#disqus_thread{position:static;left:auto;margin:auto;background:none;padding:50px 0 0 0;width:100%;border-top:1px solid #CCC;}:-webkit-full-screen footer#disqus_thread iframe{width:700px !important;margin:auto;display:block;}
:-moz-full-screen #wrapper{position:static;width:auto;margin:0;left:none;}
:-moz-full-screen #links,:-moz-full-screen #main,:-moz-full-screen .post-meta,:-moz-full-screen #post-number{display:none;}
:-moz-full-screen #content h1{margin-bottom:60px;}
:-moz-full-screen #content .post-container{margin-bottom:0 !important;}:-moz-full-screen #content .post-container article{width:auto;background:none;border:none;padding:70px 100px 0px 100px;}:-moz-full-screen #content .post-container article section{-webkit-column-count:2;-webkit-column-rule:1px solid #ccc;-webkit-column-gap:100px;-moz-column-count:2;-moz-column-rule:1px solid #ccc;-moz-column-gap:100px;-ms-column-count:2;-ms-column-rule:1px solid #ccc;-ms-column-gap:100px;-o-column-count:2;-o-column-rule:1px solid #ccc;-o-column-gap:100px;column-count:2;column-rule:1px solid #ccc;column-gap:100px;margin-bottom:30px;}:-moz-full-screen #content .post-container article section img{position:static;width:100%;height:auto;left:auto;border-radius:4px;}:-moz-full-screen #content .post-container article section img.post-image{box-shadow:1px 1px 0px white;}
:-moz-full-screen #content .post-container article code{background-color:white;}
:-moz-full-screen #content .post-container article pre{width:auto;position:static;left:auto;padding:20px;border-radius:4px;box-shadow:1px 1px 0px white;}:-moz-full-screen #content .post-container article pre code{background-color:#333;}
:-moz-full-screen #content .post-container article table.support{width:auto;left:auto;position:static;}
:-moz-full-screen #content .post-container aside.fonte{width:auto;position:static;left:auto;margin-bottom:0;padding:30px 0px 0px 0px;background:none;}
:-moz-full-screen footer#disqus_thread{position:static;left:auto;margin:auto;background:none;padding:50px 0 0 0;width:100%;border-top:1px solid #CCC;}:-moz-full-screen footer#disqus_thread iframe{width:700px !important;margin:auto;display:block;}
:-ms-full-screen #wrapper{position:static;width:auto;margin:0;left:none;}
:-ms-full-screen #links,:-ms-full-screen #main,:-ms-full-screen .post-meta,:-ms-full-screen #post-number{display:none;}
:-ms-full-screen #content h1{margin-bottom:60px;}
:-ms-full-screen #content .post-container{margin-bottom:0 !important;}:-ms-full-screen #content .post-container article{width:auto;background:none;border:none;padding:70px 100px 0px 100px;}:-ms-full-screen #content .post-container article section{-webkit-column-count:2;-webkit-column-rule:1px solid #ccc;-webkit-column-gap:100px;-moz-column-count:2;-moz-column-rule:1px solid #ccc;-moz-column-gap:100px;-ms-column-count:2;-ms-column-rule:1px solid #ccc;-ms-column-gap:100px;-o-column-count:2;-o-column-rule:1px solid #ccc;-o-column-gap:100px;column-count:2;column-rule:1px solid #ccc;column-gap:100px;margin-bottom:30px;}:-ms-full-screen #content .post-container article section img{position:static;width:100%;height:auto;left:auto;border-radius:4px;}:-ms-full-screen #content .post-container article section img.post-image{box-shadow:1px 1px 0px white;}
:-ms-full-screen #content .post-container article code{background-color:white;}
:-ms-full-screen #content .post-container article pre{width:auto;position:static;left:auto;padding:20px;border-radius:4px;box-shadow:1px 1px 0px white;}:-ms-full-screen #content .post-container article pre code{background-color:#333;}
:-ms-full-screen #content .post-container article table.support{width:auto;left:auto;position:static;}
:-ms-full-screen #content .post-container aside.fonte{width:auto;position:static;left:auto;margin-bottom:0;padding:30px 0px 0px 0px;background:none;}
:-ms-full-screen footer#disqus_thread{position:static;left:auto;margin:auto;background:none;padding:50px 0 0 0;width:100%;border-top:1px solid #CCC;}:-ms-full-screen footer#disqus_thread iframe{width:700px !important;margin:auto;display:block;}
:-o-full-screen #wrapper{position:static;width:auto;margin:0;left:none;}
:-o-full-screen #links,:-o-full-screen #main,:-o-full-screen .post-meta,:-o-full-screen #post-number{display:none;}
:-o-full-screen #content h1{margin-bottom:60px;}
:-o-full-screen #content .post-container{margin-bottom:0 !important;}:-o-full-screen #content .post-container article{width:auto;background:none;border:none;padding:70px 100px 0px 100px;}:-o-full-screen #content .post-container article section{-webkit-column-count:2;-webkit-column-rule:1px solid #ccc;-webkit-column-gap:100px;-moz-column-count:2;-moz-column-rule:1px solid #ccc;-moz-column-gap:100px;-ms-column-count:2;-ms-column-rule:1px solid #ccc;-ms-column-gap:100px;-o-column-count:2;-o-column-rule:1px solid #ccc;-o-column-gap:100px;column-count:2;column-rule:1px solid #ccc;column-gap:100px;margin-bottom:30px;}:-o-full-screen #content .post-container article section img{position:static;width:100%;height:auto;left:auto;border-radius:4px;}:-o-full-screen #content .post-container article section img.post-image{box-shadow:1px 1px 0px white;}
:-o-full-screen #content .post-container article code{background-color:white;}
:-o-full-screen #content .post-container article pre{width:auto;position:static;left:auto;padding:20px;border-radius:4px;box-shadow:1px 1px 0px white;}:-o-full-screen #content .post-container article pre code{background-color:#333;}
:-o-full-screen #content .post-container article table.support{width:auto;left:auto;position:static;}
:-o-full-screen #content .post-container aside.fonte{width:auto;position:static;left:auto;margin-bottom:0;padding:30px 0px 0px 0px;background:none;}
:-o-full-screen footer#disqus_thread{position:static;left:auto;margin:auto;background:none;padding:50px 0 0 0;width:100%;border-top:1px solid #CCC;}:-o-full-screen footer#disqus_thread iframe{width:700px !important;margin:auto;display:block;}
:fullscreen #wrapper{position:static;width:auto;margin:0;left:none;}
:fullscreen #links,:fullscreen #main,:fullscreen .post-meta,:fullscreen #post-number{display:none;}
:fullscreen #content h1{margin-bottom:60px;}
:fullscreen #content .post-container{margin-bottom:0 !important;}:fullscreen #content .post-container article{width:auto;background:none;border:none;padding:70px 100px 0px 100px;}:fullscreen #content .post-container article section{-webkit-column-count:2;-webkit-column-rule:1px solid #ccc;-webkit-column-gap:100px;-moz-column-count:2;-moz-column-rule:1px solid #ccc;-moz-column-gap:100px;-ms-column-count:2;-ms-column-rule:1px solid #ccc;-ms-column-gap:100px;-o-column-count:2;-o-column-rule:1px solid #ccc;-o-column-gap:100px;column-count:2;column-rule:1px solid #ccc;column-gap:100px;margin-bottom:30px;}:fullscreen #content .post-container article section img{position:static;width:100%;height:auto;left:auto;border-radius:4px;}:fullscreen #content .post-container article section img.post-image{box-shadow:1px 1px 0px white;}
:fullscreen #content .post-container article code{background-color:white;}
:fullscreen #content .post-container article pre{width:auto;position:static;left:auto;padding:20px;border-radius:4px;box-shadow:1px 1px 0px white;}:fullscreen #content .post-container article pre code{background-color:#333;}
:fullscreen #content .post-container article table.support{width:auto;left:auto;position:static;}
:fullscreen #content .post-container aside.fonte{width:auto;position:static;left:auto;margin-bottom:0;padding:30px 0px 0px 0px;background:none;}
:fullscreen footer#disqus_thread{position:static;left:auto;margin:auto;background:none;padding:50px 0 0 0;width:100%;border-top:1px solid #CCC;}:fullscreen footer#disqus_thread iframe{width:700px !important;margin:auto;display:block;}
</style>

A cada dia que passa mais APIs surgem no HTML5, e estas APIs estão ficando
cada vez mais específicas no contexto do desenvolvimento front-end.
É o caso desta nova API que iremos abordar hoje – a **API Fullscreen** –
que nos dá o poder de entrar em modo de tela cheia através de simples
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

Se você estiver usando o Chrome

## Entrando em tela cheia

Antes de mais nada, `requestFullscreen()` é um método do objeto DOM `element`.
Ou seja, nós podemos sim, entrar em *fullscreen* com **qualquer elemento**.

Então, sabendo disso, se quisermos entrar em tela cheia com a página inteira:

{% highlight javascript %}
document.documentElement.requestFullscreen()
{% endhighlight %}

Onde `document.documentElement` é o elemento `<html>` da página.
Agora se quisermos, por exemplo, entrar no modo tela cheia com um elemento
`<video>`:

{% highlight javascript %}
document.getElementByTagName('video')[0].requestFullscreen()

// ou, de uma maneira mais popular (com jQuery)
$('video').get(0).requestFullscreen()
{% endhighlight %}

Quando entramos em tela cheia com apenas um elemento, o comportamento padrão
do navegador (até onde testei com o Chrome e o Firefox) é isolar o elemento
em questão, mostrando um fundo preto com elemento centralizado na página
(e seu tamanho original mantido).
Veremos mais adiante como fazer para modificar o tamanho e outras propriedades
de elementos em tela cheia.

## Saindo da tela cheia

Como mensionado, para sair do modo de tela cheia – uma vez estando nele –, basta
chamarmos o método `exitFullscreen()` – que pertence apenas a `document`.

{% highlight javascript %}
document.exitFullscreen()
{% endhighlight %}

Não importa se estamos em tela cheia com a página inteira ou com apenas um
elemento específico, o navegador deve identificar o estado e o elemento
com *fullscreen* ativado e voltar ao estado normal – saindo da tela cheia.

-cancelFullscreen

## Propriedades

Você deve estar pensando, "Beleza, mas quando eu saberei qual método chamar
de acordo com meu estado?", ou "Como saberei programaticamente se estou
ou não em modo de tela cheia?". É pra justamente pra isso que temos a
propriedade `fullscreenElement`.

### fullscreenElement

Esta propriadade percente a `document` e serve para guardar a referência
do atual elemento que está em tela cheia. Se não houver nenhuma elemento
em tela cheia (estado normal), então o valor de `fullscreenElement` será
igual a `null` (seu valor padrão).

### fullscreenEnabled

Também pertencente a `document`, de acordo com a
[especificação W3C](http://dvcs.w3.org/hg/fullscreen/raw-file/tip/Overview.html):
`fullscreenEnabled` será `true` se o documento **possuir a habilidade** de mostrar
elementos em tela cheia e `false` caso contrário.

Acho que esta pode ser uma informação importante considerando-se os vários
navegadores e plataformas em que a função de tela cheia pode ou não ser
realizada. Seria o caso de aplicações *mobile*? Sinceramente, não sei.

## Disparando eventos

Também é possível saber **quando** a função de tela cheia está sendo chamada
graças ao novo evento `fullscreenchange`.
Já o evento `fullscreenerror` será disparado quando ocorrer algum erro
associado a tela cheia (dããa \[2\]).

### fullscreenchange

Este evento é disparado toda vez que há uma mudança em relação ao estado de
tela cheia, ou seja, ele também será disparado quando o usuário **sair**
de tela cheia.

{% highlight javascript %}
document.addEventListener( 'fullscreenchange', function( event ){

    if( document.fullscreenElement != null )
        console.log( 'Entramos em tela cheia' )
    else
        console.log( 'Saimos de tela cheia' )
})
{% endhighlight %}

O curioso é que o objeto `Event` retornado não carrega
nenhuma informação sobre o usuário estar ou não entrando em tela cheia –
acredito que pelo fato dessa informação já existir em
[`document.fullscreenElement`](#fullscreenelement).

Com o trecho de código acima é possível identificar quando o usuário
**entra ou sai** de tela cheia.

### fullscreenerror

O evento `fullscreenerror` é disparado quando o navegador (por alguma
razão) não consegue ou não pode entrar/sair de tela cheia.

{% highlight javascript %}
document.addEventListener( 'fullscreenerror', function( event ){
    // ops, ocorreu algum erro
    console.log( 'Talvez não seja possível entrar em tela cheia.' )
})
{% endhighlight %}

## CSS! \o/

Olha só que legal, existe uma nova pseudo-classe (`:full-screen`) e um
novo pseudo-elemento (`::backdrop`) em CSS para quando estivermos em tela cheia.

### Pseudo-classe :full-screen

Ao entrar em tela cheia com qualquer elemento, a pseudo-classe ':full-screen'
é aplicada ao elemento em questão, e com isso podemos definir um estilo
diferenciado para qualquer parte da nossa página (ou até mesmo para ela
inteira) quando estivermos visualizando-a em tela cheia.

### Pseudo-elemento ::backdrop

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
document.documentElement.requestFullscreen = (function(){
	return document.documentElement.requestFullscreen || document.documentElement.webkitRequestFullscreen ||
	       document.documentElement.mozRequestFullscreen || document.documentElement.mozRequestFullScreen ||
	       document.documentElement.msRequestFullscreen || document.documentElement.oRequestFullscreen;
})()

document.exitFullscreen = (function(){
	return document.exitFullscreen || document.webkitExitFullscreen || document.mozExitFullscreen ||
	       document.msExitFullscreen || document.oExitFullscreen || document.cancelFullScreen ||
	       document.webkitCancelFullScreen || document.mozCancelFullScreen || document.msCancelFullScreen ||
	       document.oCancelFullScreen;
})()

var getFullscreenElement = function(){
	return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullscreenElement ||
	       document.mozFullScreenElement || document.msFullscreenElement || document.oFullscreenElement;
}

$('h1').click( function( event ){
	event.preventDefault();

	if( document.documentElement.requestFullscreen != null ){

		if( getFullscreenElement() == null )
			document.documentElement.requestFullscreen();
		else
			document.exitFullscreen();

	} else
		alert( 'Seu navegador ainda não suporta Fullscreen =(' )
});

if( document.documentElement.webkitRequestFullscreen != null ){
	document.addEventListener("webkitfullscreenchange", function( event ){
		console.log(event)
		console.log(document.webkitFullscreenElement);
		console.log(document.webkitFullscreenEnabled);
	})
}

if( document.documentElement.mozRequestFullScreen != null ){
	document.addEventListener("mozfullscreenchange", function( event ){
		console.log(event)
		console.log(document.mozFullScreenElement);
		console.log(document.mozFullScreenEnabled);
	})
}
</script>