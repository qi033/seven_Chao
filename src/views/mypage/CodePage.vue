<template>
    <div></div>
</template>
<script>
import md5 from 'md5';
import axios from 'axios';
export default {
    data() {
        return {
            nams: '9999',
            role: '0000',
            jieguo: ''
        }
    },
    methods: {},

    created() {
        let res = md5(this.nams + this.role + 'nbsp123ok' + 12)
        let obj = {
            name: this.nams,
            role: this.role,
            sign: res
        }
        axios.post('http://47.94.4.201/index.php/index/callcenter/getheaders', obj, {

            headers: {
                'strheader': '12',
            }
        })
            .then(response => {
                this.jieguo = response.data
            })
            .catch(error => {
                console.error(error);
            });
        console.log(obj);

    }
}
</script>
<style lang="less" scoped></style>