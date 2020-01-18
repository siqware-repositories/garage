<template>
        <sweet-modal ref="printLabel" title="Print Label" :blocking="true" :width="!mobilecheck()?'60%':''">
            <div id="printMe" class="flex">
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
                $("#printMe").printThis({
                    pageTitle: `Print Invoice No: ${this.purchase.id}`,
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