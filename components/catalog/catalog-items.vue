<template>
	<div class="catalog__items">
		<div class="catalog__items-line" v-if="offers.length">
			<offer-catalog v-for="offer in offers"
			            :key="offer.id"
			            :offer="offer" />
		</div>
		<div class="catalog__items-line" v-else>
			<skeleton-offer v-for="item in 6"
			                :key="item" />
		</div>
	</div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";
import offerFilters from '~/apollo/queries/offer/offerFilters.gql'
import filters from "~/apollo/queries/offer/filters";
import offers from "~/apollo/queries/offer/offers";
import OfferCatalog from "@/components/offer/offer-catalog";

export default {
	props: {
		limit: Number,
		sort: String
	},
	watch: {
		async '$route'() {
			await this.getOffers()
		}
	},
	computed: {
		...mapGetters({
			offers: 'offers/offers'
		}),
		currentPagination() {
			return Number(this.$route.query.page ? this.$route.query.page : 1)
		},
	    currentPriceFrom() {
		return Number(this.$route.query.price_from) || null
		},
		currentPriceTo() {
		return Number(this.$route.query.price_to) || null
		},
		currentVariables() {
			return {
				mark_slug_array: this.$route.params.mark ? [this.$route.params.mark] : null,
				folder_slug_array: this.$route.params.folder ? [this.$route.params.folder] : null,
				generation_slug_array: this.$route.query.generation ? [this.$route.query.generation] : null,
				gearbox_id_array: this.$route.query.gearbox ? [Number(this.$route.query.gearbox)] : null,
				body_type_id_array: this.$route.query.bodyType ? [Number(this.$route.query.bodyType)] : null,
				engine_type_id_array: this.$route.query.engineType ? [Number(this.$route.query.engineType)] : null,
				sort: this.sort ? this.sort : this.$route.query.sort ? this.$route.query.sort : null,
				year_from: Number(this.$route.query.yearFrom),
				page: this.currentPagination,
				price_from: this.currentPriceFrom,
				price_to: this.currentPriceTo,
				limit: this.limit || 12
			}
		}
	},
	methods: {
		...mapActions({
			request: 'request/request'
		}),
		...mapMutations({
			setOffersInfo: 'offers/SET_OFFERS_INFO',
			setOffers: 'offers/SET_OFFERS'
		}),
		async getOffers() {
			await this.setOffers([])
			try {
				let response = await this.request({
					query: offers,
					variables: this.currentVariables
				})
				this.setOffersInfo(response.data.offers)
				this.setOffers(response.data.offers.data)
			} catch (error) {
				console.log(error)
			}
		},
	},
	async fetch() {
		await this.getOffers()
	}
}
</script>