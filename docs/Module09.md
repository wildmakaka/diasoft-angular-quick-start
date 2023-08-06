# [Diasoft] Быстрый старт Angular

<br/>

### Модуль 9. NGRX

<br/>

**Примеры:**

https://github.com/nvkuznetsova/pokemons-fast-start-demo/tree/demo10-ngrx

https://github.com/nvkuznetsova/pokemons-fast-start-demo/tree/demo-12-ngrx-entity

<br/>

```
$ cd app/frontend/
```

<br/>

```
$ npm install @ngrx/store @ngrx/store-devtools @ngrx/schematics @ngrx/effects @ngrx/router-store
```

<br/>

**package.json**

```json
"cli": {
    "schematicCollections": [
      "@angular-eslint/schematics",
      "@schematics/angular",
      "@ngrx/schematics"
    ]
  }
```

<br/>

```
$ ng generate store state --root --state-path store --module modules/app/app.module.ts --dry-run
```
