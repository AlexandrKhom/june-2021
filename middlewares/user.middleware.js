module.exports = {
  createUserMiddleware: (req, res, next) => {
    try {
      console.log('MIDDLEWARE WORK')
      next()
    } catch (e) {
      console.log(e)
    }
  }
}






