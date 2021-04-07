<template>
    <div>
        <!-- 用于显示图片 -->

        <div class="top_img">
            <img v-lazy="filmInfo.poster" width="100%" />
        </div>
        <!-- 用于显示电影详情 -->
        <div class="film_info">
            <div>{{ filmInfo.name }}</div>
            <div>{{ filmInfo.category }}</div>
            <div>{{ filmInfo.premiereAt | parsePermiereAt }} 上映</div>
            <div>{{ filmInfo.nation }} | {{ filmInfo.runtime }} 分钟</div>
            <div>{{ filmInfo.synopsis }}</div>
        </div>
        <!-- 用于显示演员详情 -->
        <div>
            <Actors :key="filmInfo.actors.length">
                <div class="swiper-slide" v-for="(item,index) in filmInfo.actors" :key="index" style="width :85px"><img
                        :src="item.avatarAddress" width="85" alt=""></div>
            </Actors>
        </div>
        <!-- 用于显示剧照 -->
        <div></div>
    </div>
</template>

<script>

// 导入演职人员的组件
import Actors from "@/views/Films/Actors";

// 导入地址模块
import uri from "@/config/uri"
// 导入vant
import Vue from 'vue';
import { Toast } from 'vant';
Vue.use(Toast);

// 配置当前图片的懒加载
import VueLazyload from 'vue-lazyload';

// 导入moment
import moment from "moment";

// 导入映射系列方法
import { mapMutations } from "vuex";

Vue.use(VueLazyload, {
    // loading用于配置懒加载时需要用的图片
    loading: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fa0.att.hudong.com%2F30%2F29%2F01300000201438121627296084016.jpg&refer=http%3A%2F%2Fa0.att.hudong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1618152025&t=9b1f4625ce2614e069de9c9096e7de0e",
});

export default {
    data () {
        return {
            filmInfo: {
                actors: []
            }
        }
    },
    methods: {
        ...mapMutations("global", ["setFooter"])
    },
    // 注册组件
    components: {
        Actors,
    },
    filters: {
        parsePermiereAt (timestamp) {
            return moment(timestamp * 1000).format("YYYY-MM-DD")
        }
    },
    created () {
        this.$http.get(uri.getDetail + "?filmId=" + this.$route.params.filmId).then((res) => {
            // console.log(res)
            if (res.status == 0) {
                // 请求成功
                this.filmInfo = res.data.film
            } else {
                Toast.fail("网络繁忙！")
            }
        })
        // 进入是app隐藏底部导航(emit)
        // this.$eventBus.$emit('show_jio', false)
        this.setFooter(false)
    },
    beforeDestroy () {
        // 离开时通知app显示底部导航
        // this.$eventBus.$emit('show_jio', true)
        this.setFooter(true)

    },
};
</script>

<style lang="scss" scoped>
.top_img {
    width: 100%;
    height: 210px;
    position: relative;
    overflow: hidden;
    top: 0;
}
.top_img img {
    position: absolute;
    top: -70%;
}

.film_info {
    font-size: 13px;
    color: #797d82;
    margin-top: 4px;
}
</style>
