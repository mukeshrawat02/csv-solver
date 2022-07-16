
## Problem Statement

Use your initiative and solve it in the best way you think you can. The idea is to demonstrate your skills by building a small application (using React) which produces a target figure from a CSV file containing several numbers.

Create a CSV file with the following numbers: 3, 4, 8, 7, 12

The target number is 532 but should be allowed to change.
- You may only use (),+,-,*,/
- You can use each symbol many times
- You can only use each number once
- You do not need to use all the numbers 

The app must be able to handle the file upload and temporary storage of the CSV file.
It must parse the CSV to extract the numbers.

You need to build a processor to take the numbers and calculate the equation to the target number from them.
When we come to test this, we will also use different numbers to check the process.


## What you get

* React 17.0.2
* TypeScript 4.2
* Jest for testing with mocking examples using [@testing-library](https://testing-library.com/docs/)
* Material UI ([feature/material-ui](https://github.com/badsyntax/react-seed/tree/feature/material-ui))

## Getting started

### Installing with git

```bash
git clone https://github.com/mukeshrawat02/csv-solver.git my-project
```

## yarn scripts

* `yarn start` - Build and start the app in dev mode at http://localhost:3000
* `yarn test` - Run the tests

## Screenshot
![InTech Dashboard](/sample-file/InTech%20Test%20Screen.png)

![Test cases](/sample-file/test-cases.png)
