function listToNameObject (elementsList){
  var nextObject = {}
  elementsList.forEach(function(element){
    var nextArray = []
    nextArray = Object.values(element)
    nextObject[nextArray[0]] = nextArray[1]
  })
  return nextObject
}

function listToSpeciesObject (elementsList) {
  var nextObject = {}
  elementsList.forEach(function(element){
    var nextArray = []
    nextArray = Object.values(element)
    nextObject[nextArray[1]] = nextArray[0]
  })
  return nextObject
}

function nameObjectToList (nameObject) {
  var finalList = []
  var keyList = Object.keys(nameObject)
  keyList.map(function (name){
    var nextObject = {}
    nextObject.name = name
    nextObject.species = nameObject[name]
    finalList.push(nextObject)
  })
  return finalList
}

function speciesObjectToList (speciesObject) {
  var finalList = []
  var keyList = Object.keys(speciesObject)
  keyList.map(function (species){
    var nextObject = {}
    nextObject.name = speciesObject[species]
    nextObject.species = species
    finalList.push(nextObject)
  })
  return finalList
}

function nameObjectToSpecies (nameObject) {
  var finalList = listToSpeciesObject(nameObjectToList(nameObject))
  return finalList
}
