<template>
	<div class="tech"
	     :class="techClass">
		<div v-for="tech in techs"
		     :key="tech.slug"
		     class="tech__item" :class="{'tech__item--small':( small || short) && !tech.small }">
			<div class="tech__item-name">
				{{ tech.name }}:
			</div>
			<div class="tech__item-info">
				{{ offer[tech.slug].title || offer[tech.slug] | numberFormat }} {{ tech.postfix }}
			</div>
		</div>
	</div>
</template>

<script>
import filters from "@/mixins/filters";

export default {
	props: {
		offer: Object,
		short: Boolean,
		long: Boolean,
		offerPage: Boolean,
		small: Boolean,
	},
	data() {
		return {
			techs: [
				{
					name: 'Пробег',
					slug: 'run',
					postfix: 'км',
					small: true
				},
				{
					name: 'Объем двигателя',
					slug: 'engine_volume',
					postfix: 'л.',
					small: false
				},
				{
					name: 'Мощность',
					slug: 'engine_power',
					postfix: 'л.с.',
					small: true
				},
				{
					name: 'Коробка',
					slug: `gearbox`,
					postfix: '',
					small: true
				},
				{
					name: 'Кол-во владельцев',
					slug: `owner`,
					postfix: '',
					small: true
				},
				{
					name: 'Тип двигателя',
					slug: `engineType`,
					postfix: '',
					small: true
				},
				{
					name: 'Привод',
					slug: `driveType`,
					postfix: '',
					small: true
				},
				{
					name: 'Тип кузова',
					slug: `bodyType`,
					postfix: '',
					small: false
				},
				{
					name: 'Цвет',
					slug: `color`,
					postfix: '',
					small: false
				},
			]
		}
	},
	mixins: [filters],
	computed: {
		techClass() {
			return this.short ? 'tech--short' : this.offerPage ? 'tech--offer-page' : this.small ? 'tech--offer-small' : 'tech--long'
		}
	}
}
</script>