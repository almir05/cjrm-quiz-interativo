const form = document.querySelector('form')
const button = document.querySelector('button')
const correctAnswers = ['A', 'B', 'B', 'C', 'A']
const h1 = document.createElement('h1')

const insertResultMessage = (score, textColor) => {
  h1.textContent = `Você acertou ${score}% das questões!`
  h1.setAttribute('class', textColor)
  button.insertAdjacentElement('afterend', h1)
}

const checkResult = event => {
  event.preventDefault()
  
  let score = 0
  
  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
    form.inputQuestion5.value
  ]
  
  const userScore = (userAnswer, index) => {
    if (userAnswer === correctAnswers[index]) {
      score += 20
    }
  }
  
  userAnswers.forEach(userScore)
  
  const scoreBiggerThanZero = score > 0
  
  if (scoreBiggerThanZero) {
    insertResultMessage(score, 'text-success')
    return
  }
  
  insertResultMessage(score, 'text-danger')
}

form.addEventListener('submit', checkResult)