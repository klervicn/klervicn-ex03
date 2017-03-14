function listToNameObject (elementsList){
  const nextObject = {}

  elementsList.forEach(function(element){
    const nextArray = []
    nextArray = Object.values(element)
    nextObject[nextArray[0]] = nextArray[1]
  })

  return nextObject
}

function listToSpeciesObject (elementsList) {
  const nextObject = {}

  elementsList.forEach(function(element){
    const nextArray = []
    nextArray = Object.values(element)
    nextObject[nextArray[1]] = nextArray[0]
  })

  return nextObject
}

function nameObjectToList (nameObject) {
  const finalList = []
  const keyList = Object.keys(nameObject)

  keyList.map(function (name){
    const nextObject = {}
    nextObject.name = name
    nextObject.species = nameObject[name]
    finalList.push(nextObject)
  })

  return finalList
}

function speciesObjectToList (speciesObject) {
  const finalList = []
  const keyList = Object.keys(speciesObject)

  keyList.map(function (species){
    const nextObject = {}
    nextObject.name = speciesObject[species]
    nextObject.species = species
    finalList.push(nextObject)
  })

  return finalList
}

function nameObjectToSpecies (nameObject) {
  const finalList = listToSpeciesObject(nameObjectToList(nameObject))
  return finalList
}
