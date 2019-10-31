# `Git bisect` Demo

This repository demonstrates how to use `git bisect`.
When you check out `master`, the tests in `test1.js` fail.
When did this bug get introduced?

[![Git bisect in action](https://i.imgur.com/LgvSeV6.png)](https://youtu.be/dfDBNcYRKcE "manual git bisect")

## Installation

Clone the repository and install the dependencies.

```bash 
git clone https://github.com/fhinkel/git-bisect-demo.git
npm install
```

`npm test` passes, but `npx mocha test1.js` fails. We forgot to
add these tests to the `test` script. At some point in the
past, the tests were all passing. When did the bug get introduced?

Let's use `git bisect` to find out.

## How to use `git bisect`

```bash
git bisect start
npx mocha test1.js #  Double check that head is broken.
git bisect bad
git log --oneline # Let's find the hash for a good commit.
git checkout b58217f #  This is the first good commit.
npx mocha test1.js # Double check that everything was green.
git bisect good
```

Follow the interactive prompt. At every step, run the tests with `npx mocha test*.js` and mark the commit as either `good` or `bad`. 

If you can't run the tests in a meaningful way for a specific revision, you can `skip` that revision.

When you've found the wrong commit, inspect the changes. Can you
see what went wrong? Note the hash of the broken commit. Then
call `git bisect reset` to exit bisection mode.

Fix the problem, either manually or by reverting the commit that broke it.
Also fix the `test` script in `package.json`. It should include `test1.js`
so we chatch bugs in the future.

You're all done. Great job!

## Automating `git bisect`
Instead of manually running `git bisect`, you can automate the process. Simply
pass a command to `git bisect run` and let `git` do the rest.

```bash
git bisect run npx mocha test1.js
```

[![Automated git bisect in action](https://i.imgur.com/WtVUh12.png)](https://www.youtube.com/watch?v=pFavI1XgxYs "automate git bisect")

## Contributing
Pull requests and issues welcome.
