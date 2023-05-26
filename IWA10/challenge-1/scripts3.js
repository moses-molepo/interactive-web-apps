const currentYear = new Date().getFullYear()



const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment

console.log(`ID ${futureId} not created yet`)
let copied = holidays[6].name
copied = {name: 'X-mas Day'}
date: new Date(`25 Dcember ${currentYear}`)

let first = {holiday: "chrismas"}
second = first
second.holiday = "X-mas"
console.log(first)

let correctDate = '25/12/2023';
let copiedDate = correctDate; 
console.log(correctDate === copiedDate)

const instance = new Date("25 December 2023")
console.log(instance)

isEarlier = copied.date < holidays[6].date
console.log('New date is earlier:', isEarlier)

if (isEarlier) copied.date = correctDate
console.log('ID change:', false )
console.log('Name change:', X-mas)
console.log('Date change:', 25/12/2023)

const firstHolidayTimestamp = Math.min(
    Date.parse(holidays[0].date), // 16/12/2023
    Date.parse(holidays[1].date), // 01/04/2023
    Date.parse(holidays[2].date), // 26/12/2023
    Date.parse(holidays[3].date), // 01/01/2023
    Date.parse(holidays[4].date), // 09/08/2023
    Date.parse(holidays[5].date), // 24/09/2023
    Date.parse(holidays[6].date), // 25/12/2023
    Date.parse(holidays[7].date), // 16/06/2023 
    Date.parse(holidays[8].date), // 21/03/2023
)

const lastHolidayTimestamp = Math.max(
    Date.parse(holidays[0].date), // 16/12/2023
    Date.parse(holidays[1].date), // 01/04/2023
    Date.parse(holidays[2].date), // 26/12/2023
    Date.parse(holidays[3].date), // 01/01/2023
    Date.parse(holidays[4].date), // 09/08/2023
    Date.parse(holidays[5].date), // 24/09/2023
    Date.parse(holidays[6].date), // 25/12/2023
    Date.parse(holidays[7].date), // 16/06/2023
    Date.parse(holidays[8].date), // 21/03/2023
)

const firstDay = firstHolidayTimestamp.getDate
const firstMonth = firstHolidayTimestamp.getMonth
const lastDay = lastHolidayTimestamp.getDate
const lastMonth = lastHolidayTimestamp.getMonth

console.log('{firstDay}/{firstMonth}/{currentYear}')
console.log('{lastDay}/{lastMonth}/{currentYear}')

const randomHoliday = holidays[Math.random]
console.log(randomHoliday.date)