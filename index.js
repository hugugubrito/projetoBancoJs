import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import {ContaPoupanca} from "./ContaPoupanca.js";
import {Conta} from "./Conta.js";

//cliente 1
const cliente1 = new Cliente("Hugo", 99999999988);

const conta1 = new ContaCorrente(cliente1, 1001);

//Contapoupança
const contapoupança1 = new ContaPoupanca(100, cliente1,1001);

//trabalhando com contas
conta1.depositar(500);
conta1.sacar(100);

contapoupança1.sacar(10);

console.log(contapoupança1);
console.log(conta1);

conta1.teste();