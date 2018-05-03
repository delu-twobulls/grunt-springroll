module.exports = {
	libraries: {
		options: {
			sourceMap: true
		},
		dest: "<%= jsFolder %>/libraries.js",
		src: ["<%= build.js.librariesDebug %>"],
		nonull: true
	},
	librariesMin: {
		dest: "<%= jsFolder %>/libraries.js",
		src: ["<%= build.js.libraries %>"],
		nonull: true
	}
};