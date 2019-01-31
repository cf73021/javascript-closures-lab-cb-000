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
    var creation = {animalType: animalType, deadlyDevice: deadlyDevice}
    return creation
  }

}

var sharkCreator = createAnimal('Shark')
