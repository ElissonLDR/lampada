const turnOnOff = document.getElementById('turnOnOff')
const lamp = document.getElementById('lamp')

function isLampBroken (){
    return lamp.src.indexOf ('quebrada') > -1
}

function lampOn () {
    if ( !isLampBroken ()){
    lamp.src = './img/lampada-ligada.png'
    }
}

function lampOff () {
    if ( !isLampBroken ()){
    lamp.src = './img/lampada-desligada.png'
}
}

function lampBroken (){
    lamp.src = './img/lampada-quebrada.png'

}

function lampOnOff(){
    if ( turnOnOff.textContent == 'Ligar'){
        lampOn ();
        turnOnOff.textContent = 'Desligar'
    } else {
        lampOff();
        turnOnOff.textContent = 'Ligar'
    }
}

turnOnOff.addEventListener('click', lampOnOff)

lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)

lamp.addEventListener('dblclick', lampBroken)
