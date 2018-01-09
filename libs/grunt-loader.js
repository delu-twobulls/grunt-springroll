var fs = require('fs');
var path = require('path');

module.exports = {
	/**
	 * Given a folder, attempts to load any grunt modules included in the child directory node_modules. Due to flattening
	 * in NPM 3+, grunt-springroll's new modules could actually be installed in the game's node_modules folder rather than
	 * the node_modules folder underneath grunt-springroll. load-grunt-tasks attempts to connect the package.json with the
	 * sibling folder node_modules, which is why tasks have failed to load NPM 3 and beyond. This however avoids that and
	 * simply matches filenames based on convention
	 *
	 * @param {grunt} grunt The grunt instance with which to load tasks
	 * @param {string} folder The folder to load tasks from (will look for a node_modules as a child directory)
	 * @return void
	 */
	load: function(grunt, folder) {
    var lastDirectory = process.cwd();

    process.chdir(folder);

		fs.readdirSync(path.join(folder, 'node_modules'))
			.filter(function(name) {
				return name.indexOf('grunt-') === 0 && name !== 'grunt-springroll';
			})
			.forEach(function(folder) {
				grunt.loadNpmTasks(folder);
			});
    
    process.chdir(lastDirectory);
	},
};
