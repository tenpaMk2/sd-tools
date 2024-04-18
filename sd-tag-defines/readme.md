# esbuild-typescript-vscode-template

🔰 The esbuild & TypeScript template for debugging by VSCode 🔰

## 📛 How to build

Install requirements including `esbuild` .

```sh
npm install
```

Build the sample TypeScript source.

```sh
npm run build
```

It will generate `dist/index.cjs` .

Run output.
It execute `node dist/index.cjs` .

```sh
npm run exe
```

## 🔴 How to debug by VSCode

### Recommended: auto-build

Start watching.

```sh
npm run watch
```

It will automatically generate the output for every file change.

Set breakpoints anywhere you like.

Press `F5` ( `Debug: continue` ).
It launch `"Launch Program"` in `.vscode/launch.json` .

If it will stop at the breakpoints, the setup is completed.

![sample break points](./images/sample-break-points.png)

### Not recommended: manual-build

Enable the comment-outed lines in `.vscode/launch.json` .

```json
    // Enable if you don't use `watch` mode.
    // "preLaunchTask": "npm: build-debug",
```

It will execute the build task for each debug ( `F5` ).

This method does not use `watch` mode of esbuild.
This would be useful in some cases. For example, cases where you want to control the build timing.

## 💠 Appendix: Application to Node single executable applications

[Node single executable applications](https://nodejs.org/api/single-executable-applications.html)
can use only single JavaScript file.
It cannot use multiple JavaScript files.
And of course, it cannot use the npm packages...

Bundlers can solve this problem by bundle the multiple JavaScript files and npm packages into a single file.
`esbuild` also bundle multiple TypeScript files and npm packages into single JavaScript file❗

This repository helps development of single executable applications by making debug easy❗
