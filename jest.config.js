// eslint-disable-next-line no-undef
module.exports = {
    build: {
        standalone: true,
    },
    globals: {
        // This is necessary because next.js forces { "jsx": "preserve" }, but ts-jest requires { "jsx": "react-jsx" }
        'ts-jest': {
            tsconfig: {
                jsx: 'react-jsx',
            },
        },
    },
    collectCoverageFrom: [
        '<rootDir>/src/**/*.{js,jsx,ts,tsx}',
        '!<rootDir>/src/graphql/models.ts',
        '!<rootDir>/src/stories/**',
        '!<rootDir>/src/styles/**',
        '!**/*.d.ts',
        '!**/node_modules/**',
    ],
    coverageReporters: ['lcov', 'text-summary'],
    coverageDirectory: '<rootDir>/coverage',
    moduleNameMapper: {
        // Handle CSS imports (with CSS modules)
        // https://jestjs.io/docs/webpack#mocking-css-modules
        '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

        // Handle CSS imports (without CSS modules)
        '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',

        // Handle image imports
        // https://jestjs.io/docs/webpack#handling-static-assets
        '^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$/i': `<rootDir>/__mocks__/fileMock.js`,

        // Handle module aliases
        '^@/components/(.*)$': '<rootDir>/components/$1',
        uuid: '<rootDir>/node_modules/uuid/dist/umd/uuid.min.js',
    },
    testMatch: [
        '**/__tests__/**/?(*.)+(spec|test).[jt]s?(x)',
        '**/?(*.)+(spec|test).[jt]s?(x)',
    ],
    testPathIgnorePatterns: [
        '<rootDir>/node_modules/',
        '<rootDir>/.next/',
        '<rootDir>/.github/',
        '<rootDir>/.storybook/',
        '<rootDir>/.vscode/',
        '<rootDir>/public/',
    ],
    testEnvironment: 'jsdom',
    // Common setup you would usually add before each test.
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    transform: {
        // Use babel-jest to transpile tests with the next/babel preset
        // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
        '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
    },
    transformIgnorePatterns: [
        '/node_modules/',
        '^.+\\.module\\.(css|sass|scss)$',
    ],
};
