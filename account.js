module.exports = function () {
  var output = {}
  var customerAccount = {
    balance: 0,
    name: 'Azat Mardan',
    checking: '1'
  }

  var setAccountType = function () {
    if (customerAccount.checking == 1) {
      customerAccount.type = 'checking'
    } else {
      customerAccount.type = 'savings'
    }
    output['Account before opening'] = customerAccount
    return customerAccount
  }

  var signupBonus = 250,
    deposit = 1000

  var newAccount =  Object.assign({}, setAccountType())

  var openAccount = function(newAccount, deposit) {
    newAccount.balance += signupBonus
    output['New balance after signup bonus is '] = newAccount.balance
    newAccount.balance += deposit
    output['Account after opening'] = newAccount
  }
  openAccount(newAccount, deposit)
  return output
}
