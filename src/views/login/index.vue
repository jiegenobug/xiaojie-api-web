<script setup lang="ts">
import router from "@/router";
import { useUserStore } from "@/stores/user";
const userStore = useUserStore();
const Login = async () => {
  await userStore.login({ phoneNumber: "", password: "" });
  router.push('/')
};
</script>
<template>
  登录页
  <button @click="Login">登录</button>
</template>

<style scoped lang="less"></style>
