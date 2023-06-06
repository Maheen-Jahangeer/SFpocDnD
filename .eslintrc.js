module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true
    },
    extends: [
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "prettier/@typescript-eslint"
    ],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        useJSXTextNode: true,
        ecmaVersion: 2018,
        sourceType: "module"
    },
    plugins: ["react", "@typescript-eslint", "react-hooks", "import"],
    rules: {
        "react/jsx-uses-react": 1,
        "react/jsx-uses-vars": 1,
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-explicit-any": 0,
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "@typescript-eslint/no-empty-interface": 0,
        "@typescript-eslint/ban-ts-ignore": 0,
        "@typescript-eslint/no-empty-function": 0,
        quotes: [2, "double", { avoidEscape: true }],
        "comma-dangle": ["error", "never"],
        "space-before-function-paren": [
            "error",
            {
                anonymous: "never",
                named: "never",
                asyncArrow: "always"
            }
        ],
        semi: [2, "always"],
        indent: 0,
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                args: "none"
            }
        ],
        "generator-star-spacing": ["error", { before: false, after: true }],
        "arrow-body-style": ["warn", "as-needed"],
        "import/order": [
            "error",
            {
                groups: [
                    "builtin",
                    "external",
                    "parent",
                    "sibling",
                    'index', 
                ]
            }
        ]
    }
};
