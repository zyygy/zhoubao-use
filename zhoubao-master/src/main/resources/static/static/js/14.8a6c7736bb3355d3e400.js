webpackJsonp([14],{"+y60":function(e,t){},"18rJ":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={name:"TimeLine",data:function(){return{zhoubaos:[],loading:!0,imgSrc:["../static/html5.png","../static/pdf.png","../static/markdown80.png"],file:["html周报","pdf周报","Markdown周报"]}},mounted:function(){this.userName=this.Cookies.get("userName"),this.shuaxin()},methods:{shuaxin:function(){var e=this;e.axios.get("/zhoubao/getSomeone/"+e.userName).then(function(t){e.zhoubaos=t.data,e.$nextTick(function(){e.loading=!1}),0==e.zhoubaos.length&&0!=e.userName.localeCompare("123")?e.$notify({title:"注意",message:"首次使用，先来看看帮助吧！",position:"top-left",type:"warning",offset:100,onClick:e.$router.push("Help")}):0==e.userName.localeCompare("123")&&e.$message({showClose:!0,message:"这里是上传周报的界面，只能看到用户自己的周报",type:"success"})})},fileType:function(e){if(0==e.localeCompare("-1"))return 0;var t=e.split("."),a=t[t.length-1].toLowerCase();return 0==a.localeCompare("pdf")?1:0==a.localeCompare("md")?2:void 0},timeFormat:function(e){var t=new Date,a=e.getMonth()+1+"月"+e.getDate()+"日";return e.getFullYear()==t.getFullYear()?a:e.getFullYear()+"年"+a},getWeekCount:a("YF26").default.getWeekCount,delPdfMd:function(e){var t=this;confirm("是否要删除"+e.filePath.split("/").reverse()[0]+"?")&&this.axios({url:"/zhoubao/delPdfMd/"+e.id,method:"get",headers:{"Content-Type":"application/json"}}).then(function(e){t.$notify({title:"删除成功",message:"已成功删除文件",type:"success"}),t.shuaxin()})},viewer:function(e){if(0==e.filePath.localeCompare("-1"))0==this.Cookies.get("userName").localeCompare("123")?this.$router.push({name:"AdminHtmlViewer",params:{userName:e.userName,week:e.week}}):this.$router.push({name:"HtmlViewer",params:{userName:e.userName,week:e.week}});else{var t=e.filePath.split(".").reverse()[0].toLowerCase();0==t.localeCompare("pdf")?0==this.Cookies.get("userName").localeCompare("123")?this.$router.push({name:"AdminPdfViewer",params:{zhoubao:e}}):this.$router.push({name:"PdfViewer",params:{zhoubao:e}}):0==t.localeCompare("md")&&this.$router.push({name:"MdViewer",params:{zhoubao:e}})}}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"block"},[a("el-timeline",{staticStyle:{width:"70%",margin:"auto"}},e._l(e.zhoubaos,function(t){return a("el-timeline-item",{key:t.id,attrs:{timestamp:"第"+e.getWeekCount(new Date(t.time))+"周",placement:"top"}},[a("div",{on:{click:function(a){return e.viewer(t)}}},[a("el-card",{attrs:{shadow:"hover"}},[a("el-row",{attrs:{gutter:20,type:"flex",justify:"center"}},[a("el-col",{attrs:{span:12}},[a("div",{staticStyle:{cursor:"pointer"}},[a("h2",{staticStyle:{"font-weight":"600"}},[e._v(e._s(e.timeFormat(new Date(t.time))))]),e._v(" "),a("h3",{staticStyle:{"font-weight":"500"}},[a("i",{staticClass:"el-icon-reading"}),e._v(" "+e._s(t.filePath.localeCompare("-1")?t.filePath.split("/").reverse()[0]:"html在线周报"))]),e._v(" "),t.pingjia?a("h2",{staticStyle:{"font-weight":"500",color:"#409EFF"}},[e._v("老师评价:"+e._s(t.pingjia))]):e._e(),e._v(" "),e.fileType(t.filePath)?a("el-button",{on:{click:function(a){return a.stopPropagation(),e.delPdfMd(t)}}},[e._v("删除")]):e._e()],1)]),e._v(" "),a("el-col",{attrs:{span:5}},[a("div",{staticClass:"boxFinding"},[a("img",{staticStyle:{margin:"1%"},attrs:{src:e.imgSrc[e.fileType(t.filePath)]}})])]),e._v(" "),a("el-col",{attrs:{span:3}})],1)],1)],1)])}),1)],1)},staticRenderFns:[]};var s=a("VU/8")(i,o,!1,function(e){a("+y60")},"data-v-7c8db6cc",null);t.default=s.exports}});
//# sourceMappingURL=14.8a6c7736bb3355d3e400.js.map