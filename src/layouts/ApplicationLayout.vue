<script setup lang="ts">
import SubSidebar from './subsidebar/SubSidebar.vue'
import CircularMenu from '../components/base/CircularMenu.vue'
import ActivePanel from '../components/base/ActivePanel.vue'
</script>

<template>
  <div id="huro-app" class="app-wrapper">
    <!--Circular menu-->
    <CircularMenu/>
    <!--Sidebar-->
    <SubSidebar />
    <!--Activity panel-->
    <ActivePanel/>
    <!-- Content Wrapper -->
    <slot></slot>
  </div>
</template>

<style>
</style>