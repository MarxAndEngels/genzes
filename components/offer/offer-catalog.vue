<template>
	<div
			class="offer__catalog"
			:class="{'offer__catalog--long': view === 'long'}"
			v-if="offer">
		<offer-slider
				@click="moreClick"
				:images="offer.images" />
		<div class="offer__catalog-info">
			<offer-controls
					:short="view === 'short'"
					:long="view === 'long'"
					:offer="offer" />
			<offer-title
					@click="moreClick"
					:to="offerRoute"
					:long=" view==='long'"
					:offer="offer"
					:short="view === 'short'" />
			<tech-info
					:short="view === 'short'"
					:long="view === 'long'"
					:offer="offer" />
			<offer-price
					:short="view === 'short'"
					:long="view==='long'"
					:offer="offer" />
			<offer-buttons
					:to="offerRoute"
					:offer="offer"
					:short="view=== 'short'"
					:long="view==='long'" />
		</div>
	</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	computed: {
		...mapGetters({
			likesArray: 'favorite/likesArray',
			catalogRoute: 'settings/catalogRoute',
			view: 'view/view'
		}),
		offerRoute() {
			return `/${this.catalogRoute}/${this.offer.mark.slug}/${this.offer.folder.slug}/${this.offer.external_id}`
		}
	},
	props: {
		offer: Object
	},
	methods: {
		async moreClick() {
			await this.$router.push(this.offerRoute)
		}
	}
}
</script>