import Config from '../lib/config';

export type Depedency = { [key: string]: string };

export interface ConfigOptions {
  input: string[];
  format?: 'amd' | 'cjs' | 'system' | 'es' | 'iife' | 'umd';
  peerDependencies?: Depedency;
  dependencies?: Depedency;
}

const rollbarConfig = (config: ConfigOptions) => Config(config);

export default rollbarConfig;
