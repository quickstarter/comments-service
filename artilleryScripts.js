module.exports.randomId = (userContext, ee, next) => {

  userContext.vars.id = Math.floor(Math.random() * 100000000)
  next()
}