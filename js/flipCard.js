let produto = document.getElementsByClassName("produto");
const prodFormatado = Array.from(produto);

function flipAction(objeto) {
    let cartao = objeto.querySelector('.cartao');
    let imagem = objeto.querySelector('.produto-img').querySelector('img');
    let info = objeto.querySelector('.produto-info');

    console.log("cliquei: ",cartao)

    console.log(imagem);
    console.log(info.querySelectorAll("*"));

    cartao.classList.toggle("flip");
    setTimeout(() => {
        imagem.classList.toggle("opacidade0");
        info.classList.toggle("opacidade0"); 
    }, 100);

    let abaDescricao = objeto.querySelector('.produto-img').querySelector(".descricao");
    abaDescricao.classList.toggle("opacidade1");

    if(cartao.classList.contains("flip")){
        objeto.querySelector('.produto-img').style.borderBottomLeftRadius = "20px";
        objeto.querySelector('.produto-img').style.borderBottomRightRadius = "20px"; 
    }else{
        objeto.querySelector('.produto-img').style.borderBottomLeftRadius = "0";
        objeto.querySelector('.produto-img').style.borderBottomRightRadius = "0"; 
    };
};

function showDescricao(objeto,event){
    event.stopPropagation();
    const descricao = objeto.querySelector('.descricao').querySelector('p');
    const seta = objeto.querySelector('.icon-expandir');  

    descricao.classList.toggle('altura');

    if (seta.classList.contains('rodarCima')) {
        seta.classList.remove("rodarCima");
    }else{
        seta.classList.add("rodarCima");
    }
};

prodFormatado.forEach(item => {
    item.querySelector(".cartao").addEventListener("click", function() {
        flipAction(item); 
    });
    item.querySelector('.expandir').addEventListener("click", function() {
        showDescricao(item,event);
    });
});