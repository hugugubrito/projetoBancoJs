import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import {ContaPoupanca} from "./ContaPoupanca.js";

//cliente 1
const cliente1 = new Cliente("Hugo", 99999999988);
const conta1 = new ContaCorrente( cliente1, 1001);

//Contapoupança

const contapoupança1 = new ContaPoupanca(0, cliente1,1001)
//trabalhando com contas

console.log(contapoupança1);
console.log(conta1);
//console.log(conta2);