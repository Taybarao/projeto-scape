



mostrarPergunta('h1', "liberdade");
mostrarPergunta('h2', "liberdade  um jogo de enigmas onde seu raciocinio sera desafiado");




function mostrarPergunta(tag, texto) {
let textoPergunta = document.querySelector(tag);
textoPergunta.innerHTML = texto;
responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
 
}  
