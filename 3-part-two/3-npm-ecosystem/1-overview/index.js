// Check this: https://github.com/vdeturckheim/npm-demo

// Use '"private": true' to prevent npm from uploading it through a remote server.

// Use "npm install --save express" or "npm i -S express" to install new packages.

// package-lock.json contains package informations with hash, so as long as it is not tempered with,
// it can gurantee the integrity of the versions of the dependencies.

// Use "npm install --save-dev mocha" to install new packages with dev.
// For keywords like '^', check: https://www.semver.npmjs.com to know what dependencies are allowed and what are not.
// There are much more types of dependencies, such as peerDependencies, bundledDependencies, optionalDependencies, etc.

// "script" in package.json enables to create specific scripts to execute through using commands.

// Use "npm install --ignore-script sqlite" to prevent scripts inside the package.json of the module from being executed,
// but it might make the module unfunctionable and thus require manual install through investigating the requirements of target module.

// "bin" in package.json enables to do executable scripts for npm specifically.

// Use "npm i --production" to not install devDependencies, and thus install the least amount of dependencies.
