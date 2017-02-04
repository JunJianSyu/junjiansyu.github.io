<template>
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
    .record-body {
        overflow-y: auto;
        color: #333;
        padding: 10px;
    }
</style>