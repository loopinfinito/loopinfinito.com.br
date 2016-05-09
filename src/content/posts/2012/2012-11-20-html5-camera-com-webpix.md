---
title: HTML5 câmera com WebPix
tags: html, javascript, experimento
author: caio
image: images/posts/2012-11-20-webpix.jpg
has_inner_image: false
comments: true
keywords: >
  camera, getusermedia, api, javascript, html5, video, canvas, browser, navegador
excerpt: >
  Hoje vamos falar de coisa boa. Vamos falar de como usar sua câmera apenas com
  HTML5. E para mostrar isso na prática de um jeito menos chato, fizemos um
  pequeno experimento para ensinar melhor como funciona essa nova API de acesso
  à câmera do seu computador através do navegador.
---

<style>
	iframe {
		width: 700px;
		height: 432px;
	}
</style>

<iframe src="http://caiogondim.github.com/webpix" frameborder="0" class="img"> </iframe>

Hoje vamos falar de coisa boa. Vamos falar de <span style="text-decoration: line-through;">TekPix</span> como usar sua câmera apenas com
HTML5. E para mostrar isso na prática de um jeito menos chato, fizemos um
pequeno experimento para ensinar melhor como funciona essa nova API de
acesso à câmera do seu computador através do navegador.

<p class="obs"><strong>OBS.:</strong> O experimento deste post foi
testado na versão <strong>25.0 dev do Chrome para Mac</strong>. No
<strong>Firefox 17.0 para Mac</strong>, mesmo
ele informando que suporta a API <strong>getUserMedia()</strong> com o prefixo
 <strong>moz</strong>, não consegui fazer rodar o experimento e também
não achei nenhum experimento na web que rodasse nele.</p>

## A câmera mais popular da web

Antes de começarmos a falar mais tecnicamente sobre o experimento, vamos
primeiro brincar com ele para então entendermos como foi feito. Esta imagem que
você vê ai em cima é na verdade o próprio experimento. Para começar a brincar
com ele, primeiro libere o acesso à câmera do seu computador. Deve ter aparecido
uma barra embaixo da barra de endereço (caso você esteja no Chrome) perguntando
se você permite ou não o acesso a câmera. Libere o acesso para começar a tirar
algumas fotos de qualidade com esta fantástica câmera.

<figure>
    <img src="/images/posts/2012-11-20-permissao-camera.jpg" width="700" height="200" alt="Palestrantes" title="Palestrantes" />
</figure>

Depois de ter liberado o acesso, você provavelmente deve estar se vendo
na tela de **altíssima** resolução da WebPix. Ótimo. Agora é só fazer um
[duck face](http://www.rubberduckface.com/mona-duck-face-lisa/) e apertar o ícone
da câmera para tirar uma foto.

Com a sua bela imagem no *display* da WebPix, você pode *instagramizar* suas
fotos apertando nos botões de efeito e, quando ficar satisfeito, pode fazer o download
da foto. Ou então descartá-la apertando o botão com ícone de lixeira e tentar novamente.

## Vamos falar de WebPix

Já sabendo como brincar com a WebPix, vamos ver como ela funciona.
A primeira coisa que temos que fazer é pedir ao usuário permissão para usar a câmera.

```javascript

navigator.webkitGetUserMedia( { video: true }, sucessoCallback, falhaCallback )

```

Esta função recebe 3 argumentos:

- **constraints**: um objeto com, no momento, 2
valores de chave possíveis. **video** e **audio**. Informa quais dispositivos
queremos utilizar. Para usar microfone e câmera, basta passar `{ audio: true, video: true }`.
- **callback de sucesso**: função disparada caso o usuário libere o acesso aos dispositivos.
Recebe um objeto do tipo `stream` com o fluxo de dados do microfone e/ou câmera.
- **callback de falha**: função disparada caso o usuário não libere o acesso aos dispositivos.

<p class="obs"><strong>OBS.:</strong> Não esqueçam que, em uma aplicação real, nós
devemos sempre testar se o navegador nos dá suporte a API que queremos usar.
Para não tornar o exemplo mais complexo, não vamos testar o suporte.</p>

Quando o usuário liberar o acesso, a função de callback de sucesso irá disparar.
Com acesso à câmera, agora vamos direcionar o *stream* da câmera para um elemento
`video`.

```javascript

function sucessoCallback( stream ) {
  var video = document.querySelector( 'video' )
  video.src = window.webkitURL.createObjectURL( stream )
  video.play()
}

```

Imaginem que já temos uma *tag*&nbsp;`video` em nosso HTML. No código acima estamos
apenas setando o `src` da *tag*&nbsp;`video` como sendo o *stream* da nossa câmera e
logo depois executamos o método `play` para que ele mostre o que a câmera
está capturando. Acabamos de codificar um espelho. Simples, ok?

## E se você ligar agora...

Fazer uma aplicação "espelho" é bem fácil. Mas como capturar os dados vindos da
câmera e manipular esses dados da forma que quisermos? Para isso vamos usar o
`canvas`.

```javascript

var canvas = document.querySelector( 'canvas' )
canvas.width = video.videoWidth
canvas.height = video.videoHeight
var ctx = canvas.getContext( '2d' )
var ctx.drawImage( video, 0, 0 )

```

No código acima capturamos a referência ao elemento `canvas` definido em nosso HTML,
setamos sua altura e largura com sendo iguais ao do vídeo, setamos o contexto do
`canvas` como 2D (o único contexto até o momento implementado) e desenhamos uma
imagem no canvas, sendo esta imagem um *frame* da *tag*&nbsp;`video`.

Não é possível modificar diretamente o *stream* da câmera, já que não temos acesso
binário a ela.
Mas, a partir do momento que a imagem está no `canvas`, nós temos acesso a nível de pixel.

No momento que o botão **tirar foto** é clicado, nós capturamos um *frame* do
vídeo, jogamos no `canvas` e, depois disso, jogamos o que está no `canvas` para
uma *tag*&nbsp;`img` que estava anteriormente escondida. Então quando você acha que
está vendo o vídeo pausado, aquilo é na verdade uma `img` com o `src` de um
frame da *tag*&nbsp;`video`.

```javascript

var img = document.querySelector( 'img' )
img.src = canvas.toDataURL('image/png')

```

Poderíamos obter o mesmo efeito apenas chamando o método `pause()` da *tag*&nbsp;`video`,
mas já vamos explicar porque precisamos dessa imagem escondida.

Como agora temos o nosso *frame* no `canvas`, podemos manipular a imagem e aplicar
alguns filtros a lá **Instagram**. Como o foco do post é a API de acesso a câmera,
não vou falar a respeito de filtro de imagens com o `canvas`. Mas para quem quiser
se aprofundar no assunto aconselho o
[excelente artigo](http://www.html5rocks.com/en/tutorials/canvas/imagefilters/) do
[Ilmari Heikinnen](https://twitter.com/ilmarihei) no [HTML5 Rocks](http://www.html5rocks.com/en/).

## E não é só isso

Neste experimento também é possível fazer o download da sua foto. Você deve estar
se perguntando: *"E daí?"*. O diferencial aqui é que este download está acontecendo
sem **nenhum back-end**. Ou seja, esta imagem que você esta fazendo download está
sendo gerada e disponibilizada diretamente pelo navegador.

Com o novo atributo `download`, nós informamos ao navegador que não queremos visitar
aquele link, e sim fazer o *download* daquele *link*.

```html

<a download="minha-foto-na-webpix.png" href="#" class="download"> </a>

```

E toda vez que a foto é modificada, nós dinamicamente setamos o `href` da *tag*&nbsp;`a` que
acabamos de ver.

```javascript

var downloadLink = document.querySelector( '.download' )
downloadLink.href = canvas.toDataURL('image/png')

```

O que está acontecendo no trecho acima é que setamos o `href` do *link* como sendo
o que está no `canvas`. Fazemos isso transformando o que está desenhado no `canvas`
para DataURL e setando essa URL como `href` do link.

## Compre agora

Esse foi o WebPix. Um pequeno experimento que fizemos para apresentar a vocês a
API de acesso à câmera. Procurei ser o mais didático possível neste post, mas
se você quiser saber até onde vai a toca do coelho, todo o codigo
está disponível no [GitHub](https://github.com/caiogondim/webpix).

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
            <td class="property"><code>navigator.getUserMedia</code></td>
            <td>22.0</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>12.0</td>
        </tr>
    </tbody>
</table>

O suporte a esta API ainda não está presente em todos os *browsers* e mesmo nos
que já apresentam o objeto `navigator.getUserMedia`, como no Firefox, ela
simplesmente não funciona. Mas com certeza não vai demorar muito para que todos
os navegadores a implemente de forma confiável.

E se tiverem qualquer dúvida ou melhoria a respeito do experimento, vamos bater
um papo aqui nos comentários.

<aside class="fonte">
    <h3>Referência</h3>
    <ul>
        <li><a href="http://www.html5rocks.com/en/tutorials/canvas/imagefilters/" alt="Image Filters" title="Image Filters">Image Filters</a> <span class="comment">// HTML5 Rocks</span></li>
        <li><a href="http://dev.opera.com/articles/view/playing-with-html5-video-and-getusermedia-support/" alt="Playing with HTML5 video &amp; getUserMedia support" title="Playing with HTML5 video &amp; getUserMedia support">Playing with HTML5 video &amp; getUserMedia support</a> <span class="comment">// Dev.Opera</span></li>
    </ul>
</aside>
