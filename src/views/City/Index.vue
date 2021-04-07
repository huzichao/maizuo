<template>
    <!-- <div>
        <van-index-bar :index-list="indexList">
            <div v-for="(item,index) in dataList" :key="index">
                <van-index-anchor index="index">{{item.title}}</van-index-anchor>
                <van-cell v-for="city in item.data" :title="city.name" :key="city.cityId" />
            </div>
        </van-index-bar>
    </div> -->
    <div>
        <van-index-bar :index-list="indexList">
            <template v-for="(item, index) in dataList">
                <!-- index为索引，item为城市信息集合 -->
                <van-index-anchor :index="index" :key="index">{{
                    item.title
                }}</van-index-anchor>
                <!-- item.data就是城市信息 -->
                <van-cell v-for="city in item.data" :key="city.cityId" :title="city.name"
                    @click="changeCity(city.cityId)" />
            </template>
        </van-index-bar>
    </div>
</template>

<script>

// 引入vant
import Vue from 'vue';
import { IndexBar, IndexAnchor, Cell } from 'vant';
Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Cell);

// 导入请求地址模块
import uri from '@/config/uri'

export default {
    data () {
        return {
            // 右侧索引
            indexList: [],
            // 左侧数据
            dataList: [],
            // 临时储存26个英文字母
            charList: [],
        };
    },
    created () {
        this.$store.commit("global/setFooter", false)
        // 发送城市地址请求
        this.$http.get(uri.getCities).then((res) => {
            // console.log(res)
            if (status == 0) {
                console.log('请求成功')
                for (var i = 65; i <= 90; i++) {
                    this.charList.push(String.fromCharCode(i))
                }
                // console.log(this.charList)
                // 城市拼音首字母和字母最比较，有则留下
                // this.charList.forEach((el) => {
                //     res.data.cities.forEach((item) => {
                //         if (el.toLowerCase() == item.pinyin.substr(0, 1)) {
                //             if (!this.indexList.includes(el)) {
                //                 console.log(el)
                //                 this.indexList.push(el)
                //             }
                //         }
                //     })
                // })

                this.charList.forEach((el) => {
                    let tmp = res.data.cities.filter(
                        (item) => el.toLowerCase() == item.pinyin.substr(0, 1)
                    )
                    // console.log(tmp)
                    if (tmp.length > 0) {
                        this.indexList.push(el)
                        this.dataList.push({
                            title: el,
                            data: tmp
                        })
                    }
                })
                // console.log(this.dataList)
            }
        })
    },
    beforeDestroy () {
        this.$store.commit("global/setFooter", true)
    }
};
</script>

<style lang="scss" scoped>
</style>
