let produto = document.getElementsByClassName("produto");
const prodFormatado = Array.from(produto);

function flipAction(objeto) {
    let borda = objeto.querySelector('.borda');
    let imagem = objeto.querySelector('.produto-img').querySelector('img');
    let info = objeto.querySelector('.produto-info');

    console.log(imagem);
    console.log(info.querySelectorAll("*"));

    borda.classList.toggle("flip");
    imagem.classList.toggle("opacidade0")
    // info.classList.toggle("flip");
    info.classList.toggle("opacidade0");

    // imagem.querySelector("*").classList.toggle("opacidade0");
    info.querySelectorAll("*").forEach(element => {
        element.classList.toggle("opacidade0");
    });

    // let div = objeto.querySelector('.produto-img');
    // div.classList.toggle('borda_espac');
    // div.classList.toggle('flip');
    let descricao = objeto.querySelector('.produto-img').querySelector(".descricao");
    descricao.classList.toggle("opacidade1");
    objeto.querySelector('.produto-img').style.borderBottomLeftRadius = "20px";
    objeto.querySelector('.produto-img').style.borderBottomRightRadius = "20px";

    let botao = document.getElementById('bt-comprar');
    botao.style.marginTop = "6px";
};

prodFormatado.forEach(item => {
    item.addEventListener("click", function() {
        flipAction(item);
    });
});