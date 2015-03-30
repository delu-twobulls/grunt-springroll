module.exports = {
	release: {
		base: "<%= build.config %>",
		src: "<%= build.config %>/**/*.json",
		dest: "<%= configFile %>"
	},
	debug: {
		base: "<%= build.config %>",
		src: "<%= build.config %>/**/*.json",
		dest: "<%= configFile %>",
		options: {
			space: "\t"
		}
	}
};