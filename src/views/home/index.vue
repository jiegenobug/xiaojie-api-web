<script setup lang="ts">
import { Test1 } from '@/api/user';

const env = import.meta.env
console.log(env)
const t: Function = async () => {
  const re = await Test1({
    type: 1,
    page: 1,
    size: 99,
    projectType: 1
  })
  console.log(re, 'res');
}
t()

</script>

<template>
  <div>
    111
  </div>
</template>

<style scoped lang="less"></style>
