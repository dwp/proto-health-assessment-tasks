const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter

addFilter('monthName', function () {
    const monthName = {
        month: {
          1: 'January',
          2: 'Feburary',
          3: 'March',
          4: 'April',
        }
      }
           
  return monthName
})
