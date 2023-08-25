<template>
    <div id="PipeBox">
        <div id="PipeBox_top">
            <div id="PipeBox_top_zuo">
                <div id="PipeBox_top_zuo_top">
                    <div id="BackendBoxtoplefttop">
                        <div id="BackendBoxtoplefttop_img">
                            <img src="https://img2.baidu.com/it/u=2229997024,3339657040&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                                alt="" />
                            <p>beauty<br /><span>管理</span></p>
                        </div>
                        <div id="BackendBoxtoplefttop_xian"></div>
                        <div id="BackendBoxtoplefttop_bottom">
                            <p>上次登录时间:</p>
                            <span>{{ formatLoginTime }}</span>
                            <br />
                            <p>上次登录时间:</p>
                            <span>河南</span>
                        </div>
                    </div>
                </div>
                <div id="PipeBox_top_zuo_btn">
                    <div class="PipeBox_top_zuo_btn_wenzi">语言详情</div>
                    <p>Vue</p>
                    <el-progress :percentage="this.numberlink.vuenum" color="#42B983"></el-progress>
                    <p>JavaScript</p>
                    <el-progress :percentage="this.numberlink.jsnum" color="#F1E05A"></el-progress>
                    <p>css</p>
                    <el-progress :percentage="this.numberlink.cssnum" color="#409EFF"></el-progress>
                    <p>HTML</p>
                    <el-progress :percentage="this.numberlink.htmlnum" color=" #F56C6C"></el-progress>
                </div>
            </div>
            <div id="PipeBox_top_you">
                <div id="PipeBox_top_you_top">
                    <div class="PipeBox_top_you_top_son">
                        <div class="you_top_son_img">
                            <img src="../../assets/yemianimg/我的-copy.png" alt="">
                        </div>
                        <div class="you_top_son_wenzi">
                            <b>{{ strip[0] ? strip[0].num : '' }}</b>
                            <p>{{ strip[0] ? strip[0].str : '' }}</p>
                        </div>
                    </div>
                    <div class="PipeBox_top_you_top_son">
                        <div class="you_top_son_img">
                            <img src="../../assets/yemianimg/铃铛.png" alt="">
                        </div>
                        <div class="you_top_son_wenzi">
                            <b>{{ strip[1] ? strip[1].num : '' }}</b>
                            <p>{{ strip[1] ? strip[1].str : '' }}</p>
                        </div>
                    </div>
                    <div class="PipeBox_top_you_top_son">
                        <div class="you_top_son_img">
                            <img src="../../assets/yemianimg/包包.png" alt="">
                        </div>
                        <div class="you_top_son_wenzi">
                            <b>{{ strip[2] ? strip[2].num : '' }}</b>
                            <p>{{ strip[2] ? strip[2].str : '' }}</p>
                        </div>
                    </div>
                </div>
                <div id="PipeBox_top_you_btn">
                    <div class="PipeBox_top_you_btn_wenzi">
                        <p>待办事项</p> <span>添加</span>
                    </div>
                    <div class="PipeBox_top_you_btn_ulli">
                        <div id="BackendBoxtopright_bottomdealt">
                            <ul v-for="(i, n) in dealt" :key="n">
                                <li>&nbsp;<input type="checkbox" v-model="selectinp[n]" id="" @click="det(n)">
                                    <p ref="ess">{{ i }}</p>
                                    <span><i class="el-icon-edit"></i><i class="el-icon-delete"></i></span>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 底部 -->
        <div id="PipeBox_btn">
            <div id="PipeBox_btn_zuo"></div>
            <div id="PipeBox_btn_you"></div>
        </div>
    </div>
</template>
<script>
import { postProgress, postNumber, postHandled, postEhart } from '../../api/http'
export default {
    data() {
        return {
            formatLoginTime: '',
            //第一个echarts
            option: {
                title: {
                    show: true,
                    text: "最近一周各品类销售图"
                },
                xAxis: {
                    type: 'category',
                    data: [],
                    axisLabel: {
                        interval: 0,
                        rotate: 30
                    }
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [],
                        type: 'bar'
                    }
                ]
            },
            //第二个echarts
            optiontwo: {
                title: {
                    show: true,
                    text: "近一个月各品类销售趋势"
                },
                xAxis: {
                    type: 'category',
                    data: [],
                    axisLabel: {
                        interval: 0,
                        rotate: 30
                    }
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [],
                        type: 'line'
                    }
                ]
            },
            numberlink: {},
            strip: {},
            dealt: [],
            selectinp: [
                false,
                false,
                false,
                false,
                false,
                false,
            ],
            echarts: {},
        }
    },

    mounted() {
        this.zhuzhuangtu1()
        this.zhexiantu1()
    },
    created() {
        this.hqsj()
        //进度条
        postProgress().then(res => {
            this.numberlink = res.data
        })
        //进度
        postNumber().then(res => {
            this.strip = res.data
        })
        //待办事项
        postHandled().then(res => {
            this.dealt = res.data
            console.log(this.dealt);
        })
        //echarts
        postEhart().then(res => {
            this.option.xAxis.data = res.data.arr
            this.option.series[0].data = res.data.list
            this.optiontwo.xAxis.data = res.data.arr
            this.optiontwo.series[0].data = res.data.list
        })
    },
    methods: {
        hqsj() {
            let i = sessionStorage.getItem('Chao');
            this.formatLoginTime = i
            console.log(this.shijian);
        },
        zhuzhuangtu1() {
            setTimeout(() => {
                var myChart = this.$echarts.init(document.getElementById('PipeBox_btn_zuo'));
                myChart.setOption(this.option);
            }, 1000)
        },
        zhexiantu1() {
            setTimeout(() => {
                var myChart = this.$echarts.init(document.getElementById('PipeBox_btn_you'));
                myChart.setOption(this.optiontwo);
            }, 1000)
        },

        //点击删除线
        det(n) {
            console.log(n);
            if (this.selectinp[n] == false) {
                this.$refs.ess[n].style = "text-decoration-line: line-through;color: #ddd;"
                // this.$refs.ess[n].style = "color: #ddd;"
            } else {
                this.$refs.ess[n].style = "text-decoration-line:;"
            }
        },
    }
}
</script>
<style lang="less" scoped>
#PipeBox {
    width: 100%;
    height: 100%;
}



//底部
#PipeBox_btn {
    margin-top: 30px;
    width: 100%;
    height: 265px;
    display: flex;
    justify-content: space-between;

    #PipeBox_btn_zuo {
        width: 58%;
        background-color: #fff;

        border-radius: 4px;

        height: 100%;
    }

    #PipeBox_btn_you {
        width: 40%;
        border-radius: 4px;
        background-color: #fff;
        height: 100%;
    }
}

ul li {
    list-style: none;
}



#PipeBox_top {
    width: 100%;
    height: 440px;
    display: flex;

    justify-content: space-between;

    #PipeBox_top_zuo {
        width: 30%;
        height: 100%;

        #PipeBox_top_zuo_top {
            background-color: #fff;
            width: 100%;
            height: 195px;
            padding: 5px;

            border-radius: 4px;

            //头部
            #BackendBoxtoplefttop {
                width: 100%;
                height: 200px;
                // background-color: pink;
                background-color: #fff;
                border-radius: 5px;
                // margin-top: 15px;

                #BackendBoxtoplefttop_bottom p {
                    margin-left: 15px;
                    display: inline-block;
                    color: #ccc;
                    line-height: 30px;
                }

                #BackendBoxtoplefttop_bottom span {
                    margin-left: 80px;
                    color: #ccc;
                }

                #BackendBoxtoplefttop_xian {
                    width: 90%;
                    margin: auto;
                    margin-top: 10px;
                    margin-bottom: 5px;
                    border-bottom: 1.5px solid #ccc;
                }

                #BackendBoxtoplefttop_img {
                    display: flex;
                    justify-content: space-around;
                }

                #BackendBoxtoplefttop_img span {
                    color: #cccccc;
                }

                #BackendBoxtoplefttop_img p {
                    margin-right: 145px;
                    padding-top: 40px;
                }

                #BackendBoxtoplefttop_img img {
                    width: 100px;
                    height: 100px;
                    margin-top: 15px;
                    border-radius: 50%;
                }
            }
        }

        #PipeBox_top_zuo_btn {
            background-color: #fff;
            width: 100%;
            height: 205px;
            margin-top: 20px;
            line-height: 25px;
            font-size: 13px;
            border-radius: 4px;
            padding: 5px;

            .PipeBox_top_zuo_btn_wenzi {
                padding: 10px;
                width: 100%;
                font-size: 15px;
                border-bottom: 1px solid #ddd;
            }
        }
    }



    #PipeBox_top_you {
        width: 68%;
        height: 100%;

        #PipeBox_top_you_btn {
            width: 100%;
            height: 320px;
            background-color: #fff;
            border-radius: 4px;



            .PipeBox_top_you_btn_ulli {
                #BackendBoxtopright_bottomdealt {
                    width: 100%;
                    height: 264px;
                    margin-top: 10px;
                    border-radius: 0px 0px 5px 5px;
                }

                #BackendBoxtopright_bottomdealt ul li input {
                    margin-right: 20px;
                }

                #BackendBoxtopright_bottomdealt ul li span {
                    float: right;
                }

                #BackendBoxtopright_bottomdealt p {
                    display: inline-block;
                }

                #BackendBoxtopright_bottomdealt ul li {
                    width: 95%;
                    margin: auto;
                    line-height: 35px;
                    padding-bottom: 5px;
                    border-bottom: 1px solid #ddd;
                    color: #000;
                }
            }



            .PipeBox_top_you_btn_wenzi {
                display: flex;
                justify-content: space-between;
                width: 100%;
                height: 55px;
                line-height: 55px;
                // padding-left: 10px;
                border-bottom: 1px solid #ddd;

                p {
                    margin-left: 10px;
                }

                span {
                    margin-right: 10px;
                    color: #2D8CF0;
                }
            }
        }


        #PipeBox_top_you_top {
            width: 100%;
            height: 120px;
            display: flex;
            justify-content: space-between;

            .PipeBox_top_you_top_son {
                width: 32%;
                border-radius: 4px;

                height: 100px;
                background-color: #fff;
                display: flex;

                .you_top_son_wenzi {
                    width: 200px;
                    text-align: center;

                    b {
                        font-weight: 900;
                        font-size: 14px;
                        color: #2D8CF0;
                    }

                    p {
                        font-size: 14px;
                        color: #999999;
                    }

                    margin-top: 25px;
                }

                .you_top_son_img {
                    border-radius: 4px 0px 0px 4px;
                    width: 120px;
                    height: 100%;
                    text-align: center;
                    line-height: 150px;
                    background-color: #2D8CF0;
                }



                img {
                    height: 60px;
                    width: 60px;
                }

            }

        }
    }
}

#PipeBox_top_you_top .PipeBox_top_you_top_son:nth-child(1) .you_top_son_img {
    background-color: #2D8CF0 !important;
}

#PipeBox_top_you_top .PipeBox_top_you_top_son:nth-child(1):hover .you_top_son_img {
    background-color: #2d8bf0eb !important;
}

#PipeBox_top_you_top .PipeBox_top_you_top_son:nth-child(2) .you_top_son_img {
    background-color: #64D572 !important;
}

#PipeBox_top_you_top .PipeBox_top_you_top_son:nth-child(3) .you_top_son_img {
    background-color: #F25E43 !important;
}

#PipeBox_top_you_top .PipeBox_top_you_top_son:nth-child(2):hover .you_top_son_img {
    background-color: #64d571e2 !important;
}

#PipeBox_top_you_top .PipeBox_top_you_top_son:nth-child(3):hover .you_top_son_img {
    background-color: #f25d43e3 !important;
}
</style>