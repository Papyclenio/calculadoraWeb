//Botões de função especias 
const Ac = document.getElementById("Ac");
const conversion = document.getElementById("conversion");
const percent = document.getElementById("percent");

//Botões numericos
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const zero = document.getElementById("zero");
const point = document.getElementById("point");

//Botões de sinais operacionais
const divisao = document.getElementById("divisao");
const multiplicacao = document.getElementById("multiplicacao");
const subtracao = document.getElementById("subtracao");
const soma = document.getElementById("soma");
const igual = document.getElementById("igual");

//Aplicando funcionalidades
const inp_result = document.getElementById("inp_result");

seven.addEventListener("click", () =>{
    inp_result.value += seven.value;
})


eight.addEventListener("click", () =>{
    inp_result.value += eight.value;
})

nine.addEventListener("click", () =>{
    inp_result.value += nine.value;
})

four.addEventListener("click", () =>{
    inp_result.value += four.value;
})

five.addEventListener("click", () =>{
    inp_result.value += five.value;
})

six.addEventListener("click", () =>{
    inp_result.value += six.value;
})

one.addEventListener("click", () =>{
    inp_result.value += one.value;
})

two.addEventListener("click", () =>{
    inp_result.value += two.value;
})

three.addEventListener("click", () =>{
    inp_result.value += three.value;
})

zero.addEventListener("click", () =>{
    inp_result.value += zero.value;
})

point.addEventListener("click", () =>{
    inp_result.value += point.value;
})

//Colocar funções especias
Ac.addEventListener("click", () =>{
    inp_result.value = "";
})

conversion.addEventListener("click", () =>{
    let valor = inp_result.value
    console.log(typeof valor);
    
    inp_result.value = `-${valor}`
})

