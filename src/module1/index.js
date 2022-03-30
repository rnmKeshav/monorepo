// import {tracking, computations} from "utils";
// console.log("I am module 1");
 
// console.log("Calling computations");
// computations();

// console.log("Calling tracking");
// tracking.trackData();


import performHeavyComputation from "utils/computations/main"
import {trackData} from "utils/tracking/index"
import testNestedFolder from "utils/computations/level2/index";

console.log("I am module 1");
 
console.log("Calling computations");
performHeavyComputation();
testNestedFolder();