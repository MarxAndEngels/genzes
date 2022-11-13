<template>
	<div class="catalog__items catalog__items--favorite">
		<div class="catalog__items-line" v-if="liked_offers.length">
			<offer-catalog v-for="offer in liked_offers"
			              :key="offer.id"
			              :offer="offer" />
		</div>
		<div v-else>
			<img class="favorite__img" src="~/assets/img/favorite.webp"
			     alt="favorite">
		</div>
	</div>
</template>

<script>
import requests from "@/mixins/requests";

export default {
	mixins: [requests],
	data() {
		return {
			loading: true,
			liked_offers: []
		}
	},
	mounted() {
		let external_id_array = localStorage.getItem('likes').split(',').map(i => Number(i))
		if (process.client && localStorage.getItem('likes')) {
			let variables = {
				external_id_array,
				limit: 0,
				page: 1
			}
			this.getFavoriteOffers(variables).then(result=>{
				this.liked_offers = result
			})
		} else {
			this.loading = false
		}
	}
}
</script>