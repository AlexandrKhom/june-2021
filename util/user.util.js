//ф-ция для скрытия полей объекта
module.exports = {
  userNormalizator: (userNormalize = {}) => {
    const fieldsToRemove = [
      'password'
    ];
    fieldsToRemove.forEach((field)=> {
      delete userNormalize[field]
    });
    return userNormalize
  }
}
