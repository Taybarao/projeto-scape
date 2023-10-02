let pergunta = [
   "0       SCAPE  <br>  um jogo de RPG com alguns enigmas e umas armadilhas fuja do obvio e lembre-se nao 'nao force a fechadura ou ficara preso para sempre'<br> aceita jogar?",

   " 1 voce tentou sair mas percebeu que a porta esta trancada voce precisa achar as 3 chaves para abrir a fechadura , ao olhar pelo quarto voce viu 2 coisas que chamaram sua atençao um quadro e uma gaveta  em qual desses quer procurar primeiro",

   " 2 voce observou que o quadro tinha algo estranho  atras  e tirou da parece  atras do quadro esta o enigma para a chave azul que é um numero digite o numero da chave",

   " 3 a gaveta esta trancada precisa de uma chave para abrir , uma dica 'posso ter rostos ,posso ter paisagens em minha face pode posso ser belo ou incompreendido' oque eu sou? ",
     
   "4 voce achou sua primeira chave  para seguir no jogo resolva a seguinte charada  Em moveis eu residuo , as vezes de madeira as vezes de metal  guerdo segredos do pequeno ao especial geralmente vou e volto ...qual meu nome?",

   "5  ao abrir o livro percebeu que uma das paginhas tinha algo diferente nesta pagina esta o segredo da chave vermelha se encontrar basta digitar",

   

   " 6 voce abriu a gaveta e achou a chave verde (07),e achou um livro agora  com o livro em maos em uma das paginas voce achou algo diferente nesta pagina esta o segredo da chave vermelha se encontrar basta digitar",

   " 7 certo voce achou 3 chaves  e foi ate a porta nela esta a sequancia de chaves que precisa colocar para escapar"
 ];
 let respostas = ["Sim","Nao","Quadro","Gaveta","14"];





 perguntar();
 tecla(); 
 function perguntar() {
   mostrarPergunta('h1', pergunta[0]);}
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
   limparCampo();   
    }  
  function verificarResposta() {
   let respostaJogador = document.querySelector('input').value;
   respostaJogador.value = '';
   console.log(respostaJogador);
   if (pergunta[0] && respostaJogador === respostas[0]) {
     mostrarPergunta('h1', pergunta[1]);
   } else if (pergunta[0] && respostaJogador === respostas[1]) {
     mostrarPergunta('h1', pergunta[1]);
   } else if (pergunta[1] && respostaJogador === respostas[2]) {
     mostrarPergunta('h1', pergunta[2]);
   } else if (pergunta[1] && respostaJogador === respostas[3]) {
     mostrarPergunta('h1', pergunta[3]);
    } else if (pergunta[2] && respostaJogador === respostas[4]) {
      mostrarPergunta('h1', pergunta[4]);
    } else if (pergunta[2] && respostaJogador === respostas[4]) {
      mostrarPergunta('h1', pergunta[4]);
   } else {
     mostrarPergunta('h1', 'voce forçou a fechadura volte ao inicio');
   }
 } 
 function limparCampo() {
  let respostaJogador = document.querySelector('input');
   respostaJogador.value = '';
 }
 
 

