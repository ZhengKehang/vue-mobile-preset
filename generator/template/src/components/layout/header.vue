<template>
  <div class="header-box center">
    <div class="header-left"></div>
    <div class="header-content">{{title}}</div>
    <div class="header-right">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "layout-header",
    props:{
      title:{
        type:String,
        default:''
      },
      isTranslate:{
        type:Boolean,
        default:false
      }
    }
  }
</script>

<style scoped lang="less">

</style>
