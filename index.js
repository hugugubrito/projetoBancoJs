import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

//cliente 1
const cliente1 = new Cliente("Hugo", 99999999988);
const conta1 = new ContaCorrente( cliente1, 1001);

//cliente 2
const cliente2 = new Cliente("Burno", 98778998711);
const conta2 = new ContaCorrente(cliente2, 1002);


//trabalhando com contas

console.log(conta1, conta2);
console.log(ContaCorrente.numeroDeContas);

//console.log(conta2);