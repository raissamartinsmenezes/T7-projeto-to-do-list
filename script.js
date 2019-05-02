let inserirTarefa = document.getElementById('inserirTarefa')
let adicionarTarefa = document.getElementById('adicionarTarefa')
let adicionarBotoes = document.getElementById('adicionarBotoes')
let concluirTudo = document.getElementById('concluirTudo')
let apagarTudo = document.getElementById('apagarTudo')
let dragging

adicionarTarefa.addEventListener('click', function () {

    if (inserirTarefa.value == false) {
        return
    }

    let listaDeTarefas = document.getElementById('listaDeTarefas')

    const divDrag = document.createElement("div")
    divDrag.className = "div-drag"
    divDrag.setAttribute('draggable', true)

    let tarefa = document.createElement('p')
    tarefa.innerHTML = inserirTarefa.value
    listaDeTarefas.appendChild(tarefa)

    let excluir = document.createElement('button')
    excluir.innerHTML = '🗑️'
    excluir.classList = 'excluir-botao'
    tarefa.appendChild(excluir)

    adicionarBotoes.classList.remove('botoes')

    excluir.addEventListener('click', function () {
        // tarefa.remove()
        divDrag.remove()
    })

    tarefa.innerHTML = inserirTarefa.value
    divDrag.appendChild(tarefa)
    tarefa.appendChild(excluir)
    listaDeTarefas.appendChild(divDrag)

    inserirTarefa.value = ''

    tarefa.addEventListener('click', function () {
        tarefa.classList.toggle('check');
    })

    divDrag.addEventListener("dragstart", function (ev) {
        dragging = ev.target.closest(".div-drag")

    })

    divDrag.addEventListener("dragover", function (ev) {
        ev.preventDefault();
        const node = ev.target.closest(".div-drag")
        this.parentNode.insertBefore(dragging, node)
    })

    divDrag.addEventListener("dragend", function (ev) {
        dragging = null
    })

    concluirTudo.addEventListener('click', function () {
        tarefa.classList.add('check');
    })

    apagarTudo.addEventListener('click', function () {
        // tarefa.remove()
        divDrag.remove()
        adicionarBotoes.classList.add('botoes')
    })

})

