webpackJsonp([1],Array(27).concat([function(t,e,s){"use strict";s.d(e,"b",function(){return n}),s.d(e,"c",function(){return a}),s.d(e,"d",function(){return i}),s.d(e,"e",function(){return o}),s.d(e,"f",function(){return r}),s.d(e,"a",function(){return c}),s.d(e,"g",function(){return u}),s.d(e,"h",function(){return l}),s.d(e,"i",function(){return d}),s.d(e,"j",function(){return f});var n="RENDER_NOTE",a="ADD_NOTE",i="DELETE_NOTE",o="UPDATE_NOTE",r="STAR_NOTE",c="GET_NOTELIST",u="GET_STAR",l="ADD_TAG",d="SHOW_TAG_LIST",f="SHOW_NOTE_LIST"},,,,,,,,,,,,,,,,,function(t,e,s){function n(t){s(113)}var a=s(0)(s(59),s(134),n,"data-v-05bf1b1c",null);t.exports=a.exports},function(t,e,s){function n(t){s(122)}var a=s(0)(s(60),s(144),n,"data-v-7ff6f504",null);t.exports=a.exports},function(t,e,s){function n(t){s(123)}var a=s(0)(s(61),s(146),n,"data-v-ec0725e2",null);t.exports=a.exports},function(t,e,s){function n(t){s(120)}var a=s(0)(s(62),s(142),n,"data-v-4f889766",null);t.exports=a.exports},function(t,e,s){"use strict";var n=s(16),a=s(147),i=s(130),o=s.n(i),r=s(129),c=s.n(r),u=s(133),l=s.n(u),d=s(131),f=s.n(d),v=s(132),m=s.n(v);n.a.use(a.a),e.a=new a.a({routes:[{path:"/login",name:"Login",component:o.a},{path:"/home",component:c.a,children:[{path:"/",name:"NoteDetail",component:m.a},{path:"/search",name:"Search",component:l.a},{path:"/newnote",name:"NewNote",component:f.a}]}]})},function(t,e,s){"use strict";var n=s(16),a=s(149),i=s(56),o=s(55);n.a.use(a.a);var r={list:[],activeItem:null,isNew:!1,showStar:!1,showNoteList:!0},c={starNotes:function(t){return t.showStar?t.list.filter(function(t){return t.star}):t.list}};e.a=new a.a.Store({state:r,getters:c,mutations:i.a,actions:o.a})},function(t,e){},function(t,e){},function(t,e,s){function n(t){s(118)}var a=s(0)(s(57),s(140),n,null,null);t.exports=a.exports},function(t,e,s){"use strict";e.a={getNoteList:function(t){for(var e=[],s=JSON.parse(localStorage.getItem("notesNames"))||[],n=0;n<s.length;n++)e.push(JSON.parse(localStorage.getItem(s[n])));setTimeout(function(){return t(e)},100)}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(16),a=s(52),i=s.n(a),o=s(48),r=s(49),c=s(51),u=(s.n(c),s(50));s.n(u);n.a.config.productionTip=!1,new n.a({el:"#app",router:o.a,store:r.a,template:"<App/>",components:{App:i.a}})},function(t,e,s){"use strict";var n=s(53),a=s(27),i={getNoteList:function(t){var e=t.commit;n.a.getNoteList(function(t){return e(a.a,t)})}};e.a=i},function(t,e,s){"use strict";function n(t,e){return t.findIndex(function(t){return+t.id===e})}var a,i=s(71),o=s.n(i),r=s(70),c=s.n(r),u=s(72),l=s.n(u),d=s(68),f=s.n(d),v=s(27),m=(a={},o()(a,v.b,function(t,e){if(e.isNew)t.activeItem={title:"",content:"",tagList:[],star:!1};else{var s=t.list[n(t.list,e.id)];t.activeItem=s||null}t.isNew=e.isNew}),o()(a,v.c,function(t,e){e.id=(new Date).getTime(),e.summary=e.content.length>40?e.content.slice(0,40)+"...":e.content,e.star=!1,localStorage.setItem("notes_"+e.id,f()(e));var s=JSON.parse(localStorage.getItem("notesNames"))||[];s.push("notes_"+e.id),localStorage.setItem("notesNames",f()(s)),t.list=[].concat(l()(t.list),[e]),t.isNew=!1}),o()(a,v.d,function(t,e){localStorage.removeItem("notes_"+e);var s=JSON.parse(localStorage.getItem("notesNames"));s.splice(s.indexOf("notes_"+e),1),localStorage.setItem("notesNames",f()(s)),t.list.splice(n(t.list,e),1),t.activeItem=null}),o()(a,v.e,function(t,e){var s=e.id,a=n(t.list,s);e.summary=e.content.length>40?e.content.slice(0,40)+"...":e.content,t.list[a]=e,localStorage.setItem("notes_"+s,f()(e))}),o()(a,v.f,function(t,e){var s=n(t.list,e);t.list[s].star=!t.list[s].star,localStorage.setItem("notes_"+e,f()(t.list[s]))}),o()(a,v.a,function(t,e){t.list=e}),o()(a,v.g,function(t,e){t.showStar=!t.showStar}),o()(a,v.h,function(t,e){var s=n(t.list,t.activeItem.id),a=[];if(-1===s)return a=t.activeItem.tagList||[],a.push(e),void(t.activeItem.tagList=[].concat(l()(new c.a(a))));a=t.list[s].tagList||[],a.push(e),t.list[s].tagList=[].concat(l()(new c.a(a))),localStorage.setItem("notes_"+t.activeItem.id,f()(t.list[s]))}),o()(a,v.i,function(t){t.showNoteList=!t.showNoteList}),o()(a,v.j,function(t){t.showNoteList=!0}),a);e.a=m},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["isNew","isStar"],methods:{addNote:function(){this.$emit("addNote")},starNote:function(){this.$emit("starNote")},updateNote:function(){this.$emit("updateNote")},deleteNote:function(){this.$emit("deleteNote")}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(127),a=s.n(n),i=s(128),o=s.n(i);e.default={props:{data:{default:function(){return{title:"",content:"",tagList:[]}},type:Object},isNew:{default:!1,type:Boolean}},components:{EditBar:a.a,TagList:o.a},methods:{addNote:function(){var t=this.data;""===t.title?alert("请输入标题"):(t.time=this.fDateFormater(new Date),this.$store.commit("ADD_NOTE",t))},deleteNote:function(){this.$store.commit("DELETE_NOTE",this.data.id)},starNote:function(){this.$store.commit("STAR_NOTE",this.data.id)},updateNote:function(){console.log(this.data),this.$store.commit("UPDATE_NOTE",this.data)},fDateFormater:function(t){var e=t.getFullYear(),s=t.getMonth()+1,n=t.getDate();return s=s<10?"0"+s:s,e+"/"+s+"/"+n}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["item"],methods:{deleteNote:function(){this.$store.commit("DELETE_NOTE",this.item.id)},starNote:function(){this.$store.commit("STAR_NOTE",this.item.id)}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(45),a=s.n(n);e.default={components:{NoteItem:a.a},data:function(){return{activeIndex:""}},props:["list"],methods:{renderNote:function(t){console.log(t),this.activeIndex=t,this.$store.commit("RENDER_NOTE",{id:t,isNew:!1})}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{isStar:function(){return this.$store.state.showStar}},methods:{addNewNote:function(){this.$store.commit("RENDER_NOTE",{id:-1,isNew:!0})},getStarNote:function(){this.$store.commit("GET_STAR")},toggleTagList:function(){this.$store.commit("SHOW_TAG_LIST")},showNoteList:function(){this.$store.commit("SHOW_NOTE_LIST")}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["list"],data:function(){return{newTag:""}},methods:{checkTag:function(){if(""!==this.newTag){this.$store.commit("ADD_TAG",this.newTag),this.newTag="";document.getElementById("J_ip_tag").style.width="10px"}},changeHandler:function(){var t=this.newTag.split("").length;document.getElementById("J_ip_tag").style.width=12*t+"px"}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(46),a=s.n(n),i=s(47),o=s.n(i),r=s(44),c=s.n(r);e.default={components:{NoteList:a.a,Sidebar:o.a,EditItem:c.a},data:function(){return{}},computed:{list:function(){return this.$store.getters.starNotes},item:function(){return this.$store.state.activeItem},isNew:function(){return this.$store.state.isNew}},methods:{},created:function(){this.$store.dispatch("getNoteList")}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(45),a=s.n(n);e.default={components:{NoteItem:a.a},data:function(){return{data:{title:"",content:""}}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(46),a=s.n(n),i=s(126),o=s.n(i),r=s(47),c=s.n(r),u=s(44),l=s.n(u);e.default={components:{NoteList:a.a,CoverList:o.a,Sidebar:c.a,EditItem:l.a},data:function(){return{}},computed:{list:function(){return this.$store.getters.starNotes},item:function(){return this.$store.state.activeItem},isNew:function(){return this.$store.state.isNew},showNoteList:function(){return this.$store.state.showNoteList}},methods:{},created:function(){this.$store.dispatch("getNoteList")}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,s){t.exports=s.p+"static/img/avatar.efde590.png"},function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABfUlEQVR42u2X4W2DMBCFs0JX6ApdgRVYoSu0f1pTsJSskBW6gldgha7ACinPQHIxwfjsw0qrWDoJIhR/+O7eO3a7x/rPa/++f1KqOVSqMX2c+usW1/hNKfWcDaT+qF/6TYuqar4Bcjv0D4BzwXTYbBnmDHX8+mzeaOBFxE5vgsFmuF8HWg78D1IrAiMBNAVOLQoGNTEWr42wlAWFYQMh50PuL4E3EwI6xbR2K7V5MpBS9euWMAiWPEimxtNxBQNIl3cFZBX5noCk9AaNMSp1O9ciXTKBrAYlAg12cUu/2OLoN9FwAZwmgWSgrTuNDcQtbK6QRvkZNdbA9GwLhNkmdKzgppjd9qQ71t+8b4DgZ1OAqPPbE7CdN5cDeJ9jzMWoP4cl+RAddadNAUJhPM92SW4fu8Y6OmuPpxbN5jCu+NEumhe8PuYA6qh/Ua9ygdbSLLJ8+jIHyvBBSRX7eg7XpVPUJktBh6p6lnQxzDjP6Vx9HAxji3Ejyrse66+sX/zBMgpBp4lhAAAAAElFTkSuQmCC"},function(t,e,s){function n(t){s(121)}var a=s(0)(null,s(143),n,"data-v-633371b4",null);t.exports=a.exports},function(t,e,s){function n(t){s(119)}var a=s(0)(s(58),s(141),n,"data-v-4d0b1c1a",null);t.exports=a.exports},function(t,e,s){function n(t){s(116)}var a=s(0)(s(63),s(137),n,"data-v-18785b6e",null);t.exports=a.exports},function(t,e,s){function n(t){s(117)}var a=s(0)(s(64),s(139),n,"data-v-2cd2f1f4",null);t.exports=a.exports},function(t,e,s){var n=s(0)(null,s(145),null,null,null);t.exports=n.exports},function(t,e,s){function n(t){s(114)}var a=s(0)(s(65),s(135),n,"data-v-09ec182d",null);t.exports=a.exports},function(t,e,s){function n(t){s(115)}var a=s(0)(s(66),s(136),n,"data-v-1518a038",null);t.exports=a.exports},function(t,e,s){var n=s(0)(null,s(138),null,null,null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("EditBar",{attrs:{isNew:t.isNew,isStar:t.data.star},on:{updateNote:t.updateNote,addNote:t.addNote,starNote:t.starNote,deleteNote:t.deleteNote}}),t._v(" "),s("TagList",{attrs:{list:t.data.tagList}}),t._v(" "),s("form",{staticClass:"m-item"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.data.title,expression:"data.title"}],staticClass:"u-title J_title",attrs:{type:"text",name:"title",placeholder:"写下笔记标题"},domProps:{value:t.data.title},on:{input:function(e){e.target.composing||(t.data.title=e.target.value)}}}),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.data.content,expression:"data.content"}],staticClass:"u-content J_content",attrs:{name:"content",placeholder:"在这里输入正文"},domProps:{value:t.data.content},on:{input:function(e){e.target.composing||(t.data.content=e.target.value)}}}),s("br")])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"m-newnote"},[s("NoteItem",{attrs:{item:"data"}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.showNoteList?s("NoteList",{staticClass:"m-nav",attrs:{list:t.list}}):s("CoverList",{staticClass:"m-nav",attrs:{list:t.list}}),t._v(" "),s("div",{staticClass:"m-doc"},[t.item?s("EditItem",{attrs:{data:t.item,isNew:t.isNew}}):t._e()],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"m-taglist"},[s("a",{staticClass:"u-icon",attrs:{href:"javascript:;"}}),t._v(" "),t._l(t.list,function(e,n){return s("span",{key:n,staticClass:"u-tag"},[t._v(t._s(e))])}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newTag,expression:"newTag"}],staticClass:"u-tag",attrs:{id:"J_ip_tag",type:"text",placeholder:"+"},domProps:{value:t.newTag},on:{blur:t.checkTag,input:[function(e){e.target.composing||(t.newTag=e.target.value)},t.changeHandler]}})],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("\n  搜索\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"g-bd"},[s("Sidebar",{staticClass:"m-sidebar"}),t._v(" "),s("router-view",{staticClass:"m-content"})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"m-editbar"},[s("div",{staticClass:"u-btngroup u-btngroup-left"},[s("a",{staticClass:"btn btn-star",class:{active:t.isStar},attrs:{href:"javascript:;"},on:{click:t.starNote}}),t._v(" "),s("a",{staticClass:"btn btn-delete",attrs:{href:"javascript:;"},on:{click:t.deleteNote}})]),t._v(" "),s("div",{staticClass:"u-btngroup u-btngroup-right"},[t.isNew?s("a",{staticClass:"btn btn-add",attrs:{href:"javascript:;"},on:{click:t.addNote}},[t._v("添加")]):s("a",{staticClass:"btn btn-add",attrs:{href:"javascript:;"},on:{click:t.updateNote}},[t._v("保存")])])])},staticRenderFns:[]}},function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-toolbar"},[n("img",{staticClass:"u-logo",attrs:{src:s(125),alt:"Note"}}),t._v(" "),n("div",{staticClass:"u-btngroup"},[n("a",{staticClass:"btn btn-add",attrs:{href:"javascript:;"},on:{click:t.addNewNote}}),t._v(" "),n("router-link",{staticClass:"btn btn-search",attrs:{to:"/search"}})],1),t._v(" "),n("div",{staticClass:"u-btngroup"},[n("a",{staticClass:"btn btn-star",class:{active:t.isStar},attrs:{href:"javascript:;"},on:{click:t.getStarNote}}),t._v(" "),n("a",{staticClass:"btn btn-note",attrs:{href:"javascript:;"},on:{click:t.showNoteList}}),t._v(" "),n("a",{staticClass:"btn btn-book",attrs:{href:"javascript:;"}}),t._v(" "),n("a",{staticClass:"btn btn-tag",attrs:{href:"javascript:;"},on:{click:t.toggleTagList}})]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"u-avatar"},[n("img",{staticClass:"pic",attrs:{src:s(124),alt:"Ice"}})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"m-coverList"},[s("div",{staticClass:"m-content"},[s("p",{staticClass:"u-title"},[t._v("标签")]),t._v(" "),s("div",{staticClass:"m-ip-box"},[s("input",{staticClass:"u-search",attrs:{type:"text",placeholder:"查找标签"}})]),t._v(" "),s("div",{staticClass:"m-tagList"},[s("div",{staticClass:"m-tagGroup"},[s("div",{staticClass:"u-group"},[t._v("8")]),t._v(" "),s("div",{staticClass:"u-tag"},[s("span",{staticClass:"name"},[t._v("8月")]),t._v(" "),s("span",{staticClass:"num"},[t._v("3")])])]),t._v(" "),s("div",{staticClass:"m-tagGroup"},[s("div",{staticClass:"u-group"},[t._v("杭")]),t._v(" "),s("div",{staticClass:"u-tag"},[s("span",{staticClass:"name"},[t._v("杭州")]),t._v(" "),s("span",{staticClass:"num"},[t._v("2")])])])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"m-con"},[s("a",{staticClass:"m-link",attrs:{href:"javascript:;"}},[s("div",{staticClass:"m-info"},[s("p",{staticClass:"u-title"},[s("span",{staticClass:"title"},[t._v(t._s(t.item.title))]),t._v(" "),s("a",{staticClass:"btn btn-star",class:{active:t.item.star},attrs:{href:"javascript:;"},on:{click:t.starNote}}),t._v(" "),s("a",{staticClass:"btn btn-delete",attrs:{href:"javascript:;"},on:{click:t.deleteNote}})]),t._v(" "),s("p",{staticClass:"u-time"},[t._v(t._s(t.item.time))]),t._v(" "),s("p",{staticClass:"u-summary"},[t._v(t._s(t.item.summary))])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("\n  登录页\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"m-note-container"},[s("p",{staticClass:"u-title"},[t._v("笔记")]),t._v(" "),s("p",{staticClass:"u-num"},[t._v(t._s(t.list.length)+"条笔记")]),t._v(" "),s("ul",{staticClass:"m-item-list"},t._l(t.list,function(e){return s("li",{key:e.id,staticClass:"m-item",class:{active:t.activeIndex===e.id},on:{click:function(s){t.renderNote(e.id)}}},[s("NoteItem",{attrs:{item:e}}),t._v(" "),s("div",{staticClass:"u-cover"})],1)}))])},staticRenderFns:[]}}]),[54]);
//# sourceMappingURL=app.b0f4404b94f2fbe2c3de.js.map