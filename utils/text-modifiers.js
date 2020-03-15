import {upperFirst} from 'lodash'

const upperFirstLetter = (inputStr, separator, joiner) => {
  const split = inputStr.split(separator || ' ').map(upperFirst)
  return split.join(joiner || ' ')
}

module.exports = {
  upperFirstLetter
}