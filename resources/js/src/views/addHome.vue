<template>
    <vs-popup fullscreen title="បន្ថែមអ្នកប្រើប្រាស់" :active.sync="popupSync">
        <form>
            <div class="vx-row mb-2">
                <div class="vx-col w-full">
                    <vs-input class="w-full" v-validate="'required'" name="title" label-placeholder="ចំណងជើង"
                              v-model="user.title"/>
                    <span class="text-danger text-sm"
                          v-show="errors.has('title')">{{ errors.first('title') }}</span>
                </div>
                <div class="vx-col w-full">
                    <vs-select
                            class="w-full"
                            autocomplete
                            @input-change=""
                            label="ប្រភេទ"
                            v-model="user.category"
                    >
                        <vs-select-item v-for="(category,index) in categories" :key="index" :value="category.category"
                                        :text="category.category"/>
                    </vs-select>
                </div>
                <div class="vx-col w-full">
                    <tinymce id="d1" v-model="data" :other_options="options"></tinymce>
                </div>
            </div>
            <div class="vx-row mb-2">
                <div class="vx-col sm:w-1/2 w-full">
                    <vs-select
                            class="w-full"
                            autocomplete
                            @input-change=""
                            label="សិទ្ធ"
                            v-model="user.role"
                    >
                        <vs-select-item value="user" text="User"/>
                        <vs-select-item value="admin" text="Admin"/>
                        <vs-select-item value="super_admin" text="Super Admin"/>
                    </vs-select>
                </div>
                <div class="vx-col sm:w-1/2 w-full">
                    <vs-select
                            class="w-full"
                            autocomplete
                            @input-change=""
                            label="ប្រភេទ"
                            v-model="user.type"
                    >
                        <vs-select-item value="employee" text="Employee"/>
                        <vs-select-item value="owner" text="Owner"/>
                        <vs-select-item value="developer" text="Developer"/>
                    </vs-select>
                </div>
            </div>
            <div class="vx-row mb-2">
                <div class="vx-col sm:w-1/2 w-full">
                    <vs-input type="email" v-validate="'required|email'" name="email" class="w-full"
                              icon-pack="feather" icon="icon-mail" icon-no-border label-placeholder="អ៊ីម៉ែល"
                              v-model="user.email"/>
                    <span class="text-danger text-sm"
                          v-show="errors.has('email')">{{ errors.first('email') }}</span>
                </div>
                <div class="vx-col sm:w-1/2 w-full">
                    <vs-input class="w-full" v-validate="'required'" name="telephone" icon-pack="feather"
                              icon="icon-smartphone" icon-no-border label-placeholder="លេខទុរស័ព្ទ"
                              v-model="user.telephone"/>
                    <span class="text-danger text-sm"
                          v-show="errors.has('telephone')">{{ errors.first('telephone') }}</span>
                </div>
            </div>
            <vs-divider/>
            <div class="vx-row">
                <div class="vx-col w-full">
                    <vs-button @click.prevent="submitForm" type="relief" class="mr-3 mb-2">
                        បង្កើត
                    </vs-button>
                    <vs-button @click.prevent="resetField" color="warning" type="relief"
                               class="mb-2" @click="">
                        ចាកចេញ
                    </vs-button>
                </div>
            </div>
        </form>
    </vs-popup>
</template>

<script>
    export default {
        name: "addHome",
        props: ['is_popup'],
        data() {
            return {
                /*user data*/
                user: {
                    profile: null,
                    category: 'ICT',
                    role: 'user',
                    type: 'employee',
                    name: '',
                    email: '',
                    telephone: '',
                    password: '',
                    content: 'Content',
                },
                categories: [
                    {id: 1, category: 'ICT'},
                    {id: 2, category: 'Administrator'},
                    {id: 3, category: 'Faculty of Science and Technology'},
                ],
                data: 'Working on the mix',
                options: {}
            }
        },
        computed: {
            popupSync: {
                get() {
                    return this.is_popup
                },
                set(val) {
                    this.$emit('update-is_popup', val)
                }
            }
        }
    }
</script>

<style scoped>

</style>