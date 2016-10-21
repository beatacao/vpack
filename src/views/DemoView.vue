<template>
  <div class="demos-view">
    <ul>
        <li><router-link to="/demos/markdown" exact>markdown</router-link></li>
        <li><router-link to="/demos/gitcommit" exact>gitcommit</router-link></li>
        <li><router-link to="/demos/firebase" exact>firebase</router-link></li>
        <li><router-link to="/demos/grid" exact>gridtable</router-link></li>
        <li><router-link to="/demos/tree" exact>tree</router-link></li>
    </ul>
  </div>
</template>

<script>
  
  export default {
    data () {
      return {
        
      }
    },
    components: {
      // Markdown
    },
    mounted: function(){
      this.$emit('ViewMounted');
    }
  }
</script>

<style lang="sass" scoped>
  
</style>
