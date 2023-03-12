<template>
    <div class="app-warper">
        <home
            :text="text"
        />
    </div>
</template>
<script>
export default {
    data(){
        return {
            text: '123123'
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