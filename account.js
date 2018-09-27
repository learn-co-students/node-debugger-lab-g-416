module.exports = function() {
  var output = {}
  var customerAccount = {
    balance: 0,
    name: 'Azat Mardan',
    checking: '1',
    type: ''
  }

  var setAccountType = function(customerAccount) {
    if (customerAccount.checking === '1') {
      customerAccount.type = 'checking'
    } else {
      customerAccount.type = 'savings'
    }
  }

  var signupBonus = 250;
  var deposit = 1000;

  output['Account before opening'] = customerAccount

  var openAccount = function(signupBonus, account, deposit) {
    account.balance += signupBonus
    output['New balance after signup bonus is '] = account.balance
    account.balance += deposit
  }

  openAccount(signupBonus, customerAccount, deposit)
  setAccountType(customerAccount)
  output['Account after opening'] = customerAccount
  return output
}