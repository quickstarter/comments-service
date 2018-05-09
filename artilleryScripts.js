module.exports.randomId = (userContext, ee, next) => {
  console.log(userContext);
  
  userContext.vars.id = Math.floor(Math.random() * 100000000)
  next()
}