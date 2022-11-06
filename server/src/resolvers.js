const path = require('path');
const { mergeResolvers } = require('@graphql-tools/merge');
const { loadFilesSync } = require('@graphql-tools/load-files');

const resolverFiles = loadFilesSync(path.join(__dirname, './**/*.resolver.js'),)
const resolvers = mergeResolvers(resolverFiles)
module.exports = resolvers