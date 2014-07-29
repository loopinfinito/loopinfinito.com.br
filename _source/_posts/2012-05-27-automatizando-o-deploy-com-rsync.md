---
title: Automatizando o deploy com <span>rsync</span>
layout: post
author: Caio Gondim
author_link: http://twitter.com/caio_gondim
author_profile: https://plus.google.com/109656206006790732674/
author_facebook: https://www.facebook.com/caiogondim
image: images/posts/2012-05-27-automatizando-deploy-com-rsync.jpg
tags: automatizacao coffeescript
comments: true
keywords: rsync, deploy, deploy automático, cake task, coffeescript
resumo: >
  O rsync é uma ferramenta de sincronização de pastas/arquivos muito comum no
  mundo Unix para realizar backups. Neste post vamos aprender como utilizá-lo
  para a tarefa de deploy de forma automatizada, segura e veloz.
---

- Você sempre esquece de upar um arquivo para o servidor de produção?
- Acha um saco ter que upar os arquivos um a um?
- Acha o FTP lento?
- Se sente inseguro tendo que compartilhar a senha do server com outros?

Então...

## Seus problemas se acabaram-se

O rsync é uma ferramenta para sincronização de arquivos/pastas que se encaixa como uma luva para a tarefa de deploy (enviar os arquivos modificados para uma outra máquina).

Caso você esteja usando uma máquina Unix-like (Mac, Linux, BSD, ...) você provavelmente já possui o rsync instalado. Caso esteja utilizando o Windows, você pode baixar um port do projeto para sua plataforma [aqui](http://rsync.samba.org/download.html).

Este post é o primeiro do Loop Infinito a ser upado com o rsync. Vamos então dar uma estudada em como o processo é feito por aqui para aprendermos um pouco mais sobre a ferramenta.

## Ligando agora você recebe...

O rsync é uma ferramenta que roda no terminal.
Nós apenas definimos a pasta/arquivo origem e a pasta/arquivo destino que deve ser sincronizado com a origem.
Ele então verifica quais arquivos foram modificados entre a origem e o destino e envia apenas o delta (a diferença) entre as diferentes versões do mesmo arquivo, o que torna o processo bem mais rápido se comparado ao FTP.

O uso mais básico para o rsync seria o de deixarmos duas pastas na mesma máquina sincronizadas. Basta executarmos o rsync pela linha de comando, passando a pasta origem como primeiro argumento e a pasta destino como segundo argumento.

{% highlight bash %}
$ rsync ~/uma/pasta/origem/qualquer ~/outra/pasta/destino
{% endhighlight %}

Mas no nosso caso queremos sincronizar uma pasta em nossa máquina com uma outra em uma máquina remota (o servidor do nosso blog).
Então o comando usado foi:

{% highlight bash %}
$ rsync -avz -e ssh ./site loopinfinito@bugsy.dreamhost.com:~/loopinfinito.com.br
{% endhighlight %}

**Calma**! Não se apavore (ainda).

O nosso comando de deploy segue o mesmo princípio do exemplo mais básico que demos logo acima: o de deixar duas pasta sincronizadas.
A diferença aqui é que estamos deixando duas pastas sincronizadas em diferentes máquinas.
Parece complicado, mas vamos quebrar o comando acima e entendê-lo por completo.
<ul>
  <li><code>-a</code> archive mode. esta flag habilita o modo recursivo e preserva links simbólicos, permissões e timestamps</li>
  <li><code>-v</code> verbose. nos dá mais feedback sobre o que está acontecendo</li>
  <li><code>-z</code> habilita compressão de dados durante o envio</li>
  <li><code>-e ssh</code> especifica o shell remoto, no caso estamos usando SSH</li>
  <li><code>./site</code> pasta origem </li>
  <li><code>loopinfinito@bugsy.dreamhost.com:~/loopinfinito.com.br</code> destino que queremos deixar sincronizado com a origem</li>
</ul>

Vamos quebrar o último comando para entendermos como estamos nos conectando no servidor.
<ul>
  <li><code>loopinfinito</code> nome de usuário na máquina que estamos nos conectando</li>
  <li><code>bugsy.dreamhost.com</code> endereço do server</li>
  <li><code>~/loopinfinito.com.br</code> pasta dentro do server que queremos deixar sincronizada com a pasta local</li>
</ul>

Com apenas este comando nós estamos:
- Atualizando o nosso server com todos os arquivos novos, sem a necessidade de escolher arquivos manualmente
- Conexão segura, já que estamos usando SSH
- Mais rápido que FTP, já que usamos apenas uma conexão e enviamos apenas o delta de cada arquivo

Perceberam também que não estamos utilizando senha para nos conectarmos?
Isso porque com o SSH nós apenas upamos as nossas chaves públicas para o servidor.
Para quem quisermos dar acesso ao server, basta colar a chave pública no arquivo <code>~/.ssh/authorized_keys</code> no servidor (no nosso caso específico) e a conexão para esta pessoa com esta chave é liberada.
E para revogar o acesso também é muito fácil, é só retirar a chave pública do mesmo arquivo, sem a necessidade de mudar de senha e reenviar a senha para todas as pessoas do projeto.

## E não é só isso
Seria um saco termos que sempre digitar esse comando gigante quando fossemos dar um deploy.
Para isso nós criamos uma tarefa com o <code>cake</code>, um sistema de build do CoffeeScript (nós amamos CoffeeScript) parecido com o rake (de Ruby) e make (de C).

É só criar um arquivo chamado Cakefile na raiz do projeto e por este trecho de código:

{% highlight coffeescript %}
# módulos
{spawn, exec} = require('child_process')

# task 'deploy'
task 'deploy', 'Envia o diff do blog para o server', () ->

  # configurações de deploy do rsync
  # para poder dar o deploy com sucesso, é necessário que sua chave pública
  # esteja no arquivo ~/.ssh/authorized_keys do servidor
  user = "caiogondim"
  remote_root = "~/tmp.caiogondim.com"
  local_root = "site/"

  # executa o deploy
  rsync = spawn "rsync", [
    "-avz"
    "-e"
    "ssh"
    "#{__dirname}/#{local_root}"
    "#{user}@bugsy.dreamhost.com:#{remote_root}"
  ]

  # evento disparado quando a tarefa imprime algo no stdout
  rsync.stdout.on 'data', (data) ->
    console.log data.toString().trim()

  # evento disparado caso ocorra um erro na tarefa
  rsync.stderr.on 'data', (data) ->
    console.log "Erro no deploy: #{data}"

  # evento disparado quando a tarefa é terminada
  rsync.on 'exit', (code) ->
    # console.log "exit code #{code}"
{% endhighlight %}

Agora aquele nosso comando gigantesco para deploy está encapsulado em um muito mais simples e fácil de modificar.
É só entrarmos na pasta do projeto e digitarmos o comando abaixo e **BOOM**, o deploy acontece como mágica.

{% highlight bash %}
# muito mais simples, hein? =)
$ cake deploy
{% endhighlight %}

## Rápido quanto?

Aqui nós tentamos fazer ciência, e como cientistas nós sabemos que __não se pode melhorar o que não se pode medir__.
Então vamos deixar a fé de lado e ver na prática o quanto o rsync é mais rápido.

Para simular diferentes velocidades em minha conexão com a internet utilizei o Network Link Conditioner para [OS X](http://www.apple.com/macosx/) (que será assunto para outro post).

### Upando o site inteiro

Upando o site inteiro em diferentes conexões, obtivemos os seguintes números.

__1 Mbps DSL__
- FTP 165 segundos
- rsync 97 segundos

__3G, average case__
- FTP 193 segundos
- rsync 112 segundos

__EDGE, average case__
- FTP 350 segundos
- rsync 162 segundos

Um gráfico com os dados que obtive

<img src="http://loopinfinito.com.br/images/posts/2012-05-27-grafico-tempo-de-deploy-rsync-vs-ftp-site-inteiro.jpg" alt="" class="img" width="700" height="300" />

Neste cenário o rsync foi bem mais rápido.

### Adicionando 1 caractere em 10 arquivos diferentes

Neste teste eu adicionei um caractere ao final de 10 diferentes arquivos e os upei.

__1 Mbps DSL__
- FTP 10 segundos
- rsync 7 segundos

__3G, average case__
- FTP 20 segundos
- rsync 11 segundos

__EDGE, average case__
- FTP 29 segundos
- rsync 21 segundos

<img src="http://loopinfinito.com.br/images/posts/2012-05-27-grafico-tempo-de-deploy-rsync-vs-ftp-caracteres-10-arquivos-diferentes.jpg" alt="" class="img" width="700" height="300" />

Em relação ao FTP eu apenas cronometrei o tempo gasto para upar os arquivos. Num cenário real nos ainda iríamos ter que escolher um a um os arquivos a serem enviados, o que resulta em mais tempo gasto.
No caso do rsync, não precisamos escolher quais arquivos mandar. Ele mesmo verifica quais os arquivos que devem ser upados e faz todo o trabalho chato.

Então não há mais motivos para upar arquivos como se ainda vivéssemos na década de 80. Automatize seu processo de deploy com o rsync e nunca mais esqueça de enviar **aquele** arquivo novamente.

<aside class="fonte">
  <h3>Referência</h3>
  <ul>
    <li><a href="http://www.thegeekstuff.com/2010/09/rsync-command-examples/" alt="How to Backup Linux? 15 rsync Command Examples" title="How to Backup Linux? 15 rsync Command Examples">Geek Stuff: How to Backup Linux? 15 rsync Command Examples</a></li>
    <li><a href="http://coffeescript.org/#cake" alt="CoffeeScript: Cake, and Cakefiles" title="CoffeeScript: Cake, and Cakefiles">CoffeeScript: Cake, and Cakefiles</a></li>
  </ul>
</aside>
