<template>
    <div>
        <mt-tab-container>
            <mt-tab-container-item>
                <mt-cell v-for="item in tablist" :title="item.title" :label="item.publishTime" :is-link='true' :to="item.url" />
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
                return this.list;
            }
        }
    }
</script>

<style>
    
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