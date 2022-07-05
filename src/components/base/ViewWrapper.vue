
<script setup lang="ts">
import { useCommonStore } from '../../pinia/store';
const store = useCommonStore()
</script>
<template>
  <div 
  class="view-wrapper view-wrapper-full " 
  :class="[store.siderbarOpen&&'is-pushed-block']"
  >
    <slot></slot>
  </div>
</template>
<style></style>
