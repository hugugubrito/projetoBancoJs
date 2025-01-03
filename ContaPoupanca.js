import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{
    constructor( saldoInicial, cliente, agencia){
        super(saldoInicial,cliente,agencia);
    }

    sacar(valor){
        let taxa = 1.0;
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
    }
}