import type { App } from 'vue';
import OutputTransform from '..';

OutputTransform.install = (app: App) => {
  app.component(OutputTransform.name as string, OutputTransform);
  return app;
}

export default OutputTransform;