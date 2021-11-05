const bcrypt = require('bcrypt')

module.exports = {
  hash: (password) => {
    return bcrypt.hash(password, 10)
  },
  compare: async (password, hashPassword)=> {
    const isPasswordMatch = await bcrypt.compare(password, hashPassword)
  if (!isPasswordMatch){
    throw new Error('wrong pass')
  }
  }

}



