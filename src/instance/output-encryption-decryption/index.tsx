import {
  defineComponent,
} from 'vue';
import OutputEncryptionDecryption from 'output-encryption-decryption/src/index.vue'

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