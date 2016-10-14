<template>
  <div class="demos-view">
    <ul>
        <li><router-link to="/demos/markdown" exact>markdown</router-link></li>
    </ul>
    <Markdown></Markdown>
  </div>
</template>

<script>
  import Markdown from '../components/demos/Markdown.vue'
  
  export default {
    data () {
      return {
        
      }
    },
    components: {
      Markdown
    },
    mounted: function(){
      this.$emit('ViewMounted');
    }
  }
</script>

<style lang="sass" scoped>
  
</style>
