<template>
    <div>
        <mt-tab-container>
            <mt-tab-container-item>
                <mt-cell v-for="item in tablist" :title="item.title" :label="item.publishTime" :is-link='true' :to="item.url">
                    <img v-if="item.imgUrl" :src="item.imgUrl" slot='icon' />
                </mt-cell>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
    
</template>

<script>
    export default {
        props:{
            'list': Array
        },
        data () {
            return {}
        },
        computed: {
            tablist: function(){
                // list = [
                //     {
                //         'title': String,
                //         'publishTime': Date,
                //         'isLink': Boolean,
                //         'url': String,
                //         'imgUrl': String
                //     }
                // ]
                return this.list;
            }
        }
    }
</script>

<style lang='sass'>
@import '../assets/sass/var.scss';

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
    -ms-flex-negative: 0; flex-shrink: 0; width: 100%;
    .mint-cell{
        padding:34px 12px 16px;
        img{
            float:left; width:3rem; height:2rem; margin-right:0.25rem;
        }
        .mint-cell-label{
            position:absolute; top:0; font-size:$font_tip;
        }
        .mint-cell-text{
            line-height:24px;
        }
    }
}

</style>