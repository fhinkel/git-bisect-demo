module.exports = {
    "env": {
        "es6": true,
        "node": true,
        "mocha": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};