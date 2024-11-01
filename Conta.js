import { Cliente } from "./Cliente.js";

export class Conta{
    static numeroDeContas = 0

    constructor(saldoinicial, cliente, agencia){
        this.saldoinicial = saldoinicial;
        this.cliente = cliente;
        this.agencia = agencia;
        ContaCorrente.numeroDeContas += 1;
     }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        } 
    }

    get cliente(){
        return this._cliente;
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }
    depositar(valor){
        if(this._saldo < 0) {
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}