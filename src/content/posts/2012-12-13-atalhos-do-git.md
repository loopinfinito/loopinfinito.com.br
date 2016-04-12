---
title: Atalhos para o git
slug: atalhos-do-git
author: Caio Gondim
author_link: http://twitter.com/caio_gondim
author_profile: https://plus.google.com/109656206006790732674/
author_facebook: https://www.facebook.com/caiogondim
image: images/posts/2012-10-19-segredos-do-git.jpg
tags: git
comments: true
keywords: >
  git, atalho, terminal, linha de comando, mac, produtividade, alias, server
resumo: >
  Usado por grandes projetos como [jQuery](https://github.com/jquery/jquery),
  [Node.js](https://github.com/joyent/node), [Bootstrap](https://github.com/twitter/bootstrap)
  e [Loop Infinito](https://github.com/loopinfinito/loopinfinito.com.br) (rá),
  o Git é hoje o padrão da indústria quando se fala de
  [sistemas de controle de versão](http://pt.wikipedia.org/wiki/Sistema_de_controle_de_vers%C3%A3o).
  Neste post vamos aprender como criar atalhos para o Git e aumentar nossa
  produtividade com a ferramenta.
---

Com os atalhos no Git, ou _alias_, nós podemos mapear aqueles enormes comandos que
repetidamente usamos durante o dia para algumas poucas teclas. Ou, até mesmo,
criar um atalho para um comando com várias _flags_ para que seja  mas fácil de
lembrar e digitar. Eles podem ser criados de dois modos. Através do comando no
terminal:

```bash
$ git config --global alias.nome_do_alias "comando inteiro"
```

Ou editando diretamente o arquivo `~/.gitconfig`

```bash
$ cd ~
$ nano .gitconfig
```

Não importa o método que você utilize, suas configurações sempre ficarão salvas
no arquivo `~/.gitconfig`. Sabendo o que são atalhos e para que servem, vamos
agora ver alguns dos atalhos que julgo serem bastante úteis.

## Status

O comando `status` do git é, por padrão, um pouco verboso demais para quem já o
usa há algum tempo.
Não faz sentido vermos essas intruções todas as vezes.

<img src="/images/posts/2012-12-13-git-status-normal.jpg"
		alt="Git Status padrão" class="img" width="700" height="432" />

Vamos criar um atalho com uma saída mais simples

```bash
$ git config --global alias.st "status -s"
```

Agora toda vez que digitarmos `git st` veremos um status mais simplificado.
No exemplo anterior, o nosso status mais simples ficaria assim.

<img src="/images/posts/2012-12-13-git-status-st.jpg"
		alt="Git Status padrão" class="img" width="700" height="432" />

## Pretty Log

O log do Git é bastante verboso por padrão.

<img src="/images/posts/2012-12-13-git-log-padrao.jpg"
		alt="Git Status padrão" class="img" width="700" height="432" />

Mas é também bastante flexível. Usando uma infinidade de _flags_, podemos fazer
o nosso `git log` mais compacto, simples e bonito.

```bash
$ git config --global alias.lg "log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --date=relative"
```

O exemplo anterior com o nosso novo _alias_&nbsp;`git lg` fica assim:

<img src="/images/posts/2012-12-13-git-status-lg.jpg"
		alt="Git Status padrão" class="img" width="700" height="432" />

No _screenshot_ acima, cada asterisco é um _commit_. As linhas de diferentes
cores são as _branches_. Quando as linhas se conectam significa que houve um
_merge_. É possível ver também um resumo da mensagem de _commit_, o autor, a
data e a _branch_. Lindo, hein?

## Add all

Mais um atalho simples. Vamos substituir o comando `git add .` por `git aa`
(pense em add all) para versionar todos os arquivos do projeto.

```bash
$ git config --global alias.aa "add ."
```

## Who

Para saber de forma rápida o número de _commits_ de cada um no projeto, ordenado
de forma decrescente.

```bash
$ git config --global alias.who "shortlog -sn"
```

Esse é o `git who` do Loop Infinito.

<img src="/images/posts/2012-12-13-git-who.jpg"
		alt="Git Status padrão" class="img" width="700" height="200" />

## Undo

Para voltarmos, de forma rápida, o repositório para o exato modo como estava no
último _commit_.

```bash
$ git config --global alias.undo "reset --hard HEAD"
```

## Serve

Um dos meus favoritos. Algo digno de bruxaria. Com esse atalho você pode
transformar o seu repositório em um servidor Git.

```bash
$ git config --global alias.serve "\!git daemon --reuseaddr --verbose  --base-path=. --export-all ./.git"
```

Com o atalho setado, vá na raiz do seu repositório e digite `git serve`. Abra
outra aba no terminal e agora digite `git ls-remote git://127.0.0.1/` e veja que
o repositório do seu projeto está sendo servido. Apenas comandos de leitura são
permitidos. Então um `git fetch` e `git clone` estão liberados.

Se quiser compartihar o seu repositório basta verificar o seu
endereço <abbr title="Internet Protocol">IP</abbr> e passar para alguém em sua
rede local.

<aside class="fonte">
	<h3>Referência</h3>
	<ul>
		<li><a href="https://git.wiki.kernel.org/index.php/Aliases" alt="Git Aliases" title="Git Aliases">Git Aliases</a></li>
	</ul>
</aside>
