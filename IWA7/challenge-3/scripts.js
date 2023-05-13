const leoName = 'Leo '
const leoSurname = 'Musvaire'
const leoBalance = '-9394'

const sarahName = 'Sarah '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line
const sarahPositive = sarahBalance * -1
const leoPositive = leoBalance * -1
const owed = parseInt(sarahPositive + leoBalance)
const leo = `${leoName}${leoSurname} (Owed : R${leoPositive})`
const sarah = `${sarahName}${sarahSurname} (Owed : R${sarahPositive})`
const total = "Total amount owed: "
const result = sarahPositive + leoPositive
const finalResult = result.toFixed(2)


console.log('\n','\n',leo, '\n',sarah,'\n','\n',divider,'\n',total,'R:',finalResult,'\n',divider,'\n','\n')
