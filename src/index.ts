import Config from '../lib/config';

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

const rollbarConfig = (config: ConfigOptions) => Config(config);

export default rollbarConfig;
