<template>
    <div class="container">
        <ul class="footer-nav">
            <li v-for="(index, item) in nav">
                <a href="{{item.url}}" :class="{'active': item.active}" @click.stop="choose(index)">{{item.text}}</a>
            </li>
        </ul>
        <div class="item my-wrap" v-if="infoShow" transition="liter">
            <img src="../assets/img/xjj.jpg" class="my-img"/>
            <div class="my-info">
                <p>My：许君剑 JunJianSyu</p>
                <p>专注于前端开发、NodeJs开发、等等...</p>
                <p>一直想用技术改变世界的梦想青年，动漫偶像：路飞、索隆</p>
                <p><i class="iconfont">&#xe60d;</i><a target="blank" href="mailto:junjian1992@gmail.com">junjian1992@gmail.com</a></p>
                <p><i class="iconfont">&#xe6cf;</i><a target="blank" href="http://www.github.com/junjiansyu" title="junjiansyu">www.github.com/junjiansyu</a></p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            nav: [
                {text: 'About Me', active: false, url: 'javascript:void(0)'},
                {text: 'ES6', active: false, url: 'http://es6.imsyu.com'},
                {text: 'Docs', actve: false, url: 'http://docs.imsyu.com'}
                // {text: 'FE Record', active: false, url: '/#!/record'}
                // {text: 'Vux', active: false, url: '/#!/vux'}
            ],
            infoShow: false
        }
    },

    created() {
        this.windowClickEvent = function () {
            this.nav.map((item) => {
                item.active = false
            })
            this.infoShow = false
        }.bind(this)
        window.addEventListener('click', this.windowClickEvent, false)
    },

    methods: {
        choose(idx) {
            this.infoShow = false
            this.nav.map((item) => {
                item.active = false
            })
            if (idx === 0) {
                this.nav[idx].active = true
                this.infoShow = true
            }
        }
    }
}
</script>
<style lang="less" scoped>
.container {
    background: url("../assets/img/bg_mo.jpg") no-repeat center;
    background-size: cover;
}
.footer-nav {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background:rgba(0, 0, 0, .5);
    li {
        float: left;
        height: 50px;
        line-height: 50px;
        a {
            display: block;
            padding: 0 20px;
            color: #fff;
            text-decoration: none;
        }
        a.active, a:active, a:hover{
            background:rgba(0, 0, 0, .2);
        }
    }
}
.item {
    position: absolute;
    bottom: 60px;
    left: 0;
    padding: 10px 0;
    width: 100%;
    height: auto;
    background:rgba(0, 0, 0, .2);
    line-height: 2;
    transition:all .8s ease;
    transform-origin:5% bottom;
    p {
        color: #fff;
        margin:0;
        padding:0 5px;
        max-height: 35px;
        overflow: hidden;
    }
    p > a, p > a:hover {
        color: #fff;
        text-decoration: none;
    }
    .my-img {
        float: left;
        margin-left: 10px;
        width: 100px;
        height: 100px;
        border-radius: 100%;
    }
    .my-info{
        padding-left:120px;
    }
}
.item:before {
    position: absolute;
    left: 32px;
    bottom: -10px;
    display: block;
    width: 0;
    height: 0;
    border-top: 10px solid #000;
    border-right: 7px solid transparent;
    border-left:7px solid transparent;
    content:" ";
    opacity:.2
}

.liter-transition {
  transition: all .5s ease;
  opacity: 1;
}

.liter-enter, .liter-leave {
  opacity: 0;
}

.iconfont {
    font-size: 24px;
    vertical-align: middle;
    margin-right: 5px;
}
</style>
