module.exports = (grunt) ->
    grunt.registerTask 'jekyll_rebuilder', 'Reconstroi o blog quando algum arquivo é modificado', () ->
        watch = require 'watch'
        child_process = require 'child_process'
        jekyllServerProc = null
        jekyllBuilderProc = null

        done = this.async()

        # cria um novo processo que ficará executando o server do jekyll
        # não irá dar rebuild automático
        grunt.log.writeln 'Servidor HTTP rodando na porta 4000'
        grunt.log.writeln ''
        jekyllServerCmd = 'jekyll "_source" "site" --no-auto --server 4000 --future'
        jekyllServerProc = child_process.exec(jekyllServerCmd, (error, stdout, stderr) -> )

        # escuta todos os arquivos da pasta *_source* e reconstroi o blog
        # caso algum arquivo tenha sido alterado
        watch.watchTree __dirname + '/../_source', (file, currStatus, prevStatus) ->
            timeBegin = new Date()
            timeEnd = null
            timeDelta = null

            grunt.log.writeln 'Reconstruindo blog...'

            jekyllBuilderProc = child_process
                .exec 'jekyll "_source" "site" --future', (error, stdout, stderr) ->
                    timeEnd = new Date()
                    timeDelta = (timeEnd - timeBegin) / 1000
                    timeDelta = '' + timeDelta + 's'

                    grunt.log.writeln 'Blog reconstruído em ' + timeDelta
                    grunt.log.writeln ''
