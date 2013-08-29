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
  javascript
resumo: >
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores,
  quibusdam, modi nisi laudantium provident dolores vel a officia qui non
  impedit officiis temporibus eveniet corporis earum rem reiciendis dignissimos
  ipsa.
related:
  - title: Lorem
    url: http://loopinfinito.com.br
    from: Loop Infinito
---

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis rerum numquam
veniam. Quae, incidunt ut molestias nesciunt quod natus eius eos totam iure quam
modi neque veniam animi alias mollitia.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, quia,
libero, maiores, sapiente corporis voluptatibus sed numquam dolorum odio quis
incidunt dolores vitae mollitia quod tempora. Quasi autem labore fugiat!


## Throttle

Imaginem o _throttle_ como uma válvula (na verdade essa é a tradução) que regula
a quantidade (o fluxo) de eventos que acontece durante um determinado espaço de
tempo. Com esta técnica podemos garantir que determinado trecho de código não
será executado mais que 1 vez a cada X milisegundos.

Casos de uso comuns para o _throttle_ são no controle do disparo dos eventos
_scroll_ e resize_. Normalmente são disparados vários desses eventos em um curto
espaço de tempo e, caso estejamos executando qualquer computação quando estes
eventos são disparados,  provavelmente vamos acabar causando uma lentidão na
renderização de nossa aplicação, já que será executado várias vezes o mesmo
trecho de código JavaScript e a renderização no _browser_ acontece em apenas uma
_thread_.


## Debounce

O _debounce_, assim como o _throttle_, limita a quantidade de vezes que um
determinado trecho de código é executado em relação ao tempo. Mas diferentemente
do _throttle_ — que assegura que aconteçam no máximo 1 execução a cada X
milisegundos —, o _debounce_ irá postergar a execução do código caso ele seja
invocado novemente em menos de X segundos.

Esta técnica é bastante útil para decidirmos, por exemplo, quando devemos chamar
uma função AJAX de um _input_ com _autocomplete_. Imaginem que estamos fazendo
uma consulta à API de _autocomplete_ da nossa aplicação em todo evento _keydown_
do _input_. Muito provavelmente, o usuário dispara eventos _keydown_ mais rápido
que o nosso servidor é capaz de entregar para o _browser_ as sugestões de
_autocomplete_. Com isso, podemos estar entregando uma sugestão desatualizada ao
usuário. Com o _debounce_, podemos disparar esta mesma função de _autocomplete_
depois de, por exemplo, 300 milisegundos depois da última tecla pressionada.
Dessa forma, entregamos uma sugestão atualizada e não sobrecarregamos nosso
_back-end_ com consultas desnecessárias.

Outro cenário onde é bastante usado o _debounce_ é em botões de _submit_ de
formulários. Imaginem que temos um formulário onde o _submit_ acontece via AJAX.
Caso o usuário dê um clique duplo no botão, iremos enviar duas requisições ao
_back-end_. Com um _debounce_ do evento de clique, podemos postergar a execução
do _submit_ via AJAX para, por exemplo, depois de 200 milisegundos depois do
último clique.


## Experimento

<!-- Nada melhor que demonstrarmos de forma visual como funciona um evento com
_throttle_, com _debounce_ e um não tratado. No experimento abaixo, o evento
__mousemove__ está sendo usado para demonstrarmos essas 2 técnicas de limitarmos
o número de execuções de uma função e compararmos com um cenário sem tratamento.

Continue movendo seu _mouse_ no experimento abaixo e repare como funcionam o
_throttle_ e _debounce_. Cada barra abaixo equivale a 200 milisegundos. -->

No experimento abaixo vamos tentar explicar de uma forma masi visual como
funciona o _throttle_ e _debounce_. Nele estamos limitando o disparo do
_handler_ do evento _mousemove_. Cada barra equivale a 200 milisegundos, e uma
barra maior significa que o _handler_ foi disparado.

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

O _handler_ do evento não tratado é sempre disparado. Na verdade ele é disparado
bem mais frequentemente que a cada 200 milisegundos, na minha máquina ele é
disparado, em média, a cada 13 milisegundos.

O _throttle_ funciona como uma válvula e não permite que o _handler_ seja
executado mais de 1 vez a cada 400 milisegundos (uma vez a cada 2 barras).

O _debounce_ posterga a execução do _handler_ caso ele seja chamado novamente em
menos de 200 milisegundos. Você deve parar um pouco de mexer o _mouse_ para
parar de postergar o _handler_ _debounced_.
