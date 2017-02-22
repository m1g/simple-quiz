

const submitAnswers = () => {
  // set variables to hold totals
  let total = 5
  let score = 0

  // get user input
  let q1 = document.forms['quizForm']['q1'].value
  let q2 = document.forms['quizForm']['q2'].value
  let q3 = document.forms['quizForm']['q3'].value
  let q4 = document.forms['quizForm']['q4'].value
  let q5 = document.forms['quizForm']['q5'].value

  // setting validation
  for (i = 1; i <= total; i++) {
    if (eval('q'+i) == null || eval('q'+i) == '') {
      alert('You missed question '+ i)
      return false
    }
  }

  // set correct answers
  const answers = [
    'b', 'a', 'd', 'b', 'd'
  ]

  // check answers
  for (i = 1; i <= total; i++) {
    if (eval('q'+i) == answers[i - 1]) {
      score++
    }
  }
  // ABOVE LOOPS THROUGH THE BELOW CODE
  // if (q1 == answers[0]) {
  //   score++
  // }
  // if (q2 == answers[1]) {
  //   score++
  // }
  // if (q3 == answers[2]) {
  //   score++
  // }
  // if (q4 == answers[3]) {
  //   score++
  // }
  // if (q5 == answers[4]) {
  //   score++
  // }

  // display results
  const results = document.getElementById('results')
  results.innerHTML = ('<h3>You scored <span>'+score+'</span> out of <span>'+total+'</span></h3>')
  alert('You scored '+score+' out of ' +total)

  return false
}
