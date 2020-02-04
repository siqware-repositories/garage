<template>
        <sweet-modal ref="printLabel" title="Print Label" :blocking="true" :width="!mobilecheck()?'60%':''">
            <div id="printMe" class="px-3">
                <div class="vx-row">
                    <div v-for="(item,index) in data.products" :key="index" class="vx-col md:w-1/4 w-full bordered print:w-1/4 text-left">
                        <div class="label-text">
                            {{item.name}}
                        </div>
                        <bar-code :value="`000${item.id}`" tag="img" :options="{ displayValue: true, width: 1,height:30}"></bar-code>
                    </div>
                </div>
            </div>
            <vs-button @click="printHtml" slot="button">Print</vs-button>
        </sweet-modal>
</template>

<script>
    import VueBarcode from '@xkeshi/vue-barcode';
    export default {
        name: "printLabel",
        components:{
            'bar-code': VueBarcode,
        },
        data(){
            return{
                data:{
                    products:[{name:'name',id:1}]
                }
            }
        },
        methods:{
            show(data){
                let self = this;
                self.$refs.printLabel.open();
                self.data.products = data;
            },
            printHtml(){
                $("#printMe").printThis({
                    pageTitle: `Print Invoice No: 1`,
                    beforePrintEvent: function () {
                        console.log('after before print printing')
                    },     // function for printEvent in iframe
                    beforePrint: function () {
                        console.log('before print printing')
                    },          // function called before iframe is filled
                    afterPrint: function () {
                        console.log('after print printing')
                    }            // function called before iframe is removed
                });
            }
        }
    }
</script>

<style scoped>

</style>