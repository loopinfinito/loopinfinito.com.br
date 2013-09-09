---
title: Mudando o fluxo do conteúdo com <span>CSS Regions</span>
layout: post
author: Almir Filho
author_link: http://twitter.com/almirfilho
author_profile: https://plus.google.com/111718150595519513871/
image: images/posts/2013-09-10-css-regions.jpg
tags:
comments: false
keywords: >
  lorem
resumo: >
  lorem
related:
  - title: CSS Regions Module Level 1 (draft)
    url: http://dev.w3.org/csswg/css-regions/
    from: W3C
---

Com as __CSS Regions__ poderemos modificar o _layout_ e o modo como o conteúdo
flui em páginas _web_.
Um ótimo caso de uso são os jornais e revistas, que geralmente utilizam _layouts_
multi colunas com imagens, citações e por ai vai.

Construir o _layout_ da imagem acima apenas com o _box model_ seria uma tarefa
fácil. Algumas _divs_, alguns _floats_ e pronto. Não é?

## Não seja tosco

O problema é fazer o conteúdo (texto e imagens) fluir corretamente por entre
esses elementos de forma automática — caso contrário, se "cortarmos" o conteúdo
em várias partes diferentes e separá-lo devidamente, ainda infrentaremos uma
série de problemas, pois, __1:__ os navegadores renderizam fontes de formas
diferentes, então seu _layout_ indubitavelmente quebrará em alguns navegadores;
e __2:__ a manutenibilidade do seu código arderá no fogo do inferno, visto que,
se algumas propriedades de aparência do texto mudarem (como tamanho de fonte,
espaçamento de linha ou letra, etc.), você terá que fazer tudo novamente. Tosco.

## Antes de continuar

![Experimental WebKit features](/images/posts/2013-05-28-enable-webkit-experimental-features.jpg)

Para visualizar os exemplos deste _post_ corretamente, você deve estar utilizando
o navegador __Google Chrome__ e é preciso habilitar uma _flag_ dele primeiro.
Na versão estável (atualmente 29) basta digitar __chrome://flags__ na barra de
endereços, e habilitar a opção __Experimental WebKit features__, como na imagem
acima. Depois reinicie o navegador.

## Bruce Lee aprova

![Be water, my friend](/images/posts/2013-09-10-be-water-my-friend.jpg "Be water, my friend")

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

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
      <td class="property"><code>shape-outside</code></td>
      <td>25 <code class="obs">*1</code><br /><code class="small">-webkit-</code></td>
      <td>--</td>
      <td>--</td>
      <td>--</td>
      <td>--</td>
    </tr>
    <tr>
      <td class="property"><code>shape-margin</code></td>
      <td>--</td>
      <td>--</td>
      <td>--</td>
      <td>--</td>
      <td>--</td>
    </tr>
    <tr>
      <td class="property"><code>shape-image-threshold</code></td>
      <td>--</td>
      <td>--</td>
      <td>--</td>
      <td>--</td>
      <td>--</td>
    </tr>
    <tr>
      <td class="property"><code>shape-inside</code></td>
      <td>25 <code class="obs">*1</code> <code class="obs">*2</code><br /><code class="small">-webkit-</code></td>
      <td>--</td>
      <td>--</td>
      <td>--</td>
      <td>--</td>
    </tr>
    <tr>
      <td class="property"><code>shape-padding</code></td>
      <td>25 <code class="obs">*1</code> <code class="obs">*2</code><br /><code class="small">-webkit-</code></td>
      <td>--</td>
      <td>--</td>
      <td>--</td>
      <td>--</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="6">
        *1 – Features habilitadas através de uma flag<br />
        *2 – Propriedades removidas da spec por hora
      </td>
    </tr>
  </tfoot>
</table>