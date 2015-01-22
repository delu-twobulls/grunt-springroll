module.exports = function(grunt)
{
	grunt.registerTask(
		'default',
		'Default task to build all the project code in release mode', 
		['build']
	);

	grunt.registerTask(
		'debug',
		'Default task to build all the project code in debug mode', 
		['build-debug']
	);

	// backward compatibility
	// deprecated
	grunt.registerTask(
		'build-dev',
		'Synonym for the build-debug task',
		['build-debug']
	);

	grunt.registerTask(
		'build-debug',
		'Build the games and the libraries in debug mode', [
			'clean:main',
			'jshint:main',
			'concat:main',
			'replace:main',
			'clean:css',
			'less:development',
			'libs-debug',
			'assets-debug',
		]
	);

	grunt.registerTask(
		'build',
		'Build the games and the libraries in release mode', [
			'clean:main',
			'jshint:main',
			'uglify:main',
			'clean:css',
			'less:release',
			'libs',
			'assets'
		]
	);

	grunt.registerTask(
		'dev',
		'Development mode to build the project main, css and assets', 
		['watch']
	);

	grunt.registerTask(
		'dev-main',
		'Development mode to build the project - faster, only watches main source (no assets or css)', 
		['watch:main']
	);

	grunt.registerTask(
		'clean-all',
		'Remove all build files and bower components', 
		['clean']
	);

	grunt.registerTask(
		'clean-libs',
		'Remove all the bower components and library build files', [
			'clean:libraries',
			'clean:components'
		]
	);

	if (grunt.config.get('hasCopy'))
	{
		grunt.registerTask(
			'libs',
			'Import external client-side dependencies using Bower', [
				'clean:libraries',
				'bower:install',
				'copy',
				'uglify:libraries',
				'less:libraries'
			]
		);

		grunt.registerTask(
			'libs-debug',
			'Import using Bower and build debug versions of libraries', [
				'clean:libraries',
				'bower:install',
				'copy',
				'concat:libraries',
				'less:libraries-debug'
			]
		);
	}
	else
	{
		grunt.registerTask(
		'libs',
			'Import external client-side dependencies using Bower', [
				'clean:libraries',
				'bower:install',
				'uglify:libraries',
				'less:libraries'
			]
		);

		grunt.registerTask(
			'libs-debug',
			'Import using Bower and build debug versions of libraries', [
				'clean:libraries',
				'bower:install',
				'concat:libraries',
				'less:libraries-debug'
			]
		);
	}

	grunt.registerTask(
		'qa',
		'Do QA on the games generate and run', [
			'debug',
			'run'
		]
	);

	grunt.registerTask(
		'run',
		'Preview the game by running a node server and opening it in the web browser', 
		['connect:server']
	);
};