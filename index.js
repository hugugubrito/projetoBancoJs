class Cliente {
    nome;
    cpf;
    agencia;
    saldo;
    rg;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "hugo";
cliente1.cpf = 12345678911;
cliente1.agencia = 1;
cliente1.saldo = 5500;
cliente1.rg = 98765432111;

cliente2.nome = "ricar";
cliente2.cpf = 11122233344;
cliente2.agencia = 2;
cliente2.saldo = 500;

console.log(cliente1,"\n",cliente2);