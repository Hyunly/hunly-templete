<template>
    <div class="app-warper">
        <h1>{{ text }}</h1>
    </div>
</template>
<script>
export default {
    data(){
        return {
            text: '这是app.vue2233'
        }
    }
}
</script>
<style lang="less">
.app-warper{
    height: 100px;
    width: 100px;
    background-color: #fcc;
}
</style>