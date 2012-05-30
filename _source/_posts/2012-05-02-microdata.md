---
title: Microdata
layout: post
author: Almir Filho
author_link: http://twitter.com/almirfilho
resumo: Olá pessoal, continuando o papo do nosso <a href="/2012/04/26/marcacao-semantica/">último post</a>, hoje continuarei falando de marcação semântica, com a diferença de que focarei em microdata e mostrarei também como realizar a marcação semântica de conteúdo usando os vocabulários <strong>Schema.org</strong>.
tags: web-semantica microdata schema.org SEO HTML5
image: images/posts/2012-05-02-semantics-html5.jpg
keywords: web semantica, microdata, schema.org, marcacao, marcacao semantica, html, html5, webdev, desenvolvimento web, vocabulario, seo
styles: [wombat]
comments: true
---
<style type="text/css">
	
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

	#exemplo-filme {
		border: 1px solid #ccc;
		padding: 20px;
		box-shadow: 2px 3px 0px #ccc;
		font-family: "Georgia", serif;
		color: #333;
		background-color: #f5f5f5;
	}

		#exemplo-filme h4 {
			font-size: 18px !important;
		}

		#exemplo-filme p {
			margin: 0px !important;
		}

</style>
<p><img src="http://loopinfinito.com.br/images/posts/2012-05-02-semantics-html5.jpg" alt="HTML5 Semantics" width="700" height="432" /></p>

Olá pessoal, continuando o papo do nosso <a href="http://loopinfinito.com.br/2012/04/26/marcacao-semantica/">último post</a>, hoje continuarei falando de marcação semântica, com a diferença de que focarei em microdata e mostrarei também como realizar a marcação semântica de conteúdo usando os vocabulários **Schema.org**.

## Vocabulários do schema.org
No site <a href="http://schema.org">schema.org</a> podemos encontrar a lista completa de todos os tipos de *esquemas* (entidades) que já foram definidas. No momento em que escrevo este post, já encontram-se por volta de 450 entidades no site.

É importante observar que os vocabulários schema.org pertencem a uma **hierarquia**, exatamente como se fosse uma hierarquia de classes da nossa velha e conhecida orientação a objeto, em que cada classe pode estender outra classe, **herdando** assim todas as **propriedades** e comportamentos da classe pai.
No schema.org temos apenas 2 tipos básicos de entidades: **DataType** e **Thing**.

### DataType
Apenas define vários tipos de dados primitivos que servem para descrever os tipos de dados que serão usados para preencher um atributo qualquer em qualquer vocabulário. As entidades *Boolean*, *Date*, *Number* e *Text* estendem **DataType**, e *Float* e *Integer* por sua vez, estendem *Number*. Até hoje não vi nenhuma aplicação que utiliza estes vocabulários para definir dados *semanticamente*. Por exemplo, digamos que exista uma entidade *Empresa* a qual queremos especificar o número de funcionários. Para isto, não usaremos Integer, e sim uma propriedade *numeroDeFuncionarios* (que é do tipo *Integer*).

Então resumindo, nós não precisamos nos preocupar com estes tipos de dados para marcar código semanticamente.

### Thing
É aqui que a coisa começa a ficar interessante. **Thing** é a entidade mais abstrata a nível semântico. Como o próprio nome já nos diz, *Thing* é qualquer coisa, é o nosso *Object* em Java (alô, JavaLovers). A partir de Thing, qualquer coisa pode ser definida. As 7 entidades que a estendem são: **CreativeWork**, **Event**, **Intangible**, **Organization**, **Person**, **Place** e **Product**. Dentro de *CreativeWork* temos *Article*, *Blog*, *Movie*, *Recipe* e por ai vai.

<svg class="img" width="700" height="400">
	<line fill="none" stroke="#CCCCCC" stroke-miterlimit="10" x1="391.774" y1="224.031" x2="391.774" y2="249.629"/>
	<line fill="none" stroke="#CCCCCC" stroke-miterlimit="10" x1="231.773" y1="224.031" x2="231.773" y2="249.629"/>
	<line fill="none" stroke="#CCCCCC" stroke-miterlimit="10" x1="311.773" y1="224.031" x2="311.773" y2="249.629"/>
	<line fill="none" stroke="#CCCCCC" stroke-miterlimit="10" x1="471.774" y1="224.031" x2="471.774" y2="249.629"/>
	<line fill="none" stroke="#CCCCCC" stroke-miterlimit="10" x1="551.774" y1="224.031" x2="551.774" y2="249.629"/>
	<line fill="none" stroke="#CCCCCC" stroke-miterlimit="10" x1="631.774" y1="224.031" x2="631.774" y2="249.629"/>
	<line fill="none" stroke="#CCCCCC" stroke-miterlimit="10" x1="243.773" y1="341.031" x2="243.773" y2="366.629"/>
	<line fill="none" stroke="#CCCCCC" stroke-miterlimit="10" x1="181.773" y1="341.031" x2="181.773" y2="366.629"/>
	<line fill="none" stroke="#CCCCCC" stroke-miterlimit="10" x1="120.773" y1="341.031" x2="120.773" y2="366.629"/>
	<line fill="none" stroke="#CCCCCC" stroke-miterlimit="10" x1="58.773" y1="341.031" x2="58.773" y2="366.629"/>
	<line fill="none" stroke="#CCCCCC" stroke-miterlimit="10" x1="151.92" y1="198.706" x2="121.258" y2="321.607"/>
	<line fill="none" stroke="#CCCCCC" stroke-miterlimit="10" x1="151.773" y1="194.608" x2="60.227" y2="321.607"/>
	<line fill="none" stroke="#CCCCCC" stroke-miterlimit="10" x1="151.92" y1="198.706" x2="182.29" y2="321.607"/>
	<line fill="none" stroke="#CCCCCC" stroke-miterlimit="10" x1="151.773" y1="194.608" x2="243.433" y2="324.734"/>
	<line fill="none" stroke="#CCCCCC" stroke-miterlimit="10" x1="388.433" y1="62.209" x2="311.773" y2="184.161"/>
	<line fill="none" stroke="#CCCCCC" stroke-miterlimit="10" x1="388.433" y1="62.209" x2="231.773" y2="184.161"/>
	<line fill="none" stroke="#CCCCCC" stroke-miterlimit="10" x1="388.433" y1="62.209" x2="151.773" y2="184.161"/>
	<line fill="none" stroke="#CCCCCC" stroke-miterlimit="10" x1="391.92" y1="62.209" x2="631.774" y2="184.161"/>
	<line fill="none" stroke="#CCCCCC" stroke-miterlimit="10" x1="391.92" y1="62.209" x2="551.774" y2="184.161"/>
	<line fill="none" stroke="#CCCCCC" stroke-miterlimit="10" x1="391.92" y1="62.209" x2="471.774" y2="184.161"/>
	<line fill="none" stroke="#CCCCCC" stroke-miterlimit="10" x1="391.774" y1="76.031" x2="391.774" y2="184.161"/>
	<g class="circle">
		<circle fill="#EEEEEE" stroke="#CCCCCC" stroke-miterlimit="10" cx="391.774" cy="56.112" r="33.74"/>
		<text transform="matrix(1 0 0 1 369.4121 62.209)" font-size="18">Thing</text>
	</g>
	<g class="circle">
		<circle fill="#EEEEEE" stroke="#CCCCCC" stroke-miterlimit="10" cx="391.774" cy="194.607" r="33.74"/>
		<text transform="matrix(1 0 0 1 363.3008 198.7051)" font-size="10">Organization</text>
	</g>
	<g class="circle">
		<circle fill="#EEEEEE" stroke="#CCCCCC" stroke-miterlimit="10" cx="311.774" cy="194.607" r="33.74"/>
		<text transform="matrix(1 0 0 1 285.2446 198.7051)" font-size="12">Intangible</text>
	</g>
	<g class="circle">
		<circle fill="#EEEEEE" stroke="#CCCCCC" stroke-miterlimit="10" cx="231.774" cy="194.607" r="33.74"/>
		<text transform="matrix(1 0 0 1 214.4136 198.7051)" font-size="14">Event</text>
	</g>
	<g class="circle">
		<circle fill="#EEEEEE" stroke="#CCCCCC" stroke-miterlimit="10" cx="151.774" cy="194.607" r="33.74"/>
		<text transform="matrix(1 0 0 1 121.9155 198.7051)" font-size="10">CreativeWork</text>
	</g>
	<g class="circle">
		<circle fill="#EEEEEE" stroke="#CCCCCC" stroke-miterlimit="10" cx="631.774" cy="194.607" r="33.74"/>
		<text transform="matrix(1 0 0 1 607.4136 198.7051)" font-size="14">Product</text>
	</g>
	<g class="circle">
		<circle fill="#EEEEEE" stroke="#CCCCCC" stroke-miterlimit="10" cx="551.774" cy="194.607" r="33.74"/>
		<text transform="matrix(1 0 0 1 534.4136 198.7051)" font-size="14">Place</text>
	</g>
	<g class="circle">
		<circle fill="#EEEEEE" stroke="#CCCCCC" stroke-miterlimit="10" cx="471.774" cy="194.607" r="33.74"/>
		<text transform="matrix(1 0 0 1 450.1372 198.7051)" font-size="14">Person</text>
	</g>
	<g class="circle">
		<circle fill="#EEEEEE" stroke="#CCCCCC" stroke-miterlimit="10" cx="121.258" cy="321.607" r="25.74"/>
		<text transform="matrix(1 0 0 1 109.0342 324.7339)" font-size="12">Blog</text>
	</g>
	<g class="circle">
		<circle fill="#EEEEEE" stroke="#CCCCCC" stroke-miterlimit="10" cx="60.227" cy="321.607" r="25.74"/>
		<text transform="matrix(1 0 0 1 43.335 324.7339)" font-size="12">Article</text>
	</g>
	<g class="circle">
		<circle fill="#EEEEEE" stroke="#CCCCCC" stroke-miterlimit="10" cx="182.29" cy="321.607" r="25.74"/>
		<text transform="matrix(1 0 0 1 166.3994 324.7339)" font-size="12">Movie</text>
	</g>
	<g class="circle">
		<circle fill="#EEEEEE" stroke="#CCCCCC" stroke-miterlimit="10" cx="243.321" cy="321.607" r="25.74"/>
		<text transform="matrix(1 0 0 1 224.4248 324.7339)" font-size="12">Recipe</text>
	</g>
	<path fill="#FFFFFF" stroke="#CCCCCC" stroke-miterlimit="10" d="M405.766,255.279c0,2.954-2.395,5.35-5.35,5.35h-17.539
		c-2.955,0-5.351-2.396-5.351-5.35v-0.298c0-2.955,2.396-5.351,5.351-5.351h17.539c2.955,0,5.35,2.396,5.35,5.351V255.279z"/>
	<circle fill="#CCCCCC" cx="383.77" cy="255.129" r="1.871"/>
	<circle fill="#CCCCCC" cx="399.375" cy="255.129" r="1.871"/>
	<circle fill="#CCCCCC" cx="391.573" cy="255.129" r="1.871"/>
	<path fill="#FFFFFF" stroke="#CCCCCC" stroke-miterlimit="10" d="M245.767,255.279c0,2.954-2.396,5.35-5.351,5.35h-17.538
		c-2.955,0-5.351-2.396-5.351-5.35v-0.298c0-2.955,2.396-5.351,5.351-5.351h17.538c2.955,0,5.351,2.396,5.351,5.351V255.279z"/>
	<circle fill="#CCCCCC" cx="223.77" cy="255.129" r="1.871"/>
	<circle fill="#CCCCCC" cx="239.376" cy="255.129" r="1.871"/>
	<circle fill="#CCCCCC" cx="231.573" cy="255.129" r="1.871"/>
	<path fill="#FFFFFF" stroke="#CCCCCC" stroke-miterlimit="10" d="M325.767,255.279c0,2.954-2.396,5.35-5.351,5.35h-17.538
		c-2.955,0-5.351-2.396-5.351-5.35v-0.298c0-2.955,2.396-5.351,5.351-5.351h17.538c2.955,0,5.351,2.396,5.351,5.351V255.279z"/>
	<circle fill="#CCCCCC" cx="303.77" cy="255.129" r="1.871"/>
	<circle fill="#CCCCCC" cx="319.376" cy="255.129" r="1.871"/>
	<circle fill="#CCCCCC" cx="311.573" cy="255.129" r="1.871"/>
	<path fill="#FFFFFF" stroke="#CCCCCC" stroke-miterlimit="10" d="M485.766,255.279c0,2.954-2.395,5.35-5.35,5.35h-17.539
		c-2.955,0-5.35-2.396-5.35-5.35v-0.298c0-2.955,2.395-5.351,5.35-5.351h17.539c2.955,0,5.35,2.396,5.35,5.351V255.279z"/>
	<circle fill="#CCCCCC" cx="463.77" cy="255.129" r="1.871"/>
	<circle fill="#CCCCCC" cx="479.375" cy="255.129" r="1.871"/>
	<circle fill="#CCCCCC" cx="471.573" cy="255.129" r="1.871"/>
	<path fill="#FFFFFF" stroke="#CCCCCC" stroke-miterlimit="10" d="M565.766,255.279c0,2.954-2.395,5.35-5.35,5.35h-17.539
		c-2.955,0-5.35-2.396-5.35-5.35v-0.298c0-2.955,2.395-5.351,5.35-5.351h17.539c2.955,0,5.35,2.396,5.35,5.351V255.279z"/>
	<circle fill="#CCCCCC" cx="543.77" cy="255.129" r="1.871"/>
	<circle fill="#CCCCCC" cx="559.375" cy="255.129" r="1.871"/>
	<circle fill="#CCCCCC" cx="551.573" cy="255.129" r="1.871"/>
	<path fill="#FFFFFF" stroke="#CCCCCC" stroke-miterlimit="10" d="M645.766,255.279c0,2.954-2.395,5.35-5.35,5.35h-17.539
		c-2.955,0-5.35-2.396-5.35-5.35v-0.298c0-2.955,2.395-5.351,5.35-5.351h17.539c2.955,0,5.35,2.396,5.35,5.351V255.279z"/>
	<circle fill="#CCCCCC" cx="623.77" cy="255.129" r="1.871"/>
	<circle fill="#CCCCCC" cx="639.375" cy="255.129" r="1.871"/>
	<circle fill="#CCCCCC" cx="631.573" cy="255.129" r="1.871"/>
	<path fill="#FFFFFF" stroke="#CCCCCC" stroke-miterlimit="10" d="M257.767,372.279c0,2.954-2.396,5.35-5.351,5.35h-17.538
		c-2.955,0-5.351-2.396-5.351-5.35v-0.298c0-2.955,2.396-5.351,5.351-5.351h17.538c2.955,0,5.351,2.396,5.351,5.351V372.279z"/>
	<circle fill="#CCCCCC" cx="235.77" cy="372.129" r="1.871"/>
	<circle fill="#CCCCCC" cx="251.376" cy="372.129" r="1.871"/>
	<circle fill="#CCCCCC" cx="243.573" cy="372.129" r="1.871"/>
	<path fill="#FFFFFF" stroke="#CCCCCC" stroke-miterlimit="10" d="M195.767,372.279c0,2.954-2.396,5.35-5.351,5.35h-17.538
		c-2.955,0-5.351-2.396-5.351-5.35v-0.298c0-2.955,2.396-5.351,5.351-5.351h17.538c2.955,0,5.351,2.396,5.351,5.351V372.279z"/>
	<circle fill="#CCCCCC" cx="173.77" cy="372.129" r="1.871"/>
	<circle fill="#CCCCCC" cx="189.376" cy="372.129" r="1.871"/>
	<circle fill="#CCCCCC" cx="181.573" cy="372.129" r="1.871"/>
	<path fill="#FFFFFF" stroke="#CCCCCC" stroke-miterlimit="10" d="M134.767,372.279c0,2.954-2.396,5.35-5.351,5.35h-17.538
		c-2.955,0-5.351-2.396-5.351-5.35v-0.298c0-2.955,2.396-5.351,5.351-5.351h17.538c2.955,0,5.351,2.396,5.351,5.351V372.279z"/>
	<circle fill="#CCCCCC" cx="112.77" cy="372.129" r="1.871"/>
	<circle fill="#CCCCCC" cx="128.376" cy="372.129" r="1.871"/>
	<circle fill="#CCCCCC" cx="120.573" cy="372.129" r="1.871"/>
	<path fill="#FFFFFF" stroke="#CCCCCC" stroke-miterlimit="10" d="M72.767,372.279c0,2.954-2.396,5.35-5.351,5.35H49.878
		c-2.955,0-5.351-2.396-5.351-5.35v-0.298c0-2.955,2.396-5.351,5.351-5.351h17.538c2.955,0,5.351,2.396,5.351,5.351V372.279z"/>
	<circle fill="#CCCCCC" cx="50.77" cy="372.129" r="1.871"/>
	<circle fill="#CCCCCC" cx="66.376" cy="372.129" r="1.871"/>
	<circle fill="#CCCCCC" cx="58.573" cy="372.129" r="1.871"/>
	<circle fill="#CCCCCC" cx="285.77" cy="325.129" r="1.871"/>
	<circle fill="#CCCCCC" cx="301.376" cy="325.129" r="1.871"/>
	<circle fill="#CCCCCC" cx="293.573" cy="325.129" r="1.871"/>
</svg>

## Identificando as entidades
Antes de querermos marcar conteúdo semanticamente, é necessário identificar as entidades presentes na página que desejamos descrever. Digamos que temos uma página que apresenta informações sobre filmes, e em um trecho tenhamos:

<div id="exemplo-filme">
	<h4>Avatar</h4>
	<p>Diretor: James Cameron (16 de agosto de 1954)</p>
	<p>Ficção Científica</p>
	<p><a href="http://www.youtube.com/watch?v=d1_JBMrrYw8">Veja o trailer</a></p>
</div>

Para nós é muito fácil identificar qual entidade de que se tratam as informações acima, **mas e as máquinas**? Como elas saberão que "James Cameron" é o diretor do filme Avatar? Esta palavra "Diretor" também não tem o menor significado para uma máquina. E se "Diretor" estivesse em japonês ou em russo? **Como elas saberiam dizer sequer o que é "Avatar"?** Seria Avatar, o **desenho**, o **filme**, ou até mesmo uma **entidade divina** do mundo espiritual encarnada em uma pessoa? Quando você procura por Avatar no Google, como ele sabe pelo que você está procurando exatamente? Ele **não sabe**. O que o Google e os outros motores de busca atuais fazem é aplicar um monte de algoritmos super complexos que fazem uma porrada de associações pra tentar **adivinhar** do que seu conteúdo se trata (*n* teses de doutorado e muita matemática por trás), e assim poder melhorar sua indexação e classificação de conteúdo.

## Propriedades microdata
Como vimos, os vocabulários schema.org definem entidades do mundo real, suas propriedades e seus relacionamentos com outras entidades. Agora vamos ver como utilizar de fato todos estes metadados em nosso código HTML. Primeiro certifique-se de que seu cabeçalho tenha a definição *doctype* correta, sendo microdata um padrão HTML5, a primeira linha do seu código deve ser <code>{{ '<!doctype html>' | escape }}</code>, apenas isso – sem nomes complicados de versões e/ou urls que ninguém tem paciência de ficar escrevendo.

Feito isto, vamos finalmente ao microdata de fato. Microdata define 5 diferentes atributos que podem ser adicionados a qualquer elemento HTML o qual você queira descrever semanticamente. Estes atributos são:

<ul>
	<li><code>itemscope</code>: Indica que o item é uma entidade semântica e que todas as propriedades que estiverem dentro dele contêm informações sobre ele;</li>
	<li><code>itemtype</code>: Indica a entidade (o tipo). Aqui você deve especificar a URL do vocabulário (por exemplo: http://schema.org/CreativeWork);</li>
	<li><code>itemid</code>: Um identificador único para o item (leia <code>itemref</code>);</li>
	<li><code>itemprop</code>: Indica que o item possui o valor da propriedade especificada (veja o exemplo abaixo);</li>
	<li><code>itemref</code>: Propriedades que estão em elementos fora do escopo (elemento com <code>itemscope</code>) podem ser associadas a este item. <code>itemref</code> deve conter seu valor preenchido com o <code>itemid</code> do elemento o qual se deseja fazer a associação.</li>
</ul>

Agora vamos voltar ao exemplo do Avatar. Digamos que o código HTML correspondente <a href="#exemplo-filme">àquele trecho</a> seja: (Este tutorial é basicamente o mesmo encontrado no <a href="http://schema.org/docs/gs.html">getting started</a> do site schema.org.)

{% highlight html %}
<div>
    <h4>Avatar</h4>
    <p>Diretor: James Cameron (16 de agosto de 1954)</p>
    <p>Ficção Científica</p>
    <p><a href="http://www.youtube.com/...">Veja o trailer</a></p>
</div>
{% endhighlight %}

Começamos definindo a entidade Movie e adicionando as propriedades <code>itemscope</code> e <code>itemtype</code> ao elemento <code>{{ '<div>' | escape }}</code>, já que este elemento possui todo conteúdo relacionado ao filme *Avatar*.

{% highlight html %}
<!-- adicionamos os atributos itemscope e itemtype -->
<div itemscope="itemscope" itemtype="http://schema.org/Movie">
    <h4>Avatar</h4>
    <p>Diretor: James Cameron (16 de agosto de 1954)</p>
    <p>Ficção Científica</p>
    <p><a href="http://www.youtube.com/...">Veja o trailer</a></p>
</div>
{% endhighlight %}

Agora identificamos as propriedades presentes deste filme e definimos cada uma com o atributo <code>itemprop</code>, no nosso caso estas propriedades são *nome*, *diretor*, *gênero* e *trailer*.

{% highlight html %}
<div itemscope="itemscope" itemtype="http://schema.org/Movie">
    <!-- adicionamos o atributo itemprop ao nome do filme -->
    <h4 itemprop="name">Avatar</h4>
    <!-- adicionamos o atributo itemprop ao diretor do filme -->
    <p>
        Diretor: 
        <span itemprop="director">James Cameron (16 de agosto de 1954)</span>
    </p>
    <!-- adicionamos o atributo itemprop ao gênero do filme -->
    <p itemprop="genre">Ficção Científica</p>
    <!-- adicionamos o atributo itemprop ao trailer do filme -->
    <p><a itemprop="trailer" href="http://www.youtube.com/...">Veja o trailer</a></p>
</div>
{% endhighlight %}

Temos um Filme cujo nome é Avatar, gênero é Ficção científica, trailer aponta para uma URL e o diretor é James Cameron.
Numa representação gráfica da semântica deste trecho de código, teríamos algo parecido como:

<svg class="img" width="700" height="400">
	<line fill="none" stroke="#CCCCCC" stroke-miterlimit="10" x1="350" y1="57.031" x2="350" y2="344.36"/>
	<line fill="none" stroke="#CCCCCC" stroke-miterlimit="10" x1="504.665" y1="211.696" x2="197.336" y2="211.696"/>
	<g class="circle">
		<circle fill="#EEEEEE" stroke="#CCCCCC" stroke-miterlimit="10" cx="350.774" cy="209.112" r="60.74"/>
		<text transform="matrix(1 0 0 1 310.3311 220.0874)" font-size="32.4044">Movie</text>
	</g>
	<g>
		<path fill="#FFFFFF" stroke="#CCCCCC" stroke-miterlimit="10" d="M391.055,45.031c0,6.627-5.373,12-12,12h-56
			c-6.627,0-12-5.373-12-12V37.36c0-6.627,5.373-12,12-12h56c6.627,0,12,5.373,12,12V45.031z"/>
		<text transform="matrix(1 0 0 1 320.6929 48.0874)" font-size="21">Avatar</text>
	</g>
	<g>
		<path fill="#FFFFFF" stroke="#CCCCCC" stroke-miterlimit="10" d="M445.055,363.031c0,6.628-5.373,12-12,12h-166
			c-6.627,0-12-5.372-12-12v-7.671c0-6.627,5.373-12,12-12h166c6.627,0,12,5.373,12,12V363.031z"/>
		<text transform="matrix(1 0 0 1 274.0205 366.0874)" font-size="21">James Cameron</text>
	</g>
	<g>
		<path fill="#FFFFFF" stroke="#CCCCCC" stroke-miterlimit="10" d="M564.055,215.031c0,6.628-3.989,12-8.909,12h-41.572
			c-4.92,0-8.909-5.372-8.909-12v-7.671c0-6.627,3.989-12,8.909-12h41.572c4.92,0,8.909,5.373,8.909,12V215.031z"/>
		<text transform="matrix(1 0 0 1 513.6157 218.0874)" font-size="21">URL</text>
	</g>
	<g>
		<path fill="#FFFFFF" stroke="#CCCCCC" stroke-miterlimit="10" d="M198.055,228.031c0,6.628-5.373,12-12,12h-81
			c-6.627,0-12-5.372-12-12V193.36c0-6.627,5.373-12,12-12h81c6.627,0,12,5.373,12,12V228.031z"/>
		<text transform="matrix(1 0 0 1 114.5166 205.0874)"><tspan x="0" y="0" font-size="21">Ficção</tspan><tspan x="-10.5" y="25.2" font-size="21">científica</tspan></text>
	</g>
	<g>
		<path fill="#CCCCCC" d="M371.722,104.273c0,3.59-2.91,6.5-6.5,6.5h-30.334c-3.59,0-6.5-2.91-6.5-6.5v-4.155
			c0-3.59,2.91-6.5,6.5-6.5h30.334c3.59,0,6.5,2.91,6.5,6.5V104.273z"/>
		<text transform="matrix(1 0 0 1 335.0493 106.3599)" font-size="12">name</text>
	</g>
	<g>
		<path fill="#CCCCCC" d="M374.722,308.273c0,3.59-2.91,6.5-6.5,6.5h-36.334c-3.59,0-6.5-2.91-6.5-6.5v-4.155
			c0-3.59,2.91-6.5,6.5-6.5h36.334c3.59,0,6.5,2.91,6.5,6.5V308.273z"/>
		<text transform="matrix(1 0 0 1 330.7212 310.3599)" font-size="12">director</text>
	</g>
	<g>
		<path fill="#CCCCCC" d="M479.722,213.273c0,3.59-2.91,6.5-6.5,6.5h-30.334c-3.59,0-6.5-2.91-6.5-6.5v-4.155
			c0-3.59,2.91-6.5,6.5-6.5h30.334c3.59,0,6.5,2.91,6.5,6.5V213.273z"/>
		<text transform="matrix(1 0 0 1 443.0552 215.3599)" font-size="12">trailer</text>
	</g>
	<g>
		<path fill="#CCCCCC" d="M268.056,213.273c0,3.59-3.224,6.5-7.2,6.5h-33.601c-3.977,0-7.2-2.91-7.2-6.5v-4.155
			c0-3.59,3.224-6.5,7.2-6.5h33.601c3.977,0,7.2,2.91,7.2,6.5V213.273z"/>
		<text transform="matrix(1 0 0 1 225.0474 215.3599)" font-size="12">gender</text>
	</g>
</svg>

Se for do nosso interesse, podemos refinar mais ainda a nossa marcação tentando identificar se uma destas propriedades pode ser definida como uma outra entidade.
No caso da propriedade <code>director</code> por exemplo, um diretor é uma **pessoa** também, então vamos aplicar o vocabulário **Person** do schema.org:

{% highlight html %}
<div itemscope="itemscope" itemtype="http://schema.org/Movie">
    <h4 itemprop="name">Avatar</h4>
    <!-- movemos o atributo itemprop do diretor para o wrapper (<p>) -->
    <!-- e adicionamos os atributos itemscope e itemtype ao diretor -->
    <p itemprop="director" itemscope="itemscope" itemtype="http://schema.org/Person">
        Diretor: 
        <span>James Cameron (16 de agosto de 1954)</span>
    </p>
    <p itemprop="genre">Ficção Científica</p>
    <p><a itemprop="trailer" href="http://www.youtube.com/...">Veja o trailer</a></p>
</div>
{% endhighlight %}

E para terminar, vamos especificar as propriedades desta pessoa – que no nesta caso são *nome* e *data de nascimento*.

Observe que para data de nascimento criamos um novo elemento <code>{{ '<time datetime="...">' | escape }}</code>.
Optei por fazer isto por quê <code>{{ '<time>' | escape }}</code> é uma <a href="http://www.w3schools.com/html5/tag_time.asp">nova tag</a> que faz parte da especificação HTML5, e usamos seu atributo <code>datetime</code> para especificar o formato padrão de data usado pelo schema.org – na especificação do tipo de dados <a href="http://schema.org/Date">Date</a>, o formato de data esperado é o <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> (AAAA-MM-DD).

{% highlight html %}
<div itemscope="itemscope" itemtype="http://schema.org/Movie">
    <h4 itemprop="name">Avatar</h4>
    <p itemprop="director" itemscope="itemscope" itemtype="http://schema.org/Person">
        Diretor: 
        <!-- adicionamos o atributo itemprop às seguintes propriedades da pessoa -->
        <span itemprop="name">James Cameron</span> 
        <time itemprop="birthDate" datetime="1954-08-16">
            (16 de agosto de 1954)
        </time>
    </p>
    <p itemprop="genre">Ficção Científica</p>
    <p><a itemprop="trailer" href="http://www.youtube.com/...">Veja o trailer</a></p>
</div>{% endhighlight %}

Agora temos um **Filme** cujo nome é Avatar, gênero é Ficção científica, trailer aponta para uma URL e o diretor é uma **Pessoa** cujo nome é James Cameron e sua data de nascimento é 16 de agosto de 1954.
Com isso, uma representação gráfica da semântica passaria a ser algo como:

<svg class="img" width="700" height="550">
	<line fill="none" stroke="#CCCCCC" stroke-miterlimit="10" x1="350" y1="57.031" x2="350" y2="344.36"/>
	<line fill="none" stroke="#CCCCCC" stroke-miterlimit="10" x1="504.665" y1="211.696" x2="197.336" y2="211.696"/>
	<line fill="none" stroke="#CCCCCC" stroke-miterlimit="10" x1="350" y1="391.26" x2="201.038" y2="516.196"/>
	<line fill="none" stroke="#CCCCCC" stroke-miterlimit="10" x1="350" y1="391.26" x2="504.665" y2="516.196"/>
	<g class="circle">
		<circle fill="#EEEEEE" stroke="#CCCCCC" stroke-miterlimit="10" cx="350.774" cy="209.112" r="60.74"/>
		<text transform="matrix(1 0 0 1 310.3311 220.0874)" font-size="32.4044">Movie</text>
	</g>
	<g>
		<path fill="#FFFFFF" stroke="#CCCCCC" stroke-miterlimit="10" d="M391.055,45.031c0,6.627-5.373,12-12,12h-56
			c-6.627,0-12-5.373-12-12V37.36c0-6.627,5.373-12,12-12h56c6.627,0,12,5.373,12,12V45.031z"/>
		<text transform="matrix(1 0 0 1 320.6929 48.0874)" font-size="21">Avatar</text>
	</g>
	<g>
	<path fill="#FFFFFF" stroke="#CCCCCC" stroke-miterlimit="10" d="M295.055,520.031c0,6.628-5.373,12-12,12h-166
		c-6.627,0-12-5.372-12-12v-7.671c0-6.627,5.373-12,12-12h166c6.627,0,12,5.373,12,12V520.031z"/>
		<text transform="matrix(1 0 0 1 124.0205 523.0874)" font-size="21">James Cameron</text>
	</g>
	<g>
		<path fill="#FFFFFF" stroke="#CCCCCC" stroke-miterlimit="10" d="M564.055,215.031c0,6.628-3.989,12-8.909,12h-41.572
			c-4.92,0-8.909-5.372-8.909-12v-7.671c0-6.627,3.989-12,8.909-12h41.572c4.92,0,8.909,5.373,8.909,12V215.031z"/>
		<text transform="matrix(1 0 0 1 513.6157 218.0874)" font-size="21">URL</text>
	</g>
	<g>
		<path fill="#FFFFFF" stroke="#CCCCCC" stroke-miterlimit="10" d="M198.055,228.031c0,6.628-5.373,12-12,12h-81
			c-6.627,0-12-5.372-12-12V193.36c0-6.627,5.373-12,12-12h81c6.627,0,12,5.373,12,12V228.031z"/>
		<text transform="matrix(1 0 0 1 114.5166 205.0874)"><tspan x="0" y="0" font-size="21">Ficção</tspan><tspan x="-10.5" y="25.2" font-size="21">científica</tspan></text>
	</g>
	<g>
		<path fill="#CCCCCC" d="M371.722,104.273c0,3.59-2.91,6.5-6.5,6.5h-30.334c-3.59,0-6.5-2.91-6.5-6.5v-4.155
			c0-3.59,2.91-6.5,6.5-6.5h30.334c3.59,0,6.5,2.91,6.5,6.5V104.273z"/>
		<text transform="matrix(1 0 0 1 335.0493 106.3599)" font-size="12">name</text>
	</g>
	<g>
		<path fill="#CCCCCC" d="M374.722,308.273c0,3.59-2.91,6.5-6.5,6.5h-36.334c-3.59,0-6.5-2.91-6.5-6.5v-4.155
			c0-3.59,2.91-6.5,6.5-6.5h36.334c3.59,0,6.5,2.91,6.5,6.5V308.273z"/>
		<text transform="matrix(1 0 0 1 330.7212 310.3599)" font-size="12">director</text>
	</g>
	<g>
		<path fill="#CCCCCC" d="M479.722,213.273c0,3.59-2.91,6.5-6.5,6.5h-30.334c-3.59,0-6.5-2.91-6.5-6.5v-4.155
			c0-3.59,2.91-6.5,6.5-6.5h30.334c3.59,0,6.5,2.91,6.5,6.5V213.273z"/>
		<text transform="matrix(1 0 0 1 443.0552 215.3599)" font-size="12">trailer</text>
	</g>
	<g>
		<path fill="#CCCCCC" d="M268.056,213.273c0,3.59-3.224,6.5-7.2,6.5h-33.601c-3.977,0-7.2-2.91-7.2-6.5v-4.155
			c0-3.59,3.224-6.5,7.2-6.5h33.601c3.977,0,7.2,2.91,7.2,6.5V213.273z"/>
		<text transform="matrix(1 0 0 1 225.0474 215.3599)" font-size="12">genre</text>
	</g>
	<g class="circle">
		<circle fill="#EEEEEE" stroke="#CCCCCC" stroke-miterlimit="10" cx="350.774" cy="391.261" r="47.74"/>
		<text transform="matrix(1 0 0 1 316.5522 399.8882)" font-size="21">Person</text>
	</g>
	<g>
		<path fill="#CCCCCC" d="M289.723,463.695c0,3.59-2.91,6.5-6.5,6.5h-30.334c-3.59,0-6.5-2.91-6.5-6.5v-4.155
			c0-3.59,2.91-6.5,6.5-6.5h30.334c3.59,0,6.5,2.91,6.5,6.5V463.695z"/>
		<text transform="matrix(1 0 0 1 253.0498 465.7817)" font-size="12">name</text>
	</g>
	<g>
		<path fill="#FFFFFF" stroke="#CCCCCC" stroke-miterlimit="10" d="M563.722,520.031c0,6.628-5.373,12-12,12h-86
			c-6.627,0-12-5.372-12-12v-7.671c0-6.627,5.373-12,12-12h86c6.627,0,12,5.373,12,12V520.031z"/>
		<text transform="matrix(1 0 0 1 466.7925 521.0874)" font-size="16">1954-08-16</text>
	</g>
	<g>
		<path fill="#CCCCCC" d="M469.723,463.695c0,3.59-2.91,6.5-6.5,6.5h-50.334c-3.59,0-6.5-2.91-6.5-6.5v-4.155
			c0-3.59,2.91-6.5,6.5-6.5h50.334c3.59,0,6.5,2.91,6.5,6.5V463.695z"/>
		<text transform="matrix(1 0 0 1 413.3833 465.7817)" font-size="12">birthDate</text>
	</g>
</svg>

E não para por ai galera, você pode sair especificando qualquer coisa a adicional conforme achar necessário, mas acho isso aqui já é o necessário pra dar uma boa sacada na idéia né. Estou bastante satisfeito de ter finalmente terminado este post, pois além de tudo, minha dívida de Heinekens com <a href="http://twitter.com/caio_gondim">Caio Gondim</a> para de aumentar hoje (um dia explico essa história)!

No próximo post irei realizar a marcação semântica aqui no Loop Infinito e mostrarei o que mudou. Até lá!

<aside class="fonte">
	<h3>Referência</h3>
	<ul>
		<li>→<a href="http://en.wikipedia.org/wiki/Microdata_(HTML)">Microdata</a> <span class="comment">//wikipedia</span></li>
		<li>→<a href="http://schema.org">Schema.org</a></li>
		<li>→<a href="http://schema.org/docs/gs.html">Getting started</a> <span class="comment">//schema.org</span></li>
		<li>→<a href="http://desenvolvimentoparaweb.com/html/microdata-api-schema-org-significado-html/">Microdata API e Schema.org: dando significado ao HTML</a> <span class="comment">//dpw</span></li>
	</ul>
</aside>