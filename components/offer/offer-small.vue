<template>
	<div class="offer__small">
		<img class="offer__small-image"
		     v-for="image in offer.images"
		     :key="image.small_webp"
		     data-fancybox="gallery"
		     :data-src="image.original"
		     :src="image.small_webp" />
		<svg-icon name="search"
		          class="offer__small-scale" />
		<div class="offer__small-info">
			<div class="offer__small-name">
				<offer-title small :offer="offer"/>
				<buttons-chose v-if="chose"
				               @click="$emit('chose')" />
			</div>
			<offer-price small
			             :offer="offer" />
			<tech-info small :offer="offer"/>
		</div>
	</div>
</template>

<script>
import filters from "@/mixins/filters";

export default {
	mixins: [filters],
	props: {
		offer: Object,
		chose: Boolean
	}
}
</script>