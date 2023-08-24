<template>
    <!-- 这是管理后台页面 -->
    <div id="manage_box">
        <div id="box">
            <div id="boxtop">
                <input type="text" name="" id="" placeholder="请输入相关类型" @keyup="searchfun()" v-model="search"> <button
                    @click="added">新增人物</button>
            </div>
            <table border="1" cellspacing="0">
                <thead>
                    <tr>
                        <th>头像</th>
                        <th>名字</th>
                        <th>年龄</th>
                        <th style="width: 320px;">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in flag ? newarr : tabulation" :class="index % 2 == 0 ? 'bianshe' : 'bianshe1'"
                        :key="index">
                        <th>
                            <img :src="item.image" alt="" />
                        </th>
                        <th>{{ item.name }}</th>
                        <th>{{ item.age }}</th>
                        <th>
                            <button @click="bianji(index)">编辑人物</button>
                            <button @click="deleteNews(index)">删除人物</button>
                            <button @click="views(index)">查看人物</button>
                        </th>
                    </tr>
                </tbody>
            </table>
            <!-- 弹出框 -->
            <div id="forms" v-if="isShowPopup">
                <div id="topboximg">
                    <span v-show="toxiangyin" style="margin-top: 20px;">头像：</span>
                    <div v-html="image" v-show="toxiangyin"></div>
                </div>
                <span v-show="twoimg">头像:</span> <input type="text" v-model="image" v-show="twoimg" /> <br />
                姓名:<input type="text" v-model="name" id="wocaoq" /> <br />
                年龄:<input type="text" v-model="age" /> <br />
                <button @click="addItem" v-show="guancha">{{ increase }}</button>
                <button @click="closebox">{{ close }}</button>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            twoimg: true,
            toxiangyin: true,

            increase: "添加",
            close: "关闭",
            guancha: true,
            isShowPopup: false, //关闭添加box
            name: "",
            age: "",
            search: "",
            flag: false,
            add: '',
            image: "",
            tabulation: [
                {
                    name: "小明",
                    age: "18",
                    image:
                        "https://img2.baidu.com/it/u=2413252534,3914017304&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                },
                {
                    age: "28",
                    name: "小美",
                    image:
                        "https://img1.baidu.com/it/u=2104662631,3018865509&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1690477200&t=189c27068f1f8b333af0ac78e0e25f2c",
                },
                {
                    age: "20",
                    name: "小红",
                    image:
                        "https://img0.baidu.com/it/u=4151108596,3054451010&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1690477200&t=a0f85b26254a3d89b2e52e546c934f66",
                },
                {
                    age: "25",
                    name: "小奶",
                    image:
                        "https://img0.baidu.com/it/u=3354213321,3716446572&fm=253&fmt=auto&app=138&f=JPEG?w=503&h=500",
                },
            ],
        }
    },
    methods: {
        closebox() {
            this.isShowPopup = false
        },
        added() {
            this.isShowPopup = true
            this.guancha = true
            this.close = '取消添加';
            this.increase = '添加'
            this.name = ""
            this.image = ""
            this.age = ""
            this.twoimg = true
            this.toxiangyin = false

        },
        // 删除
        deleteNews(index) {
            if (confirm("确定删除吗")) {
                this.tabulation.splice(index, 1);
            }
        },
        // 编辑
        bianji(index) {
            this.twoimg = true,
                this.guancha = true
            this.toxiangyin = false,
                this.increase = '确认修改'
            this.close = '取消修改'
            this.add = index
            this.isShowPopup = true,
                (this.name = this.tabulation[index].name),
                (this.age = this.tabulation[index].age),
                (this.image = this.tabulation[index].image)
        },
        // 添加
        addItem() {
            if (this.increase == '添加') {
                if (this.name && this.age && this.image) {
                    this.tabulation.push({
                        name: this.name,
                        age: this.age,
                        image: this.image,
                    });
                    console.log(this.tabulation)

                }
            } else {
                this.tabulation[this.add].name = this.name;
                this.tabulation[this.add].age = this.age;
                this.tabulation[this.add].image = this.image;
                this.isShowPopup = false

            }
        },
        // 搜索
        searchfun() {
            if (this.search != "") {
                this.flag = true;
                this.newarr = this.tabulation.filter((item) => {
                    if (item.name.includes(this.search)) {
                        return item;
                    }
                });
            } else {
                this.flag = false;
            }
        },
        // 查看
        views(index) {
            this.twoimg = false,
                this.toxiangyin = true,
                this.guancha = false
            this.isShowPopup = true
            this.close = '取消查看';
            (this.name = this.tabulation[index].name),
                (this.age = this.tabulation[index].age),
                this.image = `<img src="${this.tabulation[index].image}" alt="${this.tabulation[index].name}的照片" style="max-width: 50px; max-height: 50px;">`;
            // (this.image = this.tabulation[index].image)  
        },

    }
}
</script>
<style lang="less" scoped>
img {
    width: 40px;
    border-radius: 5px;
    height: 40px;
}

#box {
    width: 100%;
    margin: auto;
}

table thead tr {
    height: 40px;
    background-color: aliceblue;
}

table tbody tr {
    height: 55px;
}

table {
    width: 80%;
    margin: auto;
}

#forms button {
    width: 70px;
    height: 35px;
    background-color: cornflowerblue;
    border: 1px solid cornflowerblue;
    margin-left: 10px;
    border-radius: 10px;
    margin-top: 15px;
    color: #fff;
}

button {
    width: 70px;
    height: 35px;
    background-color: cornflowerblue;
    border: 1px solid cornflowerblue;
    margin-left: 10px;
    border-radius: 10px;
    color: #fff;
}

button:nth-child(2) {
    background-color: crimson;
    border: 1px solid crimson;
}

button:nth-child(3) {
    border: 1px solid rgb(143, 239, 47);
    background-color: rgb(143, 239, 47);
}

input {
    width: 370px;
    height: 35px;
}

#boxtop {
    width: 80%;
    margin: auto;
    justify-content: space-between;
    display: flex;
    margin-bottom: 10px;

    button {
        margin-top: 15px;
    }
}

#forms {
    padding: 5px;
    height: 240px;
    color: #fff;
    border-radius: 5px;
    width: 420px;
    background-color: darkslateblue;
    text-align: center;
    /* line-height: 60px; */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    img {
        width: 20px;
        height: 20px;
    }
}

input:focus {
    box-shadow: 2px 2px 20px 3px #fbc2eb !important;
    outline-style: none !important;
    box-shadow: 0 2px 5px #b5c9ec81, 0 0 6px #b5c9ec81 !important;
}

input {
    margin-top: 15px;
    outline-style: none !important;
}

#topboximg {
    display: flex;
    /* margin-top: 120px; */
}

#topboximg img {
    margin-top: 10px;
}

.bianshe {
    background-color: #fbc2eb;
}

.bianshe1 {
    background-color: #86f6ed;
}

.quanxuan {
    width: 20px;
    height: 20px;
}


#manage_box {
    width: 100%;
    height: 100%;
}
</style>