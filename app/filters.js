const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter
const filters = govukPrototypeKit.views.addFilter

filters.toMonth = function(x){ 
  
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];   

if (x > 0){ return months[x - 1]; // returns date as per month      
} else {
        return x;      
}};     

filters.toMoney = function(x){  return("£" + x );
//TO ADD - case to handle nothing being there 
}
