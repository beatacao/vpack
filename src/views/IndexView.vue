<template>
    <div class="index-view">
        <!--slider-->
       <Swipe :data="swipe"></Swipe>
        <div class="navbarContainer">
            <Navbar :items='navbar' :selected='selected' v-on:selectChanged='selectChanged'></Navbar>
            <Tablist v-infinite-scroll="loadMore"
                    infinite-scroll-disabled="loading"
                    infinite-scroll-distance="0"
            class='listContainer' ref='listContainer' :list='list'></Tablist>
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
                        item.url = '/news/detail/' + item.id;
                        if(!(i%2)){
                            item.imgUrl = '../../src/assets/images/home/data/swipe/swipe.jpg';
                        }
                        return item;
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
            },
            loadMore: function(){
                this.loading = true;
                setTimeout(() => {
                    let last = this.list[this.list.length - 1];
                    for (let i = 1; i <= 10; i++) {
                        this.list.push({'title': '选项卡'+this.selected, 'publishTime': '2015-09-10', 'id':1});
                    }
                    this.loading = false;
                }, 2500);
            }
        },
        mounted: function(){
            this.$refs['listContainer'].$el.style.height =  document.documentElement.clientHeight - 
                                                            document.getElementById('header').offsetHeight - 
                                                            document.getElementById('footer').offsetHeight - 
                                                            document.getElementById('swipe').offsetHeight -
                                                            document.getElementById('navbar').offsetHeight + 'px';
            this.$emit('ViewMounted');
        }
    };
</script>

<style lang="sass">
.listContainer{
    overflow-y: scroll;
}
</style>
