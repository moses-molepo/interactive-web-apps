const leoName = 'Leo Musvaire'
const leoNumber = '2'
const leoStreet = 'Church St.'
const leoPostal = '3105'
const leoBalance = '-10'

const sarahName = 'Sarah'
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'

// Only change below this line

const leo = {
	firstName: leoName ,
	balance: leoBalance *-1,
	accessId: '47afb389-8014-4d0b-aff3-e40203d2107f',
	age: 24,
	address: {
		houseNumber: leoNumber,
		streetName: leoStreet,
		postalCode1: leoPostal,
	}
}

const sarah = {
	fullName: sarahName + sarahSurname,
	age: 62,
	accessId: '6b279ae5-5657-4240-80e9-23f6b635f7a8',
	balance: sarahBalance*-1,
	address: {
		houseNumber: sarahNumber,
		streetName: sarahStreet,
		postalCode: sarahPostal,
	}
}


console.log('\n',sarah.fullName,'\n',sarah.age,'\n',sarah.address.houseNumber,'\n',sarah.address.streetName,'\n',sarah.address.postalCode,'\n',`R : ${sarah.balance.toFixed(2)}`)

console.log('\n',leo.firstName,'\n',leo.age,'\n',leo.address.houseNumber,'\n',leo.address.streetName,'\n',leo.address.postalCode1,'\n',`R : ${leo.balance}`)
