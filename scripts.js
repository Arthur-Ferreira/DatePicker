const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]


const daysLists = document.querySelectorAll('.days-list')
const lastMonthTitleElement = document.querySelector('#last-month-title h2')
const currentMonthElement = document.querySelector('#current-month-title h2')
const bgBlurElement = document.getElementById('bg-blur')
const monthPopUpElement = document.getElementById('month-popup')
const monthList = document.getElementById('month-list')



const date = new Date()
const currentYear = date.getFullYear()
const currentMonth = date.getMonth()


daysLists.forEach(day => {
  listenForClicks(day)
})

function listenForClicks(objs) {
  const daysObj = objs.children
  
  for (const day of daysObj) {
    day.addEventListener('click', selectDay)
  }
}

lastMonthTitleElement.addEventListener('click', openMonthMenu)
currentMonthElement.addEventListener('click', openMonthMenu)
bgBlurElement.addEventListener('click', closeMonthMenu)
monthList.addEventListener('click', selectMonth)


renderCalendar()