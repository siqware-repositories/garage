<template>
    <div>
        <modal width="60%" height="auto" :scrollable="true" :pivotY="0.2" :clickToClose="false" name="show-payroll">
            <div class="flex justify-end">
                <i @click="$modal.hide('show-payroll')" class="vs-icon vs-popup--close material-icons text-warning"
                   style="background: rgb(255, 255, 255);">close</i>
            </div>
            <vx-card no-shadow>
                <div id="printMe">
                    <div class="vx-row">
                        <div class="vx-col w-full">
                            <table>
                                <thead>
                                <tr>
                                    <th>ថ្ងៃបើកប្រាក់ខែ</th>
                                    <th>សំគាល់</th>
                                    <th>Barcode</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>{{data.date}}</td>
                                    <td>{{data.note}}</td>
                                    <td>
                                        <bar-code :value="data.id" :options="{ displayValue: true }"></bar-code>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="vx-row mt-2">
                        <div class="vx-col w-full">
                            <table>
                                <thead>
                                <tr>
                                    <th>ល.រ</th>
                                    <th>ឈ្មោះ</th>
                                    <th>ទំនាក់ទំនង</th>
                                    <th>ទឹកប្រាក់</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="item,index in data.items" :key="index">
                                    <td class="pl-3">{{index+1}}</td>
                                    <td class="pl-3">{{item.id.name}}</td>
                                    <td class="pl-3">{{item.id.contact}}</td>
                                    <td class="pl-3">
                                        <money-format
                                                :value="parseFloat(item.salary)"
                                                locale='en'
                                                currency-code='USD'>
                                        </money-format>
                                    </td>
                                </tr>
                                </tbody>
                                <tfoot>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td class="text-right">សរុប</td>
                                    <td class="pl-3">
                                        <money-format
                                                :value="total_salary"
                                                locale='en'
                                                currency-code='USD'>
                                        </money-format>
                                    </td>
                                </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
                <vs-divider/>
                <!-- Save & Reset Button -->
                <div class="flex justify-end btn-group">
                    <vs-button @click="printHtml" icon="icon-printer" icon-pack="feather" type="relief">បោះពុម្ភ
                    </vs-button>
                </div>
            </vx-card>
        </modal>
    </div>
</template>

<script>
    import vSelect from 'vue-select'
    import flatPickr from 'vue-flatpickr-component'
    import 'flatpickr/dist/flatpickr.min.css';
    import MoneyFormat from 'vue-money-format'
    import VueBarcode from '@xkeshi/vue-barcode';
    import printJS from 'print-js'
    export default {
        name: "showPayRoll",
        components: {'v-select': vSelect, flatPickr, 'money-format': MoneyFormat, 'bar-code': VueBarcode},
        data() {
            return {
                data: {
                    id: null,
                    date: null,
                    note: null,
                    items: [{id: {id: 0, name: '', contact: ''}, salary: 0}],
                }
            }
        },
        computed: {
            total_salary() {
                return this.data.items.reduce(function (total, item) {
                    return total + parseFloat(item.salary);
                }, 0)
            }
        },
        methods: {
            //print
            async _print() {
                const el = document.querySelector('#printMe');
                const options = {
                    type: 'dataURL'
                };
                return await this.$html2canvas(el, options);
            },
            async printHtml() {
                let image = await this._print();
                printJS(image, 'image')
            },
            //end print
            confirmUpdate() {
                this.$vs.dialog({
                    type: 'confirm',
                    color: 'success',
                    title: `ផ្ទៀងផ្ទាត់`,
                    text: 'ចុចពាក្យ Accept ដើម្បីរក្សាទុក!',
                    accept: this.updatePayroll
                });
            },
            show(data) {
                let self = this;
                self.$modal.show('show-payroll');
                self.data.id = data.id;
                self.data.date = data.date;
                self.data.note = data.note;
                self.data.items = [];
                data.pay_roll_detail.forEach(function (item, index) {
                    self.data.items.push({id: item.employee, salary: item.salary});
                })
            },
            //store
            updatePayroll() {
                let self = this;
                this.$validator.validateAll().then(result => {
                    if (result) {
                        self.$vs.loading();
                        self.$store.dispatch('updatePayroll', self.data).then(function (data) {
                            if (data) {
                                self.$vs.notify({
                                    time: 4000,
                                    title: 'ប្រតិបត្តិការជោគជ័យ',
                                    text: 'ទិន្នន័យបានបន្ថែម',
                                    color: 'success',
                                    iconPack: 'feather',
                                    icon: 'icon-check',
                                    position: 'top-center'
                                });
                                self.$emit('finished');
                            } else {
                                self.$vs.notify({
                                    title: 'ប្រតិបត្តិការបរាជ័យ',
                                    text: 'ទិន្នន័យមិនបានបន្ថែម',
                                    color: 'danger',
                                    iconPack: 'feather',
                                    icon: 'icon-message-square',
                                    position: 'top-center'
                                });
                            }
                            self.$vs.loading.close();
                        });
                    } else {
                        self.$vs.notify({
                            title: 'ប្រតិបត្តិការបរាជ័យ',
                            text: 'សូមបំពេញទិន្នន័យអោយបានត្រឹមត្រូវ',
                            color: 'danger',
                            iconPack: 'feather',
                            icon: 'icon-message-square',
                            position: 'top-center'
                        })
                    }
                });
            },
            //remove line
            removeLine(index) {
                this.data.items.splice(index, 1);
            }
        },
    }
</script>

<style scoped>
    table, td, th {
        border: 1px solid black;
    }

    table {
        border-collapse: collapse;
        width: 100%;
    }

    th {
        text-align: left;
    }
</style>