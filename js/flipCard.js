//Retorna um objeto de elementos com classe produto
const produto = document.getElementsByClassName("produto");

//Transforma o objeto retornado em uma array
const prodFormatado = Array.from(produto);

//Variavel global para setInterval
let intervalo = null;

function flipAction(objeto) {
    const cartao = objeto.querySelector('.cartao');

    cartao.classList.toggle("flip");
};

function hoverAction(objeto) {
    const cartao = objeto.querySelector('.cartao');
    if (!cartao.classList.contains("flip")) {
        let efeitos = {};

        efeitos = {
            rotateY: "(-180deg)",
        };

        //Definir intervalo afim de executar a partir de determinado tempo (2s)
        intervalo = setInterval(() => {
            // cartao.style.transition = `transform ${efeitos.transition}`;
            cartao.style.transform = `rotateY${efeitos.rotateY}`;
            setTimeout(() => {
                cartao.style.transform = null;
            }, 1200);
        },2000)
    };
};

function hoverOutAction() {
    clearInterval(intervalo);
};

function showDescricao(objeto,event){
    event.stopPropagation(); //Nao propagacao

    //Identifica os objetos
    const descricao = objeto.querySelector('.descricao').querySelector('p');
    const seta = objeto.querySelector('.icon-expandir');  

    //Adiciona efeito aos objetos
    descricao.classList.toggle('altura');
    descricao.classList.toggle('margem');

    if (seta.classList.contains('rodarCima')) {
        seta.classList.remove("rodarCima");
    }else{
        seta.classList.add("rodarCima");
    };
};

//Adiciona funcao clique aos produtos

prodFormatado.forEach(item => {
    item.querySelector(".cartao").addEventListener("click", function() {
        flipAction(item); 
    });

    item.querySelector(".cartao").addEventListener("mouseover", function() {
        hoverAction(item);
    });
    item.querySelector(".cartao").addEventListener("mouseout", function() {
        hoverOutAction();
    });

    item.querySelector('.expandir').addEventListener("click", function() {
        showDescricao(item,event);
    });
});