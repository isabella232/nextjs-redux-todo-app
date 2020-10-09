<p align="center">
  <img src="https://i.imgur.com/sXfwy7l.png">
</p>

## Features

- Minimal but well structured
- No CSS, only TypeScript
- We can learn these stacks:
  - [next](https://npm.im/next)
  - [react](https://npm.im/react)
  - [redux](https://npm.im/redux) and [react-redux](https://npm.im/react-redux)
  - [redux-thunk](https://npm.im/redux-thunk)
  - [reselect](https://npm.im/reselect)
  - [recompose](https://npm.im/recompose)

## Usage

First define `OPTIMIZELY_ACCOUNT_ID` in your environment (can use something like [direnv](https://direnv.net/)).

Example .envrc
```bash
export OPTIMIZELY_ACCOUNT_ID=81391212
```

```bash
# installation
$ git clone https://github.com/saltyshiomix/nextjs-todo-app.git
$ cd nextjs-todo-app
$ yarn (or `npm install`)

# development mode
$ yarn dev (or `npm run dev`)

# production mode
$ yarn build (or `npm run build`)
$ yarn start (or `npm start`)
```

Open `http://localhost:3000` to load "nextjs_main" snippet from that account; `http://localhost:3000?snippetKey={key}` to load the alternative snippet `{key}` instead.

## Test

After starting the app, run
```bash
node test.js > test_results.csv
```
It'll write test results to stdout.
