export const shuffle = <T>(array: T[]): T[] => {
  if (array.length <= 1) return array

  const output = [...array]

  for (let i = output.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = output[i]
    output[i] = output[j]
    output[j] = temp
  }

  return output
}

export const shuffleObjectKeys = (object: { [key: string]: any }) => {
  let output: { [key: string]: any } = {}

  shuffle(Object.keys(object)).forEach(key => (output[key] = object[key]))

  return output
}

export default {
  shuffle,
  shuffleObjectKeys,
}
