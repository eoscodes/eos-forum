webpackJsonp([3],{"0mwv":function(t,s){},Xr79:function(t,s,o){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=o("Xxa5"),e=o.n(a),n=o("exGp"),c=o.n(n),i=o("aKUZ"),r=(o("dpOi"),o("aW/X")),l=(o("TsL6"),o("wh04"),o("RxEy")),d=o("xSwI"),u=o("67Q6"),v=o("Oh/4"),_=o("lZCD"),m=o("YjDO"),p={name:"UserProfile",components:{Layout:v.a,Pager:l.a,Post:d.a,PostSorter:u.a,Modal:_.default,ThreadModal:m.a},watch:{"$route.query.page":function(){this.load()},"$route.params.account":function(){this.load()}},mounted:function(){var t=this;return c()(e.a.mark(function s(){return e.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:t.load();case 1:case"end":return s.stop()}},s,t)}))()},computed:{},methods:{load:function(){var t=this;return c()(e.a.mark(function s(){var o,a;return e.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return t.loading=!0,t.account=t.$route.params.account,o=Object(r.a)(),s.next=5,i.a.views.UserProfile(t.$route.query.page,t.$route.params.account,o.query.sort.time());case 5:a=s.sent,t.current_page=a.current_page,t.account=a.account,t.user_icons=a.user_icons,t.is_blocked=a.is_blocked,t.is_followed=a.is_followed,t.balances.atmos=a.balance_atmos,t.comments=a.n_comments,t.threads=a.n_threads,t.followers=a.n_followers,t.last_activity=a.last_activity,t.posts=a.posts,t.pages=a.pages,t.loading=!1;case 19:case"end":return s.stop()}},s,t)}))()},toggleBlock:function(){var t=this;return c()(e.a.mark(function s(){return e.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(t.account){s.next=2;break}return s.abrupt("return");case 2:return s.next=4,i.a.actions.ToggleBlockUser(t.account,t.is_blocked);case 4:t.is_blocked=!t.is_blocked;case 5:case"end":return s.stop()}},s,t)}))()},toggleFollow:function(){var t=this;return c()(e.a.mark(function s(){return e.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(t.account){s.next=2;break}return s.abrupt("return");case 2:return s.next=4,i.a.actions.ToggleFollowUser(t.account,t.is_followed);case 4:t.is_followed=!t.is_followed;case 5:case"end":return s.stop()}},s,t)}))()},closeSendAtmosModal:function(){this.showSendAtmosModal=!1,this.modal={amount:0}}},data:function(){return{loading:!1,is_blocked:!1,is_followed:!1,account:"",balances:{atmos:0},comments:0,followers:0,threads:0,last_activity:"",posts:[],user_icons:[],current_page:1,pages:0,selectedPostID:void 0,showSendAtmosModal:!1,modal:{amount:0}}}},f={render:function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("layout",{attrs:{load:t.load}},[o("template",{slot:"topic"},[o("span",[t._v("u/"+t._s(t.account))])]),t._v(" "),o("template",{slot:"content"},[o("b-tabs",[o("b-tab",{attrs:{title:"comments",active:""}},[o("div",{staticClass:"mt-2 mb-2"},[o("div",{staticClass:"float-right"},[o("pager",{attrs:{pages:t.pages,current_page:t.current_page}})],1),t._v(" "),o("div",{staticClass:"clearfix"})]),t._v(" "),t.loading?o("div",{staticClass:"text-center"},[o("h1",[o("font-awesome-icon",{attrs:{icon:["fas","spinner"],spin:""}})],1)]):o("div",{staticClass:"post-container"},[0==t.posts.length?o("div",[o("div",{staticClass:"text-center"},[o("h1",[t._v("There doesn't seem to be any posts here! Why not make one?")])])]):t._e(),t._v(" "),t._l(t.posts,function(s){return o("post",{key:s.o_id,staticClass:"post-parent",attrs:{showAsFeed:!0,showChildren:!1,post:s},on:{openPost:t.$_openPost}})}),t._v(" "),t.selectedPostID?o("modal",{nativeOn:{click:function(s){return t.$_closePost(s)}}},[o("thread-modal",{attrs:{id:t.selectedPostID},nativeOn:{click:function(t){t.stopPropagation()}}})],1):t._e()],2)]),t._v(" "),o("b-tab",{attrs:{title:"threads"}},[t._v("\n        Threads...\n      ")]),t._v(" "),o("b-tab",{attrs:{title:"blogs"}},[t._v("\n        Blogs...\n      ")])],1),t._v(" "),t.showSendAtmosModal?o("modal",{nativeOn:{mousedown:function(s){s.stopPropagation(),t.closeSendAtmosModal()}}},[o("div",{staticClass:"modal-container"},[o("div",{staticClass:"send-atmos-modal",on:{mousedown:function(t){t.stopPropagation()}}},[o("div",[t._v("\n            Send ATMOS\n          ")]),t._v(" "),o("div",[o("label",[t._v(" To: ")]),t._v(" "),o("div",{staticClass:"form-control"},[t._v("\n              "+t._s(t.account)+"\n            ")])]),t._v(" "),o("div",[o("label",[t._v(" Amount: ")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.modal.amount,expression:"modal.amount"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.modal.amount},on:{input:function(s){s.target.composing||t.$set(t.modal,"amount",s.target.value)}}})]),t._v(" "),o("div",{staticClass:"footer"},[o("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(s){t.closeSendAtmosModal()}}},[t._v("\n              Cancel\n            ")]),t._v(" "),o("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(s){t.closeSendAtmosModal()}}},[t._v("\n              Send\n            ")])])])])]):t._e()],1),t._v(" "),o("template",{slot:"right_sidebar"},[o("div",{staticClass:"block"},[o("div",{staticClass:"blocktxt"},[o("div",[t._l(t.user_icons,function(s,a){return t.user_icons.length>0?o("img",{key:a,attrs:{width:"25",height:"25",src:s}}):o("font-awesome-icon",{staticClass:"fas",attrs:{icon:["fas","user-circle"]}})}),t._v(" "),o("span",{staticStyle:{"overflow-wrap":"break-word"}},[t._v("\n            "+t._s(t.account)+" \n          ")])],2),t._v(" "),o("button",{staticClass:"btn btn-primary mt-3",on:{click:function(s){t.toggleFollow()}}},[t._v("\n          "+t._s(t.is_followed?"Unfollow":"Follow")+"\n        ")]),t._v(" "),o("button",{staticClass:"btn btn-danger mt-3",on:{click:function(s){t.toggleBlock()}}},[t._v("\n          "+t._s(t.is_blocked?"Unblock":"Block")+"\n        ")])]),t._v(" "),o("div",{staticClass:"divline"}),t._v(" "),o("div",{staticClass:"blocktxt"},[t._v("\n        Followers: "+t._s(t.followers)+"\n      ")]),t._v(" "),o("div",{staticClass:"blocktxt"},[t._v("\n        Balances: "+t._s(t.balances.atmos)+" ATMOS\n      ")]),t._v(" "),o("div",{staticClass:"blocktxt"},[t._v("\n        Comments: "+t._s(t.comments)+"\n      ")]),t._v(" "),o("div",{staticClass:"blocktxt"},[t._v("\n        Threads: "+t._s(t.threads)+"\n      ")]),t._v(" "),o("div",{staticClass:"blocktxt"},[t._v("\n        Last Activity: "+t._s(t.last_activity)+"\n      ")]),t._v(" "),o("div",{staticClass:"blocktxt"},[o("button",{staticClass:"btn btn-primary",on:{click:function(s){t.showSendAtmosModal=!0}}},[t._v("\n          Send ATMOS\n        ")])])])])],2)},staticRenderFns:[]};var b=o("VU/8")(p,f,!1,function(t){o("0mwv")},"data-v-12f37a40",null);s.default=b.exports}});
//# sourceMappingURL=3.92ae247aff49d0dec06e.js.map