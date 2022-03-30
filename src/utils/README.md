### What
This is an internal module linked to other modules via workspaces.



### Tutorial
[Youtube Link](https://www.youtube.com/watch?v=e9ABjLAi27Q)
[Module Article](https://stackoverflow.com/questions/65384754/error-err-module-not-found-cannot-find-module)

### Example
```
#index.js 

export {
  computations,
  tracking
}
If we are using only "export" keyword then we can desctructure while importing.

import {tracking, computations} from "utils";
console.log("Calling computations");
computations();

console.log("Calling tracking");
tracking.trackData();
```

```
#index.js
export default {
 computations,
 tracking
}

If we are using "export default" then the whole exported object will have to be imported


import utils from "utils";
console.log("Calling computations");
utils.computations();
console.log("Calling tracking");
utils.tracking.trackData();
```
