import computations from "./computations/main.js";
import tracking from "./tracking/index.js" // .js extension needs to be present for "type: module" in package.json

export {
  computations,
  tracking
}

/**
 * export {
 *   computations,
 *   tracking
 * }
 * If we are using only "export" keyword then we can desctructure while importing.
 * import {tracking, computations} from "utils";
 */

/**
 * export default {
 *  computations,
 *  tracking
 * }
 * 
 * If we are using "export default" then the whole exported object will have to be imported
 */


/**
import {tracking, computations} from "utils";
console.log("Calling computations");
computations();

console.log("Calling tracking");
tracking.trackData();
*/

/**
import utils from "utils";
console.log("Calling computations");
utils.computations();
console.log("Calling tracking");
utils.tracking.trackData();
 */
