module.exports = {
    'extends': [
        'standard',
        'standard-react',
    ],
    'env': {
        'browser': true,
    },
    'parser': 'babel-eslint',
    'rules': {
        '@emotion/jsx-import': 'error',
        'comma-dangle': ['error', 'always-multiline'],
        'object-curly-newline': ['error', {
            'ObjectExpression': 'always',
            'ObjectPattern': 'always',
            'ImportDeclaration': 'never',
            'ExportDeclaration': 'always',
        }],
        'object-property-newline': ['error', {
            'allowAllPropertiesOnSameLine': false,
            'allowMultiplePropertiesPerLine': false,
        }],
        'padded-blocks': 'off',
        'putout/multiple-properties-destructuring': [
            'error',
        ],
        'sort-keys': ['error', 'asc', {
            'caseSensitive': true,
            'natural': false,
        }],
        'react/jsx-curly-newline': [
            'error',
            {
                'multiline': 'consistent',
                'singleline': 'consistent',
            },
        ],
        'react/jsx-first-prop-new-line': [
            'error',
            'multiline',
        ],
        'react/jsx-max-props-per-line': [
            'error',
            { 'maximum': 1 },
        ],
        'react/jsx-fragments': 'off',
        'react/jsx-one-expression-per-line': ['error', {
            'allow': 'literal',
        }],
        'react/jsx-sort-default-props': ['error', {
            'ignoreCase': true,
        }],
        'react/jsx-sort-props': ['error', {
            'ignoreCase': true,
            'shorthandFirst': true,
        }],
        'react/jsx-wrap-multilines': ['error', {
            "declaration": "parens-new-line",
            "assignment": "parens-new-line",
            "return": "parens-new-line",
            "arrow": "parens-new-line",
            "condition": "parens-new-line",
            "logical": "parens-new-line",
            "prop": "parens-new-line"
        }],
    },
    'plugins': [
        'putout',
        '@emotion'
    ],
}