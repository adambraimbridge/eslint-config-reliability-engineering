'use strict';

const readPkgUp = require('read-pkg-up');

let packageJson;

const getRootPackageJson = () => {
	if (packageJson) {
		return packageJson.package;
	}
	packageJson = readPkgUp.sync();
	return packageJson.package;
};

module.exports = getRootPackageJson;
