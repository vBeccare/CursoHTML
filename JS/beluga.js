function calcularMedia(){                    
                    
    var total = 0;
    var qtd = arguments.length;
    var x = 0;
    while(typeof arguments[x] === 'number'){
        total += arguments[x];
        x++;
    }                    

    return (total / qtd).toFixed(2);
}

function sortear(x){
    var x = x || 1;
    var sorteado = Math.random()*x;
    sorteado = Math.floor(sorteado);
    return sorteado;

}