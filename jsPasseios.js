//Função para trocar imagem quando mouse passar em cima das embarcações
(function () {
    var imgEmbarcacao = document.querySelectorAll("#imagem100Lazer");
    for (var i = 0; i < imgEmbarcacao.length; i++) {
        trocarImagem(i);
    }

    function trocarImagem(i) {
        imgEmbarcacao[i].addEventListener("mouseover", function () {
            imgEmbarcacao[i].src = "imagens/100lazer" + (i + 1) + "_opc.jpg";
        });

        imgEmbarcacao[i].addEventListener("mouseout", function () {
            imgEmbarcacao[i].src = "imagens/100lazer" + (i + 1) + ".jpg";
        });
    }
})();


//Função que pede o nome e escreve mensagem de boas vindas na Navbar
var nome = prompt("Digite seu primeiro nome!");
var mensagemNavbar = document.querySelector(".navbar-text");

while (nome === "" || nome === "null") {
    var nome = prompt("Digite um nome VÁLIDO!");
}

mensagemNavbar.innerHTML = "Olá " + nome + ", seja bem vindo!";


//Mostrar ou ocultar os 'container' de passeio
var buttonPasseioBarco = document.querySelector("#buttonPasseio1");
var buttonPasseioBuggy = document.querySelector("#buttonPasseio2");

buttonPasseioBarco.addEventListener("click", function () {
    mostrarPasseioBarco();
});

buttonPasseioBuggy.addEventListener("click", function () {
    mostrarPasseioBuggy();
});

function mostrarPasseioBarco() {
    var containerBarco = document.querySelector("#containerPasseioBarco");
    condicaoMostrarOcultar(containerBarco);
}

function mostrarPasseioBuggy() {
    var containerBuggy = document.querySelector("#containerPasseioBuggy");
    condicaoMostrarOcultar(containerBuggy);
}

function condicaoMostrarOcultar(container) {
    if (container.style.display == "none") {
        container.style.display = "block";
    } else {
        container.style.display = "none";
    }
}

// Mostrar Valor passeios de Buggy
function valorBuggyNorte() {
    var quantidade = document.querySelector("#quantidadePessoasNorte").value;
    var campoMensagem = document.querySelector("#buggyNorte");
    valorPessoas(quantidade, campoMensagem);
}

function valorBuggySul() {
    var quantidade = document.querySelector("#quantidadePessoasSul").value;
    var campoMensagem = document.querySelector("#buggySul");
    valorPessoas(quantidade, campoMensagem);
}

function valorPessoas(quantidade, campoMensagem) {
    if (quantidade == "2") {
        campoMensagem.innerHTML = "R$300,00";
    } else if (quantidade == "3") {
        campoMensagem.innerHTML = "R$350,00"
    } else if (quantidade == "4") {
        campoMensagem.innerHTML = "R$400,00"
    }
}

// Mostrar Valor dos Passeios de Barco
function mostrarValorPNaturais(valor) {
    var valor;
    var campoValorPNaturais = document.querySelector("#campoValorPNaturais");
    valorPasseioBarco(valor, campoValorPNaturais);
}

function mostrarValorAVermelha(valor) {
    var valor;
    var campoValorAVermelha = document.querySelector("#campoValorAVermelha");
    valorPasseioBarco(valor, campoValorAVermelha);
}

function mostrarValorSeixas(valor) {
    var valor;
    var campoValorSeixas = document.querySelector("#campoValorSeixas");
    valorPasseioBarco(valor, campoValorSeixas);
}

function mostrarValorPJacare(valor) {
    var valor;
    var campoValorPJacare = document.querySelector("#campoValorPJacare");
    valorPasseioBarco(valor, campoValorPJacare);
}

function valorPasseioBarco(valor, campoValor) {
    campoValor.innerHTML = "R$" + valor + ",00";
}

//Mapa do Google Maps
function myMap() {
    var myCenter = new google.maps.LatLng(-8.0565689, -34.9091322);
    var mapProp = {
        center: myCenter,
        zoom: 15,
    };
    var map = new google.maps.Map(document.querySelector("#googleMap"), mapProp);
    var marker = new google.maps.Marker({ position: myCenter });
    marker.setMap(map);
}

