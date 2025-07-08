document.getElementById ("botaoenviar").addEventListener("click", validaformulario)

function validaformulario(event){
   event.preventDefault();
  if(document.getElementById("nome").value != "" && document.getElementById("email").value != ""){ 
    alert("Prontinho! Você receberá as novidades por email.")
  }else{
    alert("Por favor, preencha os campos nome, telefone e email!")
  }
}