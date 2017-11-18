export const HELLO_WORLD = 'HELLO_WORLD'
export const RESET = 'RESET'

export const helloWorld = () => {
  return {
    type: HELLO_WORLD
  }
}

export const reset = () => {
  return {
    type: RESET
  }
}