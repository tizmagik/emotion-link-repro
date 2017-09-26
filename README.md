# emotion-link-repro

This is a reproduction of some unexpected behavior where `extractCritical()` does not seem to work when `npm link`ing a shared component repo.

> NOTE: That since the shared components (`components/`) is already "hard-linked" (via `file://` reference in app's package.json) there is no need to npm link, but in practice this behavior was observed while `npm link`ing in a real project.

### Repro steps

```bash
cd ./components
npm i
cd ../app
npm i
npm start
```

Then navigate to http://localhost:3000 and note that `extractCritical()` does not appear to extract the server-generated CSS during SSR:

```
 DONE  Compiled successfully

Your application is running at http://localhost:3000

✅  Server-side HMR Enabled!

css
ids []
```


