import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

//cliente 1
const conta1 = new ContaCorrente();
conta1.cliente = new Cliente;

conta1.cliente.nome = "Hugo";
conta1.cliente.cpf = 99999988877;
conta1.agencia = 1001;

//cliente 2
const conta2 = new ContaCorrente();
conta2.cliente = new Cliente();

conta2.cliente.nome = "Burno";
conta2.cliente.cpf = 0;
conta2.agencia = 101;

//trabalhando com contas

console.log(conta1.cliente);
console.log(conta2.cliente);

//console.log(conta2);