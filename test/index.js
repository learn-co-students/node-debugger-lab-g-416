var output = `Account before opening:  { balance: 0, name: 'Azat Mardan', checking: '1' }
New balance after signup bonus is 250
Account after opening:  { balance: 1250,
  name: 'Azat Mardan',
  checking: '1',
  type: 'checking' }`.replace(/\n/g, '')

var test = require('tape'),
  cp = require('child_process')

test('node version', function (t) {
  t.plan(2)
  child = cp.exec('node account',
  function (error, stdout, stderr) {
    console.log('stdout: ' + stdout)
    console.log('stderr: ' + stderr)
    t.equal(stderr, '')
    if (error !== null) {
      console.log('exec error: ' + error)
    }
    stdout = stdout.replace(/\n/g, '')
    t.equal(stdout, output)
  })
})
