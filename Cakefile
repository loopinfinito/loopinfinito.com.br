# módulos
{spawn, exec} = require('child_process')

# task 'deploy'
task 'deploy', 'Envia o diff do blog para o server', () ->

  # minifify no código antes de enviar
  invoke 'minify'

  # configurações de deploy do rsync
  # para poder dar o deploy com sucesso, é necessário que sua chave pública esteja no arquivo ~/.ssh/authorized_keys do servidor
  user = "loopinfinito"
  remote_root = "~/loopinfinito.com.br/"
  local_root = "./site/"

  # executa o deploy
  console.log 'Upando arquivos...'
  rsync = spawn "rsync", [
    "-avz"
    "--stats"
    "-e"
    "ssh"
    "#{__dirname}/#{local_root}"
    "#{user}@bugsy.dreamhost.com:#{remote_root}"
  ]

  # evento disparado quando a tarefa imprime algo no stdout
  rsync.stdout.on 'data', (data) ->
    # console.log data.toString().trim()

  # evento disparado caso ocorra um erro na tarefa
  rsync.stderr.on 'data', (data) ->
    console.log "Erro no deploy: #{data}"

  # evento disparado quando a tarefa é terminada
  rsync.on 'exit', (code) ->
    console.log "loopinfinito.com.br atualizado"

# task de minify
task 'minify', 'Minify nos arquivos HTML, CSS e JS', () ->
  console.log 'Minifying...'
  exec 'java -jar _source/_tools/htmlcompressor-1.5.2.jar --compress-css --compress-js --remove-intertag-spaces -r -o site site'