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

<br/>

```
$ ng generate action store/courses/actions/courses-actions --dry-run
```

<br/>

```
? What should be the prefix of the action? get
? Should we generate success and failure actions? Yes
CREATE src/app/store/courses/actions/courses-actions.actions.ts (342 bytes)
```

<br/>

```
$ ng generate reducer store/courses/reducers/courses-reducer --dry-run
```

<br/>

```
$ ng generate selector store/courses/selectors/courses-selectors --dry-run
```

<br/>

```
$ ng generate effect store/courses/effects/courses-effects --root --module modules/app/app.module.ts --dry-run
```
