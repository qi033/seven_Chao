<template>
    <div>
        <div id="editor"></div>
        <div class="box_son">{{ Mismatch }}</div>
        <button @click="add()">提交</button>
    </div>


    <!-- 

        日报:
        今日学习内容：复习vue  
        今日问题(已解决)
        今天作业(99%)

     -->
</template>
<script>
import E from "wangeditor"
export default {
    data() {
        return {
            editor: '',
            Mismatch: ''
        }
    },
    mounted() {
        this.editor = new E('#editor')
        this.editor.create()
    },
    methods: {
        add() {
            console.log(this.editor.txt.html());
            this.Mismatch = this.editor.txt.html();
        }
    },
}
</script>
<style lang="less" scoped>
#editor {
    margin-top: 20px;
}

.box_son {
    width: 100%;
    height: 40px;
    border: 1px solid #ccc;
    margin-top: 20px;
    margin-bottom: 10px;
}

button {
    height: 35px;
    background-color: cornflowerblue;
    width: 80px;
    border-radius: 5px;
    color: #fff;
    border: 1px solid cornflowerblue;
}
</style>