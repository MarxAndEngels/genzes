<template>
	<client-only>
		<carousel
				class="offer__page-slider"
				:dots="false"
				:nav="true"
				@changed="changed"
				:responsive="{0:{items:1},748:{items:2}}"
				:margin="16"
				loop>
			<img class="offer__page-slide"
			     :key="image.medium_webp"
			     v-for="image in images"
			     :src="image.medium_webp"
			     :data-src="image.original"
			     data-fancybox="gallery"
			     alt="фото автомобиля" />
		</carousel>
	</client-only>
</template>

<script>

export default {
	data() {
		return {
			ready: false
		}
	},
	methods: {
		changed() {
			console.log(112121)
		}
	},
	props: {
		images: Array
	},
}
</script>
