<template>
    <div class="app-warper">
        <home
            :text="text"
        />
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Home from './views/home/home.vue'

@Component({
    components: {
        Home
    }
})
export default class App extends Vue {
    text = 1234
}
</script>
<style lang="less">
.app-warper{
    height: 100px;
    width: 100px;
    background-color: #fcc;
}
</style>