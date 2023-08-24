<template>
    <!-- 这是后台页面 -->
    <div id="BackPage_box">
        <el-container>
            <el-header>
                <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
                    background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                    <el-menu-item index="1">处理中心</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">我的工作台</template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                        <el-menu-item index="2-3">选项3</el-menu-item>
                        <el-submenu index="2-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="2-4-1">选项1</el-menu-item>
                            <el-menu-item index="2-4-2">选项2</el-menu-item>
                            <el-menu-item index="2-4-3">选项3</el-menu-item>
                        </el-submenu>

                    </el-submenu>
                    <el-menu-item index="3" disabled>消息中心</el-menu-item>
                    <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
                    <div class="youbianbox">
                        <el-submenu index="2-4">
                            <template slot="title">
                                <img src="../../assets/yemianimg/设置.png" alt="" class="tupian">
                            </template>
                            <el-menu-item index="2-4-1" @click="tuichu">切换账号</el-menu-item>
                            <el-menu-item index="2-4-2" @click="tuichu">退出登录</el-menu-item>
                        </el-submenu>
                    </div>
                </el-menu>
            </el-header>
            <el-container>
                <el-aside style="width: 200px">
                    <div id="BackPage_box_left">
                        <el-row class="tac">
                            <el-col :span="24">
                                <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen"
                                    @close="handleClose" background-color="#545c64" text-color="#fff"
                                    active-text-color="#ffd04b">
                                    <router-link to="/PipePage" tag="li" active-class="red"
                                        style="color: #fff;height: 50px;line-height: 50px; margin-bottom: 5px;">
                                        页 面</router-link>
                                    <el-submenu index="1-2">
                                        <template slot="title">管理</template>
                                        <el-menu-item index="1-2-1">
                                            <router-link to="/ManAge" tag="li">
                                                人物管理</router-link>
                                        </el-menu-item>
                                        <el-menu-item index="1-2-2">
                                            <router-link to="/ExpAnd" tag="li">
                                                拓展管理</router-link>
                                        </el-menu-item>
                                        <el-menu-item index="1-2-3">
                                            <router-link to="/baiDu" tag="li">
                                                百度管理</router-link>
                                        </el-menu-item>
                                    </el-submenu>
                                </el-menu>
                            </el-col>
                        </el-row>
                    </div>
                </el-aside>
                <el-main>
                    <div id="BackPage_box_right">
                        <router-view></router-view>
                    </div>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
export default {
    data() {
        return {
            activeIndex: '1',
            activeIndex2: '1'
        };
    },
    methods: {
        tuichu() {
            if (confirm("确定要退出吗？")) {
                this.$router.push("/logon");
                sessionStorage.clear()
            }
        },
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    },
};
</script>
<style lang="less" scoped>
.youbianbox {
    float: right;
}

.tupian {
    width: 40px;
    height: 40px;
}

.red {
    background-color: cornflowerblue;
}

//左边
#BackPage_box_left {
    height: 100%;
    width: 100%;
}

//右边
#BackPage_box_right {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
}

#BackPage_box_right::-webkit-scrollbar {
    display: none;
}

.el-header {
    padding: 0px;
}

.el-menu-demo {


    width: 100%;
}

.el-container {
    width: 100%;
    height: 100vh;
}

.el-header,
.el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
}

.el-aside {
    width: 20%;
    background-color: #d3dce6;
    color: #333;
    text-align: center;
}

.el-main {
    background-color: #e9eef3;
    color: #333;
}
</style>
