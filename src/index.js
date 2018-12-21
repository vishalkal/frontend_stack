// @flow
/* eslint-disable no-console */

console.log('Hello world')

const str = 'ES6'
console.log(`Hello ${str}`)

const Dog = require('./dog')

const toby = new Dog('Toby')

console.log(toby.bark())
