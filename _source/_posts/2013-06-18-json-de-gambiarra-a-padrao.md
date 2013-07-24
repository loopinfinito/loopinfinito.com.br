---
title: <span>JSON</span>. De gambiarra a padrão
layout: post
author: Caio Gondim
author_link: http://twitter.com/caio_gondim
author_profile: https://plus.google.com/109656206006790732674/
image: images/posts/2013-06-18-json.jpg
tags: javascript
comments: true
keywords: >
  javascript, json, js, crockford, javascript object notation
resumo: >
  O JSON começou como uma alternativa mais simples ao XML para ser um formato
  de troca de dados entre cliente e servidor. Nasceu como uma gambiarra e hoje
  é o **padrão**, sendo implementado nativamente em todos os grandes *browsers*,
  inclusive o <abbr title="Internet Explorer">IE</abbr>.
related:
  - title: The JSON Saga
    url: http://youtu.be/-C-JoyNuQJs
    from: YUI Library Youtube channel
  - title: JSON license
    url: http://www.json.org/license.html
    from: JSON.org
---

Crockford fala que não **inventou** o <abbr title="JavaScript Object
Notation">JSON</abbr>, mas sim o **descobriu** e formalizou. Em 1996, algo em
torno de 5 anos antes da formalização do <abbr title="JavaScript Object
Notation">JSON</abbr> por Crockford, alguns desenvolvedors do Netscape já usavam
*arrays literals* de JavaScript para troca de dados. O que ele fez foi dar uma
especificação e um site ao formato. O restante aconteceu por conta própria.

## A primeira mensagem JSON

Em 2001, Crockford fundou a empresa Veil e nela trabalhava em aplicações *web*
que hoje chamaríamos de aplicações <abbr title="Assynchronous JavaScript and
XML">Ajax</abbr>. Em 2002 a empresa teve o nome alterado para State Software.

![Veil logo](/images/posts/2013-06-18-veil-logo.jpg)

No código abaixo nós temos a primeira mensagem <abbr title="JavaScript Object
Notation">JSON</abbr> trafegada na Veil. Ela foi enviada em abril de 2001, como
resposta (*response*) a um *submit* de um *form* enviado pelo *laptop* de
Crockford.

{% highlight html %}
<html><head><script>
  document.domain = 'fudco.com';
  parent.session.receive(
    {to: "session", do: "test",
    "text": "Hello world"}
  );
</script></head></html>
{% endhighlight %}

Uma breve descrição de como funciona esse código: ele era encapsulado por *tag*s
<abbr title="HyperText Markup Language">HTML</abbr> pois deveria funcionar no
Internet Explorer e Netscape; na segunda linha é redefinido o domínio para que a
política de "same-origin policy" não barrasse a requisição; e, logo depois, o
método `receive` do frame que recebe a mensagem é executado para, de fato,
tratar os dados recebidos. Uma bela **gambiarra**.

Mas o envio da mensagem **falhou**. E o motivo da falha foi o uso da palavra
reservada `do` do JavaScript. Palavras reservadas no JavaScript devem ser
*quoted*, e Crockford então optou por fazer com que, no padrão <abbr
title="JavaScript Object Notation">JSON</abbr>, todas as *keys* fossem *quoted*
ao invés de fazer e atualizar uma lista de todas as palavras reservadas da
linguagem. Assim ficaria mais simples. E, além disso, seguia o mesmo padrão do
Python.

E é por isso que todas as *keys* do <abbr title="JavaScript Object
Notation">JSON</abbr> são *quoted*.

## JSML, o quase-nome

O segundo óbvio passo era escolher um nome para o futuro padrão. **<abbr
title="Java Speech Markup Language">JSML</abbr>** foi o nome escolhido. Mas já
havia uma linguagem, que ninguém nunca tinha ouvido falar, no mundo Java que
usava esse acrônimo, a Java Speech Markup Language.

Com esse empecílho optaram por mudar de nome e então batizaram o novo padrão de
**<abbr title="JavaScript Object Notation">JSON</abbr>**, ou JavaScript Object
Notation.

## Isso não é um padrão

Os clientes da empresa de Crockford se recusaram a usar <abbr title="JavaScript
Object Notation">JSON</abbr> pois alegavam que ele não era um padrão. Então
Crockford **fez dele um padrão**. Ele comprou o domínio
[json.org](http://json.org), definiu a gramática e implementou um *parser* em
Java, para servir de referência. E, desde então, o site está *online* com a
especificação. Praticamente do mesmo jeito desde que foi lançado.

## Ajax

O formato começou a ganhar bastante popularidade com o advento do <abbr
title="Assynchronous JavaScript and XML">Ajax</abbr>, popularizado por [Jesse
James Garrett](http://www.adaptivepath.com/ideas/ajax-new-approach-web-applications)
a partir de 2005. As pessoas achavam trabalhar com <abbr
title="Extensible Markup Language">XML</abbr> algo muito complexo e verboso, e
logo descobriram que as tarefas ficavam mais simples se feitas com <abbr
title="JavaScript Object Notation">JSON</abbr>.

<q class="pushing-quotes">
  JSON is the <strong>intersection</strong> of modern programming languages
</q>

Mesmo com a sigla <abbr title="Assynchronous JavaScript and XML">Ajax</abbr>
significando **Assynchronous JavaScript and XML**, foi o <abbr title="JavaScript
Object Notation">JSON</abbr> que acabou se tornando o padrão de troca de dados
entre cliente e servidor.

## O logo

![JSON logo in the business card](/images/posts/2013-06-18-json-logo-card.jpg)

O logo foi desenhado pelo próprio Crockford. Ele é basedo em uma ilusão de ótica
chamada de *Impossible Torus*. É uma imagem 2D que representa algo 3D que é
impossível de existir em um mundo tridimensional (na verdade, há pouco tempo
provaram o [contrário](http://io9.com/5905144/the-bizarre-object-we-thought-it-
was-impossible-to-visualize)).

## Sem comentários

Com a popularização, algumas pessoas começaram a usar os comentários
para adicionar instruções ao *parser*, gerando uma complexidade desnecessária
e quebrando a interoperabilidade, já que as instruções eram escritas
para *parsers* específicos.

<q class="pushing-quotes">
  The <strong>least</strong> we've to agree to
  <strong>interoperate</strong>, the more likely we're gonna be able to
  <strong>do it well</strong>
</q>

E retirar comentários JavaScript do <abbr title="JavaScript Object
Notation">JSON</abbr> nos *ports* dos *parsers* escritos em outras linguagens
estava, também, adicionando muita complexidade na implementação destes mesmos
*parsers*.

Além disso, com a retirada dos comentários, <abbr title="JavaScript Object
Notation">JSON</abbr> ficava também mais alinhado com a especificação do <abbr
title="YAML Ain't Markup Language">YAML</abbr>, uma outra linguagem de marcação
muito similar com <abbr title="JavaScript Object Notation">JSON</abbr> e que
estava começando a ganhar popularidade.

## Minimalismo

![JSON card](/images/posts/2013-06-18-json-card.jpg)

O formato <abbr title="JavaScript Object Notation">JSON</abbr> foi desenhado
desde o início para ser simples. E sua especificação é tão simples que ela toda
cabe em um cartão de visitas, que Crockford sempre distribui em suas palestras.
Ele defende a idéia de que quanto menos tivermos de concordar em algo para
interoperar, mais provável isso será de acontecer.

## Versionamento

Não há versão 1.0, 1.1 ou nem 2.0 no <abbr title="JavaScript Object
Notation">JSON</abbr>. Na verdade, não existe e não irá existir nunca uma
versão. O que significa que o formato nunca irá mudar. Para Crockford a
estabilidade é mais importante que qualquer nova *feature* que por ventura venha
a ser adicionada. Daí sua decisão em não versionar a especificação.

Talvez um dia o <abbr title="JavaScript Object Notation">JSON</abbr> deixe de
ser o padrão de troca de dados entre diferentes aplicações. Mas <abbr
title="JavaScript Object Notation">JSON</abbr> continuará sendo o mesmo <abbr
title="JavaScript Object Notation">JSON</abbr>. Para sempre.

## Licença

Ao escolher por uma licença, Crockford pensou em usar a <abbr
title="Massachusetts Institute of Technology">MIT</abbr>, por ser bastante
flexível. Mas era 2002, menos de um anos após os atentados terroristas de 11 de
setembro. E ele se sentia na obrigação de "fazer sua parte". Então adicionou uma
linha à licença <abbr title="Massachusetts Institute of Technology">MIT</abbr>:
**The Software shall be used for Good, not Evil.**

<q class="pushing-quotes">
  This software shall be used for <strong>Good</strong>, not
  <strong>Evil</strong>
</q>

E até hoje recebe e-mails de algumas pessoas perguntando: "Como vou saber se o
que faço é mal?". E outras mesmo dizendo: "Não vou usar seu *software* caso não
mude a licença." Parece que Crockford conseguiu "fazer sua parte" =).

E é por isso, meus caros, que o <abbr title="JavaScript Object
Notation">JSON</abbr> é o que é hoje.
