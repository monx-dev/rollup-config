import config from './lib/config';

import { main, dependencies } from './package.json';

export default config({
  dependencies,
  output: 'teste',
  file: 'src/index.ts',
  main,
});
