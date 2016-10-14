<template>
    <div class="index-view">
        <!--slider-->
        <div class="sliderContainer">

        </div>
        <mt-swipe :auto="4000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
        <div class="navbarContainer">
            <mt-navbar v-model="selected">
                <mt-tab-item ref='tabItem1' id="1">选项一</mt-tab-item>
                <mt-tab-item ref='tabItem2' id="2">选项二</mt-tab-item>
                <mt-tab-item ref='tabItem3' id="3">选项三</mt-tab-item>
            </mt-navbar>

            <!-- tab-container -->
            <mt-tab-container v-model='selected'>
                <mt-tab-container-item :id="selected">
                    <mt-cell v-for="(l, index) in list" :title="l + index" />
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
    </div>
</template>

<script>
   import Vue from 'vue';
   import { Indicator } from 'mint-ui';

   export default {
        data() {
            return {
                'selected': 1,
                'list': []
            }
        },
        components: {
            Indicator
        },
        created: function(){
            this.fetchData(this.selected);
        },
        watch: {
            selected: 'fetchData'
        },
        methods: {
            fetchData: function(v){
                var self = this;
            
                Indicator.open({
                    spinnerType: 'fading-circle'
                });

                setTimeout(function(){
                    var text = self.$refs['tabItem'+v].$el.innerText;
                    var length = parseInt(Math.random()*10)+3;
                    var arr = [];
                    do{
                        arr.push(text);
                    }while(arr.length<length)
                    self.list = arr;

                    Indicator.close();
                    Vue.nextTick(function(){
                        self.$emit('ViewMounted');
                    });
                }, 2000);
            }
        },
        mounted: function(){
            this.$emit('ViewMounted');
        }
    };
</script>

<style lang="sass">
/*mint-ui/lib/swipe/style.css*/
.mint-swipe {
    overflow: hidden;
    position: relative;
}
.mint-swipe-items-wrap {
    position: relative;
    overflow: hidden;
    height: 100%;
}
.mint-swipe-items-wrap > div {
    position: absolute;
    -webkit-transform: translateX(-100%);
            transform: translateX(-100%);
    width: 100%;
    height: 100%;
    display: none
}
.mint-swipe-items-wrap > div.is-active {
    display: block;
    -webkit-transform: none;
            transform: none;
}
.mint-swipe-indicators {
    position: absolute;
    bottom: 10px;
    left: 50%;
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
}
.mint-swipe-indicator {
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 100%;
    background: #000;
    opacity: 0.2;
    margin: 0 3px;
}
.mint-swipe-indicator.is-active {
    background: #fff;
}
/*custom*/
.mint-swipe{
    height:2rem;
}
.mint-swipe-items-wrap{
    div.mint-swipe-item{
        line-height:2rem; background:orange; color:#fff; text-align:center;
    }
}

/*navbar*/
.mint-navbar {
    background-color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    text-align: center;
}
.mint-navbar .mint-tab-item {
    padding: 17px 0;
    font-size: 15px
}
.mint-navbar .mint-tab-item:last-child {
    border-right: 0;
}
.mint-navbar .mint-tab-item.is-selected {
    border-bottom: 3px solid #26a2ff;
    color: #26a2ff;
    margin-bottom: -3px;
}
.mint-navbar.is-fixed {
    top: 0;
    right: 0;
    left: 0;
    position: fixed;
    z-index: 1;
}
/*custom*/



.mint-tab-container {
    overflow: hidden;
    position: relative;
}
.mint-tab-container .swipe-transition {
    -webkit-transition: -webkit-transform 150ms ease-in-out;
    transition: -webkit-transform 150ms ease-in-out;
    transition: transform 150ms ease-in-out;
    transition: transform 150ms ease-in-out, -webkit-transform 150ms ease-in-out;
}
.mint-tab-container-wrap {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}

.mint-tab-container-item {
    -ms-flex-negative: 0;
        flex-shrink: 0;
    width: 100%
}

</style>
