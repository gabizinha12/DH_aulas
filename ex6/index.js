function dados() {

let nome = prompt("Qual seu nome?")
let idade = prompt("Qual sua idade?")
let profissao = prompt("Qual sua profissão?")
confirm("Seus dados estão corretos?")
if(confirm) {
document.write(`sua profissao eh ${profissao} , seu nome eh ${nome}, sua idade eh ${idade}`)
}
else {
    dados();
}
let window = window.outerWidth;
let window2 = window.outerHeight;


let li = document.querySelector('li')

document.write(`${window} ${window2}`)

let menu = document.getElementById("#meu-menu")
let corpo = document.getElementById("#body")

li.style.backgroundColor = 'pink';

menu.style.color = 'blue'

corpo.style.fontStyle = 'italic'


menu.classList.add('mr-auto')



}