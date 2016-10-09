<template>
    <nav role="navigation">
        <ul class="summary">
            <li>
                <a v-link="{ path: '/record' }" v-link-active>介绍</a>
            </li>
        </ul>
    </nav>
    <div class="record-body">
        <router-view></router-view>
    </div>
</template>
<script>
    import marked from 'marked'

    export default {
        created() {
            window.marked = marked
            marked.setOptions({
                highlight: function (code) {
                    return window.hljs.highlightAuto(code).value
                }
            })
        }
    }
</script>
<style lang="less" scoped>
    .summary {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        overflow-y: auto;
        z-index: 9;
        background: #fafafa;
        width: 300px;
        border-right: 1px solid rgba(0, 0, 0, .07);
    }

    .summary li a {
        display: block;
        padding: 10px 15px;
        border-bottom: none;
        color: #364149;
        background: 0 0;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        position: relative;
    }

    .summary li a.v-link-active {
        color: #008cff;
        text-decoration: none;
    }

    .record-body {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 300px;
        overflow-y: auto;
        color: #333;
        padding: 20px 60px;
    }
</style>