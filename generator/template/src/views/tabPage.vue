<template>
  <layout :title="title">
    <router-view></router-view>
    <div slot="tab" class="layout-tab">
      <layout-tab :tabs="tabs" @getIndex="getIndex"></layout-tab>
    </div>
  </layout>
</template>

<script>
  import LayoutTab from '../components/layout/tab'
  export default {
    name: "tabPage",
    components:{
      LayoutTab
    },
    data(){
      return {
        title:'首页',
        tabs:[
          {name:'首页',tabName:'home'},
          {name:'我的',tabName:'mine'},
        ]
      }
    },
    methods:{
      getIndex(index){
        this.title = this.tabs[index].name
      }
    }
  }
</script>

<style scoped>

</style>
