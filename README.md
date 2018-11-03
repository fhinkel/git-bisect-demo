# `git bisect` Demo

This repository demonstrates how to use `git bisect`.
When you check out master, the tests in `test1.js` fail.
When did this bug get introduced?

## Installation

Clone the repository and install the dependencies
```shell git clone https://github.com/fhinkel/git-bisect-demo.git
npm install
```

`npm test`
passes, but `npx mocha test1.js` fails. We forgot to
add these tests to the `test` script. Continuous
integration would have never found the problem.
At some point in the past, the tests were all passing. When did the bug get introduced?

Let's use `git bisect` to find out.

## How to use `git bisect`

Do the following

```bash
git bisect start
npx mocha test*.js #  Double check that head is broken.
git bisect bad
git log --online # Let's find the hash for a good commit.
git co 7425633 #  This is the first good commit.
npx mocha test*.js # Double check that everything was green.
git bisect good
```

Now follow the interactive prompt. At every step, run the tests with `npx mocha test*.js` and mark the commit as either `good` or `bad`. Eventually, you should be down to one commit.

If you can't run the tests in a meaningful way for a specific revision, you can `skip` that revision.

When you've found the offending revision, inspect the changes. Can you see what went wrong? Note the hash of the broken commit. Then call `git bisect reset` to exit bisection mode.

Fix the problem, either manually or by reverting the commit that broke it. Also fix the `test` script to include `test1.js` so we won't be fooled in the future.

You're all done. Great job!

# Automating `git bisect`
Instead of manually running `git bisect`, you can automate the process. Simply
pass a command to `git bisect run` and let the magic happen.

```shell
git bisect run npx mocha test*.js
```
