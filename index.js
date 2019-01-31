const app = "I don't do much."
function bumpCounter(){
  const counter = 0
  function addBump(counter){
    counter++
    return counter
  }
  function getBumps(counter){
    return counter
  }
  return addBump(), getBumps()
}
