<template>
  <div id="app">
    <!--header component-->
    <Headerbar></Headerbar>
    <!--body view-->
    <transition name="fade" mode="out-in">
      <router-view v-on:ViewMounted='viewMounted' class="view"></router-view>
    </transition>
    <!--footer component-->
    <Footerbar></Footerbar>
  </div>
</template>

<script>
  import Headerbar from './components/Header.vue'
  import Footerbar from './components/Footer.vue'

  var fixFooter = function(){
    if(document.documentElement.clientHeight >= document.documentElement.scrollHeight){
      !$('#footer').hasClass('fixed') && $('#footer').addClass('fixed');
    }else{
      $('#footer').removeClass('fixed');
    }
  }

  export default {
    components: {
      Headerbar,
      Footerbar
    },
    methods: {
      viewMounted: function(){
        fixFooter();
      }
    },
    mounted: function(){
      fixFooter();
    }
  }
</script>

<style lang="sass">
  @media screen and (max-width: 321px) {
      body {
          font-size:14px;
      }
      footer{
        font-size:10px;
      }
      .mint-tab-item{
        font-size:15px;
      }
  }

  @media screen and (min-width: 321px) and (max-width:400px) {
      body {
          font-size:15px
      }
      footer{
        font-size:12px;
      }
      .mint-tab-item{
        font-size:16px;
      }
  }

  @media screen and (min-width: 400px) {
      body {
          font-size:16px
      }
      footer{
        font-size:14px;
      }
      .mint-tab-item{
        font-size:18px;
      }
  }
  body{
    margin:0;
  }
  
</style>
