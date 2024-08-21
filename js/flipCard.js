let produto = document.getElementsByClassName("produto");
const prodFormatado = Array.from(produto);

function flipAction(objeto) {
    let imagem = objeto.querySelector('.produto-img');
    let info = objeto.querySelector('.produto-info');

    console.log(imagem);
    console.log(info.querySelectorAll("*"));

    imagem.classList.toggle("flip");
    imagem.classList.toggle("opacidade0")
    info.classList.toggle("flip");
    info.classList.toggle("opacidade0");

    imagem.querySelector("*").classList.toggle("opacidade0");
    info.querySelectorAll("*").forEach(element => {
        element.classList.toggle("opacidade0");
    });

    let descricao = objeto.querySelector(".descricao");
    descricao.classList.toggle("opacidade1");
};

prodFormatado.forEach(item => {
    item.addEventListener("click", function() {
        flipAction(item);
    });
});