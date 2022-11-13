<template>
	<nuxt-link :to="currentRoute"
	           class="collections__item"
	           :class="{'collections__item--slide':slide, 'collections__item--black':black}">
		<div class="collections__item-title">{{ item.title }}</div>
		<div v-if="slide"
		     class="collections__item-text">{{ item.text }}
		</div>
		<img v-if="!slide"
		     class="collections__item-image lazyload"
		     :data-src="require(`~/assets/img/body-types-${item.slug}.webp`)">
		<div v-else
		     class="collections__slide">
			<img class="collections__slide-car lazyload"
			     :data-src="require(`~/assets/img/slider/element-${item.id}.svg`)"
			     alt="">
			<img class="collections__slide-element lazyload"
			     :data-src="require(`~/assets/img/slider/slide-${item.id}.png`)"
			     alt="">
		</div>
	</nuxt-link>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	props: {
		item: Object,
		slide: Boolean,
		black: Boolean,
	},
	computed: {
		...mapGetters({
			catalogRoute: 'settings/catalogRoute'
		}),
		currentRoute() {
			let route = ''
			if (this.item.slug === 'sale') {
				route = `/credit`
			}
			if (this.item.slug === 'sedan') {
				route = `/${this.catalogRoute}?bodyType=2`
			}
			if (this.item.slug === 'allroad') {
				route = `/${this.catalogRoute}?bodyType=1`
			}
			if (this.item.slug === 'hatchback') {
				route = `/${this.catalogRoute}?bodyType=3`
			}
			if (this.item.slug === 'liftback') {
				route = `/${this.catalogRoute}?bodyType=5`
			}
			if (this.item.slug === 'wagon') {
				route = `/${this.catalogRoute}?bodyType=6`
			}
			if (this.item.slug === 'credit') {
				route = '/credit'
			}
			return route
		}
	}
}
</script>