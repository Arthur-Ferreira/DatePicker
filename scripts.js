const tableDatas = document.querySelectorAll('td')

tableDatas.forEach(td => {
  td.addEventListener('click', activateDay)
})


function activateDay(event) {
  const td = event.target
  td.classList.toggle('active')
  
  
}