# Gulagmap front

## Tools
* npm
* git-cz
* [standard-version](https://github.com/conventional-changelog/standard-version)


* react
* redux
* redux-saga
* recompose
* immutable
* @urbica/react-map-gl
* d3
* styled-components

## Commit
```
npm run cz
```

## Release

Run with `--dry-run` to check everything is ok.
```sh
npm run release -- --dry-run
```
```sh
npm run release
```
```sh
git push --follow-tags origin <BRANCH_NAME>
```
