(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"4hyD":function(t,e,a){"use strict";var s={name:"addCategory",data:function(){return{category:""}},methods:{show:function(){this.$modal.show("add-category")},storeCategory:function(){var t=this;this.$validator.validateAll().then((function(e){e?(t.$vs.loading(),t.$store.dispatch("storeCategory",{name:t.category}).then((function(e){e?(t.$vs.notify({time:4e3,title:"ប្រតិបត្តិការជោគជ័យ",text:"ទិន្នន័យបានបន្ថែម",color:"success",iconPack:"feather",icon:"icon-check",position:"top-center"}),t.resetField()):t.$vs.notify({title:"ប្រតិបត្តិការបរាជ័យ",text:"ទិន្នន័យមិនបានបន្ថែម",color:"danger",iconPack:"feather",icon:"icon-message-square",position:"top-center"}),t.$vs.loading.close()}))):t.$vs.notify({title:"ប្រតិបត្តិការបរាជ័យ",text:"សូមបំពេញទិន្នន័យអោយបានត្រឹមត្រូវ",color:"danger",iconPack:"feather",icon:"icon-message-square",position:"top-center"})}))},resetField:function(){this.category=""}}},r=a("KHd+"),i=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("modal",{attrs:{height:"auto",scrollable:!0,pivotY:.2,clickToClose:!1,name:"add-category"}},[a("div",{staticClass:"flex justify-end"},[a("i",{staticClass:"vs-icon vs-popup--close material-icons text-warning",staticStyle:{background:"rgb(255, 255, 255)"},on:{click:function(e){return t.$modal.hide("add-category")}}},[t._v("close")])]),t._v(" "),a("vx-card",{attrs:{"no-shadow":""}},[a("div",{staticClass:"vx-row mb-10"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{"label-placeholder":"ឈ្មោះ",name:"category"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.storeCategory(e)}},model:{value:t.category,callback:function(e){t.category=e},expression:"category"}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("category"),expression:"errors.has('category')"}],staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("category")))])],1)])],1)}),[],!1,null,"b31718a8",null);e.a=i.exports},"9Dpo":function(t,e,a){"use strict";var s={name:"addBrand",data:function(){return{brand:""}},methods:{show:function(){this.$modal.show("add-brand")},storeBrand:function(){var t=this;this.$validator.validateAll().then((function(e){e?(t.$vs.loading(),t.$store.dispatch("storeBrand",{name:t.brand}).then((function(e){e?(t.$vs.notify({time:4e3,title:"ប្រតិបត្តិការជោគជ័យ",text:"ទិន្នន័យបានបន្ថែម",color:"success",iconPack:"feather",icon:"icon-check",position:"top-center"}),t.resetField()):t.$vs.notify({title:"ប្រតិបត្តិការបរាជ័យ",text:"ទិន្នន័យមិនបានបន្ថែម",color:"danger",iconPack:"feather",icon:"icon-message-square",position:"top-center"}),t.$vs.loading.close()}))):t.$vs.notify({title:"ប្រតិបត្តិការបរាជ័យ",text:"សូមបំពេញទិន្នន័យអោយបានត្រឹមត្រូវ",color:"danger",iconPack:"feather",icon:"icon-message-square",position:"top-center"})}))},resetField:function(){this.brand=""}}},r=a("KHd+"),i=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("modal",{attrs:{height:"auto",scrollable:!0,pivotY:.2,clickToClose:!1,name:"add-brand"}},[a("div",{staticClass:"flex justify-end"},[a("i",{staticClass:"vs-icon vs-popup--close material-icons text-warning",staticStyle:{background:"rgb(255, 255, 255)"},on:{click:function(e){return t.$modal.hide("add-brand")}}},[t._v("close")])]),t._v(" "),a("vx-card",{attrs:{"no-shadow":""}},[a("div",{staticClass:"vx-row mb-10"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{"label-placeholder":"ឈ្មោះ",name:"brand"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.storeBrand(e)}},model:{value:t.brand,callback:function(e){t.brand=e},expression:"brand"}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("brand"),expression:"errors.has('brand')"}],staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("brand")))])],1)])],1)}),[],!1,null,"1dd572a1",null);e.a=i.exports},AxUm:function(t,e,a){var s=a("Ksp/");"string"==typeof s&&(s=[[t.i,s,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,r);s.locals&&(t.exports=s.locals)},CLzC:function(t,e,a){"use strict";var s=a("ksP6"),r=a.n(s),i=(a("Hj/Q"),a("yo3J")),n=a("4hyD"),o={name:"addSupplier",components:{AddBrand:a("9Dpo").a,AddCategory:n.a,AddUnit:i.a,vueDropzone:r.a},data:function(){return{supplier:{name:null,company:null,contact:null,note:null,address:null}}},computed:{all_units:function(){return this.$store.getters.all_unit},all_categories:function(){return this.$store.getters.all_category},all_brands:function(){return this.$store.getters.all_brand}},methods:{show:function(){this.$modal.show("add-supplier")},storeSupplier:function(){var t=this;this.$validator.validateAll().then((function(e){e?(t.$vs.loading(),t.$store.dispatch("storeSupplier",t.supplier).then((function(e){e?(t.$vs.notify({time:4e3,title:"ប្រតិបត្តិការជោគជ័យ",text:"ទិន្នន័យបានបន្ថែម",color:"success",iconPack:"feather",icon:"icon-check",position:"top-center"}),t.resetField()):t.$vs.notify({title:"ប្រតិបត្តិការបរាជ័យ",text:"ទិន្នន័យមិនបានបន្ថែម",color:"danger",iconPack:"feather",icon:"icon-message-square",position:"top-center"}),t.$vs.loading.close()}))):t.$vs.notify({title:"ប្រតិបត្តិការបរាជ័យ",text:"សូមបំពេញទិន្នន័យអោយបានត្រឹមត្រូវ",color:"danger",iconPack:"feather",icon:"icon-message-square",position:"top-center"})}))},resetField:function(){this.product={name:"",description:"",unit:"ដំុ",category:"គ្រឿងក្រោម",brand:"AKA",inventory_type:"inventory_part",purchase:1,sale:1,image:"placeholder/placeholder.png"}},successUpload:function(t,e){this.product.image=e.path}}},c=a("KHd+"),l=Object(c.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("modal",{attrs:{width:"60%",height:"auto",scrollable:!0,pivotY:.2,clickToClose:!1,name:"add-supplier"}},[a("div",{staticClass:"flex justify-end"},[a("i",{staticClass:"vs-icon vs-popup--close material-icons text-warning",staticStyle:{background:"rgb(255, 255, 255)"},on:{click:function(e){return t.$modal.hide("add-supplier")}}},[t._v("close")])]),t._v(" "),a("vx-card",{attrs:{"no-shadow":""}},[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col md:w-2/3 w-full"},[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col md:w-1/2 w-full"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{"label-placeholder":"ឈ្មោះ",name:"name"},model:{value:t.supplier.name,callback:function(e){t.$set(t.supplier,"name",e)},expression:"supplier.name"}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("name"),expression:"errors.has('name')"}],staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("name")))])],1),t._v(" "),a("div",{staticClass:"vx-col md:w-1/2 w-full"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{"label-placeholder":"ឈ្មោះក្រុមហ៊ុន",name:"company"},model:{value:t.supplier.company,callback:function(e){t.$set(t.supplier,"company",e)},expression:"supplier.company"}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("company"),expression:"errors.has('company')"}],staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("company")))])],1)]),t._v(" "),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full"},[a("label",[t._v("ទំនាក់ទំនង")]),t._v(" "),a("vs-textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{label:"ទំនាក់ទំនង",name:"contact"},model:{value:t.supplier.contact,callback:function(e){t.$set(t.supplier,"contact",e)},expression:"supplier.contact"}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("contact"),expression:"errors.has('contact')"}],staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("contact")))])],1),t._v(" "),a("div",{staticClass:"vx-col w-full"},[a("label",[t._v("សំគាល់")]),t._v(" "),a("vs-textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{label:"សំគាល់",name:"note"},model:{value:t.supplier.note,callback:function(e){t.$set(t.supplier,"note",e)},expression:"supplier.note"}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("note"),expression:"errors.has('note')"}],staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("note")))])],1)])]),t._v(" "),a("div",{staticClass:"vx-col md:w-1/3 w-full"},[a("label",[t._v("អាស័យដ្ឋាន")]),t._v(" "),a("vs-textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{label:"អាស័យដ្ឋាន",name:"address"},model:{value:t.supplier.address,callback:function(e){t.$set(t.supplier,"address",e)},expression:"supplier.address"}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("address"),expression:"errors.has('address')"}],staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("address")))])],1)]),t._v(" "),a("vs-divider"),t._v(" "),a("div",{staticClass:"flex justify-end btn-group"},[a("vs-button",{attrs:{icon:"icon-save","icon-pack":"feather",type:"relief"},on:{click:t.storeSupplier}},[t._v("រក្សាទុក")])],1)],1)],1),t._v(" "),a("add-unit",{ref:"addUnit"}),t._v(" "),a("add-category",{ref:"addCategory"}),t._v(" "),a("add-brand",{ref:"addBrand"})],1)}),[],!1,null,"ef5ce976",null);e.a=l.exports},Hu2B:function(t,e,a){"use strict";var s=a("AxUm");a.n(s).a},"Ksp/":function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,"[dir] table.expense[data-v-7e9b58eb], [dir] td.expense[data-v-7e9b58eb], [dir] th.expense[data-v-7e9b58eb] {\n  border: 1px solid black;\n}\ntable.expense[data-v-7e9b58eb] {\n  border-collapse: collapse;\n  width: 100%;\n}\n[dir=ltr] th.expense[data-v-7e9b58eb] {\n  text-align: left;\n}\n[dir=rtl] th.expense[data-v-7e9b58eb] {\n  text-align: right;\n}\n",""])},L0c2:function(t,e,a){"use strict";var s=a("EyHm"),r=a.n(s),i={grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.5,opacityTo:.2,stops:[0,80,100]}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{x:{show:!1}}},n={grid:{show:!1,padding:{left:0,right:0}},chart:{type:"line",dropShadow:{enabled:!0,top:5,left:0,blur:4,opacity:.1},toolbar:{show:!1},sparkline:{enabled:!0}},stroke:{width:5,curve:"smooth"},xaxis:{type:"numeric"},fill:{type:"gradient",gradient:{shade:"dark",shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},tooltip:{x:{show:!1}}},o=a("bjns"),c={props:{icon:{type:String,required:!0},statistic:{type:[Number,String],required:!0},statisticTitle:{type:String},chartData:{},color:{type:String,default:"primary"},colorTo:{type:String},type:{type:String,default:"line"},iconRight:{type:Boolean,default:!1},hideChart:{type:Boolean,default:!1}},data:function(){return{chartOptions:null}},watch:{themePrimaryColor:function(){this.$refs.apexChart.updateOptions({theme:{monochrome:{color:this.getHex(this.color)}}})}},computed:{themePrimaryColor:function(){return this.$store.state.themePrimaryColor}},methods:{getHex:function(t){if(o.a.isColor(t)){var e=window.getComputedStyle(document.documentElement).getPropertyValue("--vs-".concat(t));return e=e.split(","),"#"+((1<<24)+(Number(e[0])<<16)+(Number(e[1])<<8)+Number(e[2])).toString(16).slice(1)}return t},gradientToColor:function(t){var e={primary:"#A9A2F6",success:"#55DD92",warning:"#ffc085",danger:"#F97794"};return e[t]?e[t]:e.primary}},components:{VueApexCharts:r.a},created:function(){"area"==this.type?(this.chartOptions=Object.assign({},i),this.chartOptions.theme={monochrome:{enabled:!0,color:this.getHex(this.color),shadeTo:"light",shadeIntensity:.65}}):"line"==this.type&&(this.chartOptions=JSON.parse(JSON.stringify(n)),this.chartOptions.fill.gradient.gradientToColors=[this.gradientToColor(this.colorTo||this.color)],this.chartOptions.colors=[this.getHex(this.color)])}},l=a("KHd+"),d=Object(l.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("vx-card",{staticClass:"overflow-hidden"},[a("div",{attrs:{slot:"no-body"},slot:"no-body"},[a("div",{staticClass:"p-6",class:{"flex justify-between flex-row-reverse items-center":t.iconRight,"text-center":!t.iconRight&&t.hideChart,"pb-0":!t.hideChart}},[a("feather-icon",{staticClass:"p-3 inline-flex rounded-full",class:["text-"+t.color,{"mb-4":!t.iconRight}],style:{background:"rgba(var(--vs-"+t.color+"),.15)"},attrs:{icon:t.icon}}),t._v(" "),a("div",{staticClass:"truncate"},[a("h2",{staticClass:"mb-1 font-bold"},[t._v(t._s(t.statistic))]),t._v(" "),a("span",[t._v(t._s(t.statisticTitle))])])],1),t._v(" "),t.hideChart?t._e():a("div",{staticClass:"line-area-chart"},[a("vue-apex-charts",{ref:"apexChart",attrs:{type:t.type,height:"100",width:"100%",options:t.chartOptions,series:t.chartData}})],1)])])}),[],!1,null,null,null);e.a=d.exports},SZ4Y:function(t,e,a){"use strict";var s=a("o0o1"),r=a.n(s),i=a("w48C"),n=a.n(i),o=(a("K+Wz"),a("yo3J")),c=a("4hyD"),l=a("9Dpo"),d=a("CLzC"),u=a("Snq/"),v=a.n(u),p=a("q+Mi"),h=a("pS5H");function m(t,e,a,s,r,i,n){try{var o=t[i](n),c=o.value}catch(t){return void a(t)}o.done?e(c):Promise.resolve(c).then(s,r)}var f,_,y={name:"showPurchase",components:{AddSupplier:d.a,AddBrand:l.a,AddCategory:c.a,AddUnit:o.a,flatPickr:n.a,"v-select":v.a,"bar-code":p.a,"money-format":h.a},data:function(){return{output:null,purchase:{id:null,supplier:{name:""},location:"Ly Put Garage",purchase_date:null,purchase_status:"pending",description:"",total_balance:null,balance:null,due_balance:0,amount:0,qty:0,items:[{id:"",name:null,description:null,qty:1,purchase_price:1,sale_price:1,amount:1}]}}},methods:{printHtml:(f=r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:$("#printMe").printThis({pageTitle:"Print Invoice No: ".concat(this.purchase.id),beforePrintEvent:function(){console.log("after before print printing")},beforePrint:function(){console.log("before print printing")},afterPrint:function(){console.log("after print printing")}});case 1:case"end":return t.stop()}}),t,this)})),_=function(){var t=this,e=arguments;return new Promise((function(a,s){var r=f.apply(t,e);function i(t){m(r,a,s,i,n,"next",t)}function n(t){m(r,a,s,i,n,"throw",t)}i(void 0)}))},function(){return _.apply(this,arguments)}),show:function(t){var e=this;this.$modal.show("show-purchase"),this.purchase.id=t.id,this.purchase.supplier=t.supplier,this.purchase.location=t.location,this.purchase.purchase_date=t.date,this.purchase.purchase_status=t.purchase_status,this.purchase.description=t.description,this.purchase.balance=t.balance,this.purchase.amount=t.amount,this.purchase.due_balance=t.due_balance,e.purchase.items=[],t.purchase_detail.forEach((function(t,a){e.purchase.items.push({id:t.product,name:t.product.name,description:t.product.description,qty:t.qty,purchase_price:t.purchase,sale_price:t.sale,amount:t.amount})}))}}},g=a("KHd+"),b=Object(g.a)(y,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("modal",{attrs:{width:"60%",height:"auto",scrollable:!0,pivotY:.2,clickToClose:!1,name:"show-purchase"}},[a("div",{staticClass:"flex justify-end"},[a("i",{staticClass:"vs-icon vs-popup--close material-icons text-warning",staticStyle:{background:"rgb(255, 255, 255)"},on:{click:function(e){return t.$modal.hide("show-purchase")}}},[t._v("close")])]),t._v(" "),a("vx-card",{attrs:{"no-shadow":""}},[a("div",{attrs:{id:"printMe"}},[a("table",{staticClass:"custom"},[a("tr",[a("td",{staticClass:"custom"},[t._v("អ្នកផ្គត់ផ្គង់")]),t._v(" "),a("td",{staticClass:"custom"},[t._v("Purchase Status")]),t._v(" "),a("td",{staticClass:"custom"},[t._v("ទីតាំងទិញចូល")]),t._v(" "),a("td",{staticClass:"custom"},[t._v("ពិពណ៌នា")]),t._v(" "),a("td",{staticClass:"custom"},[t._v("ថ្ងៃខែឆ្នាំទិញចូល")]),t._v(" "),a("td",{staticClass:"custom"},[t._v("Barcode")])]),t._v(" "),a("tr",[a("td",{staticClass:"custom"},[t._v("\n                            ឈ្មោះ: "+t._s(t.purchase.supplier.name)),a("br"),t._v("\n                            ក្រុមហ៊ុន: "+t._s(t.purchase.supplier.company)),a("br"),t._v("\n                            ទំនាក់ទំនង: "+t._s(t.purchase.supplier.contact)),a("br")]),t._v(" "),a("td",{staticClass:"custom"},[t._v(t._s(t.purchase.purchase_status))]),t._v(" "),a("td",{staticClass:"custom"},[t._v(t._s(t.purchase.location))]),t._v(" "),a("td",{staticClass:"custom"},[t._v(t._s(t.purchase.description))]),t._v(" "),a("td",{staticClass:"custom"},[t._v(t._s(t.purchase.purchase_date))]),t._v(" "),a("td",{staticClass:"p-2"},[a("bar-code",{attrs:{value:t.purchase.id,tag:"img",options:{displayValue:!0}}})],1)])]),t._v(" "),a("vs-divider"),t._v(" "),a("table",{staticClass:"custom"},[a("thead",[a("tr",[a("th",{staticClass:"custom"},[t._v("ល.រ")]),t._v(" "),a("th",{staticClass:"custom"},[t._v("ឈ្មោះ")]),t._v(" "),a("th",{staticClass:"custom"},[t._v("ពិពណ៌នា")]),t._v(" "),a("th",{staticClass:"custom"},[t._v("ចំនួន")]),t._v(" "),a("th",{staticClass:"custom"},[t._v("តម្លៃទិញ")]),t._v(" "),a("th",{staticClass:"custom"},[t._v("តម្លៃលក់")]),t._v(" "),a("th",{staticClass:"custom"},[t._v("សរុប")])])]),t._v(" "),a("tbody",t._l(t.purchase.items,(function(e,s){return a("tr",{key:s},[a("td",{staticClass:"pl-2 custom"},[t._v("\n                            "+t._s(s+1)+"\n                        ")]),t._v(" "),a("td",{staticClass:"pl-2 custom"},[t._v("\n                            "+t._s(e.name)+"\n                        ")]),t._v(" "),a("td",{staticClass:"pl-2 custom"},[t._v("\n                            "+t._s(e.description)+"\n                        ")]),t._v(" "),a("td",{staticClass:"pl-2 custom"},[t._v("\n                            "+t._s(e.qty)+"\n                        ")]),t._v(" "),a("td",{staticClass:"pl-2 custom"},[a("money-format",{attrs:{value:parseFloat(e.purchase_price),locale:"en","currency-code":"USD"}})],1),t._v(" "),a("td",{staticClass:"pl-2 custom"},[a("money-format",{attrs:{value:parseFloat(e.sale_price),locale:"en","currency-code":"USD"}})],1),t._v(" "),a("td",{staticClass:"pl-2 custom"},[a("money-format",{attrs:{value:e.amount=e.purchase_price*e.qty,locale:"en","currency-code":"USD"}})],1)])})),0),t._v(" "),a("tfoot",[a("tr",[a("td",{staticClass:"custom"}),t._v(" "),a("td",{staticClass:"custom"}),t._v(" "),a("td",{staticClass:"custom"}),t._v(" "),a("td",{staticClass:"custom"}),t._v(" "),a("td",{staticClass:"custom"}),t._v(" "),a("td",{staticClass:"md:text-right"},[t._v("\n                            សរុប\n                        ")]),t._v(" "),a("td",{staticClass:"pl-2 custom"},[t._v("\n                            "+t._s(t.$formatter.format(t.purchase.amount))+"\n                        ")])])])]),t._v(" "),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col md:w-1/2 w-full"},[a("vs-divider",{attrs:{position:"left"}},[t._v("Payment")]),t._v(" "),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col md:w-1/2 print:w-1/2 w-full"},[a("label",[t._v("ប្រាក់ទិញទំនិញ")]),t._v(" "),a("div",[t._v("\n                                    "+t._s(t.$formatter.format(t.purchase.balance))+"\n                                ")])]),t._v(" "),a("div",{staticClass:"vx-col md:w-1/2 print:w-1/2 w-full"},[a("label",[t._v("ទឹកប្រាក់ជំពាក់")]),t._v(" "),a("money-format",{attrs:{value:parseFloat(t.purchase.due_balance),locale:"en","currency-code":"USD"}})],1)])],1)])],1),t._v(" "),a("img",{attrs:{src:t.output,alt:""}}),t._v(" "),a("div",{staticClass:"flex justify-end btn-group"},[a("vs-button",{attrs:{icon:"icon-printer","icon-pack":"feather",type:"relief"},on:{click:t.printHtml}},[t._v("បោះពុម្ភ\n                ")])],1)])],1),t._v(" "),a("add-supplier",{ref:"addSupplier"}),t._v(" "),a("add-unit",{ref:"addUnit"}),t._v(" "),a("add-category",{ref:"addCategory"}),t._v(" "),a("add-brand",{ref:"addBrand"})],1)}),[],!1,null,"66662476",null);e.a=b.exports},iBhl:function(t,e,a){"use strict";a.r(e);var s=a("SZ4Y"),r=a("L0c2"),i=a("pS5H"),n={name:"ReportPurchase",components:{ShowPurchase:s.a,"money-format":i.a,StatisticsCardLine:r.a},data:function(){return{date_range:"".concat(this.$moment().startOf("month").format("YYYY-MM-DD")," ~ ").concat(this.$moment().endOf("month").format("YYYY-MM-DD")),date_picker:{start:this.$moment().startOf("month").format("YYYY-MM-DD"),end:this.$moment().endOf("month").format("YYYY-MM-DD")},selected:[],users:[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",website:"hildegard.org"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",website:"anastasia.net"}]}},computed:{all_purchases:function(){return this.$store.getters.all_purchase},all_purchase_received:function(){return this.all_purchases.filter((function(t){return"received"===t.purchase_status}))},filtered_range_date:function(){var t=this;return t.all_purchase_received.filter((function(e){var a=new Date(t.date_picker.start),s=new Date(t.date_picker.end),r=new Date(e.date);return r>=a&&r<=s}))},total_due_balance:function(){return this.filtered_range_date.reduce((function(t,e){return t+parseFloat(e.due_balance)}),0)},total_purchase:function(){var t=0;return this.filtered_range_date.forEach((function(e,a){e.purchase_detail.forEach((function(e,a){"inventory_part"!==e.inventory_type&&"purchase_only"!==e.inventory_type||(t+=parseFloat(e.amount))}))})),t},due_purchase_invoice:function(){return this.filtered_range_date.filter((function(t){return parseFloat(t.due_balance)>=1}))}},methods:{dateRange:function(t){this.date_range="".concat(this.$moment(t.from).format("YYYY-MM-DD")," ~ ").concat(this.$moment(t.to).format("YYYY-MM-DD")),this.$modal.hide("show-date-range"),this.date_picker.start=this.$moment(t.from).format("YYYY-MM-DD"),this.date_picker.end=this.$moment(t.to).format("YYYY-MM-DD")}}},o=(a("Hu2B"),a("KHd+")),c=Object(o.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("vx-card",{attrs:{"no-shadow":""}},[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full"},[a("vs-input",{staticClass:"is-label-placeholder w-full mb-base",attrs:{"icon-pack":"feather",icon:"icon-calendar",placeholder:"ជ្រើសរើស"},on:{click:function(e){return t.$modal.show("show-date-range")}},model:{value:t.date_range,callback:function(e){t.date_range=e},expression:"date_range"}}),t._v(" "),a("modal",{attrs:{height:"auto",scrollable:!0,pivotY:.2,clickToClose:!1,name:"show-date-range"}},[a("div",{staticClass:"flex justify-end"},[a("i",{staticClass:"vs-icon vs-popup--close material-icons text-warning",staticStyle:{background:"rgb(255, 255, 255)"},on:{click:function(e){return t.$modal.hide("show-date-range")}}},[t._v("close")])]),t._v(" "),a("vx-card",{attrs:{"no-shadow":""}},[a("date-range-picker",{attrs:{theme:{primary:"#28C76F",secondary:"#2D3E50",ternary:"#93A0BD",border:"#e6e6e6",light:"#ffffff",dark:"#000000",hovers:{day:"#CCC",range:"#e6e6e6"}}},on:{update:t.dateRange}})],1)],1)],1)]),t._v(" "),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col md:w-1/3 w-full"},[a("statistics-card-line",{attrs:{hideChart:"",icon:"DollarSignIcon","icon-right":"",statistic:t.$formatter.format(t.total_purchase-t.total_due_balance),statisticTitle:"ចំណាយ"}})],1),t._v(" "),a("div",{staticClass:"vx-col md:w-1/3 w-full"},[a("statistics-card-line",{attrs:{hideChart:"",icon:"DollarSignIcon","icon-right":"",statistic:t.$formatter.format(t.total_due_balance),statisticTitle:"ជំពាក់គេ"}})],1),t._v(" "),a("div",{staticClass:"vx-col md:w-1/3 w-full"},[a("statistics-card-line",{attrs:{hideChart:"",icon:"DollarSignIcon","icon-right":"",statistic:t.$formatter.format(t.total_purchase),statisticTitle:"ចំណាយសរុប"}})],1),t._v(" "),a("div",{staticClass:"vx-col w-full"},[a("vs-collapse",{attrs:{type:"margin"}},[a("vs-collapse-item",[a("div",{attrs:{slot:"header"},slot:"header"},[t._v("\n                        បង្ហាញវិក័យបត្រជំពាក់\n                    ")]),t._v(" "),a("vs-list",t._l(t.due_purchase_invoice,(function(e,s){return a("vs-list-item",{key:s,attrs:{title:"ID: "+e.id+" ពិពណ៌នា៖ "+e.description+" អ្នកផ្គត់ផ្គង់៖ "+e.supplier.name+" ជំពាក់៖ "+t.$formatter.format(e.due_balance)}})})),1)],1)],1)],1)]),t._v(" "),a("div",{staticClass:"flex btn-group"},[1===t.selected.length?a("vs-button",{attrs:{type:"relief","icon-pack":"feather",icon:"icon-eye"},on:{click:function(e){return t.$refs.showPurchase.show(t.selected[0])}}},[t._v("បង្ហាញ")]):t._e()],1),t._v(" "),a("show-purchase",{ref:"showPurchase"}),t._v(" "),a("vs-table",{attrs:{multiple:"",pagination:"","max-items":"10",search:"",data:t.filtered_range_date},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.data;return t._l(s,(function(e,r){return a("vs-tr",{key:r,class:e.due_balance>=1?"text-danger":"",attrs:{data:e}},[a("vs-td",{attrs:{data:s[r].id}},[t._v("\n                    "+t._s(s[r].id)+"\n                ")]),t._v(" "),a("vs-td",{attrs:{data:s[r].description}},[t._v("\n                    "+t._s(s[r].description)+"\n                ")]),t._v(" "),a("vs-td",{attrs:{data:s[r].supplier.name}},[t._v("\n                    "+t._s(s[r].supplier.name)+"\n                ")]),t._v(" "),a("vs-td",{attrs:{data:s[r].location}},[t._v("\n                    "+t._s(s[r].location)+"\n                ")]),t._v(" "),a("vs-td",{attrs:{data:s[r].qty}},[t._v("\n                    "+t._s(s[r].qty)+"\n                ")]),t._v(" "),a("vs-td",{attrs:{data:s[r].balance}},[t._v("\n                    "+t._s(t.$formatter.format(parseFloat(s[r].balance)))+"\n                ")]),t._v(" "),a("vs-td",{attrs:{data:s[r].amount}},[t._v("\n                    "+t._s(t.$formatter.format(parseFloat(s[r].amount)))+"\n                ")]),t._v(" "),a("vs-td",{attrs:{data:s[r].due_balance}},[t._v("\n                    "+t._s(t.$formatter.format(parseFloat(s[r].due_balance)))+"\n                ")]),t._v(" "),a("vs-td",{attrs:{data:s[r].date}},[t._v("\n                    "+t._s(s[r].date)+"\n                ")])],1)}))}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[a("template",{slot:"thead"},[a("vs-th",{attrs:{"sort-key":"id"}},[t._v("ល.រ")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"description"}},[t._v("Description")]),t._v(" "),a("vs-th",[t._v("Supplier")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"location"}},[t._v("Location")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"qty"}},[t._v("QTY")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"balance"}},[t._v("Balance")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"amount"}},[t._v("Amount")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"due_balance"}},[t._v("Due Balance")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"purchase_date"}},[t._v("Date")])],1)],2)],1)}),[],!1,null,"7e9b58eb",null);e.default=c.exports},pS5H:function(t,e,a){"use strict";var s={props:{value:Number,locale:{type:String,default:"en"},currencyCode:{type:String,default:"USD"},supplementalPrecision:{type:Number,default:0},subunitsValue:{type:Boolean,default:!1},subunitsToUnit:{type:Number,default:1},hideSubunits:{type:Boolean,default:!1}},methods:{formatMoney:function(t,e,a,s,r,i,n){let o=0;if(Number.isFinite(t))try{let c=new Intl.NumberFormat(e,{style:"currency",currency:a}),l=c.resolvedOptions();l.minimumFractionDigits;r>1?t/=r:1==s&&(t/=10**l.minimumFractionDigits),1==i?c=new Intl.NumberFormat(e,{style:"currency",currency:a,minimumFractionDigits:0,maximumFractionDigits:0}):n>0&&(c=new Intl.NumberFormat(e,{style:"currency",currency:a,minimumFractionDigits:l.minimumFractionDigits+n,maximumFractionDigits:l.maximumFractionDigits+n})),o=c.format(t)}catch(t){o=t.message}else o="#NaN!";return o}}},r=a("KHd+"),i=Object(r.a)(s,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"money_format"},[t._v("\n  "+t._s(t.formatMoney(t.value,t.locale,t.currencyCode,t.subunitsValue,t.subunitsToUnit,t.hideSubunits,t.supplementalPrecision))+"\n")])}),[],!1,null,null,null).exports;e.a=i},yo3J:function(t,e,a){"use strict";var s={name:"addUnit",data:function(){return{unit:""}},methods:{show:function(){this.$modal.show("add-unit")},storeUnit:function(){var t=this;this.$validator.validateAll().then((function(e){e?(t.$vs.loading(),t.$store.dispatch("storeUnit",{name:t.unit}).then((function(e){e?(t.$vs.notify({time:4e3,title:"ប្រតិបត្តិការជោគជ័យ",text:"ទិន្នន័យបានបន្ថែម",color:"success",iconPack:"feather",icon:"icon-check",position:"top-center"}),t.resetField()):t.$vs.notify({title:"ប្រតិបត្តិការបរាជ័យ",text:"ទិន្នន័យមិនបានបន្ថែម",color:"danger",iconPack:"feather",icon:"icon-message-square",position:"top-center"}),t.$vs.loading.close()}))):t.$vs.notify({title:"ប្រតិបត្តិការបរាជ័យ",text:"សូមបំពេញទិន្នន័យអោយបានត្រឹមត្រូវ",color:"danger",iconPack:"feather",icon:"icon-message-square",position:"top-center"})}))},resetField:function(){this.unit=""}}},r=a("KHd+"),i=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("modal",{attrs:{height:"auto",scrollable:!0,pivotY:.2,clickToClose:!1,name:"add-unit"}},[a("div",{staticClass:"flex justify-end"},[a("i",{staticClass:"vs-icon vs-popup--close material-icons text-warning",staticStyle:{background:"rgb(255, 255, 255)"},on:{click:function(e){return t.$modal.hide("add-unit")}}},[t._v("close")])]),t._v(" "),a("vx-card",{attrs:{"no-shadow":""}},[a("div",{staticClass:"vx-row mb-10"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{"label-placeholder":"ឈ្មោះ",name:"unit"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.storeUnit(e)}},model:{value:t.unit,callback:function(e){t.unit=e},expression:"unit"}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("unit"),expression:"errors.has('unit')"}],staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("unit")))])],1)])],1)}),[],!1,null,"da88d7b4",null);e.a=i.exports}}]);