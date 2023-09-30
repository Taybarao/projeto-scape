let pergunta = [
   "aceita jogar?",
   "voce acaba de perceber que a porta esta trancada",
   "voce esta dentro do quarto e avista a porta um quadro e um livro onde ira primeiro?",
   " olhando para o quadro mais de perto voce ve um rapaz e na parte de baixo ele possui uma data 1994 atras atras do quadro voce acha uma chave com um bilhete 'quantos anos tenho?'",
   "parabens achou sua primeira chave "
 ];
 let respostas = ["sim", "nao", "quadro", "livro", "29"];





 perguntar();
 tecla();
 
 function perguntar() {
   mostrarPergunta('p', pergunta[0]);}
 


   function tecla(){
   document.querySelector('input').addEventListener('keydown', function (event) {
     if (event.key === 'Enter') {
       verificarResposta();
     }
   });
 }
 
 function mostrarPergunta(tag, texto) {
   let textoPergunta = document.querySelector(tag);
   textoPergunta.innerHTML = texto;
   
 }


 
 function verificarResposta() {
   let respostaJogador = document.querySelector('input').value;
   respostaJogador.value = '';
   console.log(respostaJogador);
   

   


   if (pergunta[0] && respostaJogador === respostas[0]) {
     mostrarPergunta('p', pergunta[2]);
     limparCampo();
   } else if (pergunta[0] && respostaJogador === respostas[1]) {
     mostrarPergunta('p', pergunta[1]);
     limparCampo();
   } else if (pergunta[2] && respostaJogador === respostas[2]) {
     mostrarPergunta('p', pergunta[3]);
     limparCampo();
   } else if (pergunta[3] && respostaJogador === respostas[4]) {
     mostrarPergunta('p', pergunta[4]);
   } else {
     mostrarPergunta('p', 'voce forçou a fechadura volte ao inicio');
   }
 }
 
 function limparCampo() {
  let respostaJogador = document.querySelector('input');
   respostaJogador.value = '';
 }
 
 

