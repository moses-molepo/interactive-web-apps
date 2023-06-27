//scripts.js


const MONTHS = [
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
    'December',
]

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

// Only edit below 

const createArray = (length) => {
    const result = []
  
    for (let i = 0; i < length; i++) {
      result.push('')
    }
  
    return result
  }
  
  const createData = () => {
    const current = new Date()
    current.setDate(1)
  
    const startDay = current.getDay()
    const daysInMonth = getDaysInMonth(current)
  
    const weeks = createArray(5)
    const days = createArray(7)
  
    let dayIndex = 0
  
    for (let weekIndex = 0; weekIndex < weeks.length; weekIndex++) {
      const value = {
        week: weekIndex + 1,
        days: []
      }
  
      for (let dayOfWeek = 0; dayOfWeek < days.length; dayOfWeek++) {
        const day = dayIndex - startDay + 1
        const isValid = day > 0 && day <= daysInMonth
  
        value.days.unshift({
          dayOfWeek: dayOfWeek + 1,
          value: isValid ? day : null,
        })
  
        dayIndex++
      }
  
      weeks[weekIndex] = value
    }
  
    return weeks
  }
  
  const addCell = (existing, classString, value) => {
    return /* html */ `
      <td class="${classString}">
        ${value || ''}
      </td>
      ${existing}
    `
  }
  
  const createHtml = (data) => {
    let result = ''
  
    for (const week of data) {
      let inner = ''
  
     
  
      for (const day of week.days) {
        let classString = 'table__cell'
        const isToday = day.value === current.getDate() && current.getMonth() === new Date().getMonth()
        const isWeekend = day.dayOfWeek === 1 || day.dayOfWeek === 7
        const isAlternate = week.week % 2 === 0
  
        if (isToday) classString += ' table__cell_today'
        if (isWeekend) classString += ' table__cell_weekend'
        if (isAlternate) classString += ' table__cell_alternate'
  
        inner = addCell(inner, classString, day.value)
      }
      inner = addCell(inner, 'table__cell table__cell_sidebar', `Week ${week.week}`)
      result += `<tr>${inner}</tr>`
    }
  
    return result
  }
  

// Only edit above

const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)