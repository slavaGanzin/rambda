function simpleHelper(method, x){
  if(x === undefined){
    return (xHolder) => simpleHelper(method, xHolder)
  }
  if(x[method]!== undefined){
    return x[method]()
  }
}

function helper(method, x, y){
  if(x === undefined){
    return (xHolder,yHolder) => helper(method, xHolder, yHolder)
  }else if(y === undefined){
    return yHolder => helper(method, x, yHolder)
  }
  if(y[method]!== undefined){
    return y[method](x)
  }
}

function passingHelper(method, x, y){
  if(x === undefined){
    return (xHolder,yHolder) => passingHelper(method, xHolder, yHolder)
  }else if(y === undefined){
    return yHolder => passingHelper(method, x, yHolder)
  }
  if(y[method]!== undefined){
    y[method](x)
    
    return y
  }
}

function oppositeHelper(method, x, y){
  if(x === undefined){
    return (xHolder,yHolder) => oppositeHelper(method, xHolder, yHolder)
  }else if(y === undefined){
    return yHolder => oppositeHelper(method, x, yHolder)
  }
  if(x[method]!== undefined){
    return x[method](y)
  }
}

// module.exports.add = superHelper(fn,1)
// module.exports.replace = superHelper(fn,3)

exports.padEnd = helper('padEnd')
exports.padStart = helper('padStart')
exports.reverse = simpleHelper('reverse')
exports.toString = simpleHelper('toString')
exports.add = require("./modules/add")
exports.addIndex = require("./modules/addIndex")
exports.any = require("./modules/any")
exports.adjust = require("./modules/adjust")
exports.append = require("./modules/append")
exports.compose = require("./modules/compose")
exports.contains = require("./modules/contains")
exports.curry = require("./modules/curry")
exports.defaultTo = require("./modules/defaultTo")
exports.drop = require("./modules/drop")
exports.dropLast = require("./modules/dropLast")
exports.equals = require("./modules/equals")
exports.filter = require("./modules/filter")
exports.find = require("./modules/find")
exports.findIndex = require("./modules/findIndex")
exports.flatten = require("./modules/flatten")
exports.has = require("./modules/has")
exports.head = require("./modules/head")
exports.ifElse = require("./modules/ifElse")
exports.indexOf = require("./modules/indexOf")
exports.includes = helper("includes")
exports.push = passingHelper("push")
exports.endsWith = helper("endsWith")
exports.lastIndexOf = helper("lastIndexOf")
exports.startsWith = helper("startsWith")
exports.helper = helper
exports.oppositeHelper = oppositeHelper
exports.concat = oppositeHelper("concat")
exports.init = require("./modules/init")
exports.join = require("./modules/join")
exports.last = require("./modules/last")
exports.length = simpleHelper("length")
exports.map = require("./modules/map")
exports.match = require("./modules/match")
exports.merge = require("./modules/merge")
exports.not = require("./modules/not")
exports.omit = require("./modules/omit")
exports.path = require("./modules/path")
exports.partialCurry = require("./modules/partialCurry")
exports.pick = require("./modules/pick")
exports.pluck = require("./modules/pluck")
exports.prepend = require("./modules/prepend")
exports.prop = require("./modules/prop")
exports.propEq = require("./modules/propEq")
exports.range = require("./modules/range")
exports.repeat = require("./modules/repeat")
exports.replace = require("./modules/replace")
exports.sort = require("./modules/sort")
exports.sortBy = require("./modules/sortBy")
exports.split = require("./modules/split")
exports.splitEvery = require("./modules/splitEvery")
exports.subtract = require("./modules/subtract")
exports.tail = require("./modules/tail")
exports.take = require("./modules/take")
exports.takeLast = require("./modules/takeLast")
exports.test = require("./modules/testFn")
exports.toLower = simpleHelper("toLowerCase")
exports.toUpper = simpleHelper("toUpperCase")
exports.trim = simpleHelper("trim")
exports.type = require("./modules/type")
exports.uniq = require("./modules/uniq")
exports.update = require("./modules/update")
exports.values = require("./modules/values")
exports.reduce = require("./modules/reduce")
