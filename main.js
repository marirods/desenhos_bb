"use strict"


const botaotrocarimagem = document.getElementById('trocar-imagem')
let contador = 0
let urlImg = ""

function troca(){
    if(contador == 6){
        contador = 0
    }
    contador++
    urlImg = `url(./img/desenho${contador}.jpg)`
    document.documentElement.style.setProperty('--imagem-fundo', urlImg)
}
botaotrocarimagem.addEventListener('click', troca);



