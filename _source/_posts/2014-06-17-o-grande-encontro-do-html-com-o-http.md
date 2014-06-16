---
title: O grande encontro do <span>HTML</span> com o <span>HTTP</span>
layout: post
author: Almir Filho
author_link: http://twitter.com/almirfilho
author_profile: https://plus.google.com/111718150595519513871/
image: images/posts/2014-06-17-o-grande-encontro-do-http-com-o-html.jpg
tags:
comments: false
keywords: >
  lorem, sss
resumo: >
  lorem
related:
  - title: O grande desencontro do HTTP com o HTML
    url: http://tableless.com.br/o-grande-desencontro-http-com-o-html/
    from: Tableless
---

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


## O problema

Um dia desses lí um
[_post_ muito bom](http://tableless.com.br/o-grande-desencontro-http-com-o-html/ "O grande desencontro do HTTP com o HTML")
do [@jcemer](https://twitter.com/jcemer "Jean Carlo Emer (twitter)") que abordava os
problemas de inconsistência entre o
<abbr title="HyperText Markup Language">HTML</abbr> e o
<abbr title="HyperText Transfer Protocol">HTTP</abbr>. O artigo mencionou
inclusive um rascunho do editor que propuzera umas melhoras ao que se diz
respeito às capacidades dos formulários web de realizar coisas consideradas bem
comuns hoje em dia, mas que dependem de JavaScript e de outras técnicas comuns
desenvolvidas com o intuito de suprir tais limitações do HTML em relação ao
<abbr title="Representational State Transfer">REST</abbr>, como por exemplo o
uso dos métodos `PUT` e `DELETE` diretamente no atributo `method` do `<form>`.

Para entender plenamente do que se tratam esses problemas, recomendo a leitura
do [post do Jean](http://tableless.com.br/o-grande-desencontro-http-com-o-html/)
— o qual inspirou o título deste.


## A motivação

Uns dias depois do _post_ do Jean, me deparei com o seguinte
[tweet](https://twitter.com/w3c/statuses/472032014942879744) do
[@W3C](https://twitter.com/w3c):

<blockquote class="twitter-tweet" lang="en">
    <p>
    First Public Working Drafts: W3C HTML Form HTTP Extensions, W3C HTML JSON
    Form Submission <a href="http://t.co/CDF0LPl0Ve">http://t.co/CDF0LPl0Ve</a>
    </p>
    &mdash; W3C (@w3c)
    <a href="https://twitter.com/w3c/statuses/472032014942879744">May 29, 2014</a>
</blockquote>
<script async="async" src="//platform.twitter.com/widgets.js" charset="utf-8"> </script>

O rascunho do editor virou
[rascunho público do W3C](http://www.w3.org/TR/form-http-extensions/ "W3C HTML Form HTTP Extensions"),
ou seja, parece que a coisa vai rolar mesmo — então decidi dar uma estudada na
proposta e falar um pouco sobre o que achei mais legal. Será esse o encontro
definitivo entre o HTML e seu protocolo de transferência?


## HTML ♥ Forms

As propostas desse rascunho não se referem somente a entrar em conformância com
os verbos REST. Há recursos para padronizar autenticação HTTP e até mesmo para
enviar informações diretamente no _header_ de uma submissão de formulário.


## Métodos HTTP

Será possível especificar quase todos os métodos HTTP através do atributo
`method` de um formulário. Atualmente apenas são suportados os métodos `GET` e
`POST`.

O HTTP tem 9 métodoso, e os únicos que __não__ poderão ser utilizados são
`CONNECT`, `TRACE` e `TRACK`. Claro que, os que saltam aos olhos são os já
utilizados no padrão REST — os métodos `PUT` e `DELETE`. Quanto aos restantes,
consigo imaginar uma utilidade para `HEAD` e `PATCH`, mas não para `OPTION` — e
também não há exemplos de utilização desses métodos no documento do W3C (por
enquanto).

### method="PUT"

dsadasdasda

{% highlight html %}
<form action="http://g1.globo.com/noticias/14" method="PUT">
    <input type="text" name="titulo" value="Daniel Filho aparou a barba." />
    <textarea name="conteudo">
        Daniel Filho finalmente criou vergonha na cara e (...)
    </textarea>
    <button type="submit">Atualizar</button>
</form>
{% endhighlight%}

### method="DELETE"

dasdsadasdsa


## Atributo payload

O atributo `payload` é usado para representar a associação entre um determinado
dado (ou campo) de um formulário a um tipo de esquema de dados na submissão do
formulário. Ele pode ter basicamente três valores:

- `_action`: dasdasd
- `_header`: dasdasd
- `_body`: dasdasd


## Autenticação HTTP

dasdasdasd

- `_username_`
- `_password_`
- `_logout_`


## Suporte

Calma pessoal, quase não tem nem um rascunho ainda.
