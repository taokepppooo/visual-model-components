import type { ExtractPropTypes, PropType } from 'vue';

export const outputTransformProps = () => ({
  sourceData: Object as PropType<Record<string, any>>,
});

export type OutputTransformProps = Partial<ExtractPropTypes<ReturnType<typeof outputTransformProps>>>;

export default outputTransformProps;