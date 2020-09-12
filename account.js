module.exports = function() {
  var output = {}
  var customerAccount = {
    balance: 0,
    name: 'Azat Mardan',
    checking: '1'
  }

  function setAccountType () {
    if (customerAccount.checking === 1) {
      customerAccount.type = 'savings'
    } else {
      customerAccount.type = 'checking'
    }
  }

  var signupBonus = 250,
    deposit = 1000

  var openAccount = function(account, deposit) {
    account.balance += signupBonus
    output['New balance after signup bonus is '] = account.balance
    account.balance += 1000
  }

  output['Account before opening'] = customerAccount
  console.log(output)
  openAccount(customerAccount)
  
  setAccountType()
  output['Account after opening'] = customerAccount
  console.log(output['Account after opening'] = customerAccount)
  return output
}
