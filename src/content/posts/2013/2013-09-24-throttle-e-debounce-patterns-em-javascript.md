---
title: Throttle e Debounce patterns em JavaScript
tags: javascript
author: caio
image: images/posts/2013-09-24-throttle-e-debounce-patterns-em-js.jpg
comments: true
keywords: >
  javascript, debounce, throttle, eventos, AJAX, usuários, UI, interface
resumo: >
  Alguns eventos do _browser_ acontecem de forma mais rápida e com mais
  frequência do que gostaríamos — como os eventos _resize_ e _scroll_ da
  _window_. Outras vezes nossos queridos usuários disparam mais eventos do que
  havíamos previsto em nossa aplicação, como um duplo-clique em um botão de
  _submit_ de um _form_&nbsp;
  <abbr title="Assynchronous JavaScript and XML">AJAX</abbr>. Neste _post_
  iremos aprender a controlar a __frequência de execução__ de um determinado
  trecho de código JavaScript, a diferença entre _debounce_ e _throttle_, quando
  e porque usá-las e a se __defender de situações corriqueiras__ como as que
  acabamos de citar.

related:
  - title: Debounce and Throttle. A visual explanation
    url: http://drupalmotion.com/article/debounce-and-throttle-visual-explanation
    from: Drupal Motion
  - title: Learning from Twitter
    url: http://ejohn.org/blog/learning-from-twitter/
    from: John Resig's blog
  - title: jQuery throttle / debounce. Sometimes, less is more!
    url: http://benalman.com/projects/jquery-throttle-debounce-plugin/
    from: Ben Alman's blog
---

Alguns eventos do _browser_ acontecem de forma mais rápida e com mais frequência
do que gostaríamos — como os eventos _resize_ e _scroll_ da _window_. Outras
vezes nossos queridos usuários disparam mais eventos do que havíamos previsto em
nossa aplicação, como um duplo-clique em um botão de _submit_ de um _form_&nbsp;
<abbr title="Assynchronous JavaScript and XML">AJAX</abbr>. Neste _post_ iremos
aprender a controlar a __frequência de execução__ de um determinado trecho de
código JavaScript, a diferença entre _debounce_ e _throttle_, quando e porque
usá-las e a se __defender de situações corriqueiras__ como as que acabamos de
citar.


## Throttle

Imaginem o _throttle_ como uma __válvula__ (na verdade essa é a tradução) que
regula a quantidade (o fluxo) de vezes que um dado trecho de código será
executado durante um determinado espaço de tempo. Com esta técnica podemos
garantir que um trecho de código __não será executado mais que 1 vez a
cada X milisegundos__.

<q class="pushing-quotes">
  Throttle funciona como uma <strong>válvula</strong>
</q>

Um caso de uso comum para o _throttle_ é no controle do disparo dos _handlers_
dos eventos _scroll_ e _resize_. Normalmente são disparados vários desses
eventos em um curto espaço de tempo e, caso estejamos executando qualquer
computação quando estes eventos são disparados, provavelmente vamos acabar
causando uma lentidão na renderização de nossa aplicação, já que será executado
várias vezes o mesmo trecho de código JavaScript e a renderização no _browser_
acontece em apenas uma _thread_.


## Debounce

O _debounce_, assim como o _throttle_, limita a quantidade de vezes que um
determinado trecho de código é executado em relação ao tempo. Mas diferentemente
do _throttle_ — que assegura que aconteçam no máximo 1 execução a cada X
milisegundos —, o _debounce_ irá __postergar a execução__ do código caso ele
seja invocado novamente em menos de X segundos.

Esta técnica é bastante útil para decidirmos, por exemplo, quando devemos chamar
uma função <abbr title="Assynchronous JavaScript and XML">AJAX</abbr> de um
_input_ com _autocomplete_. Imaginem que estamos fazendo uma consulta à
<abbr title="Application Program Interface">API</abbr> de _autocomplete_ da
nossa aplicação em todo evento _keydown_ do _input_. Muito provavelmente o
usuário dispara eventos _keydown_ mais rápido que o nosso servidor é capaz de
entregar para o _browser_ as sugestões de _autocomplete_. Com isso, corremos o
risco de entregar uma sugestão desatualizada ao usuário. Com o _debounce_,
podemos disparar esta mesma função de _autocomplete_ depois de, por exemplo, 300
milisegundos após a última tecla ter sido pressionada. Dessa forma, entregamos
uma sugestão __atualizada__ e <strong>não sobrecarregamos nosso <em>back-end</em>
</strong> com consultas desnecessárias.

<q class="pushing-quotes">
  Debounce <strong>posterga</strong> a execução
</q>

Outro cenário onde é bastante usado o _debounce_ é em botões de _submit_ de
formulários. Imaginem que temos um formulário onde o _submit_ acontece via
<abbr title="Assynchronous JavaScript and XML">AJAX</abbr>. Caso o usuário dê um
clique duplo no botão, iremos enviar duas requisições ao _back-end_. Com um
_debounce_ do evento de clique, podemos __postergar a execução__ do _submit_ via
<abbr title="Assynchronous JavaScript and XML">AJAX</abbr> para, por exemplo,
depois de 200 milisegundos depois do último clique, garantindo assim, por
exemplo, que um mesmo item não seja comprado duas vezes sem a intenção do
usuário.


## Experimento

No experimento abaixo vamos tentar explicar de uma forma mais __visual__ como
funciona o _throttle_ e _debounce_. Nele estamos limitando o disparo do
_handler_ do evento _mousemove_. Cada barra equivale a __200 milisegundos__, e
uma barra maior significa que o _handler_ foi __disparado__.

Continuem movendo o _mouse_ dentro do experimento e reparem como os _handlers_
dos eventos com _throttle_ e _debounce_ são disparados de maneiras diferentes.

<iframe
  src="http://caiogondim.github.io/js-debounce-throttle-visual-explanation/"
  height="432"
  width="700"
  class="img"
  frameborder="0"
>
</iframe>

O _handler_ do evento não tratado é __sempre__ disparado. Na verdade ele é
disparado bem mais frequentemente que a cada 200 milisegundos — na minha máquina
ele é disparado, em média, a cada 13 milisegundos.

O _throttle_ funciona como uma __válvula__ e não permite que o _handler_ seja
executado mais de 1 vez a cada 400 milisegundos (uma vez a cada 2 barras).

O _debounce_&nbsp;__posterga__ a execução do _handler_ caso ele seja chamado
novamente em menos de 200 milisegundos. Você deve parar um pouco de mexer o
_mouse_ para parar de postergar o _handler_ _debounced_.


## Como usar

Vamos agora ver como aplicar os conceitos de _throttle_ e _debounce_ na prática.
Começando pelo _throttle_.


```javascript
var onResize = (function () {
  'use strict';

  var timeWindow = 200; // tempo em ms
  var lastExecution = new Date((new Date()).getTime() - timeWindow);

  var onResize = function (args) {
     // nosso código é escrito nessa função
  };

  return function() {
    if ((lastExecution.getTime() + timeWindow) <= (new Date()).getTime()) {
      lastExecution = new Date();
      return onResize.apply(this, arguments);
    }
  };
}());
```

Calma. Respire. O algoritmo acima não é tão difícil. Na primeira linha, nós
definimos que a variável `onResize` recebe o valor retornado pela função
auto-executável — em inglês _Immediately-Invoked Function Expression_, ou
<abbr title="Immediately-Invoked Function Expression">IIFE</abbr> — declarada
após o sinal de `=`. Não se deixe levar pelos nomes bonitos. Uma função
auto-executável é apenas — como o próprio nome diz — uma função que se executa e
serve apenas como um escopo para declararmos variáveis "privadas".

Dentro da nossa <abbr title="Immediately-Invoked Function Expression">IIFE</abbr>
no trecho `var onResize = function` definimos a lógica que queremos que seja
executada. Na variável `timeWindow` o tempo minímo entre as execuções do trecho
de código _throttled_. E, no final, retornamos a função `onResize` — com seu
contexto devidamente setado — apenas se a última chamada a ela foi em menos de
`timeWindow` milisegundos.

Agora vamos estudar o _debounce_. Como ele __posterga__ a execução de um dado
trecho de código, vamos brincar bastante com o `setTimeout`.

```javascript
var autocomplete = (function () {
  'use strict';

  var timeWindow = 500; // tempo em ms
  var timeout;

  var autocomplete = function (arg1, arg2) {
    // nossa lógica aqui
  };

  return function() {
    var context = this;
    var args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function(){
      autocomplete.apply(context, args);
    }, timeWindow);
  };
}());
```

Este exemplo utiliza, da mesma forma que o exemplo do _throttle_, uma
<abbr title="Immediately-Invoked Function Expression">IIFE</abbr>. É ela que irá
retornar a função _debounced_. Dentro dela setamos na variável `timeWindow`
a janela de tempo em que, caso nossa função seja novamente chamada, iremos
postergar sua execução.

No retorno de nossa <abbr title="Immediately-Invoked Function Expression">IIFE</abbr>
que começa nosso jogo com o `setTimeout`. Toda vez que nossa função `autoComplete`
&nbsp;_debounced_ for chamada, o que acontece é que nós limpamos qualquer
`setTimeout` antigo e setamos um novo. Então, se ficarmos sempre a chamando,
iremos sempre limpar o `timeout` que a iria disparar e setamos um novo.

E como estamos usando uma <abbr title="Immediately-Invoked Function Expression">IIFE</abbr>,
o que está dentro dela, como variáveis e funções, só é visível pela nossa função.

Caso não queiram quebrar tanto a cabeça entendendo os algoritmos de implementação,
algumas bibliotecas JavaScript, como o [underscore.js](http://underscorejs.org/),
já os trazem implementados prontos para aplicarmos _throttle_ e _debounce_ em
funções já existentes.

```javascript
// função que será disparada no evento "onresize" da window
function onResizeHandler() {
  // ...
}

// throttle com underscore.js
// garante que a função "onResizeHandler" não será executada
// mais que uma vez a cada 200ms
$(window).on('resize', _.throttle(onResizeHandler, 200));
```

E para quem usa o [Sublime Text](http://www.sublimetext.com/), eu fiz um
[_package_](https://github.com/caiogondim/js-patterns-sublime-snippets) com
vários _patterns_ de JavaScript, inclusive com o _Throttle_ e _Debounce_, que já
está disponível no Package Manager. Basta procurar por __JavaScript Patterns__.
