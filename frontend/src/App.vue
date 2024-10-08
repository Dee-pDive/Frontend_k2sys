<template>
  <div class="app">
    <vueHeader />
    <div id="content" class="content">
      <router-view></router-view>
    </div>

  </div>
  <Ground/>
</template>

<script>
import vueHeader from './components/layout/Header.vue';
export default{
    name: "App",
    components: {
      vueHeader,
    }
};
</script>

<style>
</style>
