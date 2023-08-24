<template>
    <!-- 这是登录页面 -->
    <div id="logonBox">
        <div id="logonBox_son">
            <div id="logonBox_son_zuo"></div>
            <div id="logonBox_son_you">
                <!-- 切换图片 -->
                <div id="logonBox_son_you_img">
                    <img src="../../assets/denglu1.png" alt="" @click="oneimgdian" v-show="oneimg">
                    <img src="../../assets/denglu2.png" alt="" v-show="twoimg" @click="twoimgdian">
                </div>
                <!-- 切换下边大图片  这是登录盒子 -->
                <div id="logonBox_son_you_son" v-show="oneimgbox">
                    <h3>登录</h3>
                    账&nbsp;&nbsp;&nbsp;号：<input type="text" name="" id="" v-model="userName" placeholder="请输入您的账号"><br>
                    密&nbsp;&nbsp;&nbsp;码：<input type="text" name="" id="" v-model="password" placeholder="请输入您的密码"><br>
                    <div class="wocaoele">
                        验证码：<input type="text" name="" id="" v-model="vercode" placeholder="请输入您的验证码"><span
                            @click="changeCode">{{ this.code
                            }}</span>
                    </div>
                    <button @click="logondrop">登录</button>
                    <p @click="quzhuce" class="element">去注册</p>
                </div>
                <!-- 这是注册盒子 -->
                <div id="logonBox_son_you_son" v-show="zhuce">
                    <h3>注册</h3>
                    账&nbsp;&nbsp;&nbsp;号：<input type="text" name="" id="" v-model="name" placeholder="请输入您的账号"><br>
                    密&nbsp;&nbsp;&nbsp;码：<input type="text" name="" id="" v-model="pwd" placeholder="请输入您的密码"><br>
                    邮&nbsp;&nbsp;&nbsp;箱：<input type="email" name="" id="" required="required" v-model="emails"
                        placeholder="请输入您的邮箱"><br>
                    <button @click="registerdrop">注册</button>
                    <p @click="qudenglu" style="margin-top: 20px;" class="element">去登录</p>
                </div>
                <!-- 切换下边大图片 -->
                <div id="son_you_img" v-show="twoimgbox">
                    <img src="../../assets/denglu.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { getCode, postLogin, postRegister } from '../../api/http'
export default {
    data() {
        return {
            name: "",
            pwd: "",
            emails: "",
            //登录
            userName: "",
            password: "",
            vercode: "",
            code: '',
            //判断
            oneimg: true,
            twoimg: false,
            oneimgbox: true,
            twoimgbox: false, loginTime: null,
            zhuce: false,
        }
    },
    mounted() {
        this.changeCode()
    },

    methods: {

        //获取验证码
        changeCode() {
            getCode().then(value => {
                this.code = value.msg
            }, reason => {
                console.error(reason.message);
            })
        },
        //这是登录
        logondrop() {
            let name = this.userName
            let pwd = this.password
            let vercode = this.vercode
            if (name != '' && pwd != '' && vercode != '') {
                if (vercode == this.code) {
                    let obj = { name, pwd, vercode }
                    let shij = ''
                    const currentDate = new Date();
                    const year = currentDate.getFullYear();
                    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
                    const day = String(currentDate.getDate()).padStart(2, '0');
                    shij = `${year}-${month}-${day}`;
                    postLogin(obj).then(() => {
                        sessionStorage.setItem("Chao", shij);
                        alert("登录成功")
                        this.loginTime = Date.now();
                        this.$router.push('/BackPage')
                    }, reason => {
                        this.$message.error(reason.msg);
                    })
                } else {
                    this.$message({
                        type: 'error',
                        message: `请输入正确验证码`
                    });
                    this.vercode = ''
                }
            } else {
                this.$message({
                    type: 'warning',
                    message: `请完成所有输入框`
                });
            }
            console.log(2222);
        },

        //这是注册
        registerdrop() {
            if (!this.name || !this.pwd || !this.emails) {
                // 判断输入框是否为空
                this.$message({
                    type: 'warning',
                    message: `请完成所有输入框`
                });
                return; // 停止继续执行后续的代码
            }

            var obj = {
                name: this.name,
                pwd: this.pwd,
                emails: this.emails,
            };

            postRegister(obj)
                .then((res) => {
                    if (res.msg == "添加成功") {
                        alert("注册成功");
                        this.oneimgbox = !this.oneimgbox;
                        this.zhuce = !this.zhuce;
                        this.name = '';
                        this.pwd = '';
                        this.emails = '';
                    } else {
                        alert("注册失败，填写信息有误");
                    }
                })
                .catch((error) => {
                    console.error(error);
                });

            console.log(1111);
        },

        //显示隐藏
        oneimgdian() {
            this.oneimg = false
            this.oneimgbox = false
            this.twoimg = true
            this.twoimgbox = true
            this.zhuce = false

        },
        twoimgdian() {
            this.oneimg = true
            this.twoimg = false
            this.oneimgbox = true
            this.twoimgbox = false
            this.zhuce = false
        },
        qudenglu() {
            this.oneimgbox = true
            this.zhuce = false
            this.oneimg = true
            this.twoimg = false
        },
        quzhuce() {
            this.oneimgbox = false
            this.zhuce = true
            this.oneimg = false
            this.twoimg = false
        },
    }
}
</script>


<style lang="less" scoped>
#logonBox {
    width: 100%;
    height: 100vh;
    background: url(https://img1.baidu.com/it/u=2233534423,3397744798&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500) no-repeat;
    background-size: 100% 100%;
}

#logonBox_son {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 800px;
    height: 400px;
    background-color: #fff;
    display: flex;

    #logonBox_son_zuo {
        width: 50%;
        height: 100%;
        background: url(https://img2.baidu.com/it/u=2699507952,2818445497&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500) no-repeat;
        background-size: 100% 100%;
    }

    #logonBox_son_you {
        width: 50%;
        height: 100%;

        #logonBox_son_you_img {
            position: absolute;
            top: 1px;
            right: 1px;

            img {
                width: 50px;
                height: 50px;
            }
        }

        #son_you_img {
            position: absolute;
            top: 10%;
            margin-left: 50px;

            img {
                width: 300px;
                height: 300px;
            }
        }

        #logonBox_son_you_son:hover {
            cursor: pointer;
        }

        #logonBox_son_you_son {


            .wocaoele {
                display: flex;

                input {
                    width: 170px;
                    margin-top: 15px;
                }

                span {
                    width: 69px;
                    height: 39px;
                    line-height: 40px;
                    text-align: center;
                    color: #fff;
                    background-color: cadetblue;
                    color: #FFFF;
                    margin-top: 15px;
                }
            }

            width: 80%;
            margin: auto;
            height: 100%;
            height: 350px;
            margin-top: 25px;

            p {
                float: right;
                margin-top: 20px;
            }

            h3 {
                font-size: 35px;
                text-align: center;

                background: linear-gradient(to right, #154962, #2cb6dc);
                background-clip: text;
                -webkit-background-clip: text;
                /* 兼容一些旧版浏览器 */
                color: transparent;
            }

            line-height: 60px;

            input {
                width: 240px;
                height: 35px;
            }

            button {
                background-color: #3485FB;
                width: 240px;
                height: 40px;
                color: #fff;
                border: 1px solid #3485FB;
                border-radius: 5px;
                margin-left: 60px;
            }
        }
    }
}

@keyframes colorAnimation {
    0% {
        color: red;
    }

    50% {
        color: purple;
    }

    100% {
        color: blue;
    }
}

.element {
    animation: colorAnimation 3s infinite;
}

.element:hover {
    animation: colorAnimation 3s infinite;
}
</style>