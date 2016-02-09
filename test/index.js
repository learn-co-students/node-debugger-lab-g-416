var output = `Account before opening:  { balance: 0, name: 'Azat Mardan', checking: '1' }
New balance after signup bonus is 250
Account after opening:  { balance: 1250,
  name: 'Azat Mardan',
  checking: '1',
  type: 'checking' }`.replace(/\n/g, '')

var expect = require('chai').expect,
  cp = require('child_process')

describe('node account', function () {
  it('must match the desired output', function(done){
    child = cp.exec('node account',
    function (error, stdout, stderr) {
      expect(stderr).to.equal('')
      if (error !== null) {
        console.log('exec error: ' + error)
      }
      stdout = stdout.replace('\n','')
      expect(stdout).to.equal(output)
      done()
    })
  })
})