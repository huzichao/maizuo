<template>
    <div id="app">
        <!-- 测试vant（用完即删） -->
        <!-- <van-cell title="选择单个日期" :value="date" @click="show = true" />
        <van-calendar v-model="show" @confirm="onConfirm" /> -->
        <router-view />
        <Footer v-show="isShow"></Footer>
    </div>
</template>
<script>

//导入底部导航
import Footer from '@/components/Navigation/Footer'
//导入uri地址，测试可否使用
// import uri from '@/config/uri'
//导入vant，测试用完即删
// import Vue from 'vue';
// import { Calendar, Cell } from 'vant';
// Vue.use(Calendar);
// Vue.use(Cell);

export default {
    data () {
        return {
            // isShow: true
        }
    },
    //注册组件
    components: {
        Footer,
    },
    // data () {
    //     return {
    //         date: '',
    //         show: false,
    //     };
    // },
    // methods: {
    //     formatDate (date) {
    //         return `${date.getMonth() + 1}/${date.getDate()}`;
    //     },
    //     onConfirm (date) {
    //         this.show = false;
    //         this.date = this.formatDate(date);
    //     },
    // },

    created () {
        //测试网络
        // this.$http.get(uri.getCities).then((ret) => console.log(ret))
        // console.log($store)
        // 开始监听show_jio事件
        // this.$eventBus.$on('show_jio', (flag) => {
        //     console.log(flag)
        //     this.isShow = flag
        // })
    },
    computed: {
        // 计算属性修改返回值
        isShow () {
            return this.$store.state.global.isShowFooter;
        }
    }

}
</script>


<style lang="scss" scoped>
* {
    color: black;
}
</style>
