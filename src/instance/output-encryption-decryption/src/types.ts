import type { ExtractPropTypes, PropType } from 'vue';

export const outputEncryptionDecryptionProps = () => ({
  sourceData: Object as PropType<Record<string, any>>,
});

export type OutputEncryptionDecryptionProps = Partial<ExtractPropTypes<ReturnType<typeof outputEncryptionDecryptionProps>>>;

export default outputEncryptionDecryptionProps;