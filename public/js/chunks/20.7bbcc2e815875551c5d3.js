(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"2VJd":function(t,e,s){"use strict";s.r(e);var a=s("L0c2"),r={name:"Stock",components:{"money-format":s("pS5H").a,StatisticsCardLine:a.a},data:function(){return{selected:[],data:{id:"",searchId:null}}},computed:{all_report_stocks:function(){return this.$store.getters.all_report_stock},search_all_report_stocks:function(){var t=this;return t.all_report_stocks.filter((function(e){return!t.data.searchId||parseInt(t.data.id)===e.id}))},all_report_stocks_id:function(){return this.all_report_stocks.map((function(t){return{id:String(t.id)}}))},out_stock_count:function(){var t=0;return this.all_report_stocks.forEach((function(e,s){e.purchase_detail.reduce((function(t,e){return t+parseFloat(e.remain_qty)}),0)<=0&&(t+=1)})),t},out_stock_product:function(){var t=[];return this.all_report_stocks.forEach((function(e,s){e.purchase_detail.reduce((function(t,e){return t+parseFloat(e.remain_qty)}),0)<=0&&t.push(e)})),t}},methods:{sum_qty:function(t){return t.reduce((function(t,e){return t+parseFloat(e.remain_qty)}),0)},searchStock:function(){this.data.searchId=parseInt(this.data.id)}}},n=(s("dPCO"),s("ym3b"),s("KHd+")),i=Object(n.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("vx-card",{attrs:{"no-shadow":""}},[s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col md:w-1/3 w-full"},[s("statistics-card-line",{attrs:{hideChart:"",icon:"PackageIcon","icon-right":"",statistic:t.all_report_stocks.length,statisticTitle:"ទំនិញសរុប"}})],1),t._v(" "),s("div",{staticClass:"vx-col md:w-1/3 w-full"},[s("statistics-card-line",{attrs:{hideChart:"",icon:"PackageIcon","icon-right":"",statistic:t.out_stock_count,statisticTitle:"ទំនិញដាច់ស្តុក"}})],1),t._v(" "),s("div",{staticClass:"vx-col w-full"},[s("vs-collapse",{attrs:{type:"margin"}},[s("vs-collapse-item",[s("div",{attrs:{slot:"header"},slot:"header"},[t._v("\n                        បង្ហាញទំនិញដាច់ស្តុក\n                    ")]),t._v(" "),s("vs-list",t._l(t.out_stock_product,(function(t,e){return s("vs-list-item",{key:e,attrs:{title:"ID: "+t.id+" ឈ្មោះ​៖ "+t.name,subtitle:"Description: "+t.description}})})),1)],1)],1)],1)]),t._v(" "),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-full"},[s("vue-instant",{staticClass:"mt-base",attrs:{id:"styles","suggestion-attribute":"id",suggestions:t.all_report_stocks_id,type:"google"},on:{"click-button":t.searchStock,clear:function(e){t.data.id="",t.data.searchId=null}},model:{value:t.data.id,callback:function(e){t.$set(t.data,"id",e)},expression:"data.id"}})],1)]),t._v(" "),s("vs-table",{attrs:{pagination:"","max-items":"20",search:"",stripe:"",data:t.search_all_report_stocks},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.data;return t._l(a,(function(e,a){return s("vs-tr",{key:a,class:t.sum_qty(e.purchase_detail)<=0?"text-danger":"",attrs:{data:e}},[s("vs-td",{attrs:{data:e.id}},[t._v("\n                    "+t._s(e.id)+"\n                ")]),t._v(" "),s("vs-td",{attrs:{data:e.name}},[t._v("\n                    "+t._s(e.name)+"\n                ")]),t._v(" "),s("vs-td",[t._v("\n                    "+t._s(t.sum_qty(e.purchase_detail))+"\n                ")]),t._v(" "),s("vs-td",{attrs:{data:e.inventory_type}},[t._v("\n                    "+t._s(e.inventory_type)+"\n                ")]),t._v(" "),s("vs-td",{attrs:{data:e.unit}},[t._v("\n                    "+t._s(e.unit)+"\n                ")]),t._v(" "),s("vs-td",{attrs:{data:e.category}},[t._v("\n                    "+t._s(e.category)+"\n                ")]),t._v(" "),s("vs-td",{attrs:{data:e.brand}},[t._v("\n                    "+t._s(e.brand)+"\n                ")]),t._v(" "),s("template",{slot:"expand"},[s("div",{staticClass:"w-full"},[s("table",{staticClass:"expense"},[s("thead",[s("tr",[s("th",{staticClass:"expense"},[t._v("ល.រ"),s("br"),t._v("\n                                    No\n                                ")]),t._v(" "),s("th",{staticClass:"expense"},[t._v("អ្នកផ្គត់ផ្គង់"),s("br"),t._v("\n                                    Supplier\n                                ")]),t._v(" "),s("th",{staticClass:"expense"},[t._v("ចំនួន"),s("br"),t._v("\n                                    Qty\n                                ")]),t._v(" "),s("th",{staticClass:"expense"},[t._v("តម្លៃទិញ"),s("br"),t._v("\n                                    Purchase Price\n                                ")]),t._v(" "),s("th",{staticClass:"expense"},[t._v("តម្លៃលក់"),s("br"),t._v("\n                                    Sale Price\n                                ")]),t._v(" "),s("th",{staticClass:"expense"},[t._v("កាលបរិច្ឆេទ"),s("br"),t._v("\n                                    Date\n                                ")])])]),t._v(" "),s("tbody",t._l(e.purchase_detail,(function(e,a){return s("tr",{key:a},[s("td",{staticClass:"expense pl-3"},[t._v("\n                                    "+t._s(a+1)+"\n                                ")]),t._v(" "),s("td",{staticClass:"expense pl-3"},[t._v("\n                                    "+t._s(e.supplier.name)+"\n                                ")]),t._v(" "),s("td",{staticClass:"expense pl-3"},[t._v("\n                                    "+t._s(e.remain_qty)+"\n                                ")]),t._v(" "),s("td",{staticClass:"expense pl-3"},[s("money-format",{attrs:{value:parseFloat(e.purchase),locale:"en","currency-code":"USD"}})],1),t._v(" "),s("td",{staticClass:"expense pl-3"},[s("money-format",{attrs:{value:parseFloat(e.sale),locale:"en","currency-code":"USD"}})],1),t._v(" "),s("td",{staticClass:"expense pl-3"},[t._v("\n                                    "+t._s(e.date)+"\n                                ")])])})),0)])])])],2)}))}}])},[s("template",{slot:"thead"},[s("vs-th",{attrs:{"sort-key":"id"}},[t._v("ID")]),t._v(" "),s("vs-th",{attrs:{"sort-key":"name"}},[t._v("Name")]),t._v(" "),s("vs-th",[t._v("Qty")]),t._v(" "),s("vs-th",{attrs:{"sort-key":"inventory_type"}},[t._v("Inventory Type")]),t._v(" "),s("vs-th",{attrs:{"sort-key":"unit"}},[t._v("Unit")]),t._v(" "),s("vs-th",{attrs:{"sort-key":"category"}},[t._v("Category")]),t._v(" "),s("vs-th",{attrs:{"sort-key":"brand"}},[t._v("Brand")])],1)],2)],1)}),[],!1,null,"37909720",null);e.default=i.exports},L0c2:function(t,e,s){"use strict";var a=s("EyHm"),r=s.n(a),n={grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.5,opacityTo:.2,stops:[0,80,100]}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{x:{show:!1}}},i={grid:{show:!1,padding:{left:0,right:0}},chart:{type:"line",dropShadow:{enabled:!0,top:5,left:0,blur:4,opacity:.1},toolbar:{show:!1},sparkline:{enabled:!0}},stroke:{width:5,curve:"smooth"},xaxis:{type:"numeric"},fill:{type:"gradient",gradient:{shade:"dark",shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},tooltip:{x:{show:!1}}},o=s("bjns"),l={props:{icon:{type:String,required:!0},statistic:{type:[Number,String],required:!0},statisticTitle:{type:String},chartData:{},color:{type:String,default:"primary"},colorTo:{type:String},type:{type:String,default:"line"},iconRight:{type:Boolean,default:!1},hideChart:{type:Boolean,default:!1}},data:function(){return{chartOptions:null}},watch:{themePrimaryColor:function(){this.$refs.apexChart.updateOptions({theme:{monochrome:{color:this.getHex(this.color)}}})}},computed:{themePrimaryColor:function(){return this.$store.state.themePrimaryColor}},methods:{getHex:function(t){if(o.a.isColor(t)){var e=window.getComputedStyle(document.documentElement).getPropertyValue("--vs-".concat(t));return e=e.split(","),"#"+((1<<24)+(Number(e[0])<<16)+(Number(e[1])<<8)+Number(e[2])).toString(16).slice(1)}return t},gradientToColor:function(t){var e={primary:"#A9A2F6",success:"#55DD92",warning:"#ffc085",danger:"#F97794"};return e[t]?e[t]:e.primary}},components:{VueApexCharts:r.a},created:function(){"area"==this.type?(this.chartOptions=Object.assign({},n),this.chartOptions.theme={monochrome:{enabled:!0,color:this.getHex(this.color),shadeTo:"light",shadeIntensity:.65}}):"line"==this.type&&(this.chartOptions=JSON.parse(JSON.stringify(i)),this.chartOptions.fill.gradient.gradientToColors=[this.gradientToColor(this.colorTo||this.color)],this.chartOptions.colors=[this.getHex(this.color)])}},c=s("KHd+"),d=Object(c.a)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("vx-card",{staticClass:"overflow-hidden"},[s("div",{attrs:{slot:"no-body"},slot:"no-body"},[s("div",{staticClass:"p-6",class:{"flex justify-between flex-row-reverse items-center":t.iconRight,"text-center":!t.iconRight&&t.hideChart,"pb-0":!t.hideChart}},[s("feather-icon",{staticClass:"p-3 inline-flex rounded-full",class:["text-"+t.color,{"mb-4":!t.iconRight}],style:{background:"rgba(var(--vs-"+t.color+"),.15)"},attrs:{icon:t.icon}}),t._v(" "),s("div",{staticClass:"truncate"},[s("h2",{staticClass:"mb-1 font-bold"},[t._v(t._s(t.statistic))]),t._v(" "),s("span",[t._v(t._s(t.statisticTitle))])])],1),t._v(" "),t.hideChart?t._e():s("div",{staticClass:"line-area-chart"},[s("vue-apex-charts",{ref:"apexChart",attrs:{type:t.type,height:"100",width:"100%",options:t.chartOptions,series:t.chartData}})],1)])])}),[],!1,null,null,null);e.a=d.exports},abiT:function(t,e,s){var a=s("nKpC");"string"==typeof a&&(a=[[t.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(a,r);a.locals&&(t.exports=a.locals)},bgl5:function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,"[dir] table.expense[data-v-37909720], [dir] td.expense[data-v-37909720], [dir] th.expense[data-v-37909720] {\n  border: 1px solid black;\n}\ntable.expense[data-v-37909720] {\n  border-collapse: collapse;\n  width: 100%;\n}\n[dir=ltr] th.expense[data-v-37909720] {\n  text-align: left;\n}\n[dir=rtl] th.expense[data-v-37909720] {\n  text-align: right;\n}\n",""])},dPCO:function(t,e,s){"use strict";var a=s("ifuf");s.n(a).a},ifuf:function(t,e,s){var a=s("bgl5");"string"==typeof a&&(a=[[t.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(a,r);a.locals&&(t.exports=a.locals)},nKpC:function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,'/*@import "../../../../../sass/vue-instant/vue-instant.css"*/',""])},pS5H:function(t,e,s){"use strict";var a={props:{value:Number,locale:{type:String,default:"en"},currencyCode:{type:String,default:"USD"},supplementalPrecision:{type:Number,default:0},subunitsValue:{type:Boolean,default:!1},subunitsToUnit:{type:Number,default:1},hideSubunits:{type:Boolean,default:!1}},methods:{formatMoney:function(t,e,s,a,r,n,i){let o=0;if(Number.isFinite(t))try{let l=new Intl.NumberFormat(e,{style:"currency",currency:s}),c=l.resolvedOptions();c.minimumFractionDigits;r>1?t/=r:1==a&&(t/=10**c.minimumFractionDigits),1==n?l=new Intl.NumberFormat(e,{style:"currency",currency:s,minimumFractionDigits:0,maximumFractionDigits:0}):i>0&&(l=new Intl.NumberFormat(e,{style:"currency",currency:s,minimumFractionDigits:c.minimumFractionDigits+i,maximumFractionDigits:c.maximumFractionDigits+i})),o=l.format(t)}catch(t){o=t.message}else o="#NaN!";return o}}},r=s("KHd+"),n=Object(r.a)(a,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"money_format"},[t._v("\n  "+t._s(t.formatMoney(t.value,t.locale,t.currencyCode,t.subunitsValue,t.subunitsToUnit,t.hideSubunits,t.supplementalPrecision))+"\n")])}),[],!1,null,null,null).exports;e.a=n},ym3b:function(t,e,s){"use strict";var a=s("abiT");s.n(a).a}}]);