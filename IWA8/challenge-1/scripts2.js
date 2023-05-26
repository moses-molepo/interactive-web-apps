/*
const user1 = {
    name: "Moses" ,
    surname: "Molepo" ,
    age: 25
}

const user2 = {
    name: "Angel" ,
    surname: "Makwela" ,
    age: 22
}



console.log('\n',user2.name,'\n',user2.surname,'\n',user2.age,'\n',"That's my baby right there!!!!!!!",'\n',"And I love her so much <3")
*/


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


const users = {
    sarah: {
        fullName: sarahName + sarahSurname,
	age: 62,
	accessId: '6b279ae5-5657-4240-80e9-23f6b635f7a8',
	balance: sarahBalance*-1,
	address: {
		houseNumber: sarahNumber,
		streetName: sarahStreet,
		postalCode: sarahPostal,
	}
},
    
    
    leo: {
            firstName: leoName,
        balance: leoBalance *-1,
        accessId: '47afb389-8014-4d0b-aff3-e40203d2107f',
        age: 24,
        address: {
            houseNumber: leoNumber,
            streetName: leoStreet,
            postalCode: leoPostal,
        }
    
    }
}

console.log(users.leo.firstName,users.leo.age,users.leo.address.houseNumber,users.leo.address.streetName,users.leo.address.postalCode,users.leo.balance)
console.log(users.sarah.fullName,users.sarah.age,users.sarah.address.houseNumber,users.sarah.address.streetName,users.sarah.address.postalCode,users.sarah.parseInt(balance))