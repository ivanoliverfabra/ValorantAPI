import dts from 'bun-plugin-dts'

await Bun.build({
  entrypoints: ['./src/index.ts'],
  outdir: './dist',
  root: './src',
  minify: true,
  plugins: [dts()]
})
