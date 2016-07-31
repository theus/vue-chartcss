export function is_true(option, callback) {
  if (option === "true") {
    if(callback !== undefined) {
      return callback
    }else{
     return true
    }
  }else{
    return ''
  }
}

export function has(option, callback) {
  if (option !== undefined) {
    if(callback !== undefined) {
      return callback
    }else{
     return true
    }
  }else{
    return ''
  }
}

export function in_array(term, arr) {
  if (term !== undefined) {
    if (arr.indexOf(term) !== -1) {
      return true
    }else{
      return false
    }
  }
}