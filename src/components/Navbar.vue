<template>
    <mt-navbar v-model='navSelected'>
        <mt-tab-item v-for="item in navItems.tabItems" :id="item.id" :class='{"is-selected": (item.id==navSelected)}' v-html="item.content"></mt-tab-item>
    </mt-navbar>
</template>

<script>
    export default {
        props: {
            'items': Object,
            'selected': String | Number
        },
        data () {
            return {
                navItems: this.items || {
                    'tabItems': [
                        // {id: 'text'}
                        {'id': '1', 'content': '选项一'},
                        {'id': '2', 'content': '选项二'},
                        {'id': '3', 'content': '选项三'}
                    ]
                },
                navSelected: this.selected
            }
        },
        watch: {
            navSelected: function(){
                this.$emit('selectChanged', this.navSelected)
            }
        }
    }
</script>

<style lang='sass'>
@import '../assets/sass/var.scss';
/*navbar*/
.mint-navbar {
    background-color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    text-align: center;
    border-bottom:2px solid #efeded;
}
.mint-navbar .mint-tab-item {
    display:inline-block; *display:inline; zoom:1;
    height:0.86rem; line-height:0.86rem;
}
.mint-navbar .mint-tab-item:last-child {
    border-right: 0;
}
.mint-navbar .mint-tab-item.is-selected {
    border:none; background:$blue; color:#fff;
}
.mint-navbar.is-fixed {
    top: 0;
    right: 0;
    left: 0;
    position: fixed;
    z-index: 1;
}
</style>