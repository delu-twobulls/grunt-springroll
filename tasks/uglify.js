module.exports = {
	main: {
		files: {
			"<%= jsFolder %>/main.js": "<%= jsFolder %>/main.js"
		},
		options: {
			compress: {
				global_defs: {
					"DEBUG": false,
					"RELEASE": true,
					"VERSION": "<%= build.version %>"
				},
				dead_code: true,
				drop_console: true,
				pure_funcs: [
					"include",
					"Debug.log",
					"Debug.info",
					"Debug.warn",
					"Debug.debug",
					"Debug.error",
					"Debug.group",
					"Debug.dir",
					"Debug.trace",
					"Debug.groupEnd",
					"Debug.groupCollapsed",
					"Debug.navy",
					"Debug.blue",
					"Debug.aqua",
					"Debug.teal",
					"Debug.olive",
					"Debug.green",
					"Debug.lime",
					"Debug.yellow",
					"Debug.orange",
					"Debug.red",
					"Debug.pink",
					"Debug.purple",
					"Debug.maroon",
					"Debug.silver",
					"Debug.gray"
				]
			}
		}
	}
};