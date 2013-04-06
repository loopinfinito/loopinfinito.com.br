module.exports = function(grunt) {
	grunt.registerTask('rsync', 'Envia o diff do blog para o server de staging', function(ambiente) {
		var spawn = require('child_process').spawn
		var exec = require('child_process').exec
		var S = require('string')
		var done = this.async()
		var ambiente = ambiente || 'production'

		// configurações de deploy do rsync
		// para poder dar o deploy com sucesso, é necessário que sua chave
		// pública esteja no arquivo ~/.ssh/authorized_keys do servidor
		var user = 'loopinfinito'
		var localRoot = '../site/'
		if (ambiente == 'staging') {
			var blogUrl = 'staging.loopinfinito.com.br'
			var remoteRoot = '~/' + blogUrl + '/'
		} else if(ambiente == 'production') {
			var blogUrl = 'loopinfinito.com.br'
			var remoteRoot = '~/' + blogUrl + '/'
		}

		//
		exec('git branch', function(error, stdout, stderr) {

			// só permite deploy em *production* se estiver na branch *master*
			if (ambiente == 'production' && !S(stdout).contains('* master') ) {
				grunt.log.errorlns('Você deve estar na branch master para dar deploy para production')
				done(true)
			}

			var rsync = spawn('rsync', [
				'-avz',
				'--stats',
				'-e',
				'ssh',
				__dirname + '/' + localRoot,
				user + '@bugsy.dreamhost.com:' + remoteRoot
			])

			// evento disparado quando a tarefa imprime algo no stdout
			rsync.stdout.on('data', function(data) {
				// grunt.log.writeln(data.toString().trim())
			})

			// evento disparado caso ocorra um erro na tarefa
			rsync.stderr.on('data', function(data) {
				grunt.log.errorlns('Erro no deploy: ' + data)
			})

			// evento disparado quando a tarefa é terminada
			rsync.on('exit', function(code) {
				exec('open http://' + blogUrl)
				done(true)
			})
		})
	})
}
