// to do: functions for adding, subtracting, diving and multiplying

export const adding = (a, b, c = 0) => {
  return a + b + c;
}

export const subtracting = (a, b) => {
  return a - b;
}

export const multiplying = (a, b) => {
  return a * b;
}

export const dividing = (a, b) => {
  return a / b;
}

export const randomNumberGenerator = (mode) => {
  console.log(mode)
  if (mode === 'easy') {
    return Math.floor(Math.random() * 10)
  }
  if (mode === 'medium') {
    return Math.floor(Math.random() * 100)
  }
  if (mode === 'hard') {
    return Math.floor(Math.random() * 1000)
  }
  if (mode === 'expert') {
    return Math.floor(Math.random() * 10000)
  }
}

export function isNumber(evt) {
  console.log(evt)
  const charToCheck = evt.slice(evt.length - 1, evt.length)
  if (!/[0-9]/.test(charToCheck)) {
    return false
  }
  return true;
}