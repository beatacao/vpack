<template>
    <mt-swipe id='swipe' :auto="4000">
        <mt-swipe-item v-for="obj in swipeData">
            <a :href="obj.link"><img :src="obj.img" alt=""></a>
        </mt-swipe-item>
    </mt-swipe>
</template>

<script>
    export default {
        props: {
            'data': Array
        },
        data (){
            return {};
        },
        computed: {
            swipeData: function(){
                return this.data;
            }
        }
    }
</script>

<style lang='sass'>
@import '../assets/sass/var.scss';
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
    bottom: 8px;
    left: 50%;
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
}
.mint-swipe-indicator {
    width: 0.18rem;
    height: 0.18rem;
    display: inline-block;
    border-radius: 100%;
    background: #fff;
    opacity: 0.5;
    margin: 0 3px;
}
.mint-swipe-indicator.is-active {
    background: $blue; opacity: 1;
}
/*custom*/
.mint-swipe{
    height:3.4rem;
}
.mint-swipe-items-wrap{
    div.mint-swipe-item{
        a{
            display:block; width:100%; height:100%;
            img{
                display:block; width:100%;
            }
        }
    }
}

</style>