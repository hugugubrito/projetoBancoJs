class Cliente {
    nome;
    cpf;
    rg;
}


class ContaCorrente{
    agencia;
    #saldo = 0;

    sacar(valor){
        if(this.#saldo >= valor){
            this.#saldo -= valor;
            console.log("valor sacado: "+ valor + "\nsaldo atual:" + this.#saldo);
        }
    }
    depositar(valor){
        if(this.#saldo >= 0) {
            this.#saldo += valor;
            console.log("valor depositado: " + valor+ "\nsaldo atual" + this.#saldo);
       }
    }
}

const contaCorrenteHugo = new ContaCorrente();
contaCorrenteHugo.agencia = 1001;


contaCorrenteHugo.depositar(150);
contaCorrenteHugo.sacar(10);

