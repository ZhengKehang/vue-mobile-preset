<template>
  <div class="layout-box">
    <layout-header class="layout-header"
                   :title="title"
                   :isTranslate="isTranslate"
                   v-if="!notHeader">
      <slot name="headerRight"></slot>
    </layout-header>
    <div class="layout-content">
      <slot></slot>
    </div>
    <slot name="tab"></slot>
  </div>
</template>

<script>
  import LayoutHeader from './header'
  export default {
    name: "index",
    components:{
      LayoutHeader
    },
    props:{
      isTranslate:{
        type:Boolean,
        default:false
      },
      notHeader:{
        type:Boolean,
        default:false
      },
      title:{
        type:String,
        default:''
      }
    },
    data(){
      return {
        tabs:[
          {name:'首页',tabName:'home'},
          {name:'我的',tabName:'mine'}
        ],
        transitionName:'fade'
      }
    }
  }
</script>

<style scoped lang="less">
  .layout-box{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    .layout-header{
      flex-shrink: 0;
      width: 100%;
      height: 128px;
      border-bottom: 1px solid #ececec;
      padding-top: 40px;
    }
    .layout-tab{
      flex-shrink: 0;
      width: 100%;
      height: 100px;
      border-top: 1px solid #ececec;
    }
    .layout-content{
      flex: 1;
      width: 100%;
      overflow: hidden;
    }
  }
</style>
