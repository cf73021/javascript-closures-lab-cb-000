const app = "I don't do much."
function bumpCounter(){
  const counter = 0
  return function addBump(counter){
    counter++
    return counter
  }
  return function getBumps(counter){
    return counter
  }
}
