---
title: Transições em interfaces
tags: interface
author: caio
image: images/posts/2013-04-30-interfaces-transitorias.gif
comments: true
keywords: >
  interface, transição, ui, user experience, user interface, usuário, ux, ihc,
  hci, transition, animation
excerpt: >
  Transições em interfaces podem ser mais do que algo "bonitinho". Se usadas de
  forma correta, elas não só melhoram a aparência da aplicação como também sua
  __funcionalidade__, diminuindo o esforço cognitivo do usuário e deixando assim
  mais claro, por exemplo, uma troca de contexto. Abaixo segue a tradução, com a
  devida permissão, do excelente [post](https://medium.com/design-ux/926eb80d64e3)
  do [Pasquale D'Silva](http://psql.me/) sobre como melhor utilizar transições em
  interfaces.
---

<style>
  .post-animation-static {
    position: relative;
    left: -50px;
    width: 700px;
  }

  .post-animation {
    opacity: 0;
    left: 0 !important;
    width: 700px;
    display: block;
  }

  .post-animation-visible {
    opacity: 1;
  }
</style>

Transições em interfaces podem ser mais do que algo "bonitinho". Se usadas de
forma correta, elas não só melhoram a aparência da aplicação como também sua
__funcionalidade__, diminuindo o esforço cognitivo do usuário e deixando assim
mais claro, por exemplo, uma troca de contexto.

Este _post_ é bastante visual, com muitas animações. Para que ele não ficasse
muito "piscante" e prejudicasse a leitura, as animações estão desabilitadas por
padrão. __Para iniciá-las, coloque o _mouse_ sobre as imagens__.

Abaixo segue a tradução, com a
devida permissão, do excelente [post](https://medium.com/design-ux/926eb80d64e3)
do [Pasquale D'Silva](http://psql.me/) sobre como melhor utilizar transições em
interfaces. Espero que curtam.

## ...

Designers adoram detalhes. Muito tempo é gasto deixando botões perfeitos _pixel_
a _pixel_, em estilos de _forms_, escolhendo a melhor tipografia, e deixando
aqueles ícones sem serrilhas. Nota 10, mandaram bem, continuem com o trabalho
classe A.

...mas pouco tempo é gasto arquitetando como tudo isso se junta no final, fora
de uma composição estática. Você clica em um botão e o _form_
simplesmente...<strong>aparece</strong>? Você dá um _swipe_ pra deletar um item
e ele simplesmente __some__? Isso é superestranho e nada natural. Praticamente
nada no mundo real muda de estado tão abruptamente. Iria parecer que algo está
errado.

Ahh, mas o designer deixou uma observação: "Isto tem um efeito de slide".

Como? Rápido? Ele tem _bounce back_? _Cushion in_? _Design_ estático não fornece
contexto sobre troca de estados.

As pessoas insistem em usar a palavra "lindo" quando falam sobre animações e
interações "bonitinhas". Ótimo para elas. Mas vocês sabiam que...animações podem
ser usadas de forma __funcional__ também? Não é apenas um detalhe de
embelezamento.

Animações tiram proveito de uma dimensão geralmente esquecida: __tempo__. Esse
tecido invisível onde o universo é costurado. E você não precisa ser um
matemático sequelado para entender isso.

Vamos dar uma olhada em algumas idéias.

## <em>Easing</em> / <em>Cushioning</em>

Em animação tradicional, o _breakdown_ determina como um objeto se move do
__Ponto A__ para o __Ponto B__. Ele determina como o restante dos _frames_ irão
se comportar. Vamos pegar esses 25 _frames_ interpolados, onde o _frame_ 13 muda
de posição.

<figure class="post-animation-static" style="background-image: url(/images/posts/2013-04-30-linear-computer-garbage-static.jpg)">
  <img class="post-animation" style="height: 350px;"
      src="/images/posts/2013-04-30-linear-computer-garbage.gif"
      title="Linear Computer Garbage" alt="Linear Computer Garbage" />
</figure>

<figure class="post-animation-static" style="background-image: url(/images/posts/2013-04-30-ease-in-static.jpg)">
  <img class="post-animation" style="height: 350px;"
      src="/images/posts/2013-04-30-ease-in.gif"
      width="700" height="350" title="Ease-in" alt="Ease-in" />
</figure>

<figure class="post-animation-static" style="background-image: url(/images/posts/2013-04-30-ease-out-static.jpg)">
  <img class="post-animation" style="height: 350px;"
      src="/images/posts/2013-04-30-ease-out.gif"
      width="700" height="350" title="Ease-out" alt="Ease-out"/>
</figure>

Olha isso! Você acabou de aprender <em>easing</em>/<em>cushioning</em>.
Computadores são idiotas e adoram preencher espaços de forma linear porque são
apenas sacos de fios preguiçosos. Um bom designer de
<em>motion</em>/<em>animação</em> gasta boa parte de seu tempo lutando contra
computadores para que eles não bagunçem com isto.

Animação é uma questão de _timing_. É possível brincar com todos os possíveis
diferentes espaçamentos para obtermos resultados diferentes. Mas chega disso.
Isso não é um tutorial sobre animação, a idéia era fazer com que você pensasse
na linguagem do tempo e espaço.

## Algumas idéias de animação no contexto de Interfaces

Como disse antes, animações podem ajudar a fornecer __contexto__. Isso ajuda o
cérebro a entender o fluxo da informação.

### Inserindo um item em uma lista

Digamo que você está olhando a uma lista de coisas no mundo real. E você
adoraria popular essa lista com dados reais. Se você desse esse trabalho a um
computador, teria um resultado parecido com isto:

<figure class="post-animation-static" style="background-image: url(/images/posts/2013-04-30-insert-an-item-into-a-list-without-transition-static.jpg)">
  <img class="post-animation" style="height: 350px;"
      src="/images/posts/2013-04-30-insert-an-item-into-a-list-without-transition.gif"
      title="Inserção de item na lista sem transição" alt="Inserção de item na lista sem transição" />
</figure>

Ahhh, isso tá muito ruim.

Suavizar isto só requer alguns _frames_ adicionais de animação. O que acha de dar
uma dica ao seu cérebro sobre o que está acontecendo na lista?

<figure class="post-animation-static" style="background-image: url(/images/posts/2013-04-30-insert-an-item-into-a-list-with-transition-1-static.jpg)">
  <img class="post-animation" style="height: 350px;"
      src="/images/posts/2013-04-30-insert-an-item-into-a-list-with-transition-1.gif"
      title="Inserção de item na lista com transição" alt="Inserção de item na lista com transição" />
</figure>

<figure class="post-animation-static" style="background-image: url(/images/posts/2013-04-30-insert-an-item-into-a-list-with-transition-2-static.jpg)">
  <img class="post-animation" style="height: 350px;"
      src="/images/posts/2013-04-30-insert-an-item-into-a-list-with-transition-2.gif"
      title="Inserção de item na lista com transição" alt="Inserção de item na lista com transição" />
</figure>

Para que um novo item seja adicionado a lista é preciso primeiro criar espaço
para que, só então, o item (que vem do além) preencha o espaço recém-criado.
__Muito__ mais óbvio. Existe também _ease-in_ e _ease-out_ para suavizar a
mudança. Desta forma a mudança parece mais natural pois nós temos um gancho
contextual no espaço - espelhando o modo que adicionaríamos algo a uma pilha de
coisas reais.

### Entrando (<em>drilling down</em>) em uma lista de itens

Existe a abordagem clássica de dar um _slide_ para um item. Um padrão bastante
usado, mas que não faz muito sentido espacialmente:

<figure class="post-animation-static" style="background-image: url(/images/posts/2013-04-30-list-item-1-static.jpg)">
  <img class="post-animation" src="/images/posts/2013-04-30-list-item-1.gif"
      title="Drilldown em uma lista" alt="Drilldown em uma lista"
      data-title-backup="Drilldown em uma lista" data-alt-backup="Drilldown em uma lista" />
</figure>

A direção do _slide_ não nos dá de fato nenhuma "dica" fora de um contexto
linear de _views_.

E se considerarmos um item como um container que expandimos para mostrar mais
detalhes, _inline_?

<figure class="post-animation-static" style="background-image: url(/images/posts/2013-04-30-list-item-2-static.jpg)">
  <img class="post-animation" style="height: 400px;"
      src="/images/posts/2013-04-30-list-item-2.gif"
      title="Drilldown em uma lista" alt="Drilldown em uma lista" />
</figure>

Se o objetivo é entrar na lista e dar atenção e foco total ao item, nós poderiamos
fazer com que tudo sumisse dentro da mesma _view_:

<figure class="post-animation-static" style="background-image: url(/images/posts/2013-04-30-list-item-3-static.jpg)">
  <img class="post-animation" style="height: 400px;"
      src="/images/posts/2013-04-30-list-item-3.gif"
      title="Drilldown em uma lista" alt="Drilldown em uma lista" />
</figure>

Usar > <em>breadcrumb</em> > para > chegar > até > a > <em>view</em> > é um
ótimo método para fazer com que o usuário se perca.

Uma vantagem de permanecer _inline_ é que você pode remover a explicação sobre o
quão fundo o usuário está dentro de uma _sub-view_. Você pode retirar a
visualização de uma navegação hierárquica porque o usuário __viu__ como ele
chegou lá.

É claro que a idéia acima não funciona em todos os casos – mas essa perspectiva
pode levar a soluções mais elegantes sobre como conectar o fluxo de informações.

## Thinglist - um exemplo implementado

<figure class="post-animation-static" style="background-image: url(/images/posts/2013-04-30-thing-list-static.jpg)">
  <img class="post-animation" style="height: 450px;"
      src="/images/posts/2013-04-30-thing-list.gif"
      title="Thinglist" alt="Thinglist" />
</figure>

O [Thinglist](http://appstore.com/thinglist),  um produto da
[Elepath](http://elepath.com) que eu (Pasquale D'Silva) estou trabalhando junto
com [Kyle Bragger](http://kylebragger.com), possui algumas transições na
interface bem divertidas. O exemplo acima demonstra como revelamos a nova _feature_
de filtro.

### Outros exemplos que valem a pena serem vistos

Eu não consigo realmente sugerir muitos...Em uma extremidade da escala, existem
várias interfaces bonitas, mas totalmente estáticas. Na outra ponta, interfaces
com animações desnecessárias a fim apenas de "embelezar".

Três me vêem à cabeça agora:

- [Clear](http://www.realmacsoftware.com/clear/): bastante orientado a animações
- [Willcal](https://www.getwillcall.com/): possui um ritmo consistente,
  cinético. Não existem mudanças de estado sem transição. É um prazer usar.
- Facebook.app: não é muito consistente, mas apresenta algumas soluções
  interessantes para guiar o foco.

Pra mim é meio louco pensar que a maioria das pessoas não leva em consideração a
dimensão do tempo quando tratam de interfaces. _Motion_ pode nos dar muita
informação! Talvez as ferramentas para a criação de protótipos sejam muito
complexas para a maioria dos _designers_.

Eu (Pasquela D'Silva) originalmente escrevi isto como um documento interno para
os empregados da Elepath, para iniciar a explicar minha obsessão com _motion_.
Afinal, eu sou um [animador](http://psql.carbonmade.com/).

Nós achamos que seria legal compartilhar este documento para discussão. Eu
adoraria ouvir comentários de outras pessoas que constroem interfaces, com um
cuidado especial sobre como e porque elas se movem.

<aside class="fonte">
  <h3>Referência</h3>
  <ul>
    <li>
      <a href="https://medium.com/design-ux/926eb80d64e3">
        Transitional Interfaces
      </a>
      <span class="comment">// post original traduzido com a permissão do autor</span>
    </li>
  </ul>
</aside>

<script>
  // no mouseenter, reseta o src do GIF para que ele reinicie a animationimação
  $('.post-animation-static')
    .on('mouseenter', function(event) {
      var $postAnimation = $(this).find('.post-animation')

      if ($postAnimation.attr('data-src-backup') === undefined) {
        $postAnimation.attr('data-src-backup', $postAnimation.attr('src'))
        $postAnimation.attr('data-title-backup', $postAnimation.attr('title'))
      }

      $postAnimation
        .addClass('post-animation-visible')
        .attr('src', $postAnimation.attr('data-src-backup'))
        .attr('title', '') // remove title para que não apareça o hover tooltip
    })
    .on('mouseleave', function(event) {
      var $postAnimation = $(this).find('.post-animation')
      $postAnimation
        .removeClass('post-animation-visible')
        .attr('src', '')
        .attr('title', $postAnimation.attr('data-title-backup'))
    })
</script>
