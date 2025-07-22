# Term deposit calculator

UI tool built in React/Typescript for calculating interest for a deposit over a time period.
Supports calculating compund interest Monthly, Quarterly and Annually as well as the interest at maturity.

### Setting up development environment

Ensure node is installed and run:

```bash
npm i
```

To run the development server run:

```bash
npm run dev
```

This will spawn a development server running at `localhost:5173` which you can navigate to view the app.

### Running tests

```bash
npm run test
```

### Building

```bash
npm run build
```

This will output into the `./dist` folder, where you can then serve on your favourite static files server!

### Possible Improvements

- Calculate the final balance on pressing enter within a field, not just on blur
- Add CI for running tests on push to Github (eg via Github actions, Circle CI)
