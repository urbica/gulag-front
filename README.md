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

## Mapbox Styles & Source Layers
mapStyle (v1.0.0): `mapbox://styles/gulagmap/cjhc55vfl038e2rqr7f472ay1`

ussr-boundary: `ussr-boundary-ddtyj9`

chukotka_patch: `chukotka_patch-4b7lx1`

cities: `cities-9p6fen`

allCities `allCities-difd7x`

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
