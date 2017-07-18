<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <a class="navbar-brand" href="/">Shopping Cart</a>
      </div>
      user: <input type='text' v-model='username'>
      sex: <input type='text' v-model='sex'>
      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class=" navbar-collapse">
        <ul class="nav navbar-nav">
            <router-link tag="li" to="/cart" active-class='active'>
                <a href="#!"> iPhone 6S </a>
            </router-link>
            <router-link tag="li" to="/mycart" active-class='active'>
                <a href="#!"> 购物车 <span class="badge text-danger" v-text="totalItem" v-if="totalItem"></span></a>
            </router-link>
        </ul>
      </div>
    </div>
    <!-- /.container-fluid -->
  </nav>
</template>

<script>
  export default {
    data(){
        return {}
    },
    props: ['username', 'sex'],
    computed: {
        cart() {
            return this.$store.state.frontend.cart.cart
        },
        'totalItem': function() {
            return this.cart.length
        }
    }
  }
</script>

<style lang='less'>
.navbar{
    background-color: #f8f8f8;
    border-color: #e7e7e7;
    ul.nav{
        li{
            a{
                display:inline-block; height:50px; line-height:50px;
                padding:0 15px; color:#333; font-size:14px;
                &:hover{
                    background:none; color:#333;
                }
            }
        }
    }
    .navbar-header {
        float: left;
    }
    .navbar-brand{
        float: left;
        height: 20px;
        padding: 15px 15px;
        font-size: 18px;
        line-height: 20px;
        color:#777
    }
}
  .container-fluid{
    position:relative;
  }
  .text-danger {
    color: #fff;
    background-color: #d9534f;
  }
  #welcome{
    position:absolute; 
    right: 135px;
    top: 12px; color:#5e5e5e;
  }
</style>
