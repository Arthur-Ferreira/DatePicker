const daysList = document.querySelector('.days-list')
const daysObj = daysList.children
const date = new Date()
const year = date.getFullYear
const month = date.getMonth
const currentDay = date.getDay

let clicks = 0

for (const day of daysObj) {
  day.addEventListener('click', selectDay)
}



// Month Selection











// TODO: test validated if divide the functions in prev and next

// Days selection 




function selectDay(event) {
  clicks++
  if (event.target.tagName !== 'LI') {
    return
  }

  const targetElement = event.target
  const prevElement = targetElement.previousElementSibling
  const nextElement = targetElement.nextElementSibling


  if (prevElement.className === '' || nextElement.className === '') {
    targetElement.classList.add('active')

  }

  if (clicks > 1) {
    clicks = 0
    targetElement.classList.remove('active', 'start-element', 'midle-element', 'last-element')
  }
  checkSiblings(targetElement)
  checkNextSiblings(targetElement)
}


function checkSiblings(element) {
  const targetElement = element

  if (targetElement.previousElementSibling.className === 'active' && 'start-element') {

    targetElement.previousElementSibling.classList.add('active', 'start-element')
    targetElement.classList.add('active', 'last-element')

  } else if (targetElement.nextElementSibling.className === 'active') {

    targetElement.nextElementSibling.classList.add('active', 'last-element')
    targetElement.classList.add('active', 'start-element')
  }

}



function checkNextSiblings(element) {
  const nextSibling = element.nextElementSibling
  const prevSibling = element.previousElementSibling
  element

  console.log(prevSibling)
  console.log(element)
  console.log(nextSibling)

  if (prevSibling.previousElementSibling.className === 'active start-element') {
    prevSibling.classList.remove('start-element')
    prevSibling.classList.add('midle-element')
    element.classList.add('last-element')

  } else if (nextSibling.nextElementSibling.className === 'active last-element') {

    nextSibling.classList.remove('start-element')
    element.classList.add('start-element')
    nextSibling.classList.add('midle-element')
  }
}





// if (prevSibling.className === 'active' && nextSibling.className === 'active') {

//   prevSibling.classList.add('start-element')
//   element.classList.add('midle-element')
//   nextSibling.classList.add('last-element')
// }









