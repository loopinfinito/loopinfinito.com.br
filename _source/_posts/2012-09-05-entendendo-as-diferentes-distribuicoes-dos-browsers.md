---
title: Entendendo as diferentes distribuições dos navegadores
layout: post
author: Caio Gondim
author_link: http://twitter.com/caio_gondim
resumo: O novo método de desenvolvimento do Chrome, com releases mais rápidos e constantes causou um forte impacto no método de desenvolvimento de todos os grandes navegadores. Hoje, Firefox, Opera e até mesmo o Internet Explorer de certa forma migraram para um calendário de releases mais curto, com vários canais de distribuição. Vamos entender os canais de cada navegador, sua finalidade e seu ciclo de vida.
image: images/posts/2012-09-05-entendendo-as-diferentes-distribuicoes-dos-navegadores.jpg
tags: navegadores
keywords: desenvolvimento, release, beta, alpha, chrome, safari, firefox, opera, aurora, nightly, webkit, canary, dev, estável, stable, channel, distribuições, browsers
comments: true
---

O novo método de desenvolvimento do Chrome, com _releases_ mais rápidos e
constantes causou um forte impacto no método de desenvolvimento de todos os
grandes navegadores. Hoje, Firefox, Opera e até mesmo o Internet Explorer de
certa forma migraram para um calendário de _releases_ mais curto, com vários
canais de distribuição. Vamos entender os canais de cada navegador, sua
finalidade e seu ciclo de vida.

## Chrome

<p><img src="/images/posts/2012-09-05-chrome.jpg" width="700" height="200" /></p>

### Stable channel

É a versão padrão e mais estável do Chrome. Grande lançamentos são liberados a
cada 6 semanas e pequenas correções a cada 2 ou 3 semanas.

### Beta channel

Neste canal as novidades chegam um mês antes que no canal estável, mas isso tem
seu preço: este canal é mais instável que o anterior. O canal beta serve como
um canal de teste para a versão estável, então alguns _bugs_ e _crashs_ podem
acontecer. Atualizado a cada semana, com grandes atualizações a cada 6 semanas.

### Dev channel

Este é o canal que serve não só de teste para novas funcionalidades que irão
aterrissar no canal beta, mas também como um canal para teste de novas idéias.
Nem todas as funcionalidades aqui implementadas irão necessariamente para o
canal beta e, por sua vez, para o canal estável. Elas podem ser descartadas.
Atualizado 1 ou 2 vezes por semana.

### Canary build

O canary build é a versão para testes do Google Chrome. Os _updates_ são
diários e eles não são testados. Por ser o canal mais instável, não pode ser
definido como browser padrão. Diferente dos outros canais, o Canary é baixado
como um outro aplicativo, podendo rodar ao lado de qualquer outro canal do
Chrome. Por padrão ele envia estatísticas sobre seu uso e relatórios de
_crashes_.

Seu nome vem de uma antiga técnica de se usar canários em minas de carvão para
detectarem de forma precoce um aumento no nível de gases tóxicos. O monóxido
de carbono é imperceptível aos humanos e, caso alcance níveis de concentração
muito elevado, mata. O canário é mais sensível ao gás e morre antes dos
humanos. Então, caso existisse um canário morto na mina, era sinal de que o
nível de CO estava muito alto e assim poderiam tomar uma atitude a respeito
ainda em tempo de evitar uma morte humana.


## Firefox

<p><img src="/images/posts/2012-09-05-firefox.jpg" width="700" height="200" /></p>

### Release

Versão estável. Atualizada a cada 6 semanas.

### Beta

Versão de testes para a versão estável. Também atualizada a cada 6 semanas.

### Aurora

Indicada para desenvolvedores _web_ e _early adopters_. Atualizada a cada 6 semanas.

### Nightly

Como o próprio nome sugere, é atualizado todas as noites. Canal bastante
experimental. Todo _release_ deste canal pode ser acompanhado pelo Twitter
[@firefoxnightly](http://twitter.com/firefoxnightly).

## Opera

<p><img src="/images/posts/2012-09-05-opera.jpg" width="700" height="200" /></p>

### Estável

A versão testada e mais estável.

### Next

Versão de teste com as novas melhorias e tecnologias. Por ser uma versão de
teste, é totalmente independente, o que significa que seus favoritos e
preferências não são compartilhados entre a versão estável.

## Safari

<p><img src="/images/posts/2012-09-05-safari.jpg" width="700" height="200" /></p>

### Estável

Ultima versão do Safari. Grandes _updates_ costumam acontecer junto com o
lançamento de novas versões do OS X. Pequenas correções são disponibilizadas como _updates_ do sistema.
Na última versão estável, a 6.0, não foi lançada versão para Windows.

### Beta

Algumas vezes a Apple disponibiliza, antes do lançamento de uma nova versão do OS X, uma versão _beta_ do Safari.
É necessário ser cadastrado no *Apple Safari Developer Program* para baixar a versão beta. O cadastro é grátis.

### Webkit

WebKit é, além do nome do _engine_ mais popular entre os browsers, também o nome
do navegador de código-aberto que apresenta todas as futuras _features_ e
serve de base para o Safari. É atualizado diariamente, as vezes várias vezes
em um mesmo dia.


<aside class="fonte">
    <h3>Referência</h3>
    <ul>
        <li>→<a href="http://www.chromium.org/getting-involved/dev-channel" alt="Chrome Release Channels" title="Chrome Release Channels">Chrome Release Channels</a></li>
        <li>→<a href="https://hacks.mozilla.org/2012/05/firefox-and-the-release-channels/" alt="https://hacks.mozilla.org/2012/05/firefox-and-the-release-channels/" title="Firefox and the release channels">Firefox and the release channels</a></li>
        <li>→<a href="http://www.opera.com/support/kb/view/991/" alt="http://www.opera.com/support/kb/view/991/" title="What is Opera Next?">What is Opera Next?</a></li>
    </ul>
</aside>