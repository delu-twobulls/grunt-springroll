module.exports = {
	options: {
		sourceMap: true
	},
	libraries: {
		dest: "<%= jsFolder %>/libraries.js",
		src: ["<%= build.js.librariesDebug %>"],
		nonull: true
	},
	librariesMin: {
		dest: "<%= jsFolder %>/libraries.js",
		src: ["<%= build.js.libraries %>"],
		nonull: true
	},
	main: {
		dest: "<%= jsFolder %>/main.js",
		src: ["<%= build.js.mainDebug %>"],
		nonull: true
	},
	mainRelease: {
		dest: "<%= jsFolder %>/main.js",
		src: ["<%= build.js.main %>"],
		nonull: true
	}
};