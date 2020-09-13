
 // This cant be moved

function counterMaker() {
    let count = 0;
  return function boo(){return count=count+1};
}

const counter1 = counterMaker();
// console.log("counterMaker -> count", count)  // 0
console.log("counter1", counter1())  // 1
console.log("counterMaker", counterMaker())  // Is holding a Fn


// counter2 code
let count = 0;
console.log("counter2", counter2())  // 0
console.log("count", count)  // 1
function counter2() {

  console.log("count", count)
  return count++;
}

