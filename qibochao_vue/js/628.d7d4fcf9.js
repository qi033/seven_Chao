(self["webpackChunkprojectchao"]=self["webpackChunkprojectchao"]||[]).push([[628],{8628:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"about"},[t("input",{ref:"fileInput",attrs:{type:"file"},on:{change:e.handleFileChange}}),t("br"),t("br"),t("div",{staticClass:"box"},[e._v(" 头像:"),e.imageUrl?t("img",{staticStyle:{width:"50px",height:"50px"},attrs:{src:e.imageUrl,alt:""}}):e._e(),t("br"),e._v(" 名字:"),t("el-input",{staticClass:"el-input",attrs:{placeholder:"请输入内容"},model:{value:e.names,callback:function(t){e.names=t},expression:"names"}}),t("br"),t("br"),e._v(" ID:"),t("el-input",{staticClass:"el-input",attrs:{placeholder:"请输入id"},model:{value:e.userid,callback:function(t){e.userid=t},expression:"userid"}}),t("br"),t("br"),e._v(" 性别:"),t("el-radio",{attrs:{label:"0"},model:{value:e.sex,callback:function(t){e.sex=t},expression:"sex"}},[e._v("男")]),t("el-radio",{attrs:{label:"1"},model:{value:e.sex,callback:function(t){e.sex=t},expression:"sex"}},[e._v("女")]),t("br"),t("br"),e._v(" 手机号:"),t("el-input",{staticClass:"el-input",attrs:{placeholder:"请输入电话"},model:{value:e.iphone,callback:function(t){e.iphone=t},expression:"iphone"}}),t("br"),t("br"),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.mydes,expression:"mydes"}],attrs:{name:"",id:"",cols:"30",rows:"10"},domProps:{value:e.mydes},on:{input:function(t){t.target.composing||(e.mydes=t.target.value)}}}),t("br"),t("br"),t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.add()}}},[e._v("确定添加")]),t("el-button",{on:{click:function(t){return e.qu()}}},[e._v("取消添加")])],1)])},s=[],n=r(4161),o=r(9702),a=r.n(o),h=r(6633),u={data(){return{name:"111",role:"222",str:"nbsp123ok",imageFile:null,names:"",userid:"",sex:1,iphone:"",mydes:"",imageUrl:""}},mounted(){this.api()},methods:{api(){let e={name:this.name,role:this.role,sign:a()(this.name+this.role+this.str+"333333")};console.log(e,"11111"),(0,h.D5)(e).then((e=>{console.log(e)}))},handleFileChange(e){const t=e.target.files[0],r=new FileReader;r.onload=e=>{const t=e.target.result,r=new FormData;r.append("imgurl",t),n.Z.post("https://www.zzgoodqc.cn/index.php/index/upload/uploadimg",r).then((e=>{const t=e.data.data.url;this.imageUrl=`https://www.zzgoodqc.cn/${t}`,console.log(e.data)})).catch((e=>{console.error(e)}))},r.readAsDataURL(t)},add(){let e={name:this.names,userid:this.userid,sex:this.sex,iphone:this.iphone,mydes:this.mydes};(0,h.e$)(e).then((e=>{console.log(e)})),console.log("用户名",this.names),console.log("userid",this.userid),console.log("性别",this.sex),console.log("手机号",this.iphone),console.log("描述",this.mydes),console.log("图片",this.imageUrl)},qu(){this.names=this.userid=this.sex=this.iphone=this.mydes=""}},computed:{fullImageUrl(){return this.imageUrl}}},c=u,l=r(1001),f=(0,l.Z)(c,i,s,!1,null,"2e7a9c22",null),d=f.exports},9702:function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(1439),__webpack_require__(7585),__webpack_require__(5315),
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.7.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
function(){"use strict";var ERROR="input is invalid type",WINDOW="object"===typeof window,root=WINDOW?window:{};root.JS_MD5_NO_WINDOW&&(WINDOW=!1);var WEB_WORKER=!WINDOW&&"object"===typeof self,NODE_JS=!root.JS_MD5_NO_NODE_JS&&"object"===typeof process&&process.versions&&process.versions.node;NODE_JS?root=__webpack_require__.g:WEB_WORKER&&(root=self);var COMMON_JS=!root.JS_MD5_NO_COMMON_JS&&module.exports,AMD=__webpack_require__.amdO,ARRAY_BUFFER=!root.JS_MD5_NO_ARRAY_BUFFER&&"undefined"!==typeof ArrayBuffer,HEX_CHARS="0123456789abcdef".split(""),EXTRA=[128,32768,8388608,-2147483648],SHIFT=[0,8,16,24],OUTPUT_TYPES=["hex","array","digest","buffer","arrayBuffer","base64"],BASE64_ENCODE_CHAR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),blocks=[],buffer8;if(ARRAY_BUFFER){var buffer=new ArrayBuffer(68);buffer8=new Uint8Array(buffer),blocks=new Uint32Array(buffer)}!root.JS_MD5_NO_NODE_JS&&Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),!ARRAY_BUFFER||!root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(e){return"object"===typeof e&&e.buffer&&e.buffer.constructor===ArrayBuffer});var createOutputMethod=function(e){return function(t){return new Md5(!0).update(t)[e]()}},createMethod=function(){var e=createOutputMethod("hex");NODE_JS&&(e=nodeWrap(e)),e.create=function(){return new Md5},e.update=function(t){return e.create().update(t)};for(var t=0;t<OUTPUT_TYPES.length;++t){var r=OUTPUT_TYPES[t];e[r]=createOutputMethod(r)}return e},nodeWrap=function(method){var crypto=eval("require('crypto')"),Buffer=eval("require('buffer').Buffer"),nodeMethod=function(e){if("string"===typeof e)return crypto.createHash("md5").update(e,"utf8").digest("hex");if(null===e||void 0===e)throw ERROR;return e.constructor===ArrayBuffer&&(e=new Uint8Array(e)),Array.isArray(e)||ArrayBuffer.isView(e)||e.constructor===Buffer?crypto.createHash("md5").update(new Buffer(e)).digest("hex"):method(e)};return nodeMethod};function Md5(e){if(e)blocks[0]=blocks[16]=blocks[1]=blocks[2]=blocks[3]=blocks[4]=blocks[5]=blocks[6]=blocks[7]=blocks[8]=blocks[9]=blocks[10]=blocks[11]=blocks[12]=blocks[13]=blocks[14]=blocks[15]=0,this.blocks=blocks,this.buffer8=buffer8;else if(ARRAY_BUFFER){var t=new ArrayBuffer(68);this.buffer8=new Uint8Array(t),this.blocks=new Uint32Array(t)}else this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];this.h0=this.h1=this.h2=this.h3=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}Md5.prototype.update=function(e){if(!this.finalized){var t,r=typeof e;if("string"!==r){if("object"!==r)throw ERROR;if(null===e)throw ERROR;if(ARRAY_BUFFER&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!Array.isArray(e)&&(!ARRAY_BUFFER||!ArrayBuffer.isView(e)))throw ERROR;t=!0}var i,s,n=0,o=e.length,a=this.blocks,h=this.buffer8;while(n<o){if(this.hashed&&(this.hashed=!1,a[0]=a[16],a[16]=a[1]=a[2]=a[3]=a[4]=a[5]=a[6]=a[7]=a[8]=a[9]=a[10]=a[11]=a[12]=a[13]=a[14]=a[15]=0),t)if(ARRAY_BUFFER)for(s=this.start;n<o&&s<64;++n)h[s++]=e[n];else for(s=this.start;n<o&&s<64;++n)a[s>>2]|=e[n]<<SHIFT[3&s++];else if(ARRAY_BUFFER)for(s=this.start;n<o&&s<64;++n)i=e.charCodeAt(n),i<128?h[s++]=i:i<2048?(h[s++]=192|i>>6,h[s++]=128|63&i):i<55296||i>=57344?(h[s++]=224|i>>12,h[s++]=128|i>>6&63,h[s++]=128|63&i):(i=65536+((1023&i)<<10|1023&e.charCodeAt(++n)),h[s++]=240|i>>18,h[s++]=128|i>>12&63,h[s++]=128|i>>6&63,h[s++]=128|63&i);else for(s=this.start;n<o&&s<64;++n)i=e.charCodeAt(n),i<128?a[s>>2]|=i<<SHIFT[3&s++]:i<2048?(a[s>>2]|=(192|i>>6)<<SHIFT[3&s++],a[s>>2]|=(128|63&i)<<SHIFT[3&s++]):i<55296||i>=57344?(a[s>>2]|=(224|i>>12)<<SHIFT[3&s++],a[s>>2]|=(128|i>>6&63)<<SHIFT[3&s++],a[s>>2]|=(128|63&i)<<SHIFT[3&s++]):(i=65536+((1023&i)<<10|1023&e.charCodeAt(++n)),a[s>>2]|=(240|i>>18)<<SHIFT[3&s++],a[s>>2]|=(128|i>>12&63)<<SHIFT[3&s++],a[s>>2]|=(128|i>>6&63)<<SHIFT[3&s++],a[s>>2]|=(128|63&i)<<SHIFT[3&s++]);this.lastByteIndex=s,this.bytes+=s-this.start,s>=64?(this.start=s-64,this.hash(),this.hashed=!0):this.start=s}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},Md5.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,t=this.lastByteIndex;e[t>>2]|=EXTRA[3&t],t>=56&&(this.hashed||this.hash(),e[0]=e[16],e[16]=e[1]=e[2]=e[3]=e[4]=e[5]=e[6]=e[7]=e[8]=e[9]=e[10]=e[11]=e[12]=e[13]=e[14]=e[15]=0),e[14]=this.bytes<<3,e[15]=this.hBytes<<3|this.bytes>>>29,this.hash()}},Md5.prototype.hash=function(){var e,t,r,i,s,n,o=this.blocks;this.first?(e=o[0]-680876937,e=(e<<7|e>>>25)-271733879<<0,i=(-1732584194^2004318071&e)+o[1]-117830708,i=(i<<12|i>>>20)+e<<0,r=(-271733879^i&(-271733879^e))+o[2]-1126478375,r=(r<<17|r>>>15)+i<<0,t=(e^r&(i^e))+o[3]-1316259209,t=(t<<22|t>>>10)+r<<0):(e=this.h0,t=this.h1,r=this.h2,i=this.h3,e+=(i^t&(r^i))+o[0]-680876936,e=(e<<7|e>>>25)+t<<0,i+=(r^e&(t^r))+o[1]-389564586,i=(i<<12|i>>>20)+e<<0,r+=(t^i&(e^t))+o[2]+606105819,r=(r<<17|r>>>15)+i<<0,t+=(e^r&(i^e))+o[3]-1044525330,t=(t<<22|t>>>10)+r<<0),e+=(i^t&(r^i))+o[4]-176418897,e=(e<<7|e>>>25)+t<<0,i+=(r^e&(t^r))+o[5]+1200080426,i=(i<<12|i>>>20)+e<<0,r+=(t^i&(e^t))+o[6]-1473231341,r=(r<<17|r>>>15)+i<<0,t+=(e^r&(i^e))+o[7]-45705983,t=(t<<22|t>>>10)+r<<0,e+=(i^t&(r^i))+o[8]+1770035416,e=(e<<7|e>>>25)+t<<0,i+=(r^e&(t^r))+o[9]-1958414417,i=(i<<12|i>>>20)+e<<0,r+=(t^i&(e^t))+o[10]-42063,r=(r<<17|r>>>15)+i<<0,t+=(e^r&(i^e))+o[11]-1990404162,t=(t<<22|t>>>10)+r<<0,e+=(i^t&(r^i))+o[12]+1804603682,e=(e<<7|e>>>25)+t<<0,i+=(r^e&(t^r))+o[13]-40341101,i=(i<<12|i>>>20)+e<<0,r+=(t^i&(e^t))+o[14]-1502002290,r=(r<<17|r>>>15)+i<<0,t+=(e^r&(i^e))+o[15]+1236535329,t=(t<<22|t>>>10)+r<<0,e+=(r^i&(t^r))+o[1]-165796510,e=(e<<5|e>>>27)+t<<0,i+=(t^r&(e^t))+o[6]-1069501632,i=(i<<9|i>>>23)+e<<0,r+=(e^t&(i^e))+o[11]+643717713,r=(r<<14|r>>>18)+i<<0,t+=(i^e&(r^i))+o[0]-373897302,t=(t<<20|t>>>12)+r<<0,e+=(r^i&(t^r))+o[5]-701558691,e=(e<<5|e>>>27)+t<<0,i+=(t^r&(e^t))+o[10]+38016083,i=(i<<9|i>>>23)+e<<0,r+=(e^t&(i^e))+o[15]-660478335,r=(r<<14|r>>>18)+i<<0,t+=(i^e&(r^i))+o[4]-405537848,t=(t<<20|t>>>12)+r<<0,e+=(r^i&(t^r))+o[9]+568446438,e=(e<<5|e>>>27)+t<<0,i+=(t^r&(e^t))+o[14]-1019803690,i=(i<<9|i>>>23)+e<<0,r+=(e^t&(i^e))+o[3]-187363961,r=(r<<14|r>>>18)+i<<0,t+=(i^e&(r^i))+o[8]+1163531501,t=(t<<20|t>>>12)+r<<0,e+=(r^i&(t^r))+o[13]-1444681467,e=(e<<5|e>>>27)+t<<0,i+=(t^r&(e^t))+o[2]-51403784,i=(i<<9|i>>>23)+e<<0,r+=(e^t&(i^e))+o[7]+1735328473,r=(r<<14|r>>>18)+i<<0,t+=(i^e&(r^i))+o[12]-1926607734,t=(t<<20|t>>>12)+r<<0,s=t^r,e+=(s^i)+o[5]-378558,e=(e<<4|e>>>28)+t<<0,i+=(s^e)+o[8]-2022574463,i=(i<<11|i>>>21)+e<<0,n=i^e,r+=(n^t)+o[11]+1839030562,r=(r<<16|r>>>16)+i<<0,t+=(n^r)+o[14]-35309556,t=(t<<23|t>>>9)+r<<0,s=t^r,e+=(s^i)+o[1]-1530992060,e=(e<<4|e>>>28)+t<<0,i+=(s^e)+o[4]+1272893353,i=(i<<11|i>>>21)+e<<0,n=i^e,r+=(n^t)+o[7]-155497632,r=(r<<16|r>>>16)+i<<0,t+=(n^r)+o[10]-1094730640,t=(t<<23|t>>>9)+r<<0,s=t^r,e+=(s^i)+o[13]+681279174,e=(e<<4|e>>>28)+t<<0,i+=(s^e)+o[0]-358537222,i=(i<<11|i>>>21)+e<<0,n=i^e,r+=(n^t)+o[3]-722521979,r=(r<<16|r>>>16)+i<<0,t+=(n^r)+o[6]+76029189,t=(t<<23|t>>>9)+r<<0,s=t^r,e+=(s^i)+o[9]-640364487,e=(e<<4|e>>>28)+t<<0,i+=(s^e)+o[12]-421815835,i=(i<<11|i>>>21)+e<<0,n=i^e,r+=(n^t)+o[15]+530742520,r=(r<<16|r>>>16)+i<<0,t+=(n^r)+o[2]-995338651,t=(t<<23|t>>>9)+r<<0,e+=(r^(t|~i))+o[0]-198630844,e=(e<<6|e>>>26)+t<<0,i+=(t^(e|~r))+o[7]+1126891415,i=(i<<10|i>>>22)+e<<0,r+=(e^(i|~t))+o[14]-1416354905,r=(r<<15|r>>>17)+i<<0,t+=(i^(r|~e))+o[5]-57434055,t=(t<<21|t>>>11)+r<<0,e+=(r^(t|~i))+o[12]+1700485571,e=(e<<6|e>>>26)+t<<0,i+=(t^(e|~r))+o[3]-1894986606,i=(i<<10|i>>>22)+e<<0,r+=(e^(i|~t))+o[10]-1051523,r=(r<<15|r>>>17)+i<<0,t+=(i^(r|~e))+o[1]-2054922799,t=(t<<21|t>>>11)+r<<0,e+=(r^(t|~i))+o[8]+1873313359,e=(e<<6|e>>>26)+t<<0,i+=(t^(e|~r))+o[15]-30611744,i=(i<<10|i>>>22)+e<<0,r+=(e^(i|~t))+o[6]-1560198380,r=(r<<15|r>>>17)+i<<0,t+=(i^(r|~e))+o[13]+1309151649,t=(t<<21|t>>>11)+r<<0,e+=(r^(t|~i))+o[4]-145523070,e=(e<<6|e>>>26)+t<<0,i+=(t^(e|~r))+o[11]-1120210379,i=(i<<10|i>>>22)+e<<0,r+=(e^(i|~t))+o[2]+718787259,r=(r<<15|r>>>17)+i<<0,t+=(i^(r|~e))+o[9]-343485551,t=(t<<21|t>>>11)+r<<0,this.first?(this.h0=e+1732584193<<0,this.h1=t-271733879<<0,this.h2=r-1732584194<<0,this.h3=i+271733878<<0,this.first=!1):(this.h0=this.h0+e<<0,this.h1=this.h1+t<<0,this.h2=this.h2+r<<0,this.h3=this.h3+i<<0)},Md5.prototype.hex=function(){this.finalize();var e=this.h0,t=this.h1,r=this.h2,i=this.h3;return HEX_CHARS[e>>4&15]+HEX_CHARS[15&e]+HEX_CHARS[e>>12&15]+HEX_CHARS[e>>8&15]+HEX_CHARS[e>>20&15]+HEX_CHARS[e>>16&15]+HEX_CHARS[e>>28&15]+HEX_CHARS[e>>24&15]+HEX_CHARS[t>>4&15]+HEX_CHARS[15&t]+HEX_CHARS[t>>12&15]+HEX_CHARS[t>>8&15]+HEX_CHARS[t>>20&15]+HEX_CHARS[t>>16&15]+HEX_CHARS[t>>28&15]+HEX_CHARS[t>>24&15]+HEX_CHARS[r>>4&15]+HEX_CHARS[15&r]+HEX_CHARS[r>>12&15]+HEX_CHARS[r>>8&15]+HEX_CHARS[r>>20&15]+HEX_CHARS[r>>16&15]+HEX_CHARS[r>>28&15]+HEX_CHARS[r>>24&15]+HEX_CHARS[i>>4&15]+HEX_CHARS[15&i]+HEX_CHARS[i>>12&15]+HEX_CHARS[i>>8&15]+HEX_CHARS[i>>20&15]+HEX_CHARS[i>>16&15]+HEX_CHARS[i>>28&15]+HEX_CHARS[i>>24&15]},Md5.prototype.toString=Md5.prototype.hex,Md5.prototype.digest=function(){this.finalize();var e=this.h0,t=this.h1,r=this.h2,i=this.h3;return[255&e,e>>8&255,e>>16&255,e>>24&255,255&t,t>>8&255,t>>16&255,t>>24&255,255&r,r>>8&255,r>>16&255,r>>24&255,255&i,i>>8&255,i>>16&255,i>>24&255]},Md5.prototype.array=Md5.prototype.digest,Md5.prototype.arrayBuffer=function(){this.finalize();var e=new ArrayBuffer(16),t=new Uint32Array(e);return t[0]=this.h0,t[1]=this.h1,t[2]=this.h2,t[3]=this.h3,e},Md5.prototype.buffer=Md5.prototype.arrayBuffer,Md5.prototype.base64=function(){for(var e,t,r,i="",s=this.array(),n=0;n<15;)e=s[n++],t=s[n++],r=s[n++],i+=BASE64_ENCODE_CHAR[e>>>2]+BASE64_ENCODE_CHAR[63&(e<<4|t>>>4)]+BASE64_ENCODE_CHAR[63&(t<<2|r>>>6)]+BASE64_ENCODE_CHAR[63&r];return e=s[n],i+=BASE64_ENCODE_CHAR[e>>>2]+BASE64_ENCODE_CHAR[e<<4&63]+"==",i};var exports=createMethod();COMMON_JS?module.exports=exports:(root.md5=exports,AMD&&(__WEBPACK_AMD_DEFINE_RESULT__=function(){return exports}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))}()},6633:function(e,t,r){"use strict";r.d(t,{Cq:function(){return s},D5:function(){return l},Im:function(){return c},O2:function(){return a},SV:function(){return n},cJ:function(){return h},e$:function(){return f},h4:function(){return u},pi:function(){return o}});var i=r(8898);function s(){return _("index.php/index/index/getcode")}function n(e){return d("index.php/index/index/login",e)}function o(e){return d("index.php/index/index/register",e)}function a(){return d("index.php/index/admin/getNolist")}function h(){return d("index.php/index/admin/getNum")}function u(){return d("index.php/index/admin/getTolist")}function c(){return d("index.php/index/index/getDatas")}function l(e){return d("index/callcenter/getheaders",e)}function f(e){return d("/index.php/index/index/mycenter",e)}function d(e,t){return new Promise(((r,s)=>{(0,i.s)(e,t).then((e=>{0==e.code?r(e):s(e)}),(e=>{s(e)}))}))}function _(e){return new Promise(((t,r)=>{(0,i.R)(e).then((e=>{0==e.code?t(e):r(e)}),(e=>{r(e)}))}))}}}]);
//# sourceMappingURL=628.d7d4fcf9.js.map