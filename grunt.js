module.exports = function(grunt) {
	grunt.registerTask('deploy_staging', 'Envia o diff do blog para o server de staging', function() {
		var spawn = require('child_process').spawn
		var exec = require('child_process').exec

		this.async()

		// configurações de deploy do rsync
		// para poder dar o deploy com sucesso, é necessário que sua chave
		// pública esteja no arquivo ~/.ssh/authorized_keys do servidor
		var user = 'loopinfinito'
		var remoteRoot = '~/staging.loopinfinito.com.br/'
		var localRoot = './site/'

		console.log('Upando arquivos...')
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
			// console.log data.toString().trim()
		})

		// evento disparado caso ocorra um erro na tarefa
		rsync.stderr.on('data', function(data) {
			console.log('Erro no deploy: ' + data)
		})

		// evento disparado quando a tarefa é terminada
		rsync.on('exit', function(code) {
			console.log('staging.loopinfinito.com.br atualizado')
			exec('open http://staging.loopinfinito.com.br')
		})
	})
}
