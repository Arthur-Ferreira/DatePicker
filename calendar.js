// Month Selection

function openMonthMenu() {

  monthPopUpElement.style.display = 'block'
  bgBlurElement.style.display = 'block'

}

function closeMonthMenu() {

  monthPopUpElement.style.display = 'none'
  bgBlurElement.style.display = 'none'

}

function selectMonth(event) {

  if (event.target.tagName !== 'LI') {
    return
  }

  const selectedMonth = event.target

  console.dir(selectedMonth)
  console.dir(monthList)
  // lastMonthTitleElement.innerText = `${months}`


  closeMonthMenu()
}


function renderCalendar() {
  let lastDateOfMonth = new Date(year, month + 1, 0).getDate()
  let liTag = ''

  for (let i = 1; i <= lastDateOfMonth; i++) {
    liTag = `<li>${i}</li>`
  }

  
}







// Days selection 

function selectDay(event) {
  if (event.target.tagName !== 'LI') {
    return
  }

  const targetElement = event.target
  const prevElement = targetElement.previousElementSibling
  const nextElement = targetElement.nextElementSibling

  verifyLeftSiblings(targetElement)
  verifyRightSiblings(targetElement)

  if (prevElement.className === '' && nextElement.className === '') {

    targetElement.classList.add('active')

  } else if (prevElement.className === 'active') {

    prevElement.classList.add('active', 'start-element')
    targetElement.classList.add('active', 'last-element')


  } else if (nextElement.className === 'active') {

    targetElement.classList.add('active', 'start-element')
    nextElement.classList.add('active', 'last-element')

  }
}




function verifyLeftSiblings(element) {

  const targetElement = element
  const prevElement = targetElement.previousElementSibling


  if (prevElement.previousElementSibling.className === 'active start-element') {

    prevElement.classList.remove('last-element')
    prevElement.classList.add('midle-element')
    targetElement.classList.add('active', 'last-element')

  } else if (prevElement.previousElementSibling.className === 'active midle-element') {

    prevElement.classList.remove('last-element')
    prevElement.classList.add('midle-element')
    targetElement.classList.add('active', 'last-element')

  }
}


function verifyRightSiblings(element) {

  const targetElement = element
  const nextElement = targetElement.nextElementSibling


  if (nextElement.nextElementSibling.className === 'active last-element') {

    nextElement.classList.remove('start-element')
    nextElement.classList.add('midle-element')
    targetElement.classList.add('active', 'start-element')

  } else if (nextElement.nextElementSibling.className === 'active midle-element') {

    nextElement.classList.remove('start-element')
    nextElement.classList.add('midle-element')
    targetElement.classList.add('active', 'start-element')
  }
}


function clearDay(element) {

  const targetElement = element

  if (targetElement.className === 'active' ||
    'active start-element' ||
    'active midle-element' ||
    'active last-element'
  ) {
    targetElement.classList.remove('active', 'start-element', 'midle-element', 'last-element')
  }
}