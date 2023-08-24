<template>
    <div id="box">
        <div style="width: 100%;">
            <div class="box">
                <div class="imgs">
                    <img src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png" alt="">
                </div>
                <div class="baidu">
                    <input type="text" v-model="text" v-on:focus="inputflog = true" v-on:blur="inputflog = false">
                    <button>百度一下</button>
                    <img src="https://img.icons8.com/?size=2x&id=4B1WzL23Hlut&format=png" alt="">
                </div>
                <ul v-show="inputflog">
                    <li v-for="(item, index) in list1" :key="index" @click="changetext(item)">
                        {{ item }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            inputflog: false,
            list1: [],
            text: ''
        }
    },
    created() {},
    methods: {
        // changetext(index) {
        //     console.log(index);
        //     this.$router.push({
        //         path: "MyXxyem"
        //     })
        // },

    },
    watch: {
        text: function (news) {
            console.log(news);
            this.$apiGet(`/api/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=${news}`).then((res) => {
                // console.log(res);
                let a = res .indexOf("["),b = res .indexOf("]")
                this.list1 = res.slice(a+1,b).replaceAll('"','') .split(",")
                console.log(this.list1);
            })
        }
    }
}
</script>
<style lang="less" scoped>
#box {
    width: 100%;
    height: 90vh;
    background: #fff;
    overflow: hidden;
}

.box {
    width: 658px;
    margin: 12% auto;

    .imgs {
        width: 100%;
        text-align: center;

        img {
            width: 320px;
            margin-bottom: 10px;
        }
    }

    .baidu {
        position: relative;

        input {
            width: 443px;
            height: 16px;
            padding: 12px 87px 12px 16px;
            border: 2px solid lightgray;
            border-radius: 10px 0 0 10px;
            vertical-align: middle;
            outline: none;
        }

        input:focus {
            border: 2px solid rgb(78, 110, 242);
        }

        button {
            width: 108px;
            height: 44px;
            border-radius: 0 10px 10px 0;
            vertical-align: middle;
            border: none;
            background-color: rgb(78, 110, 242);
            color: white;
            font-size: 18px;
        }

        img {
            width: 32px;
            position: absolute;
            top: 7px;
            right: 120px
        }
    }

    ul {
        width: 546px;
        list-style: none;
        border-radius: 0 0 11px 10px;
        border: 1px solid rgb(78, 110, 242);
        border-top: none;
        margin: -2px 1px;
        overflow: hidden;

        li {
            padding: 5px 8px;
            line-height: 25px;
        }

        li:hover {
            background-color: aliceblue;
        }
    }
}
</style>