module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('jekyll_rebuilder', 'Reconstroi o blog quando algum arquivo é modificado', function() {
        var watch = require('watch')
        var child_process = require('child_process')
        var jekyllServerProc = null
        var jekyllBuilderProc = null

        var done = this.async()

        // cria um novo processo que ficará executando o server do jekyll
        // não irá dar rebuild automático
        grunt.log.writeln('Servidor HTTP rodando na porta 4000')
        grunt.log.writeln('')
        jekyllServerProc = child_process.exec('jekyll "_source" "site" --no-auto --server 4000 --future', function(error, stdout, stderr) {

        })

        // escuta todos os arquivos da pasta *_source* e reconstroi o blog
        // caso algum arquivo tenha sido alterado
        watch.watchTree(__dirname + '/../_source', function(file, currStatus, prevStatus) {
            var timeBegin = new Date()
            var timeEnd = null
            var timeDelta = null

            grunt.log.writeln('Reconstruindo blog...')

            jekyllBuilderProc = child_process
                .exec('jekyll "_source" "site" --future', function(error, stdout, stderr) {
                    timeEnd = new Date()
                    timeDelta = (timeEnd - timeBegin) / 1000
                    timeDelta = '' + timeDelta + 's'

                    grunt.log.writeln('Blog reconstruído em ' + timeDelta)
                    grunt.log.writeln('')
                })
        })
    })
}
