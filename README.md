# Node.js Practice

Exercises and small programs written while learning Node.js — core modules, the event
loop, async patterns, and a minimal Express + Swagger service.

No scaffolding: most files run directly with `node <file>` and use only built-ins, which is
the point of the exercise.

## Contents

| Path | What it covers |
|---|---|
| `basic_js/` | scope, operators, higher-order functions, error handling, node-specific functions |
| `task/` | one file per core module — see below |
| `simple_task/` | synchronous vs asynchronous execution |
| `swagger_document/` | Express app with Swagger UI |
| `html_modules/` | serving HTML from Node |

### `task/` — one file per built-in module

`fs_module.js` · `path_module.js` · `os_module.js` · `url_.js` ·
`parse_url_parse_method.js` · `query_string.js` · `process_object.js` ·
`event_emitter.js` · `winston_.js` (logging) · `duration_time.js` ·
`file_system_ofNode.js` · `calc.js` · `main_run_calc.js`

`main.js` wires `parse_url_parse_method.js` to an `EventEmitter`: the URL parser emits a
`stop` event, the main script listens for it.

### `swagger_document/` — the only multi-file app

| Route | Method | Handler |
|---|---|---|
| `/ping` | GET | 200 if the API is up |
| `/trace` | GET | 200, trace check |
| `/api/heroes` | GET | list heroes |
| `/api/hero` | POST / PUT | create / modify a hero |
| `/api/hero/:id` | DELETE | remove by id |

OpenAPI specs are written as JSDoc blocks next to each route, and `swagger.js` collects
them from `./routes/*.js` into the docs page.

## Running

```bash
node task/fs_module.js        # any single exercise

cd swagger_document           # the Express service
npm install express swagger-jsdoc swagger-ui-express
node index.js                 # → http://localhost:5000/docs
```

There is **no `package.json`** — the Express folder expects its dependencies installed
globally or beside it. Adding one would make this reproducible.

## Notes

- `swagger_document/` uses ESM `import`; the rest uses CommonJS `require`.
- `task/combined.log` and `task/example.txt` are outputs of the `winston` and `fs`
  exercises, committed as samples.
