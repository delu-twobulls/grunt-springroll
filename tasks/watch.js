module.exports = {
	// global watch options
	options: {
		reload: true,
		atBegin: true
	},
	main: {
		files: [
			'Gruntfile.js',
			'<%= build.js.main %>',
			'<%= build.file %>'
		],
		tasks: [
			'jshint:main', 
			'concat:main', 
			'replace:main'
		]
	},
	assets: {
		files: [
			'Gruntfile.js',
			'<%= build.js.assets %>',
			'<%= build.file %>'
		],
		tasks: [
			'concat:assets'
		]
	},
	css: {
		files: [
			'<%= build.css.main %>',
			'<%= build.file %>'
		],
		tasks: [
			'less:development'
		]
	}
};