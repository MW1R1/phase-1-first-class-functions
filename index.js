function receivesAFunction(exercise) {
  return exercise() ; 
}
function returnsANamedFunction() {
  function exercise() {
    
  }  return exercise;
}
function returnsAnAnonymousFunction( ){
 return function () {
 } 

}