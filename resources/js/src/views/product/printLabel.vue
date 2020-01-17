<template>
        <sweet-modal ref="printLabel" title="Print Label" :blocking="true" :width="!mobilecheck()?'60%':''">
            <div id="section-to-print" class="flex">
                <div v-for="(i,index) in 10" :key="index" class="text-center p-2 ml-2 bordered">
                    Border sizing
                    <bar-code :value="1" tag="img" :options="{ displayValue: true ,height:50, width:2}"></bar-code>
                </div>
            </div>
            <vs-button @click="printHtml" slot="button">Print</vs-button>
        </sweet-modal>
</template>

<script>
    import VueBarcode from '@xkeshi/vue-barcode';
    import printJS from 'print-js'
    export default {
        name: "printLabel",
        components:{
            'bar-code': VueBarcode,
        },
        methods:{
            show(data){
                let self = this;
                self.$refs.printLabel.open();
            },
            printHtml(){
                // this.$htmlToPaper('printMe');
                window.print();
            }
        }
    }
</script>

<style scoped>

</style>