<template>
    <div>
        <vs-images>
            <vs-image :src="imageSrc"/>
        </vs-images>
        <div class="vs-con-input">
            <input type="file" name="file" @change="onFileChange">
        </div>
    </div>
</template>

<script>
    import axios from  'axios'
    export default {
        props: ['imageSrc','uploadUrl'],
        name: "ImageUpload",
        /*computed*/
        computed: {
            placeholder() {
                return this.$store.getters.getAppUrl+'images/placeholder/placeholder.png'
            },
        },
        methods: {
            async onFileChange(e) {
                let formData = new FormData();
                const file = e.target.files[0];
                formData.append('file', file);
                const res = await axios.post(route(this.uploadUrl),formData);
                this.$emit('get-image-path', res.data);
                /*try {
                    const res = await axios.post(route(this.uploadUrl),formData);
                    this.$emit('get-image-path', res.data)
                }catch (e) {
                    return false
                }*/
            }
        }
    }
</script>

<style scoped>

</style>