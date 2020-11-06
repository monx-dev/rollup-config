import Config from '../lib/config';

export type Depedency = { [key: string]: string };

export interface ConfigOptions {
  input: string[];
  peerDependencies?: Depedency;
  main: string;
  dependencies?: Depedency;
}

const rollbarConfig = (config: ConfigOptions) => Config(config);

export default rollbarConfig;
