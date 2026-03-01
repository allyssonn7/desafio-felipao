let nome = "Qual é o seu nome?";
console.log(nome);

let xp = "Qual é o seu xp?";
console.log(xp);

if (xp <= 1000) {
    console.log("Você está no nível Ferro!");
}else if (xp >= 1001 && xp <= 2000) {
    console.log("Você está no nível Bronze!");
}else if (xp >= 2001 && xp <= 5000) {
    console.log("Você está no nível Prata!");
}else if (xp >= 5001 && xp <= 7000) {
    console.log("Você está no nível Ouro!");
}else if (xp >= 7001 && xp <= 8000) {
    console.log("Você está no nível Platina!");
}else if (xp >= 8001 && xp <= 9000) {
    console.log("Você está no nível Ascendente!");
}else if (xp >= 9001 && xp <= 10000) {
    console.log("Você está no nível Imortal!");
}else if (xp >= 10001) {
    console.log("Você está no nível Radiante!");
}else {
    console.log("XP inválido!");
}