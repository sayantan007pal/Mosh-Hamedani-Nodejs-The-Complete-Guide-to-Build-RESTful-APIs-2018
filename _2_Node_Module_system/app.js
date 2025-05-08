var message = ''; //undefined : this output proves this variable is not available outside of this file so it is locally scoped
console.log(message)//blank
console.log(global.message)//undefined