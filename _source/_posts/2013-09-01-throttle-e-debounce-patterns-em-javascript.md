---
title: <span>Throttle</span> e <span>Debounce</span> patterns em JavaScript
layout: post
author: Caio Gondim
author_link: http://twitter.com/caio_gondim
author_profile: https://plus.google.com/109656206006790732674/
image: images/posts/2013-09-01-throttle-e-debounce-patterns-em-js.png
tags: javascript
comments: false
keywords: >
  javascript, debounce, throttle, eventos, ajax, usuários, UI, interface
resumo: >
  Alguns eventos do _browser_ acontecem de forma mais rápida e com mais
  frequência do que gostaríamos, como o evento _resize_ e _scroll_ da _window_.
  Outras vezes nossos queridos usuários disparam mais eventos do que havíamos
  previsto em nossa aplicação, como um duplo-clique em um botão de _submit_ de
  um _form_ AJAX. Neste _post_ iremos aprender a controlar a frequência de
  execução de um determinado trecho de código JavaScript, a diferença entre
  _debounce_ e _throttle_ e quando e porque usá-las.
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
nossa aplicação, como um duplo-clique em um botão de _submit_ de um _form_ AJAX.
Neste _post_ iremos aprender a como controlar a frequência de execução de um
determinado trecho de código JavaScript, a diferença entre _debounce_ e
_throttle_, quando e porque usá-lase a se defender de situações corriqueiras
como as que acabamos de citar.


## Throttle

Imaginem o _throttle_ como uma __válvula__ (na verdade essa é a tradução) que
regula a quantidade (o fluxo) de vezes que um dado trecho de código será
executado durante um determinado espaço de tempo. Com esta técnica podemos
garantir que determinado trecho de código __não será executado mais que 1 vez a
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
seja invocado novemente em menos de X segundos.

Esta técnica é bastante útil para decidirmos, por exemplo, quando devemos chamar
uma função <abbr title="Assynchronous JavaScript and XML">AJAX</abbr> de um
_input_ com _autocomplete_. Imaginem que estamos fazendo uma consulta à
<abbr title="Application Program Interface">API</abbr> de _autocomplete_ da
nossa aplicação em todo evento _keydown_ do _input_. Muito provavelmente o
usuário dispara eventos _keydown_ mais rápido que o nosso servidor é capaz de
entregar para o _browser_ as sugestões de _autocomplete_. Com isso, podemos
estar entregando uma sugestão desatualizada ao usuário. Com o _debounce_,
podemos disparar esta mesma função de _autocomplete_ depois de, por exemplo, 300
milisegundos depois da última tecla pressionada. Dessa forma, entregamos uma
sugestão __atualizada__ e <strong>não sobrecarregamos nosso <em>back-end</em></strong>
com consultas desnecessárias.

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

O _debounce_ __posterga__ a execução do _handler_ caso ele seja chamado
novamente em menos de 200 milisegundos. Você deve parar um pouco de mexer o
_mouse_ para parar de postergar o _handler_ _debounced_.


## Como usar

Algumas bibliotecas JavaScript, como o [underscore.js](http://underscorejs.org/),
já trazem implementados algoritmos para aplicarmos _throttle_ e _debounce_ em
funções já existentes.

{% highlight javascript %}
// função que será disparada no evento "onresize" da window
function onResizeHandler() {
  // ...
}

// throttle com underscore.js
// garante que a função "onResizeHandler" não será executada
// mais que uma vez a cada 200ms
$(window).on('resize', _.throttle(onResizeHandler, 200));
{% endhighlight %}

Mas caso você não queira fazer mais um _request_ de uma _lib_ inteira para usar
o _throttle_ e _debounce_ ou queira saber como são implementados esses padrões,
você pode usar
[este _package_](https://github.com/caiogondim/js-patterns-sublime-snippets)
para Sublime Text que eu desenvolvi (jabá) onde nele você tem vários padrões
(<em>patterns</em>) de JavaScript, inclusive o _throttle_ e _debounce_.
