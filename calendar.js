// Month Selection


function renderLastMonthCalendar(month) {


  let firstDayOfMonth = new Date(currentYear, month - 1, 1).getDay()
  let lastDateOfMonth = new Date(currentYear, month, 0).getDate()

  let lastDayOfMonth = new Date(currentYear, month - 1, lastDateOfMonth).getDay()
  let lastDateOfLastMonth = new Date(currentYear, month - 1, 0).getDate()

  let liTag = ''

  for (let i = firstDayOfMonth; i > 0; i--) {
    liTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`
  }

  for (let i = 1; i <= lastDateOfMonth; i++) {
    liTag += `<li>${i}</li>`
  }

  for (let i = lastDayOfMonth; i < 6; i++) {
    liTag += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`
  }

  lastMonthTitleElement.innerText = `${months[month - 1]}`
  lastMonthdaysList.innerHTML = liTag

}

function renderCurrentMonthCalendar(month) {


  let firstDayOfMonth = new Date(currentYear, month, 1).getDay()
  let lastDateOfMonth = new Date(currentYear, month + 1, 0).getDate()

  let lastDayOfMonth = new Date(currentYear, month, lastDateOfMonth).getDay()
  let lastDateOfLastMonth = new Date(currentYear, month, 0).getDate()

  let liTag = ''

  for (let i = firstDayOfMonth; i > 0; i--) {
    liTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`
  }

  for (let i = 1; i <= lastDateOfMonth; i++) {
    liTag += `<li>${i}</li>`
  }

  for (let i = lastDayOfMonth; i < 6; i++) {
    liTag += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`
  }


  currentMonthElement.innerText = `${months[month]}`
  currentMonthdaysList.innerHTML = liTag

}

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

  const targetElementContent = event.target.textContent

  switch (targetElementContent) {
    case 'Jan':
      renderLastMonthCalendar(1)
      renderCurrentMonthCalendar(1)
      break
    case 'Feb':
      renderLastMonthCalendar(2)
      renderCurrentMonthCalendar(2)
      break
    case 'Mar':
      renderLastMonthCalendar(3)
      renderCurrentMonthCalendar(3)
      break
    case 'Apr':
      renderLastMonthCalendar(4)
      renderCurrentMonthCalendar(4)
      break
    case 'May':
      renderLastMonthCalendar(5)
      renderCurrentMonthCalendar(5)
      break
    case 'Jun':
      renderLastMonthCalendar(6)
      renderCurrentMonthCalendar(6)
      break
    case 'Jul':
      renderLastMonthCalendar(7)
      renderCurrentMonthCalendar(7)
      break
    case 'Aug':
      renderLastMonthCalendar(8)
      renderCurrentMonthCalendar(8)
      break
    case 'Sep':
      renderLastMonthCalendar(9)
      renderCurrentMonthCalendar(9)
      break
    case 'Oct':
      renderLastMonthCalendar(10)
      renderCurrentMonthCalendar(10)
      break
    case 'Nov':
      renderLastMonthCalendar(11)
      renderCurrentMonthCalendar(11)
      break
    case 'Dec':
      renderLastMonthCalendar(12)
      renderCurrentMonthCalendar(0)
      break
    default:
      renderLastMonthCalendar(currentMonth)
      renderCurrentMonthCalendar(currentMonth)
  }
  closeMonthMenu()
}

function changeCalendar(event) {
  currentCalendar = currentMonth
  currentCalendar = event.target.tagName === 'left-arrow' ? currentMonth - 1 : currentMonth + 1
  renderLastMonthCalendar(currentMonth)
  renderCurrentMonthCalendar(currentMonth)
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
    targetElement.className = ''
  }
}