<script setup lang="ts">
import { encryption } from './index'
import { Button as AButton } from 'ant-design-vue';

const handleClick = () => {
  console.log(encryption('Hello world!'))
}
</script>

<template>
  <AButton @click="handleClick">Click me</AButton>
</template>
