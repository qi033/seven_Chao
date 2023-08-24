<template>
  <div>
    <div class="box1">
      <img src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png" alt="" class="imgs"><br>
    </div>
    <div class="box2">
      <input type="text" v-model="ipt" class="ipt1" @keyup="btn()"><button class="btn1" @click="btn1()">百度一下</button>
      <div class="box3">
        <p v-for="(item, index) in list" :key="index" @click="fun(index)">{{ item }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'  //引入axios
export default {
  data() {
    return {
      ipt: '',
      list: '',
    }
  },
  methods: {
    btn() {
      if (this.ipt != '') {
        axios.get("/api/su?wd=" + this.ipt).then(res => {
          var obj = res.data.replace('window.baidu.sug(', '')
          obj = obj.replace(');', '')
          var arr = eval('(' + obj + ')')
          this.list = arr.s
          console.log();
        })
      }
    },
    btn1() {
      if (this.ipt != "") {
        window.location.href = "http://www.baidu.com/s?wd=" + this.ipt
      }
    },
    fun(index) {
      this.ipt = this.list[index]
      window.location.href = "http://www.baidu.com/s?wd=" + this.ipt
    }
  },
}
</script>

<style scoped>
.box3 {
  width: 690px;
  clear: both;
  border: 1px solid #ccc;
  border-top: none;
  margin-left: 10px;
}

.imgs {
  width: 400px;
  border-radius: 50px;
  height: 150px;
  margin-left: -90px;
}

.btn1 {
  width: 100px;
  height: 44px;
  border: none;
  background: #4e6ef2;
  color: #fff;
  border-radius: 0 10px 10px 0;
  font-size: 17px;
  float: left;
}

.ipt1 {
  width: 700px;
  height: 40px;
  border: 2px solid rgb(201, 210, 216);
  border-radius: 10px 0 0 10px;
  border-right: none;
  float: left;
  outline: none;
}

p {
  padding: 5px;
  caret-color: transparent;
  cursor: default;
}

p:hover {
  background-color: #c0e2ff;
}

.box1 {
  width: 300px;
  margin: auto;
  margin-top: 50px;
}

.box2 {
  width: 850px;
  margin: auto;
}

.img1 {
  width: 250px;
}
</style>