<template>
	<div class="offer__page-complectation">
		<h2 class="h2__title h2__title--no-margin-top">
			Комплектация
		</h2>
		<div class="complectation"
		     v-for="(item, index) in offer.equipment_groups"
		     :key="index">
			<div class="complectation__title"
			     v-if="item.values"> {{ item.title }}
			</div>
			<div v-for="(value, i) in item.values"
			     :key="i">
				<div class="complectation__item">
					{{ value }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import filters from "@/mixins/filters";

export default {
	data() {
		return {
			tabActive: 0,
			tabs: [
				{
					title: 'Характеристики',
					showMobile: false,
					isData: true
				},
				{
					title: 'Комплектация',
					showMobile: false,
					isData: !!this.offer?.equipment_groups.length // проверка на наличие комплектации
				},
				{
					title: 'Преимущества',
					showMobile: true,
					isData: true
				},
				// {
				// 	title: 'Проверка VIN',
				// 	showMobile: true,
				// 	autoteka: true,
				// 	isData: true
				// },
			]
		}
	},
	mixins: [filters],
	props: {
		offer: Object
	},
	methods: {
		tabClick(index) {
			this.tabActive = index
		}
	}
}
</script>
