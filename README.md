# Debug a Script Lab

## Objectives

1. Use Node built-in debugger by putting statements into a given script to find a problem by using debugger
2. Launch debugger
3. Fix the script



## Introduction

In this lab, you'll debug a Node script which has an issue.

## Instructions

1. Open `account.js` then launch it from a command line with `$ node account`.
2. Notice some issues (there a few of them)
3. Put some `debugger` statements in `account.js`
4. Launch in debug mode with `$ node debug account`
5. Track issue
6. Fix the file
7. Run test with `$ npm test`


The fixed script should output the following:

```
Account before opening:  { balance: 0, name: 'Azat Mardan', checking: '1' }
New balance after signup bonus is 250
Account after opening:  { balance: 1250,
  name: 'Azat Mardan',
  checking: '1',
  type: 'checking' }
```
