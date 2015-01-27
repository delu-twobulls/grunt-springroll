module.exports = {
	all: {
		files: [{
			expand: true,
			cwd: '<%= distFolder %>/',
			src: ['**/*.{png,jpg,gif}'],
			dest: '<%= distFolder %>/'
		}]
	}
};