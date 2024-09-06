import type { App, Plugin } from 'vue';
import OutputTransform from '@/instance/output-transform/index.tsx';
import outputTransformProps from '@/instance/output-transform/src/types.ts'

export type { outputTransformProps }

OutputTransform.install = (app: App) => {
  app.component(OutputTransform.name as string, OutputTransform);
  return app;
}

export default OutputTransform as typeof OutputTransform & Plugin;