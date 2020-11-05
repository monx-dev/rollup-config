import rollbarConfig from '../lib/config';

export type Depedency = { [key: string]: string };

export interface ConfigOptions {
  file: string;
  output: string;
  peerDependencies?: Depedency;
  main?: string;
  browser?: string;
  module?: string;
  dependencies: Depedency;
}

// https://github.com/rollup/plugins/tree/master/packages/babel#babelhelpers
// const CJS_AND_ES_EXTERNALS = EXTERNAL.concat(/@babel\/runtime/);

export default (config: ConfigOptions) => {
  return rollbarConfig(config);
};
