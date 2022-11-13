<template>
	<div v-if="short"
	     class="offer__buttons offer__buttons--page">
		<buttons-credit :offer="offer" />
		<buttons-info :to="to" />
			<buttons-callback :offer="offer" />
	</div>
	<div v-else-if="page"
	     class="offer__buttons offer__buttons--page">
		<buttons-credit :offer="offer" />
		<buttons-tradein :offer="offer" />
		<buttons-callback :offer="offer" />
	</div>
	<div v-else-if="small"
	     class="offer__buttons offer__buttons--small">
		small
	</div>
</template>

<script>
export default {
	props: {
		to: String,
		offer: Object,
		short: Boolean,
		long: Boolean,
		small: Boolean,
		page: Boolean,
	}
}
</script>