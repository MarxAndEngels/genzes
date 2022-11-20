<template>
	<div class="offers" v-if="!noData">
		<div class="offers__line"
		     v-if="offers.length">
			<offer-mini v-if="offer.images.length" v-for="offer in offers"
			            :key="offer.id"
			            :offer="offer" />
		</div>
		<div class="offers__line offers__line--skeleton"
		     v-else>
			<skeleton-offer v-for="item in 6"
			                :key="item" />
		</div>
		<!--<client-only>-->
		<!--  <paginate-->
		<!--    v-if="offers.last_page > 1 && hasPagination"-->
		<!--    :page-count="offers.last_page"-->
		<!--    :click-handler="clickCallback"-->
		<!--    :prev-text="'Назад'"-->
		<!--    :next-text="'Вперед'"-->
		<!--    :container-class="'pagination'">-->
		<!--  </paginate>-->
		<!--</client-only>-->
	</div>
	<div class="no__data" v-else>
			Ничего не найдено
	</div>
</template>

<script>

import requests from "@/mixins/requests";
import {mapGetters} from "vuex";

export default {
	mixins: [requests],
	props: {
		limit: Number
	},
	watch: {
		async '$route.query'() {
			await this.getOffers(this.currentParams, true)
		}
	},
	computed: {
		...mapGetters({
			offers: 'offers/offers',
			noData: 'offers/nodata'
		}),
		currentPagination() {
			return Number(this.$route.query.page ? this.$route.query.page : 1)
		},
		currentGearbox() {
			return Number(this.$route.query.gearbox) || null
		},
		currentBodyType() {
			return Number(this.$route.query.bodyType) || null
		},
		currentDriveType() {
			return Number(this.$route.query.driveType) || null
		},
		currentEngineType() {
			return Number(this.$route.query.engineType) || null
		},
		currentYearFrom() {
			return Number(this.$route.query.yearFrom) || null
		},
		currentYearTo() {
			return this.$route
		},
		currentPriceFrom() {
		return Number(this.$route.query.price_from) || null
		},
		currentPriceTo() {
		return Number(this.$route.query.price_to) || null
		},
		currentOwner() {
			return Number(this.$route.query.owners) || null
		},
		currentParams() {
			return {
				mark_slug_array: this.$route.params.mark ? [this.$route.params.mark] : null,
				folder_slug_array: this.$route.params.folder ? [this.$route.params.folder] : null,
				generation_slug_array: this.$route.params.generation ? [this.$route.params.generation] : null,
				gearbox_id_array: this.currentGearbox ? [this.currentGearbox] : null,
				body_type_id_array: this.currentBodyType ? [this.currentBodyType] : null,
				engine_type_id_array: this.currentEngineType ? [this.currentEngineType] : null,
				year_from: this.currentYearFrom,
				price_from: this.currentPriceFrom,
				price_to: this.currentPriceTo,
				page: 1,
				limit: this.limit || 18
			}
		}
	},
	methods: {
		sortClick(item) {
			this.sortActive = false
			this.sort = item.sort
			this.sortSelected = item.title
		},
		creditClick(car) {
			this.choosenCar = car
			this.modal = true
		},
		closeModal() {
			this.modal = false
		},
		clickCallback(pageNum) {
			// this.isLoading = false
			this.$router.push({query: {page: pageNum}});
		},
	},
	async fetch() {
		await this.getOffers(this.currentParams, true)
	},
}
</script>