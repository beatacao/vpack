<template>
    <div class='header'>
        <header class="v-header">
            <router-link class='logo' to="/" exact>
            logo
            </router-link>
            <!--<img v-bind:src="image" alt="logo" class="header-logo" v-link="{'name':'index'}">-->
            <div class="close" v-on:click="open()"><span class="close-icon" v-bind:class="{'open':isOpen}"></span></div>
        </header>
        <nav v-if="isOpen" class="v-nav" transition="nav">
            <ul>
                <li v-on:click="close()"><router-link to="/" exact>首页</router-link></li>
                <li v-on:click="close()"><router-link to="/demos" exact>vue示例</router-link></li>
            </ul>
        </nav>
        <div v-if="isOpen" class="nav-mask" transition="mask" v-on:click="isOpen = false" @touchmove.stop.prevent></div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            'isOpen': false
            // 'image': require('../assets/logo.png')
        };
    },
    'methods': {
        'open': function() {
            this.isOpen = !this.isOpen;
        },
        "close": function(){
            this.isOpen = false;
        }
    },
    'computed': {
        'now': function(){
            return Date.now();
        }
    }
};
</script>

<style lang='sass' scoped>
.header{
    .logo{
        float:left; margin-left:15px;
        width:1rem; height:0.3rem; background:blue; color:#fff; text-align:center; line-height:0.3rem;
    }
}
.v-header {
    position:relative;
    background-color: #26a2ff;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding:15px 0;
    width: 100%;
    z-index: 1000;
}

.v-header .header-logo {
    height: 0.3rem;
}

.v-header .close {
    position:absolute;
    right:0.2rem;
    height: 0.25rem;
    width: 0.25rem;
    margin-top: 2px;
}

.v-header .close-icon {
    display: inline-block;
    line-height: 0.2rem;
    position: relative;
}

.v-header .close-icon,.v-header .close-icon:after,.v-header .close-icon:before {
    width: 0.25rem;
    height: 0.02rem;
    background-color: #fff;
    -webkit-transition: .3s;
    transition: .3s;
    border-radius: 1px;
}

.v-header .close-icon:after,.v-header .close-icon:before {
    content: '';
    position: absolute;
    -webkit-transform-origin: left 50%;
    transform-origin: left 50%;
    outline: 1px solid transparent;
}

.v-header .close-icon:before {
    top: -0.08rem;
}

.v-header .close-icon:after {
    bottom: -0.08rem;
}

.v-header .close-icon.open {
    background-color: #26a2ff;
}

.v-header .close-icon.open:after,.v-header .close-icon.open:before {
    width: 0.29rem;
}

.v-header .close-icon.open:before {
    -webkit-transform: translate3d(0,-2px,0) rotate(45deg);
    transform: translate3d(0,-2px,0) rotate(45deg);
}

.v-header .close-icon.open:after {
    -webkit-transform: translate3d(0,2px,0) rotate(-45deg);
    transform: translate3d(0,2px,0) rotate(-45deg);
}

.v-header .header-menu {
    height: 0.16rem;
    margin-top: 0.06rem;
}

.v-header .header-close {
    height: 0.2rem;
    margin-top: 0.06rem;
}

.v-nav {
    position: fixed;
    z-index: 100;
    width: 2.15rem;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    padding: 0.7rem 0 0 0.25rem;
}

.v-nav ul {
    list-style: none;
}

.v-nav li {
    height: 0.45rem;
    line-height: 0.45rem;
    color: #333;
    font-size: 16px;
    border-bottom: 1px solid #eee;
}

.v-nav a {
    text-decoration: none;
    color: #333;
    display: block;
}

.v-nav .v-link-active {
    color: #26a2ff;
}

.nav-mask {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,.4);
}

.nav-transition,.mask-transition {
    -webkit-transition: .2s linear;
    transition: .2s linear;
}

.nav-enter,.nav-leave {
    -webkit-transform: translate3d(2.15rem,0,0);
    transform: translate3d(2.15rem,0,0);
}

.mask-enter,.mask-leave {
    background-color: transparent;
}

.logout-toast {
    width: 80%;
}
</style>
