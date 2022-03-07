const form = document.querySelector('form')
const calculateUserScoreDiv = document.querySelector('.text-center')
const correctAnswers = ['A', 'B', 'D', 'D', 'B', 'C', 'A', 'C', 'B', 'A']
const scoreMessage = document.createElement('h1')

let score = 0

const getUserAnswer = () => correctAnswers.map((_, index) => 
  form[`inputQuestion${index + 1}`].value)

const calculateUserScore = userAnswers => {
  score = 0

  userAnswers.forEach((userAnswer, index) => {
    const isUserAnswerCorrect = userAnswer === correctAnswers[index]

    if (isUserAnswerCorrect) {
       score += 10
     }
   })
}

const scrollPageToScore = () => {
  scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  })
}

const getTextColor = score => ({
  0: 'text-danger'
})[score] || 'text-success'

const insertScoreMessage = (counter, textColor) => {
  scoreMessage.textContent = `Você acertou ${counter}% das questões!`
  scoreMessage.setAttribute('class', textColor)
  calculateUserScoreDiv.appendChild(scoreMessage)
}

const animateFinalScore = textColor => {
  let counter = 0
  
  const timer = setInterval(() => {
    if (counter === score) {
      clearInterval(timer)
    }
    
    insertScoreMessage(counter++, textColor)
    
  }, 20)
}

const showScore = event => {
  event.preventDefault()
  
  const userAnswers = getUserAnswer()
  
  calculateUserScore(userAnswers)  
  scrollPageToScore()

  const textColor = getTextColor(score)

  animateFinalScore(textColor)
}

form.addEventListener('submit', showScore)