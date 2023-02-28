function receivesAFunction(callback){
    console.log(callback());
}
receivesAFunction(function () { return "Memories"})

function monday(){
    console.log("Study Day")
    console.log("workout")
}
function returnsANamedFunction(){
    return monday
}
function returnsAnAnonymousFunction(happy) {
    let daily;
  
    if (happy === "watch shows") {
      daily = "binge watch";
    } else if (happy === "eat") {
      daily = " eat ramen";
    } else {
      happy = "sleep";
    }
  
    return function () {
      console.log(`I will always be down to ${daily}!`);
    };
}