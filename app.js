const form = document.querySelector('form')
const calculateUserScoreDiv = document.querySelector('.text-center')
const correctAnswers = ['A', 'B', 'D', 'D', 'B', 'C', 'A', 'C', 'B', 'A']
const scoreMessage = document.createElement('h1')

const insertScoreMessage = (counter, textColor) => {
  scoreMessage.textContent = `Você acertou ${counter}% das questões!`
  scoreMessage.setAttribute('class', textColor)
  calculateUserScoreDiv.appendChild(scoreMessage)
}

const getTextColor = score => ({
  0: 'text-danger'
})[score] || 'text-success'

const showScore = event => {
  event.preventDefault()
  
  let score = 0
  
  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
    form.inputQuestion5.value,
    form.inputQuestion6.value,
    form.inputQuestion7.value,
    form.inputQuestion8.value,
    form.inputQuestion9.value,
    form.inputQuestion10.value
  ]
  
  const calculateUserScore = (userAnswer, index) => {
   if (userAnswer === correctAnswers[index]) {
      score += 10
    }
  }
  
  userAnswers.forEach(calculateUserScore)
  
  scrollTo(0, 10)
  
  const textColor = getTextColor(score)
  
  let counter = 0
  
  const timer = setInterval(() => {
    if (counter === score) {
      clearInterval(timer)
    }
    
    insertScoreMessage(counter, textColor)
    counter++
  }, 10)
}

form.addEventListener('submit', showScore)