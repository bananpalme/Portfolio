let getDarkModeButton = document.querySelector('.dark-mode')
let getBody = document.querySelector('body')
let getHeader = document.querySelector('header')
let getFooter = document.querySelector('footer')
let getArrowHead = document.querySelector('.arrowhead')
let getDarkModeImg = document.querySelector('.dark-mode-img')

getDarkModeButton.style.display = 'flex'
getDarkModeButton.style.justifyContent = 'center'

getDarkModeImg.src = './assets/light_mode.svg'

let darkMode = false

const changeColourMode = () => {
    if (darkMode === false) {
        getBody.style.background = 'linear-gradient(0deg, rgba(15,27,21,1) 0%, rgba(30,44,43,1) 100%)'
        getBody.style.color = "#EDF7F0"
        getHeader.style.backgroundColor = '#0c1d19'
        getDarkModeButton.style.backgroundColor = '#2c3d39'
        getFooter.style.backgroundColor = '#091511'
        getArrowHead.style.borderBottom = '5px solid #EDF7F0'
        getArrowHead.style.borderRight = '5px solid #EDF7F0'
        getDarkModeImg.src = './assets/dark_mode.svg'
    } else {
        getBody.style.background = 'linear-gradient(0deg, rgba(157,241,215,1) 0%, rgba(209,245,240,1) 55%)'
        getBody.style.color = "#232730"
        getHeader.style.backgroundColor = '#23a390'
        getDarkModeButton.style.backgroundColor = '#d1f5f0'
        getFooter.style.backgroundColor = '#115046'
        getArrowHead.style.borderBottom = '5px solid #232730'
        getArrowHead.style.borderRight = '5px solid #232730'
        getDarkModeImg.src = './assets/light_mode.svg'
    }


    darkMode = !darkMode

}

getDarkModeButton.addEventListener('click', changeColourMode)
