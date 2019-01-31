const app = "I don't do much."
function bumpCounter(){
  const counter = 0
  function addBump(){
    counter++
    return counter
  }
  function getBumps(){
    return counter
  }
  return {addBump, getBumps}
}
