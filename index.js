const elementoResposta = document.querySelector("#resposta")
const elementoInput = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector("#buttonPerguntar")
const resposta = [
   "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
  "Não."
]


function fazerPergunta(){

  if(inputPergunta.value == ""){
    alert("Digite sua pergunta")
    return
  }

  buttonPerguntar.setAttribute("disabled", true)

  const pergunta = "<div>" + inputPergunta.value + "</div>"


  const totalResposta = resposta.length
  const numeroAleatorio = Math.floor(Math.random() * totalResposta)

elementoResposta.innerHTML = pergunta + resposta[numeroAleatorio]
elementoResposta.style.opacity = 1

setTimeout(function(){
  elementoResposta.style.opacity = 0
  buttonPerguntar.removeAttribute("disabled")
}, 3000)
}

