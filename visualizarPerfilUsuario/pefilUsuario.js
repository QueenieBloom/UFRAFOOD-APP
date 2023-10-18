function senhaVisibilidade() {
    var inputSenha = document.getElementById("Isenha");
    var imagemSenha = document.getElementById("imgSenha");

    if (inputSenha.type === "password") {
        inputSenha.type = "text";
        imagemSenha.src = "https://cdn-icons-png.flaticon.com/512/709/709612.png"
    } else {
        inputSenha.type = "password";
        imagemSenha.src = "https://cdn-icons-png.flaticon.com/512/2767/2767146.png"
    }

}

function pegarInputs() {
    var inputEmail = document.getElementById("Iemail").value;
    var inputSenha = document.getElementById("Isenha").value;

    testarLogin(inputEmail, inputSenha)
}

function testarLogin(email, senha){

    // Realizar a verificação no arquivo JSON
    fetch('teste.json')
        .then(response => response.json())
        .then(data => {
            var users = data.usuariosCadastrados;
            var user = users.find(u => u.nomeUsuario === email && u.senha === senha);
            if (user) {
                console.log("Login bem-sucedido!");
            } else {
                //document.getElementById("message").textContent = "Credenciais inválidas. Tente novamente.";
            }
        })
        .catch(error => console.error(error));
};

function telaDeLogin() {
    
    window.location.href = "../index.html";
}

function pegarEscolhaConta() {

    var selectEscolhaConta = document.getElementById("escolhaConta").value;

    return selectEscolhaConta
}

function mostrarInputsTipoConta() {

    tipoDeConta = pegarEscolhaConta()
    console.log(tipoDeConta)

    if (tipoDeConta == "Cliente") {

        configuraInputsVendedor()

    } else if (tipoDeConta == "Vendedor") {

        configuraInputsCliente()

    }
}

function configuraInputsCliente() {

    //MOSTRAR-------------------------------------------

    divContato = document.getElementById("divContato")
    divContato.style.display = "block";

    //Tirar-------------------------------------------

    divNomeLoja = document.getElementById("divNomeLoja")
    divNomeLoja.style.display = "none";

}

function configuraInputsVendedor() {

    //MOSTRAR-------------------------------------------

    divNomeLoja = document.getElementById("divNomeLoja")
    divNomeLoja.style.display = "block";

    //Tirar-------------------------------------------

    divContato = document.getElementById("divContato")
    divContato.style.display = "none";

}


document.addEventListener('keydown', function(e) {
    if(e.key == "Enter"){
      pegarInputs()
    }
});

function cadastro() {

    // Obter os valores de entrada do novo usuário
    var newUsername = document.getElementById("Iemail").value;
    var newPassword = document.getElementById("Isenha").value;

    // Realizar a adição no arquivo JSON
    fetch('teste.json')
        .then(response => response.json())
        .then(data => {
            var users = data.usuariosCadastrados;
            var existingUser = users.find(u => u.nomeUsuario === newUsername);

            if (existingUser) {
                console.log("Nome de usuário já existe. Escolha outro.");
            } else {
                // Adicionar o novo usuário ao array de usuários
                users.push({ "nomeUsuario": newUsername, "senha": newPassword });

                // Atualizar o arquivo JSON com o novo usuário
                fetch('teste.json', {
                    method: 'PUT', // Use POST ou PUT para atualizar o arquivo
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(response => response.json())
                .then(() => {
                    console.log("Cadastro realizado com sucesso!");
                })
                .catch(error => console.error(error));
            }
        })
        .catch(error => console.error(error));
};




function cadastro2() {

    var newUsername = document.getElementById("Iemail").value;
    var newPassword = document.getElementById("Isenha").value;

    fetch('teste.json.template')
        .then(response => response.json())
        .then(data => {
            var users = data.usuariosCadastrados;
            var existingUser = users.find(u => u.nomeUsuario === newUsername);

            if (existingUser) {
                console.log("Nome de usuário já existe. Escolha outro.");
            } else {
                users.push({ "nomeUsuario": newUsername, "senha": newPassword });

                // Atualize apenas a cópia local
                fetch('teste.json.template', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(response => response.json())
                .then(() => {
                    console.log("Cadastro realizado com sucesso!");
                })
                .catch(error => console.error(error));
            }
        })
        .catch(error => console.error(error));
};


// document.getElementById("cadastro-form").addEventListener("submit", function (event) {
//     event.preventDefault();

//     var newUsername = document.getElementById("new-username").value;
//     var newPassword = document.getElementById("new-password").value;

//     fetch('usuarios.json.template')
//         .then(response => response.json())
//         .then(data => {
//             var users = data.usuarios;
//             var existingUser = users.find(u => u.nomeUsuario === newUsername);

//             if (existingUser) {
//                 document.getElementById("cadastro-message").textContent = "Nome de usuário já existe. Escolha outro.";
//             } else {
//                 users.push({ "nomeUsuario": newUsername, "senha": newPassword });

//                 // Atualize apenas a cópia local
//                 fetch('usuarios.json', {
//                     method: 'POST', // Use POST para atualizar os dados
//                     body: JSON.stringify(data),
//                     headers: {
//                         'Content-Type': 'application/json'
//                     }
//                 })
//                 .then(response => response.json())
//                 .then(() => {
//                     document.getElementById("cadastro-message").textContent = "Cadastro realizado com sucesso!";
//                 })
//                 .catch(error => console.error(error));
//             }
//         })
//         .catch(error => console.error(error));
// });
