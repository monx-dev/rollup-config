// import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import { DEFAULT_EXTENSIONS } from '@babel/core';
import filesize from 'rollup-plugin-filesize';
import json from '@rollup/plugin-json';

export default (config) => {
  const EXTERNAL = Object.keys({ ...config.peerDependencies, ...config.dependencies });

  const OUTPUT_DATA = [];

  if (config.browser)
    OUTPUT_DATA.push({
      file: config.browser,
      format: 'umd',
    });

  if (config.main)
    OUTPUT_DATA.push({
      file: config.main,
      format: 'cjs',
    });

  if (config.module)
    OUTPUT_DATA.push({
      file: config.module,
      format: 'es',
    });

  return OUTPUT_DATA.map(({ file, format }) => ({
    input: config.file,
    output: [
      {
        file,
        format,
        exports: 'named',
      },
    ],
    plugins: [
      // peerDepsExternal(),
      json(),
      resolve(),
      commonjs(),
      typescript({
        useTsconfigDeclarationDir: true,
        typescript: require('ttypescript'),
        tsconfigDefaults: {
          compilerOptions: {
            plugins: [
              { transform: 'typescript-transform-paths' },
              { transform: 'typescript-transform-paths', afterDeclarations: true },
            ],
          },
        },
      }),
      babel({
        presets: ['@babel/preset-typescript', '@babel/preset-react'],
        exclude: 'node_modules/**',
        extensions: [...DEFAULT_EXTENSIONS, '.ts', '.tsx'],
      }),
      terser(),
      filesize(),
    ],
    external: EXTERNAL,
  }));
};
