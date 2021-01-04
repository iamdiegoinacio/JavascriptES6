addEventListener('click', () => {
    console.log("oi");
});


function terceiraIdade(idade) {
    if (typeof (idade) === 'string') {
        console.log("Digite apenas números");
    } else if (idade >= 60) {
        console.log("Idoso");
    }
}


//CRIE UMA FUNÇÃO PARA VERIFICAR SE UM VALOR É TRUTHY

let valor = 1;

function isTruthy(valor) {
    if (!!valor) {
        return console.log("Valor Truthy");
    } else {
        return console.log("Valor Falsy");
    }
}


//CRIE UMA FUNÇÃO MATEMÁTICA QUE RETORNO UM PERÍMETRO DE UM QUADRADO
function perimetroDeQuadrado(valor){
    return valor * 4;
}

//CRIE UMA FUNÇÃO QUE RETORNE O SEU NOME COMPLETO
function retornaNome(nome){
    return console.log(`O seu nome completo é: ${nome}`);
}

//CRIE UMA FUNÇÃO QUE VERIFICA SE UM NÚMERO É PAR 
function verificaPar(valor){
    
    if(typeof(valor) == 'string'){
        return console.log("Apenas números!");
    }
    
    if(valor%2==0){
        return console.log(`O número ${valor} é par`);
    }else if(valor%2==1){
        return console.log(`O número ${valor} é ímpar`);
    }
}

//CRIE UMA FUNÇÃO QUE RETORNE O TIOPO DE DADO DO ARGUMENTO PASSADO
function verificaTipo(valor){
    return `O tipo do parametro passado é igual a ${typeof(valor)}`
}

//addEventListener É UMA FUNÇÃO NATIVA DO JS, O PRIMEIRO PARÂMETRO É O EVENTO QUE OCORRE E O SEGUNDO
//O Callback utilize essa função para mostrar no console o seu nome completo quando o evento 'scroll ocorrer
addEventListener('scroll', ()=>{
    console.log("O meu nome completo é Diego Inácio");
});


//CORRIJA O ERRO A BAIXO:

function precisoVisitar(paisesVisitados){
    let totalPaises = 193;
    return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`;
}

function jaVisitei(paisesVisitados){
    let totalPaises = 193;
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

