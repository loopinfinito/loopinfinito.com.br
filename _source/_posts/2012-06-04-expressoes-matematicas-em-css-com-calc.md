---
title: Expressões matemáticas em CSS com <span class="light">calc()</span>
layout: post
author: Almir Filho
author_link: http://twitter.com/almirfilho
resumo: Um novo recurso bastante interessante do CSS3 é a função <code>calc()</code>. Com esta função agora é possível calcularmos valores de <strong>expressões matemáticas</strong> diretamente no CSS! <em>Like a rockstar coder</em>.
image: images/posts/2012-06-04-isaac-newton.jpg
tags: CSS
keywords: css, css3, calc, matematica, calculo, unidades css
comments: true
---
<script type="text/javascript">
$(document).ready( function(){
	$('#btn').click( function(){
		$('.input').each( function( i, e ){
			var a = $(e).attr('data-attr');
			var val = $(e).val();
			$('#acdc').css( a, '-webkit-calc('+val+')' ).css( a, '-moz-calc('+val+')' ).css( a, '-ms-calc('+val+')' ).css( a, '-o-calc('+val+')' ).css( a, 'calc('+val+')' );
		});
	});
});
</script>
<style type="text/css">

#stage {
	width: 700px;
	height: 432px;
	overflow: hidden;
	background-color:#333;
	background-image: -webkit-linear-gradient(white 2px, transparent 2px),
	  -webkit-linear-gradient(0, white 2px, transparent 2px),
	  -webkit-linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px),
	  -webkit-linear-gradient(0, rgba(255,255,255,.3) 1px, transparent 1px);
	background-image: -moz-linear-gradient(white 2px, transparent 2px),
	  -moz-linear-gradient(0, white 2px, transparent 2px),
	  -moz-linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px),
	  -moz-linear-gradient(0, rgba(255,255,255,.3) 1px, transparent 1px);
	background-image: -ms-linear-gradient(white 2px, transparent 2px),
	  -ms-linear-gradient(0, white 2px, transparent 2px),
	  -ms-linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px),
	  -ms-linear-gradient(0, rgba(255,255,255,.3) 1px, transparent 1px);
	background-image: -o-linear-gradient(white 2px, transparent 2px),
	  -o-linear-gradient(0, white 2px, transparent 2px),
	  -o-linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px),
	  -o-linear-gradient(0, rgba(255,255,255,.3) 1px, transparent 1px);
	background-image: linear-gradient(white 2px, transparent 2px),
	  linear-gradient(0, white 2px, transparent 2px),
	  linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px),
	  linear-gradient(0, rgba(255,255,255,.3) 1px, transparent 1px);
	background-size:100px 100px, 100px 100px, 20px 20px, 20px 20px;
	background-position:-2px -2px, -2px -2px, -1px -1px, -1px -1px
}

#content .post-container article section img#acdc {
	width: auto;
	height: auto;
	background: none !important;
	position: relative;
	left: 0px;
	left: -webkit-calc(50% - 175px);
	left: -moz-calc(50% - 175px);
	left: -ms-calc(50% - 175px);
	left: -o-calc(50% - 175px);
	left: calc(50% - 175px);
	top: -webkit-calc(50% - 75px);
	top: -moz-calc(50% - 75px);
	top: -ms-calc(50% - 75px);
	top: -o-calc(50% - 75px);
	top: calc(50% - 75px);
}

#btn {
	padding: 0px 5px;
}

#experiment {
	padding-bottom: 0px !important;
}

	#experiment input.input {
		width: 120px;
	}

	#experiment table {
		text-align: left;
		border-collapse: collapse;
		border-spacing: 0px;
		margin-top: 20px;
		line-height: 120% !important;
	}

		#experiment table td {
			padding: 2px;
		}

</style>
<p><img src="http://loopinfinito.com.br/{{ page.image }}" alt="Expressões matemáticas em CSS com calc()" title="Isaac Newton" width="700" height="432" /></p>

Um novo recurso bastante interessante do CSS3 é a função <code>calc()</code>. Com esta função agora é possível calcularmos 
valores de **expressões matemáticas** diretamente no CSS! *Like a rockstar coder*.

Em CSS, sabemos que existem diversos tipos de valores e medidas: <code>px</code>, <code>%</code>, <code>em</code>, 
<code>in</code>, <code>cm</code>, <code>mm</code>, <code>pc</code>, <code>pt</code> e <code>ex</code>.
Se quisermos atribuir qualquer valor numérico a uma determinada propriedade, apenas escolhemos uma destas unidades:

{% highlight css %}
#acdc {
    width: 100px;
}
{% endhighlight %}

Contudo, em CSS **não** é permitido fazer isto:

{% highlight css %}
#acdc {
    width: 100px + 10px; /* incorreto */
}
{% endhighlight %}

Ou seja, não é possível calcular nenhuma expressão matemática – mesmo que seja uma coisa totalmente desnecessária e tosca 
como o exemplo acima. E desculpem-me por isto, no próximo melhora.

## Um exemplo decente

Acho que boa parte das pessoas que trabalham com CSS já se depararam com o seguinte problema: precisar apenas centralizar 
um elemento na tela. Isto é, independente da resolução que o cidadão esteja usando, o elemento terá que ficar centralizado.
Dai você pensa, *"p!@# q%$ p%$!# como é que vou fazer esta m!@#$ funcionar?"*. E **sem trapacear com JS**.

A <span style="text-decoration:line-through;">gambiarra</span> solução para este pequeno impasse é bem simples, na verdade:

{% highlight css %}
#pinkfloyd {
    width: 200px;
    height: 150px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -75px; /* metade da altura */
    margin-left: -100px; /* metade da largura */
}
{% endhighlight %}

Hora do purismo: Ter que resolver um problema de posição de um elemento usando <code>margin</code> é **toscasso**!
Se já existem as propriedades <code>top</code>, <code>left</code>, <code>right</code> e <code>bottom</code>, isto deveria 
ser mais que suficiente, mas pela limitação do CSS de não permitir expressões matemáticas, infelizmente não poderíamos 
simplesmente fazer: <code>top: 50% - 75px</code>.

## Resolvendo a bronca da maneira correta

Não seria legal se a expressão acima (<code>top: 50% - 75px</code>) funcionasse logo de cara, sem frescura? 
Pois é, por isso apresentamos... <code>calc()</code>!

Com <code>calc()</code> poderemos calcular expressões matemáticas **simples** de boa. 
Quando digo *simples* quer dizer apenas que não dá pra sair calculando integrais e diabo a quatro, os operadores suportados 
por <code>calc()</code> são apenas os básicos – <code>+</code>, <code>-</code>, <code>*</code> e <code>/</code> – e também 
podemos usar parênteses – <code>(</code> e <code>)</code>. Mais do que o suficiente por hora.

O mais interessante é que podemos *misturar* valores relativos com valores absolutos, e valores de *diferentes unidades*. 
<code>calc()</code> automaticamente converte as diferentes unidades e calcula valores relativos (como <code>%</code>).

### Misturando valores relativos e absolutos
O exemplo anterior ficaria:

{% highlight css %}
#pinkfloyd {
    width: 200px;
    height: 150px;
    position: absolute;
    /* top: 50%; */
    /* margin-top: -75px; */
    top: calc(50% - 75px);
    /* left: 50%; */
    /* margin-left: -100px; */
    left: calc(50% - 100px);
}
{% endhighlight %}

### Misturando unidades
Também é possível usar valores de unidades diferentes numa mesma expressão:

{% highlight css %}
#ledzeppelin {
    width: calc(100px + 2in + 5em);
    min-height: calc(5em + 30px + 25% + 3.5pc);
}
{% endhighlight %}

## Suporte
No momento em que escrevo este post, os únicos navegadores que estão dando suporte a esta propriedade são o 
**Google Chrome v.19** (o mais novo) através da propriedade prefixada <code>-webkit-calc()</code> e o **Mozilla Firefox**, 
que já dá suporte desde sua versão 8 através da propriedade prefixada <code>-moz-calc()</code>. O **Internet Explorer 9** 
e o **Webkit Nightly Build** são os únicos que dão suporte completo até o momento (<code>calc()</code>). 
Já o *Opera*, o *Safari* ainda não estão dando suporte algum.

## Se vira nos 30
Agora é a sua vez =). Fiz este pequeno experimento abaixo onde é possível entrar com os valores de cada propriedade e 
visualizar o resultado.

<section id="experiment">
	<div id="stage" class="img">
		<img src="http://loopinfinito.com.br/images/posts/2012-06-04-acdc.png" alt="AC/DC" title="there's a long way to the top if you wanna rock n' roll" id="acdc" />
	</div>
	<table>
		<thead>
			<th><label for="input-top"><code>top</code></label></th>
			<th><label for="input-left"><code>left</code></label></th>
			<th><label for="input-width"><code>width</code></label></th>
			<th><label for="input-height"><code>height</code></label></th>
			<th></th>
		</thead>
		<tbody>
			<td><input class="input" data-attr="top" placeholder="top" id="input-top" value="50% - 75px" /></td>
			<td><input class="input" data-attr="left" placeholder="left" id="input-left" value="50% - 175px" /></td>
			<td><input class="input" data-attr="width" placeholder="width" id="input-width" value="350px" /></td>
			<td><input class="input" data-attr="height" placeholder="height" id="input-height" value="150px" /></td>
			<td><input id="btn" type="button" value="Atualizar" /></td>
		</tbody>
	</table>
</section>

**OBS.:** Se alguma expressão matemática que você digitar não surtir efeito, é porque deve estar incorreta.

**Dica 1:** sempre especifique uma unidade. Ex.: 
- INCORRETO: <code>0</code>
- CORRETO: <code>0px</code>, <code>0em</code> ou <code>0%</code> etc.

**Dica 2:** para soma (<code>+</code>) e subtração (<code>-</code>), sempre deixe espaço entre os elementos da expressão. Ex.:
- INCORRETO: <code>10px+30%</code>, <code>10px +10%</code> etc.
- CORRETO: <code>10px + 30%</code>

That's all folks!

<aside class="fonte">
  <h3>Referência</h3>
  <ul>    
    <li>→<a href="http://www.w3.org/TR/css3-values/#calc" alt="CSS Values and Units Module Level 3" title="CSS Values and Units Module Level 3">CSS Values and Units Module Level 3</a> <span class="comment">// W3C</span></li>
    <li>→<a href="http://www.w3schools.com/cssref/css_units.asp" alt="CSS Units" title="CSS Units">CSS Units</a> <span class="comment">// W3 Schools</span></li>
    <li>→<a href="http://updates.html5rocks.com/2012/03/CSS-layout-gets-smarter-with-calc" alt="CSS LAYOUT GETS SMARTER WITH CALC()" title="CSS LAYOUT GETS SMARTER WITH CALC()">CSS LAYOUT GETS SMARTER WITH CALC()</a> <span class="comment">// HTML5 Rocks</span></li>
  </ul>
</aside>