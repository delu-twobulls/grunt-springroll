var babel = require("rollup-plugin-babel");
module.exports = {
  options: {
    // TODO: is there way to put this into an external rollup config?
    external: [
      "planck-js",
      "react",
      "mobx",
      "mobx-react",
      "pixi.js",
      "@inlet/react-pixi"
    ],
    globals: {
      "planck-js": "planck",
      "react": "React",
      "mobx": "mobx",
      "mobx-react": "mobxReact",
      "pixi.js": "PIXI",
      "@inlet/react-pixi": "ReactPixi"
    },
    format: 'iife',
    sourceMap: true,
    plugins: [
      babel()
    ]
  },
  files: {
    dest: "<%= jsFolder %>/main.js",
    src: ["<%= build.js.main %>"]
  }
};
