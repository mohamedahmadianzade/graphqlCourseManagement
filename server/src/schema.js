

const { mergeTypeDefs } = require('@graphql-tools/merge');
const { loadFilesSync } = require('@graphql-tools/load-files');
const path = require('path');
const { print } = require('graphql')
const typesArray = loadFilesSync(path.join(__dirname, './**/*.graphql'),)

module.exports = print(mergeTypeDefs(typesArray))