/*

Operadores Lógicos

&& -> E -> Pessoa Exigente / Pessoas Obediente
    true && true = true
    true && false = false
    false && false = false

||  -> ou -> Tanto faz / Filho Espertinho
    true && true = true
    true && false = tue
    false && false = false

    -> Negaçâo
    !true = false 
    !false = true
    
*/

const digitarASenha = true
const digitar0Token = true
const numeroDaConte = true

if (digitarASenha && digitar0Token && numeroDaContar){
    console.lo("Logado com sucesso)
} else {
    console.log("Autenticação FALHOU")
}

console.log(true && true && true)

const temperatura = 30

if(temperatura ===36) {
    console.log("Você está saudável")
} else if(temperatura > 36){
    console.log("Está com febre")
} else {
    console.log ("Está com hipotermia")
}


// Mariazinha é exigente. Ela NÂO quer o Joãozinho
// Bonito &&(E) Inteligente &&(E) Programador &&(E) Tem que ter carro // A Mariazinha quer isso
//  Não É Bonito / Inteligente / Programador / Tem Carro // Joãozinho 





// Luluzinha não é tão exigente. Ela que o paulinho
// Bonito || (Ou) Inteligante ||(Ou) Programador ||(ou) Tem que ter carro // Luluzinha
// Não È Bonito / Burro / Programador / Não tem Carro // Paulinho
