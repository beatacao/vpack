<template>
    <div class="index-view">
        <!--slider-->
       <Swipe :data="swipe"></Swipe>
        <div class="navbarContainer">
            <Navbar :items='navbar' :selected='selected' v-on:selectChanged='selectChanged'></Navbar>
            <Tablist :list='list'></Tablist>
        </div>
    </div>
</template>

<script>
   import Vue from 'vue';
   import { Indicator } from 'mint-ui';

   import Swipe from '../components/Swipe.vue';
   import Navbar from '../components/Navbar.vue'; 
   import Tablist from '../components/Tablist.vue';

   export default {
        data() {
            return {
                'selected': 1,
                'list': [],
                'swipe': [],
                'navbar':{
                    'tabItems': [
                        // {id: 'text'}
                        {'id': '1', 'content': '新闻'},
                        {'id': '2', 'content': '商城'},
                        {'id': '3', 'content': '物业'},
                        {'id': '4', 'content': '黑板报'}
                    ]
                }
            }
        },
        components: {
            Indicator,
            Swipe, Navbar, Tablist
        },
        created: function(){
            this.initData(this.selected);
        },
        watch: {
            selected: 'fetchData'
        },
        methods: {
            initData: function(v){
                var self = this;
                var swipeArr = [{'img':'../../src/assets/images/home/data/swipe/swipe.jpg', 'link':''},
                                {'img':'../../src/assets/images/home/data/swipe/swipe2.jpg', 'link':''},
                                {'img':'../../src/assets/images/home/data/swipe/swipe3.jpg', 'link':''}];
                Indicator.open({
                    spinnerType: 'fading-circle'
                });

                setTimeout(function(){
                    var text = '选项卡选项卡选项卡选项卡，选项卡选项卡选项卡选项卡选项卡'+self.selected;
                    var time = '2016-09-12';
                    var length = 5;
                    var arr = [];
                    do{
                        arr.push({'title': text, 'publishTime': time, 'id':1});
                    }while(arr.length<length)

                    arr.filter(function(item, i){
                        return item.url = '/news/detail/' + item.id;
                    })

                    self.list = arr;
                    self.swipe = swipeArr;

                    Indicator.close();
                    Vue.nextTick(function(){
                        self.$emit('ViewMounted');
                    });
                }, 2000);
                
            },
            selectChanged: function(v){
                this.selected = v;
            },
            fetchData: function(v){
                var self = this;
            
                Indicator.open({
                    spinnerType: 'fading-circle'
                });

                setTimeout(function(){
                    var text = '选项卡选项卡选项卡选项卡，选项卡选项卡选项卡选项卡选项卡'+self.selected;
                    var time = '2016-09-12';
                    var length = 5;
                    var arr = [];
                    do{
                        arr.push({'title': text, 'publishTime': time, 'id':1});
                    }while(arr.length<length)

                    arr.filter(function(item, i){
                        return item.url = '/news/detail/' + item.id;
                    })
                    
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

</style>
