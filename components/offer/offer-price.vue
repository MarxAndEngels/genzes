<template>
	<div class="offer__price"
	     :class="currentClass">
		<div class="offer__price-actual">{{ offer.price | numberFormat }} ₽</div>
		<div class="offer__price-credit">{{ creditPrice | numberFormat }} ₽/мес.</div>
		<tippy-question v-if="page" text="Цена актуальна при покупке в кредит"/>
		<!--<div class="offer__price-old"></div>-->
	</div>
</template>

<script>
import filters from "@/mixins/filters";
import {mapGetters} from "vuex";

export default {
	mixins: [filters],
	props: {
		offer: Object,
		short: Boolean,
		long: Boolean,
		page: Boolean,
		small: Boolean
	},
	computed: {
		...mapGetters({
			settings: 'settings/settings'
		}),
		currentClass() {
			return this.short ? 'offer__price--short'
					: this.long ? 'offer__price--long'
							: this.page ? 'offer__price--page'
									: this.small ? 'offer__price--small' : ''
		},
		creditPrice() {
			let percent = Number(this.settings.credit_percent.split('%')[0]);
			let n = 84;
			let coef_i = percent / 12 / 100;
			let K = (coef_i * Math.pow(1 + coef_i, n)) / (Math.pow(1 + coef_i, n) - 1);
			return Math.round(K * this.offer.price);
		}
	}
}
</script>