# Como contribuir

Se você encontrou um erro e quer nos enviar a correção, o primeiro passo é 
instalar as dependências do projeto em sua máquina. O Loop Infinito utiliza o
[Jekyll](https://github.com/mojombo/jekyll), um gerador de site estático, como
plataforma do blog — assim não é necessário nenhum banco de dados.


## Instalando o projeto

Infelizmente, este projeto tem uma série de dependências de várias plataformas.
Mas enquanto não resolvemos esse problema, eis o roteiro de instalação (só para 
os destemidos).


### Instale as dependências de ruby

Instale as _gems_ do [Jekyll](https://github.com/mojombo/jekyll),
[LESS](http://lesscss.loopinfinito.com.br/) e
[therubyracer](https://rubygems.org/gems/therubyracer):


```bash
$ gem install jekyll -v 0.12.1
$ gem install less
$ gem install therubyracer
```


### Instale o pygments

O [Pygments](http://pygments.org/) é necessário para o _syntax highlight_ de
trechos de código nos _posts_:

```bash
$ sudo easy_install Pygments
```


### Instale as dependências do Node e o Grunt

Este projeto está todo automatizado com o grunt. Para utilizar o grunt, é
preciso ter o [Node.js](http://nodejs.org/) e o [npm](https://www.npmjs.org/) 
instalados.

```bash
$ brew install node
$ curl https://www.npmjs.org/install.sh | sh
```

Se não quiser utilizar o [brew](http://brew.sh/), você pode seguir esse 
[tutorial bem simples](https://gist.github.com/isaacs/579814).

Agora instale o grunt global:

```bash
$ npm install grunt-cli -g
```


### Clone o projeto 

Finalmente, faça um clone do projeto:

```bash
$ git clone git://github.com/loopinfinito/loopinfinito.com.br.git
```

Depois, instale as dependências do grunt localmente:

```bash
$ cd loopinfinito.com.br
$ npm install
```


## Rodando o Loop Infinito

Para gerar o material estático do blog (será criada uma pasta "site" com o 
conteúdo gerado):

```bash
$ grunt build
```

Para manter a geração automática de conteúdo e subir um _web server_:

```bash
$ grunt run
```

Agora você já pode visitar o blog localmente através da url `http://localhost:4000`.
Toda mudança que for feita será automaticamente detectada e o Grunt irá rodar
o _build_ novamente.
