---
title: O grande encontro do HTML com o HTTP
tags: html
author: almir
image: images/posts/2014-06-19-o-grande-encontro-do-html-com-o-http.jpg
comments: true
keywords: >
  form, html, http, formulário, método, method, put, delete, get, post, rest,
  w3c, rascunho, login, logout, autenticação, header, body, action, ação, jean
  carlo emer, payload, _username_, _password_, _logout_, ian hickson, firefox,
  connect, trace, track, head, options, patch, cabeçalho, sumissão, requisição,
  almir filho, loop infinito
description: >
  Há uma proposta na W3C para ampliar as capacidades dos formulários _web_.
  Algumas dessas melhoras dizem respeito às capacidades dos formulários web de
  realizar coisas consideradas bem comuns hoje em dia, mas que dependem de
  JavaScript e de outras técnicas comuns que viabilizem seus usos.
references:
  - title: O grande desencontro do HTTP com o HTML
    url: http://tableless.com.br/o-grande-desencontro-http-com-o-html/
    from: Tableless
  - title: W3C HTML Form HTTP Extensions
    url: http://www.w3.org/TR/form-http-extensions/
    from: W3C
---

Li um
[_post_ muito bom](http://tableless.com.br/o-grande-desencontro-http-com-o-html/ "O grande desencontro do HTTP com o HTML")
do [@jcemer](https://twitter.com/jcemer "Jean Carlo Emer (twitter)") que
aborda os problemas de inconsistência entre o
<abbr title="HyperText Markup Language">HTML</abbr> e o
<abbr title="HyperText Transfer Protocol">HTTP</abbr>. O artigo menciona,
inclusive, um rascunho do editor que propunha melhorias ao que se diz
respeito às capacidades dos formulários web de realizar tarefas consideradas bem
comuns hoje em dia, mas que dependem de JavaScript e de outras técnicas comuns
que viabilizem seus usos. Algumas dessas técnicas foram desenvolvidas com o
intuito de suprir algumas questões divergentes entre o HTML e o HTTP, sobretudo
quando se deseja utilizar
<abbr title="Representational State Transfer">REST</abbr>
— como por exemplo o uso dos métodos `PUT` e `DELETE` diretamente no atributo
`method` do `<form>`.

Para entender plenamente do que se tratam esses problemas, recomendo a leitura
do [post do Jean](http://tableless.com.br/o-grande-desencontro-http-com-o-html/)
— o qual inspirou o título deste.


## A motivação

Uns dias depois do _post_ do Jean, me deparei com o seguinte
[_tweet_](https://twitter.com/w3c/statuses/472032014942879744) do
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

O
[rascunho do editor](http://cameronjones.github.io/form-http-extensions/index.html#form-method-attribute)
evoluiu para um
[rascunho público do W3C](http://www.w3.org/TR/form-http-extensions/ "W3C HTML Form HTTP Extensions"),
ou seja, parece que a coisa vai rolar mesmo — então decidi dar uma estudada na
proposta e falar um pouco sobre o que achei mais legal. Será esse o encontro
definitivo entre o HTML e seu protocolo de transferência?


## HTML ♥ Forms

As propostas desse rascunho não se referem somente a entrar em conformidade com
os verbos REST. Há recursos para padronizar autenticação HTTP e até mesmo para
enviar informações diretamente no _header_ de uma submissão de formulário.


## Métodos HTTP

Será possível especificar quase todos os métodos HTTP através do atributo
`method` de um formulário. Atualmente apenas são suportados os métodos `GET` e
`POST`.

O HTTP tem 9 métodos, e os únicos que __não__ poderão ser utilizados são
`CONNECT`, `TRACE` e `TRACK`. Claro que, os que saltam aos olhos são os já
utilizados no padrão REST — os métodos `PUT` e `DELETE`. Quanto aos restantes,
consigo imaginar uma utilidade para `HEAD` e `PATCH`, mas não para `OPTION` — e
também não há exemplos de utilização desses métodos no documento do W3C (por
enquanto).

Como mostrado no
[_post_ do @jcemer](http://tableless.com.br/o-grande-desencontro-http-com-o-html/),
os _frameworks_ geralmente utilizam campos `<input type="hidden">` para poder
especificar métodos que não são `GET` nem `POST` e daí realizar as gambiarras
necessárias no lado do servidor. Imagino que agora as coisas vão ficar um pouco
mais simples.

### method="PUT"

O método `PUT`, como já sabemos, serve para atualizar um objeto/recurso no
servidor.

```html
<form action="http://ego.globo.com/noticias/1440" method="PUT">
    <input type="text" name="titulo" value="Daniel Filho aparou a barba." />
    <textarea name="conteudo">
        Daniel Filho finalmente criou vergonha na cara e (...)
    </textarea>
    <button type="submit">Atualizar</button>
</form>
```

No trecho acima, temos um formulário que atualiza uma notícia (de alto grau de
importância) com identificador "1440" do [portal ego](http://ego.globo.com)
(super relevante para nossas vidas #sqn).

<p class="obs">
    <strong>Obs.:</strong> Não mostrem isso ao Daniel. Ele nem vai ler esse post
    mesmo. =P
</p>

### method="DELETE"

Com o método `DELETE` podemos deletar um objeto/recurso (dãã).

```html
<form action="http://ego.globo.com/noticias" method="DELETE">
    <button type="submit">Excluir</button>
</form>
```

No trecho acima, temos um formulário que provê um __grande serviço à
humanidade__, mandando todas as notícias do portal ego _pro raio que o parta_
com o simples uso do método `DELETE` (acho que esse método nunca foi tão bem
utilizado, hein). Claro que o serviço em questão deve estar em conformidade com
o padrão REST para que isso aconteça.


## Atributo payload

O atributo `payload` é usado para representar a associação entre um determinado
dado (ou campo) de um formulário a um tipo de esquema de dados
(`http`/`https`/`data`/`mailto`) na submissão do formulário. Um _payload_ pode
ser basicamente de três tipos: __action__, __header__ ou __body__ (valores
`_action`, `_header` e `_body` respectivamente).

### payload="_action"

Informação ou dado que descreve uma ação a ser executada no lado do servidor.
Comumente referente ao atributo `action` do formulário.

```html
<form action="mailto:">
    <input name="to" type="email" payload="_action" />
    <textarea name="content">
        Parabéns Daniel Filho! Você foi contemplado com um barbeador (...)
    </textarea>
    <button type="submit">Enviar email</button>
</form>
```

Fiz esse exemplo acima com base no que existe no rascunho do W3C. Pelo que
entendi, o `input[name=to]` é associado à _action_ que descreve um endereço de
_email_, no entanto, não ficou claro como isso acontece exatamente. Por
exemplo, se adicionarmos mais um `<input>` com `payload="_action"`, o que deverá
acontecer? Seguindo a lógica do _action_, informações adicionais seriam impostas
na forma de _querystring_.

```html
<form action="http://ego.globo.com/noticias" method="PUT">
    <input name="id" type="hidden" payload="_action" value="1440" />
    <!-- ... -->
</form>
```

Isso faria sentido. Deixando assim a URL do recurso mais limpa, e especificando
seus parâmetros em outros lugares. A `action` resultante acima seria
"http://ego.globo.com/noticias?id=1440".

### payload="_header"

Informação que pode ser incluída no _header_ da submissão. Com isso pode-se
especificar valores para um determinado _header_. O exemplo a seguir envia
o _header_&nbsp;`If-Unmodified-Since` na submissão do formulário.

```html
<form action="http://ego.globo.com/noticias/1440" method="DELETE">
    <input type="hidden"
           name="If-Unmodified-Since"
           value="Tue, 1 Jan 2013 12:00:00 GMT"
           payload="_header"/>
    <button type="submit">Excluir</button>
</form>
```

Só vai excluir o objeto se o mesmo não foi modificado desde a data especificada.

### payload="_body"

Dado que pertence ao conteúdo (<em>body</em>) da submissão. É o valor padrão
para a maioria dos casos.


## Autenticação HTTP

Outra ação bem comum realizada via formulários é o _login_ em algum serviço.
_Logins_ geralmente necessitam de pelo menos duas informações, o identificador
do usuário que está tentando acessar o sistema e sua senha — claro que estamos
falando de autenticações simples aqui (antes que venham falar sobre OAuth). Da
mesma maneira também há uma proposta para padronizar a ação de _logout_.

### Login

Para determinar que um formulário realize uma submissão de um _login_, basta
definir os elementos `<input>` de usuário e senha cada qual com seu atributo `name` como
`_username_` e `_password_`, respectivamente.

```html
<form action="http://dandan.com/login" method="POST">
    <label for="usuario">Usuário</label>
    <input id="usuario" name="_username_" type="text" />
    <label for="senha">Senha</label>
    <input id="senha" name="_password_" type="password" />
    <button type="submit">Entrar</button>
</form>
```

- `_username_`: Deve ser utilizado apenas em elementos `<input>` do tipo `text` ou `email`.
- `_password_`: Deve ser utilizado apenas em elementos `<input>` do tipo `password`.

Tá, mas qual a real vantagem disso? Bem, se essa convenção for utilizada, então
o agente de usuário (navegador) automaticamente deverá incluir um _header_
adequado de autorização na requisição, no caso, esse _header_ seria o
`Authorization`.

### Logout

A ação de _logout_ é mais simples ainda. Precisa-se apenas de um `<input>` do
tipo `hidden` com seu atributo `name="_logout_"`.

```html
<form action="http://dandan.com/logout" method="POST">
    <input name="_logout_" type="hidden" />
    <button type="submit">Sair</button>
</form>
```

Isso deve fazer com que o agente de usuário (que suporte autenticação HTTP e que
reutilize credenciais de _login_ em suas requisições) limpe quaisquer
informações sobre credenciais de _login_ previamente armazenadas.


## Curiosidades

Na minha pesquisa, encontrei algumas informações interessantes.

### PUT e DELETE no Firefox

A Mozilla chegou a implementar os métodos `PUT` e `DELETE` em formulários no
Firefox 4 Beta (2011), mas depois foram removidos.
[Fonte](http://lists.w3.org/Archives/Public/public-html-comments/2011Mar/0007.html).

### PUT e DELETE no HTML5

Os métodos `PUT` e `DELETE` chegaram a fazer parte de alguns [rascunhos iniciais
do HTML5](http://www.w3.org/TR/2010/WD-html5-20100624/association-of-controls-and-forms.html#attr-fs-method),
mas foram removidos nas suas
[versões subsequentes](http://www.w3.org/TR/2010/WD-html5-20101019/association-of-controls-and-forms.html#attr-fs-method).
Vai ver foi por isso que o Firefox acabou implementando-os e depois
removendo-os.
[Fonte 1](http://html5.org/tools/web-apps-tracker?from=5565&to=5566).

Aqui temos uma resposta do Ian Hickson, que fechou a _issue_ como _Won't fix_:

<blockquote>
    <p>
        PUT as a form method makes no sense, you wouldn't want to PUT a form
        payload. DELETE only makes sense if there is no payload, so it doesn't make
        much sense with forms either.
    </p>
    <footer>
        — Ian Hickson
        (<a href="https://www.w3.org/Bugs/Public/show_bug.cgi?id=10671">Fonte 2</a>)
    </footer>
</blockquote>

E vocês, o que acham?
