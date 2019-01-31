function bumpCounter(){
  var counter = 0
  function addBump(){
    counter += 1
  }
  function getBumps(){
    return counter
  }
  return {addBump, getBumps}
}

function createAnimal(animalType){
  function addDevice(deadlyDevice){
    var creation = {type: animalType, device: deadlyDevice}
  }
  return {addDevice(deadlyDevice)}
}

var sharkCreator = createAnimal('Shark')
