---
title: ECMAScript 6 <span>Proxy</span>
layout: post
author: Caio Gondim
author_link: http://twitter.com/caio_gondim
author_profile: https://plus.google.com/109656206006790732674/
author_facebook: https://www.facebook.com/caiogondim
image: images/posts/2014-09-09-ecmascript-6-proxy.jpg
tags: javascript
comments: false
keywords: >
  lorem, ipsum
resumo: >
  O termo *proxy* tem suas origens no Direito dos países de língua inglesa. Um
  *proxy* é alguém com poderes legais de representar uma outra pessoa. No Brasil
  seria algo como alguém que possui uma procuração para representar uma outra.
  No ECMAScript 6, um *proxy* é um objeto que **representa** um outro. Ele é
  capaz de interceptar chamadas às propriedades do objeto alvo, podendo até
  mesmo alterar o resultado da chamada.
related:
  - title: "harmony-proxy shim"
    url: https://github.com/Swatinem/proxy
    from: GitHub
  - title: "Proxy"
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
    from: Mozilla Developer Network
  - title: "Ecmascript 6 - Proxies at a Glance"
    url: http://www.kevinwestern.org/blog/2012/11/07/ecmascript-6-a-quick-look-at-proxies/
    from: Kevin Western's Blog
  - title: "ECMAScript 6 and Proxy"
    url: http://ariya.ofilabs.com/2013/07/es6-and-proxy.html
    from: Ariya Hidayat's Blog
---

O termo *proxy* tem suas origens no Direito dos países de língua inglesa. Um
*proxy* é alguém com poderes legais de representar uma outra pessoa. No Brasil
seria algo como alguém que possui uma procuração para representar uma outra. Por
analogia, o termo acabou sendo usado na computação para designar *softwares* que
atuam por outros como, por exemplo, um
[Web Proxy](http://en.wikipedia.org/wiki/Proxy_server), que funciona como um
intermediário para requisições de um cliente a um servidor externo.

No ECMAScript 6, um *proxy* é um objeto que **representa** um outro. Ele é capaz
de interceptar chamadas às propriedades do objeto alvo, podendo até mesmo
alterar o resultado da chamada.


## Show me the code

Para melhor entender, vamos utilizar um exemplo simples.

{% highlight javascript %}
function Pessoa(nome, idade) {
  this.nome = nome
  this.idade = idade
}

var joao = new Pessoa("João", 37)
console.log(joao.idade) //=> 37
{% endhighlight %}

Acima criamos uma função construtora `Pessoa` e logo após instanciamos um objeto
do tipo `Pessoa`. Checamos sua idade com `console.log` e temos o resultado
esperado: `37`.

Agora vamos usar um *Proxy* para interceptar chamadas à propriedade `idade` do
objeto `joao`:

{% highlight javascript %}
proxy = new Proxy(joao, {
  get: function(target, prop) {
    if (prop === "idade") {
      console.log("Acesso a prop. idade interceptado")
    }

    return target[prop]
  }
})
{% endhighlight %}

Vamos passo-a-passo no código acima. O construtor de um *proxy* aceita dois
argumentos: o primeiro é o `target` — o objeto que queremos interceptar as
chamadas — o segundo é um objeto, que chamaremos por `handler`, que define o
comportamento do *proxy*.

As chaves do objeto `handler` são chamadas de *traps* — ou armadilhas — com os
valores sendo funções que definem como o *proxy* irá se comportar quando esta
*trap* for disparada.

Acima usamos apenas a *trap* `get`, que é disparada quando tentamos ler uma
propriedade do `target` — o objeto que está sendo interceptado. Vamos discutir
mais a fundo sobre todas as *traps* logo.

Também é possível utilizar o *proxy* não apenas como intermediário, mas também
como única porta de entrada para o objeto alvo, de forma transparente. Para
isso, basta armazenar na variável que faz referência ao objeto alvo a própria
referência ao *proxy*.

{% highlight javascript %}
console.log(joao.idade) //=> 37

joao = proxy
console.log(joao.idade) //=> Acesso a prop. idade interceptado
                        //=> 37
{% endhighlight %}

Sendo assim, todo código que fazia referência à variável `joao` passará agora
pelo *proxy* e este irá interceptar as chamadas ao objeto sem
que seja alterado nenhum código antigo.


## Aplicações

Por ser uma <abbr title="Application programming interface">API</abbr> muito
nova, a comunidade ainda há de criar os melhores *cases* de uso dessa nova
*feature* do JavaScript. Porém, alguns cenários já se mostram ideais para a
aplicação dos *proxies*.


### Validação

Podemos usar a armadilha `set` para validarmos o novo valor de uma propriedade
do objeto alvo. Caso seja um valor inválido, disparamos um erro e o valor não
é alterado.

{% highlight javascript %}
joao = new Proxy(joao, {
  set: function(target, prop, val) {
    // Verifica se estamos acessando a propriedade `idade` do obj. alvo
    if (prop === "idade") {
      val = parseInt(val, 10)

      // Verifica se o novo valor é um inteiro
      if (isNaN(val) || !isFinite(val)) {
        throw new TypeError("Idade deve ser um inteiro")
      }

      // Verifica se o novo valor é igual ou maior que 0
      if (val < 0) {
        throw new RangeError("Idade deve ser igual ou maior que 0")
      }

      // Verifica se o novo valor é menor que 200
      if (val >= 200) {
        throw new RangeError("Idade deve ser menor que 200")
      }

      // Comportamento padrão para armazenar o novo valor
      target[prop] = val
    }
  }
})

joao.idade = "Uma string" // Irá disparar o erro `TypeError`
{% endhighlight %}

Neste exemplo estamos validando se a idade é:

- Um número inteiro
- Maior ou igual a zero
- Menor que 200

Perceba que a validação ocorre de forma transparente. Não é usado nenhum método
`setIdade` ou outro método que funciona de intermediário de forma explícita.


### Log

Com um *proxy* fica fácil criar uma função que recebe um objeto, intercepta
e loga todos os acessos às suas propriedades.

{% highlight javascript %}
function loggable(target) {
  target =  new Proxy(target, {
    // Armadilha de acesso a propriedades
    get: function(target, prop) {
      console.log('Lendo prop. ' + prop)
      return target[prop]
    },

    // Armadilha de modificação de propriedades
    set: function(target, prop, val) {
      console.log('Mudando valor da prop. ' + prop + ' para ' + val)
      target[prop] = val
    },

    // Armadilha de deleção de propriedades
    deleteProperty: function(target, prop) {
      console.log('Deletando prop. ' + prop)
      delete target[prop]
    }
  })
}

var joao = new Pessoa("João", 37)
// Loga o acesso a todas as propriedades do objeto `joao`
loggable(joao)

joao.idade //=> Lendo prop. idade
joao.idade = 38 //=> Mudando valor da prop. idade para 38. Era 37
delete joao.idade //=> Deletada prop. idade
{% endhighlight %}

No exemplo acima criamos uma função `loggable` que recebe um objeto como
argumento e retorna um *proxy* que imprime na saída padrão todo o acesso,
mudança e deleção de propriedades do objeto interceptado.


## Armadilhas

Abaixo, uma lista com algumas das armadilhas que achei mais úteis. Vale lembrar
que existem outras além das que estão listadas abaixo. Uma documentação
atualizada e completa sobre armadilhas nos *proxies* pode ser vista na
[Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#Validation).


### Get

Disparada quando se tenta acessar uma propriedade no objeto alvo. A assinatura
do *handler* é a seguinte: `get function(target, name, receiver) -> any`.

{% highlight javascript %}
var foo = {bar: 1}

foo = new Proxy(foo, {
  get: function(target, name, receiver) {
    // Seu código aqui...

    // Comportamento padrão de acesso a propriedade
    return target[name]
  }
})

foo.bar // Armadilha `get` será disparada nesta linha
{% endhighlight %}


### Set

Disparada quando se tenta trocar o valor de uma propriedade do objeto alvo.
A assinatura do *handler* é: `set function(target, name, val, receiver) -> boolean`.

{% highlight javascript %}
var foo = {}

foo = new Proxy(foo, {
  set: function(target, name, val, receiver) {
    // Seu código aqui...

    // Comportamento padrão
    return target[name] = val
  }
})

{% endhighlight %}


### Has

Disparado quando é verificado se uma propriedade existe no objeto alvo através
do código `prop in proxy`. A assinatura do *handler* é:
`has function(target, name) -> boolean`.

{% highlight javascript %}
var foo = {bar: 1}

foo = new Proxy(foo, {
  has: function(target, name) {
    // Comportamento padrão
    return name in target
  }
})
{% endhighlight %}


### Enumerate

Retorna um *array* de *string* com o nomes das propriedades que devem ser lidas
em um *loop* `for in`. A assinatura do *handler*:
`enumerate function(target) -> [String]`.

{% highlight javascript %}
var foo = {lorem: 1, ipsum: 2}

foo = new Proxy(foo, {
  enumerate: funtion(target) {
    return ['lorem']
  }
})

for (prop in foo) {
  // irá iterar apenas na propriedade `lorem`
}
{% endhighlight %}


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
      <td class="property">Proxy</td>
      <td>*</td>
      <td>--</td>
      <td>32</td>
      <td>--</td>
      <td>--</td>
    </tr>
  </tbody>
  <tfoot>
    <tr><td colspan="6">* implementado, porém na antiga especificação</td></tr>
  </tfoot>
</table>

Agora as más notícias. Atualmente a última versão da Proxy
<abbr title="Application programming interface">API</abbr> definida no
ECMAScript 6 só está disponível no Firefox. No V8, a máquina virtual de
JavaScript do Chrome e Node.js, ela também está presente, porém está
implementada conforme a definição antiga. Entretanto é possível usar um *shim*,
como o [harmony proxy](https://github.com/Swatinem/proxy), para normalizar a
antiga <abbr title="Application programming interface">API</abbr> com a nova no
Chrome e Node.js.

Para mais informações sobre compatibilidade do ECMAScript 6 com os mais
populares ambientes JavaScripts, aconselho uma visita na
[tabela de compatibilidade](http://kangax.github.io/compat-table/es6/) do
[kangax](https://twitter.com/kangax).
