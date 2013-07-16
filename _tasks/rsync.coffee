module.exports = (grunt) ->
	grunt.registerTask('rsync', 'Envia o diff do blog para o server de staging', (ambiente = 'production') ->
		spawn = require('child_process').spawn
		exec = require('child_process').exec
		S = require('string')
		done = @async()

		# configurações de deploy do rsync
		# para poder dar o deploy com sucesso, é necessário que sua chave
		# pública esteja no arquivo ~/.ssh/authorized_keys do servidor
		user = 'loopinfinito'
		localRoot = '../site/'
		if ambiente is 'staging'
			blogUrl = 'staging.loopinfinito.com.br'
		else if ambiente is 'production'
			blogUrl = 'loopinfinito.com.br'
		remoteRoot = "~/'#{ blogUrl }'/"

		#
		exec('git branch', (error, stdout, stderr) ->

			# só permite deploy em *production* se estiver na branch *master*
			if ambiente is 'production' and not S(stdout).contains('* master')
				grunt.log.errorlns('Você deve estar na branch master para dar deploy para production')
				done(true)

			rsync = spawn('rsync', [
				'-avz'
				'--stats'
				'-e'
				'ssh'
				'--exclude'
				'.htpasswd'
				"#{ __dirname }/#{ localRoot }"
				"#{ user }@bugsy.dreamhost.com:#{ remoteRoot }"
			])

			# evento disparado quando a tarefa imprime algo no stdout
			rsync.stdout.on('data', (data) ->
				# grunt.log.writeln(data.toString().trim())
			)

			# evento disparado caso ocorra um erro na tarefa
			rsync.stderr.on('data', (data) ->
				grunt.log.errorlns("Erro no deploy: #{ data }")
			)

			# evento disparado quando a tarefa é terminada
			rsync.on('exit', (code) ->
				exec("open http://#{ blogUrl }")
				done(true)
			)
		)
	)
