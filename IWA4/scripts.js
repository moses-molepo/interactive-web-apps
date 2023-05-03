const date = 2050
const group1 = 'students'
const group2 = 'parents'

let count = 0

if (date === 2050) {
	console.log("January", 'New Year’s Day')
	console.log("March", 'Human Rights Day')
	console.log("february", 'Family Day')
	console.log('April', 'Freedom Day')
       count = count + 4
	if (group1 === "students") {
	  console.log('June', 'Youth Day')
      count = count + 1
		
  }

	console.log('August', 'Women’s Day')
	console.log('September', 'Heritage Day')
	let month = 'December'
	console.log(month , 'Day of Reconciliation')
	 count = count + 3

	if (group2 === "parents") {
	  console.log(month, 'Christmas Day')
	  console.log(date, 'Day of Goodwill')
      count = count + 1 

}

console.log('Your status is:')
console.log('The year is:', date)
console.log('The total holidays is:', count)
}