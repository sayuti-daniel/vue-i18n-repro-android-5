<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld :msg="t('hw')" />
</template>

<script setup>
import { useI18n } from "vue-i18n";
import HelloWorld from "./components/HelloWorld.vue";

const { t } = useI18n();
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
