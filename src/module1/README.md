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
<img width="1536" alt="Screenshot 2022-03-29 at 8 59 05 PM" src="https://user-images.githubusercontent.com/11366455/160742421-3a659d5e-d16a-4426-9dc5-adbaf0f117b4.png">

