<template>
    <layout @click.native="goto('home')" notHeader>
      <div class="login-box center">
        登录
      </div>
    </layout>
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style scoped lang="less">
  .login-box{
    width: 100%;
    height: 100%;
    background-color: #7cb0fa;
    color: #ffffff;
  }
</style>
