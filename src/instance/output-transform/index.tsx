import {
  defineComponent,
} from 'vue';
import OutputTransform from 'output-transform/src/index.vue'

export default defineComponent({
  name: 'OutputTransform',
  components: {
    OutputTransform
  },
  setup() {
    return () => (
      <OutputTransform />
    );
  }
})