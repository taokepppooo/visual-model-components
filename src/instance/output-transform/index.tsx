import {
  defineComponent,
} from 'vue';
import OutputTransform from 'output-transform/src/index.vue'
import outputTransformProps from './src/types'

export { outputTransformProps }

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