<template>
	<div class="offer__controls"
	     :class="currentClass">
		<buttons-like :id="offer.external_id" />
		<buttons-autoteka :show-text="page"
		                  :offer="offer" />
	</div>
</template>

<script>
export default {
	props: {
		offer: Object,
		short: Boolean,
		long: Boolean,
		small: Boolean,
		page: Boolean,
	},
	computed: {
		currentClass() {
			return this.short
					? 'offer__controls--short' :
					this.long
							? 'offer__controls--long' :
							this.page ? 'offer__controls--page' : ''
		}
	}
}
</script>