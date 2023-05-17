const months = [ 'January', 'February', 'March', 'April',
  'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]


const lastMonthdaysList = document.querySelector('#last-month .days-list')
const currentMonthdaysList = document.querySelector('#current-month .days-list')
const lastMonthTitleElement = document.querySelector('#last-month-title h2')
const leftArrowElement = document.querySelectorAll('.left-arrow')
const rightArrowElement = document.querySelectorAll('.right-arrow')
const currentMonthElement = document.querySelector('#current-month-title h2')
const bgBlurElement = document.getElementById('bg-blur')
const monthPopUpElement = document.getElementById('month-popup')
const monthList = document.getElementById('month-list')



const date = new Date()
const currentYear = date.getFullYear()
const currentMonth = date.getMonth()

renderLastMonthCalendar(currentMonth)
renderCurrentMonthCalendar(currentMonth)

lastMonthdaysList.addEventListener('click', selectDay)
currentMonthdaysList.addEventListener('click', selectDay)
lastMonthTitleElement.addEventListener('click', openMonthMenu)
currentMonthElement.addEventListener('click', openMonthMenu)
bgBlurElement.addEventListener('click', closeMonthMenu)
monthList.addEventListener('click', selectMonth)



leftArrowElement.forEach(arrowClick => {
  arrowClick.addEventListener('click', changeCalendar)
})


rightArrowElement.forEach(arrowClick => {
  arrowClick.addEventListener('click', changeCalendar)
})

