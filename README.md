- `tsc --init` produces `tsconfig.json`, in there set the directories

```
"outDir": "./build"
"rootDir": "./src"
```

- `tsc -w` watches for changes in `/src` and compiles the output in `/build`

* npm install `nodemon` and `concurrently`

- set the scripts

```
"compilewatch": "tsc -w",
"nodemonindex": "nodemon build/index.js",
"start": "concurrently npm:compilewatch npm:nodemonindex"
```

## project target

- Code reuse with Classes and Interfaces
- Type Guards
- Abstract Classes
