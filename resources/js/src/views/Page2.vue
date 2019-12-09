<template>
	<vs-tabs :position="isSmallerScreen ? 'top' : 'left'" class="tabs-shadow-none" id="profile-tabs" :key="isSmallerScreen">

		<!-- GENERAL -->
		<vs-tab icon-pack="feather" icon="icon-user" :label="!isSmallerScreen ? 'General' : ''">
			<div class="tab-general md:ml-4 md:mt-0 mt-4 ml-0">
				<vx-card no-shadow>

					<vs-input class="w-full mb-base" label-placeholder="Old Password" v-model="old_password" />
					<vs-input class="w-full mb-base" label-placeholder="New Password" v-model="new_password" />
					<vs-input class="w-full mb-base" label-placeholder="Confirm Password" v-model="confirm_new_password" />

					<!-- Save & Reset Button -->
					<div class="flex justify-end btn-group">
						<vs-button icon-pack="feather" type="relief" icon="icon-save">រក្សាទុក</vs-button>
						<vs-button icon-pack="feather" icon="icon-delete" type="relief" color="warning">សម្អាត</vs-button>
					</div>
				</vx-card>
			</div>
		</vs-tab>
		<vs-tab icon-pack="feather" icon="icon-lock" :label="!isSmallerScreen ? 'Change Password' : ''">
			<div class="tab-change-pwd md:ml-4 md:mt-0 mt-4 ml-0">
				<sub-tab></sub-tab>
			</div>
		</vs-tab>
		<vs-tab icon-pack="feather" icon="icon-info" :label="!isSmallerScreen ? 'Info' : ''">
			<div class="tab-info md:ml-4 md:mt-0 mt-4 ml-0">
			</div>
		</vs-tab>
		<vs-tab icon-pack="feather" icon="icon-github" :label="!isSmallerScreen ? 'Social Links' : ''">
			<div class="tab-social-links md:ml-4 md:mt-0 mt-4 ml-0">
			</div>
		</vs-tab>
		<vs-tab icon-pack="feather" icon="icon-link-2" :label="!isSmallerScreen ? 'Connections' : ''">
			<div class="tab-text md:ml-4 md:mt-0 mt-4 ml-0">
			</div>
		</vs-tab>
		<vs-tab icon-pack="feather" icon="icon-bell" :label="!isSmallerScreen ? 'Notifications' : ''">
			<div class="tab-text md:ml-4 md:mt-0 mt-4 ml-0">
			</div>
		</vs-tab>
	</vs-tabs>
</template>
<script>
	import SubTab from "./SubTab";
	export default {
		components: {
			SubTab
		},
		data() {
			return {
				old_password: "",
				new_password: "",
				confirm_new_password: "",
			}
		},
		computed: {
			isSmallerScreen() {
				return this.$store.state.windowWidth < 768
			}
		}
	}
</script>

<style lang="scss">
	#profile-tabs {
		.vs-tabs--content {
			padding: 0;
		}
	}
</style>
