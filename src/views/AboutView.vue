<template>
  <div class="about">
    <input type="file" ref="fileInput" @change="handleFileChange" />
    <br><br>
    <div class="box">
      头像:<img style="width: 50px;height: 50px;" :src="imageUrl" alt="" v-if="imageUrl">
      <br>
      名字:<el-input v-model="names" class="el-input" placeholder="请输入内容"></el-input><br><br>
      ID:<el-input v-model="userid" class="el-input" placeholder="请输入id"></el-input><br><br>
      性别:<el-radio v-model="sex" label="0">男</el-radio>
      <el-radio v-model="sex" label="1">女</el-radio><br><br>
      手机号:<el-input v-model="iphone" class="el-input" placeholder="请输入电话"></el-input><br><br>
      <textarea name="" id="" v-model="mydes" cols="30" rows="10"></textarea><br><br>
      <el-button type="primary" @click="add()">确定添加</el-button>
      <el-button @click="qu()">取消添加</el-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import md5 from 'js-md5';

import { tagonPost1, tagonPost2 } from '../api/http'
export default {

  data() {
    return {
      name: "111",
      role: "222",
      str: "nbsp123ok",
      imageFile: null,
      names: '',
      userid: '',
      sex: 1,
      iphone: '',
      mydes: '',
      imageUrl: '',

    };
  },

  mounted() {
    this.api()

  },

  methods: {

    api() {
      let box = {
        name: this.name,
        role: this.role,
        sign: md5(this.name + this.role + this.str + '333333')
      }
      console.log(box, '11111')
      tagonPost1(box).then(res => {
        console.log(res)
      })

    },
    handleFileChange(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64Data = e.target.result;
        const formData = new FormData();
        formData.append('imgurl', base64Data);
        axios.post('https://www.zzgoodqc.cn/index.php/index/upload/uploadimg', formData)
          .then(res => {
            const imagePath = res.data.data.url;
            // 拼接接口域名或IP
            this.imageUrl = `https://www.zzgoodqc.cn/${imagePath}`;
            console.log(res.data);
          })
          .catch(error => {
            console.error(error);
            // 根据需要处理错误
          });
      }
      reader.readAsDataURL(file);
    },
    add() {
      let arr = {
        name: this.names,
        userid: this.userid,
        sex: this.sex,
        iphone: this.iphone,
        mydes: this.mydes
      }
      tagonPost2(arr).then(res => {
        console.log(res);
      })
      console.log("用户名", this.names);
      console.log("userid", this.userid);
      console.log("性别", this.sex);
      console.log("手机号", this.iphone);
      console.log("描述", this.mydes);
      console.log("图片", this.imageUrl);

    },
    qu() {
      this.names = this.userid = this.sex = this.iphone = this.mydes = ''
    }
  },
  computed: {
    fullImageUrl() {
      return this.imageUrl;
    }
  },
}
</script>

<style scoped>
.box {
  width: 500px;
  height: 500px;
  border: 1px solid black;
  margin: auto;
}

.el-input {
  width: 300px;
}
</style>  