const getType = (target) => Object.prototype.toString.call(target).slice(8, -1)

function classnames(...args) {
  // debugger
  const classes = []

  args.forEach(arg => {
    if (getType(arg) === 'String' || getType(arg) === 'Number') {
      classes.push(arg)
    } else if (getType(arg) === 'Array') {
      if (arg.length) {
        classes.push(classnames(...arg))
      }
    } else if (getType(arg) === 'Object') {
      for (let k in arg) {
        if (Object.hasOwn(arg, k) && arg[k]) {
          classes.push(k)
        }
      }
    }
  })

  return classes.join(' ')
}