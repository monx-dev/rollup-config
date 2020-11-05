import config from './lib/config';

import { peerDependencies, main, dependencies } from './package.json';

export default config({
  dependencies,
  peerDependencies,
  output: 'teste',
  file: 'src/index.ts',
  main,
});
