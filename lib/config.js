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

  const output = {
    dir: 'dist',
    format: config.format || 'cjs',
    exports: 'named',
  };

  if (config.format === 'umd') {
    output.name = config.input;
  }

  return {
    input: config.input,
    output: [output],
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
  };
};
