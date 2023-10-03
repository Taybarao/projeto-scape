let pergunta = [
   "   SCAPE <br> SCAPE é um jogo de RPG com alguns enigmas e armadilhas. Fuja do óbvio e lembre-se: não force a fechadura, ou ficará preso para sempre. <br> Aceita jogar?",

   "  Você tentou sair, mas percebeu que a porta está trancada. Você precisa achar as 3 chaves para abrir a fechadura. Ao olhar pelo quarto, você viu 2 coisas que chamaram sua atenção: um quadro e uma gaveta. Em qual desses quer procurar primeiro?",

   "  Você observou que o quadro tinha algo estranho atrás e tirou da parede. Atrás do quadro, está o enigma para a chave azul, que é um número. Digite o número da chave: 14.",

   " A gaveta está trancada e precisa de uma chave para abrir. Uma dica: 'Posso ter rostos, posso ter paisagens em minha face. Posso ser belo ou incompreendido.' O que eu sou?",
     
   "voce achou sua primeira chave   para seguir no jogo resolva a seguinte charada  Em moveis eu residuo , as vezes de madeira as vezes de metal  guerdo segredos do pequeno ao especial geralmente vou e volto ...qual meu nome?",

   "  Ao abrir o livro, percebeu que uma das páginas tinha algo diferente. Nesta página, está o segredo da chave vermelha. Se encontrar, basta digitar.",   

   " Você abriu a gaveta e achou a chave verde (07) e também encontrou um livro. Agora, com o livro em mãos, em uma das páginas, você achou algo diferente. Nesta página está o segredo da chave vermelha. Para encontrar, basta digitar.",

   "  certo voce achou 3 chaves  e foi ate a porta nela esta a sequência de chaves que precisa colocar para escapar"
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
   console.log(respostaJogador);
   if (respostaJogador === respostas[0]){
    imagemQuarto.style.display = 'block';
    imagemlogo.style.display = 'none';
     mostrarPergunta('h1', pergunta[1]);
   } else if (respostaJogador === respostas[1]) {
     mostrarPergunta('h1', pergunta[1]);
   } else if (pergunta[1] && respostaJogador === respostas[2]) {
    imagemgaveta.style.display = "none";
    imagemQuadro.style.display = "block";
    imagemlogo.style.display = "none";
    imagemQuarto.style.display = "none";
    imagemchaveazul.style.display = "none";
     mostrarPergunta('h1', pergunta[2]);
   } else if (respostaJogador === respostas[3]) {
    mostrarPergunta('h1', pergunta[3]);
    imagemgaveta.style.display = "block";
    imagemQuadro.style.display = "none";
    imagemlogo.style.display = "none";
    imagemQuarto.style.display = "none";
    imagemchaveazul.style.display = "none";
    } else if (respostaJogador === respostas[4]) {
      imagemchaveazul.style.display = "block";
      imagemgaveta.style.display = "none";
      imagemQuarto.style.display = "none";
      imagemQuadro.style.display = "none";
      imagemlogo.style.display = "none";
      mostrarPergunta('h1', pergunta[4]);
    } else if (respostaJogador === respostas[4]) {
      mostrarPergunta('h1', pergunta[4]);
   } else {
     mostrarPergunta('h1', 'voce forçou a fechadura volte ao inicio');
   }
  
  

   
  
    
 } 
 function limparCampo() {
  let respostaJogador = document.querySelector('input');
   respostaJogador.value = '';
 }
 
 

