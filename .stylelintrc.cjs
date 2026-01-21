/** @type {import('stylelint').Config} */
module.exports = {
    extends: [
        "stylelint-config-standard-scss",
        // Property order as defined here:
        // https://github.com/cahamilton/css-property-sort-order-smacss/blob/v2.2.0/index.js
        "stylelint-config-property-sort-order-smacss"
    ],

    plugins: [
        "stylelint-scss",
        "stylelint-order"
    ],

    ignoreFiles: [
        "components/11-base/fonts/templates/_icons.template",
        "components/11-base/fonts/_icons.scss"
    ],

    rules: {
        /*******************************************
         * SCSS CORRECTNESS
         ******************************************/
        "scss/at-function-pattern": "^[_a-z][a-z0-9\\-]*$",
        "scss/at-mixin-pattern": "^[a-z][a-z0-9\\-]+$",
        "scss/dollar-variable-pattern": "^[a-z][a-z0-9\\-]*$",
        "scss/percent-placeholder-pattern": "^[a-z][a-z0-9\\-]+$",

        /*******************************************
         * Comments
         ******************************************/
        "scss/comment-no-empty": null,
        "scss/double-slash-comment-empty-line-before": null,

        /*******************************************
         * DISALLOWS
         ******************************************/
        "color-named": "never",
        "block-no-empty": true,
        "selector-max-id": 0,
        "declaration-no-important": true,
        "color-no-invalid-hex": true,
        "no-duplicate-selectors": true,
        "declaration-block-no-duplicate-properties": [
            true,
            {
                ignore: ["consecutive-duplicates-with-different-values"]
            }
        ],
        "property-no-unknown": [
            true,
            {
                ignoreProperties: [
                    "aspect-ratio",
                    "container-type",
                    "interpolation-mode"
                ]
            }
        ],
        "property-no-vendor-prefix": true,
        "value-no-vendor-prefix": true,
        "media-feature-name-no-vendor-prefix": true,

        /*******************************************
         * ARCHITECTURE / NAMING
         ******************************************/
        "selector-class-pattern": [
            "^[a-z][a-z0-9\\-]*(?:__[a-z0-9\\-]+)?(?:--[a-z0-9\\-]+)?$",
            {
                message: "Expected BEM-style class naming"
            }
        ],
        "max-nesting-depth": 5,

        /*******************************************
         * SHOULD BE MIGRATED TO MODERN STYLE!
         ******************************************/
        // https://stylelint.io/user-guide/rules/alpha-value-notation
        "alpha-value-notation": "number",
        // https://stylelint.io/user-guide/rules/at-rule-empty-line-before
        "at-rule-empty-line-before": null,
        // https://stylelint.io/user-guide/rules/color-function-notation
        "color-function-notation": "legacy",
        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-if-closing-brace-newline-after/README.md
        "scss/at-extend-no-missing-placeholder": null,
        // https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/at-else-closing-brace-newline-after
        "scss/at-else-closing-brace-newline-after": null,
        // https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/at-else-closing-brace-space-after
        "scss/at-else-closing-brace-space-after": null,
        // https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/at-if-closing-brace-space-after
        "scss/at-if-closing-brace-newline-after": null,
        // https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/at-if-closing-brace-space-after
        "scss/at-if-closing-brace-space-after": null,
        // https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/at-if-no-null
        "scss/at-if-no-null": null,
        //https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/at-rule-conditional-no-parentheses
        "scss/at-rule-conditional-no-parentheses": null,
        // https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/dollar-variable-empty-line-before
        "scss/dollar-variable-empty-line-before": null,
    }
};
