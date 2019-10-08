//pega o elemento para criar o novo cliente
let addClient = document.querySelector("#addCliente")
//pega o elemento para tarjar o nome do cliente
let chkSublinhar = document.querySelector("#tabelaCliente")
//pega o elemento para remover o cliente
let fnRemover = document.querySelector("#tabelaCliente")
//pega o elemento para limpar cadastro
let clearCadastro = document.querySelector("#btnLimpar")
    
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

        document.querySelector(".cliente").id = "remover"
    
    })
   
    function obterDadosFormulario(formulario){

        cliente = {
            nome : formulario.nome.value,
            cidade : formulario.cidade.value,
            telefone : formulario.telefone.value,
        }

        return cliente

    }
   
    function limparFormulario(){
   
        document.getElementById('nome').value = "";
        document.getElementById('cidade').value = "";
        document.getElementById('telefone').value = "";

    }

    chkSublinhar.addEventListener("click", (event)=>{

        if(event.target.nodeName == "INPUT"){

            event.target.parentNode.parentNode.querySelector(".nome").id = "riscaNome"
            console.log(event.target);            
            
        }

    })

    fnRemover.addEventListener("click", (event)=>{

        if(event.target.className == "imagem"){
        event.target.parentNode.remove();
        }

    clearCadastro.addEventListener("click",(event)=>{
        event.preventDefault();
        
        console.log("Testando");
        
            
    })
              
    })