let anyEstadeVolta: any;
anyEstadeVolta = 3;
anyEstadeVolta = 'teste';
anyEstadeVolta = 5;

let stringTest: string = 'verificar'
stringTest = anyEstadeVolta;

let unknownValor: unknown;
unknownValor = 3;
unknownValor = 'opa';
unknownValor = true;
unknownValor = 'vai sim';

let stringTeste2: string = 'agora vai';
stringTeste2 = unknownValor;

if (typeof unknownValor === 'string') {
    stringTeste2 = unknownValor;
}