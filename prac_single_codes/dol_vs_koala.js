const calcAverage = (a,b,c) => (a+b+c)/3

const checkWinner = function(scDol,scKol){
    if(scDol>=2*scKol){
        return `Dolphins win (${scDol} vs. ${scKol})`;+-
    } else if(scKol>=2*scDol){
        return `Koalas win (${scKol} vs. ${scDol})`;
    } else{
        return `No team wins...`;
    }

}

let scoreDolphins = calcAverage(44,2,7)
let scoreKoalas = calcAverage(65,54,49)
console.log(checkWinner(scoreDolphins,scoreKoalas))
//

//
