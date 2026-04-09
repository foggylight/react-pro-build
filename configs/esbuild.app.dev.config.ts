import { context } from 'esbuild';

const ctx = await context({
  entryPoints: ['app/index.ts'],
  outdir: 'dist/app',
  format: 'esm',
  bundle: true,
  splitting: true,
  sourcemap: true,
  entryNames: 'app',
  chunkNames: 'chunks/[name]-[hash]',
  logLevel: 'info'
});

await ctx.watch();

const { hosts, port } = await ctx.serve({
  servedir: 'dist/app',
});

console.log(`serve at: http://${hosts[0]}:${port}`);
