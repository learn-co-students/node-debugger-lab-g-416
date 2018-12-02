var expectedOutput = { 'Account before opening':
   { balance: 0,
     name: 'Azat Mardan',
     checking: '1',
     type: 'checking' },
  'New balance after signup bonus is ': 250,
  'Account after opening':
   { balance: 1250,
     name: 'Azat Mardan',
     checking: '1',
     type: 'checking' } }


var expect = require('chai').expect
var path = require('path')

describe('account.js', function () {
  it('must return the desired output', function(done){
    var actualOutput = require(path.join(__dirname, '..', 'account'))()
    // console.log(actualOutput)
    // console.log(expectedOutput)
    expect(actualOutput).to.deep.equal(expectedOutput)
    done()
  })
})
