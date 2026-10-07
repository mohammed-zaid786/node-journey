export function toUpperCase(value) {    //hello->HELLO it is built-in string method in JS
  return value.toUpperCase();
}

export function toLowerCase(value) {    //HELLO->hello 
  return value.toLowerCase();
}

export function reverse(value) {        // it can reverse ["o", "l", "l","e", "h"]
  return value.split("").reverse().join("");    //split -> ["h", "e", "l", "l","o"] & .join("")-> olleh
}