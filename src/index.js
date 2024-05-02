let nomeHeroi = "Batman"
let xpHeroi = 6.350
let nivelHeroi


if(xpHeroi < 1.000){

   nivelHeroi ="Ferro"

}else if(xpHeroi > 1.000 && xpHeroi <= 2.000){

   nivelHeroi ="Bronze"

}else if(xpHeroi > 2.000 && xpHeroi <= 5.000){

   nivelHeroi ="Prata"

}else if(xpHeroi > 5.000 && xpHeroi <= 7.000){

   nivelHeroi ="Ouro"

}else if(xpHeroi > 7.000 && xpHeroi <= 8.000){

   nivelHeroi ="Platina"

}else if(xpHeroi > 8.000 && xpHeroi <= 9.000){

   nivelHeroi ="Ascendete"

}else if(xpHeroi > 9.000 && xpHeroi <= 10.000){

   nivelHeroi ="Imortal"

}else{
   nivelHeroi ="Radiante"
}


console.log("O herói de nome " + nomeHeroi + " Está no nivel de " + nivelHeroi)