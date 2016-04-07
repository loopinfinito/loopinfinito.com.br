---
title: <span>Ambient Light</span> Events
author: Caio Gondim
author_link: http://twitter.com/caio_gondim
author_profile: https://plus.google.com/109656206006790732674/
author_facebook: https://www.facebook.com/caiogondim
image: images/posts/2013-07-30-ambient-light-events.jpg
tags: javascript
comments: true
keywords: >
  javascript, w3c, js, eventos, events, ambiente, luz, iluminacao, lux, navegador, browser
resumo: >
  Esta nova especificação da <abbr title="World Wide Web Consortium">W3C</abbr>
  define dois novos eventos capazes de detectar mudanças na iluminação do
  ambiente: os __Ambient Light Events__. Antes eles faziam parte da [Sensors
  API](https://dvcs.w3.org/hg/dap/raw-file/default/sensor-api/Overview.html), mas
  foram desmembrados em uma especificação independente de menor escopo. E será com
  estas novas <abbr title="Application Programming Interface">API</abbr>s que
  vamos nos divertir hoje.
related:
  - title: Ambient Light Events
    url: https://dvcs.w3.org/hg/dap/raw-file/default/light/Overview.html
    from: W3C
  - title: Light Bulb
    url: http://cssdeck.com/labs/light-bulb
    from: CSS Deck
---

Esta nova especificação da <abbr title="World Wide Web Consortium">W3C</abbr>
define dois novos eventos capazes de detectar mudanças na iluminação do
ambiente: os __Ambient Light Events__. Antes eles faziam parte da [Sensors
API](https://dvcs.w3.org/hg/dap/raw-file/default/sensor-api/Overview.html), mas
foram desmembrados em uma especificação independente de menor escopo. E será com
estas novas <abbr title="Application Programming Interface">API</abbr>s que
vamos nos divertir hoje.


## Experimento

A idéia desta nova <abbr title="Application Programming Interface">API</abbr> é
bem simples: __medir a iluminação do ambiente__. Para melhor ilustrar o uso e
entendimento da <abbr title="Application Programming Interface">API</abbr>, fiz
um experimento. Infelizmente, no momento que escrevo este _post_, apenas o
Firefox 22 do Mac implementa os eventos _Ambient Light_ no _desktop_.

No experimento abaixo, a lampâda foi totalmente feita com CSS3 (e
muita gambiarra). Além disso, ela também responde a mudanças de iluminação do
ambiente. Experimente apagar a luz do seu quarto ou cobrir o sensor de
luminosidade do seu Mac (dica: ele fica na câmera).

<iframe
  src="http://caiogondim.github.io/css3-lightbulb-with-ambient-light-sensor/"
  height="432"
  width="700"
  class="img"
  frameborder="0"
>
</iframe>

Para quem não pôde rodar o experimento, eis o que acontede: __quando o ambiente
fica escuro__ a luz acende e o _background_ fica preto; __quando há
luminosidade suficiente__, a luz se apaga e o _background_ volta a ser claro.
Como de praxe, o experimento está disponível no
[GitHub](https://github.com/caiogondim/css3-lightbulb-with-ambient-light-sensor)
e _[pull requests](https://github.com/caiogondim/css3-lightbulb-with-ambient-light-sensor/pulls)_
são sempre bem-vindos.


## Light Level Event

Este novo evento descreve a iluminação do ambiente em três possíveis estados:
__dim__, __normal__ e __bright__. Toda vez que houver __mudança na iluminação__
que acarrete em uma mudança de estado __entre os que foram definidos__
anteriormente, o evento é disparado.

Cabe aos navegadores implementarem o intervalo em lux (medida de
iluminação) que define cada um dos três estados. Porém a especificação da
<abbr title="World Wide Web Consortium">W3C</abbr> recomenda que o __dim__
corresponda a ambientes com iluminação menores que 50 lux — escuro o suficiente
para que uma luz produzida por um fundo branco seja uma distração —, __normal__
corresponda a um valor entre 50 e 10.000 lux — uma sala de escritório, o nascer
ou pôr do sol em uma dia claro — e o __bright__ a uma iluminação acima de 10.000
lux — algo como luz solar direta.

Neste evento temos o _event handler_&nbsp;`onlightevent` e o _event handler event
type_&nbsp;`lightlevel`. E são eles que usamos para executar nossa lógica toda vez
que o evento for disparado. Lembrando que, usando o _event handler_, apenas uma
função pode ser disparada a cada evento. Caso seja usado o _event handler event
type_, pode se usar quantas funções forem necessárias como _listeners_ do
evento.

```javascript
// event handler
window.onlightlevel = function(event) {
  console.log(event.value)
}

// event handler event type
window.addEventListener('lightlevel', function(event) {
  console.log(event.value)
})
```


## Device Light Event

Este evento é bem similar ao _Light Event_, a diferença está na granularidade.
Com o _Light Event_ temos apenas três possíveis estados (<em>dim</em>,
<em>normal</em> e <em>bright</em>). Já no _Device Light_ temos acesso direto ao
valor de iluminação do ambiente expresso em lux.

Ele também expõe uma interface comum de evento, com o _event handler_&nbsp;
`ondevicelight` e o _event handler event type_&nbsp;`devicelight`.

```javascript
// event handler
window.ondevicelight = function(event) {
  console.log(event.value)
}

// event handler event type
window.addEventListener('devicelight', function(event) {
  console.log(event.value)
})
```


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
            <td class="property"><code>window.ondevicelight</code></td>
            <td>--</td>
            <td>--</td>
            <td>22.0*</td>
            <td>--</td>
            <td>--</td>
        </tr>
        <tr>
            <td class="property"><code>window.onlightlevel</code></td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
        </tr>
    </tbody>
</table>

Infelizmente, até o momento, o Firefox é o único navegador que implementa essa
nova especificação no _desktop_. E de forma muito restrita ainda, pois só roda
em Macs e apenas o evento _Device Light_ de fato funciona.

```javascript
if ('ondevicelight' in window) {
  // seu navegador dá suporte ao evento *Device Light*
})

if ('onlightlevel' in window) {
  // seu navegador dá suporte ao evento *Light Level*
})
```

Caso queiram testar programaticamente se o navegador onde seu código está sendo
executado dá suporte aos novos eventos, basta verificar pela propriedade
`ondevicelight` ou `onlightlevel` do objeto `window`.
