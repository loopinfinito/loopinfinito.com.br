---
title: Vibration API
tags: javascript
author: almir
image: images/posts/2014-02-11-vibration-api.jpg
comments: true
keywords: >
  vibration api, vibration, html5, javascript, api, vibrator, vibrate, acesso a
  dispositivos, dispositivo, mobile, movel, vibrar, suporte, navegadore,
  browser, firefox os, firefox, chrome, safari, ie, opera, html
resumo: >
  Embora __ainda__ não seja possível provocar terremotos de escala geográfica,
  já podemos fazer dispositivos vibrar com
  <abbr title="HyperText Markup Language">HTML5</abbr>. Uma
  <abbr title="Application Programming Interface">API</abbr> bastante simples e
  que possibilita algumas funcinoalidades bem interessantes no contexto
  _mobile_.
references:
  - title: Vibration API (recommendation)
    url: http://www.w3.org/TR/vibration/
    from: W3C
  - title: How to Use the HTML5 Vibration API
    url: http://www.sitepoint.com/use-html5-vibration-api/
  - title: Remotely vibrate a phone with morse code using web sockets and the vibrate API
    url: http://www.smartjava.org/content/html5-remotely-vibrate-phone-morse-code-using-web-sockets-and-vibrate-api
---

Embora __ainda__ não seja possível provocar terremotos de escala geográfica, já
podemos fazer dispositivos vibrar com  <abbr title="HyperText Markup
Language">HTML5</abbr>. Entenda por dispositivo qualquer meio de acesso que
possua um _hardware_ específico que possibilite isso — como os dispositivos
móveis, pois não faria o mínimo sentido seu computador vibrar (ou não?).

Muitas dessas novas APIs de acesso a dispositivos são focadas em utilidades
_mobile_ (assim como a
[Battery API](http://loopinfinito.com.br/2013/03/21/battery-api/ "Battery API")),
e eu diria que a Mozilla é a entidade que mais investe nessas especificações,
pelo simples fato de que ela mantém o Firefox OS, cuja proposta é funcionar
totalmente em cima dos padrões abertos da _web_.

## Curiosidade

Originalmente, o nome dessa <abbr title="Application Programming
Interface">API</abbr> seria __Vibrator__ (vibrador), mas, por questões óbvias,
preferiram mudar para _Vibration_. #tr00l

## Uma API enorme

Essa <abbr title="Application Programming Interface">API</abbr> é tão extensa
que dá até medo, eis a listagem de todas as suas propriedades e métodos:

### navigator.vibrate()

Pronto. É isso. Já podemos ir pra praia? Sério, só tem esse método. Legal né?
(aposto que tem muita gente comemorando agora.) De acordo com a
[spec](http://www.w3.org/TR/vibration/#vibration-interface), esse método recebe
apenas um parâmetro que representa uma duração de tempo que o dispositivo deve
permanecer vibrando.

```javascript
navigator.vibrate(1000); // vibra por 1000ms (1s)
```

Esse parâmetro também pode ser uma lista representando um padrão de toques, onde
cada item da lista alterna entre tempo de duração de uma vibração e tempo de
duração de uma intervalo. Com um exemplo fica mais fácil de entender:

```javascript
navigator.vibrate([500, 1000, 800, 500, 1000]);
```

No trecho acima o dispositivo começará vibrando por 500ms, depois pausa por
1000ms, vibra novamente por 800ms, pausa por 500ms e termina vibrando por mais
1000ms.

Caso uma chamada de vibração já tenha sido disparada, também é possível
cancelá-la passando um zero ou um _array_ vazio como parâmetro.

```javascript
navigator.vibrate(0); // cancela qualquer vibração em execução
navigator.vibrate([]); // mesma coisa que o anterior
```

Quer testar o suporte?

```javascript
if('vibrate' in navigator){
    // tann namm!
}
```

## Utilidades

Tá, mas o que faço com essa <abbr title="Application Programming
Interface">API</abbr>? Bem, considerando que o mecanismo de vibração causa um
simples _feedback_ tátil, existem algumas utilidades que podem ser de interesse
para uma aplicação móvel. As mais comuns são, por exemplo, alertar o usuário ao
disparar uma notificação, mensagem ou ligação e vibrar em momentos específicos
ao decorrer de um jogo (uma bomba explodindo, talvez) — causando uma maior
imersão para o jogador.

Outras utilidades não tão óbvias poderiam ser, por exemplo, guiar um usuário
portador de deficiência visual em um ambiente, onde cada tipo de vibração
poderia corresponder a direcionamentos como 'esquerda', 'direita', 'trás',
'frente', etc. Um experimento que achei bastante criativo foi um
[comunicador em código morse](http://www.smartjava.org/content/html5-remotely-vibrate-phone-morse-code-using-web-sockets-and-vibrate-api)
entre dois dispositivos utilizando a <abbr title="Application Programming
Interface">API</abbr> de vibração e _Web Sockets_. A partir daí vai de acordo
com a criatividade de cada um.

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
            <td class="property"><code>navigator.vibrate()</code></td>
            <td>32 *</td>
            <td>--</td>
            <td>26 *</td>
            <td>?</td>
            <td>--</td>
        </tr>
    </tbody>
    <tfoot>
        <td colspan="6">
            * Ainda não há nenhuma informação no <a href="http://caniuse.com/">caniuse</a>
            à respeito da Vibration <abbr title="Application Programming Interface">API</abbr>,
            então fiz essa verificação nos navegadores que tenho atualmente.
        </td>
    </tfoot>
</table>
