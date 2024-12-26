const botaoGerarSenha = document.getElementById('gerarSenha');
    const senhaGerada = document.getElementById('senhagerada');

    botaoGerarSenha.addEventListener('click',() => {
const tamanho = document.getElementById('length').value;
const incluirMaiusculas = document.getElementById('uppercase').checked;
const incluirMinusculas =  document.getElementById('lowercase').checked;
const incluirNumeros = document.getElementById('numbers').checked;
const incluirSimbolos = document.getElementById('symbols').checked;

const maiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const minusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '1234567890';
const simbolos = '!@#$%^&*()_-+=';

let caracteresPossiveis = '';
if (incluirMaiusculas) caracteresPossiveis += maiusculas;
    if (incluirMinusculas) caracteresPossiveis += minusculas;
    if (incluirNumeros) caracteresPossiveis += numeros;
    if (incluirSimbolos) caracteresPossiveis += simbolos;

    let senha = '';
    for (let i = 0; i < tamanho; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteresPossiveis.length);
      senha += caracteresPossiveis[indiceAleatorio];
    }

    senhaGerada.value = senha;
    })