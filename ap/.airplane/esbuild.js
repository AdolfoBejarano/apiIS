const esbuild = require("esbuild");

const removeCSS = {
  name: "remove-css",
  setup(build) {
    // Rewrite all css imports to a hardcoded path that doesn't actually exist.
    // We will tell esbuild how to load this path in the next step.
    build.onResolve({ filter: /\.css$/ }, async () => ({
      external: false,
      path: "/empty.css",
    }));
    // Load all css files as an empty file.
    build.onLoad({ filter: /\.css$/ }, async () => ({
      contents: "",
    }));
  },
};

const entryPoints = JSON.parse(process.argv[2]);
const target = process.argv[3];
// This handles two cases:
// 1. The external argument is an empty string, in which case we parse a stringified empty array instead since an empty
//    string is not valid JSON by itself.
// 2. The external argument is "null", in which case JSON.parse parses as null. This happens because Go's json.Marshal
//    method marshals nil slices as "null".
const external = JSON.parse(process.argv[4] || "[]") || [];
const outfile = process.argv[5] || undefined;
const outdir = process.argv[6] || undefined;
const outbase = process.argv[7] || undefined;
const isView = process.argv[8] || false;

const plugins = [removeCSS];
if (!isView) {
  // Add the esbuild-plugin-tsc plugin if a tsconfig.json file exists.
  // This supports more advanced TypeScript features that esbuild doesn't
  // support out of the box.
  const typescript = require("typescript");
  const tsconfigFile = typescript.findConfigFile(
    process.cwd(),
    typescript.sys.fileExists,
    "tsconfig.json"
  );

  if (tsconfigFile) {
    const esbuildPluginTsc = require("esbuild-plugin-tsc");
    plugins.push(esbuildPluginTsc({ tsconfigPath: tsconfigFile }));
  }
}

esbuild
  .build({
    entryPoints,
    outfile,
    bundle: true,
    target,
    platform: "node",
    external: external,
    outdir,
    outbase,
    plugins,
    sourcemap: "inline",
    keepNames: true,
  })
  .catch((e) => {
    process.exit(1);
  });
