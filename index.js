function countdown(callback){
  window.setTimeout(() => callback(), 2000)
}

function createMultiplier(num){
  return (n) => num * n
}

var doubler = function(n){
  return createMultiplier(2)(n)
}

var tripler = function(n){
  return createMultiplier(3)(n)
}

function multiplier(x, y){
  return x * y
}

var doublerWithBind = this.multiplier.bind(null, 2)
var triplerWithBind = this.multiplier.bind(null, 3)
