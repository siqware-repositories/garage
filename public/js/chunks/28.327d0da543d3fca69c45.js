(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{EG0M:function(e,t,s){"use strict";s.r(t);var a={name:"addHome",props:["is_popup"],data:function(){return{user:{profile:null,category:"ICT",role:"user",type:"employee",name:"",email:"",telephone:"",password:"",content:"Content"},categories:[{id:1,category:"ICT"},{id:2,category:"Administrator"},{id:3,category:"Faculty of Science and Technology"}],data:"Working on the mix",options:{}}},computed:{popupSync:{get:function(){return this.is_popup},set:function(e){this.$emit("update-is_popup",e)}}}},i=s("KHd+"),o=Object(i.a)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("vs-popup",{attrs:{fullscreen:"",title:"បន្ថែមអ្នកប្រើប្រាស់",active:e.popupSync},on:{"update:active":function(t){e.popupSync=t}}},[s("form",[s("div",{staticClass:"vx-row mb-2"},[s("div",{staticClass:"vx-col w-full"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{name:"title","label-placeholder":"ចំណងជើង"},model:{value:e.user.title,callback:function(t){e.$set(e.user,"title",t)},expression:"user.title"}}),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("title"),expression:"errors.has('title')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("title")))])],1),e._v(" "),s("div",{staticClass:"vx-col w-full"},[s("vs-select",{staticClass:"w-full",attrs:{autocomplete:"",label:"ប្រភេទ"},on:{"input-change":function(e){}},model:{value:e.user.category,callback:function(t){e.$set(e.user,"category",t)},expression:"user.category"}},e._l(e.categories,(function(e,t){return s("vs-select-item",{key:t,attrs:{value:e.category,text:e.category}})})),1)],1),e._v(" "),s("div",{staticClass:"vx-col w-full"},[s("tinymce",{attrs:{id:"d1",other_options:e.options},model:{value:e.data,callback:function(t){e.data=t},expression:"data"}})],1)]),e._v(" "),s("div",{staticClass:"vx-row mb-2"},[s("div",{staticClass:"vx-col sm:w-1/2 w-full"},[s("vs-select",{staticClass:"w-full",attrs:{autocomplete:"",label:"សិទ្ធ"},on:{"input-change":function(e){}},model:{value:e.user.role,callback:function(t){e.$set(e.user,"role",t)},expression:"user.role"}},[s("vs-select-item",{attrs:{value:"user",text:"User"}}),e._v(" "),s("vs-select-item",{attrs:{value:"admin",text:"Admin"}}),e._v(" "),s("vs-select-item",{attrs:{value:"super_admin",text:"Super Admin"}})],1)],1),e._v(" "),s("div",{staticClass:"vx-col sm:w-1/2 w-full"},[s("vs-select",{staticClass:"w-full",attrs:{autocomplete:"",label:"ប្រភេទ"},on:{"input-change":function(e){}},model:{value:e.user.type,callback:function(t){e.$set(e.user,"type",t)},expression:"user.type"}},[s("vs-select-item",{attrs:{value:"employee",text:"Employee"}}),e._v(" "),s("vs-select-item",{attrs:{value:"owner",text:"Owner"}}),e._v(" "),s("vs-select-item",{attrs:{value:"developer",text:"Developer"}})],1)],1)]),e._v(" "),s("div",{staticClass:"vx-row mb-2"},[s("div",{staticClass:"vx-col sm:w-1/2 w-full"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"w-full",attrs:{type:"email",name:"email","icon-pack":"feather",icon:"icon-mail","icon-no-border":"","label-placeholder":"អ៊ីម៉ែល"},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("email"),expression:"errors.has('email')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("email")))])],1),e._v(" "),s("div",{staticClass:"vx-col sm:w-1/2 w-full"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{name:"telephone","icon-pack":"feather",icon:"icon-smartphone","icon-no-border":"","label-placeholder":"លេខទុរស័ព្ទ"},model:{value:e.user.telephone,callback:function(t){e.$set(e.user,"telephone",t)},expression:"user.telephone"}}),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("telephone"),expression:"errors.has('telephone')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("telephone")))])],1)]),e._v(" "),s("vs-divider"),e._v(" "),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-full"},[s("vs-button",{staticClass:"mr-3 mb-2",attrs:{type:"relief"},on:{click:function(t){return t.preventDefault(),e.submitForm(t)}}},[e._v("\n                    បង្កើត\n                ")]),e._v(" "),s("vs-button",{staticClass:"mb-2",attrs:{color:"warning",type:"relief"},on:{click:[function(t){return t.preventDefault(),e.resetField(t)},function(e){}]}},[e._v("\n                    ចាកចេញ\n                ")])],1)])],1)])}),[],!1,null,"3ae8426e",null).exports,n={name:"editHome",props:["is_popup"],data:function(){return{user:{profile:null,gender:"ប្រុស",role:"user",type:"employee",name:"",email:"",telephone:"",password:""}}},computed:{popupSync:{get:function(){return this.is_popup},set:function(e){this.$emit("update-is_popup",e)}}}},r=Object(i.a)(n,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("vs-popup",{attrs:{title:"បន្ថែមអ្នកប្រើប្រាស់",active:e.popupSync},on:{"update:active":function(t){e.popupSync=t}}},[s("form",[s("div",{staticClass:"vx-row mb-2"},[s("div",{staticClass:"vx-col sm:w-1/2 w-full"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{name:"name","icon-pack":"feather",icon:"icon-user","icon-no-border":"","label-placeholder":"ឈ្មោះ"},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}}),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("name"),expression:"errors.has('name')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("name")))])],1),e._v(" "),s("div",{staticClass:"vx-col sm:w-1/2 w-full"},[s("vs-select",{staticClass:"w-full",attrs:{autocomplete:"",label:"ភេទ"},on:{"input-change":function(e){}},model:{value:e.user.gender,callback:function(t){e.$set(e.user,"gender",t)},expression:"user.gender"}},[s("vs-select-item",{attrs:{value:"ប្រុស",text:"ប្រុស"}}),e._v(" "),s("vs-select-item",{attrs:{value:"ស្រី",text:"ស្រី"}})],1)],1)]),e._v(" "),s("div",{staticClass:"vx-row mb-2"},[s("div",{staticClass:"vx-col sm:w-1/2 w-full"},[s("vs-select",{staticClass:"w-full",attrs:{autocomplete:"",label:"សិទ្ធ"},on:{"input-change":function(e){}},model:{value:e.user.role,callback:function(t){e.$set(e.user,"role",t)},expression:"user.role"}},[s("vs-select-item",{attrs:{value:"user",text:"User"}}),e._v(" "),s("vs-select-item",{attrs:{value:"admin",text:"Admin"}}),e._v(" "),s("vs-select-item",{attrs:{value:"super_admin",text:"Super Admin"}})],1)],1),e._v(" "),s("div",{staticClass:"vx-col sm:w-1/2 w-full"},[s("vs-select",{staticClass:"w-full",attrs:{autocomplete:"",label:"ប្រភេទ"},on:{"input-change":function(e){}},model:{value:e.user.type,callback:function(t){e.$set(e.user,"type",t)},expression:"user.type"}},[s("vs-select-item",{attrs:{value:"employee",text:"Employee"}}),e._v(" "),s("vs-select-item",{attrs:{value:"owner",text:"Owner"}}),e._v(" "),s("vs-select-item",{attrs:{value:"developer",text:"Developer"}})],1)],1)]),e._v(" "),s("div",{staticClass:"vx-row mb-2"},[s("div",{staticClass:"vx-col sm:w-1/2 w-full"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"w-full",attrs:{type:"email",name:"email","icon-pack":"feather",icon:"icon-mail","icon-no-border":"","label-placeholder":"អ៊ីម៉ែល"},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("email"),expression:"errors.has('email')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("email")))])],1),e._v(" "),s("div",{staticClass:"vx-col sm:w-1/2 w-full"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{name:"telephone","icon-pack":"feather",icon:"icon-smartphone","icon-no-border":"","label-placeholder":"លេខទុរស័ព្ទ"},model:{value:e.user.telephone,callback:function(t){e.$set(e.user,"telephone",t)},expression:"user.telephone"}}),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("telephone"),expression:"errors.has('telephone')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("telephone")))])],1)]),e._v(" "),s("vs-divider"),e._v(" "),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-full"},[s("vs-button",{staticClass:"mr-3 mb-2",attrs:{type:"relief"},on:{click:function(t){return t.preventDefault(),e.submitForm(t)}}},[e._v("\n                    បង្កើត\n                ")]),e._v(" "),s("vs-button",{staticClass:"mb-2",attrs:{color:"warning",type:"relief"},on:{click:[function(t){return t.preventDefault(),e.resetField(t)},function(e){}]}},[e._v("\n                    ចាកចេញ\n                ")])],1)])],1)])}),[],!1,null,"09f8f594",null).exports,l=s("o0o1"),c=s.n(l),u={name:"addDemo",data:function(){return{about:{title:"",excerpt:"",content:""},options:{height:300}}},methods:{show:function(){this.$modal.show("add")},storeAbout:function(){var e=this;this.$validator.validateAll().then((function(t){t&&e.about.content?(e.$vs.loading(),e.$store.dispatch("storeAbout",e.about).then((function(t){t?(e.$vs.notify({time:4e3,title:"ប្រតិបត្តិការជោគជ័យ",text:"ទិន្នន័យបានបន្ថែម",color:"success",iconPack:"feather",icon:"icon-check",position:"top-center"}),e.resetField()):e.$vs.notify({title:"ប្រតិបត្តិការបរាជ័យ",text:"ទិន្នន័យមិនបានបន្ថែម",color:"danger",iconPack:"feather",icon:"icon-message-square",position:"top-center"}),e.$vs.loading.close()}))):e.$vs.notify({title:"ប្រតិបត្តិការបរាជ័យ",text:"សូមបំពេញទិន្នន័យអោយបានត្រឹមត្រូវ",color:"danger",iconPack:"feather",icon:"icon-message-square",position:"top-center"})}))},resetField:function(){this.about={title:"",excerpt:"",content:""}}}},v=Object(i.a)(u,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("modal",{attrs:{width:"90%",height:"auto",scrollable:!0,pivotY:.2,clickToClose:!1,name:"add"}},[s("div",{staticClass:"flex justify-end"},[s("i",{staticClass:"vs-icon vs-popup--close material-icons text-warning",staticStyle:{background:"rgb(255, 255, 255)"},on:{click:function(t){return e.$modal.hide("add")}}},[e._v("close")])]),e._v(" "),s("vx-card",{attrs:{"no-shadow":""}},[s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-full mb-2"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{"label-placeholder":"ចំណងជើង",name:"title"},model:{value:e.about.title,callback:function(t){e.$set(e.about,"title",t)},expression:"about.title"}}),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("title"),expression:"errors.has('title')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("title")))])],1),e._v(" "),s("div",{staticClass:"vx-col w-full"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{"label-placeholder":"សង្ខេបអត្ថបទ",name:"excerpt"},model:{value:e.about.excerpt,callback:function(t){e.$set(e.about,"excerpt",t)},expression:"about.excerpt"}}),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("excerpt"),expression:"errors.has('excerpt')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("excerpt")))])],1),e._v(" "),s("div",{staticClass:"vx-col w-full mt-4"},[s("tinymce",{attrs:{id:"add-about",other_options:e.options},model:{value:e.about.content,callback:function(t){e.$set(e.about,"content",t)},expression:"about.content"}})],1)]),e._v(" "),s("vs-divider"),e._v(" "),s("div",{staticClass:"flex justify-end btn-group"},[s("vs-button",{attrs:{icon:"icon-save","icon-pack":"feather",type:"relief"},on:{click:e.storeAbout}},[e._v("រក្សាទុក")])],1)],1)],1)}),[],!1,null,"61ba29ee",null).exports;function d(e,t,s,a,i,o,n){try{var r=e[o](n),l=r.value}catch(e){return void s(e)}r.done?t(l):Promise.resolve(l).then(a,i)}var p,m,f={name:"editDemo",data:function(){return{about:{title:"",excerpt:"",content:""},options:{height:300}}},methods:{show:function(){this.$modal.show("edit")},fetchAbout:(p=c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("fetchAbout");case 2:case"end":return e.stop()}}),e,this)})),m=function(){var e=this,t=arguments;return new Promise((function(s,a){var i=p.apply(e,t);function o(e){d(i,s,a,o,n,"next",e)}function n(e){d(i,s,a,o,n,"throw",e)}o(void 0)}))},function(){return m.apply(this,arguments)}),editAbout:function(e){var t=this;t.$store.dispatch("editAbout",e).then((function(e){t.about=e}))},updateAbout:function(){var e=this;this.$validator.validateAll().then((function(t){t&&e.about.content?(e.$vs.loading(),e.$store.dispatch("updateAbout",e.about).then((function(t){t?(e.$vs.notify({time:4e3,title:"ប្រតិបត្តិការជោគជ័យ",text:"ទិន្នន័យបានបន្ថែម",color:"success",iconPack:"feather",icon:"icon-check",position:"top-center"}),e.fetchAbout(),e.$emit("finished")):e.$vs.notify({title:"ប្រតិបត្តិការបរាជ័យ",text:"ទិន្នន័យមិនបានបន្ថែម",color:"danger",iconPack:"feather",icon:"icon-message-square",position:"top-center"}),e.$vs.loading.close()}))):e.$vs.notify({title:"ប្រតិបត្តិការបរាជ័យ",text:"សូមបំពេញទិន្នន័យអោយបានត្រឹមត្រូវ",color:"danger",iconPack:"feather",icon:"icon-message-square",position:"top-center"})}))}}};function h(e,t,s,a,i,o,n){try{var r=e[o](n),l=r.value}catch(e){return void s(e)}r.done?t(l):Promise.resolve(l).then(a,i)}function _(e){return function(){var t=this,s=arguments;return new Promise((function(a,i){var o=e.apply(t,s);function n(e){h(o,a,i,n,r,"next",e)}function r(e){h(o,a,i,n,r,"throw",e)}n(void 0)}))}}var x,b={name:"Demo",components:{EditDemo:Object(i.a)(f,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("modal",{attrs:{width:"1000",height:"auto",scrollable:!0,pivotY:.07,adaptive:!0,clickToClose:!1,name:"edit"}},[s("div",{staticClass:"flex justify-end"},[s("i",{staticClass:"vs-icon vs-popup--close material-icons text-warning",staticStyle:{background:"rgb(255, 255, 255)"},on:{click:function(t){return e.$modal.hide("edit")}}},[e._v("close")])]),e._v(" "),s("vx-card",{attrs:{"no-shadow":""}},[s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-full mb-2"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{"label-placeholder":"ចំណងជើង",name:"title"},model:{value:e.about.title,callback:function(t){e.$set(e.about,"title",t)},expression:"about.title"}}),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("title"),expression:"errors.has('title')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("title")))])],1),e._v(" "),s("div",{staticClass:"vx-col w-full"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{"label-placeholder":"សង្ខេបអត្ថបទ",name:"excerpt"},model:{value:e.about.excerpt,callback:function(t){e.$set(e.about,"excerpt",t)},expression:"about.excerpt"}}),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("excerpt"),expression:"errors.has('excerpt')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("excerpt")))])],1),e._v(" "),s("div",{staticClass:"vx-col w-full mt-4"},[s("tinymce",{attrs:{id:"add-about",other_options:e.options},model:{value:e.about.content,callback:function(t){e.$set(e.about,"content",t)},expression:"about.content"}})],1)]),e._v(" "),s("vs-divider"),e._v(" "),s("div",{staticClass:"flex justify-end btn-group"},[s("vs-button",{attrs:{icon:"icon-edit","icon-pack":"feather",type:"relief"},on:{click:e.updateAbout}},[e._v("កែប្រែ")])],1)],1)],1)}),[],!1,null,"5160427e",null).exports,AddDemo:v},data:function(){return{selected:[]}},computed:{all_about:function(){return this.$store.getters.all_about}},methods:{destroyAbout:(x=_(c.a.mark((function e(){var t,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=this).$vs.loading(),s=t.selected.map(function(){var e=_(c.a.mark((function e(s){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("destroyAbout",s.id);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=5,Promise.all(s).then((function(){t.$vs.notify({time:4e3,title:"ប្រតិបត្តិការជោគជ័យ",text:"ទិន្នន័យបានបន្ថែម",color:"success",iconPack:"feather",icon:"icon-check",position:"top-center"}),t.selected=[],t.$vs.loading.close()}));case 5:case"end":return e.stop()}}),e,this)}))),function(){return x.apply(this,arguments)})}},w={components:{Demo:Object(i.a)(b,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("vx-card",{attrs:{"no-shadow":""}},[s("div",{staticClass:"flex btn-group"},[s("vs-button",{attrs:{type:"relief","icon-pack":"feather",icon:"icon-plus-square"},on:{click:function(t){return e.$refs.addAbout.show()}}},[e._v("បន្ថែម")]),e._v(" "),1===e.selected.length?s("vs-button",{attrs:{color:"warning",type:"relief","icon-pack":"feather",icon:"icon-edit"},on:{click:function(t){e.$refs.editAbout.show(),e.$refs.editAbout.editAbout(e.selected[0].id)}}},[e._v("កែប្រែ")]):e._e(),e._v(" "),e.selected.length?s("vs-button",{attrs:{color:"danger",type:"relief","icon-pack":"feather",icon:"icon-trash-2"},on:{click:e.destroyAbout}},[e._v("លុប")]):e._e()],1),e._v(" "),s("vs-table",{attrs:{multiple:"",pagination:"","max-items":"10",search:"",data:e.all_about},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.data;return e._l(a,(function(t,i){return s("vs-tr",{key:i,attrs:{data:t}},[s("vs-td",{attrs:{data:a[i].id}},[e._v("\n                    "+e._s(a[i].id)+"\n                ")]),e._v(" "),s("vs-td",{attrs:{data:a[i].title}},[e._v("\n                    "+e._s(a[i].title)+"\n                ")]),e._v(" "),s("vs-td",{attrs:{data:a[i].excerpt}},[e._v("\n                    "+e._s(a[i].excerpt)+"\n                ")]),e._v(" "),s("vs-td",{attrs:{data:a[i].created_at}},[e._v("\n                    "+e._s(a[i].created_at)+"\n                ")])],1)}))}}]),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[s("template",{slot:"thead"},[s("vs-th",{attrs:{"sort-key":"id"}},[e._v("ល.រ")]),e._v(" "),s("vs-th",{attrs:{"sort-key":"title"}},[e._v("ឈ្មោះ")]),e._v(" "),s("vs-th",{attrs:{"sort-key":"excerpt"}},[e._v("សង្ខេប")]),e._v(" "),s("vs-th",{attrs:{"sort-key":"created_at"}},[e._v("កាលបរិច្ឆេទ")])],1)],2),e._v(" "),s("add-demo",{ref:"addAbout"}),e._v(" "),s("edit-demo",{ref:"editAbout",on:{finished:function(t){e.selected=[]}}})],1)}),[],!1,null,"45278306",null).exports,EditHome:r,AddHome:o},data:function(){return{is_popup:!1,is_popup_edit:!1,selected:[],tableList:["vs-th: Component","vs-tr: Component","vs-td: Component","thread: Slot","tbody: Slot","header: Slot"],users:[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",website:"hildegard.org"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",website:"anastasia.net"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",website:"ramiro.info"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",website:"kale.biz"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",website:"demarco.info"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",website:"ola.org"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",website:"elvis.io"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",website:"jacynthe.com"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",website:"conrad.com"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",website:"ambrose.net"}],data:"Working on the mix",options:{}}},methods:{syncPopup:function(e){this.is_popup=e},syncPopupEdit:function(e){this.is_popup_edit=e}}},y=Object(i.a)(w,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("demo"),e._v(" "),s("tinymce",{attrs:{id:"d2",other_options:e.options},model:{value:e.data,callback:function(t){e.data=t},expression:"data"}}),e._v(" "),s("div",{staticClass:"flex btn-group"},[s("vs-button",{attrs:{type:"relief","icon-pack":"feather",icon:"icon-plus-square"},on:{click:function(t){e.is_popup=!0}}},[e._v("បន្ថែម")]),e._v(" "),s("vs-button",{attrs:{color:"warning",type:"relief","icon-pack":"feather",icon:"icon-edit"},on:{click:function(t){e.is_popup_edit=!0}}},[e._v("កែប្រែ")]),e._v(" "),s("vs-button",{attrs:{type:"relief","icon-pack":"feather",icon:"icon-package"}},[e._v("អាប់គ្រេដ")]),e._v(" "),s("vs-button",{attrs:{color:"danger",type:"relief","icon-pack":"feather",icon:"icon-trash-2"}},[e._v("លុប")]),e._v(" "),s("add-home",{attrs:{is_popup:e.is_popup},on:{"update-is_popup":e.syncPopup}}),e._v(" "),s("edit-home",{attrs:{is_popup:e.is_popup_edit},on:{"update-is_popup":e.syncPopupEdit}})],1)],1)}),[],!1,null,null,null);t.default=y.exports}}]);