---
title: Web Notifications API
layout: post
author: Caio Gondim
author_link: http://twitter.com/caio_gondim
author_profile: https://plus.google.com/109656206006790732674/
resumo: A Web Notifications é uma nova API para enviarmos notificações ao usuário fora do contexto de uma página web. Para quem usa Mac, imaginem que Web Notifications é o Growl para a web. Uma API simples que nos dá acesso a features antes só disponíveis para aplicações nativas.
image: images/posts/2012-08-17-web-notification-api.jpg
tags: HTML5 javascript
keywords: web-notification, notificações, notificações-web, safari-6, chrome, notification-center, api, html5, webkit
comments: true
---
<style>
    input[type=button] {
        -webkit-appearance: none;
        -webkit-border-horizontal-spacing: 0px;

        -webkit-border-image: none;
        -moz-border-image: none;
        border-image: none;
        -webkit-border-vertical-spacing: 0px;

        -webkit-box-align: center;
        -moz-box-align: center;
        -ms-box-align: center;
        box-align: center;

        -webkit-box-shadow: rgba(255, 255, 255, 0.2) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.0470588) 0px 1px 2px 0px;
        box-shadow: rgba(255, 255, 255, 0.2) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.0470588) 0px 1px 2px 0px;

        -webkit-transition-delay: 0s;
        -moz-transition-delay: 0s;
        -o-transition-delay: 0s;
        -ms-transition-delay: 0s;
        transition-delay: 0s;

        -webkit-transition-duration: 0s;
        -moz-transition-duration: 0s;
        -o-transition-duration: 0s;
        -ms-transition-duration: 0s;
        transition-duration: 0s;

        -webkit-transition-property: all;
        -moz-transition-property: all;
        -o-transition-property: all;
        -ms-transition-property: all;
        transition-property: all;

        -webkit-transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
        -moz-transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
        -o-transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
        -ms-transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
        transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
        background-color: whiteSmoke;

        background-image: -webkit-linear-gradient(top, white, #E6E6E6);
        background-image: -moz-linear-gradient(top, white, #E6E6E6);
        background-image: -o-linear-gradient(top, white, #E6E6E6);
        background-image: -ms-linear-gradient(top, white, #E6E6E6);
        background-image: linear-gradient(top, white, #E6E6E6);
        background-position: 0% 0%;
        background-repeat: repeat-x;
        border-bottom-color: rgba(0, 0, 0, 0.247059);
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        border-bottom-style: solid;
        border-bottom-width: 1px;
        border-collapse: separate;
        border-left-color: rgba(0, 0, 0, 0.14902);
        border-left-style: solid;
        border-left-width: 1px;
        border-right-color: rgba(0, 0, 0, 0.14902);
        border-right-style: solid;
        border-right-width: 1px;
        border-top-color: rgba(0, 0, 0, 0.14902);
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        border-top-style: solid;
        border-top-width: 1px;

        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        -ms-box-sizing: border-box;
        box-sizing: border-box;
        color: #333;
        cursor: pointer;
        display: block;
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-size: 14px;
        font-weight: normal;
        height: 30px;
        letter-spacing: normal;
        line-height: 20px;
        margin: auto;
        max-width: none;
        padding-bottom: 4px;
        padding-left: 14px;
        padding-right: 14px;
        padding-top: 4px;
        text-align: center;
        text-decoration: none;
        text-indent: 0px;
        text-shadow: rgba(255, 255, 255, 0.74902) 0px 1px 1px;
        text-transform: none;
        vertical-align: middle;
        word-spacing: 0px;
    }

    input[type=button]:active {
        position: relative;
        top: 1px;
    }
</style>

A _Web Notifications_ é uma nova API para enviarmos notificações ao usuário
fora do contexto de uma página _web_. Para quem usa Mac, imaginem que _Web
Notifications_ é o [Growl](http://growl.info/) para a _web_. Essa
[API](http://pt.wikipedia.org/wiki/API) ainda não está padronizada, mas já
existe um grupo no [W3C](http://www.w3.org/TR/notifications/) trabalhando
nela e alguns navegadores que a suportam. O que significa que já
podemos nos divertir um pouco.

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
            <td class="property"><code>window.Notification</code></td>
            <td>19.0</td>
            <td>6.0</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
        </tr>
    </tbody>
</table>

<p class="obs"><strong>OBS.:</strong> Todos os exemplos desse post foram
testados na versão <strong>6.0 do Safari para Mac</strong>. A versão
<strong>22.0.1229.8 dev do Chrome</strong>, que eu inicialmente usei como
teste, estava dando <strong>crash</strong> ao pedir permissão para mostrarmos
notificações na página atual.</p>

## Pedindo permissão

O primeiro passo é verificar se temos permissão para mostrar notificações no
dominío atual. Podemos obter o status da nossa permissão através do método
`Notification.permissionLevel` que nos retorna um dos seguintes valores:

- `granted`: Usuário já nos deu permissão para mostrar notificações no site atual;
- `denied`: Usuário negou a permissão para mostrar notificações;
- `default`: Usuário ainda não especificou se aprova notificações deste site.

Caso o status da permissão esteja como _default_, podemos então pedir
permissão ao usuário através do método `Notification.requestPermission`. Este
método dispara um _dialog_ no navegador perguntando se o usuário permite o uso
de notificações no domínio atual. Após o usuário permitir ou não, a função de
_callback_ é executada.

{% highlight javascript %}
$('.pedir-permissao').click(function(event) {
    // testando se seu navegador suporta Web Notifications
    if (!window.Notification) {
        alert('Seu navegador não suporta Web Notifications')
        return
    }
    // usuário ainda não especificou se aprova notificações desse site
    // então pedimos permissão
    if (Notification.permissionLevel() === 'default') {
        Notification.requestPermission(function() {
            alert('Função de callback')
        })
    // já foi dada a permissão
    } else if (Notification.permissionLevel() === 'granted') {
        alert('Usuário já havia dado permissão')
    // usuário negou a permissão
    } else if (Notification.permissionLevel() === 'denied') {
        alert('Usuário negou permissão')
    }
}
})
{% endhighlight %}

Clique no botão abaixo e verifique o _dialog_ que aparecerá pedindo permissão
para o uso de notificações no site atual. E lembrem de conceder permissão para
continuarmos visualizando outros exemplos mais avançados do post.

<div class="img example bordered">
    <input type="button" value="Pedir permissão" class="pedir-permissao" />
    <script>
        $('.pedir-permissao').click(function(event) {
            if (!window.Notification) {
                alert('Seu navegador não suporta Web Notifications')
                return
            }

            if (Notification.permissionLevel() === 'default') {
                Notification.requestPermission(function() {
                    alert('Função de callback')
                })
            } else if (Notification.permissionLevel() === 'granted') {
                alert('Usuário já havia dado permissão')
            } else if (Notification.permissionLevel() === 'denied') {
                alert('Usuário negou permissão')
            }
        })
    </script>
</div>

A imagem abaixo mostra o _dialog_ de permissão do Safari 6.0 no Mac.

<p><img src="/images/posts/2012-08-22-pedindo-permissao.jpg" alt="" height="200" width="700" style="height: 200px !important;" /></p>

Caso queiram mudar a permissão de um site posteriormente, no Safari
basta ir no menu Preferências → Notificações.

<p><img src="/images/posts/2012-08-22-safari-notificacoes.jpg" alt="" height="200" width="700" style="height: 200px !important;" /></p>

## Enviando uma notificação

Agora que o usuário nos cedeu permissão, já podemos criar nossa primeira
notificação. No código abaixo temos um exemplo básico de uma
_Web Notification_.

{% highlight javascript %}
var notificationBasica = new Notification('Título da Notificação')
notificationBasica.show()
{% endhighlight %}

Criamos um novo objeto do tipo `Notification` passando o título da notificação
como argumento. Depois de criado, basta executar o método `show` para que a
notificação seja enviada. O botão abaixo executa este exemplo.

<div class="img bordered example">
    <input type="button" value="Disparar notificação" class="notificacao-basica" />
    <script>
        $('.notificacao-basica').click(function() {
            if (!window.Notification) {
                alert('Seu navegador não suporta Web Notifications')
                return
            }
            if (Notification.permissionLevel() !== 'granted') {
                alert('Usuário não permitiu mostrar Web Notifications')
                return
            }

            var notificacaoBasica = new Notification('Título da Notificação')
            notificacaoBasica.show()
        })
    </script>
</div>

O navegador deverá mostrar uma notificação parecida com a imagem abaixo

<p><img src="/images/posts/2012-08-22-notificacao-exemplo.jpg" alt="" height="200" width="700" style="height: 200px !important;" /></p>

Caso estejam utilizando o OS X Mountain Lion, todas as notificações enviadas
irão também para o _Notification Center_.

<p><img src="/images/posts/2012-08-22-notification-center.jpg" alt="" height="200" width="700" style="height: 200px !important;" /></p>

## Parâmetros

O único paramêtro obrigatório de uma notificação é o título. Porém existem
outros parâmetros opcionais que podem ser passados como um objeto. Objeto?
Melhor um exemplo:

{% highlight javascript %}
var notification = new Notification('Título da Notificação', {
    body: 'Body da Notifição',
    tag: 'novo e-mail',
    onshow: function(event) {
        console.log('evento onshow')
    },
    onclick: function(event) {
        alert('evento onclick')
    },
    onclose: function(event) {
        console.log('evento onclose')
    },
    onerror: function(event) {
        console.log('evento onerror')
    }
}
})
notification.show()
{% endhighlight %}

Esses são todos os parâmetros aceitos pelas notifications no Safari e Chrome no Mac:
- `body`: Mensagem mais detalhada sobre a notificação;
- `tag`: Identificador da notificação. Impede que o usuário receba várias notificações caso tenha várias abas com seu site aberto;
- `onshow`: Evento disparado quando a notificação é exibida;
- `onclick`: Evento disparado no _click_ da notificação. Com ele podemos, por exemplo, mostrar o novo e-mail ao usuário no _click_ da notificação;
- `onclose`: Evento disparado quando a notificação é ignorada ou fechada no _Notification Center_;
- `onerror`: Evento disparado caso a notificação não possa ser mostrada ao usuário. Disparado quando o nível de permissão está setado como _default_ ou _denied_.

O botão abaixo dispara essa notificação com todos os parâmetros.
Observe que, diferente das outras, se dispararmos várias dessas notificações apenas a última ficará visível no _Notification Center_.
Isto devido ao atributo _tag_.

<div class="img bordered example">
    <input type="button" value="Disparar notificação completa" class="notificacao-completa" />
    <script>
        $('.notificacao-completa').click(function() {
            if (!window.Notification) {
                alert('Seu navegador não suporta Web Notifications')
                return
            }
            if (Notification.permissionLevel() !== 'granted') {
                alert('Usuário não permitiu mostrar Web Notifications')
                return
            }
            var notificacaoCompleta = new Notification('Notificação completa', {
                body: 'Body da Notifição',
                tag: 'novo e-mail',
                onshow: function(event) {
                    console.log('evento onshow')
                },
                onclick: function(event) {
                    alert('evento onclick')
                },
                onclose: function(event) {
                    console.log('evento onclose')
                },
                onerror: function(event) {
                    console.log('evento onerror')
                }
            })
            notificacaoCompleta.show()

        })
    </script>
</div>

A [especificação do W3C](http://www.w3.org/TR/notifications/) define mais
alguns parâmetros além dos citados acima, mas eles não são suportados pelo
Safari ou Chrome e talvez nunca serão. Para não deixar muito longo o post
decidi não comentar sobre eles. Mas caso queiram se aprofundar na
especificação existe um link nas referências.

<aside class="fonte">
    <h3>Referência</h3>
    <ul>
        <li>→<a href="http://caniuse.com/#search=notification" alt="When can I use..." title="When can i use...">When can i use Web Notifications</a> <span class="comment">// When can I use...</span></li>
        <li>→<a href="http://www.w3.org/TR/notifications/" alt="W3C" title="W3C">Web Notifications</a> <span class="comment">// W3C</span></li>
        <li>→<a href="https://developer.apple.com/library/safari/#documentation/AppleApplications/Conceptual/SafariJSProgTopics/Articles/SendingNotifications.html#//apple_ref/doc/uid/TP40001483-CH23-SW1" alt="W3C" title="W3C">Sending Notifications</a> <span class="comment">// Apple Safari Developer Library</span></li>
    </ul>
</aside>