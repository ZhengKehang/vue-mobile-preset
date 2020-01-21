<template>
  <div class="tab-box">
    <div class="tab-item center"
         v-for="(tab,index) in tabs"
         :class="{actived:activeIndex===index}"
         @click="toTab(index)"
         :key="tab.tabName">
      {{tab.name}}
    </div>
  </div>
</template>
<script>
  export default {
    name: "tab",
    props:{
      tabs:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        activeIndex:0
      }
    },
    methods:{
      toTab(index){
        this.activeIndex = index
        this.$emit('getIndex',index);
        this.goto(this.tabs[index].tabName)
      }
    }
  }
</script>

<style scoped lang="less">
  .tab-box{
    width: 100%;
    height: 100%;
    display: flex;
    .tab-item{
      flex: 1;
      &.actived{
        color: cornflowerblue;
      }
    }
  }
</style>
