<template>
	<div id="marks">
		<div class="marks__list"
		     :class="{'marks__list--full':full}">
			<nuxt-link class="marks__list--item"
			           :to="`/${catalogRoute}/${item.slug}`"
			           :class="{'active':$route.params.mark === item.slug}"
			           v-for="item in mark_list"
			           :key='item.id'>
				<!--<svg-icon class="list__item-icon" :name="`emblems/${item.slug}-logo`"/>-->
				<div class="list__item-name">{{ item.title }}</div>
				<div class="list__item-number">{{ item.offers_count }}</div>
			</nuxt-link>
		</div>
		<div class="show__more"
		     @click="full = !full">
			{{ full ? 'Меньше марок -' : 'Больше марок +' }}
		</div>
	</div>

</template>

<script>
import {mapGetters} from "vuex";

export default {
	data() {
		return {
			full: false,
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
			marks: 'marks/marks',
			catalogRoute: 'settings/catalogRoute'
		}),
		mark_list() {
			if (this.$device.isMobile) {
				return this.full ? this.marks : this.marks.slice(0, 10)
			}
			return this.marks
		}
	},
}
</script>