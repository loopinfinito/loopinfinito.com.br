---
title: <span>Customizando</span> widgets de formulários web
layout: post
sitemap_priority: 1.0
sitemap_frequency: never
author: Almir Filho
author_link: http://twitter.com/almirfilho
resumo: Hoje vamos descobrir como estilizar elementos de formulário e os deixarmos assim, como essa máquina da foto acima, totalmente customizada.
image: images/posts/2012-08-08-customizando-widgets-de-formularios-web.jpg
tags: CSS web-forms
keywords: css, css3, web-forms, web forms, formulario web, formulario-web, webkit, customizacao, widget, range, radio, checkbox
comments: true
---
<style>
#exemplo-radio input[type=radio] {
    appearance: checkbox;
    -o-appearance: checkbox;
    -ms-appearance: checkbox;
    -moz-appearance: checkbox;
    -khtml-appearance: checkbox;
    -webkit-appearance: checkbox;
}
.example label {
	margin: 0px 15px 0px 5px;
}
.example .div {
	border-bottom: 1px solid #ddd;
	padding-bottom: 15px;
	margin-bottom: 15px;
}
input#rolling-stones {
	appearance: none;
    -o-appearance: none;
    -ms-appearance: none;
    -moz-appearance: none;
    -khtml-appearance: none;
    -webkit-appearance: none;
    background-color: rgba(0,0,0,0.1);
    background-image: -webkit-linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0));
    width: 300px;
    height: 6px;
    border-radius: 6px;
    -o-border-radius: 6px;
    -ms-border-radius: 6px;
    -moz-border-radius: 6px;
    -khtml-border-radius: 6px;
    -webkit-border-radius: 6px;
    border: 1px solid rgba(0,0,0,0.5);
    box-shadow: 1px 1px 0px white;
    -o-box-shadow: 1px 1px 0px white;
    -ms-box-shadow: 1px 1px 0px white;
    -moz-box-shadow: 1px 1px 0px white;
    -khtml-box-shadow: 1px 1px 0px white;
    -webkit-box-shadow: 1px 1px 0px white;
}
input#rolling-stones::-webkit-slider-thumb {
	appearance: none;
    -o-appearance: none;
    -ms-appearance: none;
    -moz-appearance: none;
    -khtml-appearance: none;
    -webkit-appearance: none;
    width: 8px;
    height: 18px;
    background-color: #999;
    background-image: -webkit-linear-gradient(#999,#666);
    border-radius: 8px;
    -o-border-radius: 8px;
    -ms-border-radius: 8px;
    -moz-border-radius: 8px;
    -khtml-border-radius: 8px;
    -webkit-border-radius: 8px;
    box-shadow: 1px 1px 2px rgba(0,0,0,0.2);
    -o-box-shadow: 1px 1px 2px rgba(0,0,0,0.2);
    -ms-box-shadow: 1px 1px 2px rgba(0,0,0,0.2);
    -moz-box-shadow: 1px 1px 2px rgba(0,0,0,0.2);
    -khtml-box-shadow: 1px 1px 2px rgba(0,0,0,0.2);
    -webkit-box-shadow: 1px 1px 2px rgba(0,0,0,0.2);
    border: 1px solid rgba(0,0,0,0.3);
}
input#rolling-stones::-webkit-slider-thumb:hover {
	background-image: none;
	background-color: #777;
}
input#rolling-stones::-webkit-slider-thumb:active {
	background-image: none;
	background-color: #555;
}
input#rolling-stones:focus {
	outline: none;
}
input#rolling-stones:focus::-webkit-slider-thumb {
	outline: none;
	box-shadow: 0px 0px 5px 1px red;
    -o-box-shadow: 0px 0px 5px 1px red;
    -ms-box-shadow: 0px 0px 5px 1px red;
    -moz-box-shadow: 0px 0px 5px 1px red;
    -khtml-box-shadow: 0px 0px 5px 1px red;
    -webkit-box-shadow: 0px 0px 5px 1px red;
}
input.estilizado {
    /* removendo a aparência padrão (Chrome e Safari) */
    appearance: none;
    -o-appearance: none;
    -ms-appearance: none;
    -moz-appearance: none;
    -khtml-appearance: none;
    -webkit-appearance: none;
    /* estilização */
    border: 1px solid rgba( 0,0,0,0.5 );
    box-shadow: 1px 1px 0px white;
    -o-box-shadow: 1px 1px 0px white;
    -ms-box-shadow: 1px 1px 0px white;
    -moz-box-shadow: 1px 1px 0px white;
    -khtml-box-shadow: 1px 1px 0px white;
    -webkit-box-shadow: 1px 1px 0px white;
    background-color: white;
    background-image: -webkit-linear-gradient( rgba(0,0,0,0.2),rgba(0,0,0,0) );
}
/* quando o input estiver selecionado */
input.estilizado:checked {
    background-image: none;
    background-color: rgba( 0,0,0,0.3 );
}
/* quando um input estiver em foco */
input.estilizado:focus {
    outline: none;
    box-shadow: 0px 0px 5px 1px red;
    -o-box-shadow: 0px 0px 5px 1px red;
    -ms-box-shadow: 0px 0px 5px 1px red;
    -moz-box-shadow: 0px 0px 5px 1px red;
    -khtml-box-shadow: 0px 0px 5px 1px red;
    -webkit-box-shadow: 0px 0px 5px 1px red;
}
/* estilos para o checkbox */
input[type=checkbox].estilizado {
    width: 12px;
    height: 12px;
    border-radius: 3px;
    -o-border-radius: 3px;
    -ms-border-radius: 3px;
    -moz-border-radius: 3px;
    -khtml-border-radius: 3px;
    -webkit-border-radius: 3px;
}
/* quando um checkbox estiver selecionado */
input[type=checkbox].estilizado:checked:before {
    content: "✔";
    font-size: 15px;
    color: rgba( 0,0,0,0.5 );
    position: relative;
    top: -6px;
    left: 2px;
}
/* estilos para o radio button */
input[type=radio].estilizado {
    width: 13px;
    height: 13px;
    border-radius: 7px;
    -o-border-radius: 7px;
    -ms-border-radius: 7px;
    -moz-border-radius: 7px;
    -khtml-border-radius: 7px;
    -webkit-border-radius: 7px;
}
/* quando um radio button estiver selecionado */
input[type=radio].estilizado:checked:before {
    content: "•";
    font-size: 15px;
    color: #333;
    position: relative;
    top: -5px;
    left: 1px;
}
</style>

No [post anterior](http://loopinfinito.com.br/2012/07/17/sou-dom-shadow-dom/ "Sou DOM, Shadow DOM") falamos sobre *Shadow DOM*
e entendemos a razão pela qual não é possível estilizar **widgets de formulário** (*selects*, *radio buttons*, *checkboxes*,
*ranges*, etc). Contudo, não é necessário esperar que a API Shadow DOM seja disponibilizada para que já possamos começar a
brincar de estilizar nossos widgets, pois o CSS3 já define algumas propriedades e seletores específicos de vários componentes
de formulário.

Hoje vamos descobrir como estilizar elementos de formulário e os deixarmos assim, como essa máquina da foto acima, totalmente
customizada.

O CSS3 define a propriedade `appearance`, que nos permite fazer com que um elemento pareça com componentes de UI.

<p class="obs"><strong>OBS.:</strong> Para visualizar os exemplos deste post corretamente, você tem que estar usando um navegador baseado em
Webkit (<strong>Google Chrome</strong> ou <strong>Safari</strong>).</p>

## Show me the code

Neste primeiro exemplo vamos fazer uma coisa bem simples, mudaremos a aparência de um grupo de radio buttons:

{% highlight html %}
<input type="radio" name="pinkfloyd" id="syd" />
<label for="syd">Syd Barret</label>

<input type="radio" name="pinkfloyd" id="david" />
<label for="david">David Gilmour</label>

<input type="radio" name="pinkfloyd" id="roger" />
<label for="roger">Roger Waters</label>
{% endhighlight %}

Este trecho de código gera os widgets abaixo:

<div class="img example bordered">
	<input type="radio" name="pinkfloyd" id="syd" />
	<label for="syd">Syd Barrett</label>

	<input type="radio" name="pinkfloyd" id="david" />
	<label for="david">David Gilmour</label>

	<input type="radio" name="pinkfloyd" id="roger" />
	<label for="roger">Roger Waters</label>
</div>

Agora usaremos a propriedade `appearance` para alterar a aparência dos *radio buttons*.
Dentre tantas opções, escolhi a que achei mais didática para este exemplo – o **checkbox** –, mas você pode escolher
outra opção qualquer.
No CSS, precisamos apenas:

{% highlight css %}
input[type=radio] {
    -webkit-appearance: checkbox; /* Chrome e Safari */
    -moz-appearance: checkbox; /* Firefox */
    appearance: checkbox; /* ainda não é suportado */
}
{% endhighlight %}

Como podemos ver a seguir, a aparência dos radio buttons mudou para a mesma aparência das checkboxes, mas não se enganem,
os widgets ainda são de fato radio buttons, podemos constatar isto pelo fato de que apenas uma das opções abaixo pode ser
selecionada ao mesmo tempo. Teste você mesmo!

<div class="img example bordered" id="exemplo-radio">
	<input type="radio" name="pinkfloyd" id="syd1" />
	<label for="syd1" style="margin: 0px 15px 0px 5px;">Syd Barrett</label>

	<input type="radio" name="pinkfloyd" id="david1" />
	<label for="david1" style="margin: 0px 15px 0px 5px;">David Gilmour</label>

	<input type="radio" name="pinkfloyd" id="roger1" />
	<label for="roger1" style="margin: 0px 15px 0px 5px;">Roger Waters</label>
</div>

## Customizando o input range

Show de bola! Agora, o próximo experimento será bem mais legal, desta vez iremos estilizar um **slider** de formulário
como bem entendermos – `<input type="range">`, cuja aparência padrão é:

<div class="img example bordered" style="text-align:center;">
	<input type="range" />
</div>

O que devemos fazer primeiramente é **remover a aparência padrão** setando a propriedade `appearance` para `none`, isso nos
dará a liberdade de modificar qualquer propriedade do elemento, só assim poderemos começar a customização do widget.
Vamos então dar continuidade com os passos iniciais no nosso *widget de range* de *id* `#rolling-stones`:

{% highlight css %}
input#rolling-stones {
    /* removendo a aparência padrão (Chrome e Safari) */
    -webkit-appearance: none;
    /* estilização */
    width: 300px;
    height: 6px;
    border-radius: 6px;
    border: 1px solid rgba( 0,0,0,0.5 );
    box-shadow: 1px 1px 0px white;
    background-color: rgba( 0,0,0,0.1 );
    background-image: -webkit-linear-gradient( rgba(0,0,0,0.2), rgba(0,0,0,0) );
}
{% endhighlight %}

Após remover a aparência padrão com `-webkit-appearance: none`, nosso elemento vai ficar com um fundo branco, e é ai que
as estilizações acima entram em cena.
Mas podemos perceber que embora o fundo já tenha sido customizado, seu pequeno botão circular que desliza sobre a trilha (*slider thumb*)
ainda permanecerá com sua aparência padrão, isso ocorre porque este botão é um **outro elemento** padrão encapsulado dentro do
*input range*, e para mudarmos sua aparência padrão deveremos usar um seletor especial `::slider-thumb` – que por enquanto
apenas o Webkit (Chrome e Safari) dá suporte através da flag `-webkit`. Customizando o botão:

{% highlight css %}
input#rolling-stones::-webkit-slider-thumb {
    /* removendo a aparência padrão (Chrome e Safari) */
    -webkit-appearance: none;
    /* estilização */
    width: 8px;
    height: 18px;
    border-radius: 8px;
    border: 1px solid rgba( 0,0,0,0.3 );
    box-shadow: 1px 1px 2px rgba( 0,0,0,0.2 );
    background-color: #999;
    background-image: -webkit-linear-gradient( #999, #666 );
}
{% endhighlight %}

A parte seguinte é mais relacionada à interação do widget com o usuário.
Especificamos os comportamentos para quando há foco (`:focus`), para quando passamos a seta do mouse em cima do botão (`:hover`)
e para quando clicamos e arrastamos o botão (`:active`):

{% highlight css %}
input#rolling-stones:focus {
    outline: none;
}

input#rolling-stones:focus::-webkit-slider-thumb {
    outline: none;
    box-shadow: 0px 0px 5px 1px red;
}

input#rolling-stones::-webkit-slider-thumb:hover {
    background-image: none;
    background-color: #777;
}

input#rolling-stones::-webkit-slider-thumb:active {
    background-image: none;
    background-color: #555;
}
{% endhighlight %}

E eis o resultado! Recomendo testar também o *focus* (aperte *tab* e depois ← e →).

<div class="img example bordered" id="exemplo-range" style="text-align:center;">
	<input type="range" id="rolling-stones" tabindex="1" />
</div>

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
			<td class="property"><code>appearance</code></td>
			<td>1.0<br/><code class="small">-webkit</code></td>
			<td>3.0<br/><code class="small">-webkit</code></td>
			<td>1.0<br/><code class="small">-moz</code></td>
			<td>--</td>
			<td>--</td>
		</tr>
		<tr>
			<td class="property"><code>::slider-thumb</code></td>
			<td>20 *<br/><code class="small">-webkit</code></td>
			<td>5.1 *<br/><code class="small">-webkit</code></td>
			<td>--</td>
			<td>--</td>
			<td>--</td>
		</tr>
	</tbody>
	<tfoot>
		<tr>
			<td colspan="6">* Suporte inicial desconhecido. Testado nessas versões apenas.</td>
		</tr>
	</tfoot>
</table>

No momento em que escrevo este post, só os navegadores Mozilla Firefox, Google Chrome e Safari dão suporte (apenas parcial
por enquanto) à propriedade `appearance`, ou seja, `-moz-appearance` (Firefox) e `-webkit-appearance` (Chrome e Safari).
O problema é que cada uma dessas implementações diferem bastante uma da outra, no Firefox por exemplo, `-moz-appearance`
pode assumir [106 valores](https://developer.mozilla.org/en/CSS/-moz-appearance "-moz-appearance") diferentes, enquanto
que no Webkit (Chrome e Safari), `-webkit-appearance` reconhece apenas [43 valores](http://css-infos.net/property/-webkit-appearance "-webkit-appearance").
Já o pseudo-elemento `::slider-thumb` é suportado apenas pelo Webkit e ainda não faz parte da especificação W3C.

## Customizando checkbox e radio button

Agora é a vez de fazermos o mesmo com as checkboxes e radio buttons.
Abaixo temos o HTML dos nossos widgets, criei a classe `.estilizado` apenas para enfatizar o reaproveitamento de CSS logo a seguir.

{% highlight html %}
<!-- checkboxes -->
<input class="estilizado" type="checkbox" id='c1' />
<label for="c1">Paul</label>
<input class="estilizado" type="checkbox" id='c2' />
<label for="c2">George</label>
<input class="estilizado" type="checkbox" id='c3' />
<label for="c3">John</label>
<input class="estilizado" type="checkbox" id='c4' />
<label for="c4">Ringo</label>

<!-- radio buttons -->
<input class="estilizado" type="radio" name="band" id="r1" />
<label for="r1">Motörhead</label>
<input class="estilizado" type="radio" name="band" id="r2" />
<label for="r2">AC/DC</label>
<input class="estilizado" type="radio" name="band" id="r3" />
<label for="r3">Motley Crue</label>
{% endhighlight %}

Abaixo o resultado padrão do código acima:

<div class="img example bordered">
	<div class="div">
		<input type="checkbox" id='c1' />
		<label for="c1">Paul</label>
		<input type="checkbox" id='c2' />
		<label for="c2">George</label>
		<input type="checkbox" id='c3' />
		<label for="c3">John</label>
		<input type="checkbox" id='c4' />
		<label for="c4">Ringo</label>
	</div>
	<div>
		<input type="radio" name="band" id="r1" />
		<label for="r1">Motörhead</label>
		<input type="radio" name="band" id="r2" />
		<label for="r2">AC/DC</label>
		<input type="radio" name="band" id="r3" />
		<label for="r3">Motley Crue</label>
	</div>
</div>

Agora vamos ao que interessa, CSS! Começamos definindo a classe `.estilizado`, ou seja, as propriedades inerentes tanto às
*checkboxes* quanto aos *radio buttons*.

{% highlight css %}
input.estilizado {
    /* removendo a aparência padrão (Chrome e Safari) */
    -webkit-appearance: none;
    /* estilização */
    border: 1px solid rgba( 0,0,0,0.5 );
    box-shadow: 1px 1px 0px white;
    background-color: white;
    background-image: -webkit-linear-gradient( rgba(0,0,0,0.2),rgba(0,0,0,0) );
}

/* quando o input estiver selecionado */
input.estilizado:checked {
    background-image: none;
    background-color: rgba( 0,0,0,0.3 );
}

/* quando o input estiver em foco */
input.estilizado:focus {
    outline: none;
    box-shadow: 0px 0px 5px 1px red;
}
{% endhighlight %}

Feito isso, agora vamos aos estilos adicionais das **checkboxes**:

{% highlight css %}
input[type=checkbox].estilizado {
    width: 12px;
    height: 12px;
    border-radius: 3px;
}

/* quando o checkbox estiver selecionado */
input[type=checkbox].estilizado:checked:before {
    content: "✔";
    font-size: 15px;
    color: rgba( 0,0,0,0.5 );
    position: relative;
    top: -6px;
    left: 2px;
}
{% endhighlight %}

E continuando com os estilos adicionais dos **radio buttons**:

{% highlight css %}
input[type=radio].estilizado {
    width: 13px;
    height: 13px;
    border-radius: 7px;
}

/* quando o radio button estiver selecionado */
input[type=radio].estilizado:checked:before {
    content: "•";
    font-size: 15px;
    color: #333;
    position: relative;
    top: -5px;
    left: 1px;
}
{% endhighlight %}

O resultado encontra-se abaixo, teste você mesmo (o *focus* também)!

<div class="img example bordered">
	<div class="div">
		<input class="estilizado" type="checkbox" id='c10' tabindex="2" />
		<label for="c10">Paul</label>
		<input class="estilizado" type="checkbox" id='c20' tabindex="3" />
		<label for="c20">George</label>
		<input class="estilizado" type="checkbox" id='c30' tabindex="4" />
		<label for="c30">John</label>
		<input class="estilizado" type="checkbox" id='c40' tabindex="5" />
		<label for="c40">Ringo</label>
	</div>
	<div>
		<input class="estilizado" type="radio" name="band" id="r10" tabindex="6" />
		<label for="r10">Motörhead</label>
		<input class="estilizado" type="radio" name="band" id="r20" tabindex="7" />
		<label for="r20">AC/DC</label>
		<input class="estilizado" type="radio" name="band" id="r30" tabindex="8" />
		<label for="r30">Motley Crue</label>
	</div>
</div>

## Futuramente

Eu gostaria de continuar aqui com outros widgets como `<select>` e os *inputs* dos tipos `file`, `number`, `color`, `datetime` e
seus variantes, mas não encontrei mais seletores especiais – com exceção do seletor
`::-webkit-inner-spin-button` e `::-webkit-outer-spin-button` para `<input type="number">`, que infelizmente não nos
permitem fazer nada de muito legal.

No caso do `<select>`, sabemos que este já é parcialmente customizável, pois podemos alterar a aparência do campo de texto, mas não
podemos ainda modificar a sua *lista de opções* e nem o seu *botão* – a não ser, colocando uma imagem de fundo para o elemento inteiro, como
[nestes exemplos](http://37signals.com/svn/posts/2609-customizing-web-forms-with-css3-and-webkit/) (em inglês), mas não acho isso nada legal =P

Acredito que o suporte a estes tipos de customização está melhorando muito rápido (em parte graças ao Webkit),
e aos poucos estamos caminhando para finalmente ter o controle total de todas essas ferramentas que tanto usamos.

<aside class="fonte">
	<h3>Referência</h3>
	<ul>
		<li>→<a href="http://loopinfinito.com.br/2012/07/17/sou-dom-shadow-dom/" alt="Sou DOM, Shadow DOM" title="Sou DOM, Shadow DOM">Sou DOM, Shadow DOM</a> <span class="comment">//loop infinito</span></li>
		<li>→<a href="http://www.w3schools.com/cssref/css3_pr_appearance.asp" alt="CSS3 appearance property" title="CSS3 appearance property">CSS3 appearance property</a> <span class="comment">//w3schools</span></li>
		<li>→<a href="https://developer.mozilla.org/en-US/docs/CSS/-moz-appearance" alt="-moz-appearance" title="-moz-appearance">-moz-appearance</a> <span class="comment">//MDN</span></li>
		<li>→<a href="http://css-infos.net/property/-webkit-appearance" alt="-webkit-appearance" title="-webkit-appearance">-webkit-appearance</a></li>
		<li>→<a href="http://37signals.com/svn/posts/2609-customizing-web-forms-with-css3-and-webkit/" alt="Customizing web forms with CSS3 and Webkit" title="Customizing web forms with CSS3 and Webkit">Customizing web forms with CSS3 and Webkit</a> <span class="comment">//37signals</span></li>
	</ul>
</aside>