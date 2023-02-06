const os = require("os");

export function viteBuildTime() {
  let startTime = null;
  return {
    name: "vite-build-time",
    buildStart: () => {
      startTime = Date.now();
    },
    buildEnd: () => {
      console.log(`${os.EOL}build time: ${Date.now() - startTime}ms`);
    },
  };
}
