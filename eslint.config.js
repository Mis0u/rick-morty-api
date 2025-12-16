import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';

export default [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    ...pluginVue.configs['flat/recommended'],
    {
        files: ['**/*.{js,mjs,cjs,ts,vue}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            parserOptions: {
                parser: tseslint.parser,
            },
        },
        rules: {
            // Point-virgule obligatoire
            'semi': ['error', 'always'],

            // Espaces dans les objets
            'object-curly-spacing': ['error', 'always'],

            // Guillemets simples
            'quotes': ['error', 'single'],

            // Virgule finale
            'comma-dangle': ['error', 'always-multiline'],

            // Pas de console en production
            'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

            // Multi-mots pour composants
            'vue/multi-word-component-names': 'error',

            // Ordre des attributs Vue
            'vue/attributes-order': 'error',

            // Indentation
            'indent': ['error', 2],

            // Nombres magiques
            'no-magic-numbers': ['warn', {
                ignore: [0, 1, -1],
                ignoreArrayIndexes: true,
                ignoreDefaultValues: true,
                enforceConst: true,
            }],
        },
    },
    {
        ignores: ['dist', 'node_modules', '*.config.js'],
    },
];