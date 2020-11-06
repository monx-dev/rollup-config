import Config from '../lib/config';

export type Depedency = { [key: string]: string };

export interface ConfigOptions {
  input: string[];
  peerDependencies?: Depedency;
  dependencies?: Depedency;
}

const rollbarConfig = (config: ConfigOptions) => Config(config);

export default rollbarConfig;
