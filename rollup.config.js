import config from './lib/config';

import { dependencies } from './package.json';

export default config({
  dependencies,
  input: 'src/index.ts',
});
