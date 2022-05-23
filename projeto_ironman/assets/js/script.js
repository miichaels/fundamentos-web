/*
por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementByName()
por classe: getElementsByClassName()
por Seletor: querySelector()

*/

var nome = window.document.querySelector("#nome")
var nomeOk = false
var emailOk = false
var assuntoOk = false
var mapa = document.querySelector("#mapa")

let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

function validarNome(){
    let txtNome = document.querySelector("#txtNome")
    if(nome.value.length < 2 ){
        txtNome.innerHTML = "nome invalido"
        txtNome.style.color = "red"
        nomeOk = false
    }else{
        txtNome.innerHTML = "nome valido"
        txtNome.style.color = "green"
        nomeOk = true
    }

}


nome.style.width = '100%'
email.style.width = '100%'


function validarEmail(){
  let  txtEmail = document.querySelector('#txtEmail')
  if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
    txtEmail.innerHTML = 'E-mail inválido'
    txtEmail.style.color = "red"
  }else{
    txtEmail.innerHTML = 'E-mail válido'
    txtEmail.style.color = "green"
    emailOk = true
  }

}

function validarAssunto(){
    let  txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length >= 100){
      txtAssunto.innerHTML = 'Assunto inválido - máximo 100 caracteres'
      txtAssunto.style.color = 'red'
      txtAssunto.style.display = 'block'
    }else{
      /*txtAssunto.innerHTML = 'Assunto válido'
      txtAssunto.style.color = "green"*/
      txtAssunto.style.display = 'none'
      assuntoOk = true
    }
  
  }

  function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert("Formulário enviado com sucesso!")
    }else {
        alert("Preencha todos os campos corretamente antes de enviar...")
    }
}

function mapaZoom(){
    mapa.style.width = '800px' /*largura*/
    mapa.style.height = '600px' /*altura*/

}

function mapaNormal(){
    mapa.style.width = '400px' /*largura*/
    mapa.style.height = '250px' /*altura*/
}