import type { TImportsConfig, TProp } from 'react-view';

export type ReactViewConfig = {
  componentName: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  scope: { [key: string]: any };
  props: { [key: string]: TProp };
  imports: TImportsConfig;
};
