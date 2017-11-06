
let addClimber = document.getElementById('addClimber')
let climberForm = document.getElementById('addClimberForm')

addClimber.addEventListener('click', event => {
	console.log('hello world!')
	event.preventDefault();
	climberForm.style.display = 'block'
})
let closeForm = document.getElementsByClassName('closeForm')[0]

closeForm.addEventListener('click', event => {
	climberForm.style.display = 'none'
})
 
