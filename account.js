module.exports = function () {
  var output = {}
  var signupBonus = 250
  var deposit = 1000

  var customerAccount = {
    balance: 0,
    name: 'Azat Mardan',
    checking: '1'
  }

  output['Account before opening'] = customerAccount

  function setAccountType() {
    if (customerAccount.checking == 1) {
      customerAccount.type = 'checking'
    } else {
      customerAccount.type = 'savings'
    }
  }

  var openAccount = function (account, deposit) {
    account.balance += signupBonus
    output['New balance after signup bonus is '] = account.balance
    account.balance += deposit
  }

  openAccount(customerAccount, deposit)
  setAccountType()
  output['Account after opening'] = customerAccount

  return output
}
