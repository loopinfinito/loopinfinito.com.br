---
title: Segredos do Chrome <span>Developer Tools</span>
layout: post
author: Caio Gondim
author_link: http://twitter.com/caio_gondim
author_profile: https://plus.google.com/109656206006790732674/
image: images/posts/2014-02-26-segredos-do-chrome-dev-tools.png
tags: javascript
comments: true
keywords: >
  debug, depurar, código, chrome, google, developer tools, dev tools, timeline,
  console, xhr, ajax
resumo: >
  Inspecionar elemento, _breakpoints_ em JavaScript e `console` API já virou
  muito _mainstream_. Vamos conhecer neste _post_ algumas _features_ mais
  _hipsters_ — porém úteis — do Chrome Developer Tools que vão melhorar seu
  dia-a-dia.
related:
  - title: "Chrome Dev Tools Tips and Tricks"
    url: https://developers.google.com/chrome-developer-tools/docs/tips-and-tricks
    from: Google Developers
---

Inspecionar elemento, _breakpoints_ em JavaScript e `console` API já virou muito
_mainstream_. Vamos conhecer neste _post_ algumas _features_ mais _hipsters_ —
porém úteis — do Chrome Developer Tools que vão melhorar seu dia-a-dia.


## Compartilhar e analisar uma Timeline gravada por outro

Você está com aquele
[bug Cássia Eller](http://www.youtube.com/watch?v=MLI2QlgjGmA&feature=youtu.be&t=4m0s)
na sua aplicação, _deadline_ aproximando e você tem certeza que se fosse
possível enviar os dados da sua _timeline_ para aquele seu amigo que manja de
todos os paranauês do front-end, ele iria te ajudar.

__Seus problemas se acabaram-se__. Agora você pode compartilhar sua _timeline_ e
analisar uma gravação alheia. Na aba __Timeline__ clique com o botão secundário
do _mouse_ em qualquer lugar e aparecerá uma opção para salvar e uma outra para
carregar dados de uma _Timeline_ gravada.

<figure>
  <img
    src="/images/posts/2014-02-26-compartilhar-e-analisar-uma-timeline-gravado-por-outro.png"
    alt="Atalho para preservar o log entre navegação"
    width="700"
  />
</figure>


## Emulando dispositivos

Permite emular o tamanho da tela, _pixel ratio_ e _user agent string_ dos
dispositivos móveis mais populares. Para acessar essa _feature_, chame o
**Console drawer** como indicado na figura abaixo.

<figure>
  <img
    src="/images/posts/2014-02-26-console-drawer.png"
    alt="Console drawer"
    width="700"
  />
</figure>

Uma vez no _drawer_, vá na aba **Emulation** e escolha o aparelho que deseja
emular. Caso o aparelho não esteja na lista, é possível inserir todos os dados
de forma manual.

<figure>
  <img
    src="/images/posts/2014-02-26-emulando-dispositivos.png"
    alt="Emulando dispositivos"
    width="700"
  />
</figure>


## Emulando acelerômetro

Além de emular dispositivos móveis, podemos emular alguns de seus sensores. Para
emular o acelerômetro, por exemplo, vá ao _drawer_ (o mesmo do item anterior),
depois na aba _Emulation_ e clique no _checkbox Accelerometer_. Você pode mexer
a representação 3D do dispositivo para emular uma determinada posição ou pôr
valores diretamente em cada eixo.

<figure>
  <img
    src="/images/posts/2014-02-26-emulando-acelerometro.gif"
    alt="Emulando acelerômetro"
    width="700"
  />
</figure>


## Contador de FPS

Útil para visualizar, em tempo real, o _frame rate_ de sua aplicação. Para
ativá-lo, vá no _drawer_, depois na aba **Rendering** e clique no _checkbox_
&nbsp;**Show FPS meter**.

<figure>
  <img
    src="/images/posts/2014-02-26-como-habilitar-o-contador-de-fps.png"
    alt="Como habilitar o contador de FPS"
    width="700"
  />
</figure>

Quando ativo, irá aparecer uma caixa preta no topo à direita com detalhes sobre
a quantidade de _frames_ que estão sendo renderizados por segundo.

<figure>
  <img
    src="/images/posts/2014-02-26-show-fps-meter.png"
    alt="Contador de FPS"
    width="700"
  />
</figure>


## Debugar requisições Ajax de forma mais fácil

Na aba _**Sources**_, ao lado direito, é possível adicionar _breakpoints_
dinâmicos para que o código pare a execução toda vez que uma chamada XHR possua
uma dada _string_ em sua URL.

<figure>
  <img
    src="/images/posts/2014-02-26-xhr-breakpoint.png"
    alt="Debugar requisições Ajax de forma mais fácil"
    width="700"
  />
</figure>


## Procure por uma string entre todos os arquivos

Um dos atalhos que mais uso. Aperte `Cmd` + `Opt` + `F` (`Ctrl` + `Shift` + `F`
no  Windows e Linux) para procurar qualquer palavra ou expressão regular entre
**todos** os arquivos carregados (inclusive os carregados em tempo de execução).

<figure>
  <img
    src="/images/posts/2014-02-26-procure-por-uma-string-entre-todos-os-arquivos.png"
    alt="Procure por uma string entre todos os arquivos"
    width="700"
  />
</figure>


## Replay de chamadas Ajax

Já pensou ter que refazer sempre aquele fluxo enorme na sua aplicação só para
disparar novamente aquela requisição Ajax (XHR)? Com esse atalho você pode dar
um _replay_ em qualquer chamada Ajax.

Na aba __Network__, clique com o botão secundário em cima de qualquer requisição
XHR e escolha a opção **Replay XHR**.

<figure>
  <img
    src="/images/posts/2014-02-26-replay-de-chamadas-ajax.png"
    alt="Replay de chamadas Ajax"
    width="700"
  />
</figure>


## Copiando requisições como comando cURL

Praticamente uma derivação do _replay_ de chamadas Ajax. Com a diferença que
aqui é gerado um comando cURL da requisição feita, com todos os parâmetros e
cabeçalhos. Cole no seu terminal e aperte `enter` para disparar uma requisição
idêntica à que foi disparada pelo seu navegador.

<figure>
  <img
    src="/images/posts/2014-02-26-copiando-requisicoes-como-comando-curl.png"
    alt="Copiando requisições como comando cURL"
    width="700"
  />
</figure>


## Troque rapidamente entre abas

Para navegar de forma rápida entre as abas do Dev Tools, utilize `Cmd` + `[` e
`Cmd` + `]` (ou `Ctrl` + `[` e `Ctrl` + `]` no Windows e Linux).


## Preservar o log do console durante navegação

Sabe quando você quer debugar algo que acontece um pouco antes de um _redirect_
mas o _redirect_ sempre apaga o _log_ do _console_? Seus problemas acabaram.
Clique com o botão direito no _console_ e escolha a opção
_**Preserve log upon navigation**_.

<figure>
  <img
    src="/images/posts/2014-02-26-preserve-log-upon-navigation.png"
    alt="Atalho para preservar o log entre navegação"
    width="700"
  />
</figure>


## Benchmark usando console.time

Caso queira medir quanto tempo uma determinada operação leva para ser executada,
basta usar `console.time()` e, quando a operação acabar usar o método
`console.timeEnd()` passando a mesma _string_, como no exemplo abaixo.

<figure>
  <img
    src="/images/posts/2014-02-26-console-time.png"
    alt="Atalho para preservar o log entre navegação"
    width="700"
  />
</figure>


## Limpando o histórico do console

Bastante útil quando se começa a usar mais a aba console. `Cmd` + `K` no
OS X e `Ctrl` + `L` no Windows e Linux para limpar o console. Também funciona
com o método `console.clear()`.


## Mais um segredo

A capa do _post_ também possui um pequeno segredo. Existe um rosto escondido
entre os grãos de café. Consegue achar, olhos de águia?
