'use strict'
console.log('Задачки')

let num = 3
alert(num)

// let чтобы иметь возможность работы с переменными a b в других задачках
let a = 10
let b = 2
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)

let c = 15
let d = 2
let result = c + d
console.log(result)

c = 2
console.log(a + b + c)

a = 17
b = 10
c = a - b
d = 7
result = c + d
console.log(result)

const name = prompt('Please, input your name')
alert(`Your name is ${name}`)

const number = prompt('Input some number')
result = Math.pow(number, 2)
alert(result)

const month = 30
const day = 24
const hour = 60
result = 60 * hour
console.log(`Секунд в часе ${result}`)
result = result * day
console.log(`Секунд в сутках ${result}`)
result = result * month
console.log(`Секунд в месяце ${result}`)

let data = new Date()
let hourTime = data.getHours()
let minTime = data.getMinutes()
let secTime = data.getSeconds()
console.log(`Time ${hourTime}:${minTime}:${secTime}`)

let val = 23
result = Math.pow(val, 2)
console.log(result)

num = 47
num += 7
num -= 18
num *= 10
num /= 15
alert(num)

num = 10
num = ++num
num = ++num
num = --num
alert(num)

const str = 'Hello world!'
console.log(str)

const str1 = 'Hello'
const str2 = 'world!'
console.log(str1 + ' ' + str2)

const myName = 'Ivan'
const age = 40
console.log(`Привіт, я ${myName} Мені ${age} років!`)

const string = 'abcde'
for (const character of string) {
  console.log(character)
}

const numStr = '12345'
let sum = Number(numStr[0])
let dif = Number(numStr[0])
let mul = Number(numStr[0])
let div = Number(numStr[0])
const lengthStr = numStr.length
for (let i = 1; i < lengthStr; i += 1) {
  const numSt = Number(numStr[i])
  sum += numSt
  dif -= numSt
  mul *= numSt
  div /= numSt
}
console.log(sum)
console.log(dif)
console.log(mul)
console.log(div)

const jsString = 'js'
jsString.toUpperCase()
console.log(jsString)
jsString.toLowerCase()
console.log(jsString)

const jsStudy = 'я вчу javascript!'
console.log(jsStudy.length)
const word1 = jsStudy.slice(2, 5)
const word2 = jsStudy.slice(6)
console.log(jsStudy.indexOf('вчу'))
const arrayStudy = jsStudy.split(' ')
console.log(arrayStudy)
const characterStudy = jsStudy.split('')
console.log(characterStudy)

const firstName = prompt("Введіть ім'я")
const lastName = prompt('Введіть прізвище')
const newAge = prompt('Введіть вік')
console.log(
  `Мене звати ${firstName} моє прізвище ${lastName} і мені стукноло ${newAge} рочків`,
)

const stringHello = 'Hello world!'
console.log(stringHello[0])
console.log(stringHello[4])
console.log(stringHello[5])

const string1 = 'Hello '
const string2 = 'world '
const string3 = '!'
console.log(string1.concat(string2, string3))

const line = 'Hello world, welcome to the universe.'
const lengthLineNew = line.length
console.log(line.indexOf('universe.') === lengthLineNew - 9)
console.log(line.indexOf('universe') === lengthLineNew - 8)
console.log(line.indexOf('universe.') === 0)
console.log(line.indexOf('Hello') === 0)

const newLine = 'я вчу javascript!'
console.log(newLine.includes('javascript'))
console.log(newLine.includes('CSS'))
