const toggleThemeEl = document.getElementById('toggleTheme')
const mainBodyEl = document.getElementById('mainBody')

let currentTheme = 'dark'

toggleThemeEl.addEventListener('click', () => {
    if (currentTheme === 'dark') {
        mainBodyEl.style.color = 'rgb(18, 17, 17)'
        mainBodyEl.style.backgroundColor = 'rgb(224, 235, 234)'
        currentTheme = 'light'
    } else {
        mainBodyEl.style.color = '#fff'
        mainBodyEl.style.backgroundColor = 'rgb(13, 27, 35)'
        currentTheme = 'dark'
    }
})