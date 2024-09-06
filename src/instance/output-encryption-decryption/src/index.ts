import type { App, Plugin } from 'vue';
import OutputEncryptionDecryption from '@/instance/output-encryption-decryption/index.tsx';
import outputEncryptionDecryptionProps from '@/instance/output-encryption-decryption/src/types.ts'

export type { outputEncryptionDecryptionProps }

OutputEncryptionDecryption.install = (app: App) => {
  app.component(OutputEncryptionDecryption.name as string, OutputEncryptionDecryption);
  return app;
}

export default OutputEncryptionDecryption as typeof OutputEncryptionDecryption & Plugin;