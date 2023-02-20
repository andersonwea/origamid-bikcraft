// Ativar item do menu
const links = document.querySelectorAll('.header-menu a');

const activeMenu = (link) => {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add('active')
  }
}

links.forEach(activeMenu)

// Ativar item do orçamento
const params = new URLSearchParams(location.search);

const activeProduct = (param) => {
  const element = document.getElementById(param);
  console.log(element)
  if (element) {
    element.checked = true
  }
}

params.forEach(activeProduct)

// Questions
const questions = document.querySelectorAll('.questions button');

const AnswerActive = (event) => {
  const question = event.target;
  const controls = question.getAttribute('aria-controls');
  const answer = document.getElementById(controls);

  answer.classList.toggle('active');
  const active = answer.classList.contains('active');
  question.setAttribute('aria-expanded', active)
}

const selectQuestions = (question) => {
  question.addEventListener('click', AnswerActive)
}

questions.forEach(selectQuestions);

// bicycles galery
const bicycles = document.querySelectorAll('.bicycles-images img');
const bicyclesGalery = document.querySelector('.bicycles-images')

const changeImage = (event) => {
  const image = event.target
  // matchMedia metodo para verificar o tamanho da tela
  // propriedade matches retorna true ou false 
  const media = matchMedia("(min-width: 1000px)").matches;
  if (media) {
    bicyclesGalery.prepend(image)
  }
}

const selectBicycles = (bicycle) => {
  bicycle.addEventListener('click', changeImage)
}

bicycles.forEach(selectBicycles)

// Animação
if (window.SimpleAnime) {
  new SimpleAnime()
}