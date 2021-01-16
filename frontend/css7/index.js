const hamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.menu')
const sns = document.querySelector('.sns')

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active')
  sns.classList.toggle('active')
})
