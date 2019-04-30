let inserirTarefa = document.getElementById('inserirTarefa')
let adicionarTarefa = document.getElementById('adicionarTarefa')
let adicionarBotoes = document.getElementById('adicionarBotoes')
let concluirTudo = document.getElementById('concluirTudo')
let apagarTudo = document.getElementById('apagarTudo')


adicionarTarefa.addEventListener('click', function(){

    if (inserirTarefa.value == false) {
        return 
    }

    let listaDeTarefas = document.getElementById('listaDeTarefas')

    let tarefa = document.createElement('p')
    tarefa.innerHTML = inserirTarefa.value
    listaDeTarefas.appendChild(tarefa)

    let excluir = document.createElement('button')
    excluir.innerHTML = 'x'
    excluir.classList = 'excluir-botao'
    tarefa.appendChild(excluir)

    adicionarBotoes.classList.remove('botoes')

    excluir.addEventListener('click', function () {
        tarefa.remove()
    })

    inserirTarefa.value = ''

    tarefa.addEventListener('click', function(){
        tarefa.classList.add('check');
    })

    concluirTudo.addEventListener('click', function () {
        tarefa.classList.add('check');
    })

    apagarTudo.addEventListener('click', function () {
        tarefa.remove()
        adicionarBotoes.classList.add('botoes')
    })
 
})

