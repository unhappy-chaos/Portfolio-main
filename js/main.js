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
    strings: ["Olá mundo, meu nome é Yan ⭐", "Sou programador Full-Stack Júnior 💻", "Sejam bem vindos ao meu portfólio ❤️"],
    typeSpeed: 40, //! Velocidade da escrita; - Quanto menos mais rápido;
    backSpeed: 15, //! Velocidade da deletação; - Quanto menos mais rápido;
    loop: true, //! Se o loop vai acontecer ou não, verdadeiro ou falso para aplicar;
    showCursor: false, //! Mostrar ou não o cursor "a barra no final da frase", verdadeiro ou falso para aplicar;
    backDelay: 1500, //! Delay para começar a deletar o texto após ele ser escrito; - Quanto menos mais rápido;
    // fadeOut: true, //! Ao invés de deletar ele apaga, verdadeiro ou falso para aplicar;
    // fadeOutClass: "typed-fade-out", //! Estilo de como vai ser apagado;
    // fadeOutDelay: 500, //! Delay em milisegundo para ele começar a ser apagado; - Quanto menos mais rápido;
    // loopCount: Infinity, //! Quantidade de loops, se houver;
    // cursorChar: "|", //! Qual vai ser o caractere do cursor;
    // startDelay: 2000, //! Delay para começar a escrever o texto; - Quanto menos mais rápido;
};
  
var escrita = new Typed(".typado", configuracoes); //! A sentença a frente é obrigatória e tem que ser idêntica [ new Typed ];
//! ([ "Elemento na onde vai ser escrito o texto" ], [ Aqui vai a configuração que você aplicou em qualquer variável e então conectou ela na syntax ]);