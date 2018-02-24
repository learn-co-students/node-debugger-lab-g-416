module.exports = function() {
  
  var output = {}
  var customerAccount = {
    balance: 0,
    name: 'Azat Mardan',
    checking: "1",
    type: ''
  }


  function setAccountType () {
    if (customerAccount.checking === "1") {
      return customerAccount.type = 'checking'
    } else {
      return customerAccount.type = 'savings'
    }
  }

  var signupBonus = 250,
    deposit = 1000

  var openAccount = function(account, deposit) {
    account.balance += signupBonus
    output['New balance after signup bonus is '] = account.balance
    account.balance += deposit
  }

  output['Account before opening'] = customerAccount

  setAccountType()
  openAccount(customerAccount, deposit)
  output['Account after opening'] = customerAccount
  return output
}