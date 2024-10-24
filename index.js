import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

//cliente 1
const cliente1 = new Cliente();
const conta1 = new ContaCorrente();

cliente1.nome = "Hugo";
cliente1.cpf = 99999988877;

conta1.agencia = 1001;
conta1.cliente = cliente1;

//cliente 2
const cliente2 = new Cliente();
const conta2 = new ContaCorrente();

cliente2.nome = "Burno";
cliente2.cpf = 99988877766;

conta2.agencia = 101;
conta2.cliente = cliente2;

//trabalhando com contas

conta1.depositar(600);
conta1.sacar(150);

conta1.transferir(200,conta2);

console.log(conta1);
console.log(conta2);