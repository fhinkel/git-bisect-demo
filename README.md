# git bisect Demo

Demo for tying out `git bisect`. 

Clone the repository and install the dependencies. `npm test`
passes, but `npx mocha test1.js` fails. We forgot to
add these tests to the `test` script. So our continuous
integration tests never found the problem.
At some point in the past, the tests were all passing. When did the bug get introduced?

