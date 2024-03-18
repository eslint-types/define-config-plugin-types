import { rimrafSync } from 'rimraf';

rimrafSync(
  [
    '**/.eslintcache',
    '**/pnpm-lock.yaml',
    // node_modules needs to be deleted last
    '**/node_modules',
  ],
  {
    glob: true,
  },
);
