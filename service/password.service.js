//установить bcrypt для хеша паролей
const bcrypt = require('bcrypt')

module.exports = {
  //хеш (пароль, к-во соли)
  hash: (password) => {
    return bcrypt.hash(password, 10)
  },
  //сравнение захешированного пароля
  compare: async (password, hashPassword) => {
    const isPasswordMatched = await bcrypt.compare(password, hashPassword)
    if (!isPasswordMatched) {
      throw new Error('wrong pass or email')
    }
  }
}





