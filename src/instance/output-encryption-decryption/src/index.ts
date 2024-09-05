import type { App } from 'vue';
import OutputEncryptionDecryption from '..';

OutputEncryptionDecryption.install = (app: App) => {
  app.component(OutputEncryptionDecryption.name as string, OutputEncryptionDecryption);
  return app;
}

export default OutputEncryptionDecryption;