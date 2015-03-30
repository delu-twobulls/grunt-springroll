module.exports = {
	"default": {
		base: "<%= build.config %>",
		src: "<%= build.config %>/**/*.json",
		dest: "<%= configFile %>"
	}
};