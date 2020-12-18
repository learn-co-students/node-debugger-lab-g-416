module.exports = function() {
  var output = {}
  var customerAccount = {
    balance: 0,
    name: 'Azat Mardan',
    checking: "1",
    type: ''
  }

  function setAccountType () {
    if (customerAccount.checking == 1) {
      customerAccount.type = 'checking'
    } else {
      customerAccount.type = 'savings'
    }
  }

  

  var openAccount = function(account, deposit) {
    var signupBonus = 250
    var deposit = 1000
    debugger
    account.balance += signupBonus
    output['New balance after signup bonus is '] = account.balance
    debugger
    account.balance += deposit
  }

  output['Account before opening'] = customerAccount

  openAccount(customerAccount)
  setAccountType()
  
  output['Account after opening'] = customerAccount
  return output
}