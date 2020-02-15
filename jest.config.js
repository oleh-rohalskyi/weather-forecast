module.exports = {
    "modulePaths": ["<rootDir>/src/"],
    "moduleNameMapper": {
        "^.+\\.(css|less|scss|sass)$": "<rootDir>/src/CSSStub.js"
    },
    "setupFilesAfterEnv": ["./src/setupTests.js"]
}