const pessoa = {
    nome: 'Jéssica',
    idade: 23,
    profissao: 'secretária'
}

pessoa.idade = 25;

const rafael:{nome: string, idade: number, profissao: string} = {
nome: 'Rafael',
idade: 27,
profissao: 'Administrador'
}

pessoa.idade = 25;

const jonas:{nome: string, idade: number, profissao: string} = {
nome: 'Jonas',
idade: 27,
profissao: 'administrador'
}

enum Profissao {
    Administrador,
    Secretária,
    Médico,
    Professora
}


interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa {
    materias: string[]
}

const sthefany: Pessoa = {
    nome: 'Sthefany',
    idade: 26,
    profissao: Profissao.Secretária
}

const isac: Pessoa = {
    nome: 'Isac',
    idade: 26,
    profissao: Profissao.Médico
}

const barbara: Estudante = {
    nome: 'Barbara',
    idade: 18,
    profissao: Profissao.Secretária,
    materias: ['Matématica Financeira', 'Gestão Empresarial', 'Português Instrumental' ]
}

const isabela: Estudante = {
    nome: 'Isabela',
    idade: 18,
    materias: ['Matématica Financeira', 'Gestão Empresarial', 'Português Instrumental' ]
}

function listar(lista: string[]) {
    for (const item of lista) {
        console.log('-', item);
    }
}

listar(isabela.materias);
