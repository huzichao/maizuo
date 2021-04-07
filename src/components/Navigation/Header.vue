<template>
    <div :class="{header:isSticky}">
        <van-tabs v-model="active" line-width="60px" @click="onClick">
            <van-tab title="正在热映"></van-tab>
            <van-tab title="即将上映"></van-tab>
        </van-tabs>
    </div>
</template>

<script>

//导入vant需要的组件
import Vue from 'vue';
import { Tab, Tabs } from 'vant';
Vue.use(Tab);
Vue.use(Tabs);


export default {
    data () {
        return {
            active: 0,
            urls: ["/films/nowPlaying", "/films/comingSoon"],
            //用于控制是否显示头部信息
            isSticky: false,
        }
    },
    created () {
        this.active = this.urls.indexOf(this.$route.path)
    },
    mounted () {
        window.addEventListener("scroll", () => {
            let scrollHeight = document.documentElement.scrollTop;
            // console.log(scrollHeight);
            if (scrollHeight >= 150) {
                this.isSticky = true;
            } else {
                this.isSticky = false;
            }
        })
    },
    methods: {
        onClick (index) {
            this.$router.push(this.urls[index])
        },
    },
};
</script>

<style lang="scss" scoped>
.header {
    position: fixed;
    z-index: 999;
    width: 100%;
}
</style>
