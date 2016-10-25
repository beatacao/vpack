<template>
    <div id='header' class='header'>
        <header class="v-header">
            <router-link class='logo' to="/" exact>
                <img :src="logo" alt="logo" />
            </router-link>
            <div class="close" v-on:click="open()"><span class="close-icon" v-bind:class="{'open':isOpen}"></span></div>
        </header>
        <nav v-if="isOpen" class="v-nav">
            <ul>
                <li v-on:click="close()"><router-link to="/" exact>首页</router-link></li>
                <li v-on:click="close()"><router-link to="/inhc" exact>走进和昌</router-link></li>
                <li v-on:click="close()"><router-link to="/mall" exact>和昌商城</router-link></li>
                <li v-on:click="close()"><router-link to="/news" exact>新闻中心</router-link></li>
                <li v-on:click="close()"><router-link to="/cooperation" exact>商务合作</router-link></li>
                <li v-on:click="close()"><router-link to="/join" exact>加盟和昌</router-link></li>
                <li v-on:click="close()"><router-link to="/livein" exact>住在和昌</router-link></li>
                <li v-on:click="close()"><router-link to="/info" exact>和昌黑板报</router-link></li>
                <!--<li v-on:click="close()"><router-link to="/demos" exact>vue示例</router-link></li>-->
            </ul>
        </nav>
        <div v-if="isOpen" class="nav-mask" v-on:click="isOpen = false" @touchmove.stop.prevent></div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            'isOpen': false,
            'logo': require('../assets/images/logo.jpg')
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

<style lang='sass'>
@import '../assets/sass/var.scss';

.header{
    width:100%; height:0.98rem; background:#fff;
}
.v-header {
    position:relative;
    display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    width: 100%;
    .logo{
        float:left; margin-left:0.18rem; margin-top:0.16rem;
        width:2.15rem; height:0.65rem;
        img{
            display:block; width:100%;
        }
    }
    .close {
        position:absolute; right:0.18rem; top: 0.16rem; z-index:110;
        height: 0.5rem; width: 0.5rem; 
    }
    .close-icon {
        display: inline-block; *display:inline; zoom:1;
        line-height: 0.2rem; position: relative;
    }
    .close-icon, .close-icon:after, .close-icon:before {
        width: 0.3rem; height: 0.02rem; background-color: $blue_logo; 
        -webkit-transition: .3s; transition: .3s; border-radius: 1px;
    }

    .close-icon:after,.close-icon:before {
        content: '';
        position: absolute;
        -webkit-transform-origin: left 50%;
        transform-origin: left 50%;
        outline: 1px solid transparent;
    }

    .close-icon:before {
        top: -0.08rem;
    }

    .close-icon:after {
        bottom: -0.08rem;
    }

    .close-icon.open {
        background-color: transparent;
    }
    .close-icon.open:after,.close-icon.open:before {
        width: 0.3rem; background-color: #fff; top: -0.1rem;
    }

    .close-icon.open:before {
        -webkit-transform: translate3d(0,0,0) rotate(45deg);
        transform: translate3d(0,0,0) rotate(45deg);
    } 

    .close-icon.open:after {
        -webkit-transform: translate3d(0,11px,0) rotate(-45deg);
        transform: translate3d(0,11px,0) rotate(-45deg);
    }
} 

.v-nav {
    position: fixed; z-index: 100; top: 0.98rem; right: 0; bottom: 0;
    background: #fff; width:3rem;
    padding: 0.7rem 0 0;
    ul {
        padding:0; text-align:center;
        li {
            height: 0.9rem; line-height: 0.9rem; color: #000; font-size: 16px;
            a {
                text-decoration: none; color: #000; display: block;
            }
        }
    }
}

.nav-mask {
    position: fixed; z-index: 99; top: 0; left: 0; bottom: 0; right: 0;
    background-color: rgba(0,0,0,.4);
}
</style>
