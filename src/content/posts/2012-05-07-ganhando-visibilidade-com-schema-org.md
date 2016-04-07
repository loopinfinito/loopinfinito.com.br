---
title: Ganhando visibilidade com <span>schema.org</span>
author: Almir Filho
author_link: http://twitter.com/almirfilho
author_profile: https://plus.google.com/u/0/+AlmirFilho0/posts
author_facebook: https://www.facebook.com/almirflorenciofilho
image: images/posts/2012-05-07-ganhando-visibilidade-com-schema-org.jpg
tags: SEO microdata schema.org HTML5 web-semantica
comments: true
keywords: >
  SEO, microdata, schema.org, HTML5, marcacao semantica, web semantica,
  desenvolvimento web, crawler, visibilidade
resumo: >
  Ontem finalmente saímos da teoria e realizamos a marcação semântica do nosso
  blog usando **microdata** e os vocabulários **schema.org**.
  Hoje explicarei passo a passo como fiz isto aqui no Loop Infinito.
related:
  - title: Marcação Semântica
    url: http://loopinfinito.com.br/2012/04/26/marcacao-semantica/
    from: Loop Infinito
  - title: Microdata
    url: http://loopinfinito.com.br/2012/05/02/microdata/
    from: Loop Infinito
  - title: Schema.org
    url: http://schema.org
    from: Schema.org
  - title: Rel=author Authorship Markup in HTML5
    url: http://webdesign.about.com/od/html5tags/qt/rel-author-authorship.htm
    from: about.com
---

<style>

	circle {
		-webkit-transition: fill 0.5s ease;
		-khtml-transition: fill 0.5s ease;
		-moz-transition: fill 0.5s ease;
		-ms-transition: fill 0.5s ease;
		-o-transition: fill 0.5s ease;
		transition: fill 0.5s ease;
	}

	g.circle:hover circle {
		fill: #ccc;
	}

</style>

Ontem finalmente saímos da teoria e realizamos a marcação semântica do nosso blog usando **microdata** e os vocabulários **schema.org**.

Hoje explicarei passo a passo como fiz isto aqui no Loop Infinito.
A qualquer momento você pode visualizar nosso código fonte e observar estas mesmas marcações lá.

Aconselho a leitura dos meus últimos 2 posts sobre o assunto, em especial do <a href="http://loopinfinito.com.br/2012/05/02/microdata/" alt="Microdata (Loop Infinito)" title="Microdata (Loop Infinito)">último</a> onde explico como usar microdata e schema.org detalhadamente.

## Identificando as entidades
O primeiro passo é identificar as entidades na página que desejamos marcar semanticamente.
Aqui no Loop Infinito, apliquei as marcações em 3 páginas diferentes: a <a href="http://loopinfinito.com.br">página inicial</a>, a página interna do post (onde você está agora) e a página <a href="http://loopinfinito.com.br/sobre/">Sobre</a> (a página <a href="http://loopinfinito.com.br/projetos/">Projetos</a> ainda não fizemos).

Irei mostrar como realizei as marcações semânticas apenas na página inicial, onde aparece a listagem dos posts resumidos com links para suas versões completas.
Caso você deseje saber como ficaram os códigos fontes das outras páginas, basta abri-los no seu navegador, o princípio de marcação é o mesmo.
Abaixo segue um *print screen* de um destes posts resumidos da página inicial:

<p id="print-home"><img src="http://loopinfinito.com.br/images/posts/2012-05-07-ganhando-visibilidade.jpg" alt="Print screen de post resumido na Home (loopinfinito.com.br)" width="700" height="662"/></p>

A primeira entidade que podemos identificar nesta página é o próprio **Post**, ou seja, um **Artigo** ou coisa parecida.
Navegando pelo site do <a href="http://schema.org" alt="schema.org">schema.org</a> pude achar o vocabulário <a href="http://schema.org/Article" class="bold">Article</a>, que corresponde a Artigo.
Percebi também que há mais 3 vocabulários que estendem de Article, ou seja, são vocabulários Article **mais específicos**, e estes são <a href="http://schema.org/BlogPosting" alt="Vocabulário BlogPosting (schema.org)" title="Vocabulário BlogPosting (schema.org)">BlogPosting</a>, <a href="http://schema.org/NewsArticle" alt="Vocabulário NewsArticle (schema.org)" title="Vocabulário NewsArticle (schema.org)">NewsArticle</a> e <a href="http://schema.org/ScholarlyArticle" alt="Vocabulário ScholarlyArticle (schema.org)" title="Vocabulário ScholarlyArticle (schema.org)">ScholarlyArticle</a>.

<svg class="img" width="700" height="330">
	<line fill="none" stroke="#CCCCCC" stroke-miterlimit="10" x1="354.691" y1="115.241" x2="221.759" y2="268.516"/>
	<line fill="none" stroke="#CCCCCC" stroke-miterlimit="10" x1="355.459" y1="1" x2="355.191" y2="110.069"/>
	<line fill="none" stroke="#CCCCCC" stroke-miterlimit="10" x1="354.691" y1="115.241" x2="355.287" y2="268.516"/>
	<line fill="none" stroke="#CCCCCC" stroke-miterlimit="10" x1="354.452" y1="108.637" x2="488.813" y2="268.516"/>
	<g class="circle">
		<circle fill="#EEEEEE" stroke="#CCCCCC" stroke-miterlimit="10" cx="221.758" cy="268.516" r="56.315"/>
		<text transform="matrix(1 0 0 1 178.2629 275.3572)" font-size="16.2905">BlogPosting</text>
	</g>
	<g class="circle">
		<circle fill="#EEEEEE" stroke="#CCCCCC" stroke-miterlimit="10" cx="355.191" cy="108.069" r="41.483"/>
		<text transform="matrix(1 0 0 1 327.967 113.1091)" font-size="19.3394">Article</text>
	</g>
	<g class="circle">
		<circle fill="#EEEEEE" stroke="#CCCCCC" stroke-miterlimit="10" cx="355.288" cy="268.516" r="56.315"/>
		<text transform="matrix(1 0 0 1 312.3694 275.3572)" font-size="16.2905">NewsArticle</text>
	</g>
	<g class="circle">
		<circle fill="#EEEEEE" stroke="#CCCCCC" stroke-miterlimit="10" cx="488.813" cy="268.516" r="56.315"/>
		<text transform="matrix(1 0 0 1 439.5764 275.3572)" font-size="14">ScholarlyArticle</text>
	</g>
	<text transform="matrix(1 0 0 1 314.9143 25.4998)" fill="#999999" font-size="14">CreativeWork</text>
</svg>

Obviamente os nossos posts se encaixam na categoria **BlogPosting**, então este será o primeiro vocabulário a ser utilizado no nosso caso.

## Antes
O trecho de código abaixo mostra como era o código fonte de um resumo de post (o exemplo abaixo ilustra o <a href="#print-home">print screen</a> acima).
Dividi o código em blocos para facilitar a leitura (acho que ninguém gosta de ficar olhando para um monte de linhas de código de uma vez, né).

```html
<!-- bloco do post -->
<section class="post-container">
    <!-- menu da lateral direita -->
    <aside class="post-meta"> ... </aside>
    <!-- área principal do post -->
    <article> ... </article>
</section>
```

*Menu da lateral direita* detalhadamente:

```html
<aside class="post-meta">
    <ul>
        <!-- data da publicação -->
        <li class="post-data">04/05/2012</li>
        <!-- autor do post -->
        <li class="post-autor">
            <a href="...">Caio Gondim</a>
        </li>
        <!-- quantidade de comentarios -->
        <li class="post-comentarios">
            <a href="...">1 Comentário e 4 Reações</a>
        </li>
        <!-- tags do post -->
        <li class="post-tags">
            <ul>
                <li><a href="..."><span>#</span>javascript</a></li>
            </ul>
        </li>
    </ul>
</aside>
```

*Área principal do post* detalhadamente:

```html
<article>
    <!-- título do post -->
    <header>
        <h1><a href="...">Herança em JavaScript parte I</a></h1>
    </header>
    <!-- conteúdo do post -->
    <section>
        <!-- imagem principal -->
        <p><img src="..." /></p>
        <!-- texto (o post de fato) -->
        <p>Uma das coisas que mais assusta programadores vindos de...</p>
        <!-- link para o post completo -->
        <a href="..." class="leia-mais">Continue lendo &rarrw;</a>
    </section>
</article>
```

OK, nada de mais. Basicamente uma marcação simples HTML5.

## Depois
Agora vamos ver como ficou o código fonte **depois da marcação semântica**, percebam o uso das propriedades <code>itemscope</code>, <code>itemtype</code> e <code>itemprop</code>.
Mesmo esquema aqui, dividi o código em blocos:

### Elemento geral
<p></p>

```html
<!-- adicionamos as propriedades itemscope e itemtype para BlogPosting -->
<section class="post-container" itemscope="itemscope" itemtype="http://schema.org/BlogPosting">
    <!-- adicionamos esta tag <span> para o publicador do post -->
    <span class="hidden" itemprop="publisher">Loop Infinito</span>

    <aside class="post-meta"> ... </aside>
    <article> ... </article>
</section>
```

- Definimos a entidade principal (BlogPosting) no elemento que engloba todos os dados sobre o post;
- O elemento <code>{{ '<span>' | escape }}</code> não é visível para o leitor (classe <code>.hidden</code>), pois foi adicionado apenas para podermos especificar que este post foi publicado pelo Loop Infinito com <code>itemprop="publisher"</code>;
- Os outros 2 elementos principais ainda permanecem inalterados por enquanto.

**Obs.:** A aplicação da propriedade <code>itemscope="itemscope"</code> pode ser feita apenas colocando <code>itemscope</code> dentro da tag, pois é uma propriedade que não contém valor explícito associado, e a especificação HTML permite seu uso desta maneira.
Apenas usamos assim porque estamos obedecendo à sintaxe XHTML – também permitida no HTML5 – neste exemplo.

### Menu lateral direito
<p></p>

```html
<aside class="post-meta">
    <ul>
        <li class="post-data">
            <!-- data de publicação do post -->
            <time itemprop="datePublished" datetime="2012-05-06">
                06/05/2012
            </time>
        </li>
        <li class="post-autor">
            <!-- autor do post -->
            <a href="..." rel="author" itemprop="author">Caio Gondim</a>
        </li>
        <li class="post-comentarios">
        	<!-- contagem de comentários do post -->
            <a href="..." itemprop="interactionCount">
                1 Comentário e 4 Reações
            </a>
        </li>
        <li class="post-tags">
            <ul>
                <li><a href="..."><span>#</span>javascript</a></li>
            </ul>
            <!-- palavras-chave do post -->
            <span class="hidden" itemprop="keywords">javascript, ...</span>
        </li>
    </ul>
</aside>
```

- Envolvemos a data de publicação com um elemento <code>{{'<time>'|escape}}</code> (novo no HTML5) para usar a propriedade <code>itemprop="datePublished"</code>. Usamos também a propriedade <code>datetime</code> para podermos especificar a data no formato padrão (aaaa-mm-dd);
- Em autor, é aconselhável o uso da propriedade HTML <code>rel="author"</code> (<a href="http://webdesign.about.com/od/html5tags/qt/rel-author-authorship.htm">leia sobre</a>), além de especificar a propriedade <code>itemprop="author"</code>;
- Na contagem de comentários, usei a propriedade <code>itemprop="interactionCount"</code>;
- Adicionei um elemento <code>{{ '<span>' | escape }}</code> invisível para colocar todas as palavras-chave dentro, já de que as tags do post estão separadas por elementos <code>{{'<li>'|escape}}</code> acima. Usamos a propriedade <code>itemprop="keywords"</code>.

### Área principal do post
<p></p>

```html
<article>
    <header>
    	<!-- título do post -->
        <h1>
            <a href="..." itemprop="headline">
                Herança em JavaScript parte I
            </a>
        </h1>
    </header>
    <section>
        <!-- imagem principal do post -->
        <p><img itemprop="thumbnailUrl" src="..." /></p>
        <!-- envolvemos o resumo com uma <div> a descrição do post -->
        <div itemprop="description">
        	<p>Uma das coisas que mais assusta programadores...</p>
        </div>
        <!-- url do post -->
        <a href="..." class="leia-mais" itemprop="url">Continue lendo &rarrw;</a>
    </section>
</article>
```

- Definimos o título do post com a propriedade <code>itemprop="headline"</code>;
- A propriedade <code>itemprop="thumbnailUrl"</code> serve para especificar uma imagem associada ao post;
- Adicionamos um elemento <code>{{'<div>'|escape}}</code> para envolver o resumo do post, que servirá para definir a descrição do post através da propriedade <code>itemprop="description"</code>;
- O link "Continue lendo" contém a URL do post, que pode ser usada para definir a URL da entidade através da propriedade <code>itemprop="url"</code>.

## Testando
Bem, com isto terminamos a marcação semântica da página inicial do Loop Infinito usando o padrão HTML5 Microdata com os vocabulários schema.org.

Agora podemos testar se está tudo beleza com o <a href="http://www.google.com/webmasters/tools/richsnippets">Rich Snippets Testing Tool</a> do Google.
Basta informar uma URL que o *crawler* do Google realizará uma visita ao endereço informado, irá procurar por informações semânticas e depois irá exibir o resultado da varredura.

Fiz um teste com a URL da página inicial do blog (<a href="http://loopinfinito.com.br">loopinfinito.com.br</a>) e apareceram 5 itens BlogPosting (sem contar com este post).
Eis um destes itens:

<pre>
Item
    Type: http://schema.org/blogposting
    publisher = Loop Infinito
    datepublished = 2012-05-04

    author
        text = Caio Gondim
        href = http://twitter.com/caio_gondim

    interactioncount
        text = Carregando...
        href = http://loopinfinito.com.br/2012/05/04/heranca-em-javascript-parte-1/#disqus_thread

    keywords = javascript, js, web development, desenvolvimento web, html5, front-end, programação, oop, orientação a objetos, herança, orientação a protótipos, java

    headline
        text = Herança em JavaScript parte I
        href = http://loopinfinito.com.br/2012/05/04/heranca-em-javascript-parte-1/

    thumbnailurl = http://loopinfinito.com.br/images/posts/2012-05-04-heranca-em-javascript.jpg

    description = Uma das coisas que mais assusta programadores vindos de linguagens orientadas a objeto, como Java e C++, é a falta de classes em JavaScript. Muitos, inclusive, tentam simular este comportamento...

    url
        text = Continue lendo &rarrw;
        href = http://loopinfinito.com.br/2012/05/04/heranca-em-javascript-parte-1/
</pre>

Com isto, vemos que o Google está extraindo nossos metadados de forma correta.
Aconselho que façam o mesmo teste com as nossas outras páginas marcadas com schema.org (interna do post e Sobre) para quem possam ver as direfenças entre elas.
A diferença entre a página inicial e a interna do post é mínima: no resumo da página inicial temos as propriedades <code>thumbnailurl</code>, <code>description</code> e <code>url</code>, enquanto que na interna temos a propriedade <code>articleBody</code> substituindo essas 3.
Por hoje é só, até a próxima!
