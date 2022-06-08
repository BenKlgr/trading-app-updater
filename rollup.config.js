import typescript from '@rollup/plugin-typescript';
import * as tsconfig from './tsconfig.json';

export default {
  input: 'src/application.ts',
  output: {
    dir: 'dist',
    format: 'cjs',
  },
  plugins: [typescript({ compilerOptions: tsconfig.compilerOptions })],
};
