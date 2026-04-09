import { build } from 'esbuild';

const entryPoints = ['lib/index.ts', 'lib/math.ts', 'lib/string.ts'];
const external = ['lodash'];

await build({
  entryPoints,
  outdir: 'dist/lib/esm',
  format: 'esm',
  bundle: true,
  sourcemap: true,
  external
});

await build({
  entryPoints,
  outdir: 'dist/lib/cjs',
  format: 'cjs',
  bundle: true,
  sourcemap: true,
  external,
  outExtension: { '.js': '.cjs' }
});
