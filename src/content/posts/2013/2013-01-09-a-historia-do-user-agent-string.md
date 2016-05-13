---
title: A história do user-agent string
tags: historia
author: caio
image: images/posts/2013-01-09-a-historia-do-user-agent-string.jpg
comments: true
keywords: >
  navegadores, navegador, browser, user-agent string, user-agent, mosaic,
  netscape, mozilla, firefox, gecko, safari, webkit, konqueror, opera,
  internet explorer, trident, chrome, história
description: >
  No início da história da *web*, era uma prática comum se fazer uma detecção do
  navegador usado, através da *user-agent string*, para enviar um código otimizado
  aos *browsers* mais modernos. Mas cada novo navegador que surgia também desejava
  esse código, e então começaram a se disfarçar de navegadores tidos como modernos
  na época, em efeito cascata. E assim começa o baile de máscaras.
---

No início da história da web, era uma prática comum se fazer uma detecção do
navegador usado, através da <em>user-agent string</em>, para enviar um código
otimizado aos <em>browsers</em> mais modernos. Mas cada novo navegador que
surgia também desejava esse código, e então começaram a se disfarçar de
navegadores tidos como modernos na época, em efeito cascata. E assim começa o
baile de máscaras.

## Mosaic

<figure>
	<img src="/images/posts/2013-01-09-mosaic.jpg" width="700" height="200"
			alt="Mosaic 1.0 para Windows" title="Mosaic 1.0 para Windows" />
</figure>

O primeiro browser, o
[NCSA Mosaic](http://www.ncsa.illinois.edu/Projects/mosaic.html), se identificava
por um _user-agent string_ bem simples. Informando apenas seu nome seguido de
sua versão e o sistema operacional em que estava rodando.

```
  // Mosaic 0.9 user-agent string
  NCSA_Mosaic/2.0 (Windows 3.1)
```

No exemplo acima, apenas pela _user-agent string_ podemos saber que o navegador
do usuário é o Mosaic, em sua versão 2.0 rodando no sistema operacional Windows 3.1.
Até então não existia a mentira.

## Netscape

<figure>
	<img src="/images/posts/2013-01-09-netscape.jpg" width="700" height="200"
			alt="Netscape" title="Netscape" />
</figure>

Logo depois a Netscape Communications iniciou o desenvolvimento de seu
_browser_, o Mozilla. Seu nome é uma abreviação de **Mosaic Killer**. Houveram
alguns problemas com o Mosaic devido ao nome, então o projeto Mozilla foi
renomeado para Netscape e se identificava como `Mozilla/1.0 (Win3.1)`.

<q class="pushing-quotes">
	O nome Mozilla é uma abreviação de <strong>Mosaic Killer</strong>
</q>

A Netscape usou um _user-agent string_ similar ao do Mosaic, mas adicionou
algumas informações como língua, plataforma e encriptação.

```
  // Netscape 3.0 user-agent string
  Mozilla/3.0 (Win95; U)
```

O exemplo acima é de um navegador Netscape rodando em sua versão 3.0 rodando no
Windows 95 com uma encriptação de 128-bits (o último "U" na _string_).

O Netscape foi o primeiro a suportar _frames_, e esta tecnologia se
tornou bastante popular. O Mosaic não suportava _frames_ e, então, deu-se
início ao "user agent sniffing", a detecção do navegador do usuário
no back-end. Para o Netscape eram enviados _frames_, e para o Mosaic não.

## Internet Explorer

<figure>
	<img src="/images/posts/2013-01-09-ie2.jpg" width="700" height="200"
			alt="Internet Explorer 2.0" title="Internet Explorer 2.0" />
</figure>

Logo depois surgiu o Internet Explorer. Ele suportava _frames_, mas não era o
Netscape. A Microsoft queria matar o Netscape o mais rápido possível e não iria
esperar que os _webmasters_ (lembram dessa palavra?) detectassem o IE de forma
correta e enviassem _frames_ para ele. Então ela declarou que o IE era compatível
com o Mozilla (Mozilla Compatible) e começou a se disfarçar de Netscape,
recebendo assim _frames_.

```
  // Internet Explorer 2.0 user-agent string
  Mozilla/1.22 (compatible; MSIE 2.0; Windows 95)
```

## Gecko

<figure>
	<img src="/images/posts/2013-01-09-firefox2.jpg" width="700" height="200"
			alt="Firefox 2.0" title="Firefox 2.0" />
</figure>

A Microsoft então começou a incluir o IE junto com o Windows, matando
eventualmente o Netscape. O Netscape renasceu como Mozilla (o navegador). O
Mozilla construiu o Gecko, seu motor de renderização _open source_. E para ele
foi feito uma especificação de como o _user-agent string_ deveria ser escrito a
partir de agora, a tornando ainda mais complexa.

```
  // Padrão de user-agent string do Gecko
  Mozilla/MozillaVersion (Platform; Encryption; OS-or-CPU; Language; PrereleaseVersion)Gecko/GeckoVersion ApplicationProduct/ApplicationProductVersion
```

O Mozilla então se tornou o Firefox, e vários outros navegadores começaram a
usar o Gecko como _render engine_. Abaixo temos exemplos de _user-agent strings_
de navegadores baseados no Gecko. A versão do Mozilla nunca foi alterada da
versão 5.0 desde o primeiro _browser_ baseado no Gecko. E provavelmente nunca
irá.

```
  // SeaMonkey 1.1a no Linux
  Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.1b2) Gecko/20060823 SeaMonkey/1.1a

  // Firefox 2.0.0.11 no Windows XP
  Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.11) Gecko/20071127 Firefox/2.0.0.11

  // Camino 1.5.1 no Mac OS X
  Mozilla/5.0 (Macintosh; U; Intel Mac OS X; en; rv:1.8.1.6) Gecko/20070809 Camino/1.5.1
```

## Konqueror

<figure>
	<img src="/images/posts/2013-01-09-konqueror35.jpg" width="700"
			height="200" alt="Konqueror 3.5" title="Konqueror 3.5" />
</figure>

No mundo Linux a equipe do KDE estava trabalhando no Konqueror. Seu nome é uma
referência ao Netscape e IE, os dois grandes browsers da história até o momento.
"First comes the Navigator, then Explorer, and then the Konqueror".

<q class="pushing-quotes">
	First comes the Navigator, then Explorer, and then the <strong>Konqueror</strong>
</q>

Sua engine, a KHTML, era excelente. Mas não era o Gecko e por isso
não recebia o código mais moderno. Então ele, também, começou a se
apresentar como "Gecko like".

```
  // Konqueror 3.2 no FreeBSD
  Mozilla/5.0 (compatible; Konqueror/3.2; FreeBSD) (KHTML, like Gecko)
```

## Opera

<figure>
	<img src="/images/posts/2013-01-09-opera.jpg" width="700" height="200"
			alt="Opera" title="Opera" />
</figure>

O Opera, um pouco de saco cheio do **user-agent sniffing**, achou justo dar
poder ao usuário de decidir que navegador ele iria se disfarçar e criou um _menu
item_ que dava a opção de escolha entre uma de 3 diferentes _user-agent string_.
Por que não bagunçar mais ainda?

```
  // Opera
  Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; en) Opera 9.51

  // Opera
  Mozilla/5.0 (Windows NT 6.0; U; en; rv:1.8.1) Gecko/20061208 Firefox/2.0.0 Opera 9.51

  // Opera
  Opera/9.51 (Windows NT 5.1; U; en)
```

## Safari

<figure>
	<img src="/images/posts/2013-01-09-safari.jpg" width="700" height="200"
			alt="Safari" title="Safari" />
</figure>

A Apple começou o desenvolvimento do Safari e utilizou o KHTML como base,
criando um _fork_ do projeto conhecido como WebKit. Mas como era compatível com
o KHTML, também se passava por tal. O KHTML por sua vez se passava por Gecko, e
todos se passavam por Mozilla. Efeito cascata.

```
  // Safari no OS X
  Mozilla/5.0 (Macintosh; U; PPC Mac OS X; de-de) AppleWebKit/85.7 (KHTML, like Gecko)
```

## Chrome

<figure>
	<img src="/images/posts/2013-01-09-chrome.jpg" width="700" height="200"
			alt="Chrome" title="Chrome" />
</figure>

Depois o Google decidiu fazer seu próprio navegador, e utilizou o WebKit como
base. Mas como era um navegador novo e muito compatível com o Safari, se passava
por tal. O WebKit por sua vez se passava por KHTML, o KHTML se passava por Gecko
e, todos os outros se passavam por Mozilla. Então o Chrome foi batizado com esta
enorme e complexa _user-agent string_.

```
  // Chrome no OS X
  Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.22 (KHTML, like Gecko) Chrome/25.0.1364.26 Safari/537.22
```

E é por isso que hoje temos essa _string_ gigantesca e aparentemente
sem lógica nos browsers modernos.

<aside class="fonte">
	<h3>Referência</h3>
	<ul>
		<li><a href="http://www.nczonline.net/blog/2010/01/12/history-of-the-user-agent-string/" alt="Git Aliases" title="History of the user-agent string">History of the user-agent string</a> <span class="comment">// WebAIM</span> </li>
		<li><a href="http://webaim.org/blog/user-agent-string-history/" alt="Git Aliases" title="History of the browser user-agent string">History of the browser user-agent string</a> <span class="comment">// NCZ online</span> </li>
		<li><a href="http://en.wikipedia.org/wiki/Konqueror" alt="Git Aliases" title="History of the browser user-agent string">Konqueror</a> <span class="comment">// Wikipedia</span> </li>
	</ul>
</aside>
