<template>
    <div id="ExpAnd_box">
        <div ref="editor" class="ExpAnd"></div>
        <button @click="tijiao">提交</button>
        <div class="anotherBox">{{ content }}</div>
    </div>
</template>

<script>
import WangEditor from 'wangeditor';

export default {
    data() {
        return {
            content: '',
            editor: null
        }
    },
    mounted() {
        const editor = new WangEditor('.ExpAnd'); // 根据实际情况选择选择器
        editor.create();
        this.editor = editor;
    },
    methods: {
        initEditor() {
            const editor = new WangEditor(this.$refs.editor);
            editor.create();
            this.editor.txt.on('change', () => {
                this.content = this.editor.txt.html(); // 更新内容
            });
        },
        tijiao() {
            console.log(this.content);
        },
    }
};
</script>

<style lang="less" scoped>
.ExpAnd {
    margin-top: 20px;
}

button {
    width: 100px;
    height: 40px;
    background-color: cornflowerblue;
    color: #fff;
    border: 1px solid cornflowerblue;
}

.anotherBox {
    margin-top: 20px;
    border: 1px solid #ccc;
    padding: 10px;
}
</style>
