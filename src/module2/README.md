### Exploration log
1. `src/module1` has a peer dependency on `react` version 17.0.0
```
"peerDependencies": {
  "react": ">= 17.0.0"
}
```
2. Ran `npm install` from inside `src/module1` which has installed react version 17.0.2 in root node_modules folder. `node_modules` folder of root is not deleted. 
3. Added `package.json` file to `src/module2` folder with react version 16.8.0 as peer dependency.
```
"peerDependencies": {
  "react": ">= 16.8.0"
},
```
4. Ran `npm install` from inside `src/module2` folder.
Resulted no change in root node_modules. React version installed is still 17.0.2
5. Changing peer dependency of `src/module2` to install exact version. 
```
"peerDependencies": {
  "react": "16.8.0"
},
```
6. Throws error `Conflicting peer dependency: react@16.8.0`
[Upload Image]()

