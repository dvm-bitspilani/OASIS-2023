function getRandomStats(
  startingYPoint,
  endingYPoint,
  startingYRange,
  endingYRange,
  startingXPoint,
  endingXPoint,
  startingXRange,
  endingXRange,
  rng
) {
  const random = {}
  random.int = Math.floor(rng() * 10 + 1)
  random.file = `/static/images/Group${random.int}.png`

  random.startingY = Math.floor(rng() * startingYRange + startingYPoint)
  random.startingX = Math.floor(rng() * startingXRange + startingXPoint)

  random.endingY = Math.floor(rng() * endingYRange + endingYPoint)
  random.endingX = Math.floor(rng() * endingXRange + endingXPoint)

  return random
}

export function generateRandomStatesArray(
  number,
  startingYPoint,
  endingYPoint,
  startingYRange,
  endingYRange,
  startingXPoint,
  endingXPoint,
  startingXRange,
  endingXRange,
  seed
) {
  let value = seed
  const rng = seed === undefined ? Math.random : () => {
    value = (Math.imul(value, 1664525) + 1013904223) >>> 0
    return value / 4294967296
  }
  const randomArray = []
  for (let i = 0; i < number; i++) {
    randomArray.push(
      getRandomStats(
        startingYPoint,
        endingYPoint,
        startingYRange,
        endingYRange,
        startingXPoint,
        endingXPoint,
        startingXRange,
        endingXRange,
        rng
      )
    )
  }
  return randomArray
}
