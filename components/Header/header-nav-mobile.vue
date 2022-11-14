<template>
	<ul class="header__nav"
	    :class="{'header__nav--active':active}">
		<li class="header__link"
		    v-for="item in nav"
		    :key="item.to">
			<nuxt-link :to="`/${item.to}`"
			           @click.native="$emit('click')">
				{{ item.title }}
			</nuxt-link>
		</li>
	
	</ul>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	computed: {
		...mapGetters({
			catalogRoute: 'settings/catalogRoute'
		}),
		nav() {
			return [
				{
					title: 'Каталог',
					to: this.catalogRoute
				},
				{
					title: 'Автокредит',
					to: 'credit'
				},
				{
					title: 'Trade-in',
					to: 'exchange'
				},
				{
					title: 'Выкуп',
					to: 'buyout'
				},
				{
					title: 'Контакты',
					to: 'contacts'
				},
				{
					title: 'Отзывы',
					to: 'reviews'
				},
				{
					title: 'Банки',
					to: 'banks'
				},
				{
					title: 'Об автосалоне',
					to: 'about'
				},
			]
		}
	},
	props: {
		active: Boolean
	}
}
</script>