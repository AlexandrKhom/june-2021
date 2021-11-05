module.exports = {
  userNorm: (Norma = [])=> {
    const removeField = ['password']
    removeField.forEach((field)=> {
      delete Norma[field]
    })
    return Norma
  }
}
