(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"4hyD":function(t,e,a){"use strict";var s={name:"addCategory",data:function(){return{category:""}},methods:{show:function(){this.$modal.show("add-category")},storeCategory:function(){var t=this;this.$validator.validateAll().then((function(e){e?(t.$vs.loading(),t.$store.dispatch("storeCategory",{name:t.category}).then((function(e){e?(t.$vs.notify({time:4e3,title:"ប្រតិបត្តិការជោគជ័យ",text:"ទិន្នន័យបានបន្ថែម",color:"success",iconPack:"feather",icon:"icon-check",position:"top-center"}),t.resetField()):t.$vs.notify({title:"ប្រតិបត្តិការបរាជ័យ",text:"ទិន្នន័យមិនបានបន្ថែម",color:"danger",iconPack:"feather",icon:"icon-message-square",position:"top-center"}),t.$vs.loading.close()}))):t.$vs.notify({title:"ប្រតិបត្តិការបរាជ័យ",text:"សូមបំពេញទិន្នន័យអោយបានត្រឹមត្រូវ",color:"danger",iconPack:"feather",icon:"icon-message-square",position:"top-center"})}))},resetField:function(){this.category=""}}},r=a("KHd+"),n=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("modal",{attrs:{height:"auto",scrollable:!0,pivotY:.2,clickToClose:!1,name:"add-category"}},[a("div",{staticClass:"flex justify-end"},[a("i",{staticClass:"vs-icon vs-popup--close material-icons text-warning",staticStyle:{background:"rgb(255, 255, 255)"},on:{click:function(e){return t.$modal.hide("add-category")}}},[t._v("close")])]),t._v(" "),a("vx-card",{attrs:{"no-shadow":""}},[a("div",{staticClass:"vx-row mb-10"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{"label-placeholder":"ឈ្មោះ",name:"category"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.storeCategory(e)}},model:{value:t.category,callback:function(e){t.category=e},expression:"category"}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("category"),expression:"errors.has('category')"}],staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("category")))])],1)])],1)}),[],!1,null,"b31718a8",null);e.a=n.exports},"9Dpo":function(t,e,a){"use strict";var s={name:"addBrand",data:function(){return{brand:""}},methods:{show:function(){this.$modal.show("add-brand")},storeBrand:function(){var t=this;this.$validator.validateAll().then((function(e){e?(t.$vs.loading(),t.$store.dispatch("storeBrand",{name:t.brand}).then((function(e){e?(t.$vs.notify({time:4e3,title:"ប្រតិបត្តិការជោគជ័យ",text:"ទិន្នន័យបានបន្ថែម",color:"success",iconPack:"feather",icon:"icon-check",position:"top-center"}),t.resetField()):t.$vs.notify({title:"ប្រតិបត្តិការបរាជ័យ",text:"ទិន្នន័យមិនបានបន្ថែម",color:"danger",iconPack:"feather",icon:"icon-message-square",position:"top-center"}),t.$vs.loading.close()}))):t.$vs.notify({title:"ប្រតិបត្តិការបរាជ័យ",text:"សូមបំពេញទិន្នន័យអោយបានត្រឹមត្រូវ",color:"danger",iconPack:"feather",icon:"icon-message-square",position:"top-center"})}))},resetField:function(){this.brand=""}}},r=a("KHd+"),n=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("modal",{attrs:{height:"auto",scrollable:!0,pivotY:.2,clickToClose:!1,name:"add-brand"}},[a("div",{staticClass:"flex justify-end"},[a("i",{staticClass:"vs-icon vs-popup--close material-icons text-warning",staticStyle:{background:"rgb(255, 255, 255)"},on:{click:function(e){return t.$modal.hide("add-brand")}}},[t._v("close")])]),t._v(" "),a("vx-card",{attrs:{"no-shadow":""}},[a("div",{staticClass:"vx-row mb-10"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{"label-placeholder":"ឈ្មោះ",name:"brand"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.storeBrand(e)}},model:{value:t.brand,callback:function(e){t.brand=e},expression:"brand"}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("brand"),expression:"errors.has('brand')"}],staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("brand")))])],1)])],1)}),[],!1,null,"1dd572a1",null);e.a=n.exports},"9xQ3":function(t,e,a){var s=a("yoef");"string"==typeof s&&(s=[[t.i,s,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,r);s.locals&&(t.exports=s.locals)},F2Tj:function(t,e,a){"use strict";var s=a("9xQ3");a.n(s).a},dBer:function(t,e,a){"use strict";a.r(e);var s=a("o0o1"),r=a.n(s),n=a("ksP6"),o=a.n(n),i=(a("Hj/Q"),a("yo3J")),c=a("4hyD"),l=a("9Dpo"),d=a("Snq/"),u=a.n(d),v={name:"addProduct",components:{AddBrand:l.a,AddCategory:c.a,AddUnit:i.a,vueDropzone:o.a,"v-select":u.a},data:function(){return{product:{name:"",description:"",unit:{name:"ដំុ"},category:{name:"RX300"},brand:{name:"Toyota"},inventory_type:"inventory_part",default_purchase:1,default_sale:1,image:"images/placeholder/placeholder.png"},dropzoneOptions:{url:route("file.upload.thumb"),maxFiles:1,addRemoveLinks:!0,dictDefaultMessage:"ដាក់រូបភាពទំនិញបើមាន",thumbnailWidth:150,thumbnailHeight:150}}},computed:{all_product:function(){return this.$store.getters.all_product},all_units:function(){return this.$store.getters.all_unit},all_categories:function(){return this.$store.getters.all_category},all_brands:function(){return this.$store.getters.all_brand}},methods:{show:function(){this.$modal.show("add")},storeProduct:function(){var t=this;this.$validator.validateAll().then((function(e){e?(t.$vs.loading(),t.$store.dispatch("storeProduct",t.product).then((function(e){e?(t.$vs.notify({time:4e3,title:"ប្រតិបត្តិការជោគជ័យ",text:"ទិន្នន័យបានបន្ថែម",color:"success",iconPack:"feather",icon:"icon-check",position:"top-center"}),t.resetField()):t.$vs.notify({title:"ប្រតិបត្តិការបរាជ័យ",text:"ទិន្នន័យមិនបានបន្ថែម",color:"danger",iconPack:"feather",icon:"icon-message-square",position:"top-center"}),t.$vs.loading.close()}))):t.$vs.notify({title:"ប្រតិបត្តិការបរាជ័យ",text:"សូមបំពេញទិន្នន័យអោយបានត្រឹមត្រូវ",color:"danger",iconPack:"feather",icon:"icon-message-square",position:"top-center"})}))},resetField:function(){this.product={name:"",description:"",unit:{name:"ដំុ"},category:{name:"RX300"},brand:{name:"Toyota"},inventory_type:"inventory_part",default_purchase:1,default_sale:1,image:"images/placeholder/placeholder.png"}},successUpload:function(t,e){this.product.image=e.path}}},p=(a("F2Tj"),a("KHd+")),m=Object(p.a)(v,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("modal",{attrs:{width:"90%",height:"auto",scrollable:!0,pivotY:.2,clickToClose:!1,name:"add"}},[a("div",{staticClass:"flex justify-end"},[a("i",{staticClass:"vs-icon vs-popup--close material-icons text-warning",staticStyle:{background:"rgb(255, 255, 255)"},on:{click:function(e){return t.$modal.hide("add")}}},[t._v("close")])]),t._v(" "),a("vx-card",{attrs:{"no-shadow":""}},[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col md:w-1/3 w-full"},[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full"},[a("label",[t._v("ឈ្មោះ")]),t._v(" "),a("vue-instant",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:"styles","suggestion-attribute":"name",suggestions:t.all_product,type:"google",name:"name"},model:{value:t.product.name,callback:function(e){t.$set(t.product,"name",e)},expression:"product.name"}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("name"),expression:"errors.has('name')"}],staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("name")))])],1),t._v(" "),a("div",{staticClass:"vx-col w-full my-2"},[a("label",[t._v("ពិពណ៌នា")]),t._v(" "),a("vs-textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{label:"ពិពណ៌នា",name:"description"},model:{value:t.product.description,callback:function(e){t.$set(t.product,"description",e)},expression:"product.description"}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("description"),expression:"errors.has('description')"}],staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("description")))])],1),t._v(" "),a("div",{staticClass:"vx-col w-full"},[a("vs-input-number",{attrs:{min:"0",label:"តម្លៃទិញ:"},model:{value:t.product.default_purchase,callback:function(e){t.$set(t.product,"default_purchase",e)},expression:"product.default_purchase"}})],1),t._v(" "),a("div",{staticClass:"vx-col w-full"},[a("vs-input-number",{attrs:{min:"0",label:"តម្លៃទលក់:"},model:{value:t.product.default_sale,callback:function(e){t.$set(t.product,"default_sale",e)},expression:"product.default_sale"}})],1)])]),t._v(" "),a("div",{staticClass:"vx-col md:w-2/3 w-full"},[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col md:w-1/2 w-full"},[a("label",[t._v("Unit")]),t._v(" "),a("vx-input-group",[a("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"unit",clearable:!1,label:"name",options:t.all_units},model:{value:t.product.unit,callback:function(e){t.$set(t.product,"unit",e)},expression:"product.unit"}}),t._v(" "),a("template",{slot:"append"},[a("div",{staticClass:"append-text btn-addon",on:{click:function(e){return t.$refs.addUnit.show()}}},[a("vs-button",{staticClass:"rounded-none",attrs:{type:"filled","icon-pack":"feather",icon:"icon-plus"}})],1)])],2),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("unit"),expression:"errors.has('unit')"}],staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("unit")))])],1),t._v(" "),a("div",{staticClass:"vx-col md:w-1/2 w-full"},[a("label",[t._v("ប្រភេទ")]),t._v(" "),a("vx-input-group",[a("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"category",clearable:!1,label:"name",options:t.all_categories},model:{value:t.product.category,callback:function(e){t.$set(t.product,"category",e)},expression:"product.category"}}),t._v(" "),a("template",{slot:"append"},[a("div",{staticClass:"append-text btn-addon",on:{click:function(e){return t.$refs.addCategory.show()}}},[a("vs-button",{staticClass:"rounded-none",attrs:{type:"filled","icon-pack":"feather",icon:"icon-plus"}})],1)])],2),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("category"),expression:"errors.has('category')"}],staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("category")))])],1)]),t._v(" "),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col md:w-1/2 w-full"},[a("label",[t._v("Model")]),t._v(" "),a("vx-input-group",[a("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"brand",clearable:!1,label:"name",options:t.all_brands},model:{value:t.product.brand,callback:function(e){t.$set(t.product,"brand",e)},expression:"product.brand"}}),t._v(" "),a("template",{slot:"append"},[a("div",{staticClass:"append-text btn-addon",on:{click:function(e){return t.$refs.addBrand.show()}}},[a("vs-button",{staticClass:"rounded-none",attrs:{type:"filled","icon-pack":"feather",icon:"icon-plus"}})],1)])],2),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("brand"),expression:"errors.has('brand')"}],staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("brand")))])],1),t._v(" "),a("div",{staticClass:"vx-col md:w-1/2 w-full"},[a("label",[t._v("Inventory Type")]),t._v(" "),a("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"inventory_type",options:["inventory_part","service","sale_only","purchase_only"]},model:{value:t.product.inventory_type,callback:function(e){t.$set(t.product,"inventory_type",e)},expression:"product.inventory_type"}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("inventory_type"),expression:"errors.has('inventory_type')"}],staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("inventory_type")))])],1)]),t._v(" "),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col md:w-1/2 my-2"},[a("vue-dropzone",{ref:"image",staticClass:"max-content p-1",attrs:{duplicateCheck:"",id:"dropzone",options:t.dropzoneOptions},on:{"vdropzone-success":t.successUpload}})],1)])])]),t._v(" "),a("vs-divider"),t._v(" "),a("div",{staticClass:"flex justify-end btn-group"},[a("vs-button",{attrs:{icon:"icon-save","icon-pack":"feather",type:"relief"},on:{click:t.storeProduct}},[t._v("រក្សាទុក")])],1)],1)],1),t._v(" "),a("add-unit",{ref:"addUnit"}),t._v(" "),a("add-category",{ref:"addCategory"}),t._v(" "),a("add-brand",{ref:"addBrand"})],1)}),[],!1,null,"7d22e570",null).exports,f=a("mddE"),_=a("q+Mi"),h=(a("rdXg"),{name:"printLabel",components:{"bar-code":_.a},methods:{show:function(t){this.$refs.printLabel.open()},printHtml:function(){window.print()}}});function y(t,e,a,s,r,n,o){try{var i=t[n](o),c=i.value}catch(t){return void a(t)}i.done?e(c):Promise.resolve(c).then(s,r)}function g(t){return function(){var e=this,a=arguments;return new Promise((function(s,r){var n=t.apply(e,a);function o(t){y(n,s,r,o,i,"next",t)}function i(t){y(n,s,r,o,i,"throw",t)}o(void 0)}))}}var x,b={name:"Product",components:{PrintLabel:Object(p.a)(h,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("sweet-modal",{ref:"printLabel",attrs:{title:"Print Label",blocking:!0,width:t.mobilecheck()?"":"60%"}},[a("div",{staticClass:"flex",attrs:{id:"section-to-print"}},t._l(10,(function(e,s){return a("div",{key:s,staticClass:"text-center p-2 ml-2 bordered"},[t._v("\n            Border sizing\n            "),a("bar-code",{attrs:{value:1,tag:"img",options:{displayValue:!0,height:50,width:2}}})],1)})),0),t._v(" "),a("vs-button",{attrs:{slot:"button"},on:{click:t.printHtml},slot:"button"},[t._v("Print")])],1)}),[],!1,null,"878b02bc",null).exports,EditProduct:f.a,AddProduct:m},data:function(){return{product_id:"",selected:[]}},computed:{all_about:function(){return this.$store.getters.all_about},all_product:function(){return this.$store.getters.all_product},search_all_product:function(){var t=this;return t.all_product.filter((function(e){return!t.product_id||e.id===parseInt(t.product_id)}))},suggestion_all_product:function(){return this.all_product.map((function(t){return{id:String(t.id)}}))}},methods:{destroyProduct:(x=g(r.a.mark((function t(){var e,a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(e=this).$vs.loading(),a=e.selected.map(function(){var t=g(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("destroyProduct",a.id);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.next=5,Promise.all(a).then((function(){e.$vs.notify({time:4e3,title:"ប្រតិបត្តិការជោគជ័យ",text:"ទិន្នន័យបានលុប",color:"success",iconPack:"feather",icon:"icon-check",position:"top-center"}),e.selected=[],e.$vs.loading.close()}));case 5:case"end":return t.stop()}}),t,this)}))),function(){return x.apply(this,arguments)})}},w=Object(p.a)(b,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("vx-card",{attrs:{"no-shadow":""}},[a("div",{staticClass:"flex btn-group"},[a("vs-button",{attrs:{type:"relief","icon-pack":"feather",icon:"icon-plus-square"},on:{click:function(e){return t.$refs.addProduct.show()}}},[t._v("បន្ថែម")]),t._v(" "),1===t.selected.length?a("vs-button",{attrs:{color:"warning",type:"relief","icon-pack":"feather",icon:"icon-edit"},on:{click:function(e){return t.$refs.editProduct.show(t.selected[0])}}},[t._v("កែប្រែ")]):t._e(),t._v(" "),t.selected.length?a("vs-button",{attrs:{color:"success",type:"relief","icon-pack":"feather",icon:"icon-printer"},on:{click:function(e){return t.$refs.printLabel.show(t.selected)}}},[t._v("Print Label")]):t._e(),t._v(" "),t.selected.length?a("vs-button",{attrs:{color:"danger",type:"relief","icon-pack":"feather",icon:"icon-trash-2"},on:{click:t.destroyProduct}},[t._v("លុប")]):t._e()],1),t._v(" "),a("vue-instant",{staticClass:"mt-base",attrs:{id:"purchase_pen","suggestion-attribute":"id",suggestions:t.suggestion_all_product,type:"google"},on:{clear:function(e){t.product_id=""}},model:{value:t.product_id,callback:function(e){t.product_id=e},expression:"product_id"}}),t._v(" "),a("vs-table",{attrs:{multiple:"",pagination:"","max-items":"10",search:"",data:t.search_all_product},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.data;return t._l(s,(function(e,r){return a("vs-tr",{key:r,attrs:{data:e}},[a("vs-td",{attrs:{data:s[r].id}},[t._v("\n                    "+t._s(s[r].id)+"\n                ")]),t._v(" "),a("vs-td",{attrs:{data:s[r].name}},[t._v("\n                    "+t._s(s[r].name)+"\n                ")]),t._v(" "),a("vs-td",{attrs:{data:s[r].description}},[t._v("\n                    "+t._s(s[r].description)+"\n                ")]),t._v(" "),a("vs-td",{attrs:{data:s[r].unit}},[t._v("\n                    "+t._s(s[r].unit)+"\n                ")]),t._v(" "),a("vs-td",{attrs:{data:s[r].category}},[t._v("\n                    "+t._s(s[r].category)+"\n                ")]),t._v(" "),a("vs-td",{attrs:{data:s[r].brand}},[t._v("\n                    "+t._s(s[r].brand)+"\n                ")]),t._v(" "),a("vs-td",{attrs:{data:s[r].inventory_type}},[t._v("\n                    "+t._s(s[r].inventory_type)+"\n                ")]),t._v(" "),a("vs-td",{attrs:{data:s[r].default_purchase}},[t._v("\n                    "+t._s(s[r].default_purchase)+"\n                ")]),t._v(" "),a("vs-td",{attrs:{data:s[r].default_sale}},[t._v("\n                    "+t._s(s[r].default_sale)+"\n                ")]),t._v(" "),a("vs-td",{attrs:{data:s[r].created_at}},[t._v("\n                    "+t._s(s[r].created_at)+"\n                ")])],1)}))}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[a("template",{slot:"thead"},[a("vs-th",{attrs:{"sort-key":"id"}},[t._v("ល.រ")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"name"}},[t._v("ឈ្មោះ")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"description"}},[t._v("ពិពណ៌នា")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"unit"}},[t._v("Unit")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"category"}},[t._v("ប្រភេទ")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"brand"}},[t._v("Brand")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"inventory_type"}},[t._v("Inventory Type")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"purchase"}},[t._v("តម្លៃទិញ")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"sale"}},[t._v("តម្លៃលក់")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"created_at"}},[t._v("កាលបរិច្ឆេទ")])],1)],2),t._v(" "),a("add-product",{ref:"addProduct"}),t._v(" "),a("edit-product",{ref:"editProduct",on:{finished:function(e){t.selected=[]}}}),t._v(" "),a("print-label",{ref:"printLabel",on:{finished:function(t){}}})],1)}),[],!1,null,"bf251dca",null);e.default=w.exports},mddE:function(t,e,a){"use strict";var s=a("ksP6"),r=a.n(s),n=(a("Hj/Q"),a("Snq/")),o=a.n(n),i=a("yo3J"),c=a("4hyD"),l={name:"editProduct",components:{AddBrand:a("9Dpo").a,AddCategory:c.a,AddUnit:i.a,vueDropzone:r.a,"v-select":o.a},data:function(){return{product:{name:"",description:"",unit:{name:"ដំុ"},category:{name:"RX300"},brand:{name:"Toyota"},inventory_type:"inventory_part",default_purchase:1,default_sale:1,image:"images/placeholder/placeholder.png"},units:[{name:"គីឡូ"},{name:"លីត្រ"},{name:"ដំុ"}],categories:[{name:"គ្រឿងក្រោម"},{name:"ដែក"},{name:"ដំុ"}],brands:[{name:"AKA"},{name:"Snip"}],inventory_type:[{name:"inventory_part"},{name:"service"},{name:"sale_only"},{name:"purchase_only"}],dropzoneOptions:{url:route("file.upload.thumb"),maxFiles:1,addRemoveLinks:!0,dictDefaultMessage:"ដាក់រូបភាពទំនិញបើមាន",thumbnailWidth:150,thumbnailHeight:150}}},computed:{all_product:function(){return this.$store.getters.all_product},all_units:function(){return this.$store.getters.all_unit},all_categories:function(){return this.$store.getters.all_category},all_brands:function(){return this.$store.getters.all_brand}},methods:{show:function(t){this.$modal.show("edit"),this.product.id=t.id,this.product.name=t.name,this.product.description=t.description,this.product.unit={name:t.unit},this.product.category={name:t.category},this.product.brand={name:t.brand},this.product.inventory_type=t.inventory_type,this.product.default_purchase=t.default_purchase,this.product.default_sale=t.default_sale,this.product.image=t.image},editThumb:function(){this.$refs.image.manuallyAddFile({size:123},this.product.image)},updateProduct:function(){var t=this;this.$validator.validateAll().then((function(e){e?(t.$vs.loading(),t.$store.dispatch("updateProduct",t.product).then((function(e){e?(t.$vs.notify({time:4e3,title:"ប្រតិបត្តិការជោគជ័យ",text:"ទិន្នន័យបានកែប្រែ",color:"success",iconPack:"feather",icon:"icon-check",position:"top-center"}),t.$emit("finished")):t.$vs.notify({title:"ប្រតិបត្តិការបរាជ័យ",text:"ទិន្នន័យមិនបានកែប្រែ",color:"danger",iconPack:"feather",icon:"icon-message-square",position:"top-center"}),t.$vs.loading.close()}))):t.$vs.notify({title:"ប្រតិបត្តិការបរាជ័យ",text:"សូមបំពេញទិន្នន័យអោយបានត្រឹមត្រូវ",color:"danger",iconPack:"feather",icon:"icon-message-square",position:"top-center"})}))},successUpload:function(t,e){this.product.image=e.path}}},d=a("KHd+"),u=Object(d.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("modal",{attrs:{width:"90%",height:"auto",scrollable:!0,pivotY:.2,clickToClose:!1,name:"edit"}},[a("div",{staticClass:"flex justify-end"},[a("i",{staticClass:"vs-icon vs-popup--close material-icons text-warning",staticStyle:{background:"rgb(255, 255, 255)"},on:{click:function(e){return t.$modal.hide("edit")}}},[t._v("close")])]),t._v(" "),a("vx-card",{attrs:{"no-shadow":""}},[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col md:w-1/3 w-full"},[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full"},[a("label",[t._v("ឈ្មោះ")]),t._v(" "),a("vue-instant",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:"styles","suggestion-attribute":"name",suggestions:t.all_product,type:"google",name:"name"},model:{value:t.product.name,callback:function(e){t.$set(t.product,"name",e)},expression:"product.name"}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("name"),expression:"errors.has('name')"}],staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("name")))])],1),t._v(" "),a("div",{staticClass:"vx-col w-full my-2"},[a("label",[t._v("ពិពណ៌នា")]),t._v(" "),a("vs-textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{label:"ពិពណ៌នា",name:"description"},model:{value:t.product.description,callback:function(e){t.$set(t.product,"description",e)},expression:"product.description"}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("description"),expression:"errors.has('description')"}],staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("description")))])],1),t._v(" "),a("div",{staticClass:"vx-col w-full"},[a("vs-input-number",{attrs:{min:"0",label:"តម្លៃទិញ:"},model:{value:t.product.default_purchase,callback:function(e){t.$set(t.product,"default_purchase",e)},expression:"product.default_purchase"}})],1),t._v(" "),a("div",{staticClass:"vx-col w-full"},[a("vs-input-number",{attrs:{min:"0",label:"តម្លៃទលក់:"},model:{value:t.product.default_sale,callback:function(e){t.$set(t.product,"default_sale",e)},expression:"product.default_sale"}})],1)])]),t._v(" "),a("div",{staticClass:"vx-col md:w-2/3 w-full"},[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col md:w-1/2 w-full"},[a("label",[t._v("Unit")]),t._v(" "),a("vx-input-group",[a("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"unit",clearable:!1,label:"name",options:t.all_units},model:{value:t.product.unit,callback:function(e){t.$set(t.product,"unit",e)},expression:"product.unit"}}),t._v(" "),a("template",{slot:"append"},[a("div",{staticClass:"append-text btn-addon",on:{click:function(e){return t.$refs.addUnit.show()}}},[a("vs-button",{staticClass:"rounded-none",attrs:{type:"filled","icon-pack":"feather",icon:"icon-plus"}})],1)])],2),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("unit"),expression:"errors.has('unit')"}],staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("unit")))])],1),t._v(" "),a("div",{staticClass:"vx-col md:w-1/2 w-full"},[a("label",[t._v("ប្រភេទ")]),t._v(" "),a("vx-input-group",[a("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"category",clearable:!1,label:"name",options:t.all_categories},model:{value:t.product.category,callback:function(e){t.$set(t.product,"category",e)},expression:"product.category"}}),t._v(" "),a("template",{slot:"append"},[a("div",{staticClass:"append-text btn-addon",on:{click:function(e){return t.$refs.addCategory.show()}}},[a("vs-button",{staticClass:"rounded-none",attrs:{type:"filled","icon-pack":"feather",icon:"icon-plus"}})],1)])],2),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("category"),expression:"errors.has('category')"}],staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("category")))])],1)]),t._v(" "),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col md:w-1/2 w-full"},[a("label",[t._v("Model")]),t._v(" "),a("vx-input-group",[a("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"brand",clearable:!1,label:"name",options:t.all_brands},model:{value:t.product.brand,callback:function(e){t.$set(t.product,"brand",e)},expression:"product.brand"}}),t._v(" "),a("template",{slot:"append"},[a("div",{staticClass:"append-text btn-addon",on:{click:function(e){return t.$refs.addBrand.show()}}},[a("vs-button",{staticClass:"rounded-none",attrs:{type:"filled","icon-pack":"feather",icon:"icon-plus"}})],1)])],2),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("brand"),expression:"errors.has('brand')"}],staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("brand")))])],1),t._v(" "),a("div",{staticClass:"vx-col md:w-1/2 w-full"},[a("label",[t._v("Inventory Type")]),t._v(" "),a("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"inventory_type",options:["inventory_part","service","sale_only","purchase_only"]},model:{value:t.product.inventory_type,callback:function(e){t.$set(t.product,"inventory_type",e)},expression:"product.inventory_type"}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("inventory_type"),expression:"errors.has('inventory_type')"}],staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("inventory_type")))])],1)]),t._v(" "),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col md:w-1/2 my-2"},[a("vue-dropzone",{ref:"image",staticClass:"max-content p-1",attrs:{duplicateCheck:"",id:"dropzone",options:t.dropzoneOptions},on:{"vdropzone-success":t.successUpload,"vdropzone-mounted":t.editThumb}})],1)])])]),t._v(" "),a("vs-divider"),t._v(" "),a("div",{staticClass:"flex justify-end btn-group"},[a("vs-button",{attrs:{icon:"icon-save","icon-pack":"feather",type:"relief"},on:{click:t.updateProduct}},[t._v("រក្សាទុក")])],1)],1),t._v(" "),a("add-unit",{ref:"addUnit"}),t._v(" "),a("add-category",{ref:"addCategory"}),t._v(" "),a("add-brand",{ref:"addBrand"})],1)}),[],!1,null,"922bb53e",null);e.a=u.exports},yo3J:function(t,e,a){"use strict";var s={name:"addUnit",data:function(){return{unit:""}},methods:{show:function(){this.$modal.show("add-unit")},storeUnit:function(){var t=this;this.$validator.validateAll().then((function(e){e?(t.$vs.loading(),t.$store.dispatch("storeUnit",{name:t.unit}).then((function(e){e?(t.$vs.notify({time:4e3,title:"ប្រតិបត្តិការជោគជ័យ",text:"ទិន្នន័យបានបន្ថែម",color:"success",iconPack:"feather",icon:"icon-check",position:"top-center"}),t.resetField()):t.$vs.notify({title:"ប្រតិបត្តិការបរាជ័យ",text:"ទិន្នន័យមិនបានបន្ថែម",color:"danger",iconPack:"feather",icon:"icon-message-square",position:"top-center"}),t.$vs.loading.close()}))):t.$vs.notify({title:"ប្រតិបត្តិការបរាជ័យ",text:"សូមបំពេញទិន្នន័យអោយបានត្រឹមត្រូវ",color:"danger",iconPack:"feather",icon:"icon-message-square",position:"top-center"})}))},resetField:function(){this.unit=""}}},r=a("KHd+"),n=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("modal",{attrs:{height:"auto",scrollable:!0,pivotY:.2,clickToClose:!1,name:"add-unit"}},[a("div",{staticClass:"flex justify-end"},[a("i",{staticClass:"vs-icon vs-popup--close material-icons text-warning",staticStyle:{background:"rgb(255, 255, 255)"},on:{click:function(e){return t.$modal.hide("add-unit")}}},[t._v("close")])]),t._v(" "),a("vx-card",{attrs:{"no-shadow":""}},[a("div",{staticClass:"vx-row mb-10"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{"label-placeholder":"ឈ្មោះ",name:"unit"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.storeUnit(e)}},model:{value:t.unit,callback:function(e){t.unit=e},expression:"unit"}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("unit"),expression:"errors.has('unit')"}],staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("unit")))])],1)])],1)}),[],!1,null,"da88d7b4",null);e.a=n.exports},yoef:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,'/*@import "../../../../sass/vue-instant/vue-instant-input.css";*/',""])}}]);