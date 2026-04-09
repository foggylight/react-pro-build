import { build } from 'esbuild';

await build({
  entryPoints: ['app/index.ts'],
  outdir: 'dist/app',
  format: 'esm',
  bundle: true,
  splitting: true,
  minify: true,
  sourcemap: true,
  treeShaking: true,
  entryNames: 'app',
  chunkNames: 'chunks/[name]-[hash]'
});
