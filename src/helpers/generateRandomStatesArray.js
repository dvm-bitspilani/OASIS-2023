function getRandomStats(
    startingYPoint,
    endingYPoint,
    startingYRange,
    endingYRange,
    startingXPoint,
    endingXPoint,
    startingXRange,
    endingXRange
  ) {
    const random = {}
    random.int = Math.floor(Math.random() * 10 + 1)
    random.file = `/static/images/Group${random.int}.png`
  
    random.startingY = Math.floor(Math.random() * startingYRange + startingYPoint)
    random.startingX = Math.floor(Math.random() * startingXRange + startingXPoint)
  
    random.endingY = Math.floor(Math.random() * endingYRange + endingYPoint)
    random.endingX = Math.floor(Math.random() * endingXRange + endingXPoint)
  
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
    endingXRange
  ) {
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
          endingXRange
        )
      )
    }
    return randomArray
  }
  