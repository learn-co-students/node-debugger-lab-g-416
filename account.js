module.exports = function() {
  var output = {}
  var customerAccount = {
    balance: 0,
    name: 'Azat Mardan',
    checking: '1'
  }

  debugger

  function setAccountType () {
    if (customerAccount.checking == 1) {
      customerAccount.type = 'checking'
      debugger
    } else {
      customerAccount.type = 'savings'
    }
  }

  var signupBonus = 250,
      deposit = 1000

  var openAccount = function(account, deposit) {
    account.balance += signupBonus
    output['New balance after signup bonus is '] = account.balance
    account.balance += deposit
    debugger
  }

  output['Account before opening'] = customerAccount

  openAccount(customerAccount, deposit)
  setAccountType()
  output['Account after opening'] = customerAccount
  return output
}
