<template>
<div class='cart-app'>
    <CartNav :username.once='username' :sex.once='sex'></CartNav>
    
  <div class="container">
    <div class="row">
      <div class="product col-md-offset-2 col-sm-offset-2 col-md-8 col-sm-8">
        <div class="row">
          <div class="gallery col-md-6 col-sm-6">
            <img :src="iPhone6S.activeStyleUrl" class="img-responsive" alt="">
          </div>
          <div class="detail col-md-6 col-sm-6">
            <h3 class="name"><span v-text="iPhone6S.name"></span></h3>
            <hr>
            <div class="options">
              <dl class="dl-horizontal">
                <dt>描述：</dt>
                <dd><span v-text="iPhone6S.desc"></span></dd>
              </dl>
              <dl class="price dl-horizontal">
                <dt>价格：</dt>
                <dd class="pomegranage"><strong>￥<span v-text="iPhone6S.price"></span></strong></dd>
              </dl>
              <dl class="option dl-horizontal">
                <dt>外观：</dt>
                <dd>
                  <ul>
                    <li v-for="(styleUrl, key) in iPhone6S.style"
                        @click="changeStyle(key, styleUrl)"
                        :class="{active: iPhone6S.activeStyleUrl === styleUrl}"><span>{{key}}</span></li>
                  </ul>
                </dd>
              </dl>
              <dl class="option dl-horizontal">
                <dt>存储容量:</dt>
                <dd>
                  <ul>
                    <li v-for="(price, key) in iPhone6S.storage"
                        @click="changePrice(key, price)"
                        :class="{active: iPhone6S.price === price}"><span v-text="key"></span></li>
                  </ul>
                </dd>
              </dl>
            </div>
            <hr>
            <button class="btn btn-danger btn-block" @click="addItem()" :disabled="iPhone6S.isSelected">
              <span class="glyphicon glyphicon-shopping-cart"></span> 加入购物车
            </button>
          </div>
        </div>
      </div> <!-- ./product -->
    </div>
    <div class='footer'>
      sex: <input type='text' v-model='sex'>
    </div>
  </div><!-- ./container -->
</div>
</template>

<script>
    import CartNav from '~components/cart/Nav'
    export default {
    data() {
        return {
          username: 'peach',
          sex: 'famale'
        }
    },
    components: {
        CartNav
    },
    computed: {
        iPhone6S() {
            return this.$store.state.frontend.cart.iPhone6S
        }
    },
    methods: {
        changeStyle(key, curstyle){
            this.$store.commit('frontend/CHANGE_STYLE', {styleName:key, styleUrl:curstyle})
        },
        changePrice(key, price){
            this.$store.commit('frontend/CHANGE_PRICE', {storage: key, price: price})
        },
        addItem(){
            this.$store.commit('frontend/ADD_ITEM')
        }
    }
    }
</script>
<style lang='less'>

#body{
    margin:0;
}
#sidebar{
    display:none;
}
.pomegranage {
  color: #c0392b;
}
.detail dt {
  color: #95a5a6;
  width: 64px;
  padding: 4px 0;
}
.detail dd {
  margin-left: 64px;
  padding: 4px;
}
.option ul {
  padding: 0;
}
.option ul > li {
  float: left;
  list-style: none;
  margin-right: 4px;
  padding: 0 8px;
  border: 2px solid #eee;
}
.option ul > li:hover {
  border: 2px solid #c0392b;
}
.option ul .active {
  border: 2px solid #c0392b;
}
.product{
    width:780px; margin:0 auto; overflow:hidden;
    .gallery, .detail{
        float:left; width:360px; padding:0 15px;
    }
    .detail{
        .options{
            font-size:14px;
            ul{
                margin-left:0; overflow:hidden;
            }
        }
    }
}
</style>
