<template>
	<div class="wrapper__emblems">

		<div v-for="item of popular" :key="item.slug">
					<nuxt-link :to="`/${catalogRoute}/${item.slug}`">
					<div class='wrapper__emblems_item'>
            <svg-icon class="wrapper__emblems_icon" :name="`emblems/${item.slug}-logo`"/>
            <div class="wrapper__emblems_title">{{ item.title }}</div>
								</div>
					        </nuxt-link>
		</div>

	</div>

</template>

<script>
import {mapGetters} from "vuex";
export default {
	data() {
		return {
			popular: [
				{
					title: 'Kia',
					slug: 'kia'
				},
				{
					title: 'Mazda',
					slug: 'mazda'
				},
				{
					title: 'Skoda',
					slug: 'skoda'
				},
				{
					title: 'Ford',
					slug: 'ford'
				},
				{
					title: 'Volkswagen',
					slug: 'volkswagen'
				},
				{
					title: 'Hyundai',
					slug: 'hyundai'
				}
			]
		}
	},
	computed: {
		...mapGetters({
			settings: 'settings/settings',
			catalogRoute: 'settings/catalogRoute'
		}),
	}
}
</script>