---
title: Imagens <span>responsivas</span>
layout: post
author: Almir Filho
author_link: http://twitter.com/almirfilho
resumo: Hoje falaremos de um assunto bastante acalourado no momento, <strong>Imagens reponsivas</strong>. Apresentar-vos-ei várias alternativas que desenvolvedores têm encontrado para tentar resolver este problema. Falaremos também sobre os debates e propostas que já estão rolando há um certo tempo no W3C e o que vem por aí.
image: images/posts/2012-08-13-imagens-responsivas.jpg
tags: HTML imagem
keywords: imagens reposnsivas, imagem, responsiva, responsive image, html5, html, srcset, picture element, picture, source, w3c, desktop, smartphone, tablet, adaptive images
comments: true
---

Web [*design responsivo*](http://www.alistapart.com/articles/responsive-web-design/) tem sido um tema **muito** recorrente desde 2010 até hoje graças ao grande crescimento e surgimento
de dispositivos móveis de variados tamanhos (situação agravada com o surgimento de telas retina como o iPhone 4 e o novo iPad),
e por isso, os desenvolvedores de *front-end* passaram a ter uma – apenas *uma*? –
responsabilidade adicional: desenvolver e manter mais uma penca de layouts.

Neste contexto, basicamente quase toda a comunidade de desenvolvimento *front-end* passou a ansiar por um "código único" que
pudesse desempenhar os diversos papéis necessários em diferentes meios, ou seja, um código que fosse **responsivo**, e
parafraseando O Senhor dos Anéis, *"Um código para a todos dominar"* =P

Hoje sabemos que já existem diversas técnicas e melhores práticas para o desenvolvimento de interfaces responsivas – foi daí
que nasceram as [*media queries*](http://mediaqueri.es/about/ "Media Queries"), e que acabaram virando uma [recomendação W3C](http://www.w3.org/TR/css3-mediaqueries/ "Media Queries")
[muito recentemente](http://www.webmonkey.com/2012/06/its-official-css-media-queries-are-a-web-standard/ "CSS Media Queries are a Web Standard") –,
mas um problema que ainda persiste sem uma solução adequada (leia-se: padronizada) é a questão das **imagens responsivas**.

Hoje apresentar-vos-ei não uma solução, mas várias alternativas que desenvolvedores têm encontrado para tentar resolver este
problema. Falaremos também sobre os debates e propostas que já estão rolando há um certo tempo no
[Grupo da Comunidade de Imagens Responsivas](http://www.w3.org/community/respimg/ "Responsive Images Community Group") (em inglês)
do W3C.

## O problema

Por mais otimizadas que sejam as imagens de um site para desktops, na maioria das vezes estas imagens ainda são bastante
pesadas para uma conexão móvel, e imagens otimizadas para mobile são de demasiada baixa qualidade para visualizadores de desktop.
Isso sem contar as diferentes resoluções de monitores desktop que tempos hoje em dia no mercado, acredito que a resolução
800x600px já tenha morrido há algum tempo, mas a 1024x768px ainda vai durar um bom tempo por ai.

Os monitores full HD já estão em cena há algum tempo também, e logo de cara, querer comparar uma tela de 1024px de largura com uma de 1920px revela uma
enorme discrepância, isto **apenas considerando as telas desktop**, para não mencionarmos as dimensões maiores que full HD
(como por exemplo o novo iPad Retina e o novo Macbook Pro 15,4" Retina que tem 2880x1800px) e os
dispositivos móveis como celulares e tablets – cada qual com sua variação de tamanhos.

<figure>
	<img src="/images/posts/2012-08-13-imagens-responsivas1.jpg" alt="" />
</figure>

Então, diante desses fatos, como fazer com que uma imagem na minha aplicação web possa ser exibida com a qualidade ideal em
toda essa gama de dispositivos sem ocasionar um enorme desperdício de banda? E pior ainda, a **experiência
do usuário** que utiliza minha aplicação ou visita minha página através de um celular acaba indo **pro lixo** pela grande demora no download de
imagens, e talvez eu acabe perdendo usuários/clientes por isso.

## O ideal

Bem, o ideal, **IDEAL mesmo** seria que não precisássemos ter nenhum trabalho extra pra isso, que o servidor pudesse identificar
a resolução (ou a velocidade da banda) do usuário e, dinamicamente gerar uma imagem novinha em folha para aquela determinada configuração.
**Mas é claro que isto não acontece**, e mesmo assim, seria totalmente inviável (pelo menos hoje em dia).
Coitado dos servidores (ou do nosso bolso).

## O ideal cabível

Então, se tratando de imagens de bitmap – pois não temos este problema com imagens vetorizadas como SVG –, a solução
ideal parece ser bem simples: servir uma imagem de tamanho diferente para cada grupo de resoluções, onde cada uma destas
imagens seriam e adequadas para uma certa gama de dispositivos.

Por exemplo: Podemos considerar um imagem que queremos servir de forma responsiva tanto para desktops quanto para celulares.
Poderíamos considerar 3 diferentes tamanhos para esta imagem para os determinados dispositivos:

- 320px - Smartphones com resolução padrão;
- 1024px - iPhone Retina (smartphones com resoluções altas), tablets e desktops com resolução padrão;
- 1600px - iPad Retina (tablets com resoluções altas)Desktops de alta resolução.

Com isto, já teríamos um uso mais optimizado da distribuição dessa imagem, melhorando a experiência do usuário nos 3 exemplos.

### O que mudaria

O que mudaria para nós, desenvolvedores? Acho que duas coisas:
1) teríamos que disponibilizar cópias em tamanhos diferentes da mesma imagem. No caso do exemplo acima seriam 3 de cada.
2) haveria alguma mudança na marcação, ou seja, alguma marcação especial no nosso código HTML. (Veremos mais adiante que isso realmente será necessário.)

## <del>Gambiarras</del> Soluções atuais

Sabemos que ainda não há padronização para isso, mas **o problema é atual**. Há um monte de técnicas que já tentam lidar com esse
problema, isto é, soluções que nos ajudam a servir a imagem correta para cada ocasião. Todas elas trabalham de uma forma um
pouco diferente uma da outra, e dependendo dos seus requisitos, é possível fazer a melhor escolha de acordo com o que você
precisa para o seu projeto.
Abaixo coloquei uma lista de 8 dessas técnicas com seus respectivos links caso você queira saber mais sobre cada uma delas.

- [Responsive images](http://filamentgroup.com/lab/responsive_images_experimenting_with_context_aware_image_sizing/ "Responsive Images") (Filament Group)
- [Adaptive Images](http://adaptive-images.com/ "Adaptive Images")
- [HiSRC](https://github.com/teleject/hisrc "HiSRC")
- [Picturefill](https://github.com/scottjehl/picturefill "Picturefill")
- [Responsive Enhance](https://github.com/joshje/Responsive-Enhance "Image Enhance")
- [Sencha.IO](http://www.sencha.com/products/io "Sencha.IO")
- [rwdImages](https://github.com/stowball/jQuery-rwdImages "rwdImages")
- [Foresight.js](https://github.com/adamdbradley/foresight.js "Foresight.js")

[Este post](http://css-tricks.com/which-responsive-images-solution-should-you-use/ "Which responsive images solution should you use?")
(em inglês) ajuda a decidir qual técnica é mais adequada para cada caso, existem soluções usando marcações especiais,
JavaScript, técnicas *server-side* e algumas mesclam várias dessas alternativas.
Não irei entrar em detalhes sobre isto pois este não é o intuito do post, mas recomendo a leitura.

## Enquanto isso, no W3C...

Beleza, agora vamos falar do que interessa mesmo, a pergunta que não quer calar: **quando vamos ter esse poder nativamente?**

Como falei no início do post, existe um [Grupo da Comunidade de Imagens Responsivas](http://www.w3.org/community/respimg/ "Responsive Images Community Group")
no W3C que discute sobre algumas alternativas a serem incluídas no **HTML.next** (próxima versão do HTML) que serão
responsáveis por resolver o problema das imagens responsivas.
Vamos falar das 2 principais idéias discutidas no grupo: o atributo `srcset` e o elemento `<picture>`.

### O atributo srcset

Uma das primeiras propostas foi a criação de um atributo `srcset` para o elemento `<img>`.
Sua função seria especificar outras imagens e suas respectivas proporções em relação à imagem em `src`.
Veja o exemplo abaixo:

{% highlight html %}
<img alt="Uma cerva gelada!"
     src="heineken_pequena.jpg"
     srcset="heineken_media.jpg 2x, heineken_grande.jpg 3x" />
{% endhighlight %}

No código acima temos então a imagem `heineken_pequena.jpg` como sendo a padrão em `src` – no caso de a imagem estar sendo enviada para um
celular –, e em `srcset` temos as outras imagens de tamanhos diferentes: `heineken_media.jpg` é 2 vezes maior e `heineken_grande.jpg`
é 3 vezes maior que a imagem padrão.

### O elemento {{ "<picture>" | escape }}

Com uma proposta bem diferente, aqui teríamos um novo elemento `<picture>` que especificaria várias imagens utilizando-se de
um elemento já existente no HTML5: o `<source>`.

Sabemos que `<source>` é usado dentro das *tags* `<audio>` e `<video>` para especificar múltiplas alternativas de mídias
a serem tocadas de acordo com os *codecs* disponíveis no navegador ou sistema operacional do usuário. Contudo, dentro de
`<picture>`, `<source>` desempenha um papel um pouco diferente pois a escolha da mídia não depende de *codecs* e sim da
resolução de tela do usuário.

{% highlight html %}
<picture alt="Uma cerva gelada!">
    <source src="heineken_pequena.jpg" />
    <source media="min-width:800px" src="heineken_media.jpg" />
    <source media="min-width:1280px" src="heineken_grande.jpg" />
    <!-- fallback para navegadores sem suporte -->
    <img src="heineken_media.jpg" alt="Uma cerva gelada!" />
</picture>
{% endhighlight %}

Acima teríamos o mesmo resultado da alternativa `srcset`, mas com uma sintaxe totalmente diferente.
A seleção do `<source>` acontece por meio do atributo `media`, que utiliza-se de *media queries*.
Apesar de ter mais código, eu prefiro esta alternativa, pois o código sempre fica mais organizado e de mais fácil leitura.
Imagine que temos que servir uma imagem "responsivamente" (acho que isso não é nem uma palavra) de 5 maneiras e seus nomes
não são nada amigáveis. Rapidamente o código vai se tornando confuso e difícil de ler.

### A proposta atual

A [última proposta](http://www.w3.org/community/respimg/wiki/Picture_Element_Proposal "Picture Element Proposal")
feita pelo WHATWG é uma fusão das duas acima, ou seja, a criação do elemento `<picture>` com a possibilidade
de também utilizar o atributo `srcset` nos elementos `<source>`:

{% highlight html %}
<picture alt="Uma cerva gelada!">
    <source srcset="heineken_pequena1.jpg 1x, heineken_pequena2.jpg 2x" />
    <source media="min-width:800px" srcset="heineken_media1.jpg 1x, heineken_media2.jpg 2x" />
    <source media="min-width:1280px" srcset="heineken_grande1.jpg 1x, heineken_grande2.jpg 2x" />
    <!-- fallback para navegadores sem suporte -->
    <img src="heineken_media.jpg" alt="Uma cerva gelada!" />
</picture>
{% endhighlight %}

## Conclusões

Então pessoal, gostaria que todo mundo que lesse este post comentasse abaixo suas opiniões sobre essa questão das imagens
responsivas e sobre qual é a solução mais correta a ser incluída nos padrões futuramente: `srcset`, `<picture>` ou os dois?
Talvez eu não tenha entendido o por quê dessa última proposta mista, particularmente eu acho-a redundante e prefiro o
elemento `<picture>` mais simples.

Contudo, de qualquer forma é bom saber que o assunto está sendo discutido e que estão procurando a melhor solução.
Agora é esperar pra ver, até mais!

<h2 id="atualizacoes">Atualizações</h2>
<div class="update">
    <h3>23/08/2012</h3>
    <p><strong>Ótimas notícias!</strong>
        De acordo com <a href="http://filamentgroup.com/lab/thetwospecs/" alt="The two specs" title="The two specs">este post</a>
        do Filament Group, o elemento <code>&lt;picture&gt;</code> está provisioramente marcado para ser
        <a href="http://www.w3.org/community/respimg/2012/08/04/picture-in-the-html5-spec/">incluso ao HTML5</a>,
        em vez do <em>HTML.next</em>. Ou seja, parece que veremos uma solução nativa para imagens responsivas logo logo, visto que
        o HTML WG (Grupo do HTML5 do W3C) já está trabalhando numa especificação formal que deverá ficar pronta nas <strong>próximas
        semanas</strong>.</p>
</div>
<div class="update">
    <h3>29/08/2012</h3>
    <p><strong>Publicado o Draft no W3C.</strong>
        Saindo do forno, pessoal! Hoje finalmente foi publicado o <em>draft</em> da proposta para imagens responsivas no W3C.
        <a href="http://dvcs.w3.org/hg/html-proposals/raw-file/tip/responsive-images/responsive-images.html">Clique aqui para ver</a>.
    </p>
</div>

<aside class="fonte">
	<h3>Referência</h3>
	<ul>
		<li>→<a href="http://www.w3.org/community/respimg/" alt="Responsive Images Community Group" title="Responsive Images Community Group">Responsive Images Community Group</a> <span class="comment">//W3C Community</span></li>
		<li>→<a href="http://css-tricks.com/which-responsive-images-solution-should-you-use/" alt="Which responsive images solution should you use?" title="Which responsive images solution should you use?">Which responsive images solution should you use?</a> <span class="comment">//CSS Tricks</span></li>
        <li>→<a href="http://5by5.tv/webahead/25" alt="Responsive Images with Mat Marquis" title="Responsive Images with Mat Marquis">The Web Ahead #25: Responsive Images with Mat Marquis (Podcast)</a> <span class="comment">//5by5</span></li>
		<li>→<a href="http://www.w3.org/community/respimg/wiki/Picture_Element_Proposal" alt="Picture Element Proposal" title="Picture Element Proposal">Picture Element Proposal</a> <span class="comment">//W3C</span></li>
		<li>→<a href="http://html5doctor.com/html5-adaptive-images-end-of-round-one/" alt="HTML5 adaptive images: end of round one" title="HTML5 adaptive images: end of round one">HTML5 adaptive images: end of round one</a> <span class="comment">//HTML5 Doctor</span></li>
		<li>→<a href="http://viewportindustries.com/blog/automatic-responsive-images-in-wordpress/" alt="Automatic Responsive Images in Wordpress" title="Automatic Responsive Images in Wordpress">Automatic Responsive Images in Wordpress</a></li>
	</ul>
</aside>