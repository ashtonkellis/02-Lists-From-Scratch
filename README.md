# Lab 02 - Lists From Scratch

[![Build Status](https://travis-ci.org/ashtonkellis/02-Lists-From-Scratch.svg?branch=master)](https://travis-ci.org/ashtonkellis/02-Lists-From-Scratch)

## List Module
### new List ()
- description: creates a new list, with similar behavior to an array. each element in the list has an index that can be used to reference it. 
- arity: 0

### list.push(..args)
- description: adds arguments to the end of the list
- arity: 1+ comma separated arguments
- argument data type: any

### list.map(callback)
- description: convers an n-length list to an n-length copy of the list, with each element mutated in the way defined by the callback function
- arity: 1
- argument data type: a callback function
- throws an error if list is empty, or callback is not a function

### list.reduce(callback, accumulator)
- description: converts an n-length list into a single element, based on the provided callback function and accumulator
- arity: 2
- argument data types:
  - callback: a callback function used to reduce the array. This callback takes two arguments (accumulator & current).
  - accumulator: the initial accumulator. If omitted, the first element in the array will be used.
  - throws an error if list is empty, or callback is not a function

### list.forEach(callback)
- description: applies the provided callback function to each element in the list
- arity: 1
= argument data type: callback funciton to be applied to each element
- throws an error if list is empty, or callback is not a function
