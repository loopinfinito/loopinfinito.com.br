module.exports = (grunt) ->
    grunt.registerTask 'remove_nbsp', 'Removes &nbsp; from posts', ->
        glob = require 'glob'
        fs = require 'fs'

        files = glob.sync './site/**/*.html'

        for file in files
            fileData = fs.readFileSync file
            fileData = fileData + '' # cast para String
            regex = /(&nbsp;)|(&#160;)|(&amp;#160;)/g

            if fileData.match regex
                grunt.log.ok 'Removendo “&nbsp;” de ' + file
                fileData = fileData.replace regex, ' ', 'g'
                fs.writeFileSync file, fileData
