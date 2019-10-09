//pega o elemento para criar o novo cliente
let addClient = document.querySelector("#addCliente")
//pega o elemento para tarjar o nome do cliente
let chkSublinhar = document.querySelector("#tabelaCliente")
//pega o elemento para remover o cliente
let fnRemover = document.querySelector("#tabelaCliente")
//pega o elemento para limpar cadastro
let clearCadastro = document.querySelector("#btnLimpar")
//pega o elemento para ver a quantidade de itens cadastrado
let qtdeCadastro = document.querySelector("#btnTarefas")
    
    addClient.addEventListener('click',(event)=>{
        event.preventDefault();

        let formulario = document.querySelector("#formRegister")
        let cliente = obterDadosFormulario(formulario)

        let tableCliente = document.querySelector("#tabelaCliente")
       
        let trCliente = document.createElement("tr")
        let tdCheck = document.createElement("td")
        let tdNome = document.createElement("td")
        let tdCidade = document.createElement("td")
        let tdTelefone = document.createElement("td")
        let tdDelete = document.createElement("td")
        
        
        tdCheck.innerHTML = "<input type='checkbox'>"
        tdNome.innerHTML = cliente.nome
        tdCidade.innerHTML = cliente.cidade
        tdTelefone.innerHTML = cliente.telefone        

        trCliente.className = "cliente"
        tdCheck.className = "check"
        tdNome.className = "nome"
        tdCidade.className = "cidade"
        tdTelefone.className = "telefone"
        tdDelete.className = "imagem"       

        trCliente.appendChild(tdCheck)
        trCliente.appendChild(tdNome)
        trCliente.appendChild(tdCidade)
        trCliente.appendChild(tdTelefone)
        trCliente.appendChild(tdDelete)
        tableCliente.querySelector("tbody").appendChild(trCliente)
        
        limparFormulario();
    
    })
   
    //cria um objeto literal de um cliente
    function obterDadosFormulario(formulario){

        cliente = {
            nome : formulario.nome.value,
            cidade : formulario.cidade.value,
            telefone : formulario.telefone.value,
        }

        return cliente

    }
   
    //limpa o formulario após o cadastro
    function limparFormulario(){
   
        document.getElementById("nome").value = "";
        document.getElementById("cidade").value = "";
        document.getElementById("telefone").value = "";

    }

    //tarja o nome da pessoa ao clicar no checkbox
    chkSublinhar.addEventListener("click", (event)=>{

        if(event.target.nodeName == "INPUT"){

            event.target.parentNode.parentNode.querySelector(".nome").id = "riscaNome"          
            
        }

    })

    //remova a linha ao clicar no botão de deletar
    fnRemover.addEventListener("click", (event)=>{

        if(event.target.className == "imagem"){
        event.target.parentNode.remove();
        }

    })

    //limpa toda lista de cadastro
    clearCadastro.addEventListener("click",()=>{
        
        document.querySelector("#clienteCadastrado").remove();
                
    })


    //informa a quantidade de clientes cadastrado
    qtdeCadastro.addEventListener("click",()=>{        

        let clientes = document.querySelectorAll(".nome").length
        alert("Quantidade de clientes cadastrado: " + clientes)

    })