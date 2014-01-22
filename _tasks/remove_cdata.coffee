module.exports = (grunt) ->
    grunt.registerTask('remove_cdata', 'Removes CDATA from posts', () ->
        glob = require 'glob'
        fs = require 'fs'

        files = glob.sync('./site/**/*.html')

        for file in files
            # apenas posts
            if not file.match(/.*site\/[0-9]{4}\/.*\.html/)
                continue

            fileData = fs.readFileSync(file)
            fileData = fileData + '' # cast para String

            # <![CDATA[ .* (inclusive entre linhas) ]]>
            regex = /(\<\!\[CDATA\[)[\s\S]*(\]\]\>)/g

            if fileData.match(regex)
                grunt.log.ok 'Removendo “<![CDATA[” de ' + file

                while fileData.match(regex)
                    fileData = fileData.replace('<![CDATA[', '', 'g')
                    fileData = fileData.replace(']]>', '', 'g')

                fs.writeFileSync(file, fileData)
    )
