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
const lastMonthTitleElement = document.getElementById('last-month-title')
const currentMonthElement = document.getElementById('current-month-title')
const bgBlurElement = document.getElementById('bg-blur')
const monthPopUpElement = document.getElementById('month-popup')
const monthList = document.getElementById('month-list')



const date = new Date()
const year = date.getFullYear()
const month = date.getMonth()


daysLists.forEach(list => {
  listenForClicks(list)
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


