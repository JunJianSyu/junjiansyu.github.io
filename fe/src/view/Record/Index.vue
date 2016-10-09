<template>
    <div class="content">{{{content}}}</div>
</template>
<script>
    import Fearticle from '../../assets/markdown/fe-introduction'
    export default {
        name: 'Index',
        data() {
            return {
                content: ''
            }
        },
        created() {
            var markdownString = Fearticle.content
            this.content = window.marked(markdownString)
        }
    }
</script>