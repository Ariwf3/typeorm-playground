# Awesome Project Build with TypeORM

Playground to experiment typeorm features

Steps to run this project:

1. Run `yarn` command
2. Setup database settings inside `ormconfig.json` file
3. Run `yarn start` command

# How migrations works

If typescript and tsnode not installed
`npm install -g typescript ts-node`

In production set the `synchronize` option congig file to `false`

```bash
# CREATE MIGRATION FILE
typeorm migration:create -n [migrationName]

# WRITE THE QUERIES IN THE FILE (up and down)

# RUN THE MIGRATION (execute up)
ts-node ./node_modules/.bin/typeorm migration:run
# Windows
ts-node ./node_modules/typeorm/cli.js migration:run

# REVERT THE MIGRATION (execute down)
ts-node ./node_modules/.bin/typeorm migration:revert
# Windows
ts-node ./node_modules/typeorm/cli.js migration:revert

# GENERATE A AUTOMATIC MIGRATION BASED ON THE ENTITIES
ts-node ./node_modules/.bin/typeorm migration:generate -n [migrationName]
# Windows
ts-node ./node_modules/typeorm/cli.js migration:generate -n [migrationName]
```

For simplicity you can create srcipts with yarn/npm in packaqe.json

```json
"scripts": {
      "createMig": "typeorm migration:create -n [migrationName]",
      "migrate": "ts-node ./node_modules/typeorm/cli.js migration:run",
      "revert": "ts-node ./node_modules/typeorm/cli.js migration:revert",
      "generate": "ts-node ./node_modules/typeorm/cli.js migration:generate -n"
   }
```

Then you can do `yarn migrate

# ISSUES

Verify you have ts-node and typescript installed `npm install -g typescript ts-node`
For windows users for migrations use the path `"ts-node ./node_modules/typeorm/cli.js migration:run"`

If typescript auto import doesnt run correctly with vscode install the extension "JavaScript and TypeScript Nightly" [JavaScript and TypeScript Nightly](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next)

- Make sure you have Use VS Code's version selected
