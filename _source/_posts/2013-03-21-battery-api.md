---
title: <span>Battery</span> API
layout: post
author: Almir Filho
author_link: http://twitter.com/almirfilho
author_profile: https://plus.google.com/111718150595519513871/
image: images/posts/2013-03-21-battery-api.png
has_inner_image: false
tags: HTML5 javascript experimento
comments: true
keywords: >
  bateria, battery, api, html5, javascript, js, charging, carregar, tempo,
  eventos, experimento, nivel, level, descarregar, chargingTime, dischargingTime,
  onchargingtimechange, onchargingchange, ondischargingtimechange, onlevelchange
resumo: >
  A **Battery API** permite que tenhamos acesso a informações sobre a bateria do
  nosso dispositivo – seja ele um dispositivo móvel (*smartphone* ou *tablet*) ou
  um *laptop*. Veja o *status* da sua bateria neste pequeno exeperimento que
  desenvolvi *a la windows 8*.
---

Eis mais uma nova API HTML5 de **acesso à dispositivos**.
A **Battery API** permite que tenhamos acesso a informações sobre a bateria do
nosso dispositivo – seja ele um dispositivo móvel (*smartphone* ou *tablet*) ou
um *laptop*.
No caso de computadores *desktop*, não teremos esta informação disponível.
Veja o *status* da sua bateria neste pequeno exeperimento que desenvolvi
*a la windows 8*:

<iframe src="http://almirfilho.github.com/html5-battery-api-experiment/" height="432" frameborder="0" class="img">&nbsp;</iframe>

<p class="obs">
	<strong>OBS.:</strong> O exeperimento acima funciona apenas no navegador
	<em>Firefox</em> atualizado por enquanto (no momento em que escrevo este
	<em>post</em>, estou usando a <strong>versão 19</strong>).
</p>

## Sobre o exeperimento

Além de informar o nível da bateria, o canto inferior direito pode indicar se sua
bateria está sendo carregada (ícone de um raio) ou se seu dispositivo está sendo
alimentado diretamente por uma fonte de energia (ícone de uma tomada) – é o caso
se sua bateria estiver totalmente carregada e ligada a uma fonte de energia.
O exeperimento encontra-se disponível no
[GitHub](https://github.com/almirfilho/html5-battery-api-experiment).

## navigator.battery

Todas as funcionalidades relacionadas a bateria estão definidas na interface
`BatteryManager`, que é acessível através do objeto `navigator.battery`.

{% highlight javascript %}
if( navigator.battery ){
    // seu navegador suporta a Battery API
}

// testando com os vendor prefixes
var battery = navigator.battery || navigator.mozBattery || navigator.webkitBattery

if( battery ){
    // seu navegador suporta a Battery API
}
{% endhighlight %}

Como já mencionado, apenas a implementação `navigator.mozBattery` existe
atualmente.

## Propriedades

A API possui apenas 4 propriedades bem simples: `charging`, `chargingTime`,
`dischargingTime` e `level`. Justamente pela simplicidade, cada uma delas já se
auto explica apenas pelo seu nome.

### charging

Booleano que indica se a bateria do dispositivo está ou não sendo carregada.
Note que isto **não** é o mesmo que dizer se a bateria está (ou não) conectada a
uma fonte de energia, pois temos o caso de estar ligada na fonte **e** 100% carregada,
o que implica em dizer que o dispositivo talvez passe a utilizar a energia
proveniente da fonte – isto acontece no MacBook e nos dispositivos iOS.

{% highlight javascript %}
if( navigator.battery.charging ){
    // a bateria está sendo carregada
}
{% endhighlight %}

### chargingTime

Fornece o tempo estimado para que a bateria carregue totalmente.
Se a bateria estiver carregando – ou seja, se `charging == true` –, seu valor
será um inteiro que representa o tempo em segundos.
Caso contrário, será `'Infinity'` – o que faz sentido pois se a bateria não está
carregando, podemos dizer que o tempo estimado é infinito.

{% highlight javascript %}
if( navigator.battery.charging ){
    console.log( navigator.battery.chargingTime ) // 3226s
    // faltam 53.7min para terminar de carregar
}
{% endhighlight %}

### dischargingTime

Ao contrário de `chargingTime`, fornece o tempo estimado para que a bateria
descarregue totalmente.
Se a bateria não estiver carregando – quando `charging == false` –, seu valor
será um inteiro que representa o tempo em segundos.
Caso contrário, será `'Infinity'`.

{% highlight javascript %}
if( !navigator.battery.charging ){
    console.log( navigator.battery.dischargingTime ) // 5564s
    // faltam 1h32min para descarregar totalmente
}
{% endhighlight %}

### level

Indica o nível de carga atual da bateria – *float* de 0 a 1.

{% highlight javascript %}
console.log( navigator.battery.level ) // 0.34 = 34% de carga
{% endhighlight %}

## Eventos

Para cada uma das 4 propriedades mostradas acima, temos um evento associado.

### onchargingchange

`onchargingchange` será disparado toda vez que o valor de `charging` mudar.

{% highlight javascript %}
navigator.battery.addEventListener( 'chargingchange', function(){
    if( navigator.battery.charging ){
        console.log( 'Bateria carregando' )
    } else {
        console.log( 'Bateria DEScarregando' )
    }
}, false)
{% endhighlight %}

### onchargingtimechange

Se a bateria estiver carregando, `onchargingtimechange` será disparado toda vez
que o valor de `chargingTime` mudar.

{% highlight javascript %}
navigator.battery.addEventListener( 'chargingtimechange', function(){
    var tempoRestante = navigator.battery.chargingTime / 60
    console.log( 'Faltam ' + tempoRestante + ' minutos para terminar de carregar' )
}, false)
{% endhighlight %}

### ondischargingtimechange

De maneira análoga a `onchargingtimechange`, se a bateria **não** estiver
carregando, `ondischargingtimechange` será disparado toda vez que o valor de
`dischargingTime` mudar.

{% highlight javascript %}
navigator.battery.addEventListener( 'dischargingtimechange', function(){
    var tempoRestante = navigator.battery.dischargingTime / 60
    console.log( 'Faltam ' + tempoRestante + ' minutos para descarregar totalmente' )
}, false)
{% endhighlight %}

### onlevelchange

`onlevelchange` será disparado toda vez que o valor de `level` mudar.

{% highlight javascript %}
navigator.battery.addEventListener( 'levelchange', function(){
    var nivel = navigator.battery.level * 100
    console.log( 'O nível da bateria mudou para ' + nivel + '%' )
}, false)
{% endhighlight %}

## Pra quê isso em JavaScript?

É bem provável que você esteja ai pensando: *"mas que coisa inútil"* – o que
seria bem compreensível, mas, vamos pensar melhor.

A principal utilidade desta API se dá na **plataforma móvel**, onde geralmente
temos recursos bem mais escassos em relação aos outros tipos de dispositivos com
os quais estamos acostumados (*desktops* e *laptops*).
Um destes recursos é justamente a quantidade de energia disponível.

Sem saber qual o *status* da bateria, um desenvolvedor terá que projetar uma
aplicação assumindo o de risco que sempre haverá quantidade de energia suficiente
para realizar seja qual for a tarefa pretendida.
Isto significa que uma aplicação mal implementada – no sentido de ser ineficiente
– poderá exaurir a bateria do usuário facilmente, piorando assim a **experiência
do usuário**.

### Um exemplo

Vamos imaginar que desenvolvemos uma *web app* para o novíssimo Firefox OS.
Nossa *app* deverá realizar *polling*, isto é, deverá, de tempos em tempos, acessar
uma determinada fonte de dados para checar se há informação nova disponível –
digamos, por exemplo que nossa *app* pergunta ao Facebook de 5 em 5 segundos
se há algo de novo. Em um intervalo de 1 hora, nossa aplicação fará 720
requisições **só pra saber se tem algo de novo** (obter as novidades de fato já são
outros quinhentos). 720 requisições por hora pode facilmente comprometer a
bateria de um dispositivo móvel, então, o ideal seria, por exemplo, fazer essas
requisições de 20 em 20 segundos (baixando a quantidade de requisições por hora
para 180) quando o dispositivo **não estiver carregando** e manter os 5 segundos para
quando estiver conectado a uma fonte de energia.

Com a Battery API será possível aos desenvolvedores ter um *feedback* mais
apurado em relação a este tipo de problema, o que auxiliará na tomada de decisão
e consequentemente na melhora da qualidade de *software*.

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
      <td class="property">Battery API</td>
      <td>--</td>
      <td>--</td>
      <td>16 *</td>
      <td>--</td>
      <td>--</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="6">
        * O Firefox já dava suporte prefixado desde a versão 10 (<code>mozBattery</code>)
      </td>
    </tr>
  </tfoot>
</table>

<aside class="fonte">
    <h3>Referência</h3>
    <ul>
        <li><a href="http://www.w3.org/TR/battery-status/" alt="Battery Status API" title="Battery Status API">Battery Status API</a> <span class="comment">// W3C</span></li>
        <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.navigator.battery" alt="window.navigator.battery" title="window.navigator.battery">window.navigator.battery</a> <span class="comment">// MDN</span></li>
    </ul>
</aside>
