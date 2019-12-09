<template>
	<div>
		<demo></demo>
		<tinymce id="d2" v-model="data" :other_options="options"></tinymce>
		<div class="flex btn-group">
			<vs-button @click="is_popup=true" type="relief" icon-pack="feather" icon="icon-plus-square">បន្ថែម</vs-button>
			<vs-button @click="is_popup_edit=true" color="warning" type="relief" icon-pack="feather" icon="icon-edit">កែប្រែ</vs-button>
			<vs-button type="relief" icon-pack="feather" icon="icon-package">អាប់គ្រេដ</vs-button>
			<vs-button color="danger" type="relief" icon-pack="feather" icon="icon-trash-2">លុប</vs-button>
			<add-home :is_popup="is_popup" @update-is_popup="syncPopup"></add-home>
			<edit-home :is_popup="is_popup_edit" @update-is_popup="syncPopupEdit"></edit-home>
		</div>
	</div>
</template>
<script>
	import AddHome from "./addHome";
	import EditHome from "./editHome";
	import Demo from "./demo/Demo";
	export default {
		components: {Demo, EditHome, AddHome},
		data() {
			return {
				is_popup:false,
				is_popup_edit:false,
				selected: [],
				'tableList': [
					'vs-th: Component',
					'vs-tr: Component',
					'vs-td: Component',
					'thread: Slot',
					'tbody: Slot',
					'header: Slot'
				],
				users: [
					{
						"id": 1,
						"name": "Leanne Graham",
						"username": "Bret",
						"email": "Sincere@april.biz",
						"website": "hildegard.org",
					},
					{
						"id": 2,
						"name": "Ervin Howell",
						"username": "Antonette",
						"email": "Shanna@melissa.tv",
						"website": "anastasia.net",
					},
					{
						"id": 3,
						"name": "Clementine Bauch",
						"username": "Samantha",
						"email": "Nathan@yesenia.net",
						"website": "ramiro.info",
					},
					{
						"id": 4,
						"name": "Patricia Lebsack",
						"username": "Karianne",
						"email": "Julianne.OConner@kory.org",
						"website": "kale.biz",
					},
					{
						"id": 5,
						"name": "Chelsey Dietrich",
						"username": "Kamren",
						"email": "Lucio_Hettinger@annie.ca",
						"website": "demarco.info",
					},
					{
						"id": 6,
						"name": "Mrs. Dennis Schulist",
						"username": "Leopoldo_Corkery",
						"email": "Karley_Dach@jasper.info",
						"website": "ola.org",
					},
					{
						"id": 7,
						"name": "Kurtis Weissnat",
						"username": "Elwyn.Skiles",
						"email": "Telly.Hoeger@billy.biz",
						"website": "elvis.io",
					},
					{
						"id": 8,
						"name": "Nicholas Runolfsdottir V",
						"username": "Maxime_Nienow",
						"email": "Sherwood@rosamond.me",
						"website": "jacynthe.com",
					},
					{
						"id": 9,
						"name": "Glenna Reichert",
						"username": "Delphine",
						"email": "Chaim_McDermott@dana.io",
						"website": "conrad.com",
					},
					{
						"id": 10,
						"name": "Clementina DuBuque",
						"username": "Moriah.Stanton",
						"email": "Rey.Padberg@karina.biz",
						"website": "ambrose.net",
					},
				],
				data: 'Working on the mix',
				options: {}
			}
		},
		methods: {
			syncPopup(val) {
				this.is_popup = val
			},
			syncPopupEdit(val) {
				this.is_popup_edit = val
			}
		}
	}
</script>