const assertArraysEqual = require(`../assertArraysEqual`)
const eqArrays = require(`../eqArrays`)

assertArraysEqual([1,2,2,3], [4,4,3,6])
assertArraysEqual([1,2,2,3], [1,2,2,3])