<template>
	<div class="offer__title offer__title--small" v-if="small">
		<div class="offer__title-name">{{offer.name}}</div>
	</div>
	<div class="offer__title offer__title--long" v-else-if="long">
		<div class="offer__title-mark">{{offer.name}}</div>
	</div>
	<div @click="$emit('click')" class="offer__title offer__title--short" v-else-if="short">
		<div class="offer__title-mark">{{offer.mark.title}}</div>
		<div class="offer_year">{{offer.year}} г.</div>
		<div class="offer__title-newline">
			<div class="offer__title-folder">{{offer.folder.title}}, </div>
			<div class="offer__title-power">{{offer.engine_volume}} л.</div>
		</div>
	</div>

</template>

<script>
export default {
	props: {
		offer: Object,
		short: Boolean,
		long: Boolean,
		small: Boolean,
	}
}
</script>