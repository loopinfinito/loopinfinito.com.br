---
title: Mamilos, <span>pontos</span> e <span>vírgulas</span> em JavaScript
layout: post
author: Caio Gondim
author_link: http://twitter.com/caio_gondim
author_profile: https://plus.google.com/109656206006790732674/
image: images/posts/2013-10-22-ponto-e-virgula-js.jpg
tags: javascript
comments: true
keywords: >
  javascript, ponto e vírgula, semicolons, ASI, Automatic Semicolon Insertion,
  Crockford, "@fat", "@izs", JSMin, GitHub, Bootstrap, npm, Nodejs, Node,
  Restricted Productions, bom senso
resumo: >
  Provavelmente um dos assuntos mais polêmicos na comunidade
  <abbr title="JavaScript">JS</abbr> seja a omissão do `;`. Esse simples
  caractere já foi responsável por inúmeras discussões no GitHub relacionadas ao
  seu uso. Muitos dizem que não é seguro deixar de usá-los mas, ao mesmo tempo,
  grandes projetos como [Bootstrap](http://getbootstrap.com/) e
  [npm](https://npmjs.org/) preferem omití-los. Quem está certo, então? É seguro
  não usar `;`? Ou isso tudo é apenas uma moda jovem que os Rubyistas e
  Pythonistas estão tentando impor na comunidade
  <abbr title="JavaScript">JS</abbr>?
related:
  - title: Semicolons in JavaScript are optional
    url: http://mislav.uniqpath.com/2010/05/semicolons/
    from: Mislav Marohnić
  - title: An Open Letter to JavaScript Leaders Regarding Semicolons
    url: http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding
    from: Isaac Schlueter
  - title: Actual drawbacks to omitting semi-colons?
    url: https://groups.google.com/forum/#!msg/nodejs/MWaivVTirPY/0pnRjKsggkIJ
    from: Node.js Google Groups
  - title: JavaScript and Semicolons
    url: http://dailyjs.com/2012/04/19/semicolons/
    from: DailyJS
  - title: Bootstrap issue about semicolon
    url: https://github.com/twbs/bootstrap/issues/3057
    from: GitHub Issues
  - title: Rules of Automatic Semicolon Insertion
    url: http://es5.github.io/#x7.9.1
    from: Annotated ECMAScript 5.1
  - title: JavaScript Semicolon Insertion
    url: http://inimino.org/~inimino/blog/javascript_semicolons
    from: ~inimino/blog
  - title: The Infernal Semicolon
    url: https://brendaneich.com/2012/04/the-infernal-semicolon/
    from: Brendan Eich
---

<style>
  hr {
    display: block;
    border: none;
  }
  hr::before {
    display: block;
    width: 100px;
    content: '• • •';
    margin: auto;
    text-align: center;
    font-size: 13px;
    height: 10px;
    line-height: 10px;
    color: #ccc;
  }
</style>

Em JavaScript o `;` é um delimitador de _statements_, expressões e construtores,
assim como em outras linguagens sintaticamente similares a C. Nele (JavaScript),
o `;` tem uma função similar ao `\n` (quebrar linha) em linguagens que são
_white-space significant_, como Ruby e Python.

Porém, em JavaScript, temos o
<abbr title="Automatic Semicolon Insertion">ASI</abbr> — querido por uns, odiado
por outros. Ele é o responsável por inserir automaticamente `;` em determinadas
situações. E é aqui que mora o terror. Alguns programadores, como o
[@fat](http://twitter.com/fat) — co-criador do
[Bootstrap](http://getbootstrap.com/) — e o [@izs](http://twitter.com/izs)
— _maintainer_ do [Node.js](http://nodejs.org/) e criador do
[npm](https://npmjs.org/) — preferem por não usar (ou evitar ao máximo) `;`.
Já outros dizem que este não é um caminho seguro.

## A grande polêmica

[Uma das mais polêmicas discussões no GitHub](https://github.com/twitter/bootstrap/issues/3057)
se deu acerca da omissão do `;` no código do Bootstrap. Como o código do
Bootstrap não utiliza `;`, era gerado um erro quando era minificado pelo
[JSMin](http://www.crockford.com/javascript/jsmin.html),
escrito por [Crockford](http://www.crockford.com/). @fat disse que o problema
não estava no código e que, na verdade, isto era um _bug_ do JSMin.
[@douglascrockford](http://github.com/douglascrockford) rebate dizendo que o
código é estupido e que não iria “emburrecer” o JSMin para que gerasse um código
válido para este caso.

![Crockford e Fat discutindo sobre o uso de ponto e vírgula em uma issue do Bootstrap](/images/posts/2013-10-22-github-issue-fat-vc-crockford-1.jpg)

Essa homérica discussão se alongou durante meses, tendo quase 300 _replies_ até
o momento (dentre eles, vários _memes_). Mas, afinal, quem é o vilão dessa
novela mexicana?

Vamos voltar ao básico e entender as regras do
<abbr title="Automatic Semicolon Insertion">ASI</abbr> para termos uma opinião
mais embasada a respeito do polêmico assunto.


## A regra é clara

Como dissemos antes, o `;` serve como um delimitador de _statements_. Mas devido
ao <abbr title="Automatic Semicolon Insertion">ASI</abbr>, o `\n` também irá
funcionar como delimitador de _statement_, exceto nos seguintes casos:

1. O _statement_ possui um parêntese, _array_ literal ou objeto literal não
  fechado ou acaba de qualquer outra forma a qual não seja um modo válido de
  finalizar um _statement_.
2. A linha inteira é um `--` ou `++` (neste caso, irá incrementar/decrementar o
  próximo _token_)
3. É um `for()`, `while()`, `do`, `if()` ou `else` e não existe `{`
4. A próxima linha começa com `[`, `(`, `+`, `-`, `*`, `/`, `,`, `.`, ou
  qualquer outro operador binário que só pode ser encontrado entre dois _tokens_
  em uma única expressão.

Vamos analisar caso a caso.

### 1º caso

Este caso é bastante óbvio. Caso a linha acabe sem fechar parêntesis ou chaves
ou caso acabe de uma forma que não faça sentindo, o
<abbr title="Automatic Semicolon Insertion">ASI</abbr> não irá inserir
automaticamente um `;`.

{% highlight javascript %}
// A.S.I. não será disparado, pois a linha acaba como um statement não válido
var a = 1,
    b = 2,
    c = 3;

// A.S.I. não será disparado, pois a linha acaba com um parênteses não fechado
(new
Date).getTime()
{% endhighlight %}

É, inclusive, uma prática bem comum — até mesmo dentre os que utilizam `;` — de
acabar linhas em determinadas situações sem `;`, como na declaração de várias
variáveis acima com apenas um `var`.

### 2º caso

Este caso é um pouco bizarro e este tipo de código só é visto neste tipo de
discussão.

{% highlight javascript %}
// este trecho de código
i
++
j

// é equivalente ao código abaixo
i;
++j;
{% endhighlight %}

Percebam que se um incrementador/decrementador ocupa toda uma linha (o que não
faz o menor sentido), ele não irá modificar a variável anterior, e sim a
posterior. Funcionando, na prática, como um incrementador pré-fixo, e não
pós-fixo.

### 3º caso

Este também é um caso de uso da
<abbr title="Automatic Semicolon Insertion">ASI</abbr> bem comum até entre os
que costumam nunca omitir `;`. Caso a linha acabe com a definição de um bloco
`if`, `else`, `for`, `while` ou `do` e não haja `{` no final da linha, o
interpretador só irá terminar a declaração do bloco quando achar um outro bloco
ou _statement_.

{% highlight javascript %}
if (foo)
  bar()

// o mesmo que
if (foo) {
  bar();
}
{% endhighlight %}

### 4º caso

Este caso é a raiz de todo o mal. Vejam no exemplo abaixo:

{% highlight javascript %}
foo()
[1, 2, 3].forEach(bar)

// o código acima é equivalente ao código abaixo
foo()[1, 2, 3].forEach(bar)
{% endhighlight %}

O perigo está onde as próximas linhas começam com `[` ou `(`, já que o
interpretador pode juntar as duas linhas e fazer com que elas sejam parte de um
único _statement_. Para quem não utiliza ponto-e-vírgula, é comum utilizar
sempre um `;` no começo de linhas que precedem um `[` ou `(` e assim se
prevenir.

## Restricted productions

Existe mais uma regra sobre
<abbr title="Automatic Semicolon Insertion">ASI</abbr> na linguagem que cobre
casos especiais. Esses são chamados de
<strong><em>restricted productions</em></strong>. Esta regra fala que, caso
exista um `\n` logo após um `return`, `throw`, `break` ou `continue`, o
_statement_ sempre será finalizado, sem exceções.

Embora não muito comum em JavaScript, o `continue` e `break` podem vir
acompanhados de um _label_, que indica para onde devemos "pular". Caso você
use _labels_ em seus programas (e você **não deveria**), sempre os ponha na mesma
linha que o `continue` ou `break`.

{% highlight javascript %}
continue
  foo

// é o mesmo que
continue;
  foo;

// ----------

break
  bar

// é o mesmo que
break;
  bar;
{% endhighlight %}

Com o `throw` acontece o mesmo. Caso tenhamos um `throw` seguido por um `\n`,
o _statement_ é logo finalizado. O que irá gerar um erro de sintaxe, pois um
`throw` sempre deve "lançar" alguma coisa (dã).

{% highlight javascript %}
throw
  new Error('Nooooo')

// é o mesmo que
throw;
  new Error('Nooooo');
// irá gerar um erro de sintaxe, pois `throw` sempre deve "lançar" algo
{% endhighlight %}

Na prática, essa regra costuma causar mais confusão com `return`, pois pode
acarretar em alguns _bugs_ não muito óbvios ao programador que desconhece a
malícia do <abbr title="Automatic Semicolon Insertion">ASI</abbr>.

{% highlight javascript %}
function foo() {
  // ...
  return
    'Uma string muito grande que não cabe na linha de cima'
}

// é o mesmo que
function foo() {
  // ...
  return;
    'Uma string muito grande que não cabe na linha de cima';
}
{% endhighlight %}

Já que o `return` interrompe a execução da função, acabamos ficando com código
morto, que nunca será excutado. Este é, inclusive, um dos clássicos exemplos
dos que defendem o uso de `;`.


## Mythbuster

Agora que já conhecemos o <abbr title="Automatic Semicolon Insertion">ASI</abbr>
e suas regras, vamos quebrar alguns mitos em relação a omissão de `;` no código
JavaScript.

### Código com `;` é mais rápido

Com o ASI temos a noção de que toda vez que ele é disparado, o interpretador
põe um ponto-e-vírgula e reavalia o código. Logo, faz sentido pensarmos que
o código com `;` irá performar melhor, uma vez que no código sem `;` não existem
essas pausas e reavaliação do código.

<blockquote>
  <p>
    Such semicolons may always appear explicitly in the source text. For
    convenience, however, such semicolons may be omitted from the source text in
    certain situations. These situations are described by saying that semicolons
    are automatically inserted into the source code token stream in those
    situations.
  </p>
  <footer>
    – Annotated ECMAScript 5.1, Automatic Semicolon Insertion
  </footer>
</blockquote>

Isso não é verdade, uma vez que os interpretadores modernos simplesmente acabam
um _statement_ quando o ASI entra em ação, sem precisar "inserir um
ponto-e-vírgula". O _benchmark_ de velocidade de um código com `;` e do mesmo
código sem `;` pode ser visto [aqui](http://jsperf.com/asi-versus-msi) (nos meus
testes, o código sem `;` foi mais rápido).

### ASI pode te surpreender

O ASI é um algoritmo determinístico, ou seja, para o mesmo _input_, o algoritmo
sempre gerará o mesmo _output_. Então, se o
<abbr title="Automatic Semicolon Insertion">ASI</abbr> ainda o surpreende,
melhor estudar como ele funciona.

<q class="pushing-quotes">
  I have <strong>learned</strong> to use them, that's why there isn't one
  present. — @fat
</q>

Parafraseando o @izs: o ASI não é um algoritmo bem arquitetado, mas também não
é um algoritmo difícil de entender.

### _Strict mode_ irá reclamar da falta de `;`

Outra lenda. Mesmo o _strict mode_, o modo mais xiita de se escrever JS
(apesar de não ser nada perto do _crockford mode_), não irá reclamar da
ausência de `;` no seu código.

### O famigerado exemplo do `return`

O clássico exemplo dos que querem converter os programadores pagãos que
não usam `;`. É o mesmo exemplo citado acima, nas _restricted productions_.

{% highlight javascript %}
function foo() {
  return
    'lorem ipsum'
}

// o mesmo que
function foo() {
  return;
    'lorem ipsum';
}
{% endhighlight %}

Mas vejam que, nesse caso, o problema não está na falta de ponto-e-vírgula, mas,
sim, no excesso de `\n`. Mesmo pondo `;`, iremos obter o mesmo resultado.


## Afinal, é seguro?

Sim, é seguro, uma vez que você entende como funciona o
<abbr title="Automatic Semicolon Insertion">ASI</abbr>. Mas se, mesmo depois
de todo esse papo sobre a importância de aprender e dominar como funciona o
<abbr title="Automatic Semicolon Insertion">ASI</abbr>, você está com preguiça
de usar `;` e quer fazer parte da "vanguarda" do JavaScript, siga a regra de
ouro: __Sempre utilize `;` antes de `(` ou `[`__. Assim você estará seguro e seu
código continua _hipster_.

<blockquote>
  <p>
    Yes, it's all FUD.  In my own code, I don't use semicolons except in a few
    specific instances, and then as a prefix or separator.  They're actually not
    terminators in the JavaScript language, and I think it's silly to treat them
    as such. In fact, I'd go so far as to say that my style is *less* error-
    prone, because forgotten semicolons are so much more immediately apparent
    (since they come at the start of the lines where they are relevant.)
  </p>
  <footer>
    – Isaacs Schlueter, criador do NPM e desenvolvedor líder do Node.js
  </footer>
</blockquote>

Provavelmente, entre os que não utilizam `;` (como eu), o estilo de código
do Isaacs Schlueter seja o mais popular. Caso você sonhe em nunca mais usar `;`
e agora achou uma razão para tal, vale a pena dar uma lida no
[_coding style_](https://npmjs.org/doc/coding-style.html#Semicolons) do npm.


## Bom senso. Sempre

Apesar de seguro programarmos em JS sem `;`, devemos ter bom senso. Muitas
pessoas não se sentem confortáveis programando dessa forma, e sua escolha de
não usar `;` em seu projeto _open source_ pode ter um impacto em como seus
contribuidores se sentirão.

<blockquote>
  <p>
    Da mesma forma, eu acho um pouco estúpido usar calça quando está quente.
    Todos sabem que é mais comfortável não usá-las, e é apenas um costume social
    idiota que nos deixam enjaulados nesses pedaços de roupa apertados durante
    todo o dia. Na minha casa, eu estou geralmente sem calça. Mas quando vou
    visitar a casa de um amigo, eu ponho minhas calças, porque este é o costume,
    e é assim que eles gostam. (A não ser que eles também estejam OK em estarem
    sem calças, e então é a festa do "roupa de baixo".)

    A questão é, eu não ponho ponto-e-vírgula no código do npm, mas eu os ponho
    no código do node.js. Porque Ryan Dahl usa calças, e o node.js é a sua casa.

    Em sua própria casa, você decide os estilos e costumes. Mas tenha cuidado,
    pois isso pode ter um efeito em quem irá se sentir confortável em suas
    festas.
  </p>
  <footer>
    – Isaacs Schlueter, criador do NPM e desenvolvedor líder do Node.js
  </footer>
</blockquote>

Na sua casa, você define os costumes. Na casa alheia, você os respeita.
Usar ou não `;` é apenas uma decisão __estética__. Ambos modos são seguros.
É puro [bikeshedding](http://www.unixguide.net/freebsd/faq/16.19.shtml).
E o resultado final será o mesmo, uma vez que o código que irá para produção
será a versão minificada.

Até mais;
