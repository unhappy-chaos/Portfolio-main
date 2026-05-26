const checkbox = document.getElementById("checkbox");
const translate = document.getElementById("translate");

translate.addEventListener("click", (event) => {
    const elemento = event.target;
    if (elemento.innerText === "En") {
        elemento.innerText = "Pt-Br";
    } else {
        elemento.innerText = "En";
    }
});

checkbox.addEventListener("change", (evento) => {
    const slide = evento.target.checked; 
    if (slide) {
        theme_text.innerText = "Modo claro ligado";
    } else {
        theme_text.innerText = "Modo claro desligado";
    }
});

//! Utilização da biblioteca typed.js aqui;
var configuracoes = {

    strings: ["Wow super legal", "Teste 2", "Seriam os demônios capazes de amar ou o amor algo demoníaco?"],

    typeSpeed: 40, // Velocidade da escrita - Quanto menos mais rápido;

    backSpeed: 15, // Velocidade da deletação - Quanto menos mais rápido;

    loop: true, // Se o loop vai acontecer ou não, verdadeiro ou falso para aplicar;

    showCursor: false, // Mostrar ou não o cursor "a barra no final da frase", verdadeiro ou falso para aplicar;
    
    startDelay: 3000, // Delay para começar a escrever o texto - Quanto menos mais rápido;

    backDelay: 1500, // Delay para começar a deletar o texto após ele ser escrito; - Quanto menos mais rápido;

    // attr: "miau",

    // fadeOut: true, // Ao invés de deletar ele apaga, verdadeiro ou falso para aplicar;

    // fadeOutClass: "typed-fade-out", // Estilo de como vai ser apagado;

    // fadeOutDelay: 500, // Delay em milisegundo para ele começar a ser apagado - Quanto menos mais rápido;

    // loopCount: Infinity, // Quantidade de loops, se houver;

    // cursorChar: "|", // Qual vai ser o caractere do cursor;

};

var escrita = new Typed("#typado", configuracoes); // É obrigatório colocar o "." se for uma classe, caso seja um ID coloque o "#";
// Primeiro elemento: [ classe ou ID do elemento na onde vai ser escrito o texto ], segundo elemento: [ configurações que você criou ];