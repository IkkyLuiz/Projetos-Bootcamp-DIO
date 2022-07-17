"use strict";
const pessoa = {
    nome: 'Jéssica',
    idade: 23,
    profissao: 'secretária'
};
pessoa.idade = 25;
const rafael = {
    nome: 'Rafael',
    idade: 27,
    profissao: 'Administrador'
};
pessoa.idade = 25;
const jonas = {
    nome: 'Jonas',
    idade: 27,
    profissao: 'administrador'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Administrador"] = 0] = "Administrador";
    Profissao[Profissao["Secret\u00E1ria"] = 1] = "Secret\u00E1ria";
    Profissao[Profissao["M\u00E9dico"] = 2] = "M\u00E9dico";
    Profissao[Profissao["Professora"] = 3] = "Professora";
})(Profissao || (Profissao = {}));
const sthefany = {
    nome: 'Sthefany',
    idade: 26,
    profissao: Profissao.Secretária
};
const isac = {
    nome: 'Isac',
    idade: 26,
    profissao: Profissao.Médico
};
const barbara = {
    nome: 'Barbara',
    idade: 18,
    profissao: Profissao.Secretária,
    materias: ['Matématica Financeira', 'Gestão Empresarial', 'Português Instrumental']
};
const isabela = {
    nome: 'Isabela',
    idade: 18,
    materias: ['Matématica Financeira', 'Gestão Empresarial', 'Português Instrumental']
};
function listar(lista) {
    for (const item of lista) {
        console.log('-', item);
    }
}
listar(isabela.materias);
