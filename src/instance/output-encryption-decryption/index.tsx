import {
  defineComponent,
} from 'vue';
import OutputEncryptionDecryption from 'output-encryption-decryption/src/index.vue'
import outputEncryptionDecryptionProps from './src/types'

export { outputEncryptionDecryptionProps }

export default defineComponent({
  name: 'OutputEncryptionDecryption',
  components: {
    OutputEncryptionDecryption
  },
  setup() {
    return () => (
      <OutputEncryptionDecryption />
    );
  }
})