<script setup lang="ts">
import { transform } from './index'
import { Button as AButton } from 'ant-design-vue';

const handleClick = () => {
  console.log(transform('Hello world!'))
}
</script>

<template>
  <AButton @click="handleClick">Click me2</AButton>
</template>
