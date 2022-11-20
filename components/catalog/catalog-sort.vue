<template>
	<div class="catalog__sort"
	     tabindex="1"
	     @focusout="open=false"
	     :class="{'catalog__sort--open':open}">
		<div class="catalog__sort-data" @click="open = !open">
			{{activeSort}}
			<svg-icon name="sort"/>
		</div>
		<div class="catalog__sort-item"
		     :class="{'catalog__sort-item--active':isActive(item)}"
		     @click="sort(item)"
		     v-for="item in items"
		     :key="item.title">
			{{ item.title }}
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			items: [
				{
					title: 'Сначала дешевле',
					slug: 'price|asc',
				},
				{
					title: 'Сначала дороже',
					slug: 'price|desc'
				},
				{
					title: 'Год новее',
					slug: 'year|desc'
				},
				{
					title: 'Год старше',
					slug: 'year|asc'
				},
				{
					title: 'Пробег',
					slug: 'run|asc'
				},
			],
			activeSort: 'Сначала дешевле',
			open: false
		}
	},
	methods: {
		sort(item) {
			this.activeSort = item.title
			this.open = false
			console.log(item)
			this.$router.push({path: this.$route.fullPath, query: { page: 1,sort: item.slug}})
		},
		isActive(item) {
			return this.$route.query.sort === item.slug
		}
	}
}
</script>