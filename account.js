module.exports = function() {
  var output = {}
  var customerAccount = {
    balance: 0,
    name: 'Azat Mardan',
    checking: '1'
  }

  function setAccountType () {
    if (customerAccount.checking === '1') {
      customerAccount.type = 'checking'
    } else {
      customerAccount.type = 'savings'
    }
  }

  var signupBonus = 250
  var firstDeposit = 1000

  var openAccount = function(account, deposit, signupBonus) {
    debugger
    account.balance += signupBonus
    output['New balance after signup bonus is '] = account.balance
    account.balance += deposit
  }

  output['Account before opening'] = customerAccount

  openAccount(customerAccount, firstDeposit, signupBonus)
  setAccountType()
  output['Account after opening'] = customerAccount
  return output
}
