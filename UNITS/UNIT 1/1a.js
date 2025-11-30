const btnPlay = document.getElementById('btnPlay')
const btnPause = document.getElementById('btnPause')

const inputA1 = document.getElementById('inputA1')
const inputA2 = document.getElementById('inputA2')
const inputA4 = document.getElementById('inputA4')
const inputA5 = document.getElementById('inputA5')
const inputA6 = document.getElementById('inputA6')
const inputA7 = document.getElementById('inputA7')
const inputA8 = document.getElementById('inputA8')
const inputA9 = document.getElementById('inputA9')

const rightA1 = document.getElementById('rightA1')
const rightA2 = document.getElementById('rightA2')
const rightA3 = document.getElementById('rightA3')
const rightA4 = document.getElementById('rightA4')
const rightA5 = document.getElementById('rightA5')
const rightA6 = document.getElementById('rightA6')
const rightA7 = document.getElementById('rightA7')


btnPlay.addEventListener('click', function() {
    const audio = document.getElementById('audio1a')
    audio.play()
})  

btnPause.addEventListener('click', function() {
    const audio = document.getElementById('audio1a')
    audio.pause()
})  

inputA1.addEventListener('keyup', (e) => {
    if (inputA1.value === "are") {
        inputA1.style.color = 'darkgreen'
        rightA1.style.visibility = 'visible'
        const audio = document.getElementById('rightSound')
        audio.play()
        document.getElementById('inputA2').focus()
    }
})

inputA2.addEventListener('keyup', (e) => {
    if (inputA2.value === "am") {
        inputA2.style.color = 'darkgreen'
        rightA2.style.visibility = 'visible'
         const audio = document.getElementById('rightSound')
        audio.play()
        document.getElementById('inputA3').focus()
    }
})

inputA3.addEventListener('keyup', (e) => {
    if (inputA3.value === "Are") {
        inputA3.style.color = 'darkgreen'
        rightA3.style.visibility = 'visible'
         const audio = document.getElementById('rightSound')
        audio.play()
        document.getElementById('inputA4').focus()
    }
})

inputA4.addEventListener('keyup', (e) => {
    if (inputA4.value === "am") {
        inputA4.style.color = 'darkgreen'
        rightA4.style.visibility = 'visible'
         const audio = document.getElementById('rightSound')
        audio.play()
        document.getElementById('inputA4').focus()
    }
})