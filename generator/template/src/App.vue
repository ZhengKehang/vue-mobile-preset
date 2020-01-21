<template>
  <div id="app">
    <transition name="customer" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"
                     class="transition-view">
        </router-view>
      </keep-alive>
    </transition>
    <transition name="customer" enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutLeft">
      <router-view v-if="!$route.meta.keepAlive"
                   class="transition-view">
      </router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
  @import "assets/less/animate.css";
  @import "assets/less/common.less";
  @import "assets/less/reset.less";
  #app{
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
</style>
