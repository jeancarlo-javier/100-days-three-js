<script setup lang="ts">
import { onMounted, ref } from 'vue'
import renderScene from './100DaysOfThree/day-1'

const element = ref<HTMLElement | null>(null)

onMounted(() => {
  if (element.value) {
    renderScene(element.value)
  }
})
</script>

<template>
  <canvas ref="element" />
</template>

<style scoped></style>
