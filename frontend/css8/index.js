const more = document.querySelector('.more')
const title = document.querySelector('.title')

more.addEventListener('click', () => {
  more.classList.toggle('clicked')
  title.classList.toggle('clamp')
})
