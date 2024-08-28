const imagemGato = document.getElementById('gatinho');

function buscarGatoAleatorio() {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(resposta => resposta.json())
        .then(dados => {
            imagemGato.src = dados[0].url;
        });
}

buscarGatoAleatorio();