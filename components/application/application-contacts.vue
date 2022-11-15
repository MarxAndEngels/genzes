<template>
	<div class="contacts">
		<map-yandex-map class="contacts__map" />
		<div class="contacts__info">
			<div class="contacts__info-line" v-for="item in info" :key="item.name">
				<div class="contacts__info-name">
					{{item.name}} :
				</div>
				<div class="contacts__info-info">
					{{settings[item.slug]}}
				</div>
			</div>
			<buttons-callback-phone @click/>
		</div>
	</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	components: {},
	
	data() {
		return {
			info: [
				{
					name: 'Город',
					slug: 'city'
				},
				{
					name: 'Адрес',
					slug: 'address'
				},
				{
					name: 'Номер телефона',
					slug: 'phone'
				},
				{
					name: 'График работы в буднии дни',
					slug: 'phone'
				},
				{
					name: 'График работы в буднии дни ',
					slug: 'phone1'
				},
				{
					name: 'E-mail',
					slug: 'email'
				},
			]
		}
	},
	computed: {
		...mapGetters({
			settings: "settings/settings"
		})
	}
}
</script>
