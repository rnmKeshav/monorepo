### What

### Exploration Log
1. Added react as peer dependency
```
"peerDependencies": {
  "react": ">= 17.0.0"
}
```
2. Ran `npm install` from inside `src/module1` folder. Since the system is currently on node 16.14.2 with npm version of 8.5.0, it is automatically installing peer dependency in root level node_modules folder. 

`npm install` from inside `module1` folder installed `react` version 17.0.2 in root folder's node_module.

`npm install` also linked the `module1` from inside root node_modules folder since root `package.json` has worspace enabled.
```
"workspaces":[
  "./src/*"
],
```
[Upload Image]()

