# test-video-feed

## Description
test application for displaying video feed using angular 1.* components architecture

## Requirements
  - NPM >= 3
  - Node >= 5

## Install
  Before doing anything, run `npm i && npm run setup`.

## Build
  - `npm run build`: build all distributable files.
  - `npm run build:umd`: build raw library.
  - `npm run build:dev`: build raw library with rebuild on changes.
  - `npm run build:min`: build minimized library.

## Test
  - `npm run test`: run all tests (test:unit, test:functional, test:integration, test:e2e).
  - `npm run test:coverage`: run all tests with coverage preprocessor.

  Coverage reports will be under `test/results/{unit,functional,integration,e2e}/coverage/`.

## Other tasks
  - `npm start`: alias for `npm run build:dev`.
  - `npm run clean`: clean distributable and generated files.
  - `npm run lint`: check source code style.